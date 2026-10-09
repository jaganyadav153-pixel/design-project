# Architecture — GuidanceAI

## System Diagram
```
[Student / Parent / Teacher] -> [React + Tailwind Frontend (Vercel)] -> [Django REST API (Render)] -> [ML Service: model.pkl]
                                   |-> Chart.js (Radar, Bar)
                                   |-> i18n (10 langs) + Web Speech API (TTS/STT)
                                   |-> LocalStorage (XP, bookmarks, offline)
```

## Modules (8 + 4 Added)
1. Domain Explorer
2. Quiz Recommender (10 Qs)
3. Marks ML Filter (PCA + RandomForest)
4. Roadmap + Mini-Course + Test
5. Resource Hub (NPTEL/Coursera/YouTube)
6. Chatbot (RAG mock)
7. Dashboard (Student/Parent/Teacher)
8. Feedback + FAQ
+ Added: Skill Radar, What-If Simulator, Parent Voice Report, Gamification, Teacher Analytics

## Data Flow
Quiz + Marks -> TF-IDF/normalize -> PCA (11->7) -> Ensemble (RF primary) -> Top-3 + explanation -> Roadmap generation

## Deployment (Choice 4: Vercel + Render)
- Frontend: `vercel --prod` from `frontend/`
- Backend: `gunicorn config.wsgi` on Render, env `DATABASE_URL`, CORS to Vercel domain

## Literature Gap Filled
| Paper | Lacked | We Added |
|-------|--------|----------|
| AIJMR 2025 | Parent involve, multi-lang | Parent dashboard + 10 langs + voice |
| IJRAR 2022 | Only branch, not domain | 6 CSE domains depth |
| JETIR 2024 | No visualization, no mini-course | Radar + mini-course + test |

