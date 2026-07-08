# Product SVG mockups

12 hand-crafted SVGs matching the reference composite (vertical cast
bar with top seal indent + engraved 1000 g / 999.9 / AU / MARMARA;
polymer-pouch 500 g; navy ornamental assay card for the minted bars;
gold-foil-wrapped 10-tola biscuit; heraldic eagle bullion coin).

Rendered as static assets so `<img src="/products/{slug}.svg">`
serves them without a React re-render. Drop-in JPGs at
`/products/{slug}.jpg` always win — the fallback chain tries JPG
first, SVG second, inline React glyph third.
