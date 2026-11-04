# Khedar website (khedar.io)

Static Astro + TypeScript site. Pages: Home, Services, 8 service pages, About, Contact, 404.

## Configure
Company details live in `src/config/site.ts`; service copy lives in `src/data/services.ts`.
Contact details are read at **build time** from `PUBLIC_*` env vars (see `.env.example`). Every value is public
and ends up in the HTML, so never put secrets in them. Unset values are hidden:
- `PUBLIC_CONTACT_EMAIL` / `PUBLIC_WHATSAPP_NUMBER`: links appear only when these are set.
- `PUBLIC_FORM_ENDPOINT`: when empty, the contact form shows "Online submission is not available yet" and never fakes success.
- `PUBLIC_LINKEDIN_URL`, `PUBLIC_X_URL`, `PUBLIC_GITHUB_URL`: footer links and JSON-LD `sameAs`.

## Local development
```bash
npm ci
cp .env.example .env   # optional
npm run dev            # http://localhost:4321
npm run build          # outputs dist/
npm run preview
node scripts/verify.mjs  # with preview running: crawl, overflow, menu, form checks + screenshots (needs Chrome at /usr/bin/google-chrome)
```

## Connect a form endpoint (e.g. Formspree)
1. Create a form at formspree.io and copy its endpoint (`https://formspree.io/f/XXXX`).
2. Set `PUBLIC_FORM_ENDPOINT` to that URL in Render env vars, then redeploy.
The form POSTs `FormData` (name, email, company, service, message, `_gotcha` honeypot) with `Accept: application/json`.
A 2xx response shows success; any other result shows an error. Any service that accepts that request (Basin, Getform, your own API) works.

## Deploy to Render (Static Site)
- New → Static Site → connect the repo
- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Environment: `NODE_VERSION=20` plus the `PUBLIC_*` vars above
- Custom domain: add `khedar.io` (and `www`), then set the DNS records Render shows
- Render serves `dist/404.html` for unknown routes automatically.
Optional `render.yaml` is included.

## Content rules
"20 years" means overall technology experience. Do not add clients, testimonials, awards, certifications, project counts,
volumes, partnerships, audit results, regulatory approvals or guarantees unless they are real and verified.
Legal pages (privacy, terms) are intentionally not published until real text is supplied.
