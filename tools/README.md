# Kenyan Schools Tools (MCP + CLI)

**Built and maintained by CodeAmani Labs** (https://codeamanilabs.org/)

- GitHub Org (primary): https://github.com/codeAmani-Labs/kenyan-schools-org
- Copy in personal: https://github.com/codeAmani-Solutions/kenyan-schools-org
- Founder: codeAmani-Solutions (Barnabas Waweru) — https://github.com/codeAmani-Solutions

Tools for extracting and working with data from the Kenyan Schools Directory.

## Quick Start

```bash
cd tools
npm install

# CLI
node cli.js --help
node cli.js search --county Nairobi --limit 5

# MCP Server
node mcp-server.js
```

## MCP Server

Use via stdio with compatible tools.

Built by CodeAmani Labs — Founder: codeAmani-Solutions (Barnabas Waweru).

Example configuration:

```json
{
  "mcpServers": {
    "kenyan-schools": {
      "command": "node",
      "args": ["/path/to/kenyan-schools-org/tools/mcp-server.js"]  # Update path; primary repo at codeAmani-Labs org, copy at codeAmani-Solutions
    }
  }
}
```

Available tools:
- `search_schools(q, county, tier, gender, limit, offset)`
- `get_school(slug)`
- `list_counties()`
- `get_directory_stats()`

The MCP server talks to the live public API at https://kenyanschool.org/api (configurable via `KENYAN_SCHOOLS_API` env var).

## CLI Commands

- `search` — powerful search + filters + multiple output formats
- `counties`
- `school <slug>`
- `stats`

## Public API

The same data is available to everyone:

- GET /api/schools?... (see main README)
- GET /api/counties

## Development

- Data comes from the main Next.js app (Prisma + Neon in prod, static JSON fallback in some places).
- Changes to the directory are immediately available via the API.
- Project maintained by CodeAmani Labs — Founder: codeAmani-Solutions (Barnabas Waweru).
