# Deployment & Domain Setup (Porkbun + Vercel + Neon + Cloudflare R2)

## Stack
- **Frontend**: Next.js → Vercel
- **Database**: Neon Postgres (via Prisma)
- **Storage**: Cloudflare R2 (evidence files attached to suggestions)
- **GitHub**: Private (code + issues for major discussions)

## 1. Prepare environment variables using Hazina pattern (recommended)

This project follows a **Hazina-style** secure environment variable approach (see `lib/env.ts`):

- Typed, centralized access (`import { env } from '@/lib/env'`)
- Required secrets validated at startup
- Support for encrypted storage + plain env fallback
- Safe for Vercel + local dev

**Steps:**

1. Copy the example:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in the values in `.env.local` (see comments in the file):
   - `DATABASE_URL` (Neon pooled connection string)
   - `ADMIN_SECRET` (long random string)
   - All `CLOUDFLARE_R2_*` values
   - `NEXT_PUBLIC_SITE_URL`
   - `RESEND_API_KEY` (optional but recommended for /apply emails)

3. **Important**: `.env*` files are gitignored. Never commit real secrets.

**For Vercel production:**
- Go to your Vercel project → Settings → Environment Variables
- Add the same keys (Vercel stores and injects them securely/encrypted)
- Redeploy

For even stronger security (Hazina production pattern), you can later:
- Encrypt secrets at rest and decrypt at runtime
- Integrate a dedicated secrets manager (Doppler, Infisical, Cloudflare, etc.)
- See `lib/env.ts` for the extensible loader pattern.

## 2. Set up Neon

1. Create a project at neon.tech
2. Create a database (default is fine)
3. Copy the connection string (with `?sslmode=require`)

## 3. Set up Cloudflare R2

1. Dashboard → R2 Object Storage → Create bucket (e.g. `kenyan-schools-evidence`)
2. Make it public or set up a custom domain / R2.dev URL
3. Create an API token (R2 tokens) with read/write
4. Get Account ID from R2 overview

## 4. Initial data load

After setting `DATABASE_URL`:

```bash
cd web
npx prisma generate
npx prisma db push          # or prisma migrate dev
npm run db:seed
```

## 5. Deploy the site

- Push to private GitHub repo
- Import to Vercel (Root Directory = `web`)
- Add all env vars in Vercel
- Deploy

## 6. Connect your Porkbun domain (kenyanschool.org)

### Recommended: Simple CNAME (no nameserver change)

1. In Porkbun DNS for `kenyanschool.org`:
   - Add record:
     - Type: `CNAME`
     - Host: `@`   (or `www` if you prefer)
     - Target: the value Vercel gives you (usually `cname.vercel-dns.com` or your project slug)
   - Add another for `www` pointing at the same.

2. In Vercel:
   - Go to your project → Settings → Domains
   - Add `kenyanschool.org` and `www.kenyanschool.org`
   - Follow the verification instructions (usually just waiting for DNS propagation)

### Alternative: Use Vercel nameservers (full control)

Porkbun → Nameservers → change to the four Vercel nameservers provided in your project.

## 3. After connecting the domain

- Enable HTTPS (automatic on Vercel)
- Set up a redirect from `www` → apex or vice-versa if desired (can be done with Vercel rewrites)
- GitHub references point to primary organization repo: https://github.com/codeAmani-Labs/kenyan-schools-org (with a maintained copy at https://github.com/codeAmani-Solutions/kenyan-schools-org). Local remotes: `origin` (Labs) + `personal` (Solutions).

## 4. Future: dynamic edits

If you later want live community suggestions to appear immediately without waiting for a deploy:

- Add a Neon Postgres database
- Add a small form POST endpoint + moderation table (or GitHub webhook + auto-merge)

For now the GitHub-driven flow is clean, transparent, and very "open source directory".

## Useful Vercel env (optional)

None required for the current static build.
