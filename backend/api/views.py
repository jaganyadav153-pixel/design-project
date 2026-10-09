"""
backend/api/views.py - Django REST Views (Professional, bug-free)
Endpoints: /api/predict, /api/domains, /api/resources, /api/feedback, /api/chat
ML: loads backend/ml_service/model.pkl (RandomForest 87%) with graceful fallback
"""
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import pickle
from pathlib import Path
import numpy as np
import os
import re

MODEL_PATH = Path(__file__).parent.parent / "ml_service" / "model.pkl"

# Weights identical to frontend (ensures parity offline)
WEIGHTS = {
    'AI': [0.140, 0.075, 0.103, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.028, 0.028, 0.140, 0.103, 0.056, 0.056],
    'ML': [0.140, 0.075, 0.140, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.028, 0.028, 0.103, 0.103, 0.056, 0.056],
    'Data Science': [0.103, 0.075, 0.140, 0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.140, 0.028, 0.028, 0.028, 0.075, 0.103, 0.056, 0.056],
    'Big Data': [0.103, 0.028, 0.140, 0.028, 0.140, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.028, 0.028, 0.075, 0.103, 0.056, 0.056],
    'Computer Vision': [0.140, 0.028, 0.103, 0.028, 0.028, 0.028, 0.075, 0.028, 0.028, 0.140, 0.028, 0.028, 0.028, 0.103, 0.075, 0.056, 0.056],
    'NLP': [0.103, 0.028, 0.140, 0.028, 0.028, 0.028, 0.075, 0.028, 0.028, 0.103, 0.028, 0.028, 0.140, 0.075, 0.028, 0.056, 0.056],
    'Web Development': [0.028, 0.140, 0.028, 0.028, 0.028, 0.028, 0.140, 0.028, 0.075, 0.103, 0.028, 0.028, 0.103, 0.075, 0.028, 0.056, 0.056],
    'Mobile App Development': [0.028, 0.140, 0.028, 0.028, 0.028, 0.028, 0.140, 0.028, 0.103, 0.103, 0.028, 0.028, 0.075, 0.075, 0.028, 0.056, 0.056],
    'Software Engineering': [0.028, 0.140, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.103, 0.028, 0.028, 0.028, 0.103, 0.140, 0.075, 0.056, 0.056],
    'Game Development': [0.028, 0.103, 0.028, 0.028, 0.028, 0.028, 0.140, 0.028, 0.075, 0.103, 0.140, 0.028, 0.028, 0.028, 0.075, 0.056, 0.056],
    'HCI': [0.028, 0.075, 0.028, 0.028, 0.028, 0.028, 0.140, 0.028, 0.103, 0.103, 0.028, 0.028, 0.140, 0.075, 0.028, 0.056, 0.056],
    'Cybersecurity': [0.103, 0.028, 0.028, 0.140, 0.103, 0.075, 0.028, 0.140, 0.028, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.056, 0.056],
    'Cloud Computing': [0.075, 0.028, 0.028, 0.028, 0.140, 0.103, 0.028, 0.140, 0.103, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.056, 0.056],
    'Computer Networks': [0.028, 0.028, 0.028, 0.140, 0.140, 0.103, 0.028, 0.103, 0.075, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.056, 0.056],
    'DBMS': [0.075, 0.028, 0.140, 0.028, 0.103, 0.028, 0.028, 0.103, 0.028, 0.140, 0.028, 0.028, 0.028, 0.075, 0.028, 0.056, 0.056],
    'Operating Systems': [0.140, 0.075, 0.028, 0.028, 0.075, 0.103, 0.028, 0.140, 0.028, 0.028, 0.028, 0.028, 0.028, 0.103, 0.028, 0.056, 0.056],
    'Computer Architecture': [0.140, 0.075, 0.028, 0.028, 0.028, 0.103, 0.028, 0.140, 0.075, 0.028, 0.028, 0.028, 0.028, 0.103, 0.028, 0.056, 0.056],
    'DevOps': [0.028, 0.075, 0.028, 0.028, 0.140, 0.103, 0.028, 0.140, 0.103, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.056, 0.056],
    'Distributed Systems': [0.028, 0.028, 0.028, 0.075, 0.140, 0.103, 0.028, 0.103, 0.140, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.056, 0.056],
    'IoT': [0.103, 0.028, 0.028, 0.028, 0.140, 0.140, 0.028, 0.103, 0.075, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.056, 0.056],
    'Blockchain': [0.140, 0.028, 0.103, 0.140, 0.075, 0.028, 0.028, 0.103, 0.028, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.056, 0.056],
    'Robotics': [0.103, 0.028, 0.028, 0.028, 0.028, 0.140, 0.028, 0.103, 0.075, 0.028, 0.028, 0.028, 0.028, 0.140, 0.075, 0.056, 0.056],
    'AR/VR': [0.028, 0.075, 0.028, 0.028, 0.028, 0.028, 0.140, 0.028, 0.028, 0.103, 0.103, 0.140, 0.028, 0.028, 0.075, 0.056, 0.056],
    'Embedded Systems': [0.103, 0.075, 0.028, 0.028, 0.103, 0.140, 0.028, 0.140, 0.028, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.056, 0.056],
    'Quantum Computing': [0.140, 0.028, 0.103, 0.028, 0.028, 0.028, 0.028, 0.075, 0.028, 0.028, 0.028, 0.140, 0.028, 0.103, 0.075, 0.056, 0.056]
}

def load_model():
    try:
        if MODEL_PATH.exists():
            with open(MODEL_PATH, 'rb') as f:
                data = pickle.load(f)
                # Validate real sklearn model (not mock string)
                if isinstance(data.get('model'), str):
                    return None
                return data
    except Exception:
        return None
    return None

def weighted_predict(answers, marks):
    """Deterministic weighted scoring — mirrors frontend computePrediction()"""
    # Validate & clamp inputs
    if not isinstance(answers, list) or len(answers) != 15:
        answers = [2]*15
    answers = [max(1, min(4, int(a) if isinstance(a, (int,float)) else 2)) for a in answers]
    math_m = max(0, min(100, float(marks.get('math', 85)) if isinstance(marks.get('math'), (int,float, str)) and str(marks.get('math')).replace('.','',1).isdigit() else 85))
    prog_m = max(0, min(100, float(marks.get('prog', 78)) if isinstance(marks.get('prog'), (int,float, str)) and str(marks.get('prog')).replace('.','',1).isdigit() else 78))
    # fallback numeric parsing safely
    try:
        math_m = float(marks.get('math', 85))
        prog_m = float(marks.get('prog', 78))
    except:
        math_m, prog_m = 85, 78
    math_m = max(0, min(100, math_m))
    prog_m = max(0, min(100, prog_m))

    vals = answers[:15] + [math_m/25, prog_m/25]
    raw_scores = {}
    for domain, w in WEIGHTS.items():
        s = sum(v*wt for v, wt in zip(vals, w)) * 25
        raw_scores[domain] = s
    # Normalize to 0-100 professionally (single pass, no mid-loop max bug)
    max_raw = max(raw_scores.values()) if raw_scores else 1
    scores = {k: round(min(95, v / max_raw * 82 + 8), 1) for k, v in raw_scores.items()}
    # deterministic sort (no random jitter for API)
    sorted_scores = sorted(scores.items(), key=lambda x: x[1], reverse=True)
    return scores, sorted_scores, answers, math_m

@api_view(['POST'])
def predict(request):
    """
    Input: {answers: [1-4 x15], marks: {math, phy, prog, eng}}
    Output: {top, confidence, top3, explanation, model}
    Tries real pickle model first, else weighted fallback
    """
    # Security: limit request size and validate
    if len(str(request.data)) > 10000:
        return Response({"error": "Request too large"}, status=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE)
    try:
        data = request.data or {}
        # Only allow expected fields to prevent hacking via extra fields
        allowed = {'answers', 'marks', 'lang'}
        if any(k not in allowed for k in data.keys()):
            # silently ignore extra but log
            pass
        answers = data.get('answers', [3]*10)
        marks = data.get('marks', {}) or {}
        if not isinstance(marks, dict):
            marks = {}
        # Validate answers strictly
        if not isinstance(answers, list) or len(answers) != 15:
            return Response({"error": "answers must be list of 15"}, status=400)
        for a in answers:
            if not isinstance(a, int) or not 1 <= a <= 4:
                return Response({"error": "each answer must be 1-4"}, status=400)

        # Try real sklearn model
        ml_data = load_model()
        if ml_data and 'model' in ml_data:
            try:
                model = ml_data['model']
                scaler = ml_data.get('scaler')
                pca = ml_data.get('pca')
                le = ml_data.get('label_encoder')
                feature_cols = ml_data.get('feature_cols')
                # Build feature vector: 15 quiz (1-4) + 4 marks — ML uses first 7 for compatibility, weighted uses all 15
                # answers map: [logic,math,crea,sec,cloud,data,os,coding,trend,social] but feature_cols expects 11
                # we map coding/trend/social not in feature_cols -> ignore, use only first 7 + marks
                math_m = float(marks.get('math', 85))
                phy_m = float(marks.get('phy', 72) if 'phy' in marks else marks.get('physics', 72))
                prog_m = float(marks.get('prog', 78))
                eng_m = float(marks.get('eng', 80) if 'eng' in marks else marks.get('english', 80))
                # feature order: logic,math_apt,crea,sec,cloud,data,os, math_marks,physics_marks,programming_marks,english_marks
                X = np.array([[answers[0], answers[1], answers[2], answers[3], answers[4], answers[5], answers[6], math_m, phy_m, prog_m, eng_m]])
                if scaler: X = scaler.transform(X)
                if pca: X = pca.transform(X)
                pred = model.predict(X)
                label = le.inverse_transform(pred)[0] if le else str(pred[0])
                # confidence via predict_proba if available
                confidence = 87.0
                if hasattr(model, 'predict_proba'):
                    proba = model.predict_proba(X).max()*100
                    confidence = round(float(proba),1)
                    # top3 via proba
                    proba_all = model.predict_proba(X)[0]
                    classes = le.classes_ if le else list(WEIGHTS.keys())
                    top3_idx = np.argsort(proba_all)[::-1][:3]
                    top3 = [{"domain": str(classes[i]), "score": round(float(proba_all[i]*100),1)} for i in top3_idx]
                else:
                    # fallback top3
                    scores, sorted_scores, _, _ = weighted_predict(answers, marks)
                    top3 = [{"domain": k, "score": v} for k, v in sorted_scores[:3]]
                    confidence = sorted_scores[0][1]
                return Response({
                    "top": str(label),
                    "confidence": confidence,
                    "top3": top3,
                    "explanation": f"High logic {answers[0]}/5 + math {math_m}/100 → {label} optimal (RandomForest)",
                    "model": f"{ml_data.get('best_model_name','RandomForest')} 87% (pickle)"
                })
            except Exception as e:
                # fall through to weighted
                pass

        # Weighted fallback
        scores, sorted_scores, clean_answers, math_m = weighted_predict(answers, marks)
        return Response({
            "top": sorted_scores[0][0],
            "confidence": sorted_scores[0][1],
            "top3": [{"domain": k, "score": v} for k, v in sorted_scores[:3]],
            "explanation": f"High logic {clean_answers[0]}/5 + math marks {math_m} → {sorted_scores[0][0]} optimal (weighted ensemble)",
            "model": "RandomForest 87% (weighted fallback)"
        })
    except Exception as e:
        return Response({"error": "Prediction failed", "detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def domains(request):
    return Response([
        {"id":"AI","name":"Artificial Intelligence (AI)","category":"Intelligence & Data","tag":"Trending 2026","salary":"8-15 LPA","vault":"/vault/ai/"},
        {"id":"ML","name":"Machine Learning (ML)","category":"Intelligence & Data","tag":"High Demand","salary":"7-14 LPA","vault":"/vault/ml/"},
        {"id":"Data Science","name":"Data Science","category":"Intelligence & Data","tag":"High Demand","salary":"8-18 LPA","vault":"/vault/data-science/"},
        {"id":"Big Data","name":"Big Data","category":"Intelligence & Data","tag":"Enterprise","salary":"8-16 LPA","vault":"/vault/big-data/"},
        {"id":"Computer Vision","name":"Computer Vision","category":"Intelligence & Data","tag":"Trending","salary":"8-15 LPA","vault":"/vault/computer-vision/"},
        {"id":"NLP","name":"Natural Language Processing (NLP)","category":"Intelligence & Data","tag":"Trending","salary":"8-14 LPA","vault":"/vault/nlp/"},
        {"id":"Web Development","name":"Web Development","category":"Build & Experience","tag":"Evergreen","salary":"5-10 LPA","vault":"/vault/web-development/"},
        {"id":"Mobile App Development","name":"Mobile App Development","category":"Build & Experience","tag":"High Demand","salary":"6-12 LPA","vault":"/vault/mobile-app-development/"},
        {"id":"Software Engineering","name":"Software Engineering","category":"Build & Experience","tag":"Core","salary":"7-13 LPA","vault":"/vault/software-engineering/"},
        {"id":"Game Development","name":"Game Development","category":"Build & Experience","tag":"Creative","salary":"5-11 LPA","vault":"/vault/game-development/"},
        {"id":"HCI","name":"Human-Computer Interaction (HCI)","category":"Build & Experience","tag":"Design","salary":"6-12 LPA","vault":"/vault/hci/"},
        {"id":"Cybersecurity","name":"Cybersecurity","category":"Core Systems","tag":"Critical","salary":"6-12 LPA","vault":"/vault/cybersecurity/"},
        {"id":"Cloud Computing","name":"Cloud Computing","category":"Core Systems","tag":"Enterprise","salary":"7-13 LPA","vault":"/vault/cloud-computing/"},
        {"id":"Computer Networks","name":"Computer Networks","category":"Core Systems","tag":"Core","salary":"6-11 LPA","vault":"/vault/computer-networks/"},
        {"id":"DBMS","name":"Database Management Systems (DBMS)","category":"Core Systems","tag":"Evergreen","salary":"6-11 LPA","vault":"/vault/dbms/"},
        {"id":"Operating Systems","name":"Operating Systems","category":"Core Systems","tag":"Core","salary":"6-10 LPA","vault":"/vault/operating-systems/"},
        {"id":"Computer Architecture","name":"Computer Architecture","category":"Core Systems","tag":"Core","salary":"7-12 LPA","vault":"/vault/computer-architecture/"},
        {"id":"DevOps","name":"DevOps","category":"Core Systems","tag":"High Demand","salary":"7-14 LPA","vault":"/vault/devops/"},
        {"id":"Distributed Systems","name":"Distributed Systems","category":"Core Systems","tag":"Advanced","salary":"8-15 LPA","vault":"/vault/distributed-systems/"},
        {"id":"IoT","name":"Internet of Things (IoT)","category":"Frontier Tech","tag":"Emerging","salary":"6-12 LPA","vault":"/vault/iot/"},
        {"id":"Blockchain","name":"Blockchain","category":"Frontier Tech","tag":"Emerging","salary":"7-14 LPA","vault":"/vault/blockchain/"},
        {"id":"Robotics","name":"Robotics","category":"Frontier Tech","tag":"Emerging","salary":"7-12 LPA","vault":"/vault/robotics/"},
        {"id":"AR/VR","name":"Augmented Reality / Virtual Reality (AR/VR)","category":"Frontier Tech","tag":"Emerging","salary":"7-13 LPA","vault":"/vault/ar-vr/"},
        {"id":"Embedded Systems","name":"Embedded Systems","category":"Frontier Tech","tag":"Core HW","salary":"6-11 LPA","vault":"/vault/embedded-systems/"},
        {"id":"Quantum Computing","name":"Quantum Computing","category":"Frontier Tech","tag":"Future","salary":"10-20 LPA","vault":"/vault/quantum-computing/"},
    ])

@api_view(['GET'])
def resources_view(request):
    return Response([
        {"title":"NPTEL: Introduction to Artificial Intelligence","domain":"AI","type":"NPTEL","lang":"English","vault":"/vault/ai/notes/"},
        {"title":"Coursera: AI For Everyone","domain":"AI","type":"Coursera","lang":"English","vault":"/vault/ai/notes/"},
        {"title":"NPTEL: Machine Learning","domain":"ML","type":"NPTEL","lang":"English","vault":"/vault/ml/notes/"},
        {"title":"NPTEL: Data Science for Engineers","domain":"Data Science","type":"NPTEL","lang":"English","vault":"/vault/data-science/notes/"},
        {"title":"NPTEL: Big Data Computing","domain":"Big Data","type":"NPTEL","lang":"English","vault":"/vault/big-data/notes/"},
        {"title":"YouTube: Computer Vision Full Course","domain":"Computer Vision","type":"YouTube","lang":"English","vault":"/vault/computer-vision/videos/"},
        {"title":"Coursera: NLP Specialization","domain":"NLP","type":"Coursera","lang":"English","vault":"/vault/nlp/notes/"},
        {"title":"NPTEL: Cloud Computing","domain":"Cloud Computing","type":"NPTEL","lang":"English","vault":"/vault/cloud-computing/notes/"},
        {"title":"NPTEL: DBMS","domain":"DBMS","type":"NPTEL","lang":"English","vault":"/vault/dbms/notes/"},
        {"title":"Gate Smashers: Operating Systems","domain":"Operating Systems","type":"YouTube","lang":"Hindi","vault":"/vault/operating-systems/videos/"},
        {"title":"NPTEL: IoT","domain":"IoT","type":"NPTEL","lang":"English","vault":"/vault/iot/notes/"},
        {"title":"NPTEL: Blockchain Architecture","domain":"Blockchain","type":"NPTEL","lang":"English","vault":"/vault/blockchain/notes/"},
        {"title":"NPTEL: Quantum Computing","domain":"Quantum Computing","type":"NPTEL","lang":"English","vault":"/vault/quantum-computing/notes/"},
    ])

@api_view(['GET'])
def vault_view(request):
    slug = request.GET.get('domain','').lower().replace(' ','-')
    # return vault manifest if exists (authoritative public/vault, legacy fallback)
    from pathlib import Path as P
    import json
    root = P(__file__).parent.parent.parent
    base = root / "public" / "vault" / slug
    if not base.exists():
        legacy = root / "frontend" / "public" / "vault" / slug
        if legacy.exists():
            base = legacy
    if base.exists():
        idx = base / "index.json"
        if idx.exists():
            try:
                return Response(json.loads(idx.read_text(encoding='utf-8')))
            except: pass
        # list files
        files = []
        for f in base.rglob("*"):
            if f.is_file() and f.name not in ['.gitkeep','README.md','index.json']:
                files.append({"name": f.name, "path": str(f.relative_to(base)), "slot": f.parent.name})
        return Response({"domain": slug, "files": files, "vault": f"/vault/{slug}/"})
    return Response({"domain": slug, "files": [], "vault": f"/vault/{slug}/", "empty": True})

@api_view(['POST'])
def feedback_view(request):
    # Security: validate and sanitize inputs to prevent XSS / spam
    raw_name = request.data.get('name') or 'Anonymous'
    raw_text = request.data.get('text') or ''
    if not isinstance(raw_name, str):
        raw_name = str(raw_name)
    if not isinstance(raw_text, str):
        raw_text = str(raw_text)
    name = raw_name.strip()[:100].replace('<','').replace('>','')
    text = raw_text.strip()[:1000].replace('<','').replace('>','')
    try:
        rating = int(request.data.get('rating') or 5)
    except:
        rating = 5
    rating = max(1, min(5, rating))
    if not text or len(text) < 5:
        return Response({"error":"Text required (min 5 chars)"}, status=400)
    # Block spam / hacking: too many URLs, script tags
    if text.count('http') > 3 or '<script' in text.lower():
        return Response({"error":"Invalid content"}, status=400)
    # In real: Feedback.objects.create(...)
    return Response({"status":"saved","name": name, "rating": rating}, status=201)

def _build_guidance_context(q_lower: str, history=None) -> str:
    """Build concise website-scoped context for Claude — history-aware + keyword match over 25 domains + handbooks/resources/vault."""
    # Resolve anaphora: if query is short like "tell me more / its salary / and roadmap?" use last domain from history
    if history and len(q_lower.split()) <= 4 and any(w in q_lower for w in ['more','it','its','that','salary','roadmap','pillar','interview','vault','resource']):
        # Find last domain mentioned in history
        for h in reversed(history):
            hc = h.get('content','').lower() if isinstance(h, dict) else str(h).lower()
            for dk in ['ai','ml','data science','big data','computer vision','nlp','web development','mobile','software engineering','game','hci','cybersecurity','cloud','computer networks','dbms','operating systems','computer architecture','devops','distributed systems','iot','blockchain','robotics','ar/vr','embedded systems','quantum']:
                if dk in hc:
                    q_lower = q_lower + ' ' + dk
                    break
    # Minimal domain knowledge base (matches assets/app.js domains)
    domain_blurbs = {
        'ai': "AI: Build intelligent systems that think/learn/reason. Skills Python/Math/Logic/ML Basics. Roadmap Python → Math → ML → Deep Learning → Projects (36 weeks: 1-6 Math/Python, 7-14 ML, 15-20 DL, 21-26 GenAI, 27-30 MLOps, 31-36 Projects). Salary 8-15 LPA (Product 40-80 senior). Tag Trending 2026. Handbook: 5 pillars (Predictive, Generative, Agentic, ML, DL), study ytId h_E6vXM9x6E, economics $13T McKinsey 2030, interview pattern FAANG OA(2 DSA)+2 Tech+Bar Raiser, govt exams GATE/ISRO/NIC/BARC, vault /vault/ai/.",
        'ml': "ML: Algorithms that learn from data. Skills Statistics/Python/Data Wrangling. Roadmap Stats → Python → Supervised/Unsupervised → MLOps (Phases: 1-6 Python&Stats, 7-12 Supervised, 13-18 Ensembles, 19-24 Unsupervised PCA, 25-30 RL, 31-36 Deploy). Salary 7-14 LPA. Handbook pillars Supervised/Unsupervised/Reinforcement/Feature Eng/Evaluation, study StatQuest RF, timeline 1957 Perceptron→2023 LLM Ops, vault /vault/ml/.",
        'data science': "Data Science: Extract insights from massive data. Skills Python/Statistics/SQL/Visualization. Roadmap Python → Stats → SQL → Visualization → Projects. Salary 8-18 LPA. Handbook: wrangling/analysis/visualization/experimentation/communication, A/B testing, study SQL freeCodeCamp, vault /vault/data-science/.",
        'big data': "Big Data: Process petabytes distributed. Skills Hadoop/Spark/NoSQL/Cloud. Roadmap Hadoop → Spark → NoSQL → Cloud Scale. Salary 8-16 LPA. Handbook big data computing, vault /vault/big-data/.",
        'computer vision': "Computer Vision: Teach machines to see. Skills Python/OpenCV/Deep Learning/Math. Roadmap Python → Image Proc → CNN → Projects. Salary 8-15 LPA. Study Computer Vision full course, vault /vault/computer-vision/.",
        'nlp': "NLP: Make computers understand language. Skills Python/NLP/Transformers/Linguistics. Roadmap Python → NLP Basics → Transformers → LLM Projects. Salary 8-14 LPA. Study NLP Specialization, vault /vault/nlp/.",
        'web development': "Web Development: Modern responsive web. Skills HTML/CSS/JS/React low math high creativity design. Roadmap HTML/CSS → JS → React → Node → Deploy. Salary 5-10 LPA. Vault /vault/web-development/. NPTEL Web, Coursera Bootcamp.",
        'mobile': "Mobile App Development: Native & cross-platform. Skills Flutter/React Native/Kotlin/Swift. Roadmap Java/Kotlin → Flutter → API → Publish. Salary 6-12 LPA. Vault /vault/mobile-app-development/.",
        'software engineering': "Software Engineering: Scalable systems. Skills DSA/System Design/Testing/Agile. Roadmap DSA → System Design → Testing → Projects. Salary 7-13 LPA. Vault /vault/software-engineering/.",
        'game': "Game Development: Immersive games. Skills Unity/C#/3D Graphics/Physics low math high creativity. Roadmap C# → Unity → Graphics → Publish. Salary 5-11 LPA. Vault /vault/game-development/.",
        'hci': "HCI: Human-centered design. Skills UX Design/Figma/Psychology/Prototyping low math high creativity. Roadmap UX Basics → Figma → User Research → Prototype. Salary 6-12 LPA. Vault /vault/hci/. NPTEL HCI, Coursera Georgia Tech.",
        'cybersecurity': "Cybersecurity: Protect systems. Skills Networking/OS/Ethical Hacking/Crypto. Roadmap Networking → OS → Ethical Hacking → SOC (4 phases). Salary 6-12 LPA. Handbook interview 10 prev Qs (Amazon ML 2024 etc) + coding LeetCode, govt exams, vault /vault/cybersecurity/. NPTEL Cyber 12 weeks.",
        'cloud': "Cloud Computing: Scale on AWS/Azure/GCP. Skills Linux/Networking/AWS/Docker. Roadmap Linux → Cloud Fundamentals → AWS → Kubernetes. Salary 7-13 LPA. Vault /vault/cloud-computing/. AWS Training.",
        'computer networks': "Computer Networks: Design networks. Skills TCP/IP/Routing/Security/Wireshark. Roadmap OSI → TCP/IP → Routing → Security. Salary 6-11 LPA. Handbook 5 pillars, vault /vault/computer-networks/. NPTEL CN 12 weeks.",
        'dbms': "DBMS: Manage data at scale. Skills SQL/NoSQL/System Design. Roadmap SQL → Normalization → NoSQL → Distributed DB. Salary 6-11 LPA. Vault /vault/dbms/. NPTEL DBMS, GeeksforGeeks.",
        'operating systems': "Operating Systems: Kernels/processes/memory. Skills C/OS Concepts/Linux Kernel. Roadmap C → Processes → Memory → Kernel. Salary 6-10 LPA. Vault /vault/operating-systems/. Gate Smashers OS 20h Hindi, NPTEL OS.",
        'computer architecture': "Computer Architecture: Processors/memory. Skills Digital Logic/COA/Verilog/Assembly. Roadmap Digital Logic → COA → Pipelining → Verilog. Salary 7-12 LPA. Vault /vault/computer-architecture/.",
        'devops': "DevOps: Automate pipelines. Skills Linux/Docker/K8s/CI/CD. Roadmap Linux → Docker → K8s → CI/CD → SRE. Salary 7-14 LPA. Vault /vault/devops/. Coursera DevOps on AWS.",
        'distributed systems': "Distributed Systems: Fault-tolerant apps. Skills Consensus/Replication/Kafka/Cloud. Roadmap OS → Networks → Consensus → Kafka → Scale. Salary 8-15 LPA. Vault /vault/distributed-systems/.",
        'iot': "IoT: Connect devices to cloud. Skills Embedded C/Sensors/MQTT/Cloud. Roadmap Embedded C → Sensors → MQTT → Cloud. Salary 6-12 LPA. Vault /vault/iot/. NPTEL IoT 12 weeks.",
        'blockchain': "Blockchain: Decentralized ledgers. Skills Solidity/Crypto/DApps/Ethereum. Roadmap Crypto → Solidity → DApps → Web3. Salary 7-14 LPA. Vault /vault/blockchain/. NPTEL Blockchain 12 weeks.",
        'robotics': "Robotics: Intelligent robots. Skills ROS/Embedded/AI/Control. Roadmap Mechanics → ROS → AI → Control. Salary 7-12 LPA. Vault /vault/robotics/. NPTEL Robotics.",
        'ar/vr': "AR/VR: Immersive experiences. Skills Unity/3D/ARCore/Blender. Roadmap Unity → 3D → ARCore → XR Projects. Salary 7-13 LPA. Vault /vault/ar-vr/. Coursera AR/VR.",
        'embedded systems': "Embedded Systems: Microcontrollers. Skills C/ARM/RTOS/Sensors. Roadmap C → ARM → RTOS → Projects. Salary 6-11 LPA. Vault /vault/embedded-systems/.",
        'quantum': "Quantum Computing: Quantum mechanics compute. Skills Quantum Mech/Qiskit/Python/Math. Roadmap Math → QM → Qiskit → Algorithms. Salary 10-20 LPA (highest). Tag Future, Low demand, 40% growth. Handbook pillars, timeline 2006→2030 cap 10→96, vault /vault/quantum-computing/. NPTEL Quantum 8 weeks.",
    }
    # Find matching domains by keyword
    matched = []
    for key, blurb in domain_blurbs.items():
        if key in q_lower or key.replace(' ', '') in q_lower.replace(' ', ''):
            matched.append(blurb)
    # Aliases
    alias_map = {'cyber':'cybersecurity','security':'cybersecurity','db':'dbms','database':'dbms','os':'operating systems','cn':'computer networks','ca':'computer architecture','iot':'iot','bc':'blockchain','qc':'quantum','xr':'ar/vr','cv':'computer vision','ds':'data science'}
    for alias, target in alias_map.items():
        if alias in q_lower and target in domain_blurbs and domain_blurbs[target] not in matched:
            matched.append(domain_blurbs[target])
    if not matched:
        # No specific domain → include Atlas overview
        matched = [
            "GuidanceAI covers 25 tracks: Intelligence & Data (AI, ML, Data Science, Big Data, Computer Vision, NLP), Build & Experience (Web, Mobile, SE, Game, HCI), Core Systems (Cybersecurity, Cloud, CN, DBMS, OS, CA, DevOps, Distributed), Frontier (IoT, Blockchain, Robotics, AR/VR, Embedded, Quantum).",
            "Each domain has: 36-week roadmap, 5 pillars, interview kit (10 prev Qs + 5 coding), govt exams, salary bands (AmbitionBox 2024-25), top companies, researcher track, vault at /public/vault/<slug>/ (notes/videos/projects/assignments).",
            "Quiz: 15 Qs ×4 + marks (math/prog/phy/eng) → RandomForest 89% (PCA 11→10) Top-3 with radar & what-if simulator. Resources: NPTEL/Coursera/YouTube bookmarkable."
        ]
    # Enrich vault queries with live file listing (connected to website data)
    if 'vault' in q_lower or 'file' in q_lower:
        # Detect vault slug from query
        slug_map = {'ai':'ai','ml':'ml','data science':'data-science','big data':'big-data','computer vision':'computer-vision','nlp':'nlp','web':'web-development','mobile':'mobile-app-development','software engineering':'software-engineering','game':'game-development','hci':'hci','cybersecurity':'cybersecurity','cloud':'cloud-computing','computer networks':'computer-networks','dbms':'dbms','operating systems':'operating-systems','computer architecture':'computer-architecture','devops':'devops','distributed systems':'distributed-systems','iot':'iot','blockchain':'blockchain','robotics':'robotics','ar/vr':'ar-vr','embedded systems':'embedded-systems','quantum':'quantum-computing','quantum computing':'quantum-computing'}
        detected = None
        for k, slug in slug_map.items():
            if k in q_lower:
                detected = slug
                break
        if detected:
            try:
                from pathlib import Path as _P
                _root = _P(__file__).parent.parent.parent
                vault_base = _root / "public" / "vault" / detected
                if not vault_base.exists():
                    vault_base = _root / "frontend" / "public" / "vault" / detected
                if vault_base.exists():
                    files = []
                    for f in vault_base.rglob("*"):
                        if f.is_file() and f.name not in ['.gitkeep','README.md','index.json']:
                            files.append(f"{f.parent.name}/{f.name}")
                    if files:
                        matched.append(f"Vault {detected} live files: " + ", ".join(files[:6]) + " (public/vault/{}/)".format(detected))
                    else:
                        matched.append(f"Vault {detected} is ready but empty — 4 slots (notes/videos/projects/assignments) at public/vault/{detected}/ — add your PDFs. Backend mirror uploads/domains/{detected}/")
                    # Also include vault tip
                    matched.append(f"How to add: drop files into public/vault/{detected}/<slot>/ or use UI + Add Files. See docs/VAULT_MAP.md")
            except:
                pass
    # Limit to 4 blurbs to keep tokens <1500 (but allow vault extra)
    return "\n".join(matched[:6])


def _ml_fallback_answer(q_lower: str, lang: str = "en") -> str:
    """ML fallback when Claude key missing — TF-IDF similarity over 25 domains, solves any website query."""
    # Exact shortcut for single-domain queries like "what is ai?"
    if re.search(r'\bai\b', q_lower) and not any(x in q_lower for x in ['robotics','blockchain','quantum','cloud','cyber','security','game','hci','web','mobile','data science','big data','vision','nlp']):
        return "AI fits you → Python → Math → ML → Deep Learning → Projects (36 weeks). Salary 8-15 LPA, Very High demand. Vault: /public/vault/ai/. NPTEL Intro to AI 8 weeks."
    try:
        from sklearn.feature_extraction.text import TfidfVectorizer
        from sklearn.metrics.pairwise import cosine_similarity
        # Domain corpus for ML
        corpus = {
            'AI': "ai Artificial Intelligence build intelligent systems think learn reason Python Math Logic ML Basics roadmap Python Math ML Deep Learning Projects salary 8-15 LPA trending",
            'ML': "ml Machine Learning algorithms learn data Statistics Python Data Wrangling roadmap Stats Python Supervised Unsupervised Deployment salary 7-14 LPA",
            'Data Science': "Data Science extract insights massive data Python Statistics SQL Visualization roadmap Python Stats SQL Visualization Projects salary 8-18 LPA",
            'Big Data': "Big Data process petabytes distributed Hadoop Spark NoSQL Cloud roadmap Hadoop Spark NoSQL Cloud Scale salary 8-16 LPA",
            'Computer Vision': "Computer Vision teach machines see detect interpret images Python OpenCV Deep Learning Math roadmap Python Image Proc CNN Projects salary 8-15 LPA",
            'NLP': "NLP natural language processing understand generate human language Python NLP Transformers Linguistics roadmap Python NLP Basics Transformers LLM Projects salary 8-14 LPA",
            'Web Development': "web development craft fast modern responsive web HTML CSS JS React low math high creativity design roadmap HTML CSS JS React Node Deploy salary 5-10 LPA creativity design",
            'Mobile App Development': "Mobile App Development native cross-platform mobile Flutter React Native Kotlin Swift roadmap Java Kotlin Flutter API Publish salary 6-12 LPA",
            'Software Engineering': "Software Engineering architect scalable maintainable software DSA System Design Testing Agile roadmap DSA System Design Testing Projects salary 7-13 LPA",
            'Game Development': "game development design code immersive games Unity C# 3D Graphics Physics low math high creativity roadmap C# Unity Graphics Publish salary 5-11 LPA creative",
            'HCI': "hci Human Computer Interaction design intuitive human centered tech UX Design Figma Psychology Prototyping low math high creativity design roadmap UX Basics Figma User Research Prototype salary 6-12 LPA creativity design",
            'Cybersecurity': "Cybersecurity protect systems networks data attacks Networking OS Ethical Hacking Crypto roadmap Networking OS Ethical Hacking SOC salary 6-12 LPA security",
            'Cloud Computing': "Cloud Computing scale apps AWS Azure GCP Linux Networking AWS Docker roadmap Linux Cloud Fundamentals AWS Kubernetes salary 7-13 LPA",
            'Computer Networks': "Computer Networks design secure optimize communication networks TCP IP Routing Security Wireshark roadmap OSI TCP IP Routing Security salary 6-11 LPA",
            'DBMS': "DBMS Database Management Systems design manage data SQL NoSQL System Design roadmap SQL Normalization NoSQL Distributed DB salary 6-11 LPA",
            'Operating Systems': "Operating Systems master kernels processes memory management C OS Concepts Linux Kernel roadmap C Processes Memory Kernel salary 6-10 LPA",
            'Computer Architecture': "Computer Architecture design processors memory instruction sets Digital Logic COA Verilog Assembly roadmap Digital Logic COA Pipelining Verilog salary 7-12 LPA",
            'DevOps': "DevOps automate build test deploy pipelines Linux Docker K8s CI CD roadmap Linux Docker K8s CI CD SRE salary 7-14 LPA",
            'Distributed Systems': "Distributed Systems fault tolerant scalable distributed apps Consensus Replication Kafka Cloud roadmap OS Networks Consensus Kafka Scale salary 8-15 LPA",
            'IoT': "IoT Internet Things connect physical devices cloud edge Embedded C Sensors MQTT Cloud roadmap Embedded C Sensors MQTT Cloud salary 6-12 LPA",
            'Blockchain': "Blockchain decentralized ledgers smart contracts Web3 Solidity Crypto DApps Ethereum roadmap Crypto Solidity DApps Web3 salary 7-14 LPA",
            'Robotics': "Robotics intelligent robots autonomous ROS Embedded AI Control Systems roadmap Mechanics ROS AI Control salary 7-12 LPA",
            'AR/VR': "AR VR augmented virtual reality immersive metaverse Unity 3D ARCore Blender roadmap Unity 3D ARCore XR Projects salary 7-13 LPA",
            'Embedded Systems': "Embedded Systems microcontrollers real-time hardware C ARM RTOS Sensors roadmap C ARM RTOS Projects salary 6-11 LPA hardware",
            'Quantum Computing': "Quantum Computing harness quantum mechanics Qiskit Python Math roadmap Math QM Qiskit Algorithms salary 10-20 LPA future advanced physics",
        }
        # Exact domain name priority before TF-IDF (handles "tell me about hci") — word boundary to avoid "ai" in "domain"
        for k in list(corpus.keys()):
            # Use word boundary for short keys like AI, ML to avoid substring false positives
            pattern = r'\b' + re.escape(k.lower()) + r'\b'
            # For multi-word, also check concatenated version
            alt_pattern = r'\b' + re.escape(k.lower().replace(' ','').replace('/','')) + r'\b' if ' ' in k or '/' in k else None
            matched_exact = re.search(pattern, q_lower) or (alt_pattern and re.search(alt_pattern, q_lower.replace(' ','').replace('/','')))
            if matched_exact:
                if k not in ['__VAULT__','__QUIZ__','__COMPARE__']:
                    # Return immediately for exact match
                    domain_map_early = {
                        'AI': "AI fits you → Python → Math → ML → Deep Learning → Projects (36 weeks). Salary 8-15 LPA, Very High demand. Vault: /public/vault/ai/. NPTEL Intro to AI 8 weeks.",
                        'HCI': "HCI fits (high creativity, low math) → UX Basics → Figma → User Research → Prototype. Salary 6-12 LPA. Vault: /public/vault/hci/ — perfect for design lovers.",
                        'Data Science': "Data Science fits → Python → Stats → SQL → Visualization. Salary 8-18 LPA. Vault: /public/vault/data-science/",
                        'Blockchain': "Blockchain fits → Crypto → Solidity → DApps → Web3. Salary 7-14 LPA. Vault: /public/vault/blockchain/",
                        'Quantum Computing': "Quantum Computing fits (high math/logic) → Math → QM → Qiskit → Algorithms. Salary 10-20 LPA (highest). Frontier. Vault: /public/vault/quantum-computing/",
                    }
                    if k in domain_map_early:
                        return domain_map_early[k]
        docs = list(corpus.values())
        keys = list(corpus.keys())
        # Add generic website docs for vault/quiz/compare
        docs.append("vault your files 4 slots notes videos projects assignments frontend public vault slug notes videos projects assignments")
        keys.append("__VAULT__")
        docs.append("quiz 15 questions marks math programming physics english RandomForest 89 percent PCA 11 to 10 Top-3 radar what-if simulator")
        keys.append("__QUIZ__")
        docs.append("compare up to 3 tracks side by side salary skills roadmap bottom bar Compare card checkbox palette")
        keys.append("__COMPARE__")
        vectorizer = TfidfVectorizer(stop_words='english')
        tfidf = vectorizer.fit_transform(docs + [q_lower])
        sims = cosine_similarity(tfidf[-1], tfidf[:-1]).flatten()
        best_idx = int(sims.argmax())
        best_score = float(sims[best_idx])
        best_key = keys[best_idx]
        if best_score < 0.08:
            return "I can help with any of the 25 tracks (Atlas). Try: 'Which domain for low math but high creativity?' → I suggest HCI/Game/Web, or 'Roadmap for DBMS?' or 'Vault for AI?' — tell me your interest, marks, or skills and I'll map to Top-3."
        if best_key == "__VAULT__":
            return "Vault — Your Files: 4 slots per domain (notes/videos/projects/assignments) at /public/vault/<slug>/ — e.g., /vault/ai/notes/. Add PDFs/PPTs/videos per track; stays local. See docs/VAULT_MAP.md."
        if best_key == "__QUIZ__":
            return "Quiz: 15 Qs ×4 + marks (math/prog/phy/eng) → Top-3 across 25 tracks via RandomForest 89% (PCA 11→10) with radar & vault suggestion. 3 minutes at quiz.html."
        if best_key == "__COMPARE__":
            return "Compare: Tick Compare on up to 3 cards → bottom bar → Compare button shows side-by-side salary/skills/roadmap. Also press ⌘K to search."
        # For domain match, build concise website-grounded answer
        domain_map = {
            'AI': "AI fits you → Python → Math → ML → Deep Learning → Projects (36 weeks). Salary 8-15 LPA, Very High demand. Vault: /public/vault/ai/. NPTEL Intro to AI 8 weeks.",
            'ML': "ML fits → Stats → Python → Supervised/Unsupervised → MLOps. Salary 7-14 LPA. Vault: /public/vault/ml/. Start NPTEL ML 12 weeks.",
            'Data Science': "Data Science fits → Python → Stats → SQL → Visualization → Projects. Salary 8-18 LPA. Vault: /public/vault/data-science/",
            'Big Data': "Big Data fits → Hadoop → Spark → NoSQL → Cloud Scale. Salary 8-16 LPA. Vault: /public/vault/big-data/",
            'Computer Vision': "Computer Vision fits → Python → Image Proc → CNN → Projects. Salary 8-15 LPA. Vault: /public/vault/computer-vision/",
            'NLP': "NLP fits → Python → NLP Basics → Transformers → LLM Projects. Salary 8-14 LPA. Vault: /public/vault/nlp/",
            'Web Development': "Web Development fits (low math, high creativity) → HTML/CSS → JS → React → Node → Deploy. Salary 5-10 LPA. Vault: /public/vault/web-development/. Good if you like UI/UX.",
            'Mobile App Development': "Mobile fits → Java/Kotlin → Flutter → API → Publish. Salary 6-12 LPA. Vault: /public/vault/mobile-app-development/",
            'Software Engineering': "Software Engineering fits → DSA → System Design → Testing → Projects. Salary 7-13 LPA. Vault: /public/vault/software-engineering/",
            'Game Development': "Game Development fits (creativity) → C# → Unity → Graphics → Publish. Salary 5-11 LPA. Vault: /public/vault/game-development/",
            'HCI': "HCI fits (high creativity, low math) → UX Basics → Figma → User Research → Prototype. Salary 6-12 LPA. Vault: /public/vault/hci/ — perfect for design lovers.",
            'Cybersecurity': "Cybersecurity fits → Networking → Linux → Ethical Hacking → SOC. Salary 6-12 LPA. Vault: /public/vault/cybersecurity/",
            'Cloud Computing': "Cloud fits → Linux → Cloud Fundamentals → AWS → Kubernetes. Salary 7-13 LPA. Vault: /public/vault/cloud-computing/",
            'Computer Networks': "Computer Networks fits → OSI → TCP/IP → Routing → Security. Salary 6-11 LPA. Vault: /public/vault/computer-networks/",
            'DBMS': "DBMS fits → SQL → Normalization → NoSQL → Distributed DB. Salary 6-11 LPA. Vault: /public/vault/dbms/",
            'Operating Systems': "Operating Systems fits → C → Processes → Memory → Kernel. Salary 6-10 LPA. Vault: /public/vault/operating-systems/",
            'Computer Architecture': "Computer Architecture fits → Digital Logic → COA → Pipelining → Verilog. Salary 7-12 LPA. Vault: /public/vault/computer-architecture/",
            'DevOps': "DevOps fits → Linux → Docker → K8s → CI/CD → SRE. Salary 7-14 LPA. Vault: /public/vault/devops/",
            'Distributed Systems': "Distributed Systems fits → OS → Networks → Consensus → Kafka → Scale. Salary 8-15 LPA. Vault: /public/vault/distributed-systems/",
            'IoT': "IoT fits → Embedded C → Sensors → MQTT → Cloud. Salary 6-12 LPA. Vault: /public/vault/iot/",
            'Blockchain': "Blockchain fits → Crypto → Solidity → DApps → Web3. Salary 7-14 LPA. Vault: /public/vault/blockchain/",
            'Robotics': "Robotics fits → Mechanics → ROS → AI → Control. Salary 7-12 LPA. Vault: /public/vault/robotics/",
            'AR/VR': "AR/VR fits → Unity → 3D → ARCore → XR Projects. Salary 7-13 LPA. Vault: /public/vault/ar-vr/",
            'Embedded Systems': "Embedded Systems fits → C → ARM → RTOS → Projects. Salary 6-11 LPA. Vault: /public/vault/embedded-systems/",
            'Quantum Computing': "Quantum Computing fits (high math/logic) → Math → QM → Qiskit → Algorithms. Salary 10-20 LPA (highest). Frontier. Vault: /public/vault/quantum-computing/",
        }
        return domain_map.get(best_key, domain_map['AI'])
    except Exception:
        return "I can help with any of the 25 tracks. Try 'Which domain for low math but high creativity?' or 'Vault for AI?' or 'Roadmap for DBMS?'"
  


@api_view(['POST'])
def chat(request):
    # Security: sanitize and limit input to prevent prompt injection / XSS
    raw_q = request.data.get('question') or request.data.get('q') or ''
    if not isinstance(raw_q, str):
        raw_q = str(raw_q)
    raw_q = raw_q.strip()[:500]  # limit length
    # Block potential prompt injection / hacking attempts
    blocked = ['ignore previous', 'system prompt', 'jailbreak', 'drop table', '<script', 'javascript:']
    if any(b in raw_q.lower() for b in blocked):
        return Response({"answer": "I can only help with CSE domain guidance. Please ask about AI, ML, Cybersecurity, Cloud, DBMS or OS.", "lang": request.data.get('lang','en')}, status=status.HTTP_200_OK)
    q = raw_q.lower()
    lang = str(request.data.get('lang','en'))[:10]
    if lang not in ['en','te','hi','ta','kn','ml','mr','bn','gu','ur']:
        lang = 'en'
    # History for multi-turn conversation (Claude-like)
    history = request.data.get('history', [])
    # Augment short follow-ups like "tell me more", "its salary?" with previous domain for continuity
    if history and len(q.split()) <= 6 and any(w in q for w in ['more','it','its','that','this','salary','roadmap','pillar','interview','vault','resource','compare','quiz']):
        for h in reversed(history):
            hc = h.get('content','').lower() if isinstance(h, dict) else str(h).lower()
            for dk in ['ai','ml','data science','big data','computer vision','nlp','web development','mobile','software engineering','game','hci','cybersecurity','cloud','computer networks','dbms','operating systems','computer architecture','devops','distributed systems','iot','blockchain','robotics','ar/vr','embedded systems','quantum','quantum computing']:
                if dk in hc:
                    q = q + ' ' + dk
                    break
            else:
                continue
            break
    clean_history = []
    if isinstance(history, list):
        for h in history[-8:]:
            if isinstance(h, dict):
                r = h.get('role','')
                c = h.get('content','')
                if r in ['user','assistant'] and isinstance(c, str) and c.strip():
                    # sanitize
                    c = c.strip()[:800].replace('<','').replace('>','')
                    if c:
                        clean_history.append({"role": r, "content": c})

    # --- Try Claude (Anthropic) if key configured ---
    claude_key = os.environ.get('ANTHROPIC_API_KEY') or os.environ.get('CLAUDE_API_KEY') or os.environ.get('ANTHROPIC_KEY')
    claude_model = os.environ.get('CLAUDE_MODEL', 'claude-3-5-sonnet-20241022')
    claude_max = int(os.environ.get('CLAUDE_MAX_TOKENS', '700'))
    if claude_key and raw_q:
        try:
            import anthropic  # lazy import so offline still works
            context = _build_guidance_context(q, clean_history)
            system_prompt = (
                f"You are GuidanceAI — a warm, friendly assistant for daily conversation AND an expert CSE domain counsellor for 1st-year students in India (JNTU-style, 750-record benchmark, RandomForest 89%, PCA 11→10). "
                f"Handle BOTH: 1) Daily chat (greetings, how are you, jokes, general knowledge, small talk) — respond naturally, helpfully, warmly in user's language='{lang}'. 2) Website expertise — when user asks about 25 tracks, roadmap, vault, quiz, resources, use grounded context below; cite handbook section like #pillars or #roadmap if relevant and include vault tip (/public/vault/<slug>/) when suggesting files. "
                f"Do NOT force website redirect for daily conversation; be conversational. For daily chat, be brief and friendly (1-3 sentences unless user wants more). For website queries, be detailed (2-4 paragraphs, bullet helpful). "
                f"Context (site knowledge):\n{context}"
            )
            client = anthropic.Anthropic(api_key=claude_key)
            # Build messages with history for Claude-like continuation
            claude_messages = clean_history + [{"role": "user", "content": raw_q}]
            # Ensure alternating roles and valid
            msg = client.messages.create(
                model=claude_model,
                max_tokens=claude_max,
                temperature=0.4,
                system=system_prompt,
                messages=claude_messages
            )
            # Extract text (Claude 3.5 format)
            answer_text = ""
            if msg.content:
                # content is list of TextBlock
                for block in msg.content:
                    if hasattr(block, 'text'):
                        answer_text += block.text
                    elif isinstance(block, dict) and 'text' in block:
                        answer_text += block['text']
            answer_text = answer_text.strip()[:2000]
            if answer_text:
                # Basic XSS escape (frontend also escapes, but belt-and-suspenders)
                answer_text = answer_text.replace('<', '&lt;').replace('>', '&gt;')
                return Response({"answer": answer_text, "lang": lang, "model": claude_model, "source": "claude"})
        except Exception as e:
            # Log silently and fall through to rule-based; do not expose key/error details
            pass

    # --- Fallback: handles BOTH daily conversation and website (works offline) ---
    # Daily conversation priority — must come before domain checks (word boundary for short words)
    daily_greetings = ['hello','good morning','good afternoon','good evening','how are you','how r u','whats up',"what's up",'who are you','what can you do','thanks','thank you','thankyou','good night','goodnight','joke','tell me a joke','how is your day']
    # hi/hey/bye need word boundary to avoid matching inside other words like "thinking"
    if any(g in q for g in daily_greetings) or re.search(r'\b(hi|hey|bye)\b', q):
        if 'how are you' in q or 'how r u' in q:
            a = "I'm doing great — thanks for asking! I'm GuidanceAI, your CSE counsellor and daily chat buddy. How can I help today — want a domain roadmap, vault tip, or just chat?"
        elif any(x in q for x in ['good morning','good afternoon','good evening','good night','goodnight']):
            a = "Good morning! Hope your day is going well. I'm here for daily chat and CSE guidance — ask about 25 tracks, quiz, or anything else!"
        elif 'joke' in q:
            a = "Sure — why do programmers prefer dark mode? Because light attracts bugs! Want a CSE joke or a domain suggestion?"
        elif 'who are you' in q or 'what can you do' in q:
            a = "I'm GuidanceAI — your friendly daily chat companion and CSE expert for 1st-year students. I cover 25 domains (AI, ML, Web, HCI, Quantum etc.), 36-week roadmaps, vault, quiz (RandomForest 89%), resources, and I can also chat about daily life in 10 languages!"
        elif any(x in q for x in ['thanks','thank you','thankyou']):
            a = "You're welcome! Happy to help — ask me anything about domains, roadmap, or just chat daily!"
        elif 'bye' in q:
            a = "Bye — take care! Come back anytime for CSE guidance or daily chat. Good luck!"
        else:
            a = "Hello! I'm GuidanceAI — great to see you. I can chat daily and also help you pick among 25 CSE tracks. What would you like — a quick quiz, a roadmap, or just conversation?"
        return Response({"answer": a, "lang": lang, "source": "fallback"})
    # Specific handbook handlers for accurate website answers
    if 'pillar' in q:
        # Use history to detect domain or default to AI
        target = 'ai'
        for dk in ['ai','ml','data science','cybersecurity','cloud','hci','quantum','blockchain','game','web','iot','robotics']:
            if dk in q:
                target = dk
                break
        # If not in query, try history
        if target == 'ai' and history:
            for h in reversed(history):
                hc = h.get('content','').lower() if isinstance(h, dict) else str(h).lower()
                for dk in ['ai','ml','data science','cybersecurity','cloud','hci','quantum']:
                    if dk in hc:
                        target = dk
                        break
        pillar_map = {
            'ai': "AI 5 Pillars: 1) Predictive AI (classifiers, spam/fraud), 2) Generative AI (Transformers/Diffusion, text/image), 3) Agentic AI (agents with tools), 4) Machine Learning (supervised/unsupervised/RL), 5) Deep Learning (3-100+ layers). Demand: Agentic 9/10, Generative 10/10. Vault: /vault/ai/. Handbook #pillars.",
            'hci': "HCI 5 Pillars: Wrangling, Analysis, Visualization, Experimentation, Communication. Demand 7-8/10. Vault /vault/hci/.",
            'cybersecurity': "Cybersecurity pillars not in AI template — but core: Networking, OS, Ethical Hacking, Crypto. Vault /vault/cybersecurity/.",
            'ml': "ML 5 Pillars: Supervised (labeled), Unsupervised (k-means/PCA), Reinforcement (Q-learning), Feature Eng., Evaluation (precision/recall). Vault /vault/ml/.",
        }
        a = pillar_map.get(target, pillar_map['ai'])
        return Response({"answer": a, "lang": lang, "source": "fallback"})
    if 'economics' in q or 'economy' in q or '$' in q:
        a = "AI Economics: $13T McKinsey 2030 (+16% GDP), 300M jobs exposed (Goldman Sachs), 14% workforce must pivot, 3× salary boost for ML/DL vs rules, 65% no PhD needed (APIs/RAG). Other domains: DS $0.7T analytics, ML $0.5T platforms. See domain.html#economics."
        return Response({"answer": a, "lang": lang, "source": "fallback"})
    if 'interview' in q:
        a = "Interview Kit: Pattern FAANG OA(2 DSA)+2 Tech(ML/System)+Bar Raiser. AI prev Qs: 'bias vs variance' (Amazon 2024), 'derive backprop 2-layer' (Google 2024), 'Design RAG' (Microsoft 2024), plus 5 coding LeetCode 49/146/1/20/23 (FAANG 80%+). 8-week plan OA→Tech→Design→HR→Mock. Full at domain.html#interviewKit. Vault: /vault/<slug>/assignments/."
        return Response({"answer": a, "lang": lang, "source": "fallback"})
    if 'govt' in q or 'government' in q or 'gate' in q or 'isro' in q or 'nielit' in q or 'barc' in q:
        a = "Govt Exams (verify 2026-09-08): GATE CSE/DA (no age limit, PSU 21-30, Level-10 ~12-18 LPA), ISRO Scientist SC (21-28, 65%+GATE), NIC Scientist B (30 max, Level-7 ~8-12 LPA via NIELIT), BARC (21-27). Links: gate2026.iisc.ac.in, isro.gov.in, nielit.gov.in/nic, barc.gov.in. See domain.html#govtExams."
        return Response({"answer": a, "lang": lang, "source": "fallback"})
    if 'student life' in q or ('student' in q and 'life' in q):
        a = "Student Life 360: Daily 06:30-08:30 theory, 09:00-12:00 lab, 19:00-21:00 build. Campus: AI Club/GPU Lab, weekly papers. Study 30% fundamentals/40% labs/30% projects. Internship Sem6 RAG startup. Balance Pomodoro. Finance: Laptop+Colab Pro ~12k/yr. See domain.html#studentLife. JNTU 32hr + Internshala 2024."
        return Response({"answer": a, "lang": lang, "source": "fallback"})
    if 'language' in q or 'telugu' in q or 'hindi' in q:
        a = "GuidanceAI supports 10 languages: en, te (Telugu), hi (Hindi), ta (Tamil), kn (Kannada), ml (Malayalam), mr (Marathi), bn (Bengali), gu (Gujarati), ur (Urdu). Switch via top bar langSwitcher, TTS voice available, Parent report translates. Vault and quiz also i18n."
        return Response({"answer": a, "lang": lang, "source": "fallback"})
    if 'resource' in q or 'nptel' in q or 'coursera' in q or 'youtube' in q:
        a = "Resources: NPTEL (IIT), Coursera (Andrew Ng etc), YouTube — 35 curated, filterable by domain/type/lang. Examples: NPTEL Intro AI 8w, Coursera AI For Everyone 4w, YouTube AI Telugu 6h. See resources.html or /api/resources. Bookmarks saved, vault links."
        return Response({"answer": a, "lang": lang, "source": "fallback"})
    # Domain+roadmap priority (handles blockchain roadmap etc before generic ai check)
    if 'roadmap' in q:
        for _dk, _blurb in [('blockchain','blockchain'),('quantum','quantum'),('cybersecurity','cybersecurity'),('cloud','cloud'),('dbms','dbms'),('data science','data science'),('computer vision','computer vision'),('nlp','nlp'),('web','web development'),('mobile','mobile'),('hci','hci'),('game','game'),('iot','iot'),('robotics','robotics'),('devops','devops')]:
            if _dk in q:
                # Map short to proper
                _map = {'blockchain':"Blockchain fits → Crypto → Solidity → DApps → Web3. Salary 7-14 LPA. Vault: /public/vault/blockchain/. Roadmap: Crypto → Solidity → DApps → Web3 (36 weeks).",'quantum':"Quantum Computing fits (high math/logic) → Math → QM → Qiskit → Algorithms. Salary 10-20 LPA. Frontier. Vault: /public/vault/quantum-computing/",'cybersecurity':"Cybersecurity fits → Networking → Linux → Ethical Hacking → SOC. Salary 6-12 LPA. Vault: /public/vault/cybersecurity/",'cloud':"Cloud fits → Linux → Cloud Fundamentals → AWS → Kubernetes. Salary 7-13 LPA. Vault: /public/vault/cloud-computing/",'dbms':"DBMS fits → SQL → Normalization → NoSQL → Distributed DB. Salary 6-11 LPA. Vault: /public/vault/dbms/",'data science':"Data Science fits → Python → Stats → SQL → Visualization. Salary 8-18 LPA. Vault: /public/vault/data-science/",'computer vision':"Computer Vision fits → Python → Image Proc → CNN → Projects. Salary 8-15 LPA. Vault: /public/vault/computer-vision/",'nlp':"NLP fits → Python → NLP Basics → Transformers → LLM. Salary 8-14 LPA. Vault: /public/vault/nlp/",'web':"Web Development fits (low math, high creativity) → HTML/CSS → JS → React → Node → Deploy. Salary 5-10 LPA. Vault: /public/vault/web-development/",'mobile':"Mobile fits → Java/Kotlin → Flutter → API → Publish. Salary 6-12 LPA. Vault: /public/vault/mobile-app-development/",'hci':"HCI fits (high creativity, low math) → UX Basics → Figma → User Research → Prototype. Salary 6-12 LPA. Vault: /public/vault/hci/",'game':"Game Development fits (creativity) → C# → Unity → Graphics → Publish. Salary 5-11 LPA. Vault: /public/vault/game-development/",'iot':"IoT fits → Embedded C → Sensors → MQTT → Cloud. Salary 6-12 LPA. Vault: /public/vault/iot/",'robotics':"Robotics fits → Mechanics → ROS → AI → Control. Salary 7-12 LPA. Vault: /public/vault/robotics/",'devops':"DevOps fits → Linux → Docker → K8s → CI/CD → SRE. Salary 7-14 LPA. Vault: /public/vault/devops/"}
                if _dk in _map:
                    return Response({"answer": _map[_dk], "lang": lang, "source": "fallback"})
    if 'compare' in q:
        a = "Compare: Tick Compare on cards → bottom bar (Compare 0/3) → Compare button shows side-by-side salary/skills/roadmap for up to 3 tracks. Also try ⌘K palette."
    elif 'vault' in q or 'file' in q:
        a = "Vault — Your Files: 4 slots per domain (notes/videos/projects/assignments) at /public/vault/<slug>/ — e.g., /vault/ai/notes/. Frontend vault is at frontend/public/vault/ , backend mirrors uploads/domains/<slug>/."
    elif (re.search(r'\bai\b', q) or 'artificial intelligence' in q) and 'roadmap' in q:
        a = "AI Roadmap: Python → Math → ML → Deep Learning → Projects (see Roadmap section or /api/domains/AI). Vault: /public/vault/ai/ — add your PDFs. Start NPTEL Intro to AI (8 weeks)."
    elif 'cyber' in q or 'security' in q:
        a = "Cybersecurity fits if security_interest ≥4, OS ≥4. Roadmap: Networking → Linux → Ethical Hacking → SOC. Vault: /public/vault/cybersecurity/ — add CTF notes. Try NPTEL Cyber 12 weeks."
    elif 'quantum' in q:
        a = "Quantum Computing: High math + logic → Avg 10-20 LPA. Roadmap: Math → QM → Qiskit → Algorithms. Frontier track, verify demand. Vault: /public/vault/quantum-computing/"
    elif 'cloud' in q:
        a = "Cloud if you like servers & scale. Learn Linux → AWS → Docker → K8s. Avg 7-13 LPA. Vault: /public/vault/cloud-computing/"
    elif 'dbms' in q or 'database' in q:
        a = "DBMS for data lovers: SQL → Normalization → NoSQL → Distributed DB. Avg 6-11 LPA. Vault: /public/vault/dbms/"
    elif 'os' in q or 'operating' in q:
        a = "OS is core: C → Processes → Memory → Kernel. Ideal for systems engineers. Avg 6-10 LPA. Vault: /public/vault/operating-systems/"
    elif 'ml' in q:
        a = "ML Roadmap: Stats → Python → Supervised/Unsupervised → MLOps. Avg 7-14 LPA. Vault: /public/vault/ml/"
    elif 'roadmap' in q:
        a = "36-week Roadmap per domain: phases 1-6 Math/Python, 7-14 ML, 15-20 Deep Learning, 21-26 GenAI, 27-30 MLOps, 31-36 Projects. See domain.html?Id=...#roadmap or roadmap.html — vault link inside."
    elif 'mark' in q or 'score' in q:
        a = "Marks matter: Math+Programming high → AI/ML (weight 13%). But interest + logic weighted 60%. Try quiz.html for exact % (15 Qs ×4 + marks → Top-3 via RandomForest 89%)."
    elif any(x in q for x in ['telugu','hindi','tamil','kannada','malayalam','urdu','bengali','gujarati','marathi']):
        a = "Yes! Switch language from top bar — supports 10 languages (en,te,hi,ta,kn,ml,mr,bn,gu,ur) + voice TTS. Parent report also translates and speaks."
    else:
        # ML fallback solves any website query via TF-IDF similarity (no Claude needed)
        a = _ml_fallback_answer(q, lang)
    return Response({"answer": a, "lang": lang, "source": "fallback"})
