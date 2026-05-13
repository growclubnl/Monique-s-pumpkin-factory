# NPM scripts — cheat sheet

Alle commando’s vanuit de projectroot (`Monique-s-pumpkin-factory/`).

| Command | Wat het doet |
|--------|----------------|
| `npm run dev` | Start **development server** (Next.js met **Turbopack**). Standaard: [http://localhost:3000](http://localhost:3000). |
| `npm run build` | **Productie-build** (`next build`): compile, lint/types, static pages. Gebruik dit vóór deploy. |
| `npm run start` | Start **productie-server** na een build. Eerst `npm run build`, dan `npm run start` (zelfde poort als `dev`, meestal 3000). |
| `npm run lint` | Draait **ESLint** over het project. |

## Handige combinaties

```bash
# Lokaal werken
npm run dev

# Controleren of alles bouwt (zoals CI)
npm run build

# Productie lokaal testen
npm run build && npm run start
```

## Als de build vastloopt of raar doet

```bash
rm -rf .next && npm run build
```

---

*Scripts staan in `package.json` onder `"scripts"`.*
