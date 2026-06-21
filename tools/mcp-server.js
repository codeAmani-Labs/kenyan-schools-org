#!/usr/bin/env node
/**
 * Kenyan Schools MCP Server
 * 
 * Model Context Protocol server for data extraction.
 * Provides tools to search, filter, and extract data from the Kenyan Schools Directory.
 * 
 * Built and maintained by CodeAmani Labs
 * GitHub Org (primary): https://github.com/codeAmani-Labs/kenyan-schools-org
 * Copy: https://github.com/codeAmani-Solutions/kenyan-schools-org
 * Founder: codeAmani-Solutions (Barnabas Waweru) — https://github.com/codeAmani-Solutions
 * 
 * Usage:
 *   node tools/mcp-server.js  (or via npx after publishing)
 * 
 * Tools:
 * - search_schools: Query with filters
 * - get_school: By slug
 * - list_counties: Get counties with counts
 * - get_stats: Overall directory stats
 */

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { 
  CallToolRequestSchema, 
  ListToolsRequestSchema 
} = require('@modelcontextprotocol/sdk/types.js');

// Use built-in fetch
const fetch = globalThis.fetch;

const API_BASE = process.env.KENYAN_SCHOOLS_API || 'https://kenyanschools.org/api';

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

const server = new Server(
  {
    name: 'kenyan-schools',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'search_schools',
        description: 'Search and filter Kenyan schools. Supports text search, county, tier (National/Extra-County/County), gender, pagination.',
        inputSchema: {
          type: 'object',
          properties: {
            q: { type: 'string', description: 'Search query (name, county, notes)' },
            county: { type: 'string', description: 'Filter by exact county (e.g. Nairobi)' },
            tier: { type: 'string', description: 'National, Extra-County, or County' },
            gender: { type: 'string', description: 'Boys, Girls, Mixed, SNE' },
            limit: { type: 'number', description: 'Max results (default 50, max 200)' },
            offset: { type: 'number', description: 'Pagination offset' },
          },
        },
      },
      {
        name: 'get_school',
        description: 'Get detailed information for a single school by its slug (URL-friendly name).',
        inputSchema: {
          type: 'object',
          properties: {
            slug: { 
              type: 'string', 
              description: 'School slug (e.g. "mama-ngina-girls-high-school" or from search results)' 
            },
          },
          required: ['slug'],
        },
      },
      {
        name: 'list_counties',
        description: 'List all 47 counties with the number of schools in each. Useful for geographical exploration.',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'get_directory_stats',
        description: 'Get overall statistics for the Kenyan Schools Directory (total schools, by tier, etc.).',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args = {} } = request.params;

  try {
    if (name === 'search_schools') {
      const params = new URLSearchParams();
      if (args.q) params.set('q', args.q);
      if (args.county) params.set('county', args.county);
      if (args.tier) params.set('tier', args.tier);
      if (args.gender) params.set('gender', args.gender);
      if (args.limit) params.set('limit', String(args.limit));
      if (args.offset) params.set('offset', String(args.offset));

      const data = await fetchJSON(`${API_BASE}/schools?${params.toString()}`);
      
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              summary: `Found ${data.total} schools${data.count < data.total ? ` (showing ${data.count})` : ''}.`,
              ...data,
            }, null, 2),
          },
        ],
      };
    }

    if (name === 'get_school') {
      if (!args.slug) throw new Error('slug is required');
      
      // Use search with exact slug match for simplicity (or add dedicated endpoint later)
      const data = await fetchJSON(`${API_BASE}/schools?limit=1&q=${encodeURIComponent(args.slug)}`);
      const school = data.schools?.[0];
      
      if (!school) {
        return { content: [{ type: 'text', text: `School with slug "${args.slug}" not found.` }] };
      }
      
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(school, null, 2),
          },
        ],
      };
    }

    if (name === 'list_counties') {
      const data = await fetchJSON(`${API_BASE}/counties`);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(data, null, 2),
          },
        ],
      };
    }

    if (name === 'get_directory_stats') {
      // Reuse counties for stats or make dedicated call
      const [countiesData, sample] = await Promise.all([
        fetchJSON(`${API_BASE}/counties`),
        fetchJSON(`${API_BASE}/schools?limit=1`),
      ]);
      
      const stats = {
        totalSchools: countiesData.totalSchools,
        totalCounties: countiesData.totalCounties,
        generated: new Date().toISOString(),
        note: 'For detailed tier/gender breakdowns use search_schools with filters or the web UI.',
      };
      
      return {
        content: [{ type: 'text', text: JSON.stringify(stats, null, 2) }],
      };
    }

    throw new Error(`Unknown tool: ${name}`);
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `Error: ${error.message}`,
        },
      ],
      isError: true,
    };
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Kenyan Schools MCP server running on stdio');
}

main().catch((error) => {
  console.error('MCP Server error:', error);
  process.exit(1);
});
