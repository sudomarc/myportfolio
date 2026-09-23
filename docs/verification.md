# Verification Log

## Current release state

The repository is scaffolded on GitHub. Runtime build verification remains UNVERIFIED from the connector environment because package installation/network access is unavailable there.

## Required pre-release checks

| Route | Viewport | Browser | Expected | Evidence |
|---|---|---|---|---|
| / | mobile | Chromium | no overflow, CTA usable | PENDING |
| / | desktop | Chromium | hierarchy and layout intact | PENDING |
| /work/amplio-web | mobile | Chromium | case study readable | PENDING |
| /mentions-legales | mobile | Chromium | text readable | PENDING |
| /confidentialite | mobile | Chromium | text readable | PENDING |
| /cookies | mobile | Chromium | inventory visible | PENDING |
| invalid route | mobile | Chromium | 404 page | PENDING |

## Automated checks

- npm run lint — PENDING
- npm run typecheck — PENDING
- npm run build — PENDING

Do not mark a check VERIFIED until it has been executed and its result observed.