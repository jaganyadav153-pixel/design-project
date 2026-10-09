# Vault Map — Empty Spaces per Domain (25 Tracks)

> You asked: *add empty space later I put files according to that particular domain*. This is that system — ready to use.

## Where to Put Files (File Explorer Visible)

All empty spaces are **already created** as real folders — just open Explorer → drop files.

```
design project/
├─ public/vault/<slug>/          ← PUBLIC URL: /vault/<slug>/
│  ├─ notes/        → Vault slot Notes/PDFs       (e.g., PDFs, PPTs, docs)
│  ├─ videos/       → Vault slot Videos           (mp4 links or text with YouTube URLs)
│  ├─ projects/     → Vault slot Projects         (zips, ideas, starters)
│  ├─ assignments/  → Vault slot Assignments/Interview Kit (Q&A PDFs)
│  ├─ index.json    → optional manifest (auto-list)
│  └─ README.md
└─ uploads/domains/<slug>/                ← BACKEND PRIVATE (not public)
   ├─ notes/, videos/, projects/, assignments/ (same 4)
   └─ .gitkeep
```

## 25 Domain Slugs

| # | Domain | Slug | Slots |
|---|--------|------|-------|
|1|Artificial Intelligence (AI)|`ai`|notes, videos, projects, assignments|
|2|Machine Learning (ML)|`ml`|...|
|3|Data Science|`data-science`|...|
|4|Big Data|`big-data`|...|
|5|Computer Vision|`computer-vision`|...|
|6|NLP|`nlp`|...|
|7|Web Development|`web-development`|...|
|8|Mobile App Development|`mobile-app-development`|...|
|9|Software Engineering|`software-engineering`|...|
|10|Game Development|`game-development`|...|
|11|HCI|`hci`|...|
|12|Cybersecurity|`cybersecurity`|...|
|13|Cloud Computing|`cloud-computing`|...|
|14|Computer Networks|`computer-networks`|...|
|15|DBMS|`dbms`|...|
|16|Operating Systems|`operating-systems`|...|
|17|Computer Architecture|`computer-architecture`|...|
|18|DevOps|`devops`|...|
|19|Distributed Systems|`distributed-systems`|...|
|20|IoT|`iot`|...|
|21|Blockchain|`blockchain`|...|
|22|Robotics|`robotics`|...|
|23|AR/VR|`ar-vr`|...|
|24|Embedded Systems|`embedded-systems`|...|
|25|Quantum Computing|`quantum-computing`|...|

## How It Shows in Website

1. Open `index.html` → Explorer → Click any card **View →** → scroll to **Vault — Your Files for <Domain>** (4 dashed slots).
2. Each slot shows `Empty — no files yet` + `+ Add Slot` button → stores filename in browser (`localStorage` vault_<id>).
3. For bulk deploy: drop real files into `public/vault/<slug>/<slot>/` and optionally edit `index.json` to list them — after `vercel --prod` they are at `https://yourapp/vault/<slug>/<slot>/file.pdf`.
4. Vault count badge appears on each card (`Vault 0` → `Vault 3`) so you see at a glance which domains have files.

## Quick Demo

- Add file via UI: Click **AI → View → Vault Notes → + Add Notes** → type `AI_Intro.pdf` → toast → count becomes 1.
- Add file via folder: Open Explorer → `public/vault/ai/notes/` → drop `AI_Intro.pdf` there → (optional) add entry to `index.json` → redeploy → accessible.
- Compare: Tick **Compare** on 2-3 cards → bottom bar → **Compare →** side-by-side table.
- Search: Press `⌘K` (Ctrl+K) to jump to any of 25 instantly.

## For Viva / Presentation

Open `public/vault/` in Explorer — show 25 folders ×4 = 100 empty spaces ready. Show one domain modal vault with added file to prove functionality without backend.

## Professional Features Added Beyond Domains

- Atlas grouped view (Intelligence 6, Build 5, Core 8, Frontier 6) with sticky pills + sort + ⌘K palette
- Vault per domain (your request)
- Compare 3 tracks side-by-side
- 750-record dataset logic (30×25) + 25-way RandomForest fallback (weights)
- Resource hub filter by domain (25 in dropdown)

See `FILE_MAP.md` for full file list and `index.html:235` for Atlas markup.
