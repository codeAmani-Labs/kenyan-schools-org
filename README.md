# Kenyan Schools Directory

**A transparent, accessible, and reliable public data resource for all Kenyan secondary schools.**

Built and maintained by **[CodeAmani Labs](https://codeamanilabs.org/)**.

- GitHub Organization: https://github.com/codeAmani-Labs
- Founder: codeAmani-Solutions (Barnabas Waweru) — https://github.com/codeAmani-Solutions

- 1,127+ schools across all **47 counties** of Kenya
- National, Extra-County, and County schools
- Verified sources, citations, geolocations, and community contributions
- Open API, CLI, and MCP tools for data extraction
- Modern, dynamic platform for public education data

**Official site:** https://kenyanschools.org

---

## Mission (CodeAmani Labs)

CodeAmani Labs builds open public goods that promote:

- **Transparency** — Every entry is sourced and auditable
- **Access** — Free, open data for everyone (parents, students, researchers, policymakers)
- **Modern Tracking** — Dynamic updates, version history, geographic context, structured data for search engines and tools
- **Reliable Public Data** — Community-powered with strict verification

We are establishing a canonical, living reference for Kenya’s education data.

---

## SEO Strategy (How School Names Rank)

The portal is optimized so that searches for school names (even partial), counties, or "schools in Kenya" surface relevant results:

- Individual school pages use exact school names in:
  - URL slugs
  - `<title>` tags (e.g. "School Name (Short) | County County, Kenya Schools")
  - H1 headings
  - Meta descriptions with natural variations
  - JSON-LD structured data (`@type: School` + `name`, `alternateName`, `address`, `geo`, `areaServed: Kenya`, publisher: CodeAmani Labs)

- Sitemap (`/sitemap.xml`) includes every school + county-focused links
- Homepage and Directory emphasize "All 47 Counties" + Kenya-wide searches
- Rich, crawlable content on every page
- Fast static generation for school pages (excellent for indexing)
- Proper robots.txt and canonical URLs

This results in strong visibility in Google, Bing, and other engines for:
- Exact school names
- Partial names ("Ngina Girls", "Kakamega High")
- "Schools in [County] Kenya"
- "Kenyan secondary schools", "KSSSA schools", etc.

---

## Getting Started (Local)

```bash
cd web
npm install
npm run dev
```

Visit http://localhost:3000

**Data** lives in `web/data/schools.json` (seeded to Neon Postgres in production).

---

## Public Data API

Powerful endpoints for extraction:

- `GET /api/schools?q=...&county=...&tier=...&limit=...&format=json|csv`
- `GET /api/counties`
- `GET /api/schools/[slug]`

Full details in the [tools/README.md](tools/README.md) and site footer.

---

## Tools for Developers & Agents

- **CLI**: `cd tools && node cli.js search ...`
- **MCP Server**: `cd tools && node mcp-server.js` (stdio protocol)
- **Apply to Contribute**: https://kenyanschools.org/apply (form + tracked with GitHub/email)
- **Approved Contributors**: https://kenyanschools.org/contributors (opt-in public list)

Built by CodeAmani Labs — Founder: codeAmani-Solutions (Barnabas Waweru).

See `tools/README.md` for full usage.

---

## GitHub Repository

**Primary repository** (CodeAmani Labs GitHub Organization):

https://github.com/codeAmani-Labs/kenyan-schools-org

**Copy / mirror** (kept in founder's personal account):

https://github.com/codeAmani-Solutions/kenyan-schools-org

Maintained by CodeAmani Labs — Founder: codeAmani-Solutions (Barnabas Waweru).

To set up remotes locally after move:
```bash
git remote set-url origin https://github.com/codeAmani-Labs/kenyan-schools-org.git
git remote add personal https://github.com/codeAmani-Solutions/kenyan-schools-org.git  # or set-url if exists
git push origin master
git push personal master
```

**Secrets & Environment Variables**:
- All secrets are in `.env*` files (gitignored)
- Use `.env.example` as template
- Production: Set encrypted variables in Vercel
- Never commit real credentials

---

## Versioning

Current version: **1.0.0**

- Tracked in `web/package.json`
- Displayed in site footer and About page
- Changes documented via Git history

---

## License

See [LICENSE](LICENSE) — CodeAmani License (MIT-based) with attribution to CodeAmani Labs.

Data is intended as an open public resource with proper source attribution.

---

## Contributing

1. Fork the repo (maintained by CodeAmani Labs)
2. Use the Contribute form on the site or open a GitHub issue/PR
3. All contributions must include verifiable sources

Maintained with a focus on transparency and reliability.

---

**Built and maintained by CodeAmani Labs**  
https://codeamanilabs.org/ | GitHub Org: https://github.com/codeAmani-Labs | Founder: codeAmani-Solutions (Barnabas Waweru) | https://kenyanschools.org

For questions about the project or data: visit the site or open an issue on GitHub.

## Features

- Powerful instant search + filters (county, tier, gender)
- Detailed school profiles with citations
- One-click “Suggest edit” on every profile (opens GitHub Issue with context)
- Structured “Add new school” flow
- Export filtered results as JSON
- Fully static, SEO-friendly, zero backend cost at launch

## Quick start (local dev)

```bash
cd web
npm install
npm run dev
```

Visit http://localhost:3000

## Data

The canonical seed data lives in:

- `web/data/schools.csv` — bulk list (original)
- `web/data/schools.json` — normalized + typed (consumed by site)

To regenerate the JSON after editing the CSV:

```bash
cd web
node data/convert-csv.js
```

## Contributing data / edits

1. Browse https://kenyanschools.org
2. Open any school page → click **“Suggest an improvement”**
3. Or use the dedicated [Contribute form](/contribute)
4. Or open a Pull Request directly editing `web/data/schools.json`

All edits must include a verifiable source (URL preferred). This keeps the resource trustworthy.

## Deployment (Vercel + Porkbun)

1. Push this repo to GitHub.
2. Import the `web` folder (or the whole repo) into Vercel.
3. In Vercel, set the **Root Directory** to `web` if you imported the monorepo.
4. Deploy.
5. In Porkbun:
   - Go to your domain `kenyanschools.org`
   - Add a `CNAME` record: `@` or `www` pointing at the Vercel target (e.g. `cname.vercel-dns.com`)
   - Or use Vercel’s nameservers for full management
6. Add the custom domain in your Vercel project settings.

See full instructions in `web/DEPLOY.md` (create one as needed).

## Current Architecture (2026)

- **Frontend**: Next.js 16 on Vercel
- **Database**: Neon Postgres (Prisma ORM)
- **Storage**: Cloudflare R2 (for evidence uploads on edits)
- **Environment Variables**: Hazina-style secure loader (`lib/env.ts`)
- **Auth/Moderation (light)**: ADMIN_SECRET for `/admin/suggestions`
- **GitHub**: Private repo (code + high-level discussion)
- Data edits happen in-app → stored in Neon as **pending** → reviewed & applied

Hybrid rendering:
- Directory uses fast static JSON for snappy filters
- All contributions write live to Neon + R2
- Admin review UI at `/admin/suggestions`

**Hazina for Environment Variables**: Centralized typed access, startup validation, encrypted storage ready with env fallback. See `.env.example` + `web/DEPLOY.md`.

## Philosophy

- Transparent sources for everything
- Anyone can improve it (with evidence)
- Simple, fast, beautiful experience
- Data is a public good

## License

Data is intended for open use with attribution. See individual source citations for terms.

---

Built from the original `kenya_high_schools_directory-v1.0.0.*` seed.

Questions / ideas? Open an issue.

## Data API, MCP & CLI (for Agents & Developers)

### Public Data Extraction API
The directory data is available via a public JSON API:

- `GET https://kenyanschools.org/api/schools`
  - Query params: `q`, `county`, `tier`, `gender`, `limit`, `offset`, `sort`, `format=json|csv`
  - Example: `/api/schools?county=Nairobi&tier=National&limit=10`

- `GET https://kenyanschools.org/api/counties` — List of all counties with counts
- `GET /schools` — Full alphabetical index page (excellent for search engine crawling and name discovery)

Full OpenAPI-style usage is available by visiting the endpoints. The API always reflects the live (Neon) data.

### MCP Server
Provides tools for data extraction (usable with development environments and automation tools):

```bash
# Run the MCP server
cd tools
npm run mcp
```

Exposed tools:
- `search_schools`
- `get_school`
- `list_counties`
- `get_directory_stats`

Use the stdio MCP server pointing at `tools/mcp-server.js`.

### CLI
```bash
cd tools
node cli.js search "commandos" --county Kakamega --limit 5
node cli.js counties
node cli.js school mama-ngina-girls-high-school
node cli.js stats
```

Install globally later via `npm install -g kenyan-schools-tools`.

All tools read from the public API, so they work without local database.
