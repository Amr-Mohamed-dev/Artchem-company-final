---
name: ArtChem Product Structure
description: How products, categories, and routing are organized in this project.
---

The Product type uses `category` and `subcategory` string IDs (not `categoryId`).
Full type also includes `categoryName`, `subcategoryName`, `description`, `gallery`, `features`, `specifications`, `applications`.

Category data lives in `src/data/categories.ts` as `productCategories` (ProductCategory[]).
Product data lives in `src/data/products.ts`.

Main categories: `epoxy` | `powder`
Epoxy subcategories: `resin` | `hardener` | `accelerators` | `additives`
Powder subcategories: `construction-powders` | `industrial-powders`

Routes:
- `/products` → category landing (Products.tsx)
- `/products/category/:categoryId` → ProductCategory.tsx
- `/products/category/:categoryId/:subcategoryId` → ProductSubcategory.tsx
- `/products/:id` → ProductDetail.tsx (must come AFTER category routes)

**Why:** Route order matters — category routes must be declared before the dynamic `:id` route in App.tsx or they'll be swallowed.

WhatsApp message format: multiline with \n, product name on its own line.
