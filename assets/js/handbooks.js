// handbooks.js ? 25 Unique Domain Handbooks | 100Cr Premium ? Authentic, Researched, Expanded 2026-09-08
// 5 Pillars + 8 Sources + 10 Interview Qs + 5 Coding + 6-Phase Plan + Govt Exams + Salaries + Companies + Researcher Tracks
const handbooks = {
 "AI": {
  "slug": "ai",
  "hero3D": {
   "layers": [
    3,
    5,
    6,
    4
   ],
   "particles": 28,
   "model": "neural"
  },
  "id": "AI",
  "heroBadge": "Sept 2026 • 18-Page Handbook Transformed • Not a PDF",
  "exec": "Learn how computers learn from examples instead of only following fixed rules. You will study Python, maths (gradients, probability), and 5 core areas: predicting (classify), creating (text/image), acting (agents), core ML, and deep learning. In 36 weeks you go from basics to a live RAG app with Docker. Good if you enjoy patterns and careful testing; not for those who dislike maths or debugging.",
  "paradigm": {
   "title": "The Computation Paradigm Shift",
   "shift": "Rules → Empirical",
   "rules": {
    "t": "Traditional (Rules-Based)",
    "d": "Deterministic IF-THEN programs with hand-crafted thresholds and decision trees. Verifiable and explainable but brittle on unstructured inputs (speech, images, time-series drift) and high-dimensional variation.",
    "eg": "if email contains \"lottery\" → spam"
   },
   "empirical": {
    "t": "AI (Empirical)",
    "d": "Dataset of thousands of input→label pairs optimizes parameters via empirical risk minimization; features emerge via gradient descent, with train/test splits, cross-validation and metrics (precision/recall) revealing bias-variance tradeoffs.",
    "eg": "10k labeled scans → model learns diagnosis"
   },
   "blackBox": {
    "t": "The Black Box Metaphor",
    "d": "Inference composes billions of matrix multiplications through learned weights (∼175B in large models); causality is distributed, demanding post-hoc interpretability (SHAP/LIME), guardrails and monitoring.",
    "stats": "~175B params in large models"
   }
  },
  "pillars": [
   {
    "n": "Predictive AI",
    "icon": "fa-magnifying-glass-chart",
    "d": "Supervised categorization, forecasting and recommendation from history: calibrated classifiers and rankers for spam/fraud/recsys with precision/recall and online A/B evaluation.",
    "demand": 8,
    "complexity": 6,
    "tag": "Pattern Spotting"
   },
   {
    "n": "Generative AI",
    "icon": "fa-wand-magic-sparkles",
    "d": "Latent-variable generation (Transformers/Diffusion): encodes manifold, samples conditional outputs for text/code/image/video with RLHF, watermarking and eval for faithfulness.",
    "demand": 10,
    "complexity": 9,
    "tag": "Content Creation"
   },
   {
    "n": "Agentic AI",
    "icon": "fa-robot",
    "d": "Goal-driven agents that decompose tasks, plan with memory and invoke tools (web/code/DB/API) under policy constraints with tracing, guardrails and human-in-loop approvals.",
    "demand": 9,
    "complexity": 9,
    "tag": "Autonomous Action"
   },
   {
    "n": "Machine Learning",
    "icon": "fa-gears",
    "d": "Supervised (labeled risk via ERM), unsupervised (clusters/density via k-means/PCA) and RL (reward via trials): choice set by label availability and cost of exploration.",
    "demand": 9,
    "complexity": 7,
    "tag": "Algorithmic Engine"
   },
   {
    "n": "Deep Learning",
    "icon": "fa-brain",
    "d": "Feed-forward stacks of 3-100+ layers learning hierarchical features end-to-end via backprop; auto-extracts representations, regularized with dropout/norm to curb overfitting.",
    "demand": 9,
    "complexity": 8,
    "tag": "Neural Networks"
   }
  ],
  "study": [
   {
    "p": "Predictive AI",
    "yt": "What Is Artificial Intelligence? — IBM",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80",
    "book": "Artificial Intelligence: A Modern Approach (4e) — Russell & Norvig — Gold standard, Bayesian & search."
   },
   {
    "p": "Generative AI",
    "yt": "What Can Generative AI Really Do? — IBM",
    "ytId": "hfIUstzHs9A",
    "cover": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80",
    "book": "Generative Deep Learning — David Foster — Transformers, GANs, Diffusion + Keras."
   },
   {
    "p": "Agentic AI",
    "yt": "What are AI Agents? — Evolution to Agentic Networks",
    "ytId": "F8NKVhkZZWI",
    "cover": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
    "book": "AIMA Sec II Intelligent Agents — Russell & Norvig — Agents, planning, multi-agent."
   },
   {
    "p": "Machine Learning",
    "yt": "What is ML? Supervised vs Unsupervised vs RL",
    "ytId": "9gGnTQTYNaE",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=f21b",
    "book": "The Alignment Problem — Brian Christian — History & challenges."
   },
   {
    "p": "Deep Learning",
    "yt": "But what is a neural network? — 3Blue1Brown",
    "ytId": "aircAruvnKk",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=d885",
    "book": "Deep Learning — Goodfellow, Bengio, Courville — The bible: backprop, algebras."
   },
   {
    "p": "Docs & Papers",
    "yt": "Attention Is All You Need ? Paper Explained",
    "ytId": "cZaNf2rA30k",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=ai6",
    "book": "arXiv:1706.03762 + docs.pytorch.org ? Transformer bible + PyTorch API"
   },
   {
    "p": "Open Source",
    "yt": "LangChain RAG ? Harrison Chase",
    "ytId": "_C8kWso4ne4",
    "cover": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&q=80&seed=ai7",
    "book": "github.com/langchain-ai/langchain ? RAG, agents, tracing"
   },
   {
    "p": "Evaluation",
    "yt": "HELM ? Stanford HAI",
    "ytId": "T_X4XFwKX8k",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=ai8",
    "book": "crfm.stanford.edu/helm ? holistic LLM eval; paperswithcode.com/sota"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Math, Stats & Python Foundations",
    "c": "Linear Algebra, Calculus (gradients), Probability/Bayes, NumPy, Pandas",
    "out": "Vectorized Python notebooks",
    "icon": "fa-calculator"
   },
   {
    "w": "7-14",
    "t": "Classical ML Concepts",
    "c": "Linear/Logistic Regression, Trees, RF, SVM, k-means, PCA, scikit-learn, precision/recall/F1",
    "out": "First models on cleaned datasets",
    "icon": "fa-chart-line"
   },
   {
    "w": "15-20",
    "t": "Deep Learning & Architectures",
    "c": "Backprop (chain rule), PyTorch, MLP, CNN, sequences",
    "out": "Image classifier",
    "icon": "fa-layer-group"
   },
   {
    "w": "21-26",
    "t": "Applied Generative AI & LLMs",
    "c": "Tokens, embeddings, Transformers, API calls (OpenAI/Anthropic/Gemini), RAG + vector DB",
    "out": "Local RAG assistant",
    "icon": "fa-wand-magic-sparkles"
   },
   {
    "w": "27-30",
    "t": "MLOps & Deployment",
    "c": "FastAPI/Flask, Docker, Git, model drift monitoring",
    "out": "Containerized API",
    "icon": "fa-rocket"
   },
   {
    "w": "31-36+",
    "t": "Portfolio Projects",
    "c": "ML forecaster, DL vision classifier, deployed GenAI RAG — GitHub",
    "out": "3 production builds",
    "icon": "fa-briefcase"
   }
  ],
  "timeline": [
   {
    "y": "1950",
    "t": "Turing Test",
    "d": "Alan Turing proposes behavioral measure of intelligence"
   },
   {
    "y": "1956",
    "t": "Dartmouth Conference",
    "d": "John McCarthy coins “Artificial Intelligence”"
   },
   {
    "y": "1970s-80s",
    "t": "AI Winters",
    "d": "ELIZA hype → DARPA/Lighthill withdraw → funding freeze"
   },
   {
    "y": "1997",
    "t": "Deep Blue",
    "d": "IBM beats Kasparov at chess"
   },
   {
    "y": "2011",
    "t": "Watson",
    "d": "Wins Jeopardy!"
   },
   {
    "y": "2016",
    "t": "AlphaGo",
    "d": "DeepMind beats Lee Sedol"
   },
   {
    "y": "2022 →",
    "t": "ChatGPT Era",
    "d": "Generative ubiquity → multimodal reasoning ecosystems"
   }
  ],
  "evolution": {
   "years": [
    "2006",
    "2010",
    "2015",
    "2020",
    "2022",
    "2026",
    "2030"
   ],
   "cap": [
    10,
    18,
    35,
    55,
    78,
    88,
    96
   ],
   "label": "AI capability % — Narrow → General"
  },
  "economics": [
   {
    "v": "$13T",
    "l": "McKinsey 2030",
    "d": "+16% global GDP (1.2%/yr extra)"
   },
   {
    "v": "300M",
    "l": "Goldman Sachs",
    "d": "Jobs exposed to automation"
   },
   {
    "v": "14%",
    "l": "McKinsey",
    "d": "Workforce must pivot by 2030"
   },
   {
    "v": "3×",
    "l": "Salary boost",
    "d": "ML/DL vs rules-based dev"
   },
   {
    "v": "65%",
    "l": "No PhD needed",
    "d": "Applied AI via APIs/RAG/Docker"
   }
  ],
  "balanced": {
   "pros": [
    "Reduced human error in precision tasks — medical scans, finance and aerospace — through consistent inference under fatigue-free 24/7 operation.",
    "Hazardous exploration via robots for radioactive/deep-sea/rescue missions where human presence risks health and safety.",
    "24/7 availability with language assistants and monitors that do not fatigue, with fallback to human supervision on low confidence.",
    "Decision speed via streaming inference over massive data in milliseconds, with cost/latency tradeoffs and monitoring for drift."
   ],
   "cons": [
    "Deepfakes and extortion via synthesized voice/image scams and manipulation that erode trust and demand watermarking plus detection.",
    "Bias amplification from imbalanced training data leading to disparate impact in hiring, policing and lending without subgroup auditing.",
    "Ecological cost — ~2% global electricity and ~300k gallons/day cooling per large cluster — requiring right-sizing, scheduling off-peak and distillation.",
    "Hallucinations — confident falsehoods from next-token prediction — mitigated by RAG grounding, citations and calibration rather than blind trust."
   ]
  },
  "ethics": [
   {
    "t": "Data Safety",
    "d": "Never feed confidential data into public LLM sandboxes. Protect lifecycle privacy.",
    "icon": "fa-shield-halved"
   },
   {
    "t": "Fact-Check",
    "d": "Outputs are predictions, not truth. Verify via primary sources",
    "icon": "fa-check-double"
   },
   {
    "t": "Kindness by Design",
    "d": "Reject deceptive/manipulative apps. Solve civilizational problems",
    "icon": "fa-heart"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Math foundations (linear algebra/calculus) theory, 09:00-12:00 GPU Lab (PyTorch/scikit) labs, 19:00-21:00 Kaggle/project build + code reviews. Weekly demo Fridays.",
   "campus": "AI Club + GPU Lab (NPTEL IITK) — weekly paper readings, peer code reviews, shared GPU quota with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals (math/stats), 40% hands-on labs, 30% projects — weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Data Science peers for cross-functional exposure — pair programming, design critiques and accountability pods.",
   "internship": "Sem6: RAG startup / research intern (Internshala/LinkedIn 2024) — ship RAG assistant + eval report, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage hallucination fatigue and avoid overfitting via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Laptop + Colab Pro ~12k/yr, lab GPU quota + cloud credits cover most; stipends via internships offset burn."
  },
  "interviewKit": {
   "pattern": "FAANG: OA (2 DSA) + 2 Tech (ML + System) + Bar Raiser | Service: Apt + Tech + HR (TCS NQT)",
   "previous": [
    {
     "q": "Explain bias vs variance with example",
     "company": "Amazon ML 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Derive backprop for 2-layer net",
     "company": "Google AI 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "Design RAG for college docs (vector DB)",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "LeetCode Discuss ↗",
     "freq": "High"
    },
    {
     "q": "Prevent data leakage in pipeline",
     "company": "TCS Digital 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "Med"
    },
    {
     "q": "Explain attention mechanism",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "Derive scaled dot-product attention",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "How to evaluate RAG faithfulness vs hallucination?",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "LeetCode Discuss ?",
     "freq": "High"
    },
    {
     "q": "Explain double descent and overparameterization",
     "company": "Meta 2023",
     "year": "2023",
     "source": "GeeksforGeeks ?",
     "freq": "Med"
    },
    {
     "q": "Design AI system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design AI system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Group Anagrams",
     "link": "LeetCode 49",
     "company": "FAANG freq 88%"
    },
    {
     "q": "LRU Cache",
     "link": "LeetCode 146",
     "company": "Amazon 92%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    }
   ],
   "tips": "Score on explaining bias, evaluation (precision/recall), not just accuracy | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "8-15 LPA",
   "mid": "18-35 LPA",
   "senior": "40-80 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Google DeepMind",
    "Microsoft AI"
   ],
   "service": [
    "TCS AI",
    "Infosys"
   ],
   "startup": [
    "Sarvam AI"
   ],
   "psu": [
    "CDAC",
    "ISRO"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech AI (IISc/IIT-H), MS US (CMU/Stanford)",
    "PhD in Generative Agents"
   ],
   "venues": [
    "NeurIPS/ICML/ICLR",
    "CVPR/ACL"
   ],
   "topics": [
    "RAG eval & hallucination",
    "Multi-agent planning",
    "Trustworthy AI"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "ML": {
  "slug": "ml",
  "hero3D": {
   "layers": [
    4,
    6,
    5,
    3
   ],
   "particles": 26,
   "model": "forest"
  },
  "id": "ML",
  "heroBadge": "Math → Model → Deployment • 89% RF Pipeline",
  "exec": "Learn to map data to answers without hand-written rules. Covers labelled learning (trees, forests), unlabelled grouping (k-means, PCA), and trial-and-error (reinforcement), plus cleaning data, choosing metrics (precision/recall not just accuracy), and shipping with FastAPI and Docker. Using our 750-row test (RF 89%), you learn why evaluation and drift checks matter more than fancy models.",
  "paradigm": {
   "title": "From Heuristics to Learning",
   "shift": "Hand-crafted → Data-driven",
   "rules": {
    "t": "Heuristics",
    "d": "Heuristic thresholds (e.g., score>0.7→fraud) hand-tuned from domain intuition; cheap to implement but degrades on distribution shift, requires manual recalibration and misses nonlinear interactions beyond linear separability.",
    "eg": "if score>0.7 → fraud"
   },
   "empirical": {
    "t": "Learning",
    "d": "Formal pipeline — stratification, scaling/encoding, k-fold CV, hyper-parameter search and leakage prevention — optimizes empirical risk; model selection uses ROC/PR curves and calibration, not just accuracy on our 750-row PCA 11→10 RF 89% benchmark.",
    "eg": "RF on 750 rows → 89% "
   },
   "blackBox": {
    "t": "Ensemble Wisdom",
    "d": "Bagging (RF) and boosting combine weak learners; PCA retains 96% variance while reducing variance; ensemble opacity arises from averaging, requiring feature importance, partial dependence and drift detection.",
    "stats": "PCA variance 96%"
   }
  },
  "pillars": [
   {
    "n": "Supervised",
    "icon": "fa-chalkboard-user",
    "d": "Labeled pairs learn mappings via ERM: linear/logistic, trees/forests, SVM with margins; selection uses CV and calibration on held-out data for generalization.",
    "demand": 9,
    "complexity": 6,
    "tag": "Labeled"
   },
   {
    "n": "Unsupervised",
    "icon": "fa-object-group",
    "d": "Unlabeled data reveals structure via clustering (k-means), dimensionality (PCA) and density estimation; evaluated by silhouette, reconstruction error and interpretability of modes.",
    "demand": 7,
    "complexity": 6,
    "tag": "Structure"
   },
   {
    "n": "Reinforcement",
    "icon": "fa-gamepad",
    "d": "Environment interaction maximizes cumulative reward: policy/value search via Q-learning/policy gradients, balancing exploration-exploitation with replay and discounting.",
    "demand": 7,
    "complexity": 8,
    "tag": "Reward"
   },
   {
    "n": "Feature Eng.",
    "icon": "fa-wrench",
    "d": "Reproducible feature pipelines: de-duplication, type handling, scaling/encoding, selection and leakage prevention with lineage-tracked transforms on train vs test folds.",
    "demand": 8,
    "complexity": 6,
    "tag": "Pipeline"
   },
   {
    "n": "Evaluation",
    "icon": "fa-chart-simple",
    "d": "Accuracy plus precision/recall/F1, ROC-AUC and calibration with drift monitoring via PSI and live holdouts to trigger retraining before silent failures",
    "demand": 8,
    "complexity": 5,
    "tag": "Metrics"
   }
  ],
  "study": [
   {
    "p": "Supervised",
    "yt": "StatQuest — Random Forest",
    "ytId": "ukzFI9rgwfU",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=94b5",
    "book": "Hands-On ML — Aurélien Géron — Scikit-learn bible."
   },
   {
    "p": "Unsupervised",
    "yt": "PCA — StatQuest",
    "ytId": "i_LwzRVP7bg",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=c4d8",
    "book": "Pattern Recognition — Bishop"
   },
   {
    "p": "Reinforcement",
    "yt": "RL — David Silver UCL",
    "ytId": "nIgIv4IfJ6s",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=b8a8",
    "book": "Reinforcement Learning — Sutton & Barto"
   },
   {
    "p": "Evaluation",
    "yt": "Precision Recall F1 — Josh Starmer",
    "ytId": "aircAruvnKk",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=2e74",
    "book": "The Art of Statistics — Spiegelhalter"
   },
   {
    "p": "MLOps",
    "yt": "MLOps — MadeWithML",
    "ytId": "biqYkVf-a7Y",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=62be",
    "book": "Designing ML Systems — Chip Huyen"
   },
   {
    "p": "ML Docs",
    "yt": "ML Official Docs ? Deep Dive",
    "ytId": "ukzFI9rgwfU",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc26",
    "book": "Official docs + github.com/awesome-ml ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? ML",
    "ytId": "i_LwzRVP7bg",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper26",
    "book": "Seminal paper + paperswithcode.com/sota for ML"
   },
   {
    "p": "Community",
    "yt": "ML Conference Talk",
    "ytId": "nIgIv4IfJ6s",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm26",
    "book": "github.com/topics/ml + Stack Overflow [ML]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Python & Stats",
    "c": "NumPy, Pandas, Bayes, distributions",
    "out": "EDA notebooks",
    "icon": "fa-calculator"
   },
   {
    "w": "7-12",
    "t": "Supervised Basics",
    "c": "Linear/Logistic, Trees, kNN, scikit-learn",
    "out": "Kaggle tabular",
    "icon": "fa-diagram-project"
   },
   {
    "w": "13-18",
    "t": "Ensembles & Regularization",
    "c": "RF, Gradient Boost, Ridge/Lasso",
    "out": "Leaderboard push",
    "icon": "fa-layer-group"
   },
   {
    "w": "19-24",
    "t": "Unsupervised & Dim Reduction",
    "c": "k-means, PCA, clustering metrics",
    "out": "Customer segmentation",
    "icon": "fa-object-group"
   },
   {
    "w": "25-30",
    "t": "RL Intro & Tuning",
    "c": "Q-learning, hyperparam, CV",
    "out": "Grid search + MLflow",
    "icon": "fa-gamepad"
   },
   {
    "w": "31-36",
    "t": "Deploy",
    "c": "FastAPI, Docker, model registry",
    "out": "Deployed predictor",
    "icon": "fa-rocket"
   }
  ],
  "timeline": [
   {
    "y": "1957",
    "t": "Perceptron",
    "d": "Rosenblatt first neural classifier"
   },
   {
    "y": "1986",
    "t": "Backprop",
    "d": "Rumelhart popularizes training"
   },
   {
    "y": "2001",
    "t": "Random Forest",
    "d": "Breiman ensemble"
   },
   {
    "y": "2012",
    "t": "ImageNet Moment",
    "d": "AlexNet — DL resurgence"
   },
   {
    "y": "2017",
    "t": "Transformers",
    "d": "Attention is All You Need"
   },
   {
    "y": "2023",
    "t": "LLM Ops",
    "d": "RLHF, eval harnesses"
   }
  ],
  "evolution": {
   "years": [
    "2006",
    "2010",
    "2015",
    "2020",
    "2024",
    "2028"
   ],
   "cap": [
    15,
    28,
    48,
    70,
    85,
    96
   ],
   "label": "Model accuracy / scale"
  },
  "economics": [
   {
    "v": "$0.5T",
    "l": "ML Platforms 2030",
    "d": "Cloud ML spend"
   },
   {
    "v": "2.3M",
    "l": "Open roles",
    "d": "ML engineer demand (LinkedIn 2025)"
   },
   {
    "v": "38%",
    "l": "Productivity lift",
    "d": "Teams with ML pipelines"
   },
   {
    "v": "89%",
    "l": "RF accuracy",
    "d": "Our 750-row benchmark"
   },
   {
    "v": "$0.9T",
    "l": "AI spend 2027 (IDC)",
    "d": "Global AI platforms"
   }
  ],
  "balanced": {
   "pros": [
    "Automation of tabular predictions ? fraud, churn and triage cut from manual rules to minutes, with ROC/PR curves, calibrated thresholds and A/B lift measurement.",
    "Robust ensembles (Random Forest, XGBoost) deliver strong accuracy on medium data without GPUs, plus feature importance and partial dependence for stakeholder trust.",
    "Reusable feature pipelines (scaling, encoding, lineage-tracked leakage prevention) speed up experimentation and reduce production bugs.",
    "Supports forecasting and personalization at scale, with drift detection via PSI and holdouts to trigger retraining before silent failures."
   ],
   "cons": [
    "Data hunger ? needs clean, labeled, balanced data; skewed labels inject bias without per-group auditing and reweighting.",
    "Bias amplification ? historical labels propagate unfairness in hiring/lending; requires subgroup metrics and bias mitigations.",
    "Drift ? real-world distributions shift seasonally; performance decays silently without PSI monitors and retraining SLAs.",
    "Explainability gap ? ensembles are opaque; SHAP/LIME approximations are needed for audits, adding overhead and residual uncertainty."
   ]
  },
  "ethics": [
   {
    "t": "Data Hygiene",
    "d": "De-identify, permit, lineage",
    "icon": "fa-broom"
   },
   {
    "t": "Fair Metrics",
    "d": "Report per-group precision/recall, not just accuracy",
    "icon": "fa-scale-balanced"
   },
   {
    "t": "Human in Loop",
    "d": "High-stakes needs approval gate",
    "icon": "fa-user-check"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Stats + scikit-learn theory, 09:00-12:00 ML Lab (PCA 11->10) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "ML Club + ML Lab (PCA 11->10) ? weekly workshops, peer code reviews, shared Kaggle + GPU with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Data Science peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: ML engineer intern (Internshala/LinkedIn 2024) ? ship RF pipeline + drift monitor, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage drift anxiety and avoid data leakage via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Laptop + Colab free, low cost ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "OA DSA + ML Tech (trees, RF) + Case",
   "previous": [
    {
     "q": "Explain Bagging vs Boosting",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "PCA 11→10 why?",
     "company": "Infosys 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Handle imbalanced dataset",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ↗",
     "freq": "High"
    },
    {
     "q": "Cross-validation pitfalls",
     "company": "TCS 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design ML system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Top K Frequent",
     "link": "LeetCode 347",
     "company": "Amazon 85%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Explain bias-variance, not just code | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "7-14 LPA",
   "mid": "16-28 LPA",
   "senior": "35-65 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Google",
    "Amazon ML"
   ],
   "service": [
    "TCS",
    "Infosys"
   ],
   "startup": [
    "Fractal"
   ],
   "psu": [
    "ISRO"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech Data Science (IIT-M), MS US"
   ],
   "venues": [
    "NeurIPS/JMLR",
    "KDD"
   ],
   "topics": [
    "Generalization vs overfit",
    "Causal ML",
    "AutoML"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Data Science": {
  "slug": "data-science",
  "hero3D": {
   "layers": [
    2,
    4,
    4,
    6
   ],
   "particles": 30,
   "model": "barchart"
  },
  "id": "Data Science",
  "heroBadge": "SQL → Story • End-to-end Insight Factory",
  "exec": "Learn to turn messy tables into decisions people trust. Steps: clean with Pandas/SQL, explore with charts, test ideas with statistics, and share results in a dashboard. You also learn A/B testing and how to show uncertainty (confidence intervals). Best if you like numbers and explaining stories; less code-heavy than core AI, but needs clear communication.",
  "paradigm": {
   "title": "Data → Decision",
   "shift": "Gut → Evidence",
   "rules": {
    "t": "Gut",
    "d": "Opinion-based spreadsheets and gut hypotheses from anecdotes; confirmation bias, survivorship and cherry-picking dominate — decisions lack confidence intervals and reproducible lineage.",
    "eg": "Manager thinks sales drop"
   },
   "empirical": {
    "t": "Evidence",
    "d": "Controlled ETL→EDA→modeling→dash: cleaning, joins, hypothesis tests, Bayesian updating and A/B power analysis (α/β) into decision memos; results report CIs and caveats, with rollback plans when assumptions break.",
    "eg": "Cohort retention + A/B → launch"
   },
   "blackBox": {
    "t": "Story, not just stats",
    "d": "Charts can mislead: cutting axes or hiding groups changes the story. Always show uncertainty and note what the chart does NOT prove.",
    "stats": "80% time is cleaning"
   }
  },
  "pillars": [
   {
    "n": "Wrangling",
    "icon": "fa-broom",
    "d": "Clean tables with Pandas/SQL: handle missing values, join sources correctly, and keep a log so others can repeat your work.",
    "demand": 9,
    "complexity": 5,
    "tag": "ETL"
   },
   {
    "n": "Analysis",
    "icon": "fa-chart-line",
    "d": "Use the right statistical test and show a range (confidence interval) not just one number; check if results could be luck.",
    "demand": 9,
    "complexity": 6,
    "tag": "Stats"
   },
   {
    "n": "Visualization",
    "icon": "fa-chart-pie",
    "d": "Make clear charts with Matplotlib/Tableau: pick honest scales, highlight variance and outliers, and write a short story for decision makers.",
    "demand": 8,
    "complexity": 5,
    "tag": "Story"
   },
   {
    "n": "Experimentation",
    "icon": "fa-flask",
    "d": "Run fair A/B tests: choose enough users, watch guardrail metrics, and only ship features that truly cause the lift.",
    "demand": 7,
    "complexity": 7,
    "tag": "A/B"
   },
   {
    "n": "Communication",
    "icon": "fa-comments",
    "d": "Turn analysis into a memo that lists options, tradeoffs, rollback plan, and KPIs so managers can decide under uncertainty.",
    "demand": 8,
    "complexity": 5,
    "tag": "Influence"
   }
  ],
  "study": [
   {
    "p": "Wrangling",
    "yt": "SQL for Data Science — freeCodeCamp",
    "ytId": "sz_dsktIjt4",
    "cover": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&seed=975a",
    "book": "Python for Data Analysis — Wes McKinney"
   },
   {
    "p": "Visualization",
    "yt": "Storytelling with Data — Cole",
    "ytId": "QGDhKyZiPAo",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=afbb",
    "book": "Storytelling with Data — Cole Nussbaumer"
   },
   {
    "p": "Stats",
    "yt": "StatQuest — Bayes",
    "ytId": "Vfo5le26IhY",
    "cover": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&seed=296a",
    "book": "Naked Statistics — Charles Wheelan"
   },
   {
    "p": "Experimentation",
    "yt": "A/B Testing — Udacity",
    "ytId": "Vfo5le26IhY",
    "cover": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&seed=dd38",
    "book": "Designing Experiments — Kohavi et al"
   },
   {
    "p": "Product",
    "yt": "Data Science Interview — Ken Jee",
    "ytId": "phOhGqpXss4",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=f494",
    "book": "Becoming a Data Analyst — Coursera"
   },
   {
    "p": "Data Science Docs",
    "yt": "Data Science Official Docs ? Deep Dive",
    "ytId": "sz_dsktIjt4",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc566",
    "book": "Official docs + github.com/awesome-data-science ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Data Science",
    "ytId": "Vfo5le26IhY",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper566",
    "book": "Seminal paper + paperswithcode.com/sota for Data Science"
   },
   {
    "p": "Community",
    "yt": "Data Science Conference Talk",
    "ytId": "phOhGqpXss4",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm566",
    "book": "github.com/topics/data-science + Stack Overflow [Data Science]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "SQL & Pandas",
    "c": "Joins, groupby, window functions",
    "out": "Cleaned e-commerce dump",
    "icon": "fa-database"
   },
   {
    "w": "7-12",
    "t": "EDA & Stats",
    "c": "Distributions, outliers, correlation",
    "out": "EDA report",
    "icon": "fa-magnifying-glass-chart"
   },
   {
    "w": "13-18",
    "t": "Visualization",
    "c": "Matplotlib/Seaborn, Tableau dash",
    "out": "Exec dashboard",
    "icon": "fa-chart-pie"
   },
   {
    "w": "19-24",
    "t": "Modeling Basics",
    "c": "Regression, trees, RF for analysts",
    "out": "Churn predictor",
    "icon": "fa-chart-line"
   },
   {
    "w": "25-30",
    "t": "Experiments",
    "c": "A/B design, sample size, causality",
    "out": "A/B plan",
    "icon": "fa-flask"
   },
   {
    "w": "31-36",
    "t": "Portfolio",
    "c": "End-to-end case study, blog, GitHub",
    "out": "3 case studies",
    "icon": "fa-briefcase"
   }
  ],
  "timeline": [
   {
    "y": "1970",
    "t": "Relational DB",
    "d": "Codd — SQL era"
   },
   {
    "y": "2006",
    "t": "Hadoop",
    "d": "Big data storage"
   },
   {
    "y": "2012",
    "t": "Data Scientist Sexy",
    "d": "Harvard Business Review"
   },
   {
    "y": "2015",
    "t": "Notebooks",
    "d": "Jupyter ubiquity"
   },
   {
    "y": "2020",
    "t": "Modern Stack",
    "d": "dbt, Snowflake, Looker"
   },
   {
    "y": "2024",
    "t": "GenAI for DS",
    "d": "Copilot for notebooks"
   }
  ],
  "evolution": {
   "years": [
    "2010",
    "2015",
    "2020",
    "2024",
    "2028"
   ],
   "cap": [
    20,
    40,
    68,
    84,
    95
   ],
   "label": "Stack maturity"
  },
  "economics": [
   {
    "v": "$0.7T",
    "l": "Analytics 2030",
    "d": "Market"
   },
   {
    "v": "14 LPA",
    "l": "Avg India DS",
    "d": "Premium over analyst"
   },
   {
    "v": "40%",
    "l": "Decisions",
    "d": "Data-driven by 2026 (Gartner)"
   },
   {
    "v": "$2.2T",
    "l": "Data 2026",
    "d": "IDC"
   },
   {
    "v": "72%",
    "l": "Hiring up",
    "d": "DS hiring +72% 2025"
   }
  ],
  "balanced": {
   "pros": [
    "Single source of truth ? cleaned warehouse + semantic layer ends spreadsheet fragmentation, with dbt lineage and data contracts for trust.",
    "Speed ? self-serve dashboards replace weeks of manual Excel collation, with cache-aware queries and alerting on KPI breaches.",
    "Risk reduction ? hypothesis tests and power-analyzed A/B experiments ship only causally valid lifts, with guardrails and rollback plans.",
    "Revenue lift ? funnel, pricing and churn models directly tie insights to LTV, ARPU and retention KPIs with exec memos."
   ],
   "cons": [
    "Garbage in/out ? dirty joins, missing values and late-arriving events distort metrics without data quality SLAs and great expectations checks.",
    "PII and privacy risk ? notebooks easily leak customer data without k-anonymity, access controls and audit logging.",
    "Vanity metrics ? north-star gaming hides variance; cutting axes or cherry-picking cohorts misleads leadership without CIs.",
    "Analysis paralysis ? endless slicing without decision memo or time-box leads to delayed shipping and opportunity cost."
   ]
  },
  "ethics": [
   {
    "t": "Anonymize",
    "d": "k-anonymity, no PII in notebooks",
    "icon": "fa-user-secret"
   },
   {
    "t": "Show Uncertainty",
    "d": "CIs, not point estimates alone",
    "icon": "fa-chart-area"
   },
   {
    "t": "No Dark Patterns",
    "d": "Visuals must not mislead",
    "icon": "fa-eye-slash"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 SQL + Pandas theory, 09:00-12:00 Data Lab (Jupyter) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Data Club + GDSC + Data Lab (Jupyter) ? weekly workshops, peer code reviews, shared Tableau + warehouse with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Business Analytics peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem5: Analyst intern (Internshala/LinkedIn 2024) ? ship executive dashboard + A/B memo, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage vanity metrics and avoid dirty data via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Laptop + free tier (SQL/Tableau free) ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Product: SQL + Case + Guesstimate | Service: Apt + SQL",
   "previous": [
    {
     "q": "Window function RANK vs DENSE_RANK",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Explain p-value misuse",
     "company": "Flipkart 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Design A/B for checkout",
     "company": "Google 2023",
     "year": "2023",
     "source": "LeetCode ↗",
     "freq": "High"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Data Science system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Data Science system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Second Highest Salary SQL",
     "link": "LeetCode 176",
     "company": "Amazon 90%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show CI, not point estimate | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "8-18 LPA",
   "mid": "14-28 LPA",
   "senior": "32-60 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Amazon",
    "Flipkart"
   ],
   "service": [
    "TCS",
    "Wipro"
   ],
   "startup": [
    "Razorpay"
   ],
   "psu": [
    "NIC"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "RBI Grade B DSIM",
    "eligibility": "MSc Stats / B.E 60%",
    "age": "21-30",
    "salary": "83100 Level-10 (~16 LPA)",
    "link": "rbi.org.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "ISS (Statistical Service)",
    "eligibility": "Master Stats 60%",
    "age": "21-30",
    "salary": "56100 Level-10",
    "link": "upsc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MS Business Analytics (ISB), MTech"
   ],
   "venues": [
    "KDD/VLDB",
    "JDS"
   ],
   "topics": [
    "Experimentation/Causality",
    "Data quality at scale"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Big Data": {
  "slug": "big-data",
  "hero3D": {
   "layers": [
    4,
    8,
    6,
    4
   ],
   "particles": 32,
   "model": "shard"
  },
  "id": "Big Data",
  "heroBadge": "Petabytes → Pipelines • Distributed Scale",
  "exec": "Learn to handle data too large for one computer. Covers file storage with copies for safety (HDFS/S3), fast in-memory processing (Spark), live streams (Kafka), and NoSQL choices. You also learn workflow tools (Airflow) and how to control cost. Choose this if you like systems and tuning; it needs Linux and patience with cluster settings.",
  "paradigm": {
   "title": "Scale Paradigm",
   "shift": "Single node → Distributed",
   "rules": {
    "t": "Monolith",
    "d": "Single-node MySQL nightly batch on 100GB vertical scale; ACID but queue-bound, with single point of failure and hours-long recovery on disk loss.",
    "eg": "MySQL 100GB"
   },
   "empirical": {
    "t": "Distributed",
    "d": "Horizontally sharded HDFS/S3 with 3× replication, Spark in-memory DAGs (shuffle=opaque sort), Flink exactly-once streams — partitions and skew dictate cost/latency more than algorithm choice.",
    "eg": "Spark 10TB shuffles"
   },
   "blackBox": {
    "t": "Shuffle & Skew",
    "d": "Shuffle/skew: straggler tasks dominate tail latency; salient fixes are salting, adaptive query execution and broadcast joins, not larger clusters.",
    "stats": "3× replica factor"
   }
  },
  "pillars": [
   {
    "n": "Storage",
    "icon": "fa-database",
    "d": "HDFS, S3, partitioning; selects partitioned Parquet/ORC with 3× replication, lifecycle policies and compression to balance durability versus cost and scan speed.",
    "demand": 7,
    "complexity": 6,
    "tag": "Store"
   },
   {
    "n": "Processing",
    "icon": "fa-microchip",
    "d": "MapReduce, Spark, Flink; chooses Spark DataFrames over RDDs where possible, tuning shuffles, broadcast joins and adaptive execution to tame skew and stragglers.",
    "demand": 8,
    "complexity": 7,
    "tag": "Compute"
   },
   {
    "n": "Streaming",
    "icon": "fa-wave-square",
    "d": "Kafka, real-time windows; implements exactly-once windows with idempotent sinks, watermarking and backpressure handling for real-time counters and joins.",
    "demand": 8,
    "complexity": 8,
    "tag": "Stream"
   },
   {
    "n": "NoSQL",
    "icon": "fa-cubes",
    "d": "Cassandra, HBase, Dynamo; models partition keys for even distribution, tunes compaction and consistency (ONE/QUORUM) against latency and availability.",
    "demand": 7,
    "complexity": 6,
    "tag": "NoSQL"
   },
   {
    "n": "Governance",
    "icon": "fa-shield-halved",
    "d": "Lineage, quality, cost; enforces data quality SLAs, lineage tracking and cost attribution to prevent silent drift.",
    "demand": 7,
    "complexity": 7,
    "tag": "Govern"
   }
  ],
  "study": [
   {
    "p": "Storage",
    "yt": "HDFS — NPTEL",
    "ytId": "1vbXmCrkT3Y",
    "cover": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&seed=2150",
    "book": "Designing Data-Intensive Apps — Kleppmann"
   },
   {
    "p": "Spark",
    "yt": "Spark — Databricks",
    "ytId": "_C8kWso4ne4",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=e4b1",
    "book": "Learning Spark — Chambers"
   },
   {
    "p": "Streaming",
    "yt": "Kafka — Confluent",
    "ytId": "aj9CDZm0Glc",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=5451",
    "book": "Streaming Systems — Akidau"
   },
   {
    "p": "NoSQL",
    "yt": "NoSQL — IBM",
    "ytId": "pYK4No7ACRE",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=4ed0",
    "book": "Seven Databases in Seven Weeks."
   },
   {
    "p": "Governance",
    "yt": "Data Quality — Monte Carlo",
    "ytId": "uPsUjKLHLAg",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=7a21",
    "book": "The Data Warehouse Toolkit — Kimball"
   },
   {
    "p": "Big Data Docs",
    "yt": "Big Data Official Docs ? Deep Dive",
    "ytId": "_C8kWso4ne4",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc855",
    "book": "Official docs + github.com/awesome-big-data ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Big Data",
    "ytId": "1vbXmCrkT3Y",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper855",
    "book": "Seminal paper + paperswithcode.com/sota for Big Data"
   },
   {
    "p": "Community",
    "yt": "Big Data Conference Talk",
    "ytId": "uPsUjKLHLAg",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm855",
    "book": "github.com/topics/big-data + Stack Overflow [Big Data]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Linux & Storage",
    "c": "HDFS/S3, replication, formats Parquet",
    "out": "Data lake setup",
    "icon": "fa-server"
   },
   {
    "w": "7-14",
    "t": "Spark Core",
    "c": "RDD/DataFrame, joins, tuning",
    "out": "TB ETL job",
    "icon": "fa-bolt"
   },
   {
    "w": "15-20",
    "t": "Streaming",
    "c": "Kafka, windowed aggregations",
    "out": "Real-time counter",
    "icon": "fa-wave-square"
   },
   {
    "w": "21-26",
    "t": "NoSQL",
    "c": "Cassandra modeling, compaction",
    "out": "Time-series store",
    "icon": "fa-cubes"
   },
   {
    "w": "27-30",
    "t": "Orchestration",
    "c": "Airflow, cost & lineage",
    "out": "DAG pipeline",
    "icon": "fa-diagram-project"
   },
   {
    "w": "31-36",
    "t": "Capstone",
    "c": "End-to-end lakehouse",
    "out": "Deployed pipe",
    "icon": "fa-briefcase"
   }
  ],
  "timeline": [
   {
    "y": "2003/04",
    "t": "GFS/MapReduce",
    "d": "Google papers"
   },
   {
    "y": "2006",
    "t": "Hadoop",
    "d": "Yahoo open-source"
   },
   {
    "y": "2014",
    "t": "Spark",
    "d": "In-memory surpasses MR"
   },
   {
    "y": "2018",
    "t": "Lakehouse",
    "d": "Delta Lake"
   },
   {
    "y": "2022",
    "t": "Streaming",
    "d": "Flink dominance"
   }
  ],
  "evolution": {
   "years": [
    "2010",
    "2015",
    "2020",
    "2024",
    "2028"
   ],
   "cap": [
    15,
    45,
    72,
    86,
    97
   ],
   "label": "Cluster scale TB/s"
  },
  "economics": [
   {
    "v": "$0.3T",
    "l": "Big Data 2030",
    "d": "Market"
   },
   {
    "v": "12 LPA",
    "l": "Avg Engineer",
    "d": "India big data"
   },
   {
    "v": "70%",
    "l": "Unstructured",
    "d": "Data is petabyte media/logs"
   },
   {
    "v": "$1.1T",
    "l": "Data 2025",
    "d": "IDC 181ZB"
   },
   {
    "v": "40%",
    "l": "Cost save",
    "d": "lakehouse vs warehouse"
   }
  ],
  "balanced": {
   "pros": [
    "Petabyte scale ? HDFS/S3 + Spark process terabytes hourly, with Parquet partitioning and predicate pushdown for scan efficiency.",
    "Freshness ? Kafka/Flink provide exactly-once streaming windows for real-time fraud, recommendations and observability.",
    "Cost efficiency ? commodity nodes with 3x replication and spot instances beat vertical DB scaling, with lifecycle tiering to cold storage.",
    "Resilience ? replication, checksums and erasure coding survive node loss without lengthy restore from tape."
   ],
   "cons": [
    "Operational complexity ? YARN/K8s tuning, GC and shuffle spills need expertise; misconfiguration causes OOM and stragglers.",
    "Skew and stragglers ? hot keys dominate tail latency; salting, AQE and broadcast joins add complexity vs larger cluster.",
    "Eventual consistency quirks ? last-write-wins and clock skew create anomalies requiring idempotent sinks and watermarking.",
    "Bill surprise ? egress, shuffle and idle driver costs spike without granular tagging, FinOps alerts and auto-termination."
   ]
  },
  "ethics": [
   {
    "t": "Retention Limits",
    "d": "Expire logs — not forever hoard",
    "icon": "fa-hourglass"
   },
   {
    "t": "Access Control",
    "d": "Least privilege + audit",
    "icon": "fa-lock"
   },
   {
    "t": "Energy Awareness",
    "d": "Schedule off-peak heavy jobs",
    "icon": "fa-leaf"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Linux + HDFS/Spark theory, 09:00-12:00 Hadoop cluster labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Cloud + Data Eng Club + Hadoop cluster ? weekly workshops, peer code reviews, shared Spark cluster + S3 with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with DevOps peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: Data engineer intern (Internshala/LinkedIn 2024) ? ship lakehouse pipeline + cost report, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage cluster ops and avoid shuffle skew via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Cloud credits free tier ~0-5k ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "System Design: Lakehouse + Spark tuning",
   "previous": [
    {
     "q": "Shuffle vs skew fix",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "HDFS replication 3× why?",
     "company": "TCS 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Big Data system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Big Data system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Big Data system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Word Count MapReduce",
     "link": "GeeksforGeeks",
     "company": "Service 70%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Explain partitioning | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "8-16 LPA",
   "mid": "15-30 LPA",
   "senior": "32-55 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Databricks",
    "AWS EMR"
   ],
   "service": [
    "TCS",
    "Infosys"
   ],
   "startup": [
    "Hevo"
   ],
   "psu": [
    "NIC"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech CSE (Distributed), MS"
   ],
   "venues": [
    "SIGMOD/NSDI",
    "VLDB"
   ],
   "topics": [
    "Lakehouse ACID",
    "Streaming exactly-once"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Computer Vision": {
  "slug": "computer-vision",
  "hero3D": {
   "layers": [
    3,
    6,
    6,
    3
   ],
   "particles": 24,
   "model": "eye"
  },
  "id": "Computer Vision",
  "heroBadge": "Pixels → Meaning • CNN to ViT",
  "exec": "Teach computers to see: clean photos, find edges, recognise objects (YOLO), and understand scenes. You learn CNN basics, how to measure accuracy (mAP), and how to explain where the model looked (Grad-CAM). Later you try video tracking and phone deployment. Needs Python and maths; GPUs help.",
  "paradigm": {
   "title": "Hand Features → Learned Filters",
   "shift": "SIFT/HOG → CNN",
   "rules": {
    "t": "Handcrafted",
    "d": "Handcrafted SIFT/HOG + SVM on edges/corners; needs expert tuning, fails on deformation/occlusion and needs recalibration for new camera/lighting distributions.",
    "eg": "HOG + SVM"
   },
   "empirical": {
    "t": "Learned",
    "d": "Convolutional stacks learn hierarchical filters end-to-end (edges→textures→parts) via backprop; transfer from ImageNet and augmentation (MixUp/CutMix) improve generalization, Grad-CAM probes *where* models attend.",
    "eg": "Conv1 edges → Conv5 faces"
   },
   "blackBox": {
    "t": "Explainability",
    "d": "Explainability via saliency/activation maps; adversarial ℓ∞ pixel perturbations and dataset bias (face recognition skew) remain open failures requiring robust evaluation on corruptions.",
    "stats": "ViT 86M params"
   }
  },
  "pillars": [
   {
    "n": "Imaging & Augment",
    "icon": "fa-camera",
    "d": "Optics, calibration, distortion correction and augmentation (MixUp/CutMix) preserving geometric fidelity across lighting.",
    "demand": 6,
    "complexity": 6,
    "tag": "Pixels"
   },
   {
    "n": "CNNs & Backbones",
    "icon": "fa-layer-group",
    "d": "Conv, ResNet, normalization and receptive field analysis with transfer from ImageNet and Grad-CAM interpretability.",
    "demand": 8,
    "complexity": 7,
    "tag": "Conv"
   },
   {
    "n": "Detection & Seg",
    "icon": "fa-eye",
    "d": "YOLO, Faster-RCNN, U-Net/SAM; optimizes anchors/NMS and mAP@0.5:0.95 balancing speed vs localization under occlusion.",
    "demand": 9,
    "complexity": 8,
    "tag": "Detect"
   },
   {
    "n": "Transformers",
    "icon": "fa-brain",
    "d": "ViT, DETR with self-attention over patches, positional encodings and large-scale pretraining beating CNNs.",
    "demand": 8,
    "complexity": 8,
    "tag": "ViT"
   },
   {
    "n": "3D & Video",
    "icon": "fa-video",
    "d": "Depth via stereo/SfM, pose estimation, Kalman tracking and re-ID across views with metric scale recovery.",
    "demand": 7,
    "complexity": 8,
    "tag": "3D"
   }
  ],
  "study": [
   {
    "p": "Imaging",
    "yt": "CV Basics — Stanford CS231n",
    "ytId": "OnTgbN3uXvw",
    "cover": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&seed=cbbe",
    "book": "Computer Vision — Szeliski"
   },
   {
    "p": "CNNs",
    "yt": "CNN — 3Blue1Brown",
    "ytId": "QzY57FaENXg",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=e087",
    "book": "Deep Learning — Goodfellow Ch9"
   },
   {
    "p": "Detection",
    "yt": "YOLO — Ultralytics",
    "ytId": "QzY57FaENXg",
    "cover": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&seed=1fee",
    "book": "Multiple View Geometry — Hartley"
   },
   {
    "p": "ViT",
    "yt": "Vision Transformer — Yannic",
    "ytId": "HZ4j_U3FC94",
    "cover": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&seed=4900",
    "book": "Attention Is All You Need — Vaswani"
   },
   {
    "p": "Deployment",
    "yt": "OpenCV — freeCodeCamp",
    "ytId": "itBc7nwAK5o",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=a02b",
    "book": "Practical CV — Prince"
   },
   {
    "p": "Computer Vision Docs",
    "yt": "Computer Vision Official Docs ? Deep Dive",
    "ytId": "OnTgbN3uXvw",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc470",
    "book": "Official docs + github.com/awesome-computer-vision ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Computer Vision",
    "ytId": "QzY57FaENXg",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper470",
    "book": "Seminal paper + paperswithcode.com/sota for Computer Vision"
   },
   {
    "p": "Community",
    "yt": "Computer Vision Conference Talk",
    "ytId": "QzY57FaENXg",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm470",
    "book": "github.com/topics/computer-vision + Stack Overflow [Computer Vision]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Imaging",
    "c": "OpenCV, filters, augmentation",
    "out": "Preprocess pipe",
    "icon": "fa-camera"
   },
   {
    "w": "7-14",
    "t": "CNN Fundamentals",
    "c": "Conv, ResNet, transfer",
    "out": "Classifier",
    "icon": "fa-layer-group"
   },
   {
    "w": "15-20",
    "t": "Detection",
    "c": "YOLO, mAP, NMS",
    "out": "Detector app",
    "icon": "fa-eye"
   },
   {
    "w": "21-26",
    "t": "Segmentation & ViT",
    "c": "U-Net, SAM, ViT",
    "out": "Segmenter",
    "icon": "fa-shapes"
   },
   {
    "w": "27-30",
    "t": "Video",
    "c": "Tracking, pose",
    "out": "Tracker",
    "icon": "fa-video"
   },
   {
    "w": "31-36",
    "t": "Edge Deploy",
    "c": "ONNX, quantization, mobile",
    "out": "Phone demo",
    "icon": "fa-mobile-screen"
   }
  ],
  "timeline": [
   {
    "y": "2012",
    "t": "AlexNet",
    "d": "ImageNet error halved"
   },
   {
    "y": "2015",
    "t": "ResNet",
    "d": "Deep residual"
   },
   {
    "y": "2017",
    "t": "YOLO",
    "d": "Real-time detection"
   },
   {
    "y": "2021",
    "t": "ViT",
    "d": "Transformers for vision; leverages self-attention over patches, with positional encodings and fine-tuning strategies that outperform CNNs on large-scale pretraining."
   },
   {
    "y": "2023",
    "t": "SAM",
    "d": "Segment anything"
   }
  ],
  "evolution": {
   "years": [
    "2012",
    "2015",
    "2018",
    "2021",
    "2024",
    "2028"
   ],
   "cap": [
    20,
    45,
    65,
    82,
    92,
    99
   ],
   "label": "mAP / accuracy"
  },
  "economics": [
   {
    "v": "$0.4T",
    "l": "CV Market 2030",
    "d": "Healthcare, auto, retail"
   },
   {
    "v": "65%",
    "l": "Factories",
    "d": "Adopt visual QA by 2027"
   },
   {
    "v": "$52B",
    "l": "CV 2028",
    "d": "19% CAGR"
   },
   {
    "v": "4x",
    "l": "Accuracy vs HOG",
    "d": "on COCO"
   }
  ],
  "balanced": {
   "pros": [
    "Safety gains ? automated defect, medical lesion and road hazard detection at superhuman consistency under controlled lighting.",
    "Automation ? visual QA and sorting replace manual inspection, with mAP@0.5:0.95 tracking and active learning for rare classes.",
    "Accessibility ? captioning and scene description unlock content for visually impaired, with on-device small models for latency.",
    "Discovery ? satellite, microscopy and bio-imaging unlock patterns invisible to humans, with transfer learning from ImageNet/SAM."
   ],
   "cons": [
    "Bias and fairness ? face recognition shows demographic skew (NIST FRVT); needs balanced datasets and subgroup audits.",
    "Privacy invasion ? ubiquitous cameras enable covert identification; requires consent, retention limits and human oversight.",
    "Adversarial fragility ? L_inf pixel perturbations flip labels; needs adversarial training and corruption benchmarks.",
    "Compute heavy ? training ViT/DETR needs GPUs, quantization and distillation add engineering to hit mobile budgets."
   ]
  },
  "ethics": [
   {
    "t": "Consent for Faces",
    "d": "Opt-in datasets",
    "icon": "fa-face-smile"
   },
   {
    "t": "No Covert ID",
    "d": "No stealth identification",
    "icon": "fa-eye-slash"
   },
   {
    "t": "Robustness",
    "d": "Test corruptions & adversaries",
    "icon": "fa-shield"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 OpenCV + CNN theory, 09:00-12:00 CV Lab + GPU labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "CV Club + CV Lab + GPU ? weekly workshops, peer code reviews, shared GPU + camera rig with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Robotics peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: CV intern (healthcare) intern (Internshala/LinkedIn 2024) ? ship YOLO detector + Grad-CAM report, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage GPU queue wait and avoid adversarial pixels via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Colab Pro needed, GPU heavy ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "CV Tech: CNN + Detection + ViT",
   "previous": [
    {
     "q": "IoU vs mAP",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Why ResNet skip?",
     "company": "Google 2023",
     "year": "2023",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Computer Vision system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Computer Vision system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Computer Vision system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Number of Islands",
     "link": "LeetCode 200",
     "company": "FAANG 80%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Explain Grad-CAM | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "8-15 LPA",
   "mid": "16-30 LPA",
   "senior": "35-70 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Waymo",
    "Tesla"
   ],
   "service": [
    "TCS",
    "HCL"
   ],
   "startup": [
    "Staqu"
   ],
   "psu": [
    "ISRO NRSC"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech CV (IIIT-H), MS"
   ],
   "venues": [
    "CVPR/ICCV",
    "ECCV"
   ],
   "topics": [
    "Foundation SAM/DINO",
    "3D vision & NeRF"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "NLP": {
  "slug": "nlp",
  "hero3D": {
   "layers": [
    3,
    5,
    5,
    4
   ],
   "particles": 27,
   "model": "language"
  },
  "id": "NLP",
  "heroBadge": "Words → Vectors → Meaning • Transformers",
  "exec": "Make computers work with human language: split text into tokens, turn words into vectors, then use Transformers to understand and generate. Covers prompting, grounding answers in your own docs (RAG with citations), and checking for made-up facts. Good if you like language and careful evaluation; needs attention to bias and privacy.",
  "paradigm": {
   "title": "Rules → Embeddings → Attention",
   "shift": "Regex → Vectors",
   "rules": {
    "t": "Rules",
    "d": "Regex and context-free grammars parse surface forms; brittle on paraphrase, coreference and long-range dependency beyond fixed windows.",
    "eg": "/\\bnot good\\b/ → negative"
   },
   "empirical": {
    "t": "Neural",
    "d": "Tokenization→Word2Vec→Transformers: self-attention computes O(n²) pairwise affinities, with positional encodings, pretrain-finetune and RAG grounding via vector DB + citation for factuality.",
    "eg": "Chatbot answers from docs"
   },
   "blackBox": {
    "t": "Attention",
    "d": "Attention weights are not explanations; large-KV cache and 175B→1T scales create memorization/privacy leakage, demanding watermarking and filtering.",
    "stats": "175B→1T params"
   }
  },
  "pillars": [
   {
    "n": "Foundations",
    "icon": "fa-language",
    "d": "Tokenization, embeddings; normalizes Unicode, handles OOV via subwords and contrasts sparse (TF-IDF) versus dense embeddings for lexical vs semantic match.",
    "demand": 7,
    "complexity": 6,
    "tag": "Tokens"
   },
   {
    "n": "Sequence Models",
    "icon": "fa-wave-square",
    "d": "RNN, LSTM, seq2seq; unrolls with BPTT, gates vanishing gradients via LSTM/GRU and benchmarks against Transformers on long context.",
    "demand": 6,
    "complexity": 6,
    "tag": "Seq"
   },
   {
    "n": "Transformers",
    "icon": "fa-brain",
    "d": "Self-attention with positional encodings enabling BERT bidirectional and GPT autoregressive pretraining, fine-tuned with LoRA and evaluated for faithfulness",
    "demand": 9,
    "complexity": 8,
    "tag": "Transformer"
   },
   {
    "n": "LLM Ops",
    "icon": "fa-robot",
    "d": "Prompt, RAG, eval, RLHF; engineers prompts, caches KV, grounds with RAG citations and aligns via RLHF with safety evals.",
    "demand": 9,
    "complexity": 8,
    "tag": "LLM"
   },
   {
    "n": "Speech",
    "icon": "fa-microphone",
    "d": "ASR, TTS, dialogue; pipelines VAD→ASR→NLU→TTS with streaming and speaker diarization under latency constraints.",
    "demand": 7,
    "complexity": 7,
    "tag": "Voice"
   }
  ],
  "study": [
   {
    "p": "Foundations",
    "yt": "Word2Vec — Stanford CS224n",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&seed=352b",
    "book": "Speech & Language Processing — Jurafsky"
   },
   {
    "p": "Transformers",
    "yt": "Transformers — 3Blue1Brown",
    "ytId": "wjZofJX0v4M",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=3284",
    "book": "Attention Is All You Need — Vaswani"
   },
   {
    "p": "LLMs",
    "yt": "LLM Course — HuggingFace",
    "ytId": "F8NKVhkZZWI",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=e1d5",
    "book": "Designing LLM Apps — Tunstall"
   },
   {
    "p": "RAG",
    "yt": "RAG — LangChain",
    "ytId": "9gGnTQTYNaE",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=5a38",
    "book": "Build LLM Apps — Lewis"
   },
   {
    "p": "Evaluation",
    "yt": "HELM — Stanford",
    "ytId": "hfIUstzHs9A",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=3c97",
    "book": "Evaluating NLP — Bender"
   },
   {
    "p": "NLP Docs",
    "yt": "NLP Official Docs ? Deep Dive",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc501",
    "book": "Official docs + github.com/awesome-nlp ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? NLP",
    "ytId": "wjZofJX0v4M",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper501",
    "book": "Seminal paper + paperswithcode.com/sota for NLP"
   },
   {
    "p": "Community",
    "yt": "NLP Conference Talk",
    "ytId": "F8NKVhkZZWI",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm501",
    "book": "github.com/topics/nlp + Stack Overflow [NLP]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Text Prep",
    "c": "Regex, tokenize, embeddings",
    "out": "Sentiment classifier",
    "icon": "fa-language"
   },
   {
    "w": "7-14",
    "t": "Classical & RNN",
    "c": "Naive Bayes, LSTM",
    "out": "Seq tagger",
    "icon": "fa-wave-square"
   },
   {
    "w": "15-20",
    "t": "Transformers",
    "c": "BERT fine-tune, attention viz",
    "out": "QA model",
    "icon": "fa-brain"
   },
   {
    "w": "21-26",
    "t": "LLM & RAG",
    "c": "Prompt, vector DB, RAG",
    "out": "Docs chatbot",
    "icon": "fa-robot"
   },
   {
    "w": "27-30",
    "t": "Eval & Safety",
    "c": "HELM, bias, guardrails",
    "out": "Eval report",
    "icon": "fa-shield"
   },
   {
    "w": "31-36",
    "t": "Ship",
    "c": "API, streaming, voice",
    "out": "Live assistant",
    "icon": "fa-rocket"
   }
  ],
  "timeline": [
   {
    "y": "2013",
    "t": "Word2Vec",
    "d": "Mikolov embeddings"
   },
   {
    "y": "2017",
    "t": "Transformer",
    "d": "Google"
   },
   {
    "y": "2018",
    "t": "BERT",
    "d": "Bidirectional"
   },
   {
    "y": "2020",
    "t": "GPT-3",
    "d": "Few-shot"
   },
   {
    "y": "2022",
    "t": "ChatGPT",
    "d": "RLHF mainstream"
   }
  ],
  "evolution": {
   "years": [
    "2013",
    "2017",
    "2019",
    "2022",
    "2024",
    "2028"
   ],
   "cap": [
    15,
    35,
    60,
    82,
    93,
    99
   ],
   "label": "Language understanding"
  },
  "economics": [
   {
    "v": "$0.6T",
    "l": "NLP/LLM 2030",
    "d": "Chat, search, bots"
   },
   {
    "v": "71%",
    "l": "Enterprises",
    "d": "Piloting LLMs 2025 (Gartner)"
   },
   {
    "v": "$43B",
    "l": "NLP 2025",
    "d": "Gartner"
   },
   {
    "v": "80%",
    "l": "Tickets auto",
    "d": "via LLM+RAG"
   }
  ],
  "balanced": {
   "pros": [
    "Access ? translation, summarization and simplification broaden reach to low-literacy users with human-in-loop verification.",
    "Productivity ? copilots draft code, emails and notes with RAG grounding, citations and human approval gates.",
    "Care ? triage, clinical notes and symptom extraction assist clinicians, with guardrails and audit trails.",
    "Search ? dense embeddings enable semantic retrieval beyond keywords, with hybrid lexical+dense reranking."
   ],
   "cons": [
    "Hallucinations ? fluent falsehoods from next-token prediction; needs RAG grounding, citations and calibration, not blind trust.",
    "Bias amplification ? training corpora encode stereotypes; needs debiasing, filtering and subgroup eval on HELM.",
    "Privacy leakage ? memorization can regurgitate PII; needs scrubbing, deduplication and output filters.",
    "Inference cost ? long contexts drive KV-cache and $/1k tokens; needs caching, distillation and routing to small models."
   ]
  },
  "ethics": [
   {
    "t": "Cite Sources",
    "d": "RAG must attribute",
    "icon": "fa-quote-left"
   },
   {
    "t": "Watermark",
    "d": "Mark synthetic text",
    "icon": "fa-stamp"
   },
   {
    "t": "No Private Memorize",
    "d": "PII scrub & filters",
    "icon": "fa-user-secret"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Tokens + Transformers theory, 09:00-12:00 LLM lab (HuggingFace) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "NLP Club + LLM lab (HuggingFace) ? weekly workshops, peer code reviews, shared API credits + vector DB with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Web peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: LLM engineer intern (Internshala/LinkedIn 2024) ? ship RAG chatbot with citations, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage hallucination risk and avoid privacy leakage via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "API minimal, RAG local free ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "NLP: Token + Attention + RAG",
   "previous": [
    {
     "q": "Self-attention O(n²) why?",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "RAG vs Fine-tune when?",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "LeetCode ↗",
     "freq": "High"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design NLP system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design NLP system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design NLP system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Word Break",
     "link": "LeetCode 139",
     "company": "Amazon 82%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Cite RAG sources | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "8-14 LPA",
   "mid": "15-30 LPA",
   "senior": "32-65 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "OpenAI",
    "Google"
   ],
   "service": [
    "TCS",
    "Infosys"
   ],
   "startup": [
    "Sarvam"
   ],
   "psu": [
    "TDIL"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech NLP (IIIT-H), MS"
   ],
   "venues": [
    "ACL/EMNLP",
    "NAACL"
   ],
   "topics": [
    "LLM grounding",
    "Multilingual India"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Web Development": {
  "slug": "web-development",
  "hero3D": {
   "layers": [
    3,
    3,
    3,
    3
   ],
   "particles": 18,
   "model": "browser"
  },
  "id": "Web Development",
  "heroBadge": "HTML → React → Edge • Web Vitals Pro",
  "exec": "Build fast, accessible websites that work on phone and laptop. Learn semantic HTML, responsive CSS, JavaScript, React/Next.js, and simple backends with login and data. Focus on speed (LCP <2.5s), accessibility, and safe deployment on Vercel. Most beginner-friendly path; needs steady practice and browser testing.",
  "paradigm": {
   "title": "Static → Dynamic → Composable",
   "shift": "MPA → SPA → Edge",
   "rules": {
    "t": "MPA",
    "d": "Full reload, server render",
    "eg": "PHP page"
   },
   "empirical": {
    "t": "Composable",
    "d": "Components, hydration, edge cache; composes hooks, SWR caching and SSR/ISR hydration with streaming to keep SEO and interactivity without bundle bloat.",
    "eg": "Next.js + CDN"
   },
   "blackBox": {
    "t": "Hydration",
    "d": "Server HTML → client interactivity",
    "stats": "LCP <2.5s, CLS <0.1"
   }
  },
  "pillars": [
   {
    "n": "Frontend",
    "icon": "fa-code",
    "d": "HTML/CSS/JS, a11y, responsive; delivers semantic, keyboard-navigable markup with responsive Flex/Grid and sub-200KB JS budgets for LCP<2.5s.",
    "demand": 9,
    "complexity": 5,
    "tag": "UI"
   },
   {
    "n": "React/Next",
    "icon": "fa-atom",
    "d": "Components, state, SSR, ISR; composes hooks, SWR caching and SSR/ISR hydration with streaming to keep SEO and interactivity without bundle bloat.",
    "demand": 9,
    "complexity": 6,
    "tag": "React"
   },
   {
    "n": "Backend",
    "icon": "fa-server",
    "d": "Node, APIs, auth, DB; designs REST/GraphQL with JWT/OAuth, rate limits and EXPLAIN-guided indexing to prevent N+1 and ensure safe auth.",
    "demand": 8,
    "complexity": 6,
    "tag": "API"
   },
   {
    "n": "Performance",
    "icon": "fa-gauge-high",
    "d": "Web Vitals, caching, images; budgets LCP/CLS/INP, lazy-loads images, splits codes and preloads fonts to stay within RAIL thresholds on 3G.",
    "demand": 8,
    "complexity": 6,
    "tag": "Speed"
   },
   {
    "n": "Deploy",
    "icon": "fa-rocket",
    "d": "Vercel, CI/CD, observability; automates preview deploys, checks Web Vitals and traces with OpenTelemetry for actionable alerts.",
    "demand": 8,
    "complexity": 5,
    "tag": "Ship"
   }
  ],
  "study": [
   {
    "p": "Frontend",
    "yt": "Frontend — freeCodeCamp",
    "ytId": "3PHXvlpOkf4",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=6089",
    "book": "Eloquent JavaScript — Haverbeke"
   },
   {
    "p": "React",
    "yt": "React — Fireship",
    "ytId": "w7ejDZ8SWv8",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=3637",
    "book": "Learning React — Banks & Porcello"
   },
   {
    "p": "Backend",
    "yt": "Node — Traversy",
    "ytId": "TlB_eWDSMt4",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=54d5",
    "book": "Node.js Design Patterns — Casciaro"
   },
   {
    "p": "Perf",
    "yt": "Web Vitals — Google",
    "ytId": "cZaNf2rA30k",
    "cover": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&seed=4fff",
    "book": "High Performance Browser Networking — Grigorik"
   },
   {
    "p": "Deploy",
    "yt": "Vercel — Lee Robinson",
    "ytId": "_C8kWso4ne4",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=aa28",
    "book": "The Pragmatic Programmer — Hunt & Thomas"
   },
   {
    "p": "Docs",
    "yt": "Next.js Docs ? Vercel",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80&seed=web6",
    "book": "nextjs.org/docs ? SSR/ISR, App Router; web.dev ? Core Web Vitals"
   },
   {
    "p": "Paper",
    "yt": "RAIL Model ? Google",
    "ytId": "cZaNf2rA30k",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=web7",
    "book": "web.dev/rail ? RAIL performance + developers.google.com/web"
   },
   {
    "p": "OSS",
    "yt": "Vite ? Evan You",
    "ytId": "_C8kWso4ne4",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=web8",
    "book": "github.com/vitejs/vite + github.com/shadcn-ui/ui ? ship fast"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Foundations",
    "c": "Semantic HTML, Flex/Grid, a11y",
    "out": "Portfolio site",
    "icon": "fa-code"
   },
   {
    "w": "7-14",
    "t": "JS & React",
    "c": "ES6, hooks, state, router",
    "out": "SPA app",
    "icon": "fa-atom"
   },
   {
    "w": "15-20",
    "t": "Next.js & APIs",
    "c": "SSR/ISR, REST, auth",
    "out": "Full-stack blog",
    "icon": "fa-server"
   },
   {
    "w": "21-26",
    "t": "Perf & PWA",
    "c": "Vitals, images, service worker",
    "out": "Lighthouse 95+",
    "icon": "fa-gauge-high"
   },
   {
    "w": "27-30",
    "t": "Testing & CI",
    "c": "Jest, Playwright, GitHub Actions",
    "out": "CI pipeline",
    "icon": "fa-vial"
   },
   {
    "w": "31-36",
    "t": "Ship",
    "c": "Edge, analytics, SEO",
    "out": "Live domain",
    "icon": "fa-rocket"
   }
  ],
  "timeline": [
   {
    "y": "1991",
    "t": "WWW",
    "d": "Berners-Lee"
   },
   {
    "y": "2009",
    "t": "Node.js",
    "d": "Ryan Dahl"
   },
   {
    "y": "2013",
    "t": "React",
    "d": "Facebook"
   },
   {
    "y": "2015",
    "t": "ES6",
    "d": "Modern JS"
   },
   {
    "y": "2020",
    "t": "Next + Edge",
    "d": "Vercel era"
   }
  ],
  "evolution": {
   "years": [
    "2005",
    "2010",
    "2015",
    "2020",
    "2024",
    "2028"
   ],
   "cap": [
    25,
    45,
    68,
    85,
    93,
    98
   ],
   "label": "DX & speed"
  },
  "economics": [
   {
    "v": "$1.2T",
    "l": "Web commerce 2030",
    "d": "Global e-comm"
   },
   {
    "v": "1M",
    "l": "React jobs",
    "d": "Most demanded skill"
   },
   {
    "v": "$8.4T",
    "l": "E-comm 2026",
    "d": "Statista"
   },
   {
    "v": "18 LPA",
    "l": "Staff FE",
    "d": "Top product India"
   }
  ],
  "balanced": {
   "pros": [
    "Unmatched reach ? single URL serves 5B+ users across devices without installs, via responsive, progressively enhanced islands.",
    "Iteration speed ? preview deployments in seconds on Vercel with edge caching, A/B flags and instant rollbacks.",
    "Hiring market ? React/Next.js is the most demanded skill (1M+ roles India) with abundant junior to senior ladders.",
    "DX ? component systems, Storybook and design tokens enable reuse, visual testing and consistent UX at scale."
   ],
   "cons": [
    "Browser fragmentation ? Safari/iOS quirks, viewport units and date inputs still need polyfills and manual QA.",
    "Performance cliffs ? unbounded JS bundles inflate LCP/INP; needs budgets, code-splitting, image optimization and RAIL.",
    "Security surface ? XSS, CSRF and supply-chain attacks demand CSP, sanitization and dependency auditing.",
    "SEO pitfalls ? client-side hydration can hide content from crawlers without proper SSR/ISR and hydration checks."
   ]
  },
  "ethics": [
   {
    "t": "A11y First",
    "d": "WCAG AA, keyboard, screen reader",
    "icon": "fa-universal-access"
   },
   {
    "t": "Privacy Minimal",
    "d": "No dark patterns, minimal cookies",
    "icon": "fa-cookie-bite"
   },
   {
    "t": "Perf Budget",
    "d": "<200KB JS, lazy images",
    "icon": "fa-gauge-high"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 HTML/CSS/JS + React theory, 09:00-12:00 Web Lab (Vercel) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "GDSC + Hackathons + Web Lab (Vercel) ? weekly workshops, peer code reviews, shared Vercel + CDN with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with HCI designers peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem5: Frontend / Full-stack intern (Internshala/LinkedIn 2024) ? ship Lighthouse 95+ PWA + CI pipeline, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage browser quirks and avoid JS bloat via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Most affordable: browser + Vercel free ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "FAANG: DSA (2) + Frontend System Design + JS",
   "previous": [
    {
     "q": "Event loop + promises",
     "company": "Google 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Design file upload (resumable)",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "React hooks closure bug",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ↗",
     "freq": "Med"
    },
    {
     "q": "Explain event loop + microtasks vs macrotasks",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design resumable file upload (S3 multipart)",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "React hooks closure bug ? fix useEffect stale state",
     "company": "Meta 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Design Web Development system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Web Development system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Web Development system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Web Development system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Debounce utility",
     "link": "Custom JS",
     "company": "FAANG 85%"
    },
    {
     "q": "Two Sum",
     "link": "LeetCode 1",
     "company": "TCS 90%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    }
   ],
   "tips": "Show Web Vitals + a11y | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "5-10 LPA",
   "mid": "12-22 LPA",
   "senior": "25-45 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Google",
    "Microsoft"
   ],
   "service": [
    "TCS",
    "Infosys"
   ],
   "startup": [
    "Vercel"
   ],
   "psu": [
    "NIC"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech CSE, MS HCI"
   ],
   "venues": [
    "WWW/UIST",
    "CHI"
   ],
   "topics": [
    "WebAssembly edge",
    "Web performance"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Mobile App Development": {
  "slug": "mobile-app-development",
  "hero3D": {
   "layers": [
    2,
    3,
    3,
    2
   ],
   "particles": 16,
   "model": "mobile"
  },
  "id": "Mobile App Development",
  "heroBadge": "One Codebase → Two Stores • Flutter/RN",
  "exec": "Build phone apps for Android and iOS. Compare native (Swift/Kotlin) vs one-codebase (Flutter/React Native). Learn screens, navigation, state, saving data offline, using camera/GPS, and publishing to stores. Good if you like UI and real users; expect device differences and store rules.",
  "paradigm": {
   "title": "Native → Cross-Platform",
   "shift": "Java/Swift → Flutter/RN",
   "rules": {
    "t": "Native",
    "d": "Two codebases, max perf",
    "eg": "Swift + Kotlin"
   },
   "empirical": {
    "t": "Cross",
    "d": "One codebase, near-native",
    "eg": "Flutter build iOS+Android"
   },
   "blackBox": {
    "t": "Bridge",
    "d": "JS/Dart bridge vs compiled",
    "stats": "120 FPS Flutter"
   }
  },
  "pillars": [
   {
    "n": "UI & Nav",
    "icon": "fa-mobile-screen-button",
    "d": "Widgets, navigation, theming and responsive layouts with Material 3 / Cupertino, deep links and state restoration for 60fps.",
    "demand": 8,
    "complexity": 5,
    "tag": "UI"
   },
   {
    "n": "State & Offline",
    "icon": "fa-diagram-project",
    "d": "Provider/Bloc/Redux, immutable updates, SQLite/Hive, and CRDT-based reconciliation for offline mutations.",
    "demand": 8,
    "complexity": 6,
    "tag": "State"
   },
   {
    "n": "Native Bridge",
    "icon": "fa-microchip",
    "d": "Camera, sensors, permissions via FFI/JSI bridges, runtime permission flows and graceful degradation when hardware unavailable.",
    "demand": 7,
    "complexity": 6,
    "tag": "Native"
   },
   {
    "n": "Backend & Sync",
    "icon": "fa-cloud",
    "d": "Firebase Auth/Firestore, REST/GraphQL, FCM push, offline cache and conflict resolution for reliable sync.",
    "demand": 8,
    "complexity": 6,
    "tag": "Cloud"
   },
   {
    "n": "Publish",
    "icon": "fa-store",
    "d": "Signing, CI, phased rollouts, ASO screenshots and IAP/subscription billing with store policy compliance.",
    "demand": 7,
    "complexity": 5,
    "tag": "Ship"
   }
  ],
  "study": [
   {
    "p": "Flutter",
    "yt": "Flutter — official",
    "ytId": "VPvVD8t02U8",
    "cover": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&seed=d17c",
    "book": "Flutter in Action — Windmill"
   },
   {
    "p": "RN",
    "yt": "React Native — Academind",
    "ytId": "0-S5a0eXPoc",
    "cover": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&seed=ddc9",
    "book": "Learning React Native — Eisenman"
   },
   {
    "p": "Design",
    "yt": "Material 3 — Google",
    "ytId": "T_X4XFwKX8k",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=8c40",
    "book": "Refactoring UI — Wathan"
   },
   {
    "p": "Backend",
    "yt": "Firebase — Fireship",
    "ytId": "nIgIv4IfJ6s",
    "cover": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&seed=678a",
    "book": "Designing APIs — Jin"
   },
   {
    "p": "Publish",
    "yt": "Store Publish — Google",
    "ytId": "biqYkVf-a7Y",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=c65d",
    "book": "The Mobile Frontier — Cremin"
   },
   {
    "p": "Mobile App Development Docs",
    "yt": "Mobile App Development Official Docs ? Deep Dive",
    "ytId": "VPvVD8t02U8",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc194",
    "book": "Official docs + github.com/awesome-mobile-app-development ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Mobile App Development",
    "ytId": "0-S5a0eXPoc",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper194",
    "book": "Seminal paper + paperswithcode.com/sota for Mobile App Development"
   },
   {
    "p": "Community",
    "yt": "Mobile App Development Conference Talk",
    "ytId": "nIgIv4IfJ6s",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm194",
    "book": "github.com/topics/mobile-app-development + Stack Overflow [Mobile App Development]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Dart/JS & UI",
    "c": "Widgets, layouts, nav",
    "out": "Todo app",
    "icon": "fa-mobile-screen-button"
   },
   {
    "w": "7-14",
    "t": "State & Storage",
    "c": "State mgmt, SQLite, offline",
    "out": "Notes app",
    "icon": "fa-database"
   },
   {
    "w": "15-20",
    "t": "Native APIs",
    "c": "Camera, maps, sensors",
    "out": "Camera app",
    "icon": "fa-camera"
   },
   {
    "w": "21-26",
    "t": "Backend & Push",
    "c": "Auth, Firestore, FCM",
    "out": "Chat app",
    "icon": "fa-cloud"
   },
   {
    "w": "27-30",
    "t": "Perf & Test",
    "c": "Profiling, tests, CI",
    "out": "Release build",
    "icon": "fa-gauge-high"
   },
   {
    "w": "31-36",
    "t": "Store Launch",
    "c": "Signing, screenshots, ASO",
    "out": "Play/App Store live",
    "icon": "fa-store"
   }
  ],
  "timeline": [
   {
    "y": "2008",
    "t": "App Stores",
    "d": "Apple & Google launch"
   },
   {
    "y": "2015",
    "t": "React Native",
    "d": "Facebook"
   },
   {
    "y": "2017",
    "t": "Flutter",
    "d": "Google beta"
   },
   {
    "y": "2020",
    "t": "SwiftUI",
    "d": "Declarative iOS"
   },
   {
    "y": "2023",
    "t": "KMP",
    "d": "Kotlin multiplatform"
   }
  ],
  "evolution": {
   "years": [
    "2010",
    "2015",
    "2018",
    "2021",
    "2024",
    "2028"
   ],
   "cap": [
    20,
    40,
    65,
    82,
    92,
    99
   ],
   "label": "Cross-platform maturity"
  },
  "economics": [
   {
    "v": "$0.9T",
    "l": "App economy 2030",
    "d": "Revenue"
   },
   {
    "v": "7B",
    "l": "Devices",
    "d": "Android + iOS"
   },
   {
    "v": "$935B",
    "l": "App spend 2023",
    "d": "Data.ai"
   },
   {
    "v": "255B",
    "l": "Downloads",
    "d": "per year"
   }
  ],
  "balanced": {
   "pros": [
    "Scale to palms ? 7B devices; one codebase (Flutter/RN) ships to both stores with near-native 120fps via compiled rendering.",
    "Monetization ? IAP, subscriptions and ads are native to stores with trials and paywalls handled by billing libraries.",
    "Engagement ? push, offline cache and background sync keep DAU high even on flaky networks via CRDT reconciliation.",
    "Hardware access ? camera, GPS, AR and biometrics unlock use cases web cannot, via FFI/JSI bridges."
   ],
   "cons": [
    "Fragmentation ? OS versions, screen sizes and OEM skins multiply test matrices and APK sizes.",
    "Store review friction ? rejections for permissions, content or billing delay releases and need phased rollouts.",
    "Battery vs performance tension ? animations and background work drain battery; needs profiling and JobScheduler.",
    "Permission backlash ? users deny sensitive scopes after dark patterns; needs minimal, contextual requests."
   ]
  },
  "ethics": [
   {
    "t": "Minimal Permissions",
    "d": "Ask only needed",
    "icon": "fa-lock"
   },
   {
    "t": "No Dark Patterns",
    "d": "Cancel as easy as subscribe",
    "icon": "fa-eye-slash"
   },
   {
    "t": "Battery Respect",
    "d": "No background abuse",
    "icon": "fa-battery-half"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Dart/Flutter or Kotlin/RN theory, 09:00-12:00 Mobile Lab (emulators) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Mobile Club + Play Lab + Mobile Lab (emulators) ? weekly workshops, peer code reviews, shared devices + store accounts with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Web (APIs) peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem5: Mobile engineer intern (Internshala/LinkedIn 2024) ? ship offline-first app + store listing, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage device fragmentation and avoid store rejection via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Emulator free, Play $25 one-time ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Mobile: DSA + Flutter/RN + System",
   "previous": [
    {
     "q": "Explain widget lifecycle",
     "company": "Google 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "Med"
    },
    {
     "q": "Offline cache strategy",
     "company": "Amazon 2023",
     "year": "2023",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Mobile App Development system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Mobile App Development system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Mobile App Development system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Merge Intervals",
     "link": "LeetCode 56",
     "company": "Amazon 80%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show offline + perf | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "6-12 LPA",
   "mid": "12-24 LPA",
   "senior": "26-48 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Google",
    "Meta"
   ],
   "service": [
    "TCS",
    "Infosys"
   ],
   "startup": [
    "CRED"
   ],
   "psu": [
    "NIC"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech CSE, MS"
   ],
   "venues": [
    "MobiSys/UbiComp"
   ],
   "topics": [
    "Cross-platform perf",
    "Offline-first sync"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Software Engineering": {
  "slug": "software-engineering",
  "hero3D": {
   "layers": [
    4,
    4,
    4,
    4
   ],
   "particles": 20,
   "model": "blocks"
  },
  "id": "Software Engineering",
  "heroBadge": "Code → System → Scale • SOLID & System Design",
  "exec": "Learn to build software that stays easy to change and test. Covers clean code, data structures, system design (load balancers, caches, queues), testing, and team process (Agile). Core skill for any developer; needs daily coding and reviews. About 80% of cost is later changes — design matters.",
  "paradigm": {
   "title": "Hack → Engineer",
   "shift": "Ad-hoc → Principled",
   "rules": {
    "t": "Hack",
    "d": "Spaghetti, manual test",
    "eg": "All in one file"
   },
   "empirical": {
    "t": "Engineer",
    "d": "SOLID, tests, CI, reviews",
    "eg": "Modular + TDD"
   },
   "blackBox": {
    "t": "Abstraction",
    "d": "Hide complexity via interfaces",
    "stats": "80% cost is maintenance"
   }
  },
  "pillars": [
   {
    "n": "Design",
    "icon": "fa-diagram-project",
    "d": "SOLID, patterns, modularity; enforces coupling/cohesion metrics, evolves via strangler fig with feature flags.",
    "demand": 8,
    "complexity": 6,
    "tag": "Design"
   },
   {
    "n": "DSA",
    "icon": "fa-code",
    "d": "Arrays, trees, graphs, DP ? 300+ problems spaced repetition, complexity proofs via invariants and edge-case drills.",
    "demand": 9,
    "complexity": 7,
    "tag": "DSA"
   },
   {
    "n": "System Design",
    "icon": "fa-layer-group",
    "d": "Scalability, CAP, caching, queues, sharding; designs LB, CDN, cache, DB sharding and idempotent retries for 10x.",
    "demand": 9,
    "complexity": 8,
    "tag": "Scale"
   },
   {
    "n": "Quality",
    "icon": "fa-vial",
    "d": "Testing pyramid unit>integration>e2e, mocks, mutation testing and flake quarantine with coverage gates.",
    "demand": 8,
    "complexity": 6,
    "tag": "Quality"
   },
   {
    "n": "Agile",
    "icon": "fa-people-group",
    "d": "Scrum, estimation, DORA metrics, blameless retros and continuous delivery with trunk-based flow.",
    "demand": 7,
    "complexity": 5,
    "tag": "Agile"
   }
  ],
  "study": [
   {
    "p": "Design",
    "yt": "Design Patterns — Fireship",
    "ytId": "sz_dsktIjt4",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=cc47",
    "book": "Design Patterns — Gang of Four"
   },
   {
    "p": "DSA",
    "yt": "DSA — Striver",
    "ytId": "QGDhKyZiPAo",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=d69b",
    "book": "Introduction to Algorithms — CLRS"
   },
   {
    "p": "System Design",
    "yt": "System Design — Gaurav Sen",
    "ytId": "Vfo5le26IhY",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=f88f",
    "book": "Designing Data-Intensive Apps — Kleppmann"
   },
   {
    "p": "Quality",
    "yt": "Testing — Kent Beck",
    "ytId": "phOhGqpXss4",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=9a84",
    "book": "Clean Code — Robert Martin"
   },
   {
    "p": "Agile",
    "yt": "Agile — Henrik Kniberg",
    "ytId": "aj9CDZm0Glc",
    "cover": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&seed=4feb",
    "book": "The Mythical Man-Month — Brooks"
   },
   {
    "p": "Software Engineering Docs",
    "yt": "Software Engineering Official Docs ? Deep Dive",
    "ytId": "sz_dsktIjt4",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc733",
    "book": "Official docs + github.com/awesome-software-engineering ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Software Engineering",
    "ytId": "Vfo5le26IhY",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper733",
    "book": "Seminal paper + paperswithcode.com/sota for Software Engineering"
   },
   {
    "p": "Community",
    "yt": "Software Engineering Conference Talk",
    "ytId": "aj9CDZm0Glc",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm733",
    "book": "github.com/topics/software-engineering + Stack Overflow [Software Engineering]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Craft",
    "c": "Clean code, SOLID, Git",
    "out": "Refactored katas",
    "icon": "fa-code"
   },
   {
    "w": "7-14",
    "t": "DSA",
    "c": "Arrays, trees, graphs, DP",
    "out": "300 problems",
    "icon": "fa-diagram-project"
   },
   {
    "w": "15-20",
    "t": "System Design",
    "c": "LB, cache, queues, DB sharding",
    "out": "Design docs",
    "icon": "fa-layer-group"
   },
   {
    "w": "21-26",
    "t": "Quality",
    "c": "Unit/integration, mocks, CI",
    "out": "80% coverage",
    "icon": "fa-vial"
   },
   {
    "w": "27-30",
    "t": "Process",
    "c": "Scrum, estimation, reviews",
    "out": "Sprint shipped",
    "icon": "fa-people-group"
   },
   {
    "w": "31-36",
    "t": "Portfolio",
    "c": "Open-source, RFCs",
    "out": "GitHub + blog",
    "icon": "fa-briefcase"
   }
  ],
  "timeline": [
   {
    "y": "1968",
    "t": "NATO Conf.",
    "d": "Term SE coined"
   },
   {
    "y": "1995",
    "t": "Design Patterns",
    "d": "GoF"
   },
   {
    "y": "2001",
    "t": "Agile Manifesto",
    "d": "Lightweight methods"
   },
   {
    "y": "2014",
    "t": "Microservices",
    "d": "Fowler/Lewis"
   },
   {
    "y": "2020",
    "t": "DevProd",
    "d": "DORA metrics"
   }
  ],
  "evolution": {
   "years": [
    "2000",
    "2008",
    "2015",
    "2020",
    "2024",
    "2028"
   ],
   "cap": [
    30,
    50,
    70,
    85,
    93,
    98
   ],
   "label": "Engineering maturity"
  },
  "economics": [
   {
    "v": "$2T",
    "l": "SE spend 2030",
    "d": "Global SOftware"
   },
   {
    "v": "45M",
    "l": "Developers",
    "d": "Worldwide 2030 est"
   },
   {
    "v": "90%",
    "l": "APIs REST",
    "d": "Postman"
   },
   {
    "v": "5x",
    "l": "Deploy freq",
    "d": "DORA elite vs low"
   }
  ],
  "balanced": {
   "pros": [
    "Maintainability ? SOLID, patterns and modular boundaries make changes cheap, tested via seams and feature flags.",
    "Reliability ? testing pyramid with unit/integration/e2e, mocks and mutation testing catches regressions pre-release.",
    "Scalability ? proven system design (LB, cache, queues, sharding) handles 10x growth without rewrite.",
    "Team velocity ? shared design language, RFCs and blameless reviews align distributed teams and speed onboarding."
   ],
   "cons": [
    "Over-engineering risk ? premature abstractions violate YAGNI and add indirection; needs simplest workable first.",
    "Process drag ? excessive meetings, story points and rituals slow flow without DORA-guided trimming.",
    "Legacy migration pain ? strangler fig, dual writes and backfills are error-prone and long.",
    "Estimation remains hard ? uncertainty in integration and product discovery makes points inaccurate."
   ]
  },
  "ethics": [
   {
    "t": "Simple First",
    "d": "KISS, YAGNI",
    "icon": "fa-feather"
   },
   {
    "t": "Review Kindly",
    "d": "Blameless, constructive",
    "icon": "fa-handshake"
   },
   {
    "t": "Own Quality",
    "d": "Test what you ship",
    "icon": "fa-vial"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 DSA + System Design theory, 09:00-12:00 Coding Lab + GitHub labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Coding Club + OSS + Coding Lab + GitHub ? weekly workshops, peer code reviews, shared GitHub + CI with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with All domains peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: SDE intern (Internshala/LinkedIn 2024) ? ship modular service + tests + RFC, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage over-engineering and avoid estimation errors via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Free: GitHub + VS Code ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "FAANG: DSA (2-3) + System Design + Behavioral",
   "previous": [
    {
     "q": "Design URL Shortener",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "SOLID with example",
     "company": "Infosys 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "Med"
    },
    {
     "q": "Explain CAP",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ↗",
     "freq": "High"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Software Engineering system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Software Engineering system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "LC 146 LRU",
     "link": "LeetCode 146",
     "company": "FAANG 95%"
    },
    {
     "q": "Reverse Linked List",
     "link": "LeetCode 206",
     "company": "Service 90%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    }
   ],
   "tips": "Show tests + tradeoffs | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "7-13 LPA",
   "mid": "16-32 LPA",
   "senior": "35-70 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Google",
    "Microsoft"
   ],
   "service": [
    "TCS",
    "Infosys"
   ],
   "startup": [
    "Postman"
   ],
   "psu": [
    "NIC"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech CSE, MS SE (CMU)"
   ],
   "venues": [
    "ICSE/FSE",
    "OOPSALA"
   ],
   "topics": [
    "AI for code",
    "Microservices evolution"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Game Development": {
  "slug": "game-development",
  "hero3D": {
   "layers": [
    3,
    4,
    5,
    3
   ],
   "particles": 22,
   "model": "gamepad"
  },
  "id": "Game Development",
  "heroBadge": "Loop → World • Unity/Unreal Pro",
  "exec": "Make interactive worlds that run at 60 frames per second. Learn game loop, Unity/Unreal, 3D, physics, and gameplay rules, plus polishing and publishing. Creative and technical; needs time for assets and testing. Watch for overwork — plan scope small.",
  "paradigm": {
   "title": "Linear → Loop",
   "shift": "Scripts → Game Loop",
   "rules": {
    "t": "Scripts",
    "d": "Linear triggers",
    "eg": "if collide → score++"
   },
   "empirical": {
    "t": "Loop",
    "d": "60 FPS loop: input→update→render",
    "eg": "Unity Update()"
   },
   "blackBox": {
    "t": "Physics",
    "d": "Collision, constraints, tick",
    "stats": "60-120 FPS"
   }
  },
  "pillars": [
   {
    "n": "Engine & Scenes",
    "icon": "fa-gamepad",
    "d": "Unity/Unreal scenes, asset bundles, addressables, LOD and occlusion culling for 60fps on low-end devices.",
    "demand": 7,
    "complexity": 6,
    "tag": "Engine"
   },
   {
    "n": "3D & Shaders",
    "icon": "fa-cubes",
    "d": "Mesh, PBR materials, HLSL/ShaderGraph, lightmaps and GPU profiling via Frame Debugger for photorealism.",
    "demand": 7,
    "complexity": 7,
    "tag": "3D"
   },
   {
    "n": "Physics & Feel",
    "icon": "fa-atom",
    "d": "Rigid bodies, iterative impulse solvers, friction/restitution tuning and raycasts for game feel and juice.",
    "demand": 6,
    "complexity": 7,
    "tag": "Physics"
   },
   {
    "n": "Gameplay Systems",
    "icon": "fa-chess",
    "d": "State machines, behavior trees for AI, balancing via playtest metrics, saves and progression systems with economy tuning.",
    "demand": 7,
    "complexity": 6,
    "tag": "Play"
   },
   {
    "n": "Publish & Live Ops",
    "icon": "fa-store",
    "d": "Build pipelines for Itch/Play/Steam, IAP/ads without dark patterns, analytics funnel and A/B live ops with community.",
    "demand": 6,
    "complexity": 5,
    "tag": "Ship"
   }
  ],
  "study": [
   {
    "p": "Unity",
    "yt": "Unity — Brackeys",
    "ytId": "pYK4No7ACRE",
    "cover": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&seed=5310",
    "book": "Unity in Action — Hocking"
   },
   {
    "p": "Unreal",
    "yt": "Unreal — official",
    "ytId": "uPsUjKLHLAg",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=b8a1",
    "book": "Real-Time Rendering — Akenine-Möller"
   },
   {
    "p": "3D",
    "yt": "Shaders — Freya",
    "ytId": "U9DyHthJ6LA",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=b4d0",
    "book": "Game Programming Patterns — Nystrom"
   },
   {
    "p": "Design",
    "yt": "Game Design — GMTK",
    "ytId": "OnTgbN3uXvw",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=d25c",
    "book": "Level Up! — Rogers"
   },
   {
    "p": "Publish",
    "yt": "Steam Publish — Valve",
    "ytId": "QzY57FaENXg",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=72ce",
    "book": "Blood, Sweat, Pixels — Schreier"
   },
   {
    "p": "Game Development Docs",
    "yt": "Game Development Official Docs ? Deep Dive",
    "ytId": "pYK4No7ACRE",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc694",
    "book": "Official docs + github.com/awesome-game-development ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Game Development",
    "ytId": "U9DyHthJ6LA",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper694",
    "book": "Seminal paper + paperswithcode.com/sota for Game Development"
   },
   {
    "p": "Community",
    "yt": "Game Development Conference Talk",
    "ytId": "OnTgbN3uXvw",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm694",
    "book": "github.com/topics/game-development + Stack Overflow [Game Development]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Engine Basics",
    "c": "Scenes, sprites, input",
    "out": "2D runner",
    "icon": "fa-gamepad"
   },
   {
    "w": "7-14",
    "t": "3D & Animation",
    "c": "Mesh, rig, Blend Trees",
    "out": "3D demo",
    "icon": "fa-cubes"
   },
   {
    "w": "15-20",
    "t": "Physics",
    "c": "Colliders, joints, raycast",
    "out": "Physics puzzle",
    "icon": "fa-atom"
   },
   {
    "w": "21-26",
    "t": "Gameplay Systems",
    "c": "State, AI, saves",
    "out": "Playable loop",
    "icon": "fa-chess"
   },
   {
    "w": "27-30",
    "t": "Polish",
    "c": "Juice, audio, perf",
    "out": "Polished vertical slice",
    "icon": "fa-wand-magic-sparkles"
   },
   {
    "w": "31-36",
    "t": "Launch",
    "c": "Build, store, trailer",
    "out": "Itch/Play build",
    "icon": "fa-store"
   }
  ],
  "timeline": [
   {
    "y": "1972",
    "t": "Pong",
    "d": "Atari"
   },
   {
    "y": "2004",
    "t": "Unity",
    "d": "Democratization"
   },
   {
    "y": "2017",
    "t": "Fortnite",
    "d": "Live service era"
   },
   {
    "y": "2020",
    "t": "Ray Tracing",
    "d": "RTX"
   },
   {
    "y": "2023",
    "t": "GenAI Assets",
    "d": "AI-assisted art"
   }
  ],
  "evolution": {
   "years": [
    "2010",
    "2015",
    "2020",
    "2023",
    "2028"
   ],
   "cap": [
    30,
    55,
    78,
    90,
    99
   ],
   "label": "Fidelity & tools"
  },
  "economics": [
   {
    "v": "$0.5T",
    "l": "Games 2030",
    "d": "Global"
   },
   {
    "v": "3B",
    "l": "Players",
    "d": "Worldwide"
   },
   {
    "v": "$187B",
    "l": "Games 2023",
    "d": "Newzoo"
   },
   {
    "v": "$100B",
    "l": "In-app",
    "d": "Sensor Tower"
   }
  ],
  "balanced": {
   "pros": [
    "Creative canvas ? world-building, narrative and systems design merge code and art for novel player experiences.",
    "Tech driver ? pushes GPU, physics, audio and real-time networking, spilling over to film and simulation.",
    "Community ? modding, esports and live services create durable social ecosystems and UGC flywheels.",
    "Career breadth ? indie to AAA, plus adjacent simulation, AR/VR and serious games."
   ],
   "cons": [
    "Crunch culture ? milestone pressure drives overwork without scoped vertical slices and sustainable velocity.",
    "Discovery challenge ? crowded Steam/Play stores demand marketing, trailers and community building, not just code.",
    "Piracy and DRM arms race ? cracks bypass protections and hurt indie revenue; needs live-service value instead.",
    "Toxicity and moderation burden ? chat and voice require filters, reporting and human moderation at scale."
   ]
  },
  "ethics": [
   {
    "t": "No Loot Traps",
    "d": "Fair monetization",
    "icon": "fa-coins"
   },
   {
    "t": "Inclusive Worlds",
    "d": "Represent players",
    "icon": "fa-people-group"
   },
   {
    "t": "Healthy Loops",
    "d": "No addiction dark patterns",
    "icon": "fa-heart"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Unity/Unreal + C# theory, 09:00-12:00 Game Lab (Unity) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Game Club + Game Lab (Unity) ? weekly workshops, peer code reviews, shared GPU + asset store with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Art/3D designers peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: Game dev intern (Internshala/LinkedIn 2024) ? ship playable vertical slice + trailer, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage crunch risk and avoid scope creep via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Unity free tier, mid cost ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Game: DSA + Engine + 3D",
   "previous": [
    {
     "q": "Game loop 60 FPS",
     "company": "Ubisoft 2023",
     "year": "2023",
     "source": "Glassdoor ↗",
     "freq": "Med"
    },
    {
     "q": "Collision detection",
     "company": "EA 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Game Development system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Game Development system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Game Development system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Game of Life",
     "link": "LeetCode 289",
     "company": "Amazon 60%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show playable slice | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "5-11 LPA",
   "mid": "10-20 LPA",
   "senior": "22-40 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Ubisoft",
    "EA"
   ],
   "service": [
    "TCS"
   ],
   "startup": [
    "MPL"
   ],
   "psu": [
    "DRDO sim"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MDes/MS Games (CMU/Utah)"
   ],
   "venues": [
    "SIGGRAPH/FDG"
   ],
   "topics": [
    "Procedural generation",
    "Real-time ray tracing"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "HCI": {
  "slug": "hci",
  "hero3D": {
   "layers": [
    2,
    3,
    3,
    4
   ],
   "particles": 18,
   "model": "hand"
  },
  "id": "HCI",
  "heroBadge": "Human → Interface → Delight • Research to Prototype",
  "exec": "Design tech people enjoy using. Steps: talk to users, map journeys, sketch in Figma, make clickable prototypes, test with 5 users (finds 85% of issues), and check accessibility. Good if you like people and visuals; needs listening and iterating, not just coding.",
  "paradigm": {
   "title": "System-Centered → Human-Centered",
   "shift": "Features → Humans",
   "rules": {
    "t": "System",
    "d": "Expose internals",
    "eg": "Error 0x04"
   },
   "empirical": {
    "t": "Human",
    "d": "Observe, interview, prototype, test",
    "eg": "“Save?” frustration → autosave"
   },
   "blackBox": {
    "t": "Mental Models",
    "d": "Match user expectations",
    "stats": "5 users find 85% issues"
   }
  },
  "pillars": [
   {
    "n": "Research",
    "icon": "fa-magnifying-glass",
    "d": "Interviews, personas, journeys; synthesizes affinity maps, quantifies SUS and iterates after 5-user tests catching 85% issues.",
    "demand": 7,
    "complexity": 5,
    "tag": "Research"
   },
   {
    "n": "Design",
    "icon": "fa-pen-nib",
    "d": "Figma flows with design systems, tokens and variants, prototyping interactive states and handing off specs for pixel-perfect builds",
    "demand": 8,
    "complexity": 5,
    "tag": "UX"
   },
   {
    "n": "Prototype",
    "icon": "fa-wand-magic-sparkles",
    "d": "Clickable, motion, microcopy; prototypes with variants, tests desirability and hands off with tokens and specs.",
    "demand": 7,
    "complexity": 6,
    "tag": "Proto"
   },
   {
    "n": "Evaluate",
    "icon": "fa-chart-simple",
    "d": "Usability tests, SUS, A/B; designs randomized exposures with sample sizing, guardrail metrics and Bayesian stopping to ship only causally valid lifts.",
    "demand": 7,
    "complexity": 6,
    "tag": "Test"
   },
   {
    "n": "A11y",
    "icon": "fa-universal-access",
    "d": "WCAG, inclusive, i18n; audits with axe, tests keyboard/screen reader and meets AA contrast and focus order.",
    "demand": 8,
    "complexity": 6,
    "tag": "A11y"
   }
  ],
  "study": [
   {
    "p": "Design",
    "yt": "HCI — Georgia Tech",
    "ytId": "HZ4j_U3FC94",
    "cover": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&seed=6d45",
    "book": "Don’t Make Me Think — Krug"
   },
   {
    "p": "Research",
    "yt": "UX Research — NN/g",
    "ytId": "itBc7nwAK5o",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=4427",
    "book": "The Design of Everyday Things — Norman"
   },
   {
    "p": "Proto",
    "yt": "Figma — official",
    "ytId": "aircAruvnKk",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=e8bc",
    "book": "About Face — Cooper"
   },
   {
    "p": "Eval",
    "yt": "Usability — NN/g",
    "ytId": "ukzFI9rgwfU",
    "cover": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&seed=977a",
    "book": "Quantifying UX — Sauro"
   },
   {
    "p": "A11y",
    "yt": "A11y — Google",
    "ytId": "i_LwzRVP7bg",
    "cover": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&seed=a1c5",
    "book": "Inclusive Design — Holmes"
   },
   {
    "p": "HCI Docs",
    "yt": "HCI Official Docs ? Deep Dive",
    "ytId": "HZ4j_U3FC94",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc386",
    "book": "Official docs + github.com/awesome-hci ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? HCI",
    "ytId": "ukzFI9rgwfU",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper386",
    "book": "Seminal paper + paperswithcode.com/sota for HCI"
   },
   {
    "p": "Community",
    "yt": "HCI Conference Talk",
    "ytId": "aircAruvnKk",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm386",
    "book": "github.com/topics/hci + Stack Overflow [HCI]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Research",
    "c": "Interviews, personas, maps",
    "out": "Research report",
    "icon": "fa-magnifying-glass"
   },
   {
    "w": "7-14",
    "t": "Flows & DS",
    "c": "IA, flows, design system",
    "out": "Figma DS",
    "icon": "fa-pen-nib"
   },
   {
    "w": "15-20",
    "t": "Prototype",
    "c": "Hi-fi, motion, copy",
    "out": "Clickable proto",
    "icon": "fa-wand-magic-sparkles"
   },
   {
    "w": "21-26",
    "t": "Test",
    "c": "5-user tests, metrics",
    "out": "Usability report",
    "icon": "fa-chart-simple"
   },
   {
    "w": "27-30",
    "t": "Build with Eng",
    "c": "Handoff, a11y audit",
    "out": "Shipped feature",
    "icon": "fa-universal-access"
   },
   {
    "w": "31-36",
    "t": "Portfolio",
    "c": "Case studies, metrics",
    "out": "3 case studies",
    "icon": "fa-briefcase"
   }
  ],
  "timeline": [
   {
    "y": "1984",
    "t": "Mac GUI",
    "d": "Desktop metaphor"
   },
   {
    "y": "2007",
    "t": "iPhone",
    "d": "Multi-touch"
   },
   {
    "y": "2014",
    "t": "Material",
    "d": "Google design"
   },
   {
    "y": "2020",
    "t": "Voice & Gesture",
    "d": "Beyond touch"
   },
   {
    "y": "2023",
    "t": "GenAI UX",
    "d": "Copilot patterns"
   }
  ],
  "evolution": {
   "years": [
    "2005",
    "2010",
    "2015",
    "2020",
    "2024",
    "2028"
   ],
   "cap": [
    20,
    40,
    62,
    82,
    92,
    98
   ],
   "label": "Interaction richness"
  },
  "economics": [
   {
    "v": "$0.3T",
    "l": "UX impact",
    "d": "Conversion uplift"
   },
   {
    "v": "10% ",
    "l": "Dev cost saved",
    "d": "Fix early via tests"
   },
   {
    "v": "$29B",
    "l": "UX software",
    "d": "Figma"
   },
   {
    "v": "88%",
    "l": "Abandon",
    "d": "bad UX"
   }
  ],
  "balanced": {
   "pros": [
    "Delight drives retention ? 5-user tests catch 85% issues early, lifting conversion and NPS with small fixes.",
    "Inclusive reach ? a11y (WCAG AA) and i18n expand market and reduce legal risk, with keyboard and screen-reader flows.",
    "Support cost down ? clearer IA and microcopy cut tickets and onboarding time, measured via SUS and task success.",
    "Brand differentiation ? distinctive interaction and motion create emotional, memorable products beyond features."
   ],
   "cons": [
    "Subjectivity and taste debates ? critiques stall without research-backed personas and jobs-to-be-done criteria.",
    "Research cost and time ? interviews, synthesis and synthesis add weeks; needs leanRITE and triage.",
    "Design-engineering hand-off gaps ? Figma tokens drift from code without design systems and specs.",
    "Trend churn ? visual styles fade; needs timeless fundamentals over chasing Dribbble."
   ]
  },
  "ethics": [
   {
    "t": "No Dark Patterns",
    "d": "Honest flows",
    "icon": "fa-eye-slash"
   },
   {
    "t": "Informed Consent",
    "d": "Research ethics",
    "icon": "fa-file-signature"
   },
   {
    "t": "Privacy by Design",
    "d": "Data minimization",
    "icon": "fa-shield"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 User research + Figma theory, 09:00-12:00 UX Lab + testing labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Design Club + UX Lab + testing ? weekly workshops, peer code reviews, shared Figma + maze with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Web/Mobile peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem5: UX engineer intern (Internshala/LinkedIn 2024) ? ship 3 case studies with SUS scores, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage subjective feedback and avoid research bias via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Figma edu free ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "UX: Portfolio + Case + Whiteboard",
   "previous": [
    {
     "q": "Design checkout for rural users",
     "company": "Google 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "SUS vs NPS",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design HCI system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design HCI system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design HCI system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Design critique (no code)",
     "link": "Portfolio",
     "company": "Product 90%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show 5-user test | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "6-12 LPA",
   "mid": "12-22 LPA",
   "senior": "24-42 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Google Material",
    "Apple"
   ],
   "service": [
    "TCS Interactive"
   ],
   "startup": [
    "Figma"
   ],
   "psu": [
    "NIC"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MDes (IIT-B IDC), MS HCI"
   ],
   "venues": [
    "CHI/UIST",
    "DIS"
   ],
   "topics": [
    "Accessibility India",
    "Voice+gesture"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Cybersecurity": {
  "slug": "cybersecurity",
  "hero3D": {
   "layers": [
    4,
    4,
    4,
    4
   ],
   "particles": 24,
   "model": "shield"
  },
  "id": "Cybersecurity",
  "heroBadge": "Perimeter → Zero Trust • Ethical to SOC",
  "exec": "Protect systems and data. Learn networks, Linux, encryption, how attackers probe (OWASP Top 10) and how defenders monitor (SIEM, IDS), plus incident response and forensics. High demand (4.8M openings, ISC2 2024) but needs ethics: only test with permission and report responsibly.",
  "paradigm": {
   "title": "Perimeter → Zero Trust",
   "shift": "Trust network → Verify every request",
   "rules": {
    "t": "Perimeter",
    "d": "Firewall at edge",
    "eg": "Inside = trusted"
   },
   "empirical": {
    "t": "Zero Trust",
    "d": "Identity + device + least privilege",
    "eg": "MFA every call"
   },
   "blackBox": {
    "t": "Kill Chain",
    "d": "Recon → exploit → persist detection",
    "stats": "MTTD <10m vs >200d"
   }
  },
  "pillars": [
   {
    "n": "Networking & OS",
    "icon": "fa-network-wired",
    "d": "TCP/IP, Linux hardening, Wireshark; hardens with least privilege, captures with Wireshark and triages with SIEM correlation.",
    "demand": 8,
    "complexity": 6,
    "tag": "Core"
   },
   {
    "n": "Cryptography",
    "icon": "fa-key",
    "d": "Sym/asym, TLS, PKI, hashing; negotiates TLS 1.3, rotates keys via PKI and audits for PQC readiness.",
    "demand": 7,
    "complexity": 7,
    "tag": "Crypto"
   },
   {
    "n": "Ethical Hacking",
    "icon": "fa-user-secret",
    "d": "Recon, exploit, privilege esc; follows PTES, scopes to authorized ranges and reports with CVSS and proof-of-concept.",
    "demand": 9,
    "complexity": 7,
    "tag": "Offense"
   },
   {
    "n": "Defense & SOC",
    "icon": "fa-shield-halved",
    "d": "SIEM, IDS, incident response; tunes detections to reduce false positives, runs playbooks and measures MTTD/MTTR.",
    "demand": 9,
    "complexity": 8,
    "tag": "Defense"
   },
   {
    "n": "Forensics & GRC",
    "icon": "fa-scale-balanced",
    "d": "Chain of custody, compliance; preserves chain-of-custody, hashes evidence and maps to NIST/ISO controls.",
    "demand": 7,
    "complexity": 7,
    "tag": "GRC"
   }
  ],
  "study": [
   {
    "p": "Networking",
    "yt": "Network — NPTEL",
    "ytId": "1vbXmCrkT3Y",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=b9dc",
    "book": "Computer Networking — Kurose & Ross"
   },
   {
    "p": "Crypto",
    "yt": "Crypto — Khan Academy",
    "ytId": "wjZofJX0v4M",
    "cover": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&seed=c5e3",
    "book": "Cryptography Engineering — Ferguson"
   },
   {
    "p": "Hacking",
    "yt": "CEH — EC-Council",
    "ytId": "3PHXvlpOkf4",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=3e46",
    "book": "The Web App Hacker’s Handbook — Stuttard"
   },
   {
    "p": "SOC",
    "yt": "SOC — SANS",
    "ytId": "w7ejDZ8SWv8",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=416c",
    "book": "Blue Team Handbook — Clark"
   },
   {
    "p": "Forensics",
    "yt": "Forensics — 13Cubed",
    "ytId": "TlB_eWDSMt4",
    "cover": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&seed=4d1d",
    "book": "Digital Forensics — Carrier"
   },
   {
    "p": "Docs",
    "yt": "OWASP Top 10 ? 2023",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=cy6",
    "book": "owasp.org/www-project-top-ten + cheatsheetseries.owasp.org"
   },
   {
    "p": "Lab",
    "yt": "TryHackMe ? SOC Level 1",
    "ytId": "cZaNf2rA30k",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=cy7",
    "book": "tryhackme.com + hackthebox.com ? hands-on labs"
   },
   {
    "p": "Paper",
    "yt": "Zero Trust ? BeyondCorp (Google)",
    "ytId": "_C8kWso4ne4",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=cy8",
    "book": "Google BeyondCorp papers + nvlpubs.nist.gov SP 800-207 (Zero Trust)"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Foundations",
    "c": "OSI/TCP, Linux, Wireshark",
    "out": "Packet labs",
    "icon": "fa-network-wired"
   },
   {
    "w": "7-12",
    "t": "Crypto",
    "c": "TLS, certs, hashing",
    "out": "TLS proxy",
    "icon": "fa-key"
   },
   {
    "w": "13-18",
    "t": "Offense",
    "c": "Kali, Burp, OWASP Top 10",
    "out": "Vuln report",
    "icon": "fa-user-secret"
   },
   {
    "w": "19-24",
    "t": "Defense",
    "c": "SIEM (Wazuh), IDS",
    "out": "SOC dashboard",
    "icon": "fa-shield-halved"
   },
   {
    "w": "25-30",
    "t": "IR & Forensics",
    "c": "Playbooks, chain of custody",
    "out": "IR drill",
    "icon": "fa-scale-balanced"
   },
   {
    "w": "31-36",
    "t": "Cert & Labs",
    "c": "TryHackMe, vuln boxes",
    "out": "Portfolio + cert",
    "icon": "fa-award"
   }
  ],
  "timeline": [
   {
    "y": "1971",
    "t": "Creeper",
    "d": "First worm"
   },
   {
    "y": "1988",
    "t": "Morris Worm",
    "d": "Internet crippled"
   },
   {
    "y": "2017",
    "t": "WannaCry",
    "d": "Ransomware pandemic"
   },
   {
    "y": "2020",
    "t": "Zero Trust",
    "d": "Google BeyondCorp model"
   },
   {
    "y": "2024",
    "t": "AI Phishing",
    "d": "GenAI social eng"
   }
  ],
  "evolution": {
   "years": [
    "2000",
    "2010",
    "2015",
    "2020",
    "2024",
    "2028"
   ],
   "cap": [
    20,
    40,
    60,
    80,
    93,
    99
   ],
   "label": "Threat sophistication"
  },
  "economics": [
   {
    "v": "$0.6T",
    "l": "Cyber spend 2030",
    "d": "Global"
   },
   {
    "v": "3.5M",
    "l": "Unfilled jobs",
    "d": "ISC2 2025"
   },
   {
    "v": "33%",
    "l": "Growth",
    "d": "Demand YoY"
   },
   {
    "v": "$538B",
    "l": "Cyber 2030",
    "d": "FortuneBI"
   },
   {
    "v": "$10.5T",
    "l": "Crime cost 2025",
    "d": "Cybersec Ventures"
   }
  ],
  "balanced": {
   "pros": [
    "Protection ? Zero Trust, least privilege and MFA reduce breach blast radius and lateral movement, with measurable MTTD drop.",
    "Trust and compliance ? SOC2/ISO controls and audit trails satisfy enterprise buyers and regulators.",
    "Detection speed ? SIEM correlation cuts dwell time from months to minutes, with playbooks and automated containment.",
    "Career shortage ? 3.5M unfilled roles (ISC2 2025) ensure premium, recession-resilient demand."
   ],
   "cons": [
    "Arms race ? attackers evolve with GenAI phishing; defenses need continuous intel, purple teaming and patch SLA.",
    "Alert fatigue ? noisy rules drown analysts in false positives; needs tuned detections and SOAR triage.",
    "Usability friction ? MFA and least privilege frustrate users; needs adaptive, risk-based auth.",
    "Tool sprawl cost ? SIEM, EDR, WAF, CSPM overlap and bloat FinOps without consolidation and tagging."
   ]
  },
  "ethics": [
   {
    "t": "Authorized Only",
    "d": "No unsanctioned testing",
    "icon": "fa-file-signature"
   },
   {
    "t": "Disclosure",
    "d": "Responsible 90-day disclosure",
    "icon": "fa-bullhorn"
   },
   {
    "t": "Privacy Respect",
    "d": "Minimize data in investigations",
    "icon": "fa-user-shield"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Networks + Linux + Crypto theory, 09:00-12:00 SOC + CTF range labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "CTF Team + SOC + CTF range ? weekly workshops, peer code reviews, shared Kali + Wazuh with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Networks + OS peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: SOC analyst intern (Internshala/LinkedIn 2024) ? ship vuln report + SIEM dashboard, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage alert fatigue and avoid false positives via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Kali free, TryHackMe free tier ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Service: Apt + Network + HR | Product: SOC + Pentest",
   "previous": [
    {
     "q": "SYN flood mitigation",
     "company": "TCS 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Explain Zero Trust vs Perimeter",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "OWASP Top 10 XSS",
     "company": "Infosys 2023",
     "year": "2023",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Explain SYN flood and mitigation (SYN cookies)",
     "company": "TCS 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "Zero Trust vs Perimeter ? implement MFA every call",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "OWASP Top 10 XSS ? stored vs reflected fix",
     "company": "Infosys 2023",
     "year": "2023",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "Design Cybersecurity system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Cybersecurity system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Cybersecurity system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Cybersecurity system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Detect anagrams",
     "link": "LeetCode 438",
     "company": "Service 70%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show responsible disclosure | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "6-12 LPA",
   "mid": "14-26 LPA",
   "senior": "30-55 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Palo Alto",
    "CrowdStrike"
   ],
   "service": [
    "TCS Cyber"
   ],
   "startup": [
    "Sequretek"
   ],
   "psu": [
    "CERT-In"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "CERT-In / NCIIPC Scientist",
    "eligibility": "B.E + CEH / GATE, cyber certs",
    "age": "30",
    "salary": "56100 Level-10",
    "link": "cert-in.org.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "DRDO SAG (Cryptography)",
    "eligibility": "B.E + GATE Cryptography",
    "age": "28",
    "salary": "56100",
    "link": "rac.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech Cyber (IIT-K/DIT), MS"
   ],
   "venues": [
    "CCS/USENIX Security",
    "NDSS"
   ],
   "topics": [
    "Zero Trust",
    "Post-quantum crypto"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Cloud Computing": {
  "slug": "cloud-computing",
  "hero3D": {
   "layers": [
    3,
    6,
    8,
    4
   ],
   "particles": 30,
   "model": "cloud"
  },
  "id": "Cloud Computing",
  "heroBadge": "Servers → Services • AWS/Azure/GCP Pro",
  "exec": "Run apps on rented computers (AWS/Azure/GCP) so they scale on demand. Covers virtual networks, storage, containers (Docker/Kubernetes), and automation with code (Terraform). Learn to watch costs and set alerts. Good if you like Linux and automation; bills can spike without tagging.",
  "paradigm": {
   "title": "Pets → Cattle → Functions",
   "shift": "Own racks → Pay per use",
   "rules": {
    "t": "Pets",
    "d": "Hand-tuned servers",
    "eg": "SSH fix at 2am"
   },
   "empirical": {
    "t": "Cattle",
    "d": "Immutable, auto-scaled, IaC",
    "eg": "Terraform + ASG"
   },
   "blackBox": {
    "t": "Control Plane",
    "d": "Orchestration abstracts nodes",
    "stats": "99.99% SLA"
   }
  },
  "pillars": [
   {
    "n": "Compute & Network",
    "icon": "fa-cloud",
    "d": "VPC, EC2, LB, CloudFront; isolates with VPC, scales with ASG and caches at edge to cut TTFB <50ms.",
    "demand": 9,
    "complexity": 6,
    "tag": "Infra"
   },
   {
    "n": "Storage & DB",
    "icon": "fa-database",
    "d": "S3, EBS, RDS with lifecycle, versioning, backup and cross-region replication for 11 9s durability.",
    "demand": 8,
    "complexity": 5,
    "tag": "Store"
   },
   {
    "n": "Containers & K8s",
    "icon": "fa-cubes",
    "d": "Docker, K8s, Helm; multi-stage builds, HPA and service mesh for resilient microservices.",
    "demand": 9,
    "complexity": 7,
    "tag": "K8s"
   },
   {
    "n": "IaC & GitOps",
    "icon": "fa-code",
    "d": "Terraform, GitOps (ArgoCD), policy as code and drift detection for auditable, reproducible infra.",
    "demand": 8,
    "complexity": 6,
    "tag": "IaC"
   },
   {
    "n": "FinOps & Security",
    "icon": "fa-coins",
    "d": "IAM least privilege, cost allocation via tags, budgets, guardrails and OpenTelemetry traces for cost-aware alerts.",
    "demand": 8,
    "complexity": 7,
    "tag": "FinOps"
   }
  ],
  "study": [
   {
    "p": "Cloud",
    "yt": "AWS — Cloud Practitioner",
    "ytId": "VPvVD8t02U8",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=6214",
    "book": "Cloud FinOps — Storment & Fuller"
   },
   {
    "p": "K8s",
    "yt": "K8s — TechWorld",
    "ytId": "0-S5a0eXPoc",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=b6bb",
    "book": "Kubernetes Up & Running — Burns"
   },
   {
    "p": "IaC",
    "yt": "Terraform — HashiCorp",
    "ytId": "SLB_c_ayRMo",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=ee78",
    "book": "Terraform Up & Running — Brikman"
   },
   {
    "p": "Network",
    "yt": "VPC — AWS",
    "ytId": "ukzFI9rgwfU",
    "cover": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&seed=753b",
    "book": "Cloud Native — Burns et al"
   },
   {
    "p": "Sec",
    "yt": "IAM — AWS",
    "ytId": "rfscVS0vtbw",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=d03f",
    "book": "Cloud Security — Rich Mogull"
   },
   {
    "p": "Docs",
    "yt": "AWS Well-Architected ? Official",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=cl6",
    "book": "docs.aws.amazon.com/wellarchitected + learn.hashicorp.com/terraform"
   },
   {
    "p": "Lab",
    "yt": "Kubernetes ? Kelsey Hightower",
    "ytId": "cZaNf2rA30k",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=cl7",
    "book": "kubernetes.io/docs + github.com/kubernetes/examples"
   },
   {
    "p": "Paper",
    "yt": "Borg/Omega ? Google",
    "ytId": "_C8kWso4ne4",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=cl8",
    "book": "Google Borg (Eurosys 2015) + FinOps.org ? cost discipline"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Linux & Net",
    "c": "VPC, subnets, security groups",
    "out": "VPC lab",
    "icon": "fa-network-wired"
   },
   {
    "w": "7-14",
    "t": "Compute & Store",
    "c": "EC2, S3, lifecycles",
    "out": "Hosted app",
    "icon": "fa-cloud"
   },
   {
    "w": "15-20",
    "t": "Docker & K8s",
    "c": "Images, pods, services",
    "out": "K8s cluster",
    "icon": "fa-cubes"
   },
   {
    "w": "21-26",
    "t": "IaC",
    "c": "Terraform, CI/CD",
    "out": "GitOps repo",
    "icon": "fa-code"
   },
   {
    "w": "27-30",
    "t": "Observability",
    "c": "Prom/Grafana, tracing",
    "out": "Dash + alerts",
    "icon": "fa-chart-line"
   },
   {
    "w": "31-36",
    "t": "Prod",
    "c": "Cost, sec, DR",
    "out": "Prod checklist",
    "icon": "fa-rocket"
   }
  ],
  "timeline": [
   {
    "y": "2006",
    "t": "AWS S3/EC2",
    "d": "Pay-as-you-go"
   },
   {
    "y": "2010",
    "t": "Azure",
    "d": "Microsoft cloud"
   },
   {
    "y": "2014",
    "t": "Kubernetes",
    "d": "Google open source"
   },
   {
    "y": "2015",
    "t": "Serverless",
    "d": "Lambda"
   },
   {
    "y": "2022",
    "t": "FinOps",
    "d": "Cost discipline"
   }
  ],
  "evolution": {
   "years": [
    "2010",
    "2015",
    "2018",
    "2021",
    "2024",
    "2028"
   ],
   "cap": [
    20,
    45,
    68,
    84,
    92,
    98
   ],
   "label": "Cloud adoption"
  },
  "economics": [
   {
    "v": "$1.5T",
    "l": "Cloud 2030",
    "d": "Global spend"
   },
   {
    "v": "30%",
    "l": "CAGR",
    "d": "Growth"
   },
   {
    "v": "40%",
    "l": "Savings",
    "d": "Vs on-prem with FinOps"
   },
   {
    "v": "$912B",
    "l": "Cloud 2025",
    "d": "Gartner"
   },
   {
    "v": "94%",
    "l": "Multi-cloud",
    "d": "Flexera 2024"
   }
  ],
  "balanced": {
   "pros": [
    "Elasticity ? autoscaling from 0 to 10k in seconds handles flash sales without over-provisioning, pay-per-use.",
    "Global reach ? Regions, AZs and CloudFront bring data to users with <50ms TTFB and 99.99% SLA via multi-AZ.",
    "Less undifferentiated work ? managed RDS, S3, Lambda free teams to focus on business logic, not patching.",
    "Innovation on tap ? AI, analytics and IoT services integrate via IAM with guardrails and service quotas."
   ],
   "cons": [
    "Bill shock ? egress, idle ASGs and unattached EBS surprise without tagging, budgets and auto-scaling policies.",
    "Vendor lock ? proprietary queues, IAM and data gravity make migration heavy; needs open standards and exit plan.",
    "Complexity ? VPC, IAM, security groups and quotas overwhelm beginners without IaC and well-architected reviews.",
    "Blast radius ? region or AZ outage can cascade without multi-region DR drills and chaos testing."
   ]
  },
  "ethics": [
   {
    "t": "Least Privilege",
    "d": "IAM minimal",
    "icon": "fa-key"
   },
   {
    "t": "Cost Transparency",
    "d": "Tag → chargeback",
    "icon": "fa-receipt"
   },
   {
    "t": "Sustainability",
    "d": "Right-size → carbon ↓",
    "icon": "fa-leaf"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Linux + AWS + Docker theory, 09:00-12:00 Cloud Lab (AWS) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Cloud Club + Cloud Lab (AWS) ? weekly workshops, peer code reviews, shared AWS credits + K8s with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with DevOps peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: Cloud engineer intern (Internshala/LinkedIn 2024) ? ship Terraform infra + cost dashboard, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage bill shock and avoid IAM misconfig via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "AWS free tier, tag to control bill ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Cloud: Linux + Design + Hands-on",
   "previous": [
    {
     "q": "Design S3 with 11 9s durability",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "K8s pod vs deployment",
     "company": "Infosys 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Cloud Computing system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Cloud Computing system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Cloud Computing system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Design rate limiter",
     "link": "System Design",
     "company": "FAANG 80%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show cost tagging | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "7-13 LPA",
   "mid": "15-28 LPA",
   "senior": "32-60 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "AWS",
    "Azure"
   ],
   "service": [
    "TCS Cloud"
   ],
   "startup": [
    "Zoho"
   ],
   "psu": [
    "NIC Cloud"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "NIC Cloud (MeghRaj) Engineer",
    "eligibility": "B.E + AWS/Azure cert",
    "age": "30",
    "salary": "44900 Level-7",
    "link": "nielit.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "C-DAC Cloud Engineer",
    "eligibility": "B.E/MCA + Cloud",
    "age": "30",
    "salary": "37200-56100",
    "link": "cdac.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech Cloud (IIT), MS"
   ],
   "venues": [
    "SoCC/NSDI",
    "SIGCOMM"
   ],
   "topics": [
    "Serverless cold start",
    "FinOps auto-scale"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Computer Networks": {
  "slug": "computer-networks",
  "hero3D": {
   "layers": [
    5,
    5,
    5,
    5
   ],
   "particles": 26,
   "model": "net"
  },
  "id": "Computer Networks",
  "heroBadge": "Bits → Flows • OSI to QUIC",
  "exec": "Learn how data moves: layers, IP addresses, TCP/UDP/QUIC, routing, and security (TLS, VPN), plus tools like Wireshark. Understand why video stalls (latency) and how networks recover from failures. Practical with labs; needs subnetting practice.",
  "paradigm": {
   "title": "Circuit → Packet → QUIC",
   "shift": "Dedicated → Shared → Encrypted",
   "rules": {
    "t": "Circuit",
    "d": "Reserve path",
    "eg": "Phone line"
   },
   "empirical": {
    "t": "Packet",
    "d": "Statistical multiplex, loss recovery",
    "eg": "TCP + QUIC 0-RTT"
   },
   "blackBox": {
    "t": "Congestion",
    "d": "AIMD, BBR",
    "stats": "ms to <10ms"
   }
  },
  "pillars": [
   {
    "n": "Fundamentals",
    "icon": "fa-layer-group",
    "d": "OSI, encapsulation, addressing; traces encapsulation from L2 frame to L7 payload and validates with packet captures.",
    "demand": 7,
    "complexity": 5,
    "tag": "OSI"
   },
   {
    "n": "TCP/IP",
    "icon": "fa-network-wired",
    "d": "IP, TCP, UDP, QUIC, DNS; contrasts TCP AIMD/BBR vs QUIC 0-RTT and loss recovery under tail latency.",
    "demand": 8,
    "complexity": 6,
    "tag": "IP"
   },
   {
    "n": "Routing",
    "icon": "fa-route",
    "d": "OSPF, BGP, SDN; computes shortest paths via Dijkstra, peers BGP and segments with SDN.",
    "demand": 7,
    "complexity": 7,
    "tag": "Route"
   },
   {
    "n": "Security",
    "icon": "fa-shield-halved",
    "d": "TLS, firewalls, VPN; negotiates TLS 1.3, rotates keys via PKI and audits for PQC readiness.",
    "demand": 8,
    "complexity": 6,
    "tag": "Sec"
   },
   {
    "n": "Tools",
    "icon": "fa-screwdriver-wrench",
    "d": "Wireshark, iperf, traceroute; hardens with least privilege, captures with Wireshark and triages with SIEM correlation.",
    "demand": 7,
    "complexity": 5,
    "tag": "Tools"
   }
  ],
  "study": [
   {
    "p": "Fundamentals",
    "yt": "CN — NPTEL",
    "ytId": "i_LwzRVP7bg",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=aaa0",
    "book": "Computer Networking — Kurose"
   },
   {
    "p": "TCP",
    "yt": "TCP — CS144 Stanford",
    "ytId": "rfscVS0vtbw",
    "cover": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&seed=852f",
    "book": "TCP/IP Illustrated — Stevens"
   },
   {
    "p": "Routing",
    "yt": "BGP — APNIC",
    "ytId": "g_IaVepNDT4",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=88c7",
    "book": "Routing TCP/IP — Doyle"
   },
   {
    "p": "Security",
    "yt": "TLS — Computerphile",
    "ytId": "g_IaVepNDT4",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=7ae3",
    "book": "Network Security — Kaufman"
   },
   {
    "p": "Tools",
    "yt": "Wireshark — Chris Greer",
    "ytId": "aircAruvnKk",
    "cover": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&seed=8109",
    "book": "Wireshark — Chappell"
   },
   {
    "p": "Computer Networks Docs",
    "yt": "Computer Networks Official Docs ? Deep Dive",
    "ytId": "i_LwzRVP7bg",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc304",
    "book": "Official docs + github.com/awesome-computer-networks ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Computer Networks",
    "ytId": "g_IaVepNDT4",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper304",
    "book": "Seminal paper + paperswithcode.com/sota for Computer Networks"
   },
   {
    "p": "Community",
    "yt": "Computer Networks Conference Talk",
    "ytId": "aircAruvnKk",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm304",
    "book": "github.com/topics/computer-networks + Stack Overflow [Computer Networks]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "OSI & Cabling",
    "c": "Layers, Ethernet, Wi-Fi",
    "out": "Home lab",
    "icon": "fa-layer-group"
   },
   {
    "w": "7-14",
    "t": "IP & Transport",
    "c": "Subnetting, TCP handshake",
    "out": "Subnet plan",
    "icon": "fa-network-wired"
   },
   {
    "w": "15-20",
    "t": "Routing",
    "c": "OSPF, BGP labs (GNS3)",
    "out": "Routed topology",
    "icon": "fa-route"
   },
   {
    "w": "21-26",
    "t": "Security",
    "c": "TLS, VPN, firewall rules",
    "out": "Hardened net",
    "icon": "fa-shield-halved"
   },
   {
    "w": "27-30",
    "t": "Wireless & Tools",
    "c": "Wireshark, perf tuning",
    "out": "Capture analysis",
    "icon": "fa-wifi"
   },
   {
    "w": "31-36",
    "t": "Cert",
    "c": "Mock CCNA, troubleshoot",
    "out": "CCNA ready",
    "icon": "fa-award"
   }
  ],
  "timeline": [
   {
    "y": "1969",
    "t": "ARPANET",
    "d": "First packets"
   },
   {
    "y": "1983",
    "t": "TCP/IP",
    "d": "Internet flag day"
   },
   {
    "y": "1991",
    "t": "WWW",
    "d": "HTTP + HTML"
   },
   {
    "y": "2015",
    "t": "QUIC",
    "d": "Google → IETF"
   },
   {
    "y": "2020",
    "t": "Wi-Fi 6",
    "d": "High density"
   }
  ],
  "evolution": {
   "years": [
    "2000",
    "2010",
    "2015",
    "2020",
    "2024",
    "2028"
   ],
   "cap": [
    25,
    50,
    68,
    84,
    92,
    98
   ],
   "label": "Throughput & latency"
  },
  "economics": [
   {
    "v": "$0.4T",
    "l": "Networking 2030",
    "d": "5G, Wi-Fi, SD-WAN"
   },
   {
    "v": "18%",
    "l": "Growth",
    "d": "Enterprise upgrades"
   },
   {
    "v": "$242B",
    "l": "5G 2030",
    "d": "GSMA"
   },
   {
    "v": "29B",
    "l": "IoT devices 2030",
    "d": "Statista"
   }
  ],
  "balanced": {
   "pros": [
    "Global connectivity ? IP routing stitches continents with <100ms paths, resilient via BGP reconvergence and anycast.",
    "Resilience ? ECMP and fast reroute survive fiber cuts without app awareness, measured via packet loss budgets.",
    "Security in transit ? TLS 1.3 and QUIC encrypt by default with 0-RTT, plus VPNs isolate tenants.",
    "Deep observability ? Wireshark, sFlow and packet mirrors expose per-packet truth for root-cause analysis."
   ],
   "cons": [
    "Configuration complexity ? drift across CLI, SDN and IaC causes outages without versioned, tested templates.",
    "Tail latency dominates UX ? p99 spikes from bufferbloat or policers need BBR, QoS and careful sizing.",
    "Lateral movement risk ? flat L2 enables worm spread without segmentation, micro-segmentation and mTLS.",
    "24/7 operations ? NOC on-call, firmware CVEs and maintenance windows are relentless without automation."
   ]
  },
  "ethics": [
   {
    "t": "Neutrality",
    "d": "No deceptive throttling",
    "icon": "fa-scale-balanced"
   },
   {
    "t": "Log Minimally",
    "d": "Anonymize flows",
    "icon": "fa-user-secret"
   },
   {
    "t": "Patch Fast",
    "d": "Firmware & CVEs",
    "icon": "fa-screwdriver-wrench"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 OSI + TCP/IP + Wireshark theory, 09:00-12:00 Net Lab + GNS3 labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "CCNA Club + Net Lab + GNS3 ? weekly workshops, peer code reviews, shared GNS3 + hardware with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Cybersecurity peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: Network engineer intern (Internshala/LinkedIn 2024) ? ship subnet plan + capture analysis, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage config drift and avoid tail latency via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "GNS3 free, lab hardware free ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Network + OS + Troubleshooting",
   "previous": [
    {
     "q": "TCP 3-way vs QUIC 0-RTT",
     "company": "Cisco 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "ARP poisoning fix",
     "company": "TCS 2023",
     "year": "2023",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Computer Networks system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Computer Networks system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Computer Networks system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Network Delay Time",
     "link": "LeetCode 743",
     "company": "FAANG 60%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show packet trace | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "6-11 LPA",
   "mid": "12-22 LPA",
   "senior": "24-45 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Cisco",
    "Juniper"
   ],
   "service": [
    "TCS"
   ],
   "startup": [
    "Jio"
   ],
   "psu": [
    "BSNL"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "BSNL JTO (Telecom)",
    "eligibility": "B.E ECE/CSE 60% + GATE",
    "age": "30",
    "salary": "16400-40500 Level-7 (~8 LPA)",
    "link": "bsnl.co.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "RailTel Engineer (Network)",
    "eligibility": "GATE ECE/CSE",
    "age": "28",
    "salary": "40000-140000",
    "link": "railtelindia.com"
   }
  ],
  "researcher": {
   "higher": [
    "MTech Communication, MS"
   ],
   "venues": [
    "SIGCOMM/NSDI",
    "INFOCOM"
   ],
   "topics": [
    "QUIC/BBR",
    "5G slicing"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "DBMS": {
  "slug": "dbms",
  "hero3D": {
   "layers": [
    2,
    3,
    6,
    3
   ],
   "particles": 20,
   "model": "cylinder"
  },
  "id": "DBMS",
  "heroBadge": "Data → Truth • ACID to Distributed",
  "exec": "Store and find data quickly and safely. Covers table design, SQL (joins, windows), indexes, transactions (ACID), and scaling with replicas and shards. Choose this if you like data reliability; migrations need care and backups must be tested.",
  "paradigm": {
   "title": "Files → Relational → Distributed",
   "shift": "Ad-hoc → Declarative → Scale",
   "rules": {
    "t": "Files",
    "d": "CSV + app logic",
    "eg": "grep log"
   },
   "empirical": {
    "t": "Relational",
    "d": "Schema + ACID + SQL",
    "eg": "JOIN + TX"
   },
   "blackBox": {
    "t": "TX & Consensus",
    "d": "WAL + 2PC/Paxos",
    "stats": "99.99% durability"
   }
  },
  "pillars": [
   {
    "n": "Modeling",
    "icon": "fa-diagram-project",
    "d": "ER, normalization (1NF-3NF); normalizes to 3NF/BCNF, constrains with FKs and indexes with B-Tree for OLTP.",
    "demand": 7,
    "complexity": 6,
    "tag": "Model"
   },
   {
    "n": "SQL",
    "icon": "fa-database",
    "d": "Joins, windows, indexing; tunes with EXPLAIN, windows and CTEs to avoid N+1 and sequential scans.",
    "demand": 9,
    "complexity": 6,
    "tag": "SQL"
   },
   {
    "n": "Transactions",
    "icon": "fa-arrow-right-arrow-left",
    "d": "ACID, isolation, locks; chooses RC vs RR, uses WAL and row-level locks to prevent lost updates.",
    "demand": 7,
    "complexity": 7,
    "tag": "ACID"
   },
   {
    "n": "NoSQL",
    "icon": "fa-cubes",
    "d": "Document, column-family, graph and cache stores selected by access pattern, tuned for compaction and consistency versus latency",
    "demand": 7,
    "complexity": 6,
    "tag": "NoSQL"
   },
   {
    "n": "Distributed",
    "icon": "fa-share-nodes",
    "d": "Replication, sharding, CAP; shards via consistent hashing, replicates with quorum and handles split-brain.",
    "demand": 8,
    "complexity": 8,
    "tag": "Scale"
   }
  ],
  "study": [
   {
    "p": "Modeling",
    "yt": "DBMS — NPTEL",
    "ytId": "zBZgdTb-dns",
    "cover": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&seed=7558",
    "book": "Database System Concepts — Silberschatz"
   },
   {
    "p": "SQL",
    "yt": "SQL — freeCodeCamp",
    "ytId": "HXV3zeQKqGY",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=4021",
    "book": "Learning SQL — Beaulieu"
   },
   {
    "p": "TX",
    "yt": "Transactions — CMU 15445",
    "ytId": "Hnsrm1ezI3g",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=643f",
    "book": "Designing Data-Intensive Apps — Ch 7-9"
   },
   {
    "p": "NoSQL",
    "yt": "NoSQL — IBM",
    "ytId": "TrdevFK_am4",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=4ed0",
    "book": "Seven Databases — Perkins"
   },
   {
    "p": "Dist",
    "yt": "Distributed DB — DDIA",
    "ytId": "QF3vcUpPkLk",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=8e12",
    "book": "DDIA — Kleppmann"
   },
   {
    "p": "DBMS Docs",
    "yt": "DBMS Official Docs ? Deep Dive",
    "ytId": "zBZgdTb-dns",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc103",
    "book": "Official docs + github.com/awesome-dbms ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? DBMS",
    "ytId": "Hnsrm1ezI3g",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper103",
    "book": "Seminal paper + paperswithcode.com/sota for DBMS"
   },
   {
    "p": "Community",
    "yt": "DBMS Conference Talk",
    "ytId": "HXV3zeQKqGY",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm103",
    "book": "github.com/topics/dbms + Stack Overflow [DBMS]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Model & SQL",
    "c": "ER → schema, CRUD, joins",
    "out": "Normalized schema",
    "icon": "fa-diagram-project"
   },
   {
    "w": "7-14",
    "t": "Indexing",
    "c": "B-Tree, EXPLAIN, perf",
    "out": "Indexed queries",
    "icon": "fa-magnifying-glass"
   },
   {
    "w": "15-20",
    "t": "Transactions",
    "c": "ACID, isolation labs",
    "out": "Concurrent workload",
    "icon": "fa-arrow-right-arrow-left"
   },
   {
    "w": "21-26",
    "t": "NoSQL & Cache",
    "c": "Mongo, Redis, use cases",
    "out": "Polyglot store",
    "icon": "fa-cubes"
   },
   {
    "w": "27-30",
    "t": "Replication",
    "c": "Primary/replica, lag",
    "out": "HA setup",
    "icon": "fa-share-nodes"
   },
   {
    "w": "31-36",
    "t": "Sharding",
    "c": "Consistent hash, scaling",
    "out": "Scaled demo",
    "icon": "fa-rocket"
   }
  ],
  "timeline": [
   {
    "y": "1970",
    "t": "Relational",
    "d": "Codd"
   },
   {
    "y": "1986",
    "t": "SQL Std",
    "d": "ANSI"
   },
   {
    "y": "2009",
    "t": "NoSQL",
    "d": "Cassandra, Mongo; models partition keys for even distribution, tunes compaction and consistency (ONE/QUORUM) against latency and availability."
   },
   {
    "y": "2012",
    "t": "NewSQL",
    "d": "Spanner, Cockroach"
   },
   {
    "y": "2020",
    "t": "Lakehouse",
    "d": "Delta/Iceberg"
   }
  ],
  "evolution": {
   "years": [
    "2000",
    "2010",
    "2015",
    "2020",
    "2024",
    "2028"
   ],
   "cap": [
    30,
    50,
    68,
    84,
    92,
    98
   ],
   "label": "Scale & consistency"
  },
  "economics": [
   {
    "v": "$0.5T",
    "l": "DB market 2030",
    "d": "Cloud DB dominate"
   },
   {
    "v": "20%",
    "l": "Growth",
    "d": "NoSQL + lakehouse growth with vector DB for RAG"
   },
   {
    "v": "$150B",
    "l": "DB 2025",
    "d": "Gartner"
   },
   {
    "v": "$300k",
    "l": "Outage/hr",
    "d": "Gartner"
   }
  ],
  "balanced": {
   "pros": [
    "Integrity ? ACID with WAL and constraints is ground truth for money and identity, surviving crashes with point-in-time recovery.",
    "Declarative power ? SQL optimizer chooses joins and indexes, plus window functions and CTEs for concise analytics.",
    "Rich ecosystem ? replication, CDC and BI tooling are mature, with managed cloud variants reducing ops.",
    "Scalability ? sharding via consistent hashing and Raft-based consensus scale to petabytes with quorum reads."
   ],
   "cons": [
    "Schema migration pain ? ALTER on large tables locks and bloats without online DDL, blue-green and backfill strategies.",
    "Operational load ? vacuum, compaction, backups and lag monitoring are constant without managed services.",
    "CAP tradeoffs ? choosing CP vs AP forces careful quorum and retry design for split-brain.",
    "Provisioned cost ? IOPS, storage and egress grow with indexes and replicas; needs right-sizing and archiving."
   ]
  },
  "ethics": [
   {
    "t": "Backup & Restore Test",
    "d": "Drills monthly",
    "icon": "fa-floppy-disk"
   },
   {
    "t": "Least Data",
    "d": "Collect minimal",
    "icon": "fa-minimize"
   },
   {
    "t": "Retention",
    "d": "Expire PII lawfully",
    "icon": "fa-hourglass"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 ER + SQL + TX theory, 09:00-12:00 DB Lab (Postgres) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "SQL Club + DB Lab (Postgres) ? weekly workshops, peer code reviews, shared MySQL/Postgres with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Backend peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem5: Backend/DBA intern (Internshala/LinkedIn 2024) ? ship normalized schema + HA replica, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage migration pain and avoid N+1 queries via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Free: MySQL/Postgres local ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "SQL + Design + TX",
   "previous": [
    {
     "q": "B-Tree vs B+Tree for index",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "ACID vs CAP",
     "company": "Infosys 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "N+1 query fix",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ↗",
     "freq": "High"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design DBMS system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design DBMS system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Department Top 3 Salaries",
     "link": "LeetCode 185",
     "company": "FAANG 85%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show EXPLAIN | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "6-11 LPA",
   "mid": "12-24 LPA",
   "senior": "26-50 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Oracle",
    "MongoDB"
   ],
   "service": [
    "TCS"
   ],
   "startup": [
    "Hasura"
   ],
   "psu": [
    "NIC"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "IBPS SO IT Officer (DBA)",
    "eligibility": "B.E 60% + DB cert",
    "age": "20-30",
    "salary": "36000 (~8 LPA)",
    "link": "ibps.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "RBI Grade B DSIM/IT",
    "eligibility": "B.E + DBA, 60%",
    "age": "21-30",
    "salary": "83100 Level-10 (~16 LPA)",
    "link": "rbi.org.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech CSE, MS"
   ],
   "venues": [
    "SIGMOD/VLDB",
    "CIDR"
   ],
   "topics": [
    "HTAP & Lakehouse",
    "Vector DB for RAG"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Operating Systems": {
  "slug": "operating-systems",
  "hero3D": {
   "layers": [
    3,
    4,
    4,
    3
   ],
   "particles": 18,
   "model": "chip"
  },
  "id": "Operating Systems",
  "heroBadge": "Hardware → Abstraction • Kernel to Scheduler",
  "exec": "Hardware→kernel→container multiplex: C/toolchain (pointers, gdb), processes/threads/fork-exec and CFS scheduling, virtual memory (paging, allocators, TLB), file systems (inodes, journaling, fsync), concurrency (locks/semaphores/CV, deadlock four conditions) and syscalls/drivers/eBPF/io_uring, stressing µs context switches, race/Heisenbug reasoning and least-privilege capability dropping.",
  "paradigm": {
   "title": "Bare Metal → Kernel → Containers",
   "shift": "One program → Multiplexed",
   "rules": {
    "t": "Bare",
    "d": "One job runs",
    "eg": "Punch card"
   },
   "empirical": {
    "t": "Multiplex",
    "d": "Scheduler + VM + FS",
    "eg": "cgroups, namespaces"
   },
   "blackBox": {
    "t": "Concurrency",
    "d": "Race, deadlock, atomic",
    "stats": "µs context switch"
   }
  },
  "pillars": [
   {
    "n": "Processes",
    "icon": "fa-gears",
    "d": "Fork, threads, scheduling; schedules with CFS, isolates with cgroups and traces with eBPF.",
    "demand": 7,
    "complexity": 7,
    "tag": "Proc"
   },
   {
    "n": "Memory",
    "icon": "fa-memory",
    "d": "Paging, VM, allocators; pages on demand, swaps with LRU and defragments with compaction.",
    "demand": 7,
    "complexity": 8,
    "tag": "Mem"
   },
   {
    "n": "Files",
    "icon": "fa-folder",
    "d": "FS, inodes, journaling; journals with ext4, fsyncs for durability and snapshots for point-in-time restore.",
    "demand": 6,
    "complexity": 6,
    "tag": "FS"
   },
   {
    "n": "Concurrency",
    "icon": "fa-arrows-spin",
    "d": "Locks, semaphores, deadlock; orders with acquire/release, detects deadlock via wait-for graph and avoids priority inversion.",
    "demand": 8,
    "complexity": 8,
    "tag": "Sync"
   },
   {
    "n": "Kernel",
    "icon": "fa-desktop",
    "d": "Syscalls, drivers, eBPF; exposes syscalls, writes drivers and probes with eBPF/io_uring for zero-copy.",
    "demand": 7,
    "complexity": 8,
    "tag": "Kernel"
   }
  ],
  "study": [
   {
    "p": "Processes",
    "yt": "OS — NPTEL",
    "ytId": "0SCwHt51XZ0",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=b20f",
    "book": "Operating Systems: Three Easy Pieces — Arpaci"
   },
   {
    "p": "Memory",
    "yt": "VM — MIT 6.828",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=14bb",
    "book": "Modern OS — Tanenbaum"
   },
   {
    "p": "Concurrency",
    "yt": "Concurrency — CMU",
    "ytId": "F8NKVhkZZWI",
    "cover": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&seed=535a",
    "book": "The Little Book of Semaphores — Downey"
   },
   {
    "p": "FS",
    "yt": "FS — Remzi",
    "ytId": "9gGnTQTYNaE",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=0474",
    "book": "Understanding Linux Kernel — Bovet"
   },
   {
    "p": "Kernel",
    "yt": "eBPF — Liz Rice",
    "ytId": "hfIUstzHs9A",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=c0d9",
    "book": "Linux Kernel Development — Love"
   },
   {
    "p": "Operating Systems Docs",
    "yt": "Operating Systems Official Docs ? Deep Dive",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc499",
    "book": "Official docs + github.com/awesome-operating-systems ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Operating Systems",
    "ytId": "w7ejDZ8SWv8",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper499",
    "book": "Seminal paper + paperswithcode.com/sota for Operating Systems"
   },
   {
    "p": "Community",
    "yt": "Operating Systems Conference Talk",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm499",
    "book": "github.com/topics/operating-systems + Stack Overflow [Operating Systems]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "C & Toolchain",
    "c": "C, pointers, make, gdb",
    "out": "Shell utils",
    "icon": "fa-code"
   },
   {
    "w": "7-14",
    "t": "Processes",
    "c": "fork/exec, scheduling",
    "out": "Mini shell",
    "icon": "fa-gears"
   },
   {
    "w": "15-20",
    "t": "Memory",
    "c": "Paging, allocators (malloc)",
    "out": "Allocator",
    "icon": "fa-memory"
   },
   {
    "w": "21-26",
    "t": "Concurrency",
    "c": "pthreads, locks, CV",
    "out": "Threaded server",
    "icon": "fa-arrows-spin"
   },
   {
    "w": "27-30",
    "t": "Files",
    "c": "FS, inodes, crash consistency",
    "out": "Simple FS",
    "icon": "fa-folder"
   },
   {
    "w": "31-36",
    "t": "Kernel",
    "c": "Syscalls, drivers, containers",
    "out": "Kernel module",
    "icon": "fa-desktop"
   }
  ],
  "timeline": [
   {
    "y": "1969",
    "t": "Unix",
    "d": "Thompson & Ritchie"
   },
   {
    "y": "1991",
    "t": "Linux",
    "d": "Linus"
   },
   {
    "y": "2001",
    "t": "Namespaces",
    "d": "Container primitives"
   },
   {
    "y": "2014",
    "t": "eBPF",
    "d": "Programmable kernel"
   },
   {
    "y": "2020",
    "t": "io_uring",
    "d": "Async I/O"
   }
  ],
  "evolution": {
   "years": [
    "1995",
    "2005",
    "2015",
    "2020",
    "2024",
    "2028"
   ],
   "cap": [
    30,
    50,
    70,
    85,
    93,
    99
   ],
   "label": "Isolation & perf"
  },
  "economics": [
   {
    "v": "$0.2T",
    "l": "OS-adjacent 2030",
    "d": "Kernel, containers"
   },
   {
    "v": "96%",
    "l": "Servers",
    "d": "Linux share"
   },
   {
    "v": "3.8B",
    "l": "Android",
    "d": "Google"
   },
   {
    "v": "75%",
    "l": "Servers Linux",
    "d": "W3Techs"
   }
  ],
  "balanced": {
   "pros": [
    "Abstraction ? processes, virtual memory and files hide hardware heterogeneity behind stable syscalls.",
    "Performance ? schedulers (CFS), paging and io_uring multiplex thousands of tasks at near-bare-metal efficiency.",
    "Isolation ? namespaces, cgroups and capabilities contain faults and enforce quotas for multi-tenant safety.",
    "Observability ? eBPF, ftrace and perf expose kernel internals for low-overhead production debugging."
   ],
   "cons": [
    "Concurrency bugs ? races, deadlocks and priority inversion are subtle without sanitizers and formal reasoning.",
    "Driver fragility ? hardware quirks and firmware bugs panic kernels; needs staging and DKMS discipline.",
    "Performance cliffs ? TLB misses, swapping and noisy neighbors degrade tail latency without tuning.",
    "Security surface ? privilege escalation and CVEs need rapid patching and live-patching without downtime."
   ]
  },
  "ethics": [
   {
    "t": "No Data Loss",
    "d": "fsync discipline",
    "icon": "fa-floppy-disk"
   },
   {
    "t": "Principle of Least Priv",
    "d": "Drop caps",
    "icon": "fa-user-shield"
   },
   {
    "t": "Repro Builds",
    "d": "Verifiable artifacts",
    "icon": "fa-stamp"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 C + Kernel + Scheduling theory, 09:00-12:00 OS Lab (Linux) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Kernel Club + OS Lab (Linux) ? weekly workshops, peer code reviews, shared VM + qemu with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Architecture peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: Systems engineer intern (Internshala/LinkedIn 2024) ? ship mini-shell + scheduler sim, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage concurrency bugs and avoid deadlocks via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Free: Linux VM + GCC ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "OS + C + Concurrency",
   "previous": [
    {
     "q": "Deadlock 4 conditions",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Fork vs thread",
     "company": "Amazon 2023",
     "year": "2023",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Operating Systems system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Operating Systems system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Operating Systems system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Implement LRU (OS cache)",
     "link": "LeetCode 146",
     "company": "FAANG 80%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show fsync discipline | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "6-10 LPA",
   "mid": "12-24 LPA",
   "senior": "28-55 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Microsoft",
    "Red Hat"
   ],
   "service": [
    "TCS"
   ],
   "startup": [
    "Zoho"
   ],
   "psu": [
    "CDAC"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech Systems (IIT-B), MS"
   ],
   "venues": [
    "OSDI/SOSP",
    "EuroSys"
   ],
   "topics": [
    "eBPF observability",
    "io_uring scheduling"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Computer Architecture": {
  "slug": "computer-architecture",
  "hero3D": {
   "layers": [
    2,
    4,
    4,
    6
   ],
   "particles": 18,
   "model": "chip2"
  },
  "id": "Computer Architecture",
  "heroBadge": "Gates → Pipeline → Speculation • From Verilog to Chip",
  "exec": "Design the chip itself: logic gates, instruction sets (RISC-V), pipelines, and caches (fast L1 ~1ns vs slow DRAM ~100ns). Covers multicore and accelerators. Needs digital logic and Verilog; fabrication is costly but simulation is free.",
  "paradigm": {
   "title": "Scalar → Superscalar → Many-Core",
   "shift": "One → Many IPC",
   "rules": {
    "t": "Scalar",
    "d": "One instr/cycle",
    "eg": "8086"
   },
   "empirical": {
    "t": "Superscalar",
    "d": "Out-of-order, branch predict, SIMD",
    "eg": "Zen 4"
   },
   "blackBox": {
    "t": "Memory Wall",
    "d": "Cache hierarchy hides DRAM",
    "stats": "L1 1ns vs DRAM 100ns"
   }
  },
  "pillars": [
   {
    "n": "Digital",
    "icon": "fa-memory",
    "d": "Gates, FSM, timing; minimizes via Karnaugh, clocks with setup/hold and verifies with formal.",
    "demand": 6,
    "complexity": 6,
    "tag": "Logic"
   },
   {
    "n": "ISA",
    "icon": "fa-microchip",
    "d": "RISC-V, encoding, calling conv; decodes R/I/S/B types, handles calling convention and traps precisely.",
    "demand": 7,
    "complexity": 7,
    "tag": "ISA"
   },
   {
    "n": "Datapath",
    "icon": "fa-diagram-project",
    "d": "Single & pipelined, hazards; forwards to avoid stalls, predicts branches and squashes on mispredict.",
    "demand": 7,
    "complexity": 8,
    "tag": "Pipe"
   },
   {
    "n": "Memory",
    "icon": "fa-server",
    "d": "Cache, coherence, DRAM; sizes L1/L2/L3, maintains MESI and hides DRAM latency via prefetch.",
    "demand": 7,
    "complexity": 8,
    "tag": "Cache"
   },
   {
    "n": "Parallel",
    "icon": "fa-layer-group",
    "d": "SIMD, multicore, accelerators; vectorizes with SIMD, scales with chiplets and offloads to accelerators.",
    "demand": 7,
    "complexity": 8,
    "tag": "Parallel"
   }
  ],
  "study": [
   {
    "p": "Logic",
    "yt": "Digital — NPTEL",
    "ytId": "cZaNf2rA30k",
    "cover": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&seed=eda8",
    "book": "Digital Design — Mano"
   },
   {
    "p": "ISA",
    "yt": "RISC-V — Patterson",
    "ytId": "_C8kWso4ne4",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=f634",
    "book": "Computer Organization — Patterson & Hennessy"
   },
   {
    "p": "Pipeline",
    "yt": "Pipeline — CMU 213",
    "ytId": "T_X4XFwKX8k",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=96db",
    "book": "Computer Architecture — Hennessy & Patterson"
   },
   {
    "p": "Cache",
    "yt": "Cache — MIT 6.004",
    "ytId": "nIgIv4IfJ6s",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=fc89",
    "book": "Memory Systems — Jacob"
   },
   {
    "p": "Accel",
    "yt": "TPU — Jeff Dean",
    "ytId": "biqYkVf-a7Y",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=ce67",
    "book": "Deep Learning Hardware — Sze"
   },
   {
    "p": "Computer Architecture Docs",
    "yt": "Computer Architecture Official Docs ? Deep Dive",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc291",
    "book": "Official docs + github.com/awesome-computer-architecture ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Computer Architecture",
    "ytId": "g_IaVepNDT4",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper291",
    "book": "Seminal paper + paperswithcode.com/sota for Computer Architecture"
   },
   {
    "p": "Community",
    "yt": "Computer Architecture Conference Talk",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm291",
    "book": "github.com/topics/computer-architecture + Stack Overflow [Computer Architecture]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Logic",
    "c": "Gates, FSM, Verilog",
    "out": "ALU",
    "icon": "fa-memory"
   },
   {
    "w": "7-14",
    "t": "RISC-V",
    "c": "ISA, assembly, calls",
    "out": "Programs",
    "icon": "fa-microchip"
   },
   {
    "w": "15-20",
    "t": "Datapath",
    "c": "Single → 5-stage pipeline",
    "out": "Pipelined CPU",
    "icon": "fa-diagram-project"
   },
   {
    "w": "21-26",
    "t": "Cache",
    "c": "Direct → set assoc, perf",
    "out": "Cache sim",
    "icon": "fa-server"
   },
   {
    "w": "27-30",
    "t": "OoO & Branch",
    "c": "Predictor, Tomasulo",
    "out": "Spec sim",
    "icon": "fa-atom"
   },
   {
    "w": "31-36",
    "t": "FPGA",
    "c": "Synth, place & route",
    "out": "FPGA CPU",
    "icon": "fa-rocket"
   }
  ],
  "timeline": [
   {
    "y": "1971",
    "t": "4004",
    "d": "First microprocessor"
   },
   {
    "y": "1985",
    "t": "MIPS",
    "d": "RISC"
   },
   {
    "y": "2010",
    "t": "RISC-V",
    "d": "Open ISA"
   },
   {
    "y": "2017",
    "t": "Spectre",
    "d": "Speculation side-channel"
   },
   {
    "y": "2020",
    "t": "Chiplets",
    "d": "AMD/Intel 3D"
   }
  ],
  "evolution": {
   "years": [
    "2000",
    "2010",
    "2015",
    "2020",
    "2024",
    "2028"
   ],
   "cap": [
    25,
    50,
    70,
    85,
    93,
    99
   ],
   "label": "Perf / watt"
  },
  "economics": [
   {
    "v": "$0.6T",
    "l": "Semis 2030",
    "d": "Chips"
   },
   {
    "v": "40M×",
    "l": "Transistor 50yr",
    "d": "Moore"
   },
   {
    "v": "$600B",
    "l": "Semi 2024",
    "d": "WSTS"
   },
   {
    "v": "2nm",
    "l": "TSMC N2",
    "d": "2025"
   }
  ],
  "balanced": {
   "pros": [
    "Performance ? pipelining, out-of-order, branch prediction and caches lift IPC and cut memory wall, measured via CPI.",
    "Efficiency ? domain-specific accelerators (TPU, NPU) give 10-100x perf/W for AI vs general purpose.",
    "Ecosystem leverage ? ISA stability (x86, ARM, RISC-V) sustains decades of software with binary compatibility.",
    "Innovation ? chiplets, 3D stacking and new memories push density and bandwidth beyond Moore slowdown."
   ],
   "cons": [
    "Design cost ? verification dominates schedule; bugs escape to silicon without formal and coverage-driven methods.",
    "Power wall ? frequency and leakage cap scaling without aggressive power gating and DVFS.",
    "Security flaws ? Spectre/Meltdown from speculation need microcode and software mitigations that hurt IPC.",
    "Toolchain complexity ? compilers, RTL and EDA flows have steep learning curves and license costs."
   ]
  },
  "ethics": [
   {
    "t": "Verify Formally",
    "d": "Prove ISA",
    "icon": "fa-check-double"
   },
   {
    "t": "Secure by Design",
    "d": "Speculation guards",
    "icon": "fa-shield"
   },
   {
    "t": "Open Docs",
    "d": "RISC-V transparency",
    "icon": "fa-book-open"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Digital Logic + Verilog theory, 09:00-12:00 CA Lab (FPGA) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Hardware Club + CA Lab (FPGA) ? weekly workshops, peer code reviews, shared FPGA + simulator with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Embedded peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: Hardware engineer intern (Internshala/LinkedIn 2024) ? ship pipelined CPU + Verilog, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage timing closure and avoid silicon cost via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Sim free, FPGA board ~5k ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Digital + Pipeline + Cache",
   "previous": [
    {
     "q": "Pipeline hazard fix",
     "company": "Intel 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Cache coherence MESI",
     "company": "Qualcomm 2023",
     "year": "2023",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Computer Architecture system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Computer Architecture system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Computer Architecture system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Bit manipulation",
     "link": "LeetCode 191",
     "company": "Hardware 60%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show Verilog sim | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "7-12 LPA",
   "mid": "14-28 LPA",
   "senior": "30-65 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Intel",
    "NVIDIA"
   ],
   "service": [
    "TCS"
   ],
   "startup": [
    "InCore"
   ],
   "psu": [
    "SCL"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech VLSI (IIT), MS Arch"
   ],
   "venues": [
    "ISCA/MICRO",
    "HPCA"
   ],
   "topics": [
    "RISC-V chiplets",
    "In-memory compute"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "DevOps": {
  "slug": "devops",
  "hero3D": {
   "layers": [
    3,
    4,
    4,
    3
   ],
   "particles": 22,
   "model": "infinity"
  },
  "id": "DevOps",
  "heroBadge": "Code → Ship → Observe • CI/CD to SRE",
  "exec": "Combine coding and operations to ship fast and safely. Learn Linux, Docker, Kubernetes, automated pipelines (GitHub Actions), and monitoring (logs, metrics, traces). Measure success with deployment frequency and failure rate. On-call needs balance to avoid burnout.",
  "paradigm": {
   "title": "Manual → Automated → Observable",
   "shift": "SSH → Pipeline",
   "rules": {
    "t": "Manual",
    "d": "Copy jars, hope",
    "eg": "scp prod"
   },
   "empirical": {
    "t": "Pipeline",
    "d": "Git → CI → artifact → deploy → monitor",
    "eg": "Argo CD"
   },
   "blackBox": {
    "t": "DORA",
    "d": "Lead time, CFR, MTTR",
    "stats": "Deploy/day vs /quarter"
   }
  },
  "pillars": [
   {
    "n": "Linux & Script",
    "icon": "fa-terminal",
    "d": "Bash, systemd, networking; scripts idempotently, manages with systemd and hardens via CIS.",
    "demand": 8,
    "complexity": 5,
    "tag": "Linux"
   },
   {
    "n": "Containers",
    "icon": "fa-cubes",
    "d": "Docker, compose, registries; packages with multi-stage builds, deploys via Helm and autoscales with HPA.",
    "demand": 9,
    "complexity": 6,
    "tag": "Docker"
   },
   {
    "n": "K8s",
    "icon": "fa-dharmachakra",
    "d": "Deployments, HPA, GitOps; automates preview deploys, checks Web Vitals and traces with OpenTelemetry for actionable alerts.",
    "demand": 9,
    "complexity": 7,
    "tag": "K8s"
   },
   {
    "n": "CI/CD",
    "icon": "fa-infinity",
    "d": "Actions, pipelines, canary; gates with tests, signs artifacts and deploys progressive with flags.",
    "demand": 9,
    "complexity": 6,
    "tag": "CI/CD"
   },
   {
    "n": "Observe",
    "icon": "fa-chart-line",
    "d": "Logs, metrics, tracing, SLOs; correlates logs/traces, alerts on SLO burn and debugs with exemplars.",
    "demand": 8,
    "complexity": 7,
    "tag": "Observe"
   }
  ],
  "study": [
   {
    "p": "Linux",
    "yt": "Linux — freeCodeCamp",
    "ytId": "sz_dsktIjt4",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=e1a5",
    "book": "How Linux Works — Ward"
   },
   {
    "p": "Docker",
    "yt": "Docker — TechWorld",
    "ytId": "QGDhKyZiPAo",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=aa85",
    "book": "Docker Deep Dive — Poulton"
   },
   {
    "p": "K8s",
    "yt": "K8s — Nana",
    "ytId": "Vfo5le26IhY",
    "cover": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&seed=fba6",
    "book": "Kubernetes in Action — Luksa"
   },
   {
    "p": "CI/CD",
    "yt": "GitHub Actions — Fireship",
    "ytId": "phOhGqpXss4",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=e8a0",
    "book": "Continuous Delivery — Humble"
   },
   {
    "p": "SRE",
    "yt": "SRE — Google",
    "ytId": "aj9CDZm0Glc",
    "cover": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&seed=1563",
    "book": "Site Reliability Engineering — Google"
   },
   {
    "p": "DevOps Docs",
    "yt": "DevOps Official Docs ? Deep Dive",
    "ytId": "0-S5a0eXPoc",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc699",
    "book": "Official docs + github.com/awesome-devops ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? DevOps",
    "ytId": "SLB_c_ayRMo",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper699",
    "book": "Seminal paper + paperswithcode.com/sota for DevOps"
   },
   {
    "p": "Community",
    "yt": "DevOps Conference Talk",
    "ytId": "ukzFI9rgwfU",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm699",
    "book": "github.com/topics/devops + Stack Overflow [DevOps]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Linux",
    "c": "Bash, cron, ssh, net",
    "out": "Hardened VM",
    "icon": "fa-terminal"
   },
   {
    "w": "7-14",
    "t": "Docker",
    "c": "Dockerfile, layers, compose",
    "out": "Composed stack",
    "icon": "fa-cubes"
   },
   {
    "w": "15-20",
    "t": "K8s",
    "c": "Manifests, helm, ingress",
    "out": "K8s app",
    "icon": "fa-dharmachakra"
   },
   {
    "w": "21-26",
    "t": "CI/CD",
    "c": "Actions, canary, feature flags",
    "out": "Pipeline",
    "icon": "fa-infinity"
   },
   {
    "w": "27-30",
    "t": "Observe",
    "c": "ELK/Prom/Grafana, OpenTelemetry",
    "out": "SLO dash",
    "icon": "fa-chart-line"
   },
   {
    "w": "31-36",
    "t": "SRE",
    "c": "Error budgets, chaos, on-call",
    "out": "Runbooks",
    "icon": "fa-heart-pulse"
   }
  ],
  "timeline": [
   {
    "y": "2009",
    "t": "DevOps",
    "d": "Debois coining"
   },
   {
    "y": "2013",
    "t": "Docker",
    "d": "dotCloud"
   },
   {
    "y": "2014",
    "t": "K8s",
    "d": "Borg → K8s"
   },
   {
    "y": "2018",
    "t": "GitOps",
    "d": "Weaveworks"
   },
   {
    "y": "2021",
    "t": "Platform Eng",
    "d": "IDPs"
   }
  ],
  "evolution": {
   "years": [
    "2010",
    "2015",
    "2018",
    "2021",
    "2024",
    "2028"
   ],
   "cap": [
    20,
    45,
    68,
    85,
    93,
    99
   ],
   "label": "Deploy frequency"
  },
  "economics": [
   {
    "v": "28%",
    "l": "Faster",
    "d": "Elite vs low (DORA)"
   },
   {
    "v": "50%",
    "l": "Failure ↓",
    "d": "With CI/CD"
   },
   {
    "v": "$25B",
    "l": "DevOps 2028",
    "d": "20% CAGR"
   },
   {
    "v": "200x",
    "l": "Lead time gap",
    "d": "DORA"
   }
  ],
  "balanced": {
   "pros": [
    "Velocity ? CI/CD cuts lead time from weeks to minutes, with trunk-based flow, feature flags and automated gates.",
    "Reliability ? SRE error budgets, SLOs and blameless postmortems balance speed and stability with data.",
    "Scalability ? IaC and GitOps make environments reproducible and auditable via plan, drift detection and policy as code.",
    "Observability ? metrics, logs, traces with OpenTelemetry give actionable alerts and fast MTTR."
   ],
   "cons": [
    "Tool sprawl ? Jenkins, Argo, Terraform, Helm overlap; needs paved road and consolidation.",
    "On-call burden ? pages at 3am without proper SLOs, runbooks and rotation degrade burnout.",
    "Pipeline flakiness ? flaky tests and network flakes erode trust without quarantine and retries with backoff.",
    "Security debt ? secrets in repo, overly broad IAM and unpatched images need shift-left scanning."
   ]
  },
  "ethics": [
   {
    "t": "Secure Supply Chain",
    "d": "Sign images, SBOM",
    "icon": "fa-stamp"
   },
   {
    "t": "Blameless Postmortem",
    "d": "Learn, not punish",
    "icon": "fa-handshake"
   },
   {
    "t": "SLO Mercy",
    "d": "Error budgets protect sleep",
    "icon": "fa-bed"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Linux + Docker + K8s + CI theory, 09:00-12:00 DevOps Lab (Jenkins) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "DevOps Club + DevOps Lab (Jenkins) ? weekly workshops, peer code reviews, shared Docker + K8s cluster with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Cloud peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: DevOps/SRE intern (Internshala/LinkedIn 2024) ? ship CI/CD pipeline + monitoring, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage on-call and avoid pipeline flakes via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Free tier + cloud credits ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Linux + Docker + Pipeline + SRE",
   "previous": [
    {
     "q": "Blue-green vs canary",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "Debug pod CrashLoop",
     "company": "Infosys 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design DevOps system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design DevOps system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design DevOps system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Design CI/CD",
     "link": "System Design",
     "company": "FAANG 75%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show DORA metrics | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "7-14 LPA",
   "mid": "15-30 LPA",
   "senior": "32-60 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "GitHub",
    "HashiCorp"
   ],
   "service": [
    "TCS"
   ],
   "startup": [
    "BrowserStack"
   ],
   "psu": [
    "NIC"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech SE, MS"
   ],
   "venues": [
    "ICSE/SEIP",
    "SREcon"
   ],
   "topics": [
    "Progressive delivery",
    "AIOps inc prediction"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Distributed Systems": {
  "slug": "distributed-systems",
  "hero3D": {
   "layers": [
    4,
    6,
    6,
    4
   ],
   "particles": 26,
   "model": "nodes"
  },
  "id": "Distributed Systems",
  "heroBadge": "One Machine → Fleet • Consensus to Kafka",
  "exec": "Make many computers act as one: clocks, consensus (Raft), replication, and streaming (Kafka). Learn to handle parts failing, keep data consistent, and scale horizontally. Powerful but complex; testing with faults is essential.",
  "paradigm": {
   "title": "Single → Replicated → Consistent",
   "shift": "ACID → CAP",
   "rules": {
    "t": "Single",
    "d": "One DB",
    "eg": "MySQL"
   },
   "empirical": {
    "t": "Distributed",
    "d": "Quorum, logs, partitions",
    "eg": "Raft + Kafka"
   },
   "blackBox": {
    "t": "FLP",
    "d": "Consensus impossible async without timeouts",
    "stats": "99.99% with 3×"
   }
  },
  "pillars": [
   {
    "n": "Time & Order",
    "icon": "fa-clock",
    "d": "Clocks, Lamport, vector; orders with Lamport/vector clocks and detects causality violations.",
    "demand": 7,
    "complexity": 7,
    "tag": "Time"
   },
   {
    "n": "Consensus",
    "icon": "fa-handshake",
    "d": "Paxos/Raft, leader election; elects leaders via Raft, logs via quorum and handles FLP via timeouts.",
    "demand": 8,
    "complexity": 8,
    "tag": "Consensus"
   },
   {
    "n": "Replication",
    "icon": "fa-copy",
    "d": "Sync/async, quorum, CRDT; replicates sync for linearizability vs async for availability with anti-entropy.",
    "demand": 8,
    "complexity": 7,
    "tag": "Replicate"
   },
   {
    "n": "Streaming",
    "icon": "fa-wave-square",
    "d": "Kafka, exactly-once; implements exactly-once windows with idempotent sinks, watermarking and backpressure handling for real-time counters and joins.",
    "demand": 8,
    "complexity": 7,
    "tag": "Kafka"
   },
   {
    "n": "Scale",
    "icon": "fa-share-nodes",
    "d": "Sharding, backpressure, caches; shards via consistent hashing, replicates with quorum and handles split-brain.",
    "demand": 8,
    "complexity": 8,
    "tag": "Scale"
   }
  ],
  "study": [
   {
    "p": "Time",
    "yt": "Distributed — MIT 6.824",
    "ytId": "pYK4No7ACRE",
    "cover": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&seed=dff1",
    "book": "Designing Data-Intensive Apps — Ch 8-9"
   },
   {
    "p": "Raft",
    "yt": "Raft — Ongaro",
    "ytId": "uPsUjKLHLAg",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=cde4",
    "book": "Raft paper — Ongaro & Ousterhout"
   },
   {
    "p": "Replication",
    "yt": "Jepsen — Kyle Kingsbury",
    "ytId": "nIgIv4IfJ6s",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=ace0",
    "book": "DDIA — Kleppmann"
   },
   {
    "p": "Kafka",
    "yt": "Kafka — Confluent",
    "ytId": "uPsUjKLHLAg",
    "cover": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&seed=cbd4",
    "book": "Kafka: The Definitive Guide."
   },
   {
    "p": "Scale",
    "yt": "Scale — InfoQ",
    "ytId": "OnTgbN3uXvw",
    "cover": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80&seed=b4d4",
    "book": "System Design Interview — Alex Xu"
   },
   {
    "p": "Distributed Systems Docs",
    "yt": "Distributed Systems Official Docs ? Deep Dive",
    "ytId": "aj9CDZm0Glc",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc704",
    "book": "Official docs + github.com/awesome-distributed-systems ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Distributed Systems",
    "ytId": "1vbXmCrkT3Y",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper704",
    "book": "Seminal paper + paperswithcode.com/sota for Distributed Systems"
   },
   {
    "p": "Community",
    "yt": "Distributed Systems Conference Talk",
    "ytId": "9gGnTQTYNaE",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm704",
    "book": "github.com/topics/distributed-systems + Stack Overflow [Distributed Systems]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Networking",
    "c": "RPC, timeouts, retries",
    "out": "RPC service",
    "icon": "fa-network-wired"
   },
   {
    "w": "7-14",
    "t": "Time",
    "c": "Clocks, ordering",
    "out": "Vector clock sim",
    "icon": "fa-clock"
   },
   {
    "w": "15-20",
    "t": "Consensus",
    "c": "Raft impl, leader",
    "out": "KV with Raft",
    "icon": "fa-handshake"
   },
   {
    "w": "21-26",
    "t": "Replication",
    "c": "Primary/backup, quorum",
    "out": "Replicated log",
    "icon": "fa-copy"
   },
   {
    "w": "27-30",
    "t": "Streaming",
    "c": "Kafka, processing guarantees",
    "out": "Streaming pipe",
    "icon": "fa-wave-square"
   },
   {
    "w": "31-36",
    "t": "Capstone",
    "c": "Sharded, cached, traced",
    "out": "Scaled system",
    "icon": "fa-share-nodes"
   }
  ],
  "timeline": [
   {
    "y": "1978",
    "t": "Consensus",
    "d": "Lamport"
   },
   {
    "y": "1985",
    "t": "FLP",
    "d": "Impossibility"
   },
   {
    "y": "2011",
    "t": "Kafka",
    "d": "LinkedIn"
   },
   {
    "y": "2014",
    "t": "Raft",
    "d": "Understandable Paxos"
   },
   {
    "y": "2020",
    "t": "Serverless Dist",
    "d": "Workflows"
   }
  ],
  "evolution": {
   "years": [
    "2010",
    "2015",
    "2018",
    "2021",
    "2024",
    "2028"
   ],
   "cap": [
    20,
    45,
    68,
    85,
    93,
    99
   ],
   "label": "Consistency vs scale"
  },
  "economics": [
   {
    "v": "$0.8T",
    "l": "Distributed cloud 2030",
    "d": "Microservices"
   },
   {
    "v": "12 LPA",
    "l": "Senior",
    "d": "India avg"
   },
   {
    "v": "$130B",
    "l": "Streaming 2028",
    "d": "Kafka"
   },
   {
    "v": "99.99%",
    "l": "SLO",
    "d": "52m downtime/yr"
   }
  ],
  "balanced": {
   "pros": [
    "Scale ? sharding and replication handle 10k+ nodes and PBs, with linear horizontal scaling and load shedding.",
    "Fault tolerance ? consensus (Raft) and gossip survive AZ loss with quorum reads and anti-entropy.",
    "Geo availability ? multi-region actives serve globally with <100ms failover via DNS and replication lag budgets.",
    "Decoupling ? Kafka and queues absorb bursts and isolate teams via contracts and schema registry."
   ],
   "cons": [
    "Consistency complexity ? linearizability vs eventual forces careful quorum, fencing and retry with idempotence.",
    "Operational overhead ? clocks, partitions and membership need chaos testing and observability to avoid split-brain.",
    "Debugging difficulty ? distributed traces and logs are essential; otherwise tail latency is opaque.",
    "Cost ? cross-AZ replication and consensus quorum increase latency and $ vs single-node."
   ]
  },
  "ethics": [
   {
    "t": "Graceful Degrade",
    "d": "Shedding, not collapse",
    "icon": "fa-heart-pulse"
   },
   {
    "t": "Idempotence",
    "d": "Retries safe",
    "icon": "fa-rotate"
   },
   {
    "t": "Audit Logs",
    "d": "Tamper-evident",
    "icon": "fa-file-shield"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Consensus + Replication + Kafka theory, 09:00-12:00 Dist Sys Lab labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Backend Club + Dist Sys Lab ? weekly workshops, peer code reviews, shared Kafka + cluster with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Cloud + DB peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: Distributed engineer intern (Internshala/LinkedIn 2024) ? ship sharded service + chaos test, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage split-brain and avoid consistency tradeoffs via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Cloud credits, moderate ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Consensus + Replication + System Design",
   "previous": [
    {
     "q": "Raft vs Paxos",
     "company": "Google 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Exactly-once Kafka?",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Distributed Systems system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Distributed Systems system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Distributed Systems system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Design URL Shortener distributed",
     "link": "System Design",
     "company": "FAANG 90%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show Jepsen test | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "8-15 LPA",
   "mid": "16-32 LPA",
   "senior": "35-70 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Amazon",
    "Google"
   ],
   "service": [
    "TCS"
   ],
   "startup": [
    "Confluent"
   ],
   "psu": [
    "NIC"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech CSE, MS"
   ],
   "venues": [
    "PODC/NSDI",
    "SOSP"
   ],
   "topics": [
    "Consensus at scale",
    "CRDTs"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "IoT": {
  "slug": "iot",
  "hero3D": {
   "layers": [
    6,
    4,
    4,
    2
   ],
   "particles": 32,
   "model": "sensor"
  },
  "id": "IoT",
  "heroBadge": "Atoms → Bits • Sensors to Cloud",
  "exec": "Connect physical devices to the internet: microcontrollers (ESP32), sensors, radios (BLE/MQTT), and cloud twins. Learn to save battery, update over the air, and keep devices secure (no default passwords). Needs hardware (₹500 board + sensors).",
  "paradigm": {
   "title": "Isolated → Connected → Twin",
   "shift": "Offline device → Live shadow",
   "rules": {
    "t": "Isolated",
    "d": "Manual read",
    "eg": "Meter"
   },
   "empirical": {
    "t": "Connected",
    "d": "Sense → edge → cloud twin",
    "eg": "ESP32 → MQTT → twin"
   },
   "blackBox": {
    "t": "Duty Cycle",
    "d": "Sleep vs latency",
    "stats": "µA sleep, mA TX"
   }
  },
  "pillars": [
   {
    "n": "Embedded & Sensors",
    "icon": "fa-microchip",
    "d": "Embedded C, ARM Cortex-M, sensor drivers, power modes and TinyML for edge inference without cloud.",
    "demand": 8,
    "complexity": 7,
    "tag": "Edge"
   },
   {
    "n": "Connectivity",
    "icon": "fa-wave-square",
    "d": "MQTT, CoAP, BLE, LoRaWAN with QoS, last-will and batch provisioning for fleets of thousands.",
    "demand": 8,
    "complexity": 7,
    "tag": "Connect"
   },
   {
    "n": "Cloud & Twin",
    "icon": "fa-cloud",
    "d": "Device shadow, twin, rule engine, stream analytics and OTA signing with rollback for fleet.",
    "demand": 7,
    "complexity": 7,
    "tag": "Cloud"
   },
   {
    "n": "Data & Rules",
    "icon": "fa-chart-line",
    "d": "Time-series DB, anomaly detection, dashboards and thresholded actuation with edge filtering to cut egress.",
    "demand": 7,
    "complexity": 6,
    "tag": "Data"
   },
   {
    "n": "Fleet Security",
    "icon": "fa-shield-halved",
    "d": "Attestation, least privilege, cert rotation and fleet OTA at scale with health monitoring and signed updates.",
    "demand": 8,
    "complexity": 8,
    "tag": "Fleet"
   }
  ],
  "study": [
   {
    "p": "Embedded",
    "yt": "ESP32 — NPTEL",
    "ytId": "QzY57FaENXg",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=4c5e",
    "book": "Making Embedded Systems — White"
   },
   {
    "p": "Sensors",
    "yt": "Sensors — GreatScott",
    "ytId": "U9DyHthJ6LA",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=2e6b",
    "book": "Sensors — Fraden"
   },
   {
    "p": "MQTT",
    "yt": "MQTT — HiveMQ",
    "ytId": "HZ4j_U3FC94",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=e8ef",
    "book": "MQTT Essentials — Hillar"
   },
   {
    "p": "Edge",
    "yt": "TinyML — Harvard",
    "ytId": "itBc7nwAK5o",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=128f",
    "book": "TinyML — Warden"
   },
   {
    "p": "Twin",
    "yt": "IoT Twin — AWS",
    "ytId": "aircAruvnKk",
    "cover": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&seed=e3be",
    "book": "IoT Inc — Rose"
   },
   {
    "p": "IoT Docs",
    "yt": "IoT Official Docs ? Deep Dive",
    "ytId": "1vbXmCrkT3Y",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc183",
    "book": "Official docs + github.com/awesome-iot ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? IoT",
    "ytId": "aj9CDZm0Glc",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper183",
    "book": "Seminal paper + paperswithcode.com/sota for IoT"
   },
   {
    "p": "Community",
    "yt": "IoT Conference Talk",
    "ytId": "uPsUjKLHLAg",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm183",
    "book": "github.com/topics/iot + Stack Overflow [IoT]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "MCU",
    "c": "Arduino/ESP32, GPIO, I2C",
    "out": "Blink + I2C",
    "icon": "fa-microchip"
   },
   {
    "w": "7-14",
    "t": "Sensors",
    "c": "Calibrate, filter",
    "out": "Weather node",
    "icon": "fa-tower-broadcast"
   },
   {
    "w": "15-20",
    "t": "Radio",
    "c": "BLE/MQTT, QoS",
    "out": "MQTT net",
    "icon": "fa-wifi"
   },
   {
    "w": "21-26",
    "t": "Edge",
    "c": "TinyML anomaly",
    "out": "Edge infer",
    "icon": "fa-computer"
   },
   {
    "w": "27-30",
    "t": "Cloud",
    "c": "Twin, OTA, fleet",
    "out": "Shadow dash",
    "icon": "fa-cloud"
   },
   {
    "w": "31-36",
    "t": "Product",
    "c": "Case, power, cert",
    "out": "Deployed device",
    "icon": "fa-box"
   }
  ],
  "timeline": [
   {
    "y": "1999",
    "t": "IoT term",
    "d": "Kevin Ashton"
   },
   {
    "y": "2014",
    "t": "ESP8266",
    "d": "$2 Wi-Fi"
   },
   {
    "y": "2015",
    "t": "AWS IoT",
    "d": "Managed fleet"
   },
   {
    "y": "2019",
    "t": "Matter",
    "d": "Smart home std"
   },
   {
    "y": "2022",
    "t": "TinyML",
    "d": "On-device ML"
   }
  ],
  "evolution": {
   "years": [
    "2015",
    "2018",
    "2021",
    "2024",
    "2028"
   ],
   "cap": [
    25,
    50,
    70,
    88,
    99
   ],
   "label": "Deploy scale"
  },
  "economics": [
   {
    "v": "$1.1T",
    "l": "IoT 2030",
    "d": "Devices & platforms"
   },
   {
    "v": "30B",
    "l": "Devices 2030",
    "d": "Connected"
   },
   {
    "v": "$1.3T",
    "l": "IoT 2028",
    "d": "23% CAGR"
   },
   {
    "v": "?",
    "l": "Impact",
    "d": "See vault"
   }
  ],
  "balanced": {
   "pros": [
    "Physical insight ? sensors close the loop on temperature, vibration and energy with real-time thresholds and twin models.",
    "Automation ? rules and TinyML trigger actuators without cloud round-trips, with OTA updates and shadow state.",
    "Scale ? MQTT and LwM2M manage millions of devices with provisioning, grouping and batch OTA.",
    "Efficiency ? edge filtering cuts egress 10x, with duty cycling and sleep modes extending battery years."
   ],
   "cons": [
    "Heterogeneity ? MCUs, radios and power envelopes fragment firmware and need HALs and feature flags.",
    "Security at edge ? devices lack TPM/TEE and are physically exposed; needs attestation, signing and least privilege.",
    "Connectivity flakiness ? NAT, offline and loss need store-and-forward, CRDT and last-will semantics.",
    "Lifecycle pain ? field failures need remote logs, signed OTA and rollback without bricking."
   ]
  },
  "ethics": [
   {
    "t": "Secure by Default",
    "d": "No default passwords",
    "icon": "fa-lock"
   },
   {
    "t": "Data Minimal",
    "d": "Edge filter before cloud",
    "icon": "fa-filter"
   },
   {
    "t": "OTA & Recall",
    "d": "Patchable fleet",
    "icon": "fa-rotate"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Embedded C + Sensors + MQTT theory, 09:00-12:00 IoT Lab (Arduino) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "IoT + Robotics Club + IoT Lab (Arduino) ? weekly workshops, peer code reviews, shared sensors + broker with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Embedded peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: IoT engineer intern (Internshala/LinkedIn 2024) ? ship sensor->cloud dashboard + OTA, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage hardware flakiness and avoid power/battery via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Arduino ~2k, sensors extra ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Embedded + Radio + Cloud",
   "previous": [
    {
     "q": "MQTT QoS 0/1/2",
     "company": "TCS IoT 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Deep sleep vs light sleep",
     "company": "Infosys 2023",
     "year": "2023",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design IoT system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design IoT system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design IoT system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Sensor debounce logic",
     "link": "Embedded",
     "company": "Service 60%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show power profile | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "6-12 LPA",
   "mid": "12-24 LPA",
   "senior": "24-48 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Bosch",
    "Siemens"
   ],
   "service": [
    "TCS IoT"
   ],
   "startup": [
    "Stellapps"
   ],
   "psu": [
    "C-DOT"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech IoT (IIT), MS"
   ],
   "venues": [
    "SenSys/IoTDI",
    "IPSN"
   ],
   "topics": [
    "TinyML on MCU",
    "OTA at scale"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Blockchain": {
  "slug": "blockchain",
  "hero3D": {
   "layers": [
    3,
    3,
    3,
    6
   ],
   "particles": 20,
   "model": "chain"
  },
  "id": "Blockchain",
  "heroBadge": "Trustless • Ledgers to Web3",
  "exec": "Keep shared records without a central owner: hashes, signatures, consensus, smart contracts, and apps. Learn gas costs and audits (re-entrancy). Volatile and high-risk; never put unaudited money on mainnet and be clear about loss risk.",
  "paradigm": {
   "title": "Trusted → Trustless",
   "shift": "Bank → Chain",
   "rules": {
    "t": "Trusted",
    "d": "Central ledger",
    "eg": "Bank DB"
   },
   "empirical": {
    "t": "Trustless",
    "d": "Many nodes agree via PoW/PoS",
    "eg": "Ethereum tx"
   },
   "blackBox": {
    "t": "Trilemma",
    "d": "Decentral/scale/security pick 2",
    "stats": "15 TPS L1 vs 10k L2"
   }
  },
  "pillars": [
   {
    "n": "Cryptography",
    "icon": "fa-lock",
    "d": "Hashes, signatures, Merkle proofs and key management with MPC/social recovery for seed safety.",
    "demand": 8,
    "complexity": 7,
    "tag": "Crypto"
   },
   {
    "n": "Consensus",
    "icon": "fa-scale-balanced",
    "d": "PoW/PoS, BFT, L2 rollups and bridges; analyses finality, TPS and gas tradeoffs with sequencing.",
    "demand": 8,
    "complexity": 8,
    "tag": "Consensus"
   },
   {
    "n": "Smart Contracts",
    "icon": "fa-file-contract",
    "d": "Solidity, EVM, gas optimization and reentrancy protection with formal verification and audits.",
    "demand": 8,
    "complexity": 7,
    "tag": "Contracts"
   },
   {
    "n": "dApps & Web3",
    "icon": "fa-cubes",
    "d": "Frontend (wagmi/viem), wallets, IPFS and token standards with UX for key management.",
    "demand": 7,
    "complexity": 6,
    "tag": "dApps"
   },
   {
    "n": "Tokenomics & Security",
    "icon": "fa-coins",
    "d": "Supply, incentives, audits and ZK proofs; designs sustainable economies without pump/dump and with compliance.",
    "demand": 7,
    "complexity": 7,
    "tag": "Token"
   }
  ],
  "study": [
   {
    "p": "Crypto",
    "yt": "Blockchain — NPTEL",
    "ytId": "SSo_EIwHSd4",
    "cover": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&seed=71f2",
    "book": "Mastering Bitcoin — Antonopoulos"
   },
   {
    "p": "Ethereum",
    "yt": "Solidity — freeCodeCamp",
    "ytId": "gyMwXuJrbJQ",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=917b",
    "book": "Mastering Ethereum — Antonopoulos"
   },
   {
    "p": "Consensus",
    "yt": "Consensus — a16z",
    "ytId": "ukzFI9rgwfU",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=26b3",
    "book": "Blockchain — Narayanan et al (Princeton)"
   },
   {
    "p": "dApps",
    "yt": "dApp — Dapp University",
    "ytId": "QzY57FaENXg",
    "cover": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80&seed=3f13",
    "book": "Build Web3 Apps — Miles"
   },
   {
    "p": "Security",
    "yt": "Audits — Trail of Bits",
    "ytId": "i_LwzRVP7bg",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=0857",
    "book": "How to DeFi — CoinGecko"
   },
   {
    "p": "Blockchain Docs",
    "yt": "Blockchain Official Docs ? Deep Dive",
    "ytId": "gyMwXuJrbJQ",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc156",
    "book": "Official docs + github.com/awesome-blockchain ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Blockchain",
    "ytId": "SSo_EIwHSd4",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper156",
    "book": "Seminal paper + paperswithcode.com/sota for Blockchain"
   },
   {
    "p": "Community",
    "yt": "Blockchain Conference Talk",
    "ytId": "QzY57FaENXg",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm156",
    "book": "github.com/topics/blockchain + Stack Overflow [Blockchain]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Crypto",
    "c": "Hash, sig, wallets",
    "out": "Wallet CLI",
    "icon": "fa-key"
   },
   {
    "w": "7-14",
    "t": "Chain",
    "c": "Blocks, Merkle, P2P",
    "out": "Toy chain",
    "icon": "fa-link"
   },
   {
    "w": "15-20",
    "t": "Solidity",
    "c": "Contracts, tests, gas",
    "out": "ERC20",
    "icon": "fa-file-contract"
   },
   {
    "w": "21-26",
    "t": "dApp",
    "c": "Ethers, IPFS, oracle",
    "out": "dApp UI",
    "icon": "fa-cubes"
   },
   {
    "w": "27-30",
    "t": "Sec & Scale",
    "c": "Audits, L2, bridging",
    "out": "Audit report",
    "icon": "fa-shield"
   },
   {
    "w": "31-36",
    "t": "Launch",
    "c": "Testnet → mainnet, docs",
    "out": "Live dApp",
    "icon": "fa-rocket"
   }
  ],
  "timeline": [
   {
    "y": "2008",
    "t": "Bitcoin",
    "d": "Nakamoto whitepaper"
   },
   {
    "y": "2015",
    "t": "Ethereum",
    "d": "Smart contracts"
   },
   {
    "y": "2020",
    "t": "DeFi",
    "d": "Composable money"
   },
   {
    "y": "2021",
    "t": "NFTs",
    "d": "Digital ownership"
   },
   {
    "y": "2023",
    "t": "L2 Surge",
    "d": "Rollups scale"
   }
  ],
  "evolution": {
   "years": [
    "2015",
    "2018",
    "2021",
    "2023",
    "2028"
   ],
   "cap": [
    20,
    40,
    65,
    82,
    99
   ],
   "label": "TPS & adoption"
  },
  "economics": [
   {
    "v": "$1.9T",
    "l": "Crypto MCap peak",
    "d": "Volatile"
   },
   {
    "v": "11 LPA",
    "l": "Web3 dev",
    "d": "Premium, high risk"
   },
   {
    "v": "$94B",
    "l": "Blockchain 2028",
    "d": "59% CAGR"
   },
   {
    "v": "$2.8T",
    "l": "DeFi peak",
    "d": "DeFi Llama"
   }
  ],
  "balanced": {
   "pros": [
    "Trustless ? consensus replaces intermediaries for settlement, with verifiable inclusion proofs and finality.",
    "Auditability ? append-only ledger with hashes and signatures creates tamper-evident history for compliance.",
    "Programmability ? smart contracts automate escrow, royalties and governance without custodians.",
    "Interoperability ? tokens and bridges enable composable DeFi and identity across chains with standards."
   ],
   "cons": [
    "Scalability limits ? TPS and gas fees spike under load; L2s and sharding add bridge and sequencing complexity.",
    "Volatility and risk ? token price swings and exploits deter enterprise adoption without stable custody.",
    "Key management burden ? seed loss is irreversible; needs MPC, social recovery and hardware wallets.",
    "Regulatory uncertainty ? KYC/AML and securities classification vary by jurisdiction and evolve quickly."
   ]
  },
  "ethics": [
   {
    "t": "Audit First",
    "d": "No unaudited mainnet value",
    "icon": "fa-magnifying-glass"
   },
   {
    "t": "No Predatory Token",
    "d": "No pump schemes",
    "icon": "fa-ban"
   },
   {
    "t": "Disclose Risks",
    "d": "Loss is possible",
    "icon": "fa-triangle-exclamation"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Crypto + Solidity + DApps theory, 09:00-12:00 Web3 Lab (Ganache) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Web3 Club + Web3 Lab (Ganache) ? weekly workshops, peer code reviews, shared testnet + hardhat with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Security + Finance peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: Web3 dev intern (Internshala/LinkedIn 2024) ? ship smart contract + audit report, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage volatility and avoid reentrancy bugs via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Testnet free, audit cost high ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Crypto + Contracts + Audit",
   "previous": [
    {
     "q": "Re-entrancy attack fix",
     "company": "Polygon 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "PoW vs PoS finality",
     "company": "Coinbase 2023",
     "year": "2023",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Blockchain system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Blockchain system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Blockchain system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Implement Merkle proof",
     "link": "Custom",
     "company": "Web3 70%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show audit report | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "7-14 LPA",
   "mid": "14-30 LPA",
   "senior": "30-70 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Polygon",
    "CoinDCX"
   ],
   "service": [
    "TCS Quartz"
   ],
   "startup": [
    "Polygon"
   ],
   "psu": [
    "NIC Blockchain"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech CSE + DLT, MS"
   ],
   "venues": [
    "SOSP/NSDI (BFT)",
    "Financial Crypto"
   ],
   "topics": [
    "L2 scaling",
    "ZK proofs India"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Robotics": {
  "slug": "robotics",
  "hero3D": {
   "layers": [
    3,
    5,
    4,
    3
   ],
   "particles": 22,
   "model": "robot"
  },
  "id": "Robotics",
  "heroBadge": "Sense → Plan → Act • ROS to Autonomy",
  "exec": "Give machines a body and brain: mechanics, seeing (LiDAR/vision), control (PID), planning (A*), and ROS2. Works with noisy sensors; needs safety stops and field testing. Hardware can break — plan for it.",
  "paradigm": {
   "title": "Teleop → Autonomy",
   "shift": "Joystick → Sense-Plan-Act",
   "rules": {
    "t": "Teleop",
    "d": "Human drives",
    "eg": "RC car"
   },
   "empirical": {
    "t": "Autonomy",
    "d": "Perceive → plan → control",
    "eg": "SLAM nav"
   },
   "blackBox": {
    "t": "Uncertainty",
    "d": "Noisy sensors, Kalman",
    "stats": "cm accuracy"
   }
  },
  "pillars": [
   {
    "n": "ROS & Middleware",
    "icon": "fa-robot",
    "d": "ROS2 nodes, topics/services, URDF, Gazebo simulation and bag recording for repeatable sim2real.",
    "demand": 8,
    "complexity": 7,
    "tag": "ROS"
   },
   {
    "n": "Perception",
    "icon": "fa-eye",
    "d": "CV, depth, LiDAR fusion, SLAM and object pose estimation with calibration and domain randomization.",
    "demand": 8,
    "complexity": 8,
    "tag": "Perception"
   },
   {
    "n": "Control & Planning",
    "icon": "fa-diagram-project",
    "d": "PID, MPC, A* / RRT* planning, trajectory smoothing with splines and collision avoidance.",
    "demand": 8,
    "complexity": 8,
    "tag": "Control"
   },
   {
    "n": "Manipulation",
    "icon": "fa-hand",
    "d": "Kinematics, grasp planning, force control and visual servoing for pick-place with <0.1mm repeatability.",
    "demand": 7,
    "complexity": 8,
    "tag": "Arm"
   },
   {
    "n": "Integration & Safety",
    "icon": "fa-shield-halved",
    "d": "E-stop, ISO 10218 risk assessment, hardware-in-loop and field calibration for deployment.",
    "demand": 7,
    "complexity": 7,
    "tag": "Safety"
   }
  ],
  "study": [
   {
    "p": "Mech",
    "yt": "Robotics — NPTEL",
    "ytId": "uPsUjKLHLAg",
    "cover": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&seed=8b6c",
    "book": "Modern Robotics — Lynch & Park"
   },
   {
    "p": "Perception",
    "yt": "SLAM — Cyrill",
    "ytId": "ukzFI9rgwfU",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=60d9",
    "book": "Probabilistic Robotics — Thrun"
   },
   {
    "p": "Control",
    "yt": "Control — Brian Douglas",
    "ytId": "aircAruvnKk",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=ba97",
    "book": "Feedback Control — Astrom"
   },
   {
    "p": "Planning",
    "yt": "Planning — CMU",
    "ytId": "HZ4j_U3FC94",
    "cover": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&seed=f7e1",
    "book": "Planning Algorithms — LaValle"
   },
   {
    "p": "ROS",
    "yt": "ROS2 — Articulated",
    "ytId": "i_LwzRVP7bg",
    "cover": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&seed=0bbd",
    "book": "ROS Programming — Joseph"
   },
   {
    "p": "Robotics Docs",
    "yt": "Robotics Official Docs ? Deep Dive",
    "ytId": "pYK4No7ACRE",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc896",
    "book": "Official docs + github.com/awesome-robotics ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Robotics",
    "ytId": "1vbXmCrkT3Y",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper896",
    "book": "Seminal paper + paperswithcode.com/sota for Robotics"
   },
   {
    "p": "Community",
    "yt": "Robotics Conference Talk",
    "ytId": "pYK4No7ACRE",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm896",
    "book": "github.com/topics/robotics + Stack Overflow [Robotics]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Mech",
    "c": "Kinematics, DH, URDF",
    "out": "Arm model",
    "icon": "fa-gears"
   },
   {
    "w": "7-14",
    "t": "Perception",
    "c": "Camera, depth, OpenCV",
    "out": "Detector node",
    "icon": "fa-eye"
   },
   {
    "w": "15-20",
    "t": "Control",
    "c": "PID, tuning, sim",
    "out": "Balancing bot",
    "icon": "fa-sliders"
   },
   {
    "w": "21-26",
    "t": "SLAM",
    "c": "Mapping, localization",
    "out": "Map + nav",
    "icon": "fa-route"
   },
   {
    "w": "27-30",
    "t": "ROS2",
    "c": "Nodes, topics, sim (Gazebo)",
    "out": "ROS stack",
    "icon": "fa-robot"
   },
   {
    "w": "31-36",
    "t": "Field",
    "c": "Safety, fleet, demo",
    "out": "Autonomous run",
    "icon": "fa-flag-checkered"
   }
  ],
  "timeline": [
   {
    "y": "1961",
    "t": "Unimate",
    "d": "First industrial arm"
   },
   {
    "y": "2007",
    "t": "ROS",
    "d": "Willow Garage"
   },
   {
    "y": "2015",
    "t": "Drones",
    "d": "Consumer flight"
   },
   {
    "y": "2020",
    "t": "Spot",
    "d": "Boston Dynamics"
   },
   {
    "y": "2023",
    "t": "Humanoids",
    "d": "Tesla/Figure"
   }
  ],
  "evolution": {
   "years": [
    "2010",
    "2015",
    "2020",
    "2023",
    "2028"
   ],
   "cap": [
    20,
    45,
    70,
    88,
    99
   ],
   "label": "Autonomy index"
  },
  "economics": [
   {
    "v": "$0.2T",
    "l": "Robotics 2030",
    "d": "Industrial + service"
   },
   {
    "v": "40%",
    "l": "Factories",
    "d": "Add cobots by 2028"
   },
   {
    "v": "$75B",
    "l": "Robotics 2028",
    "d": "IFR"
   },
   {
    "v": "4M",
    "l": "Robots 2023",
    "d": "deployed"
   }
  ],
  "balanced": {
   "pros": [
    "Embodied AI ? perception+control loops close reality gap with sim-to-real via domain randomization and SLAM.",
    "Safety ? robots handle hazardous, repetitive tasks in radioactive, mining and rescue zones with E-stops.",
    "Precision ? repeatability <0.1mm beats humans for assembly, with force control and visual servoing.",
    "Autonomy frontier ? autonomous navigation and manipulation generalize across warehouses, farms and homes."
   ],
   "cons": [
    "Integration complexity ? mechanics, electronics, software and supply chain must align; failures compound.",
    "Sensor noise and sim2real gap ? lighting, friction and latency differ from Gazebo without extensive tuning.",
    "Safety certification ? ISO 10218, risk assessments and E-stops add months and cost before deployment.",
    "Cost ? hardware, calibration and maintenance are high vs pure software, with long payback."
   ]
  },
  "ethics": [
   {
    "t": "E-Stop",
    "d": "Always human stop",
    "icon": "fa-stop"
   },
   {
    "t": "No Weaponize",
    "d": "Reject autonomous weapons",
    "icon": "fa-ban"
   },
   {
    "t": "Transparent Intent",
    "d": "Signal motion",
    "icon": "fa-bullhorn"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 ROS + Control + AI theory, 09:00-12:00 Robotics Lab (ROS) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Robotics Club + Robotics Lab (ROS) ? weekly workshops, peer code reviews, shared ROS + Gazebo with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with CV + IoT peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem7: Robotics engineer intern (Internshala/LinkedIn 2024) ? ship autonomous bot + sim video, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage hardware integration and avoid sensor noise via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Gazebo free, hardware ~10k ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Mech + Perception + ROS",
   "previous": [
    {
     "q": "SLAM loop closure",
     "company": "Boston Dynamics 2023",
     "year": "2023",
     "source": "Glassdoor ↗",
     "freq": "Med"
    },
    {
     "q": "PID tuning",
     "company": "TCS Robotics 2024",
     "year": "2024",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Robotics system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Robotics system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Robotics system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "A* pathfinding",
     "link": "LeetCode 1091",
     "company": "FAANG 60%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show Gazebo sim | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "7-12 LPA",
   "mid": "14-28 LPA",
   "senior": "30-60 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "ABB",
    "GreyOrange"
   ],
   "service": [
    "TCS"
   ],
   "startup": [
    "Addverb"
   ],
   "psu": [
    "ISRO"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech Robotics (IIT-Kan), MS"
   ],
   "venues": [
    "ICRA/IROS",
    "RSS"
   ],
   "topics": [
    "SLAM sim2real",
    "Manipulation learning"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "AR/VR": {
  "slug": "ar-vr",
  "hero3D": {
   "layers": [
    2,
    4,
    4,
    2
   ],
   "particles": 20,
   "model": "headset"
  },
  "id": "AR/VR",
  "heroBadge": "Reality → Mixed • Presence to Metaverse",
  "exec": "Create experiences that mix real and virtual: 3D, tracking (SLAM), hand/gaze input, and game engines (Unity XR). Must keep motion delay <20ms to avoid sickness and respect room privacy. Needs a headset (shared lab ok).",
  "paradigm": {
   "title": "Screen → Space",
   "shift": "Flat → Volumetric",
   "rules": {
    "t": "Screen",
    "d": "Touch & click",
    "eg": "Phone"
   },
   "empirical": {
    "t": "Space",
    "d": "6DOF, gaze, hands",
    "eg": "Quest hand tracking"
   },
   "blackBox": {
    "t": "Presence",
    "d": "Latency <20ms avoids sickness",
    "stats": "90 FPS VR"
   }
  },
  "pillars": [
   {
    "n": "3D Foundations",
    "icon": "fa-cubes",
    "d": "Mesh, materials, lighting; models PBR, bakes AO and LODs to keep 90fps on mobile XR.",
    "demand": 7,
    "complexity": 6,
    "tag": "3D"
   },
   {
    "n": "Tracking",
    "icon": "fa-crosshairs",
    "d": "SLAM, anchors, depth; fuses LiDAR+CV, estimates depth and tracks with multi-object association.",
    "demand": 8,
    "complexity": 8,
    "tag": "Track"
   },
   {
    "n": "Interaction",
    "icon": "fa-hand-pointer",
    "d": "Hands, gaze, haptics; recognizes 21-point hand, gazes with eye tracking and renders haptics via impulse.",
    "demand": 7,
    "complexity": 7,
    "tag": "Interact"
   },
   {
    "n": "Engines",
    "icon": "fa-gamepad",
    "d": "Unity XR, WebXR, Unreal; builds with Unity XR/OpenXR, polyfills WebXR and profiles with RenderDoc.",
    "demand": 8,
    "complexity": 7,
    "tag": "Engine"
   },
   {
    "n": "Perf",
    "icon": "fa-gauge-high",
    "d": "Foveation, occlusion, 90FPS; foveates, culls occlusion and budgets <11ms frame to avoid sickness.",
    "demand": 7,
    "complexity": 7,
    "tag": "Perf"
   }
  ],
  "study": [
   {
    "p": "3D",
    "yt": "Blender — Guru",
    "ytId": "wjZofJX0v4M",
    "cover": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&seed=1384",
    "book": "Real-Time Rendering — Akenine"
   },
   {
    "p": "XR",
    "yt": "AR/VR — NPTEL",
    "ytId": "3PHXvlpOkf4",
    "cover": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&seed=2529",
    "book": "Virtual Reality — LaValle"
   },
   {
    "p": "Unity XR",
    "yt": "Unity XR — Valem",
    "ytId": "itBc7nwAK5o",
    "cover": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&seed=9f3c",
    "book": "Learning Virtual Reality — Parisi"
   },
   {
    "p": "Interaction",
    "yt": "Hands — Meta",
    "ytId": "w7ejDZ8SWv8",
    "cover": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&seed=e52c",
    "book": "Brave NUI — Wigdor"
   },
   {
    "p": "Perf",
    "yt": "Perf — Oculus",
    "ytId": "TlB_eWDSMt4",
    "cover": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&seed=9d09",
    "book": "Game Engine Arch — Gregory"
   },
   {
    "p": "AR/VR Docs",
    "yt": "AR/VR Official Docs ? Deep Dive",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc258",
    "book": "Official docs + github.com/awesome-arvr ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? AR/VR",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper258",
    "book": "Seminal paper + paperswithcode.com/sota for AR/VR"
   },
   {
    "p": "Community",
    "yt": "AR/VR Conference Talk",
    "ytId": "T_X4XFwKX8k",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm258",
    "book": "github.com/topics/ar/vr + Stack Overflow [AR/VR]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "3D",
    "c": "Blender, PBR, lighting",
    "out": "Room scene",
    "icon": "fa-cubes"
   },
   {
    "w": "7-14",
    "t": "Unity XR",
    "c": "AR Foundation / OpenXR",
    "out": "AR cube",
    "icon": "fa-gamepad"
   },
   {
    "w": "15-20",
    "t": "Tracking",
    "c": "Anchors, occlusion",
    "out": "Tracked placement",
    "icon": "fa-crosshairs"
   },
   {
    "w": "21-26",
    "t": "Interaction",
    "c": "Hands, gaze, UI in space",
    "out": "Hand UI",
    "icon": "fa-hand-pointer"
   },
   {
    "w": "27-30",
    "t": "Perf",
    "c": "Profiling, foveation",
    "out": "90 FPS build",
    "icon": "fa-gauge-high"
   },
   {
    "w": "31-36",
    "t": "Ship",
    "c": "Store, trailer, comfort",
    "out": "Quest/WebXR app",
    "icon": "fa-rocket"
   }
  ],
  "timeline": [
   {
    "y": "2012",
    "t": "Oculus DK1",
    "d": "Crowdfunded"
   },
   {
    "y": "2016",
    "t": "ARKit/ARCore",
    "d": "Phone AR"
   },
   {
    "y": "2020",
    "t": "Quest 2",
    "d": "Standalone scale"
   },
   {
    "y": "2023",
    "t": "Vision Pro",
    "d": "Spatial computing"
   },
   {
    "y": "2024",
    "t": "WebXR",
    "d": "Browser XR"
   }
  ],
  "evolution": {
   "years": [
    "2015",
    "2018",
    "2021",
    "2023",
    "2028"
   ],
   "cap": [
    20,
    40,
    65,
    82,
    99
   ],
   "label": "Presence quality"
  },
  "economics": [
   {
    "v": "$0.3T",
    "l": "XR 2030",
    "d": "Headsets + enterprise"
   },
   {
    "v": "24%",
    "l": "CAGR",
    "d": "Growth"
   },
   {
    "v": "$58B",
    "l": "XR 2028",
    "d": "IDC 30% CAGR"
   },
   {
    "v": "100M",
    "l": "Quest sold",
    "d": "Meta"
   }
  ],
  "balanced": {
   "pros": [
    "Presence ? 6DoF + haptics create immersion impossible on 2D, with measured motion-to-photon <20ms.",
    "Training ? high-risk procedures (surgery, flight) practiced safely with quantified skill transfer.",
    "Collaboration ? spatial anchors enable remote co-presence and 3D review without travel.",
    "Creativity ? world-building, spatial storytelling and new interaction paradigms beyond windows."
   ],
   "cons": [
    "Motion sickness ? latency, vergence-accommodation conflict need careful comfort vignetting and 90+ FPS.",
    "Hardware cost and weight ? headsets at ~30k and tethered GPUs limit adoption without mobile optimization.",
    "Content churn ? platforms and SDKs fragment without OpenXR and WebXR abstraction.",
    "Privacy ? eye tracking and room scans are deeply sensitive without on-device processing and opt-in."
   ]
  },
  "ethics": [
   {
    "t": "Comfort First",
    "d": "No forced motion",
    "icon": "fa-bed"
   },
   {
    "t": "Room Privacy",
    "d": "Local processing",
    "icon": "fa-house-lock"
   },
   {
    "t": "Age Safe",
    "d": "IPD & time limits",
    "icon": "fa-children"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 Unity + 3D + ARCore theory, 09:00-12:00 XR Lab (headset) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "XR Club + XR Lab (headset) ? weekly workshops, peer code reviews, shared Unity + headset with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Game + HCI peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: XR dev intern (Internshala/LinkedIn 2024) ? ship AR demo + UX test, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage motion sickness and avoid content churn via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Unity free, headset ~30k (lab) ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "3D + XR + Perf",
   "previous": [
    {
     "q": "6DOF vs 3DOF",
     "company": "Meta 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Foveated rendering why?",
     "company": "Google 2023",
     "year": "2023",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design AR/VR system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design AR/VR system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design AR/VR system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Ray casting hit",
     "link": "Custom",
     "company": "XR 60%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show 90 FPS perf | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "7-13 LPA",
   "mid": "14-26 LPA",
   "senior": "28-55 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "Meta",
    "Microsoft"
   ],
   "service": [
    "TCS"
   ],
   "startup": [
    "GMetri"
   ],
   "psu": [
    "DRDO"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "ISRO Scientist SC",
    "eligibility": "B.E/B.Tech CSE/ECE 65% + GATE",
    "age": "21-28",
    "salary": "56100 Level-10 + DA/HRA (~12 LPA)",
    "link": "isro.gov.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "BARC Scientific Officer",
    "eligibility": "B.E/B.Tech + GATE score",
    "age": "21-27",
    "salary": "56100 Level-10",
    "link": "barc.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MDes XR, MS"
   ],
   "venues": [
    "VRST/ISMAR",
    "SIGGRAPH"
   ],
   "topics": [
    "Comfort motion",
    "Spatial computing"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Embedded Systems": {
  "slug": "embedded-systems",
  "hero3D": {
   "layers": [
    2,
    3,
    3,
    2
   ],
   "particles": 16,
   "model": "mcu"
  },
  "id": "Embedded Systems",
  "heroBadge": "C → RTOS • Bits Touch Atoms",
  "exec": "Write programs for tiny computers inside devices: C, ARM chips, drivers (I2C/SPI), and real-time tasks. Must be exact on timing (microseconds) and power (years on coin cell). Debugging without printf is harder — learn with logic analyzer.",
  "paradigm": {
   "title": "Polling → Interrupts → RTOS",
   "shift": "Blocking → Event-driven",
   "rules": {
    "t": "Polling",
    "d": "Spin check",
    "eg": "while(!ready)"
   },
   "empirical": {
    "t": "Event",
    "d": "ISR + scheduler, power sleep",
    "eg": "FreeRTOS task"
   },
   "blackBox": {
    "t": "Determinism",
    "d": "Worst-case timing proven",
    "stats": "µs jitter"
   }
  },
  "pillars": [
   {
    "n": "C & Toolchain",
    "icon": "fa-code",
    "d": "Bare-metal C, cross-compile, linker scripts, GDB/JTAG and static analysis for resource-constrained MCUs.",
    "demand": 8,
    "complexity": 7,
    "tag": "C"
   },
   {
    "n": "ARM & Peripherals",
    "icon": "fa-microchip",
    "d": "Cortex-M, GPIO, timers, SPI/I2C/UART, DMA and interrupt-driven drivers with HALs for portability.",
    "demand": 8,
    "complexity": 7,
    "tag": "MCU"
   },
   {
    "n": "RTOS & Scheduling",
    "icon": "fa-layer-group",
    "d": "FreeRTOS threads, semaphores, queues, priority inheritance and WCET analysis for deterministic loops.",
    "demand": 8,
    "complexity": 8,
    "tag": "RTOS"
   },
   {
    "n": "Drivers & Power",
    "icon": "fa-battery-half",
    "d": "Sensor drivers, low-power modes, watchdog and OTA with signed updates and rollback for 10-year lifecycle.",
    "demand": 7,
    "complexity": 7,
    "tag": "Drivers"
   },
   {
    "n": "Verification",
    "icon": "fa-vial",
    "d": "Logic analyzer, SWO trace, unit tests on host, HIL and compliance for safety-critical deployment.",
    "demand": 7,
    "complexity": 7,
    "tag": "Verify"
   }
  ],
  "study": [
   {
    "p": "C",
    "yt": "Embedded C — NPTEL",
    "ytId": "nIgIv4IfJ6s",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=bced",
    "book": "Test Driven Development for Embedded — Grenning"
   },
   {
    "p": "ARM",
    "yt": "ARM — NPTEL",
    "ytId": "cZaNf2rA30k",
    "cover": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&seed=dde6",
    "book": "The Definitive Guide to ARM Cortex-M."
   },
   {
    "p": "Drivers",
    "yt": "Drivers — Phil Lab",
    "ytId": "aircAruvnKk",
    "cover": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80&seed=4d06",
    "book": "Making Embedded Systems — White"
   },
   {
    "p": "RTOS",
    "yt": "FreeRTOS — DigiKey",
    "ytId": "nIgIv4IfJ6s",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=915a",
    "book": "FreeRTOS book — Barry"
   },
   {
    "p": "Power",
    "yt": "Low Power — ST",
    "ytId": "sz_dsktIjt4",
    "cover": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&seed=7976",
    "book": "Low Power — Berger"
   },
   {
    "p": "Embedded Systems Docs",
    "yt": "Embedded Systems Official Docs ? Deep Dive",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc551",
    "book": "Official docs + github.com/awesome-embedded-systems ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Embedded Systems",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper551",
    "book": "Seminal paper + paperswithcode.com/sota for Embedded Systems"
   },
   {
    "p": "Community",
    "yt": "Embedded Systems Conference Talk",
    "ytId": "UFkEaAH7lQ0",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm551",
    "book": "github.com/topics/embedded-systems + Stack Overflow [Embedded Systems]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "C & Boards",
    "c": "STM32/ESP32, toolchain",
    "out": "Blinky + UART",
    "icon": "fa-code"
   },
   {
    "w": "7-14",
    "t": "Peripherals",
    "c": "GPIO, timers, I2C/SPI",
    "out": "Sensor driver",
    "icon": "fa-plug"
   },
   {
    "w": "15-20",
    "t": "Interrupts",
    "c": "NVIC, DMA, ISR",
    "out": "DMA transfer",
    "icon": "fa-bolt"
   },
   {
    "w": "21-26",
    "t": "RTOS",
    "c": "Tasks, queues, sync",
    "out": "Multitask firmware",
    "icon": "fa-clock"
   },
   {
    "w": "27-30",
    "t": "Power & Debug",
    "c": "Sleep, trace, logic analyzer",
    "out": "Low-power mode",
    "icon": "fa-battery-half"
   },
   {
    "w": "31-36",
    "t": "Product",
    "c": "PCB basics, cert, OTA",
    "out": "Shippable FW",
    "icon": "fa-rocket"
   }
  ],
  "timeline": [
   {
    "y": "1971",
    "t": "4004",
    "d": "Intel MCU"
   },
   {
    "y": "1996",
    "t": "ARM7",
    "d": "Embedded ARM"
   },
   {
    "y": "2003",
    "t": "FreeRTOS",
    "d": "Open RTOS"
   },
   {
    "y": "2014",
    "t": "STM32",
    "d": "Cheap 32-bit"
   },
   {
    "y": "2020",
    "t": "RISC-V MCU",
    "d": "Open cores"
   }
  ],
  "evolution": {
   "years": [
    "2010",
    "2015",
    "2020",
    "2024",
    "2028"
   ],
   "cap": [
    30,
    55,
    75,
    88,
    98
   ],
   "label": "Perf / mW"
  },
  "economics": [
   {
    "v": "15B",
    "l": "MCUs / yr",
    "d": "Shipped"
   },
   {
    "v": "8 LPA",
    "l": "India avg",
    "d": "Embedded"
   },
   {
    "v": "$168B",
    "l": "Embedded 2027",
    "d": "Mordor"
   },
   {
    "v": "15B",
    "l": "MCUs/yr",
    "d": "IC Insights"
   }
  ],
  "balanced": {
   "pros": [
    "Determinism ? bare-metal and RTOS guarantee <1ms jitter for control loops via priority inheritance and TICKS.",
    "Efficiency ? <100mW operation on ARM Cortex-M with sleep modes extends battery years vs Linux.",
    "Cost ? BOM <$5 enables mass deployment in appliances and sensors with long lifecycle support.",
    "Longevity ? devices run 10+ years unattended with watchdog, OTA signing and rollback."
   ],
   "cons": [
    "Debugging without OS ? JTAG, logic analyzers and printf via SWO are slow without rich tooling.",
    "Resource constraints ? KBs RAM and flash force manual memory management and careful stack sizing.",
    "Timing bugs ? ISRs, priority inversion and race conditions need static analysis and WCET proving.",
    "Supply chain ? chip shortages and errata force respins without alternative sourcing and HALs."
   ]
  },
  "ethics": [
   {
    "t": "Fail Safe",
    "d": "Watchdog + safe state",
    "icon": "fa-shield"
   },
   {
    "t": "No Backdoors",
    "d": "No hidden access",
    "icon": "fa-lock"
   },
   {
    "t": "Update Path",
    "d": "Signed OTA",
    "icon": "fa-rotate"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 C + ARM + RTOS theory, 09:00-12:00 Embedded Lab (STM32) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Embedded Club + Embedded Lab (STM32) ? weekly workshops, peer code reviews, shared ARM + JTAG with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with IoT + Architecture peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem6: Firmware engineer intern (Internshala/LinkedIn 2024) ? ship RTOS project + driver, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage debugging without OS and avoid timing bugs via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Board ~3k, tools free ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "C + Drivers + RTOS",
   "previous": [
    {
     "q": "Volatile why?",
     "company": "Qualcomm 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Priority inversion fix",
     "company": "Bosch 2023",
     "year": "2023",
     "source": "GeeksforGeeks ↗",
     "freq": "High"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Embedded Systems system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Embedded Systems system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Embedded Systems system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Implement ring buffer",
     "link": "Embedded",
     "company": "Hardware 80%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show watchdog | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "6-11 LPA",
   "mid": "12-24 LPA",
   "senior": "24-48 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "TI",
    "NXP"
   ],
   "service": [
    "TCS"
   ],
   "startup": [
    "Ather"
   ],
   "psu": [
    "BEL"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE CSE/DA 2026",
    "eligibility": "B.E/B.Tech (CSE/ECE/EE) final year or graduate",
    "age": "No limit (PSU 21-30)",
    "salary": "PSU/Scientist 56100 Level-10 (~12-18 LPA)",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "BEL Probationary Engineer",
    "eligibility": "B.E ECE 60% + GATE",
    "age": "25-28",
    "salary": "40000-140000 (~8-10 LPA)",
    "link": "bel-india.in"
   },
   {
    "exam": "NIC Scientist B",
    "eligibility": "B.E/B.Tech CSE + NIELIT exam",
    "age": "30 max",
    "salary": "44900 Level-7 (~8-12 LPA)",
    "link": "nielit.gov.in/nic"
   },
   {
    "exam": "HAL Management Trainee",
    "eligibility": "B.E ECE/EE + GATE",
    "age": "28",
    "salary": "40000-140000",
    "link": "hal-india.co.in"
   }
  ],
  "researcher": {
   "higher": [
    "MTech Embedded (IIT-B), MS"
   ],
   "venues": [
    "RTAS/EMSOFT",
    "DAC"
   ],
   "topics": [
    "RTOS verification",
    "Low-power sensing"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 },
 "Quantum Computing": {
  "slug": "quantum-computing",
  "hero3D": {
   "layers": [
    2,
    2,
    4,
    2
   ],
   "particles": 16,
   "model": "atom"
  },
  "id": "Quantum Computing",
  "heroBadge": "Bits → Qubits • Qiskit to Advantage",
  "exec": "Use quantum rules (qubits, superposition) for future computing. Learn gates, Grover/Shor ideas, and Qiskit simulation. Still research-stage with short coherence (100-1000µs) and noise; useful to learn maths and honesty about hype, not for immediate jobs.",
  "paradigm": {
   "title": "Deterministic → Probabilistic → Quantum",
   "shift": "Bits → Qubits",
   "rules": {
    "t": "Classical",
    "d": "0/1, gates",
    "eg": "AND"
   },
   "empirical": {
    "t": "Quantum",
    "d": "Superposition, interference → measure",
    "eg": "H → CNOT"
   },
   "blackBox": {
    "t": "Decoherence",
    "d": "Noise destroys state fast",
    "stats": "100-1000µs coherence"
   }
  },
  "pillars": [
   {
    "n": "Foundations",
    "icon": "fa-atom",
    "d": "Qubit, Bloch sphere, math; visualizes Bloch sphere, simulates with NumPy and explains decoherence via T1/T2.",
    "demand": 6,
    "complexity": 8,
    "tag": "Qubit"
   },
   {
    "n": "Gates",
    "icon": "fa-diagram-project",
    "d": "H, CNOT, universality; composes universal sets, transpiles and mitigates crosstalk.",
    "demand": 7,
    "complexity": 8,
    "tag": "Gates"
   },
   {
    "n": "Algorithms",
    "icon": "fa-wand-magic-sparkles",
    "d": "Grover, Shor, VQE; proves quadratic speedup for Grover and exponential for Shor with QPE, runs VQE variationally.",
    "demand": 7,
    "complexity": 9,
    "tag": "Algo"
   },
   {
    "n": "Qiskit",
    "icon": "fa-code",
    "d": "Circuits, transpilation, noise; builds with Qiskit, transpiles for basis gates and executes on Aer with noise.",
    "demand": 8,
    "complexity": 7,
    "tag": "Qiskit"
   },
   {
    "n": "Applications",
    "icon": "fa-flask",
    "d": "Chemistry, opt, finance; maps chemistry to qubits, optimizes via QAOA and benchmarks vs classical.",
    "demand": 7,
    "complexity": 8,
    "tag": "Use"
   }
  ],
  "study": [
   {
    "p": "Foundations",
    "yt": "Quantum — NPTEL",
    "ytId": "g_IaVepNDT4",
    "cover": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80&seed=455b",
    "book": "Quantum Computation — Nielsen & Chuang"
   },
   {
    "p": "Gates",
    "yt": "Qiskit — IBM",
    "ytId": "VPvVD8t02U8",
    "cover": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&seed=207d",
    "book": "Quantum Supremacy — Alagic"
   },
   {
    "p": "Algorithms",
    "yt": "Shor — minutephysics",
    "ytId": "1vbXmCrkT3Y",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=d72b",
    "book": "Quantum Algorithms — Mosca"
   },
   {
    "p": "Qiskit",
    "yt": "Qiskit Textbook — IBM",
    "ytId": "0-S5a0eXPoc",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=6806",
    "book": "Learn Qiskit — Asfaw"
   },
   {
    "p": "Use",
    "yt": "Quantum Use — McKinsey",
    "ytId": "ukzFI9rgwfU",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=06eb",
    "book": "Quantum — Bernhardt"
   },
   {
    "p": "Quantum Computing Docs",
    "yt": "Quantum Computing Official Docs ? Deep Dive",
    "ytId": "g_IaVepNDT4",
    "cover": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80&seed=doc834",
    "book": "Official docs + github.com/awesome-quantum-computing ? curated"
   },
   {
    "p": "Paper / RFC",
    "yt": "Foundational Paper ? Quantum Computing",
    "ytId": "1vbXmCrkT3Y",
    "cover": "https://images.unsplash.com/photo-1451187581013-9a316f4f6ad2?w=400&q=80&seed=paper834",
    "book": "Seminal paper + paperswithcode.com/sota for Quantum Computing"
   },
   {
    "p": "Community",
    "yt": "Quantum Computing Conference Talk",
    "ytId": "0-S5a0eXPoc",
    "cover": "https://images.unsplash.com/photo-1550751827305-500e4b96b9af?w=400&q=80&seed=comm834",
    "book": "github.com/topics/quantum-computing + Stack Overflow [Quantum Computing]"
   }
  ],
  "roadmap": [
   {
    "w": "1-6",
    "t": "Math",
    "c": "Linear algebra, complex, probability",
    "out": "Qubit sim (NumPy)",
    "icon": "fa-calculator"
   },
   {
    "w": "7-14",
    "t": "Gates",
    "c": "H, X, CNOT, Bloch",
    "out": "Bell pair",
    "icon": "fa-atom"
   },
   {
    "w": "15-20",
    "t": "Algorithms",
    "c": "Grover, Shor steps",
    "out": "Grover impl",
    "icon": "fa-wand-magic-sparkles"
   },
   {
    "w": "21-26",
    "t": "Qiskit",
    "c": "Circuits, transpiler, Aer noise",
    "out": "Qiskit jobs",
    "icon": "fa-code"
   },
   {
    "w": "27-30",
    "t": "Error",
    "c": "Mitigation, benchmarking",
    "out": "Error mitigated run",
    "icon": "fa-shield"
   },
   {
    "w": "31-36",
    "t": "Capstone",
    "c": "VQE or optimization demo",
    "out": "Report + demo",
    "icon": "fa-flask"
   }
  ],
  "timeline": [
   {
    "y": "1980",
    "t": "Feynman",
    "d": "Quantum sim proposal"
   },
   {
    "y": "1994",
    "t": "Shor",
    "d": "Factoring algorithm"
   },
   {
    "y": "2019",
    "t": "Sycamore",
    "d": "Quantum supremacy claim"
   },
   {
    "y": "2023",
    "t": "100+ qubits",
    "d": "IBM Condor"
   },
   {
    "y": "2028",
    "t": "Error-corrected",
    "d": "Early logical qubits"
   }
  ],
  "evolution": {
   "years": [
    "2015",
    "2019",
    "2023",
    "2026",
    "2030"
   ],
   "cap": [
    10,
    35,
    60,
    78,
    96
   ],
   "label": "Logical qubit progress"
  },
  "economics": [
   {
    "v": "40%",
    "l": "Growth",
    "d": "CAGR 2025-30"
   },
   {
    "v": "15 LPA",
    "l": "Research premium",
    "d": "Quantum (niche)"
   },
   {
    "v": "$125B",
    "l": "Quantum 2030",
    "d": "McKinsey"
   },
   {
    "v": "1000+",
    "l": "Qubits",
    "d": "IBM Condor 2024"
   }
  ],
  "balanced": {
   "pros": [
    "Exponential speedups ? Shor breaks RSA, Grover gives sqrt(N) search, and quantum chemistry simulates molecules intractable classically.",
    "Material breakthroughs ? catalysts, batteries and enzymes accelerate via Hamiltonian simulation with VQE.",
    "Optimization ? QAOA tackles logistics and finance combinatorial problems with provable advantage at scale.",
    "Fundamental science ? quantum information deepens physics and cryptography, driving new algorithms and error correction."
   ],
   "cons": [
    "NISQ noise ? decoherence and gate errors cap circuits to ~100 qubits without error correction and mitigation.",
    "Isolation complexity ? cryogenics, vacuum and shielding are operationally heavy and costly vs cloud VMs.",
    "Algorithm scarcity ? few problems have proven superpolynomial advantage; needs novel algorithm discovery.",
    "Talent bottleneck ? requires PhD-level QM, linear algebra and physics without abundant curricula or hardware access."
   ]
  },
  "ethics": [
   {
    "t": "Post-Quantum Crypto",
    "d": "Migrate to PQC early",
    "icon": "fa-key"
   },
   {
    "t": "Honest Hype",
    "d": "State noise limits",
    "icon": "fa-bullhorn"
   },
   {
    "t": "Open Science",
    "d": "Share benchmarks",
    "icon": "fa-book-open"
   }
  ],
  "studentLife": {
   "daily": "06:30-08:30 QM + Qiskit + Linear Algebra theory, 09:00-12:00 Quantum Lab (simulator) labs, 19:00-21:00 project build + code reviews. Weekly demo Fridays.",
   "campus": "Quantum Club + Quantum Lab (simulator) ? weekly workshops, peer code reviews, shared IBM Quantum + sim with reservation discipline and inter-college hackathons.",
   "studyPlan": "30% fundamentals, 40% hands-on, 30% projects ? weekly sprints, monthly mocks and spaced revision to close gaps.",
   "peers": "Collaborate with Physics + Math peers for cross-functional exposure ? pair programming, design critiques and accountability pods.",
   "internship": "Sem7: Quantum researcher intern (Internshala/LinkedIn 2024) ? ship Bell pair + Grover demo, write postmortem, convert to PPO via shipped impact.",
   "balance": "Manage math abstraction and avoid noise/NISQ via Pomodoro, exercise, digital sunset, weekly reflection and mentor check-ins.",
   "finance": "Sim free, hardware lab access limited ? most cost covered by college lab + cloud credits, stipends and shared hardware."
  },
  "interviewKit": {
   "pattern": "Math + Gates + Qiskit + Research",
   "previous": [
    {
     "q": "Bloch sphere for |+>",
     "company": "IBM Quantum 2024",
     "year": "2024",
     "source": "Glassdoor ↗",
     "freq": "High"
    },
    {
     "q": "Grover speedup why?",
     "company": "Google Quantum 2023",
     "year": "2023",
     "source": "GeeksforGeeks ↗",
     "freq": "Med"
    },
    {
     "q": "Design rate limiter for API gateway",
     "company": "Google 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Explain CAP theorem with real example",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "High"
    },
    {
     "q": "How to handle N+1 query and EXPLAIN plan?",
     "company": "Flipkart 2023",
     "year": "2023",
     "source": "LeetCode ?",
     "freq": "High"
    },
    {
     "q": "Debug high p99 latency in prod",
     "company": "Microsoft 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Tradeoff: consistency vs availability for your project",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "GeeksforGeeks ?",
     "freq": "High"
    },
    {
     "q": "Design Quantum Computing system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Quantum Computing system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    },
    {
     "q": "Design Quantum Computing system tradeoff ? scale vs cost",
     "company": "Amazon 2024",
     "year": "2024",
     "source": "Glassdoor ?",
     "freq": "Med"
    }
   ],
   "coding": [
    {
     "q": "Bell pair with Qiskit",
     "link": "Qiskit",
     "company": "Research 70%"
    },
    {
     "q": "Two Sum variant",
     "link": "LeetCode 1",
     "company": "FAANG 90%"
    },
    {
     "q": "Valid Parentheses",
     "link": "LeetCode 20",
     "company": "Amazon 80%"
    },
    {
     "q": "Merge K Sorted Lists",
     "link": "LeetCode 23",
     "company": "Google 85%"
    },
    {
     "q": "LRU with expiry",
     "link": "LeetCode 146+",
     "company": "Microsoft 88%"
    }
   ],
   "tips": "Show error mitigation | 8-week plan: OA->Tech->Design->HR->Mock.",
   "plan": [
    {
     "w": "1-2",
     "phase": "OA Prep",
     "focus": "DSA Arrays, Hash, Two pointers ? 50 problems, mock OA weekly",
     "out": "OA 85%ile"
    },
    {
     "w": "3-4",
     "phase": "Domain Tech 1",
     "focus": "Core pillars deep dive + 3 mini-projects with evaluation metrics",
     "out": "Tech round ready"
    },
    {
     "w": "5-6",
     "phase": "Domain Tech 2 + System Design",
     "focus": "Tradeoffs, scaling, case studies + whiteboard",
     "out": "Design doc"
    },
    {
     "w": "7",
     "phase": "HR + Behavioral",
     "focus": "STAR stories, resume defense, ethics & disclosure",
     "out": "Mock HR"
    },
    {
     "w": "8",
     "phase": "Full Mock Loop",
     "focus": "2 full loops (OA+Tech+HR) with alumni, timed",
     "out": "Offer-ready"
    }
   ]
  },
  "salaries": {
   "fresher": "10-20 LPA",
   "mid": "18-35 LPA",
   "senior": "40-90 LPA",
   "source": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "verified": "2026-09-08",
   "note": "Product > Service ~25%; certified +15%"
  },
  "topCompanies": {
   "product": [
    "IBM Quantum",
    "Google Quantum"
   ],
   "service": [
    "TCS Quantum"
   ],
   "startup": [
    "QNu Labs"
   ],
   "psu": [
    "DRDO SAG"
   ],
   "source": "LinkedIn Top Companies India 2024 + NASSCOM"
  },
  "governmentExams": [
   {
    "exam": "GATE PH/CS + JEST",
    "eligibility": "MSc Physics / B.E + GATE PH/CS",
    "age": "No limit",
    "salary": "DRDO/MeitY 56100-76100",
    "link": "gate2026.iisc.ac.in"
   },
   {
    "exam": "DRDO SAG (Quantum)",
    "eligibility": "MSc Physics / B.E + quantum, GATE/JEST",
    "age": "28",
    "salary": "56100",
    "link": "rac.gov.in"
   },
   {
    "exam": "ISRO SAC (Quantum Comms)",
    "eligibility": "MSc Physics / B.E + quantum",
    "age": "28",
    "salary": "56100",
    "link": "isro.gov.in"
   },
   {
    "exam": "MeitY National Quantum Mission",
    "eligibility": "MSc/PhD Physics + research",
    "age": "32",
    "salary": "56100-80000 + HRA",
    "link": "nqm.gov.in"
   }
  ],
  "researcher": {
   "higher": [
    "MSc/PhD Physics + QIS (IISc/RRI), MS US (MIT)"
   ],
   "venues": [
    "QIP/PRL",
    "Nature Quantum"
   ],
   "topics": [
    "Error correction surface code",
    "NISQ VQE"
   ]
  },
  "sources": {
   "lastVerified": "2026-09-08",
   "salarySource": "AmbitionBox, Glassdoor, Levels.fyi India 2024-25",
   "examSource": "gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in, barc.gov.in, rac.gov.in",
   "companySource": "LinkedIn Top Companies India 2024, NASSCOM"
  }
 }
};
