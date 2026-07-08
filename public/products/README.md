# Product photos

Drop product photos in this folder and the Products catalogue picks
them up automatically. No code change required.

## Naming

Files must be JPGs named after the product slug in `src/data/catalog.ts`:

| Product slug             | File to drop here            |
| ------------------------ | ---------------------------- |
| `gold-1kg-cast`          | `gold-1kg-cast.jpg`          |
| `gold-500g-cast`         | `gold-500g-cast.jpg`         |
| `gold-100g-minted`       | `gold-100g-minted.jpg`       |
| `gold-50g-minted`        | `gold-50g-minted.jpg`        |
| `gold-10-tola`           | `gold-10-tola.jpg`           |
| `gold-1oz-coin`          | `gold-1oz-coin.jpg`          |
| `silver-1kg-cast`        | `silver-1kg-cast.jpg`        |
| `silver-100g-minted`     | `silver-100g-minted.jpg`     |
| `silver-1oz-coin`        | `silver-1oz-coin.jpg`        |
| `platinum-1kg-cast`      | `platinum-1kg-cast.jpg`      |
| `platinum-100g-minted`   | `platinum-100g-minted.jpg`   |
| `palladium-1kg-cast`     | `palladium-1kg-cast.jpg`     |

## Rules

- Format: **JPG** (extension exactly `.jpg`, lowercase).
- Aspect ratio: **4 : 3** (e.g. 1200 × 900 px).
- Weight: aim for **150 – 250 KB per file** — anything smaller is fine,
  larger will slow first paint.
- Use a plain / studio background so the product reads at any card size.

## What happens if I don't add a photo?

The catalogue keeps showing the current SVG placeholder for that
product. Photos and placeholders are per-product, so you can add them
one at a time.

## Adding a new product without editing code

The card layout is generated from `src/data/catalog.ts`. Add / edit
the array there to change the roster; drop a matching JPG here to
give it a real photo.

## After adding files on the server

```bash
cd /opt/marmara-gold
git pull                       # if the photos are in the repo
npm run build
rsync -a --delete dist/ /var/www/marmara-gold/
chown -R www-data:www-data /var/www/marmara-gold
```

If the photos are only on the server (not committed to git), copy them
into `/opt/marmara-gold/public/products/` before running
`npm run build`.
