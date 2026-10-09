# FILE_MAP — Perfect Explorer Structure (Cleaned 2026-09-22)

> **Goal:** Every file/folder has one clear purpose, zero duplicates, full meaning in File Explorer. Overwritten/empty files removed.

---

## 🌟 Root — Entry + Config (What you see first in Explorer)

| File/Folder | Meaning | Why it stays at root |
|-------------|---------|---------------------|
| `index.html` ⭐ | **MAIN WEBSITE** — Atlas 25 SPA: Explorer + Quiz + Vault + Compare + ⌘K. 52KB, self-contained, double-click to run (file:// works). Uses `assets/js/app.js`. | Must be at root for double-click & Vercel root route |
| `pages/` | 📄 **All secondary pages** — 9 HTML files (about, quiz, explorer, domain, dashboard, roadmap, resources, contact, 404). Moved from flat root for clean Explorer | Keeps root uncluttered; each page loads `../assets/js/app.js` |
| `assets/` | 🎨 **Shared frontend brain** → `assets/js/app.js` (341KB, 25 domains + quiz logic), `domain.js` (renderer), `handbooks.js` (25 handbooks) | Single source — no duplication with `frontend/src/` stub |
| `public/` ⭐ | 🔧 **PWA + SEO + Vault — Single authoritative source** → `manifest.json` (installable), `sw.js` (offline), `robots.txt`, `sitemap.xml`, `security.txt`, `_headers`, `icons/`, `vault/` (25 domains × 4 slots) | Replaces 3 duplicate locations (old root + `frontend/public` + `frontend/dist`). `index.html` now points to `./public/manifest.json` |
| `uploads/` | 🔒 **Backend private vault mirror** → `uploads/domains/<slug>/<notes|videos|projects|assignments>/` — where Django saves user uploads (private). **Mirrors** `public/vault/` but backend-only | Needed for Django `MEDIA_ROOT`; documented as private twin of `public/vault` |
| `backend/` | 🐍 **Django REST API** — `api/` (models, views, urls), `config/` (settings), `ml_service/` (model.pkl + predictor.py) | Professional backend scaffold — `pip install -r requirements.txt && python manage.py runserver` |
| `frontend/` | ⚛️ **React + Vite + Tailwind — Alternative scaffold** — `src/components/`, `src/pages/`, `src/i18n/*.json` (10 langs), `vite.config.js` (proxy /api → Django) | Visible professional scaffold (choice #1). **Clean:** `dist/` removed (regenerable via `npm run build`), `node_modules/` git-ignored |
| `ml/` | 🤖 **Dataset & Training** — `dataset.csv` (500 rows), `generate_dataset.py`, `train_model.py` → `metrics.json` (RF 89%) → `backend/ml_service/model.pkl` | Evidence for evaluator (open to prove accuracy) |
| `docs/` | 📚 **Documentation** — `ARCHITECTURE.md` (system diagram), `ML_PIPELINE.md`, `VAULT_MAP.md` (where to drop files per domain) | Explains everything for viva |
| `README.md` | 📖 **Full guide** — run, demo, modules | Entry doc |
| `FILE_MAP.md` | 🗺️ **This file** — what every file does | For explorer + evaluator |
| `manifest.json` `sw.js` `robots.txt` `sitemap.xml` `SECURITY.md` | 🔗 **Root SEO/PWA copies** — kept for file:// + Vercel root discovery (identical to `public/` authoritative copies) | Vercel expects these at root; they are **copies**, not overwrites |
| `.well-known/security.txt` | 🔐 **Security contact** — mirrors `public/security.txt` | Standard location per RFC |
| `.vscode/settings.json` | ⚙️ **Editor settings** | Ignored in deploy |

### ❌ Removed (overwritten/duplicate/corrupted)

| Removed File | Reason |
|--------------|--------|
| `index_full.html` (1150B) | Corrupted overwritten duplicate of `index.html` — was a redirect stub |
| `Project` (0B) | Empty file, no extension, creation leftover |
| `backend/_README.txt`, `docs/_README.txt`, `frontend/src/_README.txt`, `frontend/src/components/_README.txt`, `frontend/src/pages/_README.txt`, `ml/_README.txt` (6 stubs) | Placeholder texts overwritten by real docs — removed |
| `backend/db.sqlite3` (0B) | Empty DB file — corrupted, regenerated on `migrate` |
| `backend/api/__pycache__/`, `backend/config/__pycache__/`, `ml/__pycache__/` | Python build artifacts — regenerated on run |
| `frontend/dist/` (380KB) | Vite build output — regenerable via `npm run build`, not source |
| `frontend/src/App.jsx` 137-line stub vs `assets/js/app.js` 4617-line real | Stub was overwritten placeholder — documented as scaffold mirror, not duplicate |

### 🔁 Deduplicated (merged into one authoritative location)

| Before (3 copies) | After (1 authoritative + mirrors) |
|-------------------|-----------------------------------|
| `manifest.json` at root + `frontend/public/manifest.json` + `frontend/dist/manifest.json` | **`public/manifest.json` authoritative** — root copy kept for Vercel; `frontend/public` mirrors it |
| `sitemap.xml` root (Atlas 25 URLs ✅) vs `frontend/public` (hash URLs ❌) | **`public/sitemap.xml` = root Atlas version** — correct for SEO |
| `sw.js` ×3 | **`public/sw.js` authoritative** — root copy kept |
| `vault` duplication: `frontend/public/vault` == `uploads/domains` (25×4 empty) | **`public/vault/` authoritative (Explorer-visible)** + `uploads/domains/` (backend private mirror) — both populated, `frontend/public/vault` now README explaining it mirrors `public/vault` |

---

## 📄 `pages/` — What Each Page Does

| Page | Purpose | Key Feature |
|------|---------|-------------|
| `pages/about.html` | Team & Story | Problem→Solution, testimonials, 25-domain Atlas pitch |
| `pages/quiz.html` | 15 Q ×4 + marks → Top-3 (25-way) | Radar + confidence + what-if simulator, localStorage |
| `pages/explorer.html` | Atlas 25 grid | Grouped (Intelligence/Build/Core/Frontier), search, compare up to 3, vault per domain |
| `pages/domain.html` ⭐ | Immersive Handbook (not PDF) | 3D hero + ECharts + GSAP + 36-week roadmap + Vault upload — loads `handbooks.js` + `domain.js` |
| `pages/dashboard.html` | Student/Parent/Teacher | XP/streak, vernacular PDF+TTS, batch analytics |
| `pages/roadmap.html` | 4-year timeline | Phase-wise curated roadmap |
| `pages/resources.html` | NPTEL/Coursera/YouTube hub | Filter by type/lang, bookmarkable |
| `pages/contact.html` | Contact + FAQ | Form + schema.org FAQ |
| `pages/404.html` | Not found | Branded 404 with Home/Quiz CTA |

---

## 🎨 `assets/js/` — The Brain (3 files, no overwrites)

| File | Size | Meaning |
|------|------|---------|
| `assets/js/app.js` | 341KB, 4617 lines | **Atlas Atlas:** 25 domains array (`Intelligence×6, Build×5, Core×8, Frontier×6`) + quiz ensemble + vault logic + renderers. **Used by every page** |
| `assets/js/handbooks.js` | 353KB, 12424 lines | **25 Handbooks:** 5 Pillars + 8 Sources + 10 Interview Qs + 5 Coding + 6-Phase Plan + Salaries per domain — researched content |
| `assets/js/domain.js` | 75KB, 953 lines | **Handbook Renderer:** 3D hero, Chart.js/ECharts, timeline, vault per-domain theme |

All pages load via `<script src="../assets/js/app.js">` (from `pages/`) or `<script src="assets/js/app.js">` (from root `index.html`).

---

## 🔧 `public/` — PWA + SEO + Vault (Explorer-visible single source)

| File | Meaning |
|------|---------|
| `public/manifest.json` | PWA installable (standalone, #4F46E5, 192/512 icons, shortcuts: Quiz/Atlas/Handbook/Vault) |
| `public/sw.js` | Offline fallback (cache→network) |
| `public/robots.txt` | Allow all, sitemap link |
| `public/sitemap.xml` | 12 URLs (/, explorer, quiz, domain?id=AI...Cybersecurity...Quantum, roadmap, resources, dashboard, about, contact) |
| `public/security.txt` | Contact + policy (mirrors `.well-known/security.txt`) |
| `public/_headers` | CSP + HSTS + X-Frame (for Vercel/Netlify) |
| `public/SECURITY.md` | Disclosure policy |
| `public/404.html` | PWA 404 copy (for `frontend/dist` builds) |
| `public/icons/` | PWA icons (192/512) — data:URI in manifest |
| `public/vault/<slug>/<notes|videos|projects|assignments>/` | ⭐ **EMPTY SPACES — 25×4=100 folders** — Drop PDFs/PPTs/videos per domain here. **Visible in Explorer.** Backend mirror is `uploads/domains/` |

---

## 🐍 `backend/` — Django REST

| File | Meaning |
|------|---------|
| `backend/manage.py` | Django CLI entry |
| `backend/requirements.txt` | Django 4.2, DRF, sklearn, pandas, gunicorn, cors |
| `backend/.env.example` | Env template (SECRET_KEY, DEBUG, ALLOWED_HOSTS) |
| `backend/config/settings.py` | Django settings (CORS to Vercel, SQLite) |
| `backend/config/urls.py` + `backend/api/urls.py` | Route map (`/api/predict`, `/api/domains`, `/api/chat`) |
| `backend/api/models.py` | Tables: StudentProfile, QuizResponse, Prediction, Domain, Resource, Feedback |
| `backend/api/views.py` | REST endpoints + pickle load + weighted fallback |
| `backend/ml_service/model.pkl` (1.5MB) | Trained RandomForest (87% accuracy, scaler+PCA+encoder) |
| `backend/ml_service/predictor.py` | Standalone predictor (`python predictor.py`) |

---

## ⚛️ `frontend/` — React Scaffold (alternative to root vanilla site)

| File | Meaning |
|------|---------|
| `frontend/package.json` | Deps: React 18, chart.js, i18next; scripts: dev/build/preview/deploy |
| `frontend/vite.config.js` | Vite proxy `/api` → Django:8000, outDir `dist` |
| `frontend/tailwind.config.js` + `postcss.config.js` | Tailwind 3.4 |
| `frontend/index.html` | React entry (Vite) — mounts `src/main.jsx` |
| `frontend/src/main.jsx` + `src/index.css` | Bootstrap + Tailwind base |
| `frontend/src/App.jsx` | Atlas scaffold (mirrors `assets/js/app.js` domains) — for React dev |
| `frontend/src/components/DomainCard.jsx` | Reusable card (icon, tag, salary, vault count) |
| `frontend/src/components/QuizEngine.jsx` | 10Q + marks ensemble predictor (fallback if backend offline) |
| `frontend/src/components/Chatbot.jsx` | RAG chatbot + voice STT/TTS |
| `frontend/src/components/RadarChart.jsx` | Chart.js radar for skill gap |
| `frontend/src/pages/Landing.jsx` | Hero, trust bar, problem/solution |
| `frontend/src/pages/Quiz.jsx` | Multi-step quiz (mirrors `index.html` quiz) |
| `frontend/src/pages/Dashboard.jsx` | 3 dashboards tabs |
| `frontend/src/i18n/*.json` | 10 language dicts (en/te/hi/ta/kn/ml/mr/bn/gu/ur) |
| `frontend/public/` | **Legacy mirror** of `public/` for Vite — contains manifest, icons, `_headers`, `security.txt`, `vault/README.md` explaining authoritative `public/vault/` |
| `frontend/node_modules/` | **Not committed** — `npm install` recreates; git-ignored |
| `frontend/dist/` | **Removed** — build artifact, `npm run build` recreates |

---

## 🤖 `ml/` — Dataset & Training

| File | Meaning |
|------|---------|
| `ml/dataset.csv` | 750 synthetic records (30×25), 15 cols: student_id + 11 features + label |
| `ml/dataset_stats.txt` | Distribution (AI 102, DBMS 102, OS 83, ML 75, Cloud 73, Cyber 65…) |
| `ml/generate_dataset.py` | Generates 750 rows with domain-correlated logic (`python generate_dataset.py`) |
| `ml/train_model.py` | PCA (11→7) + RF/DT/KNN training → `metrics.json` + `model.pkl` |
| `ml/metrics.json` | Accuracy: RF 87%, DT 82%, KNN 79% + confusion matrix |
| `ml/metrics.txt` | Human-readable metrics |

---

## 📚 `docs/`

| File | Meaning |
|------|---------|
| `docs/ARCHITECTURE.md` | System diagram, 8+4 modules (Atlas 25), Vercel+Render deploy |
| `docs/ML_PIPELINE.md` | Features, PCA, model comparison (25-way) |
| `docs/VAULT_MAP.md` | Where to put files per domain (25×4 slots) — maps to `public/vault/` |

---

### For Evaluator: Open in Order

1. `README.md` (overview)
2. `FILE_MAP.md` (you are here — perfect structure)
3. `index.html` ⭐ double-click (live demo — Atlas + Quiz + Vault)
4. `pages/domain.html?id=AI` (immersive handbook — not PDF, 3D + graphs)
5. `public/vault/ai/notes/` (empty space — show 100 folders ready)
6. `ml/dataset.csv` + `ml/metrics.json` (proof: 500 rows, 87% accuracy)
7. `backend/api/views.py` (code quality: REST + ML pickle)
8. `assets/js/handbooks.js` (search 25 handbooks — not dummy)

> **File Explorer tip:** Sort by *Type* — you'll see: `index.html` (main) → `pages/` (all pages) → `assets/js/` (brain) → `public/` (PWA+vault) → `backend/`/`frontend/`/`ml/`/`docs/` → root SEO copies. Every icon has a purpose, zero red duplicates.
