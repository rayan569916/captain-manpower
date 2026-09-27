# Captain Manpower — website

Angular 21 (standalone, signals, zoneless) + Tailwind CSS v4.
Styled after the "golden hour editorial" reference: parchment canvas, Midnight Wine
primary buttons and footer, violet links, lilac secondary buttons, one Deep Lagoon band.
The gold Captain mark always sits on wine so it keeps contrast.

## Run

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build → dist/captain-manpower/browser
```

## Pages

| Route       | What it does |
|-------------|--------------|
| `/`         | Hero, sector strip, sector tabs, stats, process, compliance band, CTA |
| `/services` | Engagement models, all five sectors with trades (anchor links `#construction` …) |
| `/talent`   | Filterable candidate pool (search, sector, nationality, availability) + shortlist |
| `/jobs`     | Open vacancies filtered by city/sector, with an inline apply form |
| `/about`    | Stats, worker-welfare commitments, offices |
| `/contact`  | Manpower request form; pre-fills from `?sector=` and `?shortlist=` |

## Where things live

```
src/
  styles.css               Tailwind v4 @theme tokens + button/card/field classes
  app/core/data.ts         ALL dummy content (company info, sectors, candidates, jobs, offices)
  app/core/models.ts       Types
  app/layout/              Announcement bar, sticky blur header, wine footer
  app/shared/              Icon set, logo tile, page intro
  app/pages/*              One standalone component per route (lazy loaded)
public/logo.png            Captain mark (also favicon.png)
```

## Replacing dummy data

Everything placeholder is in `src/app/core/data.ts` — phone numbers, emails, CR/licence
numbers, figures, candidate profiles and vacancies. The forms (`jobs.ts`, `contact.ts`)
have a `// Dummy:` comment where the API call should go.

The hero uses an SVG golden-hour site silhouette (`pages/home/hero-scene.ts`). To use a
real photo, swap that component for a full-bleed `<img>` as noted in its comment.
