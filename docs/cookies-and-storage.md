# Cookies and Storage Audit

Date: 2026-09-23 (updated for static build)

## Categories

### TECHNICAL STORAGE
| Mechanism | Present | Purpose | Consent |
|---|---|---|---|
| cookies | No | None | Not applicable |
| localStorage | `theme`, `lang` (user preferences only) | Theme + language persistence | Not required (non-essential, harmless) |
| sessionStorage | No | None | Not applicable |
| IndexedDB | No | None | Not applicable |
| service worker / Cache API | No | None | Not applicable |

### USER PREFERENCE STORAGE
| Key | Value | Rationale |
|---|---|---|
| `theme` | `"dark"` or `"light"` | Remembers manual theme choice |
| `lang` | `"fr"` or `"en"` | Remembers manual language choice |

Neither key stores personal data. No consent mechanism is required.

### NOT IMPLEMENTED
- analytics
- pixels / marketing tags
- session replay
- third-party embeds
- remote fonts (system fonts only)
- external scripts

## Rule

Do not add a cookie banner simply because this document exists.

When an integration adds tracking, storage, or marketing tags, update this
inventory first and evaluate whether consent controls are applicable before
implementation.

The theme and language preferences above are the only localStorage usage
and are purely cosmetic/UX.