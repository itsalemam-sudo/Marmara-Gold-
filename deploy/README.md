# Deploying Marmara Gold to your server

The site is a fully static Vite build — no Node runtime, no database, no
API keys. You can serve it from any HTTP server. Below are the two most
common paths.

---

## 1. Static nginx (recommended)

**On your workstation:**

```bash
git clone git@github.com:itsalemam-sudo/Marmara-Gold-.git
cd Marmara-Gold-
git checkout claude/new-session-srajt4
npm ci
npm run build
# The build produces ./dist — that's what you upload.
```

**Upload the dist folder to the server** (change host + user + path to
match yours):

```bash
rsync -avz --delete dist/ user@host:/var/www/marmara-gold/
```

**Nginx config** — an example server block is in `deploy/nginx.conf`.
Copy it to `/etc/nginx/conf.d/marmaragold.conf`, edit the `root` path
and TLS cert paths, then:

```bash
sudo nginx -t          # verify the config parses
sudo systemctl reload nginx
```

Point DNS at the server (A record for `marmaragold.ae` and
`www.marmaragold.ae`) and issue a Let's Encrypt certificate:

```bash
sudo certbot --nginx -d marmaragold.ae -d www.marmaragold.ae
```

---

## 2. Straight upload of a pre-built tarball

If you don't want to install Node on the server, build locally and just
send the tarball:

```bash
# Locally
npm ci && npm run build
tar -C dist -czf marmara-gold-dist.tar.gz .

# Copy up
scp marmara-gold-dist.tar.gz user@host:/tmp/

# On the server
sudo mkdir -p /var/www/marmara-gold
sudo tar -xzf /tmp/marmara-gold-dist.tar.gz -C /var/www/marmara-gold/
sudo chown -R www-data:www-data /var/www/marmara-gold
```

Then follow the nginx step from path 1.

---

## Environment / secrets

There are none. The current build is 100% static:

- Live ticker values are hard-coded in `src/data/ticker.ts`.
- Contact form CTAs are `mailto:` links.
- Solutions / Leadership / Services copy lives in `src/data/*.ts`.

When you wire a real live-price feed or a form-submission backend, add
the endpoint URL to `.env.example`, then read it via
`import.meta.env.VITE_...` in the code.

---

## Ongoing changes

Edit content in `src/data/*.ts` (nav, ticker, stats, capabilities,
whyChoose, clients, solutions, careers, footer, services, team,
contact), rebuild, and redeploy. The typed data layer means content
edits never touch JSX.
