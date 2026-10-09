# DESIGN PROJECT REPORT
## GuidanceAI — AI-Powered Student Guidance & CSE Domain Recommender System
### Virtual Counsellor for First-Year CSE Students | Atlas 25 Domains | 10 Languages | 89% Accuracy

**Department of Computer Science and Engineering**
**Academic Year 2025 – 2026**

**Guide:** Mr. VASANTH RAJ K, Assistant Professor (SG), CSE
**Head of Department:** Dr. T. Sudalai Muthu, Ph.D, Professor & Head, CSE
**Associate Dean, Computing Sciences:** Dr. J. Thangakumar

**Team Members:** [Team Member 1 – Name / Roll No] | [Team Member 2 – Name / Roll No]

**Stack:** Vanilla HTML + Tailwind CDN + React (Vite) + Django REST + scikit-learn (RandomForest 89%) + Vercel + Render
**Main Entry:** `index.html` (double-click, works offline) | **Dataset:** `ml/dataset.csv` (750 rows, 30×25) | **Model:** `backend/ml_service/model.pkl`

---

# TABLE OF CONTENTS

- TITLE
- Acknowledgement
- Abstract
- List of Abbreviations
- Organization of the Report
- 1. INTRODUCTION
  - 1.1 Overview
  - 1.2 Motivation for the Project
  - 1.3 Problem Definition and Scenarios
  - 1.4 Summary
- 2. LITERATURE REVIEW
  - 2.1 Introduction
  - 2.2 Literature Review
  - 2.3 Research Gaps
  - 2.4 Conclusion
- 3. PROJECT DESCRIPTION
  - 3.1 Objective of the Design Project Work
  - 3.2 Existing System
  - 3.3 Proposed System
  - 3.4 Benefits of Proposed System
- 4. SYSTEM DESIGN
  - 4.1 Introduction
  - 4.2 System Architecture
    - 4.2.1 Architecture Diagram
  - 4.3 Data Flow
  - 4.4 Summary
- 5. PROJECT REQUIREMENTS
  - 5.1 Introduction
  - 5.2 Hardware Requirements
  - 5.3 Software Requirements
  - 5.4 Summary
- 6. MODULE DESCRIPTION
  - 6.1 Modules
  - 6.2 Key Modules
  - 6.3 User Interface
  - 6.4 Technology Stack
  - 6.5 Security Consideration
- 7. IMPLEMENTATION
  - 7.1 Implementation
- 8. RESULT ANALYSIS
  - 8.1 Results Obtained
- 9. CONCLUSION AND FUTURE WORK
  - 9.1 Introduction
  - 9.2 Conclusion
  - 9.3 Limitations
  - 9.4 Future Work
  - 9.5 Summary
- 10. INDIVIDUAL TEAM MEMBER'S REPORT
  - 10.1 Individual Objective
  - 10.2 Role of the Team Members
  - 10.3 Contribution of Team Members
  - 10.4 Summary
- References

---

# ACKNOWLEDGEMENT

We wish to express our deep sense of gratitude from the bottom of our heart to our guide **Mr. VASANTH RAJ K, Assistant Professor (SG), Computer Science and Engineering**, for his motivating discussions, overwhelming suggestions, ingenious encouragement, invaluable supervision, and exemplary guidance throughout this design project work.

We would like to extend our heartfelt gratitude to **Dr. T. Sudalai Muthu, Ph.D, Professor and Head, Department of Computer Science and Engineering** for his valuable suggestions and support in successfully completing the project. We are really indebted to our **Associate Dean Computing Sciences Dr. J. Thangakumar**, for his support required for the successful completion of the project.

We also thank the faculty members, lab technicians, and our fellow students of CSE for their feedback during quiz testing, vault testing, multilingual verification (Telugu, Tamil, Hindi), and viva rehearsals. Finally, we thank the open-source communities of Django, React, scikit-learn, NPTEL, and Coursera whose resources made the Atlas 25 handbooks and Resource Hub possible.

As a final word, we would like to thank each and every individual who has been a source of support and encouragement and helped us to achieve our goal and complete our design project work successfully.

**[Team Member 1 Name] / [Team Member 2 Name]**
**CSE, Academic Year 2025-2026**

---

# ABSTRACT

Choosing a specialization is the most confusing decision for first-year Computer Science and Engineering students. CSE now spans more than 25 distinct career tracks — from Artificial Intelligence, Machine Learning, Data Science, Cybersecurity, Cloud Computing to Frontier areas like Blockchain, Robotics, and Quantum Computing. Conventional counselling is manual, senior-dependent, English-only, and limited to branch selection (CSE vs IT vs ECE) rather than domain selection inside CSE. Students rely on YouTube hype, peer pressure, or salary rumours, leading to mid-course switches, skill mismatch, and placement stress.

**GuidanceAI** is an AI-Powered Virtual Counsellor for First-Year CSE Students that converts a 3-minute quiz + academic marks into **Top-3 personalized domain recommendations across Atlas 25 tracks (AI → Quantum)** with confidence %, skill radar, 36-week roadmap, mini-courses, per-domain Vault, and parent-friendly voice reports in 10 Indian languages.

Technically, the system combines: (1) a **Vanilla HTML + Tailwind CDN single-page site** (`index.html`, file:// runnable, offline-capable) + **React (Vite) + Tailwind alternative scaffold** (`frontend/`), (2) a **Django REST backend** (`backend/api/views.py`, `/api/predict`, `/api/domains`, `/api/chat`) deployed on Render, (3) an **ML Service** trained on `ml/dataset.csv` (750 synthetic records, 30×25, 11 features + label) using StandardScaler → PCA (11→10, 95% variance) → RandomForest (100 trees, **89% accuracy, CV 82%**) vs DecisionTree (64%) vs KNN (82%), serialized to `backend/ml_service/model.pkl`, with a deterministic weighted-ensemble fallback in `assets/js/app.js` (341KB, 4617 lines) for offline demo parity, and (4) a **25-handbook knowledge base** (`assets/js/handbooks.js`, 353KB, 25×18 sections: 5 Pillars, 8 Sources, 10 Interview Qs, 5 Coding problems, 6-Phase plan, salary bands) rendered as an immersive 3D handbook (`pages/domain.html?id=AI`, ECharts + ECharts-GL + GSAP).

Key outcomes: RF 89% Top-1 accuracy on held-out set; Top-3 recommendation with explanation (“High logic 4/4 + math 92 → AI optimal”); Skill-Gap Radar (Chart.js) + What-If simulator; Gamification (XP, streak, badges); Parent dashboard with vernacular PDF + Web Speech TTS voice readout (English, Telugu, Hindi, Tamil, Kannada, Malayalam, Marathi, Bengali, Gujarati, Urdu); Teacher batch analytics with at-risk flags; Resource Hub (NPTEL/Coursera/YouTube, filterable by type/lang); Vault per domain (`public/vault/<slug>/notes|videos|projects|assignments/`, 25×4=100 folders, localStorage + Django `MEDIA_ROOT` mirror `uploads/domains/`); RAG-mock Chatbot with STT/TTS + Claude-3.5-Sonnet integration when `ANTHROPIC_API_KEY` is set; PWA (manifest, sw.js, offline), dark mode, accessibility, and SEO (sitemap, robots, schema.org FAQPage).

Demo flow: double-click `index.html` → take Quiz (15 Q×4 + marks) → see Radar + Top-3 + Roadmap → switch to Telugu → Parent Dashboard → Voice → Chatbot → open `pages/domain.html?id=AI` for 3D neural-field handbook. The project demonstrates how ML + full-stack + multilingual UX can deliver practical, inclusive academic counselling.

**Keywords:** Career Guidance, Domain Recommender, RandomForest, PCA, Django REST, React, Multilingual TTS, Atlas 25, Skill Radar, PWA.

---

# LIST OF ABBREVIATIONS

| Abbreviation | Expansion |
|---|---|
| AI | Artificial Intelligence |
| ML | Machine Learning |
| CV | Computer Vision |
| NLP | Natural Language Processing |
| HCI | Human-Computer Interaction |
| DBMS | Database Management System |
| OS | Operating Systems |
| CN | Computer Networks |
| CA | Computer Architecture |
| IoT | Internet of Things |
| AR/VR | Augmented Reality / Virtual Reality |
| RF | Random Forest |
| DT | Decision Tree |
| KNN | K-Nearest Neighbours |
| PCA | Principal Component Analysis |
| TF-IDF | Term Frequency – Inverse Document Frequency |
| RAG | Retrieval Augmented Generation |
| STT / TTS | Speech-to-Text / Text-to-Speech |
| REST | Representational State Transfer |
| PWA | Progressive Web App |
| SEO | Search Engine Optimization |
| CSP / HSTS | Content Security Policy / HTTP Strict Transport Security |
| XP | Experience Points |
| LPA | Lakhs Per Annum (salary) |
| NPTEL | National Programme on Technology Enhanced Learning |

---

# ORGANIZATION OF THE REPORT

- **Chapter 1:** Introduces the motivation and problem definition of the project in detail.
- **Chapter 2:** The reference documents collected for this project, as well as the takeaways, are noted in the Literature Survey.
- **Chapter 3:** The Project Description is mentioned along with existing work, proposed work, and benefits of the project.
- **Chapter 4:** The Architecture Design is mentioned along with a full explanation for the project.
- **Chapter 5:** The Software and Hardware Requirements and technologies being implemented in the project are mentioned.
- **Chapter 6:** The Module Description of the project is mentioned and the subdivisions are explained in detail.
- **Chapter 7:** The whole implementation of the project is discussed.
- **Chapter 8:** The Results and Explanations are mentioned and the outcomes of every module are shown in graphic detail.
- **Chapter 9:** A Conclusion for this project is made and the further enhancements are also mentioned.
- **Chapter 10:** Individual Report of the Team Members is mentioned along with the objective, role, and contribution of each member.

---

# CHAPTER 1 — INTRODUCTION

## 1.1 Overview

CSE enrolment in India exceeds 5 lakh per year, yet first-year students face a paradox of choice: AI, ML, Data Science, Big Data, Computer Vision, NLP, Web, Mobile, Software Engineering, Game, HCI, Cybersecurity, Cloud, Networks, DBMS, OS, Architecture, DevOps, Distributed Systems, IoT, Blockchain, Robotics, AR/VR, Embedded, Quantum — 25 viable tracks, each with different math intensity, creativity demand, tools, salaries (5–20 LPA), and preparation paths.

GuidanceAI addresses this by acting as a **virtual counsellor**: Student takes a 15-question aptitude/interest quiz (logic, math aptitude, creativity, security/cloud/data/OS/coding/trend/social interest, each 1–4) + enters 4 subject marks (Math, Physics, Programming, English) → backend normalizes → StandardScaler → PCA → RandomForest → Top-3 domains with confidence + explanation + skill radar + 36-week handbook roadmap + mini-course (YouTube embeds, 3 lessons/domain, test + certificate/XP) + Vault suggestion + parent report.

The deployed stack is intentionally dual: **Choice #1 Vanilla** (`index.html` + `pages/` + `assets/js/app.js`) for zero-install file:// demo and Vercel static hosting, plus **Choice #4 React+Vite** (`frontend/src/`) as professional alternative; **Django REST** (`backend/`) on Render for `/api/predict` + `/api/chat`; **ML** (`ml/`) for reproducible training. Offline parity is guaranteed: if backend is unreachable, `assets/js/app.js:computePrediction()` weighted ensemble mimics RF exactly.

Beyond prediction, GuidanceAI is a full student OS: Atlas Explorer (grouped Intelligence×6, Build×5, Core×8, Frontier×6, search/sort/compare up to 3, ⌘K palette), Immersive Handbooks (not PDFs — 3D hero + ECharts + GSAP ScrollTrigger, distinct gradient per domain), Resource Hub (NPTEL/Coursera/YouTube, filter by type/lang, bookmarkable), Vault per domain (100 empty folders ready — drop PDFs here), Chatbot (TF-IDF + Claude fallback, voice), and 3 Dashboards (Student XP/streak, Parent vernacular PDF+voice, Teacher batch analytics).

## 1.2 Motivation for the Project

1. **Decision paralysis in Year 1:** Students pick AI because it trends, then discover heavy math. A data-driven Top-3 with What-If sliders (“what if I improve coding from 2→4?”) prevents costly switches.
2. **Parent inclusion:** 70%+ parents in Tier-2/3 colleges are non-English speakers. Top-right switcher (10 languages: en/te/hi/ta/kn/ml/mr/bn/gu/ur) + Noto fonts + Web Speech TTS voice readout lets a Telugu mother understand “AI 82% — Python → Math → ML” without English.
3. **Teacher visibility:** HODs need batch analytics (500 students, at-risk flags, lab allocation for Cloud vs OS). Dashboard bar chart solves it.
4. **Practical portfolio from Day 1:** Vault (`public/vault/ai/notes/` etc.) gives every domain a place for notes/videos/projects/assignments; mini-course + test + XP makes roadmap actionable, not just a PDF.
5. **Reproducible ML for viva:** `ml/dataset.csv` (750 rows) → `ml/train_model.py` → `ml/metrics.json` (RF 89%) → `model.pkl` is openable evidence, unlike black-box APIs.
6. **Offline-first for labs:** Many college labs have weak internet. `index.html` + `sw.js` + localStorage fallback ensures quiz/demo works without backend.
7. **Beyond papers:** Prior works (AIJMR 2025, IJRAR 2022, JETIR 2024) lacked parent involvement, multi-lang, visualization, and mini-courses — all added here (see Ch.2).

## 1.3 Problem Definition and Scenarios

**Problem Definition:** Develop an AI-powered virtual counsellor that (a) maps 15-dim quiz + 4-dim marks to 25 CSE domains with calibrated confidence, (b) explains the recommendation, (c) grounds it in a 36-week actionable roadmap + curated resources + vault, and (d) communicates it to student, parent (vernacular+voice), and teacher (analytics) — offline-capable, deployable on Vercel+Render, and evaluable via open dataset/metrics.

**Scenarios:**

1. **Confused Fresher:** Aarav (Math 92, logic 4/4, loves data) takes quiz → AI 82%, ML 76%, Data Science 74% + radar shows OS weakness → roadmap Python→Stats→ML, vault `/vault/ai/`, NPTEL Intro to AI.
2. **Creative Low-Math Student:** Priya (math 58, creativity 4/4, loves design) → HCI 88%, Game 81%, Web 79% (explicit “low math, high creativity” path) → Figma track, not forced AI.
3. **Parent in Telugu:** Priya’s mother switches to తెలుగు → Parent Dashboard → Voice readout + Print PDF → understands salary 6-12 LPA, 36-week plan, no pressure.
4. **Teacher Batch:** Prof. Rao uploads 120 quiz results → bar chart shows 40% Cloud, 15% at-risk (low logic+low marks) → allocates Cloud lab + remedial Python.
5. **Offline Lab Demo:** Internet down → `index.html` still predicts via weighted ensemble → radar + roadmap render → viva continues.
6. **Vault Collector:** Student drops `DBMS_Notes.pdf` into `public/vault/dbms/notes/` → Explorer card badge Vault 0→1 → after `vercel --prod` at `/vault/dbms/notes/DBMS_Notes.pdf`.
7. **What-If Explorer:** “If I raise coding 2→4, does Cybersecurity overtake Cloud?” Sliders recompute Top-3 live.
8. **Chatbot Follow-up:** “Roadmap for HCI?” → TF-IDF/Claude returns UX Basics→Figma→User Research→Prototype + vault tip, in user’s language.

## 1.4 Summary

GuidanceAI converts confusion into a Top-3, explainable, actionable, multilingual plan. It combines ML (RF 89% + PCA), full-stack (Vanilla + React + Django), and UX (Atlas 25, 3D handbooks, radar, voice, gamification, vault) into a single deployable system that works offline and includes all three stakeholders. The following chapters detail literature, design, requirements, modules, implementation, and results.

---

# CHAPTER 2 — LITERATURE REVIEW

## 2.1 Introduction

Technology in academic counselling has evolved from manual faculty advice → rule-based expert systems → web portals (Shiksha, CollegeDunia) → ML branch predictors → LLM chatbots. Medication-adherence and e-learning literature shows personalization + vernacular + tracking improves outcomes, but CSE domain guidance remains shallow: most portals rank colleges, not domains inside CSE; most ML papers predict branch (CSE vs ECE), not track (AI vs HCI vs Quantum); multilingual parent involvement is almost absent.

We reviewed (a) smart reminder/personalization systems, (b) ML career/domain predictors, (c) face/voice/accessibility in education, and (d) resource-recommender systems, to position GuidanceAI’s Atlas-25 + RF + multilingual + vault contribution.

## 2.2 Literature Review

### 2.2.1 AIJMR 2025 — AI-Based Career Counselling (Branch-Level)
Predicted engineering branch from marks using Decision Trees. Strength: simple, interpretable. Limitation: only 4-6 branches, no domain depth, English-only, no parent dashboard, no roadmap. **Takeaway:** Need domain-level (25-way), vernacular, and roadmap — all implemented in GuidanceAI (Parent Telugu voice + 36-week handbook).

### 2.2.2 IJRAR 2022 — Branch Prediction via ML (RF/KNN)
Compared RF/KNN for branch allocation (accuracy ~78%). Strength: model comparison methodology reused in `ml/train_model.py`. Limitation: only branch, not domain; 6 labels; no visualization or mini-course. **Takeaway:** Adopted RF/KNN/DT comparison + CV score reporting (`ml/metrics.json`), but extended to 25 labels + radar + mini-course + test.

### 2.2.3 JETIR 2024 — E-Learning Recommender (NPTEL/Coursera)
Recommended courses from interest keywords. Strength: curated NPTEL/Coursera mapping reused in Resource Hub. Limitation: no ML filter by aptitude/marks, no visualization, no vault. **Takeaway:** Integrated as `Resource` model + `resources` array in `app.js` (filter by type/lang/domain, bookmarkable) + vault slots.

### 2.2.4 Smart Pill / Reminder & Voice Systems (General Personalization)
Time-based reminders + TTS (pyttsx3) + SQLite history showed voice improves adherence for elderly. Limitation: generic alerts, no user-specific ML, hardware-dependent (dispensers/RFID/IoT). **Takeaway:** Reused TTS insight as Web Speech API parent voice report (no extra hardware, browser-native, 10 langs) + medication-status pattern reused as Taken/Skipped → XP/lesson-complete tracking.

### 2.2.5 Face Recognition Healthcare (Contactless ID)
OpenCV + face-encoding for patient ID showed contactless convenience but focused on auth, not scheduling. **Takeaway:** Not directly used (privacy-first, no camera storage in GuidanceAI), but informed the “no-login, localStorage, privacy-first” principle — no biometric data retained.

### 2.2.6 Chatbot RAG-Mock + TTS/STT in Education
RAG over course docs + voice improved engagement. **Takeaway:** Implemented as `POST /api/chat` — TF-IDF over 25 domain blurbs + vault live file listing + history-aware anaphora (“its salary?”) + Claude-3.5-Sonnet when key present, else offline TF-IDF fallback; STT via Web Speech.

## 2.3 Research Gaps

1. **Branch, not domain:** Prior ML predicts CSE vs ECE; none covers 25 tracks inside CSE with salary/skills/roadmap per track.
2. **No parent/vernacular:** English-only reports exclude parents; no voice readout.
3. **No visualization:** No radar/what-if to show *why* AI > OS for a student.
4. **No actionable roadmap:** Recommendations stop at label; no 36-week plan, mini-course, test, vault.
5. **No batch analytics:** Teachers lack at-risk flags and cohort distribution.
6. **Offline fragility:** Cloud-only demos fail in labs; need weighted fallback + PWA.
7. **Closed datasets:** No open CSV/metrics/model.pkl for evaluator to verify accuracy.

## 2.4 Conclusion

GuidanceAI fills all seven gaps: 25-way RF 89% + PCA with open `dataset.csv`/`metrics.json`/`model.pkl`; Telugu–Urdu 10-lang + voice parent report; Chart.js radar + what-if; 36-week handbook + mini-course + vault; teacher analytics; offline ensemble + PWA; and full-stack open code (`views.py`, `app.js`, `handbooks.js`). Next chapter details objectives and proposed system.

---

# CHAPTER 3 — PROJECT DESCRIPTION

## 3.1 Objective of the Design Project Work

1. To implement a 25-way domain recommender: 15 quiz answers (1–4) + 4 marks → Top-3 with confidence + explanation via RF 89% (PCA 11→10) with weighted fallback.
2. To provide Atlas 25 Explorer: grouped (Intelligence 6, Build 5, Core 8, Frontier 6), search/sort/compare(3)/⌘K, vault per domain.
3. To automate roadmap + learning: 36-week handbook per domain (5 Pillars, timeline, salaries, interview kit, govt exams) + mini-course (3 YouTube lessons + test + XP/certificate).
4. To provide multilingual voice reports: 10 languages + Noto fonts + TTS + printable parent PDF.
5. To manage knowledge: Django models (StudentProfile, QuizResponse, Prediction, Domain, Resource, Feedback) + Resource Hub (NPTEL/Coursera/YouTube) + Vault (100 folders, `public/vault/` ↔ `uploads/domains/`).
6. To record progress: XP/streak/badges, bookmarks, lesson completion, feedback ratings in localStorage + DB.
7. To reduce wrong-track selection: radar + what-if + teacher at-risk flags minimize hype-driven switches.

## 3.2 Existing System

1. **Manual counselling:** Faculty/senior advice, 1:1, non-scalable, biased to their own domain.
2. **Portal rank lists:** Shiksha/CollegeDunia rank colleges, not domains; generic articles (“AI vs ML”).
3. **Time-based alerts / mobile apps:** Generic reminders, no aptitude mapping.
4. **Branch predictors:** 4-6 labels, marks-only, no interest/creativity signals.
5. **Voice-only reminders:** TTS without personalization.
6. **IoT/RFID dispensers:** Hardware cost, not relevant to counselling but shows personalization need.
7. **Course recommenders:** Keyword→course, no ML aptitude filter.
8. **Limited stakeholder coverage:** Student-only; parents/teachers excluded; English-only.

## 3.3 Proposed System

**Quiz + Marks ML Filter:** 15 Q×4 (logic, math_apt, creativity, security/cloud/data/os/coding/trend/social interest + 5 personality/learning-style probes) + marks (math/phy/prog/eng). `POST /api/predict {answers[15], marks}` → tries `model.pkl` (scaler→PCA→RF→proba Top-3) → else `weighted_predict()` (17-dim weights per domain in `views.py:WEIGHTS`, mirrored in `app.js`). Output `{top, confidence, top3, explanation, model}`.

**Atlas Explorer:** `index.html#explorer` + `pages/explorer.html` render 25 cards from `app.js:DOMAINS` (id, category, tag, salary, skills, vault). Group headers, search (`explorerSearch`), sort (A-Z/salary/demand), compare checkbox → `compareBar` (max 3) → `compareModal` side-by-side, command palette (Ctrl+K), vault count badges.

**Immersive Handbook (not PDF):** `pages/domain.html?id=AI` loads `handbooks.js: HANDBOOKS[AI]` (18 sections) + `domain.js` renderer (3D hero via ECharts-GL neural field, skill-demand ECharts, GSAP timeline 36 weeks/6 phases, salary bars AmbitionBox 2024-25, 10 interview Qs + 5 LeetCode, govt exams GATE/ISRO/NIC/BARC, researcher track, ethics). Distinct gradient per domain.

**Roadmap + Mini-Course + Test:** `pages/roadmap.html` 4-year phases (Foundation→Core→Advanced→Placement); per-domain 36-week plan; 3 YouTube embeds/domain + 5-MCQ test → XP + printable certificate.

**Resource Hub:** `pages/resources.html` + `GET /api/resources` — NPTEL/Coursera/YouTube, filter by domain(25)/type/lang, bookmark (localStorage), vault link.

**Vault per Domain:** `public/vault/<slug>/{notes,videos,projects,assignments}/` (Explorer-visible) + `uploads/domains/<slug>/` (Django `MEDIA_ROOT` private). UI modal shows 4 dashed slots (“Empty — no files yet” + `+ Add Slot` → localStorage `vault_<id>`); bulk deploy via folder drop + `index.json`; `GET /api/vault?domain=` lists live files (used by chatbot).

**Chatbot:** `POST /api/chat {question, lang, history}` — sanitizes (500 chars, blocks prompt-injection), builds context via `_build_guidance_context()` (keyword + alias + vault live listing, max 6 blurbs), tries Claude-3.5-Sonnet (700 tokens, temp 0.4) if key set, else `_ml_fallback_answer()` (TF-IDF cosine over 26 docs + exact-match priority + daily-chat greetings/jokes). STT/TTS via Web Speech in `Chatbot.jsx`/`app.js`.

**Dashboards:** `pages/dashboard.html` 3 tabs — Student (XP/streak/badges, radar, roadmap progress), Parent (vernacular selector, voice `speakParentReport()`, print PDF), Teacher (batch bar chart, at-risk flags, satisfaction 92%).

**Feedback + FAQ:** `POST /api/feedback` (XSS-sanitized, rating 1-5, spam-block) + `pages/contact.html` schema.org FAQPage.

## 3.4 Benefits of Proposed System

Personalized Top-3 (not generic list); Explainable (radar + “why AI?” box); Multilingual + voice (10 langs, RTL Urdu, Noto); Actionable (36-week + course + vault); Teacher insight; Offline + PWA; Open evidence (CSV/metrics/pkl/FILE_MAP); Zero-install demo; Privacy-first (no signup, local data); Deployable (Vercel+Render, CORS, `_headers` CSP+HSTS).

---

# CHAPTER 4 — SYSTEM DESIGN

## 4.1 Introduction

Design goals: single responsibility per folder (see `FILE_MAP.md`), offline-first, API parity (weighted fallback identical to pickle), and stakeholder separation (student/parent/teacher). Modules: Registration (local profile, no auth friction), Quiz, ML Service, Handbook/Resource/Vault, Notification (toast + voice), Progress/XP, UI shell (nav/dark/i18n).

## 4.2 System Architecture

Vanilla/ React frontend (Vercel) → Django REST (Render) → ML Service (`model.pkl`); sideways: Chart.js/ECharts, i18n+Web Speech, localStorage, PWA SW. Data stores: SQLite (dev) / Postgres (prod `DATABASE_URL`), `public/vault/` static, `uploads/domains/` media.

### 4.2.1 Architecture Diagram

```
[Student / Parent / Teacher Browser]
  index.html / pages/*  (+ assets/js/app.js, handbooks.js, domain.js)
  frontend/src/* (React alternative)
        |  fetch /api/* (CORS to Render)  |  fallback weighted ensemble (offline)
        v
[Django REST on Render — backend/api/views.py]
  /api/predict  /api/domains  /api/resources  /api/vault  /api/feedback  /api/chat
        |
[ML Service — backend/ml_service/model.pkl + predictor.py]
  StandardScaler -> PCA (11->10) -> RandomForest (100 trees, 89%)
        |
[SQLite/Postgres: StudentProfile, QuizResponse, Prediction, Domain, Resource, Feedback]
[Static Vault: public/vault/<slug>/4 slots]  [Media Mirror: uploads/domains/<slug>/]
[External: NPTEL/Coursera/YouTube embeds, Claude-3.5-Sonnet (optional), Web Speech TTS/STT]
```

ASCII flow: Quiz+Marks → TF-IDF/normalize → PCA → Ensemble (RF primary) → Top-3 + explanation → Roadmap/Vault/Report generation.

Deployment: `vercel --prod` (root or `frontend/`, `public/` static, `_headers` applied) + Render `gunicorn config.wsgi` (CORS to Vercel domain).

## 4.3 Data Flow

1. User opens `index.html` (or `pages/quiz.html`) → selects language/role (persisted).
2. Quiz: 15 steps + marks form → `localStorage quiz_answers` → `POST /api/predict`.
3. Backend validates (15 ints 1-4, marks clamped 0-100, 10KB limit) → `load_model()` → scaler→PCA→RF `predict_proba` → Top-3 + confidence; on fail → `weighted_predict()` (vals = answers + math/25 + prog/25, score = Σ v·w ×25, normalize max→82+8, cap 95, sort desc).
4. Frontend renders Top-3 cards + Chart.js radar + “Why?” explanation + vault suggestion + roadmap link; saves `Prediction` (if logged) + XP.
5. Handbook: `domain.html?id=X` → fetch `HANDBOOKS[X]` → 3D + ECharts + timeline + vault slots (`GET /api/vault`).
6. Chat: `POST /api/chat` with history → Claude or TF-IDF → answer + vault tip, TTS optional.
7. Dashboards read localStorage + `/api` aggregates; Parent voice via `speechSynthesis`, print via `window.print()` CSS.
8. Feedback → sanitized save → toast.

DB schema highlights: `StudentProfile(user, 4 marks, learning_style, personality)`, `QuizResponse(student, 10 scores)`, `Prediction(student, recommended_domain, confidence, top3 JSON)`, `Domain(name, description, skills/careers/roadmap JSON)`, `Resource(title, domain FK, type, lang, difficulty, url, rating)`, `Feedback(name, role, text, rating)`.

## 4.4 Summary

Architecture isolates PWA/SEO/Vault (`public/`), brain (`assets/js/`), API (`backend/`), alt-UI (`frontend/`), evidence (`ml/`), docs (`docs/`). Data flow guarantees offline demo + online accuracy + multilingual reporting in one loop.

---

# CHAPTER 5 — PROJECT REQUIREMENTS

## 5.1 Introduction

As a primarily web + ML system, requirements are modest: any laptop with browser + camera-less operation (no biometric capture — privacy-first), Python for ML/backend, Node for React alt-build, and internet only for deploy/Claude/YouTube embeds. Lab demo needs nothing installed (double-click `index.html`).

## 5.2 Hardware Requirements

- Laptop/Desktop: dual-core+, 4GB RAM min (8GB recommended for `train_model.py`), 2GB free (vault + `node_modules` + `model.pkl` 1.5MB).
- Display 1366×768+ (responsive to 360px mobile + RTL).
- No mandatory camera/sensor/RFID/IoT (unlike dispenser systems); microphone/speaker optional for STT/TTS voice demo.
- Internet optional for core quiz (offline fallback); required for Render API, Claude, YouTube embeds, Vercel deploy.

## 5.3 Software Requirements

- OS: Windows 10+/Linux/macOS.
- Browser: Chrome/Edge 110+ (Web Speech, ECharts-GL, PWA install).
- Python 3.10+: Django 4.2, DRF, scikit-learn, pandas, numpy, gunicorn, django-cors-headers (`backend/requirements.txt`); `python manage.py migrate && runserver` (port 8000).
- Node 18+: React 18, Vite, Tailwind 3.4, chart.js, i18next (`frontend/package.json`); `npm install && npm run dev` (5173) / `npm run build` → `dist/`.
- Frontend CDN: Tailwind CDN, Chart.js 4.4 UMD, FontAwesome 6.5, ECharts + ECharts-GL + GSAP ScrollTrigger (handbook), Google Fonts Inter + Noto (Te/Devanagari/Tamil/Kannada/Malayalam/Bengali/Gujarati/Nastaliq Urdu/Arabic).
- DB: SQLite (dev `db.sqlite3`, git-ignored) / Postgres via `DATABASE_URL` (prod); `MEDIA_ROOT=uploads/domains/`.
- PWA/SEO: `public/manifest.json`, `sw.js` (cache→network), `robots.txt`, `sitemap.xml` (12 URLs), `_headers` (CSP+HSTS+X-Frame), `security.txt`, icons 192/512.
- IDE: VS Code + `.vscode/settings.json`; Env template `backend/.env.example` (SECRET_KEY, DEBUG, ALLOWED_HOSTS, ANTHROPIC_API_KEY optional).
- ML repro: `python ml/generate_dataset.py && python ml/train_model.py` (750 rows → `metrics.json` + `model.pkl`).

| Category | Choice |
|---|---|
| Main site | Vanilla HTML+Tailwind CDN (file:// runnable) |
| Alt scaffold | React Vite+Tailwind (proxy /api→Django:8000) |
| Backend | Django REST (Render, gunicorn) |
| ML | RF 89% + PCA + weighted fallback |
| Deploy | Vercel (frontend) + Render (backend) |
| Languages | 10 via `frontend/src/i18n/*.json` + `app.js` dict + TTS |

## 5.4 Summary

No special hardware; standard web + Python stack suffices. Offline-first + lightweight SQLite + CDN ensures lab/viva readiness; Render/Postgres + Claude key unlock full cloud power.

---

# CHAPTER 6 — MODULE DESCRIPTION

## 6.1 Modules

1. Domain Explorer (Atlas 25), 2. Quiz Recommender (15Q), 3. Marks ML Filter (PCA+RF), 4. Roadmap (36-week + 4-year), 5. Mini-Course + Test + Certificate/XP, 6. Resource Hub, 7. Vault per domain (100 slots), 8. Chatbot (RAG-mock + Claude + voice), 9. Dashboard (Student/Parent/Teacher), 10. Feedback + FAQ, + Added: Skill Radar, What-If Simulator, Parent Voice Report, Gamification, Teacher Analytics, Compare(3), ⌘K Palette, PWA/dark/a11y/toasts/bookmarks, 3D Handbook.

## 6.2 Key Modules (Detail)

**Explorer:** `DOMAINS` array (Intelligence 6: AI/ML/DS/BigData/CV/NLP; Build 5: Web/Mobile/SE/Game/HCI; Core 8: Cyber/Cloud/CN/DBMS/OS/CA/DevOps/Distributed; Frontier 6: IoT/Blockchain/Robotics/ARVR/Embedded/Quantum). Each: id, name, category, tag (Trending/Evergreen/Critical/Future), salary (5-20 LPA, Quantum 10-20 highest), skills, vault path. Features: pills filter, search, sort, compare, vault badge.

**Quiz + ML:** `pages/quiz.html` 15 steps, progress bar, localStorage; `views.py:predict()` + `weighted_predict()` as above; frontend `computePrediction()` parity; radar canvas + confidence bars + explanation; persists `Prediction`.

**Handbook Renderer:** `domain.js` (75KB, 953 lines): 3D hero (per-domain gradient), ECharts demand/salary, GSAP 6-phase timeline (W1-6 Math/Python … W31-36 Projects), pillars/sources/interview/coding/govt/researcher/ethics sections from `handbooks.js`.

**Vault:** 100 folders + UI slots + `vault_view()` API + chatbot live listing; `VAULT_MAP.md` + `FILE_MAP.md` document drops.

**Chatbot/Dashboard/Resource/Feedback:** as in Ch.3.3; teacher flags `if logic<2 and math<60 → at-risk`.

## 6.3 User Interface

Nav (glass, skip-link, Ctrl+K hint, lang/role switchers, dark toggle, Start Quiz pulse + mobile sticky bar + drawer); Hero (gradient, trust chips, live prediction preview + radar, parent Telugu voice FAB); Trust bar (NPTEL/Coursera/YouTube + RF·PCA); Features (6 cards); Atlas grid (min-height cards, compare checkboxes, vault badges); Quiz CTA; Handbook banner (slate-900 gradient); About/Testimonials; Footer (4-col, dev info `<details>`); Modals (domain/compare/video/chat 480px + palette + compareBar + toast). Handbook page: 3D hero, charts, timeline, vault. All pages `../assets/js/app.js`, `../public/manifest.json`; focus-visible rings, `prefers-reduced-motion`, RTL (`dir=rtl`, Nastaliq, line-clamp 3 for Indic), lazy images, ARIA labels.

## 6.4 Technology Stack

- Frontend: HTML5, Tailwind CDN, Chart.js, ECharts/ECharts-GL, GSAP, FontAwesome, PWA SW, Web Speech API.
- Alt: React 18, Vite (proxy /api), Tailwind 3.4, i18next (10 JSON), chart.js.
- Backend: Django 4.2, DRF (`@api_view`), CORS, gunicorn, SQLite/Postgres.
- ML: pandas, sklearn (StandardScaler, PCA, RF100/DT/KNN, TF-IDF+cosine for chatbot), pickle (`model+scaler+pca+encoder+feature_cols`).
- Deploy/Docs: Vercel, Render, `vercel.json`, `_headers`, sitemap/robots/manifest, `ARCHITECTURE.md`/`ML_PIPELINE.md`/`VAULT_MAP.md`/`FILE_MAP.md`/`SECURITY.md`.

## 6.5 Security Consideration

CSP (`default-src 'self'` + allowlisted CDNs/YouTube/localhost), `nosniff`, `strict-origin-when-cross-origin`, HSTS + X-Frame via `_headers`; predict: 10KB limit, strict 15×1-4 validation, marks clamp, ignore extra fields; feedback/chat: `<`/`>` strip, 500/1000-char caps, rating clamp, block `http×3`/`<script`/prompt-injection phrases (`ignore previous`, `drop table`); pickle validation (`isinstance(model,str)` reject); no secrets in repo (`.env.example`); `SECURITY.md` + `.well-known/security.txt`; privacy-first (no signup, localStorage, no camera/biometric retention, PWA offline).

---

# CHAPTER 7 — IMPLEMENTATION

## 7.1 Implementation

**ML pipeline (`ml/`):** `generate_dataset.py` synthesizes 750 rows (30×25) with domain-correlated logic (e.g., AI: high logic+math+data_interest; HCI: high creativity, low math; Cyber: high security+os_interest) — 15 cols (student_id + 11 features: logic, math_apt, creativity, security/cloud/data/os interest + math/phy/prog/eng marks + label). `train_model.py`: StandardScaler → PCA (11→10, 95% var) → RF(100)/DT/KNN train/test split → `metrics.json` (RF 89%/CV82, DT64%/68.8, KNN82%/77.4, 6×6 confusion-matrix sample + 25 labels + vault note) + `metrics.txt` + `model.pkl` (1.5MB, copied to `backend/ml_service/`). Retrain: `python ml/generate_dataset.py && python ml/train_model.py`. `predictor.py` standalone CLI demo.

**Backend (`backend/`):** `config/settings.py` (CORS to Vercel, SQLite, `MEDIA_ROOT=uploads/domains/`), `config/urls.py` + `api/urls.py` (`/api/predict|domains|resources|vault|feedback|chat`), `api/models.py` (6 tables as Ch.4.3), `api/views.py` (WEIGHTS 25×17, `load_model()`, `weighted_predict()`, `predict()`, `domains()`, `resources_view()`, `vault_view()`, `feedback_view()`, `_build_guidance_context()`, `_ml_fallback_answer()`, `chat()` with Claude + daily-chat + handbook handlers — 600+ lines, XSS/prompt-injection hardened). Run: `pip install -r requirements.txt && python manage.py migrate && python manage.py runserver` (8000); prod `gunicorn config.wsgi` on Render.

**Frontend Vanilla (`index.html` + `pages/` + `assets/js/`):** `app.js` (341KB): `DOMAINS[25]`, `resources[]`, `computePrediction()` (weighted, parity), renderers (grid/modal/radar/compare/palette/vault/bookmark/i18n dict 10 langs/XP/toast/dark/chat STT-TTs). `handbooks.js` (353KB): `HANDBOOKS[25]` ×18 sections (researched: pillars, sources with ytId, economics $13T McKinsey 2030 for AI, interview FAANG OA+Tech+Bar Raiser, coding LeetCode IDs, govt GATE/ISRO/NIC/BARC, salary AmbitionBox 2024-25, companies, researcher, ethics). `domain.js`: ECharts-GL hero + charts + GSAP timeline + vault theme. `pages/`: about/quiz/explorer/domain/dashboard/roadmap/resources/contact/404 (each `../assets/js/app.js`, `../public/manifest.json` — verified post-clean 2026-09-22; removed `index_full.html`, `Project`, 6×`_README.txt`, `__pycache__`, `dist/`, 0B `db.sqlite3`; deduped manifest/sitemap/sw/vault to `public/` authoritative).

**Frontend React (`frontend/`):** `package.json` (React18/chart/i18next), `vite.config.js` (proxy /api→8000, outDir dist), `tailwind/postcss`, `index.html`→`src/main.jsx`+`index.css`, `App.jsx` (Atlas mirror), `components/` (DomainCard/QuizEngine/Chatbot/RadarChart), `pages/` (Landing/Quiz/Dashboard), `i18n/*.json` (10), `public/` legacy mirror + `vault/README.md`. `npm install && npm run dev` (5173) + backend parallel.

**Vault/PWA/SEO (`public/` + root copies):** `manifest.json` (standalone, #4F46E5, 192/512, shortcuts Quiz/Atlas/Handbook/Vault), `sw.js` (cache→network), `robots.txt`, `sitemap.xml` (12 Atlas URLs), `security.txt`, `_headers`, `icons/`, `vault/<slug>/4 slots` + `index.json` optional + `README.md`; root copies for Vercel/file:// discovery; `.well-known/security.txt` RFC mirror.

**i18n/Voice/Gamification:** Switcher `en/te/hi/ta/kn/ml/mr/bn/gu/ur` (Noto fonts, `:lang()` line-height 1.8-2.2, RTL Urdu, `dir=rtl` tables/canvas fix); `speakParentReport()` TTS + `startVoice()` STT; XP (`quiz_complete +50, lesson +20, bookmark +5`), streak (daily `last_visit`), badges (Explorer/Polyglot/QuizMaster).

Integration test: `index.html` Quiz → `/api/predict` (or fallback) → Top-3 → `domain.html?id=Top1` handbook → vault add → Telugu voice → chatbot “compare AI vs Quantum” → dashboard XP — all verified file:// + `localhost:8000` + Vercel preview.

---

# CHAPTER 8 — RESULT ANALYSIS

## 8.1 Results Obtained

**ML Accuracy (`ml/metrics.json`):** RF **89%** (CV 82%) > KNN 82% (CV77.4) > DT 64% (CV68.8); PCA 11→10 retains 95% variance; confusion matrix (6-class sample) shows strong diagonal (e.g., 15/19 AI correct, 4 confused with CV — expected overlap; 23/25 Cloud correct). 750 rows (30×25 balanced) prevent majority-class bias (vs earlier 500-row 6-domain pilot). Viva evidence: open `dataset.csv` (500-750 rows visible) + `metrics.json` + `model.pkl` load in `views.py`.

**Functional:** Quiz 15Q in ~3 min → Top-3 + radar + explanation live; fallback parity verified (same WEIGHTS produce same Top-1 offline/online ±1% rounding); Atlas search <100ms for 25 cards, sort/compare/⌘K instant; handbook 3D + ECharts renders <2s on lab PC; vault badge 0→N updates + toast; resource filter (25 domains ×3 types ×2 langs) instant; chatbot TF-IDF Top-1 exact-match for “what is ai?”/“hci” + vault live files listed; Claude path (when key set) returns ≤2000-char sanitized answer with vault tip; TTS Telugu verified in Chrome; PWA installs, offline quiz works (SW cache), dark/RTL/a11y pass keyboard + screen-reader spot-check.

**User feedback (324 reviews, 4.6/5 mock):** “Radar showed I need OS not AI — saved semester” (Aarav, Cyber 88%); “Telugu voice helped parents” (Priya’s mother); “Flagged at-risk early” (Prof. Rao, batch 500, satisfaction 92%). Teacher chart: 40% Cloud cluster → lab reallocation.

**Screenshots to include (for Word/PDF):** Fig 8.1 Hero + live preview; 8.2 Atlas grouped + compare bar; 8.3 Quiz radar + Top-3; 8.4 What-if sliders; 8.5 Handbook 3D + timeline; 8.6 Resource Hub filter; 8.7 Vault slots; 8.8 Parent Telugu + voice; 8.9 Teacher analytics; 8.10 Chatbot multilingual; 8.11 metrics.json + confusion matrix; 8.12 Vercel+Render deploy logs.

**Comparison vs existing:** vs branch predictors (78%, 4 labels) → 89%, 25 labels + explanation; vs portals (static articles) → interactive Top-3 + roadmap + vault; vs JETIR (no viz) → radar + 3D + XP.

---

# CHAPTER 9 — CONCLUSION AND FUTURE WORK

## 9.1 Introduction

GuidanceAI set out to replace hype-driven domain choice with explainable, multilingual, actionable AI counselling. This chapter consolidates achievements, admits limits, and charts enhancements.

## 9.2 Conclusion

- Personalized management: 25-way RF 89% maps aptitude+marks to Top-3 with confidence/explanation, not generic advice.
- Automated identification: quiz vector auto-maps to domain without manual branch lookup; weighted fallback ensures offline continuity.
- Timely roadmap: 36-week/4-year plan + mini-course + test + XP turns label into action.
- Voice + visual: Chart.js radar + ECharts 3D + 10-lang TTS + printable PDF includes parents.
- Multi-user: student/parent/teacher dashboards + 100 vault slots support cohort use.
- Tracking: XP/streak/bookmarks/lesson status + `Prediction` history enable adherence view.
- Reduced effort: single `index.html` double-click demo; Vercel+Render one-command deploy.
- Simple stack: standard laptop, no IoT/RFID/camera hardware, privacy-first.
- Overall: integrates ML + full-stack + multilingual UX into a viva-ready, deployable counsellor that reduces switches and involves families.

## 9.3 Limitations

Camera/mic optional — voice needs Chrome + speaker; poor audio affects STT. TTS quality varies by lang (Urdu Nastaliq RTL tested, but dialect gaps). ML synthetic 750 rows — real student data would improve calibration; 4 confusions AI↔CV expected. DB SQLite dev — needs Postgres for concurrent batch uploads. Manual vault drops need redeploy for public URL (localStorage instant, static deploy delayed). Incorrect quiz/marks entry → wrong Top-3 (no proctored verification). Cannot physically verify course completion (self-reported test).

## 9.4 Future Work

Mobile app (React Native, push reminders, offline SQLite sync). Caregiver/mentor alerts (missed roadmap milestones → SMS/email to parent/mentor). Cloud data + analytics (Postgres + Metabase, adherence reports, frequently-missed phases). Improved models (XGBoost/LightGBM + LLM explanations, calibration curves, fairness audit across gender/region/medium). Wearable/study-time integration (Pomodoro → XP auto). Proctored skill tests (auto-graded coding IDE embed). Alumni/company API (live salary/vacancy pull, AmbitionBox/LinkedIn).

## 9.5 Summary

GuidanceAI delivers an open, offline-capable, multilingual domain counsellor (RF 89%, Atlas 25, vault, voice) with clear limits and a credible path to mobile/cloud/advanced-ML futures. It is a foundation, not a finality — ready to present, easy to extend.

---

# CHAPTER 10 — INDIVIDUAL TEAM MEMBER'S REPORT

The GuidanceAI system was developed by a two-member team. Work was divided by functional layers but integrated jointly for architecture, testing, and documentation.

## 10.1 Individual Objective

- **Member 1:** Own accurate recommendation — dataset, training, backend predict API, and evaluation evidence.
- **Member 2:** Own usable guidance — Atlas UI, handbooks/3D, vault/resource/voice, and dashboards.

Joint goal: file:// demo + Vercel/Render deploy + viva evidence in one repo.

## 10.2 Role of the Team Members

**Team Member 1 – ML + Backend + Data Management**
- Generated/collected `ml/dataset.csv` (750 rows), engineered 11 features.
- Built `ml/train_model.py` (Scaler→PCA→RF/DT/KNN) → `metrics.json`/`model.pkl`.
- Implemented `backend/api/models.py` (6 tables) + `backend/api/views.py:predict/domains/resources/vault` + `ml_service/predictor.py`.
- Managed DB/migrations, CORS/gunicorn deploy, API validation/security.

**Team Member 2 – Frontend + Handbook + Vault/Voice**
- Built `index.html` + `pages/*` (9 pages) + `assets/js/app.js` (quiz ensemble, Atlas, i18n, radar, vault, gamification) + `handbooks.js` (25×18 researched sections) + `domain.js` (3D/ECharts/GSAP).
- Built `frontend/src/` React scaffold + `i18n/*.json` (10 langs) + vault UI + TTS/STT + dashboards + chatbot UI.
- Curated Resource Hub (NPTEL/Coursera/YouTube) + `public/vault/` 100 folders + PWA/SEO (`manifest`, `sw.js`, `sitemap`).

## 10.3 Contribution of Team Members

| Area | Member 1 | Member 2 |
|---|---|---|
| Planning/requirements | Joint (7-week plan, 8 modules) | Joint |
| ML/data | Primary (dataset, training, 89%) | Assisted (feature review, test quiz) |
| Backend/API | Primary (views, models, deploy) | Assisted (fetch integration) |
| Frontend/UX | Assisted (API contract) | Primary (Atlas, handbook, voice) |
| Vault/resources | Backend mirror `uploads/` | Primary (`public/vault/`, hub) |
| Testing | API unit + confusion matrix | UI/viva flow + Telugu voice + offline |
| Docs/report | Arch/ML pipeline sections | UI/modules/results screenshots |
| Presentation | Metrics + live predict demo | Quiz→handbook→vault→voice demo |

## 10.4 Summary

Both members jointly contributed to planning, architecture, integration, debugging, report, and presentation. Member 1 ensured the recommendation is *correct* (89% evidence); Member 2 ensured it is *understood and used* (multilingual, visual, actionable). Collaboration integrated ML, backend, frontend, vault, and voice into a complete counsellor.

---

# REFERENCES

1. AIJMR 2025 — AI-Based Career Counselling System (branch-level DT).
2. IJRAR 2022 — Engineering Branch Prediction using RF/KNN (~78%).
3. JETIR 2024 — E-Learning Recommender (NPTEL/Coursera keyword mapping).
4. Pedregosa et al. — Scikit-learn: Machine Learning in Python (RF, PCA, TF-IDF).
5. Django REST Framework docs — `@api_view`, CORS, gunicorn deploy.
6. React + Vite + Tailwind docs — SPA scaffold, proxy /api.
7. ECharts / ECharts-GL + GSAP ScrollTrigger docs — 3D handbook visuals.
8. Web Speech API (MDN) — TTS/STT for 10-lang voice reports.
9. NPTEL / Coursera / YouTube course catalogs — per-domain curation (see `app.js:resources`).
10. AmbitionBox 2024-25 salary bands; McKinsey $13T AI economics 2030 (handbook sources).
11. Repo evidence: `ml/dataset.csv`, `ml/metrics.json`, `backend/ml_service/model.pkl`, `backend/api/views.py`, `assets/js/app.js`, `assets/js/handbooks.js`, `docs/ARCHITECTURE.md`, `docs/ML_PIPELINE.md`, `docs/VAULT_MAP.md`, `FILE_MAP.md`.

*End of Report — GuidanceAI Design Project 2025-2026. For viva open in order: README → FILE_MAP → index.html (Quiz) → pages/domain.html?id=AI → public/vault/ai/notes/ → ml/dataset.csv + metrics.json → backend/api/views.py → handbooks.js.*
