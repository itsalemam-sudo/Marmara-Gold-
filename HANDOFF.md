# Marmara Precious Metals Group — Website Handoff

Full source code for marmaragold.ae — React 19 + TypeScript + Vite.

## Repository

- GitHub: https://github.com/itsalemam-sudo/Marmara-Gold-
- Branch: `main`
- To clone fresh:
  ```bash
  git clone https://github.com/itsalemam-sudo/Marmara-Gold-.git
  cd Marmara-Gold-
  npm ci
  npm run dev    # local dev server on :5173
  ```

## Tech stack

- React 19, TypeScript 5, Vite 6 (route-level code splitting)
- React Router v6
- Plain CSS Modules (no Tailwind, no CSS-in-JS)
- Google Fonts: Poppins + Cormorant Garamond + JetBrains Mono
- Build-time compression via `vite-plugin-compression`
  (ships `.gz` + `.br` alongside every `.js` / `.css`)

## Build & deploy

Production build:
```bash
npm ci && npm run build
# → outputs to ./dist (static site)
```

Deploy to the Marmara VPS (`76.13.177.229`, Ubuntu 24, nginx 1.24):
```bash
ssh root@76.13.177.229
cd /opt/marmara-gold \
  && git fetch origin main \
  && git reset --hard origin/main \
  && npm ci \
  && npm run build \
  && rsync -a --delete dist/ /var/www/marmara-gold/ \
  && chown -R www-data:www-data /var/www/marmara-gold \
  && nginx -t && systemctl reload nginx
```

## Infrastructure summary

| | |
|---|---|
| Domain | marmaragold.ae (registered via tasjeel.ae) |
| DNS | tasjeel nameservers (ns3/ns4.tasjeel.ae) |
| VPS | 76.13.177.229 (hostname `srv1897125`) |
| OS | Ubuntu 24.04.4 LTS |
| Web | nginx 1.24 with HTTP/2, Let's Encrypt (auto-renewing) |
| Security | ufw (SSH + HTTP + HTTPS only), fail2ban (sshd), HSTS, X-Frame, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |
| Compression | gzip_static + brotli_static (precompressed with the build) |

## nginx site block (reference)

Lives on the VPS at `/etc/nginx/sites-enabled/marmaragold.conf`.
A copy is in `deploy/nginx/marmaragold.conf` in this tree. There is
also a `default_server` block at `/etc/nginx/conf.d/00-block-unknown-hosts.conf`
that returns `444` for any request whose Host header isn't marmaragold.ae
or the IP — neutralises any parked domain pointed at this IP without
permission.

## Public site surface

- Homepage: hero → certifications → about → pillars → product showcase →
  responsible sourcing → global reach → experience band → timeline →
  services → leadership → news teaser → ticker → contact → footer
- Services: `/services/{refining|recycling-recovery|small-bar-production|trading|laboratory-analysis|storage-vaulting}`
- Policies: `/policies/{policy-code}`
- Corporate: `/corporate/{about|leadership|offices|careers}`
- News index: `/news`

Products catalogue page was intentionally removed — product tiles on
the homepage are display-only.

## Key design decisions

- **No placeholder "live" data** — earlier shipped placeholder spot
  prices and "LIVE" badges that weren't backed by a licensed market
  feed. All removed. Wire any future live data to a real feed first.
- **Platinum + palladium bars show "Swiss refined"** in the product
  tile detail — the supplied photos are third-party refinery bars
  (PMP, CHI), not Marmara-branded.
- **Leadership section is a placeholder** until confirmed names and
  photos are supplied. Component is `src/components/Leadership/`.
- **Brand assets** are in `public/logos/`, product photos in `public/products/`.

## Credentials & secrets

**None are in this tree.** The site is static — no API keys, no DB
connection strings, no runtime secrets.

The VPS has:
- A Let's Encrypt cert (auto-renews via systemd timer)
- An ssh root password — should be migrated to SSH-key-only auth before
  being handed to a third party

## What's still open

See `deploy/README.md` for the operational checklist. In summary:
- Register defensive domains (marmaragold.com, .co, common typos)
- Confirm Leadership roster + supply photos
- Confirm product specifications for the showcase tile copy
