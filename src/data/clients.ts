/**
 * 10 institutional client types — numbered in the UI.
 * Order matters (matches the HTML numbering 01…10).
 */
export const clients: readonly string[] = [
  "Bullion dealers & wholesalers",
  "Jewelry manufacturers & retailers",
  "Refineries & smelters",
  "Mining companies",
  "Private investors & HNWIs",
  "Financial institutions & banks",
  "Governments & central banks",
  "Family offices & wealth managers",
  "Logistics & vaulting providers",
  "Exchanges & trading platforms",
] as const;
