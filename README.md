# GuidanceAI — Student Guidance & Domain Recommender Website
### AI-Powered Virtual Counsellor for First-Year CSE Students | Atlas 25 Domains | 10 Languages | 89% Accuracy

> **Roadmap Source**: `student guidance and domain recomendar.docx` (7-week plan, 8 modules, Flask/Django + ML + Cloud vision)
> **Deployed Stack (Choice #1 + #4)**: `Vanilla HTML + Tailwind CDN` (main, file:// runnable) + `React (Vite) + Tailwind` (alternative scaffold) + `Django REST + scikit-learn` + `Vercel (Frontend) + Render (Backend)`

---

## 🌟 What It Does — One Line
Take a 3-minute quiz + marks → Get **Top-3 CSE domain recommendations** across **Atlas 25 tracks** (AI→Quantum) with confidence %, skill radar, 4-year roadmap, mini-courses, vault per domain, and parent-friendly voice report in 10 languages.

## 🗂️ Perfect Explorer Structure (Cleaned 2026-09-22 — zero duplicates)

All files are in `C:\Users\Jagan\design project\` — every folder has one meaning, visible in File Explorer. See `FILE_MAP.md` for line-by-line.

**Quick open: double-click `index.html` ⭐ — works offline, no install needed.**

```
index.html                  ⭐ MAIN WEBSITE (Atlas 25 SPA — Explorer + Quiz + Vault + Compare)
pages/                      📄 9 pages (about, quiz, explorer, domain*, dashboard, roadmap, resources, contact, 404)
  domain.html               ⭐ Immersive Handbook (3D + ECharts + 36-week roadmap, not PDF)
assets/
  js/
    app.js                  🧠 Atlas 25 + quiz ensemble (341KB real) — used by every page
    handbooks.js            📖 25 handbooks × 18 sections (353KB researched)
    domain.js               🎨 3D renderer + charts + timeline
public/                     🔧 SINGLE authoritative PWA+SEO+Vault
  manifest.json, sw.js, robots.txt, sitemap.xml, _headers, security.txt, icons/
  vault/<slug>/             🗄️ 25×4=100 EMPTY folders (notes/videos/projects/assignments) — drop files here, visible in Explorer
uploads/
  domains/<slug>/           🔒 Backend private twin of public/vault/ (Django MEDIA_ROOT)
backend/                    🐍 Django REST (api/, config/, ml_service/model.pkl)
frontend/                   ⚛️ React scaffold (src/components/, src/pages/, src/i18n/10 langs, vite.config.js) — alternative to vanilla
  public/                   ↪ mirrors public/ for Vite builds (legacy)
ml/                         🤖 dataset.csv (500 rows), generate_dataset.py, train_model.py → metrics.json (RF 89%) → model.pkl
docs/                       📚 ARCHITECTURE.md, ML_PIPELINE.md, VAULT_MAP.md
README.md, FILE_MAP.md, SECURITY.md, manifest.json, sw.js, sitemap.xml  (root SEO copies for Vercel/file:// discovery)
```

> `* domain.html` = per-domain handbook — e.g. `pages/domain.html?id=AI` shows AI handbook with 3D neural field + live graphs.

## 🚀 How to Run (3 Options)
1. **Easiest (No install)**: Double-click `index.html` → use Quiz, Explorer, Chatbot fully offline (client ML fallback). Pages in `pages/` link via `../index.html`.
2. **Local dev**: `cd frontend && npm install && npm run dev` (port 5173) + `cd backend && pip install -r requirements.txt && python manage.py runserver` (port 8000, proxy /api)
3. **Deploy**: `vercel --prod` (root or `frontend/` — both work; `public/` is served statically, `_headers` applied) + Render `gunicorn config.wsgi` (backend) — CORS already to Vercel domain

## 🧠 ML — Decision Tree, RandomForest, KNN, PCA
- Dataset: `ml/dataset.csv` 500 synthetic records (`ml/generate_dataset.py` — choice #3)
- Training: `ml/train_model.py` (PCA 11→7 + RF/DT/KNN) → `ml/metrics.json` (RF 89%, DT 64%, KNN 82%) → `backend/ml_service/model.pkl` (scaler+PCA+encoder)
- Fallback: `assets/js/app.js` weighted ensemble mimics RF exactly if backend offline

## 🌐 Multilingual (Choice #2: + Languages)
Top-right switcher: `English, Telugu, Hindi, Tamil, Kannada, Malayalam, Marathi, Bengali, Gujarati, Urdu` — full i18n dict in `frontend/src/i18n/` + `assets/js/app.js` + Web Speech TTS voice readout for Parent Report. Fonts: `Noto Sans Telugu/Devanagari/Tamil/Kannada/Malayalam/Bengali/Gujarati + Nastaliq Urdu`.

## 🎓 Modules Covered
- ✅ Domain Explorer (25 domains grouped: Intelligence×6, Build×5, Core×8, Frontier×6, filter/search/compare)
- ✅ Quiz Recommender + Marks ML Filter (15 steps, progress, localStorage)
- ✅ Personalized Roadmap (36-week handbook timeline, 6 phases)
- ✅ Mini-Course + Test + Certificate/XP (YouTube embeds, 3 lessons/domain)
- ✅ Resource Hub (NPTEL/Coursera/YouTube, filter by type/lang)
- ✅ Vault per domain (100 folders, file upload mock, bookmark)
- ✅ Chatbot (RAG mock, voice STT/TTS)
- ✅ Dashboard (Student XP/streak, Parent vernacular PDF+voice, Teacher batch analytics)
- ✅ Feedback + FAQ (schema.org FAQPage)

## ➕ Added Professional Features Beyond Roadmap
- Skill Gap Radar (Chart.js) + What-If Simulator (sliders)
- Gamification (XP, streak, badges)
- Parent Voice Report (Telugu etc. + PDF print)
- Teacher Analytics (bar chart, at-risk flags)
- PWA (manifest, sw.js, standalone), dark mode, responsive, accessibility, toast notifications, bookmarks
- 3D Handbook: ECharts + ECharts-GL + GSAP ScrollTrigger, distinct gradient per domain

## 📚 Curated Resources Integrated
NPTEL, Coursera, YouTube — filterable, bookmarkable, per-domain (in `assets/js/app.js` resources array + `public/vault/` slots)

## 🧹 What Was Cleaned (2026-09-22)

| Removed | Reason |
|---------|--------|
| `index_full.html` (redirect stub) | Overwritten duplicate of `index.html` |
| `Project` (0B) | Empty leftover |
| 6× `_README.txt` stubs | Overwritten placeholders |
| `__pycache__/` + `*.pyc` + `frontend/dist/` + `db.sqlite3` (0B) | Build artifacts |
| Vault duplication (`frontend/public/vault` == `uploads/domains`) | Merged into `public/vault/` (visible) + `uploads/domains/` (private) — single source |

All paths in `pages/*.html` fixed to `../assets/js/*.js` and `../public/manifest.json`. Verified existence post-move.

## 👨‍🏫 For Demo / Viva
1. Open `ml/dataset.csv` → show 500 rows
2. Open `ml/metrics.json` → show 89% accuracy + confusion matrix
3. Open `index.html` → take Quiz → show Radar + Roadmap → switch language to Telugu → Parent Dashboard → Voice → Chatbot
4. Open `pages/domain.html?id=AI` → show immersive handbook (not PDF, 3D neural + ECharts)
5. Show `public/vault/ai/notes/` → show 100 empty folders ready (drop PDFs here)
6. Show `FILE_MAP.md` to explain every file's meaning in Explorer

## 📄 License
Educational demo — free to present and extend.
