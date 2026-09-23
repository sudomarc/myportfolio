# Cookies and Storage Audit

Date: 2026-09-23

## Categories

### TECHNICAL STORAGE
| Mechanism | Present | Purpose | Consent |
|---|---|---|---|
| cookies | No | None | Not applicable |
| localStorage | `theme`, `lang`, `sudomarc:cookie-note-dismissed` | Theme, language, and privacy-note dismissal | Information only; no non-essential tracking |
| sessionStorage | No | None | Not applicable |
| IndexedDB | No | None | Not applicable |
| service worker / Cache API | No | None | Not applicable |

### THIRD-PARTY CONTENT
| Surface | Present | Data-flow note |
|---|---|---|
| Embedded project previews | Yes | GitHub Pages pages are loaded in iframes; the browser contacts those external sites directly and their own storage/policies may apply. |
| Remote fonts / scripts | No | System fonts and local JavaScript only |
| Analytics / pixels / replay | No | None implemented |

### USER PREFERENCE STORAGE
| Key | Value | Rationale |
|---|---|---|
| `theme` | `"dark"` or `"light"` | Remembers manual theme choice |
| `lang` | `"fr"` or `"en"` | Remembers manual language choice |
| `sudomarc:cookie-note-dismissed` | `"1"` | Remembers that the informational privacy/cookie notice was closed |

These values are stored locally in the browser. The portfolio does not send them to its own server.

## CONSENT
The site displays an informational privacy/cookie notice inspired by the Amplio Web legal-note pattern. It is not a consent gate because the portfolio itself currently deploys no non-essential cookies, analytics, pixels, or session replay.

If a future integration introduces technology subject to consent, update this inventory and implement the applicable consent gating before activation.

## RULE

Audit this inventory whenever adding analytics, marketing tags, external embeds, new storage, or third-party scripts.
