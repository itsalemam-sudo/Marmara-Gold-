# Deploying Marmara Gold to your server

The site is a fully static Vite build — no Node runtime, no database, no
API keys. You can serve it from any HTTP server. Below are the two most
common paths.

---

## 1. Build on the server (recommended for a single-VPS setup)

Do this once, on the server:

```bash
# --- prerequisites ---
apt update
apt install -y git nginx
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs

# --- clone + build ---
mkdir -p /opt/marmara-gold
cd /opt/marmara-gold
git clone https://github.com/itsalemam-sudo/Marmara-Gold-.git .
git checkout claude/new-session-srajt4
npm ci
npm run build

# --- publish the built dist ---
mkdir -p /var/www/marmara-gold
rsync -a --delete dist/ /var/www/marmara-gold/
chown -R www-data:www-data /var/www/marmara-gold

# --- HTTP-only bootstrap (works BEFORE DNS + TLS) ---
cp deploy/nginx-http.conf /etc/nginx/sites-available/marmaragold.conf
ln -sf /etc/nginx/sites-available/marmaragold.conf /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

# The site is now live over HTTP at the server's public IP.
curl -sI http://localhost/     # should return HTTP/1.1 200
```

## Pointing marmaragold.ae at the server

Log in to the tasjeel.ae DNS manager for the domain. Find the row with
Host Name `marmaragold.ae.` and Type `A`. Change the Value to the
server's public IP. Optionally drop the TTL to `300` before saving so
propagation is faster while you're iterating.

The `www`, `mail` and `ftp` CNAME records already point at
`marmaragold.ae` — they inherit the A-record change automatically.
Leave the MX record untouched (it routes email to your Tasjeel mail
server, not to this webserver).

Once DNS has propagated (usually 5–60 min after the change):

```bash
dig +short marmaragold.ae
# should return your server's IP
```

**Then add HTTPS** on the server:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d marmaragold.ae -d www.marmaragold.ae \
        --agree-tos --no-eff-email -m webmaster@marmaragold.ae \
        --redirect
```

`certbot` will rewrite the nginx config to include HTTPS + an
auto-redirect from HTTP, and configure the systemd timer that
auto-renews the certificate.

**Re-deploying after a code change:**

```bash
cd /opt/marmara-gold
git pull
npm ci        # only if package-lock.json changed
npm run build
rsync -a --delete dist/ /var/www/marmara-gold/
chown -R www-data:www-data /var/www/marmara-gold
# nginx picks up the new files immediately — no reload needed.
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
