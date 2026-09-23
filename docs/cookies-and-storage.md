# Cookies and Storage Audit

Date: 2026-09-23

## Initial inventory

| Mechanism | Present | Purpose | Consent |
|---|---|---|---|
| cookies | No evidence in initial source | None planned | Not applicable at current state |
| localStorage | No evidence in initial source | None | Not applicable |
| sessionStorage | No evidence in initial source | None | Not applicable |
| IndexedDB | No evidence in initial source | None | Not applicable |
| service worker / Cache API | No evidence in initial source | None | Not applicable |
| analytics | Not implemented | None | Not applicable |
| pixels / marketing tags | Not implemented | None | Not applicable |
| session replay | Not implemented | None | Not applicable |
| third-party embeds | Not implemented | None | Not applicable |
| remote fonts | Not implemented in initial UI | None | Not applicable |

## Rule

Do not add a cookie banner simply because this document exists.

When an integration adds tracking, storage, embeds or marketing tags, update this inventory first and evaluate whether consent controls are applicable before implementation.