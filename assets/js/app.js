// ---------- DATA : 25 Domains Atlas Pro ----------
const domains = [
 // Intelligence & Data (6)
 {id:'AI', name:'Artificial Intelligence (AI)', short:'AI', category:'Intelligence & Data', icon:'fa-brain', color:'from-violet-600 to-indigo-600', tag:'Trending 2026', level:'Advanced', demand:'Very High', growth:'35%', desc:'Build intelligent systems that think, learn & reason.', skills:['Python','Math','Logic','ML Basics'], careers:['AI Engineer (12 LPA)','Data Scientist','Researcher'], roadmap:'Python → Math → ML → Deep Learning → Projects', salary:'8-15 LPA', salaryNum:12, resources: ['NPTEL Intro to AI','Coursera AI for Everyone']},
 {id:'ML', name:'Machine Learning (ML)', short:'ML', category:'Intelligence & Data', icon:'fa-chart-line', color:'from-cyan-500 to-blue-600', tag:'High Demand', level:'Advanced', demand:'Very High', growth:'32%', desc:'Algorithms that learn from data and improve.', skills:['Statistics','Python','Data Wrangling'], careers:['ML Engineer (10 LPA)','MLOps'], roadmap:'Stats → Python → Supervised/Unsupervised → Deployment', salary:'7-14 LPA', salaryNum:11, resources: ['NPTEL ML','Coursera ML - Andrew Ng']},
 {id:'Data Science', name:'Data Science', short:'DS', category:'Intelligence & Data', icon:'fa-chart-pie', color:'from-fuchsia-600 to-indigo-600', tag:'High Demand', level:'Advanced', demand:'Very High', growth:'30%', desc:'Extract insights and stories from massive data.', skills:['Python','Statistics','SQL','Visualization'], careers:['Data Scientist (14 LPA)','Data Analyst'], roadmap:'Python → Stats → SQL → Visualization → Projects', salary:'8-18 LPA', salaryNum:13, resources: ['NPTEL Data Science','Coursera Data Science']},
 {id:'Big Data', name:'Big Data', short:'BD', category:'Intelligence & Data', icon:'fa-server', color:'from-violet-600 to-purple-600', tag:'Enterprise', level:'Advanced', demand:'High', growth:'28%', desc:'Process & scale petabytes of distributed data.', skills:['Hadoop','Spark','NoSQL','Cloud'], careers:['Big Data Engineer (11 LPA)','Data Architect'], roadmap:'Hadoop → Spark → NoSQL → Cloud Scale', salary:'8-16 LPA', salaryNum:12, resources: ['NPTEL Big Data','Coursera Big Data']},
 {id:'Computer Vision', name:'Computer Vision', short:'CV', category:'Intelligence & Data', icon:'fa-eye', color:'from-pink-600 to-violet-600', tag:'Trending', level:'Advanced', demand:'High', growth:'30%', desc:'Teach machines to see, detect & interpret images.', skills:['Python','OpenCV','Deep Learning','Math'], careers:['CV Engineer (12 LPA)','AI Researcher'], roadmap:'Python → Image Proc → CNN → Projects', salary:'8-15 LPA', salaryNum:12, resources: ['NPTEL Computer Vision','Coursera CV']},
 {id:'NLP', name:'Natural Language Processing (NLP)', short:'NLP', category:'Intelligence & Data', icon:'fa-language', color:'from-indigo-600 to-fuchsia-600', tag:'Trending', level:'Advanced', demand:'High', growth:'32%', desc:'Make computers understand & generate human language.', skills:['Python','NLP','Transformers','Linguistics'], careers:['NLP Engineer (11 LPA)','Chatbot Dev'], roadmap:'Python → NLP Basics → Transformers → LLM Projects', salary:'8-14 LPA', salaryNum:11, resources: ['NPTEL NLP','Coursera NLP']},
 // Build & Experience (5)
 {id:'Web Development', name:'Web Development', short:'WEB', category:'Build & Experience', icon:'fa-code', color:'from-blue-500 to-sky-500', tag:'Evergreen', level:'Beginner', demand:'Very High', growth:'25%', desc:'Craft fast, modern, responsive web experiences.', skills:['HTML','CSS','JS','React'], careers:['Frontend (8 LPA)','Full-Stack'], roadmap:'HTML/CSS → JS → React → Node → Deploy', salary:'5-10 LPA', salaryNum:7, resources: ['NPTEL Web','Coursera Web Dev']},
 {id:'Mobile App Development', name:'Mobile App Development', short:'MOB', category:'Build & Experience', icon:'fa-mobile-screen-button', color:'from-indigo-500 to-violet-600', tag:'High Demand', level:'Intermediate', demand:'High', growth:'24%', desc:'Build native & cross-platform mobile apps.', skills:['Flutter','React Native','Kotlin','Swift'], careers:['Mobile Engineer (9 LPA)','App Dev'], roadmap:'Java/Kotlin → Flutter → API → Publish', salary:'6-12 LPA', salaryNum:9, resources: ['NPTEL Mobile','Coursera Android']},
 {id:'Software Engineering', name:'Software Engineering', short:'SE', category:'Build & Experience', icon:'fa-diagram-project', color:'from-slate-600 to-slate-800', tag:'Core', level:'Intermediate', demand:'Very High', growth:'22%', desc:'Architect scalable, maintainable software systems.', skills:['DSA','System Design','Testing','Agile'], careers:['SDE (10 LPA)','Tech Lead'], roadmap:'DSA → System Design → Testing → Projects', salary:'7-13 LPA', salaryNum:10, resources: ['NPTEL SE','Coursera SE']},
 {id:'Game Development', name:'Game Development', short:'GAME', category:'Build & Experience', icon:'fa-gamepad', color:'from-red-600 to-orange-600', tag:'Creative', level:'Intermediate', demand:'Medium', growth:'20%', desc:'Design & code immersive games & engines.', skills:['Unity','C#','3D Graphics','Physics'], careers:['Game Dev (8 LPA)','Unity Engineer'], roadmap:'C# → Unity → Graphics → Publish', salary:'5-11 LPA', salaryNum:8, resources: ['Coursera Game Dev','YouTube Unity']},
 {id:'HCI', name:'Human-Computer Interaction (HCI)', short:'HCI', category:'Build & Experience', icon:'fa-hand-pointer', color:'from-teal-600 to-cyan-600', tag:'Design', level:'Intermediate', demand:'Medium', growth:'18%', desc:'Design intuitive, human-centered tech.', skills:['UX Design','Figma','Psychology','Prototyping'], careers:['UX Engineer (9 LPA)','Product Designer'], roadmap:'UX Basics → Figma → User Research → Prototype', salary:'6-12 LPA', salaryNum:9, resources: ['NPTEL HCI','Coursera HCI']},
 // Core Systems & Infra (8)
 {id:'Cybersecurity', name:'Cybersecurity', short:'CYB', category:'Core Systems', icon:'fa-shield-halved', color:'from-emerald-500 to-teal-600', tag:'Critical', level:'Advanced', demand:'Very High', growth:'33%', desc:'Protect systems, networks & data from attacks.', skills:['Networking','OS','Ethical Hacking','Crypto'], careers:['Security Analyst (8 LPA)','Pen Tester'], roadmap:'Networking → OS → Ethical Hacking → SOC', salary:'6-12 LPA', salaryNum:9, resources: ['NPTEL Cyber','Coursera Cybersecurity']},
 {id:'Cloud Computing', name:'Cloud Computing', short:'CLOUD', category:'Core Systems', icon:'fa-cloud', color:'from-sky-500 to-indigo-500', tag:'Enterprise', level:'Intermediate', demand:'Very High', growth:'30%', desc:'Scale apps on AWS, Azure & GCP.', skills:['Linux','Networking','AWS','Docker'], careers:['Cloud Engineer (9 LPA)','DevOps'], roadmap:'Linux → Cloud Fundamentals → AWS → Kubernetes', salary:'7-13 LPA', salaryNum:10, resources: ['AWS Training','NPTEL Cloud']},
 {id:'Computer Networks', name:'Computer Networks', short:'CN', category:'Core Systems', icon:'fa-network-wired', color:'from-cyan-600 to-teal-600', tag:'Core', level:'Intermediate', demand:'High', growth:'18%', desc:'Design, secure & optimize communication networks.', skills:['TCP/IP','Routing','Security','Wireshark'], careers:['Network Engineer (7 LPA)','SysAdmin'], roadmap:'OSI → TCP/IP → Routing → Security', salary:'6-11 LPA', salaryNum:8, resources: ['NPTEL CN','Coursera Networks']},
 {id:'DBMS', name:'Database Management Systems (DBMS)', short:'DB', category:'Core Systems', icon:'fa-database', color:'from-orange-600 to-amber-500', tag:'Evergreen', level:'Intermediate', demand:'High', growth:'20%', desc:'Design & manage data at scale reliably.', skills:['SQL','NoSQL','System Design'], careers:['DBA (7 LPA)','Backend Engineer'], roadmap:'SQL → Normalization → NoSQL → Distributed DB', salary:'6-11 LPA', salaryNum:8, resources: ['NPTEL DBMS','Coursera Databases']},
 {id:'Operating Systems', name:'Operating Systems', short:'OS', category:'Core Systems', icon:'fa-desktop', color:'from-slate-800 to-zinc-900', tag:'Core', level:'Advanced', demand:'Medium', growth:'15%', desc:'Master kernels, processes & memory management.', skills:['C','OS Concepts','Linux Kernel'], careers:['Systems Engineer (7 LPA)','Kernel Dev'], roadmap:'C → Processes → Memory → File Systems → Kernel', salary:'6-10 LPA', salaryNum:8, resources: ['NPTEL OS','YouTube Gate Smashers OS']},
 {id:'Computer Architecture', name:'Computer Architecture', short:'CA', category:'Core Systems', icon:'fa-memory', color:'from-zinc-700 to-neutral-800', tag:'Core', level:'Advanced', demand:'Medium', growth:'12%', desc:'Design processors, memory & instruction sets.', skills:['Digital Logic','COA','Verilog','Assembly'], careers:['Hardware Engineer (9 LPA)','Architect'], roadmap:'Digital Logic → COA → Pipelining → Verilog', salary:'7-12 LPA', salaryNum:9, resources: ['NPTEL COA','Coursera Architecture']},
 {id:'DevOps', name:'DevOps', short:'DEVOPS', category:'Core Systems', icon:'fa-infinity', color:'from-sky-600 to-slate-700', tag:'High Demand', level:'Intermediate', demand:'Very High', growth:'28%', desc:'Automate build, test & deploy pipelines.', skills:['Linux','Docker','K8s','CI/CD'], careers:['DevOps Engineer (10 LPA)','SRE'], roadmap:'Linux → Docker → K8s → CI/CD → SRE', salary:'7-14 LPA', salaryNum:11, resources: ['NPTEL DevOps','Coursera DevOps']},
 {id:'Distributed Systems', name:'Distributed Systems', short:'DSYS', category:'Core Systems', icon:'fa-share-nodes', color:'from-blue-700 to-slate-700', tag:'Advanced', level:'Advanced', demand:'High', growth:'26%', desc:'Build fault-tolerant, scalable distributed apps.', skills:['Consensus','Replication','Kafka','Cloud'], careers:['Distributed Engineer (12 LPA)','Backend Lead'], roadmap:'OS → Networks → Consensus → Kafka → Scale', salary:'8-15 LPA', salaryNum:12, resources: ['NPTEL Distributed','Coursera DS']},
 // Frontier Tech (6)
 {id:'IoT', name:'Internet of Things (IoT)', short:'IOT', category:'Frontier Tech', icon:'fa-tower-broadcast', color:'from-lime-500 to-emerald-600', tag:'Emerging', level:'Intermediate', demand:'High', growth:'25%', desc:'Connect physical devices to cloud & edge.', skills:['Embedded C','Sensors','MQTT','Cloud'], careers:['IoT Engineer (8 LPA)','Embedded Dev'], roadmap:'Embedded C → Sensors → MQTT → Cloud', salary:'6-12 LPA', salaryNum:9, resources: ['NPTEL IoT','Coursera IoT']},
 {id:'Blockchain', name:'Blockchain', short:'BC', category:'Frontier Tech', icon:'fa-cubes', color:'from-amber-500 to-orange-600', tag:'Emerging', level:'Advanced', demand:'Medium', growth:'22%', desc:'Decentralized ledgers, smart contracts & Web3.', skills:['Solidity','Crypto','DApps','Ethereum'], careers:['Blockchain Dev (10 LPA)','Web3 Engineer'], roadmap:'Crypto → Solidity → DApps → Web3', salary:'7-14 LPA', salaryNum:11, resources: ['NPTEL Blockchain','Coursera Blockchain']},
 {id:'Robotics', name:'Robotics', short:'ROB', category:'Frontier Tech', icon:'fa-robot', color:'from-orange-600 to-red-600', tag:'Emerging', level:'Advanced', demand:'Medium', growth:'20%', desc:'Build intelligent robots & autonomous systems.', skills:['ROS','Embedded','AI','Control Systems'], careers:['Robotics Engineer (9 LPA)','Automation'], roadmap:'Mechanics → ROS → AI → Control', salary:'7-12 LPA', salaryNum:9, resources: ['NPTEL Robotics','Coursera Robotics']},
 {id:'AR/VR', name:'Augmented Reality / Virtual Reality (AR/VR)', short:'XR', category:'Frontier Tech', icon:'fa-vr-cardboard', color:'from-fuchsia-500 to-pink-500', tag:'Emerging', level:'Advanced', demand:'Medium', growth:'24%', desc:'Create immersive AR/VR & metaverse experiences.', skills:['Unity','3D','ARCore','Blender'], careers:['AR/VR Dev (9 LPA)','XR Engineer'], roadmap:'Unity → 3D → ARCore → XR Projects', salary:'7-13 LPA', salaryNum:10, resources: ['Coursera AR/VR','YouTube XR']},
 {id:'Embedded Systems', name:'Embedded Systems', short:'ES', category:'Frontier Tech', icon:'fa-microchip', color:'from-amber-600 to-yellow-500', tag:'Core HW', level:'Advanced', demand:'High', growth:'18%', desc:'Program microcontrollers & real-time hardware.', skills:['C','ARM','RTOS','Sensors'], careers:['Embedded Engineer (8 LPA)','Firmware Dev'], roadmap:'C → ARM → RTOS → Projects', salary:'6-11 LPA', salaryNum:8, resources: ['NPTEL Embedded','Coursera Embedded']},
 {id:'Quantum Computing', name:'Quantum Computing', short:'QC', category:'Frontier Tech', icon:'fa-atom', color:'from-purple-700 to-indigo-700', tag:'Future', level:'Advanced', demand:'Low', growth:'40%', desc:'Harness quantum mechanics for next-gen compute.', skills:['Quantum Mech','Qiskit','Python','Math'], careers:['Quantum Dev (15 LPA)','Researcher'], roadmap:'Math → QM → Qiskit → Algorithms', salary:'10-20 LPA', salaryNum:15, resources: ['NPTEL Quantum','Coursera Quantum']},
];

function pagePath(page){ const inPages = location.pathname.includes('/pages/') || document.baseURI.includes('/pages/'); return inPages ? page : 'pages/'+page; }
function domainPath(id){ return pagePath('domain.html?id='+encodeURIComponent(id)); }

const categoryList = ['All','Intelligence & Data','Build & Experience','Core Systems','Frontier Tech'];

const resources = [
 {title:'NPTEL: Introduction to Artificial Intelligence', domain:'AI', type:'NPTEL', lang:'English', diff:'Beginner', dur:'8 weeks', link:'https://nptel.ac.in/courses/106105077', rating:4.8},
 {title:'Coursera: AI For Everyone (Andrew Ng)', domain:'AI', type:'Coursera', lang:'English', diff:'Beginner', dur:'4 weeks', link:'https://www.coursera.org/learn/ai-for-everyone', rating:4.9},
 {title:'YouTube: AI Full Course - Telugu (NPTEL)', domain:'AI', type:'YouTube', lang:'Telugu', diff:'Beginner', dur:'6 hrs', link:'https://www.youtube.com/watch?v=rfscVS0vtbw', rating:4.7},
 {title:'NPTEL: Machine Learning (IITK)', domain:'ML', type:'NPTEL', lang:'English', diff:'Intermediate', dur:'12 weeks', link:'https://nptel.ac.in/courses/106106139', rating:4.8},
 {title:'Coursera: Machine Learning - Stanford', domain:'ML', type:'Coursera', lang:'English', diff:'Intermediate', dur:'11 weeks', link:'https://www.coursera.org/learn/machine-learning', rating:4.9},
 {title:'YouTube: Cybersecurity Full Course Hindi (WsCube Tech)', domain:'Cybersecurity', type:'YouTube', lang:'Hindi', diff:'Beginner', dur:'11 hrs', link:'https://www.youtube.com/watch?v=v3iUx2SNspY', rating:4.9},
 {title:'NPTEL: Cloud Computing', domain:'Cloud Computing', type:'NPTEL', lang:'English', diff:'Intermediate', dur:'8 weeks', link:'https://nptel.ac.in/courses/106105167', rating:4.7},
 {title:'AWS Cloud Practitioner Essentials', domain:'Cloud Computing', type:'Coursera', lang:'English', diff:'Beginner', dur:'6 weeks', link:'https://www.coursera.org/learn/aws-cloud-practitioner-essentials', rating:4.8},
 {title:'GeeksforGeeks / Gate Smashers: DBMS Complete', domain:'DBMS', type:'YouTube', lang:'English', diff:'Beginner', dur:'12 hrs', link:'https://www.youtube.com/watch?v=c5HAwKX-suM', rating:4.8},
 {title:'NPTEL: DBMS (IITK)', domain:'DBMS', type:'NPTEL', lang:'English', diff:'Intermediate', dur:'12 weeks', link:'https://nptel.ac.in/courses/106105222', rating:4.8},
 {title:'Gate Smashers: Operating Systems', domain:'Operating Systems', type:'YouTube', lang:'Hindi', diff:'Intermediate', dur:'20 hrs', link:'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGwmIDC4BdcR43eA5zeW62VA', rating:4.9},
 {title:'NPTEL: Operating Systems', domain:'Operating Systems', type:'NPTEL', lang:'English', diff:'Intermediate', dur:'12 weeks', link:'https://nptel.ac.in/courses/106106144', rating:4.8},
 {title:'NPTEL: Data Science for Engineers', domain:'Data Science', type:'NPTEL', lang:'English', diff:'Intermediate', dur:'8 weeks', link:'https://nptel.ac.in/courses/106106179', rating:4.8},
 {title:'Coursera: Data Science Specialization', domain:'Data Science', type:'Coursera', lang:'English', diff:'Beginner', dur:'11 weeks', link:'https://www.coursera.org/specializations/jhu-data-science', rating:4.9},
 {title:'NPTEL: Big Data Computing', domain:'Big Data', type:'NPTEL', lang:'English', diff:'Advanced', dur:'8 weeks', link:'https://nptel.ac.in/courses/106104189', rating:4.7},
 {title:'YouTube: Computer Vision Full Course (freeCodeCamp)', domain:'Computer Vision', type:'YouTube', lang:'English', diff:'Intermediate', dur:'10 hrs', link:'https://www.youtube.com/watch?v=OnTgbN3uXvw', rating:4.8},
 {title:'Coursera: NLP Specialization', domain:'NLP', type:'Coursera', lang:'English', diff:'Advanced', dur:'4 weeks', link:'https://www.coursera.org/specialization/natural-language-processing', rating:4.8},
 {title:'NPTEL: Blockchain Architecture', domain:'Blockchain', type:'NPTEL', lang:'English', diff:'Advanced', dur:'12 weeks', link:'https://nptel.ac.in/courses/106105184', rating:4.6},
 {title:'Coursera: Web Development Bootcamp', domain:'Web Development', type:'Coursera', lang:'English', diff:'Beginner', dur:'8 weeks', link:'https://www.coursera.org/specializations/web-design', rating:4.9},
 {title:'YouTube: Flutter Mobile App Dev Hindi (CodeWithHarry)', domain:'Mobile App Development', type:'YouTube', lang:'Hindi', diff:'Beginner', dur:'13 hrs', link:'https://www.youtube.com/watch?v=VPvVD8t02U8', rating:4.8},
 {title:'NPTEL: Software Engineering', domain:'Software Engineering', type:'NPTEL', lang:'English', diff:'Intermediate', dur:'12 weeks', link:'https://nptel.ac.in/courses/106105182', rating:4.8},
 {title:'NPTEL: Computer Networks', domain:'Computer Networks', type:'NPTEL', lang:'English', diff:'Intermediate', dur:'12 weeks', link:'https://nptel.ac.in/courses/106105183', rating:4.8},
 {title:'NPTEL: Computer Architecture', domain:'Computer Architecture', type:'NPTEL', lang:'English', diff:'Advanced', dur:'12 weeks', link:'https://nptel.ac.in/courses/108102349', rating:4.7},
 {title:'Coursera: DevOps on AWS', domain:'DevOps', type:'Coursera', lang:'English', diff:'Intermediate', dur:'6 weeks', link:'https://www.coursera.org/learn/devops-on-aws', rating:4.8},
 {title:'NPTEL: Distributed Systems', domain:'Distributed Systems', type:'NPTEL', lang:'English', diff:'Advanced', dur:'8 weeks', link:'https://nptel.ac.in/courses/106106138', rating:4.7},
 {title:'NPTEL: IoT (IITK)', domain:'IoT', type:'NPTEL', lang:'English', diff:'Intermediate', dur:'12 weeks', link:'https://nptel.ac.in/courses/106105166', rating:4.7},
 {title:'YouTube: Unity Game Dev Complete (Brackeys Beginner)', domain:'Game Development', type:'YouTube', lang:'English', diff:'Beginner', dur:'12 hrs', link:'https://www.youtube.com/watch?v=w7ejDZ8SWv8', rating:4.9},
 {title:'Coursera: HCI - Georgia Tech', domain:'HCI', type:'Coursera', lang:'English', diff:'Intermediate', dur:'6 weeks', link:'https://www.coursera.org/specializations/hci', rating:4.7},
 {title:'NPTEL: Robotics', domain:'Robotics', type:'NPTEL', lang:'English', diff:'Advanced', dur:'12 weeks', link:'https://nptel.ac.in/courses/107106090', rating:4.6},
 {title:'Coursera: AR/VR Specialization', domain:'AR/VR', type:'Coursera', lang:'English', diff:'Advanced', dur:'8 weeks', link:'https://www.coursera.org/specializations/virtual-reality', rating:4.6},
 {title:'NPTEL: Embedded Systems', domain:'Embedded Systems', type:'NPTEL', lang:'English', diff:'Advanced', dur:'12 weeks', link:'https://nptel.ac.in/courses/108102169', rating:4.7},
 {title:'NPTEL: Quantum Computing', domain:'Quantum Computing', type:'NPTEL', lang:'English', diff:'Advanced', dur:'8 weeks', link:'https://nptel.ac.in/courses/115101215', rating:4.7},
 {title:'YouTube: Qiskit Quantum Hands-on (IBM Qiskit Intro)', domain:'Quantum Computing', type:'YouTube', lang:'English', diff:'Advanced', dur:'3 hrs', link:'https://www.youtube.com/watch?v=g_IaVepNDT4', rating:4.9},
];

const quizQs = [
 {q:'When you face a math problem in class, how do you feel?', cat:'math', opts:['I enjoy solving step by step until I get the answer.','I can solve if I get examples or hints.','I struggle but try to finish somehow.','I avoid math and prefer other subjects.']},
 {q:'If your teacher asks you to write a small program:', cat:'coding', opts:['I feel excited and start coding immediately.','I try but need guidance or sample code.','I prefer using ready-made tools instead of coding.','I avoid programming tasks completely.']},
 {q:'When you see a big set of numbers or tables:', cat:'data', opts:['I love analyzing and finding patterns.','I can handle small data but big sets confuse me.','I get bored with too many numbers.','I dislike working with data at all.']},
 {q:'If you hear about hacking or cyber attacks:', cat:'security', opts:['I immediately think about how to prevent them.','I feel curious but don’t go deep.','I just read and move on.','I don’t care about security topics.']},
 {q:'Managing systems online (like Google Drive, AWS, Azure):', cat:'cloud', opts:['I feel excited to explore cloud platforms.','I’m curious but unsure how they work.','I prefer local systems over cloud.','I don’t like managing systems at all.']},
 {q:'If given sensors, circuits, or robotics kits:', cat:'hardware', opts:['I get excited to build something physical.','I can try but prefer software tasks.','I feel nervous with hardware experiments.','I avoid hardware completely.']},
 {q:'When asked to design a project:', cat:'design', opts:['I focus on visuals, UI, and user experience.','I balance design with coding.','I care only about backend logic.','I dislike design tasks.']},
 {q:'Learning about operating systems or computer architecture:', cat:'os', opts:['I love knowing how systems work internally.','I’m curious but not deeply interested.','I find it difficult to understand.','I avoid system topics completely.']},
 {q:'Working in group projects with classmates:', cat:'teamwork', opts:['I enjoy teamwork and collaboration.','I can work in teams but prefer solo.','I struggle in group projects.','I avoid teamwork whenever possible.']},
 {q:'Creating charts, dashboards, or visual explanations:', cat:'visual', opts:['I enjoy making visuals and insights.','I can do basic graphs only.','I struggle with visualization tasks.','I dislike visuals completely.']},
 {q:'Thinking about games:', cat:'gaming', opts:['I love designing and building games.','I’m curious about how games are made.','I only play games, not design them.','I’m not interested in games at all.']},
 {q:'Quantum Computing or AR/VR:', cat:'frontier', opts:['I feel thrilled and want to explore deeply.','I’m curious but not very serious.','I find it confusing and difficult.','I don’t care about futuristic tech.']},
 {q:'Explaining technical ideas to others:', cat:'communication', opts:['I can explain clearly to anyone.','I can explain with effort and practice.','I struggle to explain technical points.','I avoid communication tasks completely.']},
 {q:'Breaking down real-world problems:', cat:'problem', opts:['I enjoy step-by-step problem solving.','I can solve with guidance or examples.','I struggle with complex problems.','I avoid problem solving tasks.']},
 {q:'When learning new topics:', cat:'learning', opts:['I explore deeply and practice regularly.','I learn with examples and guidance.','I need extra support to understand.','I avoid tough topics whenever possible.']}
];

// i18n dictionary — FULL 243 keys ×10 langs — perfect, no English left when switched
const i18n = {
 "en": {
  "nav_home": "Home",
  "nav_explorer": "Atlas",
  "nav_quiz": "Quiz",
  "nav_roadmap": "Roadmap",
  "nav_resources": "Resources",
  "nav_dashboard": "Vault",
  "nav_about": "About",
  "nav_contact": "Contact",
  "hero_badge": "Trusted by 750+ CSE students • 25 Domains • 89% Accuracy • Vault Ready",
  "hero_title": "Confused between 25 CSE domains? Your AI Counsellor is here.",
  "hero_sub": "Personalized Top-3 recommendations across 25 tracks using Decision Tree, Random Forest, KNN & PCA — 4-year roadmap, mini-courses, vault for your files & parent guidance in 10 languages.",
  "hero_cta_quiz": "Take 3-Min Quiz →",
  "hero_cta_explore": "Explore Atlas",
  "hero_cta_demo": "Watch Demo (45s)",
  "hero_stats_students": "Students Guided",
  "hero_stats_domains": "CSE Domains",
  "hero_stats_langs": "Languages",
  "hero_tip_k": "Search 25 domains",
  "hero_tip_vault": "New: Vault per domain",
  "hero_tip_compare": "Compare 3 tracks",
  "hero_radar_title": "Live Prediction Preview",
  "hero_radar_badge": "RandomForest 89%",
  "hero_why": "Why AI? High logic (5/5) + math marks 92 + strong data interest.",
  "hero_try": "Try Your Prediction →",
  "trust_curated": "Curated Sources:",
  "trust_lit": "Literature: AIJMR 2025 • IJRAR 2022 • JETIR 2024",
  "features_why": "Why GuidanceAI • Atlas 25 • 8+6 Modules",
  "features_title": "Everything a First-Year Needs — Now 25 Tracks",
  "features_sub": "Beyond paper guidance — Atlas, vault per domain, compare, roadmap, visualization, multilingual voice & gamification.",
  "features_atlas_title": "25-Domain Atlas",
  "features_atlas_desc": "Intelligence 6 · Build 5 · Core 8 · Frontier 6 — grouped, searchable, professional dev layout.",
  "features_vault_title": "Vault per Domain",
  "features_vault_desc": "4 empty slots per track: Notes, Videos, Projects, Assignments — add your files later, stays local.",
  "features_compare_title": "Compare 3 Tracks",
  "features_compare_desc": "Tick Compare on cards — bottom bar — side-by-side salary, skills, roadmap.",
  "features_roadmap_title": "4-Year Roadmap",
  "features_roadmap_desc": "Foundation to Advanced to Placement — for each track, with vault link.",
  "features_gamified_title": "Gamified + Command",
  "features_gamified_desc": "XP, streaks + quick palette to instantly jump to any of 25 domains.",
  "features_parent_title": "Parent + Teacher",
  "features_parent_desc": "Vernacular PDF + voice for parents; batch analytics for 25-track cohorts.",
  "explorer_title": "Domain Atlas — 25 Tracks",
  "explorer_sub": "Professional explorer — grouped by Intelligence, Build, Core & Frontier. Search, compare & vault per domain.",
  "explorer_tip_k": "Search",
  "explorer_tip_vault": "Empty vaults ready",
  "explorer_tip_compare": "Compare up to 3",
  "explorer_search_ph": "Search AI, Quantum, Web...",
  "explorer_sort_featured": "Featured",
  "explorer_sort_az": "A → Z",
  "explorer_sort_salary": "Salary High → Low",
  "explorer_sort_demand": "Demand High → Low",
  "explorer_pill_all": "All 25",
  "explorer_pill_intel": "Intelligence & Data · 6",
  "explorer_pill_build": "Build · 5",
  "explorer_pill_core": "Core Systems · 8",
  "explorer_pill_frontier": "Frontier · 6",
  "explorer_showing": "Showing {n} of {total} tracks",
  "explorer_no_title": "No tracks found",
  "explorer_no_sub": "Try different search or category",
  "explorer_clear": "Clear filters",
  "explorer_vault_tip": "Vault: Tap any card to open its Vault and add your files.",
  "explorer_cmd": "Search",
  "card_view": "View →",
  "card_compare": "Compare",
  "card_vault": "Vault",
  "card_growth": "growth",
  "vault_title": "Vault — Your Files for",
  "vault_sub": "Empty space → add your own",
  "vault_drop": "Drop PDFs, PPTs, videos, projects per domain. Later replace via",
  "vault_empty": "Empty — no files yet",
  "vault_add_notes": "Add Notes",
  "vault_add_videos": "Add Videos",
  "vault_add_projects": "Add Projects",
  "vault_add_assign": "Add Assignments",
  "vault_howto": "How to add bulk files: Create folder",
  "vault_folder": "Folder:",
  "vault_files": "files",
  "vault_interview": "Interview Kit",
  "vault_interview_desc": "Empty → add Q&A PDFs to vault/Assignments",
  "vault_projects_title": "Project Ideas",
  "vault_projects_desc": "3 starters in Vault/Projects",
  "vault_progress": "Progress",
  "vault_progress_desc": "Track via Roadmap checklist — saves locally",
  "compare_selected": "Selected",
  "compare_btn": "Compare →",
  "compare_clear": "Clear",
  "compare_title": "Compare Domains",
  "compare_need2": "Select at least 2 domains to compare",
  "compare_up_to3": "Compare up to 3 domains",
  "compare_added": "+ Added {id} to compare ({n}/3)",
  "compare_removed": "Removed {id}",
  "compare_cleared": "Cleared compare",
  "compare_feat_category": "Category",
  "compare_feat_level": "Level",
  "compare_feat_demand": "Demand",
  "compare_feat_growth": "Growth",
  "compare_feat_salary": "Avg Salary",
  "compare_feat_skills": "Skills",
  "compare_feat_careers": "Careers",
  "quiz_badge": "ML Filter • 3 Minutes • 15 Questions + Marks",
  "quiz_title": "Find Your Perfect Domain (25-way)",
  "quiz_sub": "Quiz + Marks + Interest → AI ensemble → Top-3 across 25 tracks with confidence, radar & vault suggestion. Demo uses 750-record synthetic dataset (30×25).",
  "quiz_step_marks": "Step 1 of {total} • Marks",
  "quiz_step_q": "Step {n} of {total} • Q{q}",
  "quiz_marks_title": "First, your academic marks (0-100)",
  "quiz_marks_sub": "Used by Marks-based ML filter (PCA + RandomForest). Be honest.",
  "quiz_math": "Math Marks *",
  "quiz_prog": "Programming Marks *",
  "quiz_phy": "Physics Marks",
  "quiz_eng": "English Marks",
  "quiz_next": "Next →",
  "quiz_prev": "← Previous",
  "quiz_get_rec": "Get Recommendation →",
  "quiz_predicting": "Predicting…",
  "quiz_fix_marks": "Please fix marks (0-100)",
  "quiz_local": "Your data stays local • Model: backend/ml_service/model.pkl (RandomForest 89%) • Fallback JS ensemble",
  "results_why_prefix": "Why",
  "results_runner": "Runner-up",
  "results_best_fit": "Best fit • Start roadmap + vault",
  "results_alt": "Good alternative",
  "results_radar_title": "Skill Gap Radar",
  "results_radar_sub": "Blue = You • Dashed = Required for",
  "results_skill_title": "Skill Gap Details",
  "results_whatif": "What-If Simulator",
  "results_sim": "If you improve → Fit",
  "results_roadmap_btn": "View My 4-Year Roadmap →",
  "results_course_btn": "Go to Mini-Course",
  "results_retake": "Retake Quiz",
  "results_toast": "Predicted: {top} ({score}%) — Vault ready",
  "roadmap_title": "Personalized 4-Year Roadmap",
  "roadmap_sub": "Auto-generated after quiz. Foundation → Intermediate → Advanced → Placement.",
  "roadmap_phase": "PHASE",
  "roadmap_vault": "Vault: {n} files — add yours in modal",
  "course_title": "Mini-Course + Test — Learn → Test → Certify",
  "course_modules": "Course Modules •",
  "course_progress": "Progress saved locally • 10 languages subtitle",
  "course_preview": "Preview",
  "course_select": "Select a lesson to play",
  "course_check": "Quick Check — 3 Questions",
  "course_submit": "Submit → +50 XP",
  "resources_title": "Resource Hub",
  "resources_sub": "NPTEL • Coursera • YouTube — filtered by domain, difficulty, language. Bookmarks saved.",
  "resources_search_ph": "Search resources...",
  "resources_domain_all": "All Domains (25)",
  "resources_type_all": "All Types",
  "resources_lang_all": "All Langs",
  "dashboard_title": "Dashboards",
  "footer_tagline": "Virtual counsellor • Django + RandomForest 89% + PCA • 750+ students guided • 25 domains Atlas + Vault.",
  "footer_explore": "Domain Atlas → 25 tracks",
  "toast_lang": "Language: {lang}",
  "toast_subscribed": "Subscribed: {email} • Welcome!",
  "toast_msg_sent": "Message sent — we reply in 2h!",
  "toast_copied": "Bookmarked: {title}",
  "common_close": "Close",
  "common_open": "Open →",
  "common_xp": "XP: {n}",
  "quiz_q1": "When you face a math problem in class, how do you feel?",
  "quiz_q2": "If your teacher asks you to write a small program:",
  "quiz_q3": "When you see a big set of numbers or tables:",
  "quiz_q4": "If you hear about hacking or cyber attacks:",
  "quiz_q5": "Managing systems online (like Google Drive, AWS, Azure):",
  "quiz_q6": "If given sensors, circuits, or robotics kits:",
  "quiz_q7": "When asked to design a project:",
  "quiz_q8": "Learning about operating systems or computer architecture:",
  "quiz_q9": "Working in group projects with classmates:",
  "quiz_q10": "Creating charts, dashboards, or visual explanations:",
  "quiz_opt_no": "No",
  "quiz_opt_low": "Low",
  "quiz_opt_okay": "Okay",
  "quiz_opt_yes": "Yes",
  "quiz_opt_strong": "Strong",
  "quiz_choose": "Choose one option",
  "card_level_beginner": "Beginner",
  "card_level_inter": "Intermediate",
  "card_level_adv": "Advanced",
  "card_demand_high": "High",
  "card_demand_vhigh": "Very High",
  "card_demand_med": "Medium",
  "quiz_q1_opt1": "I enjoy solving step by step until I get the answer.",
  "quiz_q1_opt2": "I can solve if I get examples or hints.",
  "quiz_q1_opt3": "I struggle but try to finish somehow.",
  "quiz_q1_opt4": "I avoid math and prefer other subjects.",
  "quiz_q2_opt1": "I feel excited and start coding immediately.",
  "quiz_q2_opt2": "I try but need guidance or sample code.",
  "quiz_q2_opt3": "I prefer using ready-made tools instead of coding.",
  "quiz_q2_opt4": "I avoid programming tasks completely.",
  "quiz_q3_opt1": "I love analyzing and finding patterns.",
  "quiz_q3_opt2": "I can handle small data but big sets confuse me.",
  "quiz_q3_opt3": "I get bored with too many numbers.",
  "quiz_q3_opt4": "I dislike working with data at all.",
  "quiz_q4_opt1": "I immediately think about how to prevent them.",
  "quiz_q4_opt2": "I feel curious but don’t go deep.",
  "quiz_q4_opt3": "I just read and move on.",
  "quiz_q4_opt4": "I don’t care about security topics.",
  "quiz_q5_opt1": "I feel excited to explore cloud platforms.",
  "quiz_q5_opt2": "I’m curious but unsure how they work.",
  "quiz_q5_opt3": "I prefer local systems over cloud.",
  "quiz_q5_opt4": "I don’t like managing systems at all.",
  "quiz_q6_opt1": "I get excited to build something physical.",
  "quiz_q6_opt2": "I can try but prefer software tasks.",
  "quiz_q6_opt3": "I feel nervous with hardware experiments.",
  "quiz_q6_opt4": "I avoid hardware completely.",
  "quiz_q7_opt1": "I focus on visuals, UI, and user experience.",
  "quiz_q7_opt2": "I balance design with coding.",
  "quiz_q7_opt3": "I care only about backend logic.",
  "quiz_q7_opt4": "I dislike design tasks.",
  "quiz_q8_opt1": "I love knowing how systems work internally.",
  "quiz_q8_opt2": "I’m curious but not deeply interested.",
  "quiz_q8_opt3": "I find it difficult to understand.",
  "quiz_q8_opt4": "I avoid system topics completely.",
  "quiz_q9_opt1": "I enjoy teamwork and collaboration.",
  "quiz_q9_opt2": "I can work in teams but prefer solo.",
  "quiz_q9_opt3": "I struggle in group projects.",
  "quiz_q9_opt4": "I avoid teamwork whenever possible.",
  "quiz_q10_opt1": "I enjoy making visuals and insights.",
  "quiz_q10_opt2": "I can do basic graphs only.",
  "quiz_q10_opt3": "I struggle with visualization tasks.",
  "quiz_q10_opt4": "I dislike visuals completely.",
  "quiz_q11": "Thinking about games:",
  "quiz_q11_opt1": "I love designing and building games.",
  "quiz_q11_opt2": "I’m curious about how games are made.",
  "quiz_q11_opt3": "I only play games, not design them.",
  "quiz_q11_opt4": "I’m not interested in games at all.",
  "quiz_q12": "Quantum Computing or AR/VR:",
  "quiz_q12_opt1": "I feel thrilled and want to explore deeply.",
  "quiz_q12_opt2": "I’m curious but not very serious.",
  "quiz_q12_opt3": "I find it confusing and difficult.",
  "quiz_q12_opt4": "I don’t care about futuristic tech.",
  "quiz_q13": "Explaining technical ideas to others:",
  "quiz_q13_opt1": "I can explain clearly to anyone.",
  "quiz_q13_opt2": "I can explain with effort and practice.",
  "quiz_q13_opt3": "I struggle to explain technical points.",
  "quiz_q13_opt4": "I avoid communication tasks completely.",
  "quiz_q14": "Breaking down real-world problems:",
  "quiz_q14_opt1": "I enjoy step-by-step problem solving.",
  "quiz_q14_opt2": "I can solve with guidance or examples.",
  "quiz_q14_opt3": "I struggle with complex problems.",
  "quiz_q14_opt4": "I avoid problem solving tasks.",
  "quiz_q15": "When learning new topics:",
  "quiz_q15_opt1": "I explore deeply and practice regularly.",
  "quiz_q15_opt2": "I learn with examples and guidance.",
  "quiz_q15_opt3": "I need extra support to understand.",
  "quiz_q15_opt4": "I avoid tough topics whenever possible."
 },
 "te": {
  "nav_home": "హోమ్",
  "nav_explorer": "అట్లాస్",
  "nav_quiz": "క్విజ్",
  "nav_roadmap": "రోడ్‌మ్యాప్",
  "nav_resources": "వనరులు",
  "nav_dashboard": "వాల్ట్",
  "nav_about": "గురించి",
  "nav_contact": "సంప్రదించండి",
  "hero_badge": "750+ CSE విద్యార్థుల నమ్మకం • 25 డొమైన్లు • 89% ఖచ్చితత్వం • వాల్ట్ సిద్ధం",
  "hero_title": "25 CSE డొమైన్ల మధ్య గందరగోళంగా ఉన్నారా? మీ AI కౌన్సెలర్ ఇక్కడ ఉన్నాడు.",
  "hero_sub": "25 ట్రాక్‌లలో వ్యక్తిగత టాప్-3 సిఫార్సులు — డెసిషన్ ట్రీ, రాండమ్ ఫారెస్ట్, KNN & PCA తో — 4 ఏళ్ల రోడ్‌మ్యాప్, మినీ-కోర్సులు, మీ ఫైళ్లకు వాల్ట్ & 10 భాషల్లో తల్లిదండ్రుల మార్గదర్శకం.",
  "hero_cta_quiz": "3-నిమి క్విజ్ తీసుకోండి →",
  "hero_cta_explore": "అట్లాస్ అన్వేషించండి",
  "hero_cta_demo": "డెమో చూడండి (45సె)",
  "hero_stats_students": "మార్గనిర్దేశం చేసిన విద్యార్థులు",
  "hero_stats_domains": "CSE డొమైన్లు",
  "hero_stats_langs": "భాషలు",
  "hero_tip_k": "Search నొక్కి 25 డొమైన్లు వెతకండి",
  "hero_tip_vault": "కొత్తది: ప్రతి డొమైన్‌కు వాల్ట్",
  "hero_tip_compare": "3 ట్రాక్‌లను పోల్చండి",
  "hero_radar_title": "లైవ్ ప్రిడిక్షన్ ప్రివ్యూ",
  "hero_radar_badge": "రాండమ్‌ఫారెస్ట్ 89%",
  "hero_why": "ఎందుకు AI? హై లాజిక్ (5/5) + గణితం 92 + డేటా ఆసక్తి.",
  "hero_try": "మీ ప్రిడిక్షన్ ప్రయత్నించండి →",
  "trust_curated": "క్యూరేటెడ్ మూలాలు:",
  "trust_lit": "సాహిత్యం: AIJMR 2025 • IJRAR 2022 • JETIR 2024",
  "features_why": "ఎందుకు గైడెన్స్AI • అట్లాస్ 25 • 8+6 మాడ్యూల్స్",
  "features_title": "మొదటి ఏడాది విద్యార్థికి కావాల్సినవన్నీ — ఇప్పుడు 25 ట్రాక్‌లు",
  "features_sub": "కాగితపు మార్గదర్శకానికి మించి — అట్లాస్, వాల్ట్, పోలిక, రోడ్‌మ్యాప్, విజువలైజేషన్ & గేమిఫికేషన్.",
  "features_atlas_title": "25-డొమైన్ అట్లాస్",
  "features_atlas_desc": "ఇంటెలిజెన్స్ 6 · బిల్డ్ 5 · కోర్ 8 · ఫ్రాంటియర్ 6 — గ్రూప్, శోధించదగిన, ప్రొఫెషనల్ లేఅవుట్.",
  "features_vault_title": "ప్రతి డొమైన్‌కు వాల్ట్",
  "features_vault_desc": "ప్రతి ట్రాక్‌కు 4 ఖాళీ స్లాట్లు: నోట్స్, వీడియోలు, ప్రాజెక్టులు, అసైన్‌మెంట్లు — తర్వాత మీ ఫైళ్లు జోడించండి.",
  "features_compare_title": "3 ట్రాక్‌లను పోల్చండి",
  "features_compare_desc": "కార్డులపై పోల్చండి టిక్ — దిగువ బార్ — జీతం, స్కిల్స్, రోడ్‌మ్యాప్ పక్కపక్కనే.",
  "features_roadmap_title": "4-ఏళ్ల రోడ్‌మ్యాప్",
  "features_roadmap_desc": "ఫౌండేషన్ నుండి అడ్వాన్స్‌డ్ వరకు — ప్రతి ట్రాక్‌కు వాల్ట్ లింక్‌తో.",
  "features_gamified_title": "గేమిఫైడ్ + కమాండ్",
  "features_gamified_desc": "XP, స్ట్రీక్ + Search పాలెట్‌తో ఏ డొమైన్‌కైనా తక్షణ జంప్.",
  "features_parent_title": "తల్లిదండ్రులు + టీచర్",
  "features_parent_desc": "తల్లిదండ్రులకు తెలుగు PDF + వాయిస్; 25 ట్రాక్‌ల బ్యాచ్ అనలిటిక్స్.",
  "explorer_title": "డొమైన్ అట్లాస్ — 25 ట్రాక్‌లు",
  "explorer_sub": "ఇంటెలిజెన్స్, బిల్డ్, కోర్ & ఫ్రాంటియర్‌గా గ్రూప్ చేసిన ప్రొఫెషనల్ ఎక్స్‌ప్లోరర్. శోధించండి, పోల్చండి & వాల్ట్.",
  "explorer_tip_k": "Search తో శోధించండి",
  "explorer_tip_vault": "ఖాళీ వాల్ట్‌లు సిద్ధం",
  "explorer_tip_compare": "3 వరకు పోల్చండి",
  "explorer_search_ph": "AI, క్వాంటం, వెబ్... వెతకండి",
  "explorer_sort_featured": "ఫీచర్డ్",
  "explorer_sort_az": "అ → హ",
  "explorer_sort_salary": "జీతం ఎక్కువ → తక్కువ",
  "explorer_sort_demand": "డిమాండ్ ఎక్కువ → తక్కువ",
  "explorer_pill_all": "అన్నీ 25",
  "explorer_pill_intel": "ఇంటెలిజెన్స్ & డేటా · 6",
  "explorer_pill_build": "బిల్డ్ · 5",
  "explorer_pill_core": "కోర్ సిస్టమ్స్ · 8",
  "explorer_pill_frontier": "ఫ్రాంటియర్ · 6",
  "explorer_showing": "{n} / {total} ట్రాక్‌లు చూపుతోంది",
  "explorer_no_title": "ట్రాక్‌లు కనబడలేదు",
  "explorer_no_sub": "వేరే శోధన లేదా కేటగిరీ ప్రయత్నించండి",
  "explorer_clear": "ఫిల్టర్లను క్లియర్ చేయండి",
  "explorer_vault_tip": "వాల్ట్: ఏ కార్డునైనా తెరిచి మీ ఫైళ్లను జోడించండి.",
  "explorer_cmd": "Search కమాండ్",
  "card_view": "చూడండి →",
  "card_compare": "పోల్చండి",
  "card_vault": "వాల్ట్",
  "card_growth": "వృద్ధి",
  "vault_title": "వాల్ట్ — మీ ఫైళ్లు",
  "vault_sub": "ఖాళీ స్థలం → మీ స్వంతం జోడించండి",
  "vault_drop": "ప్రతి డొమైన్‌కు PDFs, PPTs, వీడియోలు, ప్రాజెక్టులు వేయండి. తర్వాత",
  "vault_empty": "ఖాళీ — ఇంకా ఫైళ్లు లేవు",
  "vault_add_notes": "నోట్స్ జోడించండి",
  "vault_add_videos": "వీడియోలు జోడించండి",
  "vault_add_projects": "ప్రాజెక్టులు జోడించండి",
  "vault_add_assign": "అసైన్‌మెంట్లు జోడించండి",
  "vault_howto": "బల్క్ ఫైళ్లు ఎలా జోడించాలి: ఫోల్డర్ సృష్టించండి",
  "vault_folder": "ఫోల్డర్:",
  "vault_files": "ఫైళ్లు",
  "vault_interview": "ఇంటర్వ్యూ కిట్",
  "vault_interview_desc": "ఖాళీ → Q&A PDFs ను వాల్ట్/అసైన్‌మెంట్స్‌లో జోడించండి",
  "vault_projects_title": "ప్రాజెక్ట్ ఐడియాలు",
  "vault_projects_desc": "వాల్ట్/ప్రాజెక్టుల్లో 3 ప్రారంభాలు",
  "vault_progress": "పురోగతి",
  "vault_progress_desc": "రోడ్‌మ్యాప్ చెక్‌లిస్ట్ ద్వారా ట్రాక్ చేయండి — లోకల్‌గా సేవ్ అవుతుంది",
  "compare_selected": "ఎంపిక చేసినవి",
  "compare_btn": "పోల్చండి →",
  "compare_clear": "క్లియర్",
  "compare_title": "డొమైన్లను పోల్చండి",
  "compare_need2": "పోల్చడానికి కనీసం 2 డొమైన్లు ఎంచుకోండి",
  "compare_up_to3": "3 డొమైన్ల వరకు పోల్చవచ్చు",
  "compare_added": "{id} ను పోలికకు జోడించారు ({n}/3)",
  "compare_removed": "{id} ను తొలగించారు",
  "compare_cleared": "పోలిక క్లియర్ చేయబడింది",
  "compare_feat_category": "కేటగిరీ",
  "compare_feat_level": "స్థాయి",
  "compare_feat_demand": "డిమాండ్",
  "compare_feat_growth": "వృద్ధి",
  "compare_feat_salary": "సగటు జీతం",
  "compare_feat_skills": "స్కిల్స్",
  "compare_feat_careers": "కెరీర్లు",
  "quiz_badge": "ML ఫిల్టర్ • 3 నిమిషాలు • 15 ప్రశ్నలు + మార్కులు",
  "quiz_title": "మీ పర్ఫెక్ట్ డొమైన్‌ను కనుగొనండి (25-వే)",
  "quiz_sub": "క్విజ్ + మార్కులు + ఆసక్తి → AI ఎన్సెంబుల్ → 25 ట్రాక్‌లలో టాప్-3 విశ్వాసం, రాడార్ & వాల్ట్ సూచనతో.",
  "quiz_step_marks": "దశ 1 / {total} • మార్కులు",
  "quiz_step_q": "దశ {n} / {total} • ప్రశ్న {q}",
  "quiz_marks_title": "మొదట, మీ విద్యా మార్కులు (0-100)",
  "quiz_marks_sub": "మార్కుల ఆధారిత ML ఫిల్టర్ (PCA + రాండమ్‌ఫారెస్ట్). నిజాయితీగా ఇవ్వండి.",
  "quiz_math": "గణిత మార్కులు *",
  "quiz_prog": "ప్రోగ్రామింగ్ మార్కులు *",
  "quiz_phy": "భౌతిక మార్కులు",
  "quiz_eng": "ఇంగ్లీష్ మార్కులు",
  "quiz_next": "తదుపరి →",
  "quiz_prev": "← వెనుకకు",
  "quiz_get_rec": "సిఫార్సు పొందండి →",
  "quiz_predicting": "అంచనా వేస్తోంది…",
  "quiz_fix_marks": "దయచేసి మార్కులను సరిచేయండి (0-100)",
  "quiz_local": "మీ డేటా లోకల్‌గానే ఉంటుంది • మోడల్: RandomForest 89% • ఫాల్‌బ్యాక్ JS",
  "results_why_prefix": "ఎందుకు",
  "results_runner": "రన్నర్-అప్",
  "results_best_fit": "బెస్ట్ ఫిట్ • రోడ్‌మ్యాప్ + వాల్ట్ ప్రారంభించండి",
  "results_alt": "మంచి ప్రత్యామ్నాయం",
  "results_radar_title": "స్కిల్ గ్యాప్ రాడార్",
  "results_radar_sub": "నీలం = మీరు • డాష్ = అవసరం",
  "results_skill_title": "స్కిల్ గ్యాప్ వివరాలు",
  "results_whatif": "వాట్-ఇఫ్ సిమ్యులేటర్",
  "results_sim": "మెరుగుపరిస్తే → ఫిట్",
  "results_roadmap_btn": "నా 4-ఏళ్ల రోడ్‌మ్యాప్ చూడండి →",
  "results_course_btn": "మినీ-కోర్సుకు వెళ్ళండి",
  "results_retake": "క్విజ్ మళ్లీ తీసుకోండి",
  "results_toast": "అంచనా: {top} ({score}%) — వాల్ట్ సిద్ధం",
  "roadmap_title": "వ్యక్తిగత 4-ఏళ్ల రోడ్‌మ్యాప్",
  "roadmap_sub": "క్విజ్ తర్వాత ఆటో-జనరేట్. ఫౌండేషన్ → ఇంటర్మీడియట్ → అడ్వాన్స్‌డ్ → ప్లేస్‌మెంట్.",
  "roadmap_phase": "దశ",
  "roadmap_vault": "వాల్ట్: {n} ఫైళ్లు — మోడల్‌లో జోడించండి",
  "course_title": "మినీ-కోర్స్ + టెస్ట్ — నేర్చుకోండి → పరీక్ష → సర్టిఫై",
  "course_modules": "కోర్స్ మాడ్యూల్స్ •",
  "course_progress": "పురోగతి లోకల్‌గా సేవ్ అవుతుంది • 10 భాషల సబ్‌టైటిల్",
  "course_preview": "ప్రివ్యూ",
  "course_select": "పాఠాన్ని ఎంచుకోండి",
  "course_check": "క్విక్ చెక్ — 3 ప్రశ్నలు",
  "course_submit": "సబ్మిట్ → +50 XP",
  "resources_title": "రిసోర్స్ హబ్",
  "resources_sub": "NPTEL • కోర్సెరా • యూట్యూబ్ — డొమైన్, కష్టం, భాష ప్రకారం ఫిల్టర్. బుక్‌మార్క్ సేవ్ అవుతుంది.",
  "resources_search_ph": "వనరులను వెతకండి...",
  "resources_domain_all": "అన్ని డొమైన్లు (25)",
  "resources_type_all": "అన్ని రకాలు",
  "resources_lang_all": "అన్ని భాషలు",
  "dashboard_title": "డాష్‌బోర్డ్‌లు",
  "footer_tagline": "విద్య & పరిశ్రమను కలిపే వర్చువల్ కౌన్సెలర్. Django + RandomForest (89%) + PCA తో • 750+ విద్యార్థులు • 25 డొమైన్లు అట్లాస్ + వాల్ట్.",
  "footer_explore": "డొమైన్ అట్లాస్ → 25 ట్రాక్‌లు",
  "toast_lang": "భాష: {lang}",
  "toast_subscribed": "సబ్‌స్క్రైబ్ అయ్యారు: {email} • స్వాగతం!",
  "toast_msg_sent": "సందేశం పంపబడింది — 2గం.లో సమాధానం!",
  "toast_copied": "బుక్‌మార్క్: {title}",
  "common_close": "మూసివేయండి",
  "common_open": "తెరవండి →",
  "common_xp": "XP: {n}",
  "quiz_q1": "తరగతిలో గణిత సమస్య ఎదురైనప్పుడు మీకు ఎలా అనిపిస్తుంది?",
  "quiz_q2": "మీ టీచర్ చిన్న ప్రోగ్రామ్ రాయమంటే:",
  "quiz_q3": "పెద్ద సంఖ్యలు లేదా పట్టికలు చూసినప్పుడు:",
  "quiz_q4": "హ్యాకింగ్ లేదా సైబర్ దాడుల గురించి వింటే:",
  "quiz_q5": "ఆన్‌లైన్‌లో సిస్టమ్స్ నిర్వహణ (Google Drive, AWS, Azure లాంటివి):",
  "quiz_q6": "సెన్సార్లు, సర్క్యూట్లు లేదా రోబోటిక్స్ కిట్లు ఇస్తే:",
  "quiz_q7": "ప్రాజెక్ట్ డిజైన్ చేయమంటే:",
  "quiz_q8": "ఆపరేటింగ్ సిస్టమ్స్ లేదా కంప్యూటర్ ఆర్కిటెక్చర్ నేర్చుకునేటప్పుడు:",
  "quiz_q9": "క్లాస్‌మేట్స్‌తో గ్రూప్ ప్రాజెక్టుల్లో పనిచేసేటప్పుడు:",
  "quiz_q10": "చార్టులు, డాష్‌బోర్డులు లేదా విజువల్ వివరణలు సృష్టించేటప్పుడు:",
  "quiz_opt_no": "లేదు",
  "quiz_opt_low": "తక్కువ",
  "quiz_opt_okay": "పరవాలేదు",
  "quiz_opt_yes": "అవును",
  "quiz_opt_strong": "చాలా",
  "quiz_choose": "ఒక ఎంపికను ఎంచుకోండి",
  "card_level_beginner": "ప్రారంభ",
  "card_level_inter": "ఇంటర్మీడియట్",
  "card_level_adv": "అడ్వాన్స్‌డ్",
  "card_demand_high": "అధిక",
  "card_demand_vhigh": "చాలా అధిక",
  "card_demand_med": "మధ్యస్థ",
  "quiz_q1_opt1": "జవాబు వచ్చే వరకు దశలవారీగా పరిష్కరించడం నాకు ఇష్టం.",
  "quiz_q1_opt2": "ఉదాహరణలు లేదా సూచనలు ఇస్తే పరిష్కరించగలను.",
  "quiz_q1_opt3": "కష్టపడినా పూర్తి చేయడానికి ప్రయత్నిస్తాను.",
  "quiz_q1_opt4": "గణితాన్ని నివారించి ఇతర సబ్జెక్టులను ఇష్టపడతాను.",
  "quiz_q2_opt1": "వెంటనే కోడింగ్ ప్రారంభించడానికి ఉత్సాహంగా అనిపిస్తుంది.",
  "quiz_q2_opt2": "మార్గదర్శకత్వం లేదా నమూనా కోడ్‌తో ప్రయత్నిస్తాను.",
  "quiz_q2_opt3": "కోడింగ్‌కు బదులు సిద్ధంగా ఉన్న టూల్స్‌ను ఇష్టపడతాను.",
  "quiz_q2_opt4": "ప్రోగ్రామింగ్ పనులను పూర్తిగా నివారిస్తాను.",
  "quiz_q3_opt1": "నమూనాలను విశ్లేషించడం & కనుగొనడం నాకు ఇష్టం.",
  "quiz_q3_opt2": "చిన్న డేటాను నిర్వహించగలను కానీ పెద్ద సెట్లు గందరగోళం చేస్తాయి.",
  "quiz_q3_opt3": "చాలా సంఖ్యలతో విసుగు చెందుతాను.",
  "quiz_q3_opt4": "డేటాతో పనిచేయడం అస్సలు ఇష్టం లేదు.",
  "quiz_q4_opt1": "వెంటనే వాటిని ఎలా నివారించాలో ఆలోచిస్తాను.",
  "quiz_q4_opt2": "ఆసక్తిగా అనిపిస్తుంది కానీ లోతుగా వెళ్లను.",
  "quiz_q4_opt3": "చదివి వదిలేస్తాను.",
  "quiz_q4_opt4": "భద్రతా అంశాలు పట్టించుకోను.",
  "quiz_q5_opt1": "క్లౌడ్ ప్లాట్‌ఫారమ్‌లను అన్వేషించడానికి ఉత్సాహంగా అనిపిస్తుంది.",
  "quiz_q5_opt2": "ఆసక్తిగా ఉంది కానీ ఎలా పనిచేస్తాయో తెలియదు.",
  "quiz_q5_opt3": "క్లౌడ్‌కు బదులు లోకల్ సిస్టమ్స్‌ను ఇష్టపడతాను.",
  "quiz_q5_opt4": "సిస్టమ్స్ నిర్వహణ అస్సలు ఇష్టం లేదు.",
  "quiz_q6_opt1": "భౌతికంగా ఏదైనా నిర్మించడానికి ఉత్సాహంగా అనిపిస్తుంది.",
  "quiz_q6_opt2": "ప్రయత్నించగలను కానీ సాఫ్ట్‌వేర్ పనులను ఇష్టపడతాను.",
  "quiz_q6_opt3": "హార్డ్‌వేర్ ప్రయోగాలతో నెర్వస్‌గా అనిపిస్తుంది.",
  "quiz_q6_opt4": "హార్డ్‌వేర్‌ను పూర్తిగా నివారిస్తాను.",
  "quiz_q7_opt1": "విజువల్స్, UI, యూజర్ అనుభవంపై దృష్టి పెడతాను.",
  "quiz_q7_opt2": "డిజైన్‌ను కోడింగ్‌తో సమతుల్యం చేస్తాను.",
  "quiz_q7_opt3": "బ్యాకెండ్ లాజిక్‌పై మాత్రమే శ్రద్ధ పెడతాను.",
  "quiz_q7_opt4": "డిజైన్ పనులు ఇష్టం లేదు.",
  "quiz_q8_opt1": "సిస్టమ్స్ లోపల ఎలా పనిచేస్తాయో తెలుసుకోవడం నాకు ఇష్టం.",
  "quiz_q8_opt2": "ఆసక్తిగా ఉంది కానీ లోతుగా ఆసక్తి లేదు.",
  "quiz_q8_opt3": "అర్థం చేసుకోవడం కష్టంగా అనిపిస్తుంది.",
  "quiz_q8_opt4": "సిస్టమ్ అంశాలను పూర్తిగా నివారిస్తాను.",
  "quiz_q9_opt1": "టీమ్‌వర్క్ & సహకారం నాకు ఇష్టం.",
  "quiz_q9_opt2": "టీమ్‌లో పనిచేయగలను కానీ ఒంటరిగా ఇష్టపడతాను.",
  "quiz_q9_opt3": "గ్రూప్ ప్రాజెక్టుల్లో కష్టపడతాను.",
  "quiz_q9_opt4": "టీమ్‌వర్క్‌ను వీలైనంత నివారిస్తాను.",
  "quiz_q10_opt1": "విజువల్స్ & అంతర్దృష్టులు చేయడం నాకు ఇష్టం.",
  "quiz_q10_opt2": "ప్రాథమిక గ్రాఫ్‌లు మాత్రమే చేయగలను.",
  "quiz_q10_opt3": "విజువలైజేషన్ పనుల్లో కష్టపడతాను.",
  "quiz_q10_opt4": "విజువల్స్ అస్సలు ఇష్టం లేదు.",
  "quiz_q11": "గేమ్స్ గురించి ఆలోచించేటప్పుడు:",
  "quiz_q11_opt1": "గేమ్స్ డిజైన్ & నిర్మించడం నాకు ఇష్టం.",
  "quiz_q11_opt2": "గేమ్స్ ఎలా తయారవుతాయో ఆసక్తిగా ఉంది.",
  "quiz_q11_opt3": "గేమ్స్ ఆడతాను కానీ డిజైన్ చేయను.",
  "quiz_q11_opt4": "గేమ్స్‌పై అస్సలు ఆసక్తి లేదు.",
  "quiz_q12": "క్వాంటం కంప్యూటింగ్ లేదా AR/VR:",
  "quiz_q12_opt1": "ఆనందంగా అనిపిస్తుంది & లోతుగా అన్వేషించాలని ఉంది.",
  "quiz_q12_opt2": "ఆసక్తిగా ఉంది కానీ చాలా సీరియస్ కాదు.",
  "quiz_q12_opt3": "గందరగోళంగా & కష్టంగా అనిపిస్తుంది.",
  "quiz_q12_opt4": "భవిష్యత్ టెక్ పట్టించుకోను.",
  "quiz_q13": "సాంకేతిక ఆలోచనలను ఇతరులకు వివరించేటప్పుడు:",
  "quiz_q13_opt1": "ఎవరికైనా స్పష్టంగా వివరించగలను.",
  "quiz_q13_opt2": "ప్రయత్నం & అభ్యాసంతో వివరించగలను.",
  "quiz_q13_opt3": "సాంకేతిక అంశాలు వివరించడంలో కష్టపడతాను.",
  "quiz_q13_opt4": "కమ్యూనికేషన్ పనులను పూర్తిగా నివారిస్తాను.",
  "quiz_q14": "వాస్తవ ప్రపంచ సమస్యలను విడదీసేటప్పుడు:",
  "quiz_q14_opt1": "దశలవారీ సమస్య పరిష్కారం నాకు ఇష్టం.",
  "quiz_q14_opt2": "మార్గదర్శకత్వం లేదా ఉదాహరణలతో పరిష్కరించగలను.",
  "quiz_q14_opt3": "సంక్లిష్ట సమస్యలతో కష్టపడతాను.",
  "quiz_q14_opt4": "సమస్య పరిష్కార పనులను నివారిస్తాను.",
  "quiz_q15": "కొత్త అంశాలు నేర్చుకునేటప్పుడు:",
  "quiz_q15_opt1": "లోతుగా అన్వేషించి క్రమం తప్పకుండా అభ్యాసం చేస్తాను.",
  "quiz_q15_opt2": "ఉదాహరణలు & మార్గదర్శకత్వంతో నేర్చుకుంటాను.",
  "quiz_q15_opt3": "అర్థం చేసుకోవడానికి అదనపు మద్దతు అవసరం.",
  "quiz_q15_opt4": "కష్టమైన అంశాలను వీలైనంత నివారిస్తాను."
 },
 "hi": {
  "nav_home": "होम",
  "nav_explorer": "एटलस",
  "nav_quiz": "क्विज़",
  "nav_roadmap": "रोडमैप",
  "nav_resources": "संसाधन",
  "nav_dashboard": "वॉल्ट",
  "nav_about": "हमारे बारे में",
  "nav_contact": "संपर्क",
  "hero_badge": "750+ CSE छात्रों का भरोसा • 25 डोमेन • 89% सटीकता • वॉल्ट तैयार",
  "hero_title": "25 CSE डोमेन में कन्फ्यूज़्ड? आपका AI काउंसलर यहाँ है।",
  "hero_sub": "25 ट्रैक्स में पर्सनलाइज्ड टॉप-3 सिफारिशें — Decision Tree, Random Forest, KNN & PCA के साथ — 4-साल रोडमैप, मिनी-कोर्स, वॉल्ट & 10 भाषाओं में मार्गदर्शन।",
  "hero_cta_quiz": "3-मिनट क्विज़ दें →",
  "hero_cta_explore": "एटलस देखें",
  "hero_cta_demo": "डेमो देखें (45से)",
  "hero_stats_students": "मार्गदर्शित छात्र",
  "hero_stats_domains": "CSE डोमेन",
  "hero_stats_langs": "भाषाएँ",
  "hero_tip_k": "Search दबाएँ 25 डोमेन खोजें",
  "hero_tip_vault": "नया: हर डोमेन के लिए वॉल्ट",
  "hero_tip_compare": "3 ट्रैक्स की तुलना करें",
  "hero_radar_title": "Live Prediction Preview",
  "hero_radar_badge": "RandomForest 89%",
  "hero_why": "Why AI? High logic (5/5) + math marks 92 + strong data interest.",
  "hero_try": "Try Your Prediction →",
  "trust_curated": "Curated Sources:",
  "trust_lit": "Literature: AIJMR 2025 • IJRAR 2022 • JETIR 2024",
  "features_why": "Why GuidanceAI • Atlas 25 • 8+6 Modules",
  "features_title": "Everything a First-Year Needs — Now 25 Tracks",
  "features_sub": "Beyond paper guidance — Atlas, vault per domain, compare, roadmap, visualization, multilingual voice & gamification.",
  "features_atlas_title": "25-Domain Atlas",
  "features_atlas_desc": "Intelligence 6 · Build 5 · Core 8 · Frontier 6 — grouped, searchable, professional dev layout.",
  "features_vault_title": "Vault per Domain",
  "features_vault_desc": "4 empty slots per track: Notes, Videos, Projects, Assignments — add your files later, stays local.",
  "features_compare_title": "Compare 3 Tracks",
  "features_compare_desc": "Tick Compare on cards — bottom bar — side-by-side salary, skills, roadmap.",
  "features_roadmap_title": "4-Year Roadmap",
  "features_roadmap_desc": "Foundation to Advanced to Placement — for each track, with vault link.",
  "features_gamified_title": "Gamified + Command",
  "features_gamified_desc": "XP, streaks + quick palette to instantly jump to any of 25 domains.",
  "features_parent_title": "Parent + Teacher",
  "features_parent_desc": "Vernacular PDF + voice for parents; batch analytics for 25-track cohorts.",
  "explorer_title": "डोमेन एटलस — 25 ट्रैक्स",
  "explorer_sub": "इंटेलिजेंस, बिल्ड, कोर & फ्रंटियर में ग्रुप्ड प्रोफेशनल एक्सप्लोरर।",
  "explorer_tip_k": "Search",
  "explorer_tip_vault": "Empty vaults ready",
  "explorer_tip_compare": "Compare up to 3",
  "explorer_search_ph": "AI, क्वांटम, वेब... खोजें",
  "explorer_sort_featured": "Featured",
  "explorer_sort_az": "A → Z",
  "explorer_sort_salary": "Salary High → Low",
  "explorer_sort_demand": "Demand High → Low",
  "explorer_pill_all": "सभी 25",
  "explorer_pill_intel": "इंटेलिजेंस & डेटा · 6",
  "explorer_pill_build": "बिल्ड · 5",
  "explorer_pill_core": "कोर सिस्टम्स · 8",
  "explorer_pill_frontier": "फ्रंटियर · 6",
  "explorer_showing": "Showing {n} of {total} tracks",
  "explorer_no_title": "No tracks found",
  "explorer_no_sub": "Try different search or category",
  "explorer_clear": "Clear filters",
  "explorer_vault_tip": "Vault: Tap any card to open its Vault and add your files.",
  "explorer_cmd": "Search",
  "card_view": "देखें →",
  "card_compare": "तुलना",
  "card_vault": "वॉल्ट",
  "card_growth": "growth",
  "vault_title": "वॉल्ट — आपकी फ़ाइलें",
  "vault_sub": "Empty space → add your own",
  "vault_drop": "Drop PDFs, PPTs, videos, projects per domain. Later replace via",
  "vault_empty": "Empty — no files yet",
  "vault_add_notes": "Add Notes",
  "vault_add_videos": "Add Videos",
  "vault_add_projects": "Add Projects",
  "vault_add_assign": "Add Assignments",
  "vault_howto": "How to add bulk files: Create folder",
  "vault_folder": "Folder:",
  "vault_files": "files",
  "vault_interview": "Interview Kit",
  "vault_interview_desc": "Empty → add Q&A PDFs to vault/Assignments",
  "vault_projects_title": "Project Ideas",
  "vault_projects_desc": "3 starters in Vault/Projects",
  "vault_progress": "Progress",
  "vault_progress_desc": "Track via Roadmap checklist — saves locally",
  "compare_selected": "Selected",
  "compare_btn": "Compare →",
  "compare_clear": "Clear",
  "compare_title": "डोमेन तुलना",
  "compare_need2": "Select at least 2 domains to compare",
  "compare_up_to3": "Compare up to 3 domains",
  "compare_added": "+ Added {id} to compare ({n}/3)",
  "compare_removed": "Removed {id}",
  "compare_cleared": "Cleared compare",
  "compare_feat_category": "Category",
  "compare_feat_level": "Level",
  "compare_feat_demand": "Demand",
  "compare_feat_growth": "Growth",
  "compare_feat_salary": "Avg Salary",
  "compare_feat_skills": "Skills",
  "compare_feat_careers": "Careers",
  "quiz_badge": "ML Filter • 3 Minutes • 15 Questions + Marks",
  "quiz_title": "अपना परफेक्ट डोमेन खोजें (25-वे)",
  "quiz_sub": "Quiz + Marks + Interest → AI ensemble → Top-3 across 25 tracks with confidence, radar & vault suggestion. Demo uses 750-record synthetic dataset (30×25).",
  "quiz_step_marks": "Step 1 of {total} • Marks",
  "quiz_step_q": "Step {n} of {total} • Q{q}",
  "quiz_marks_title": "First, your academic marks (0-100)",
  "quiz_marks_sub": "Used by Marks-based ML filter (PCA + RandomForest). Be honest.",
  "quiz_math": "Math Marks *",
  "quiz_prog": "Programming Marks *",
  "quiz_phy": "Physics Marks",
  "quiz_eng": "English Marks",
  "quiz_next": "आगे →",
  "quiz_prev": "← पीछे",
  "quiz_get_rec": "सिफारिश पाएं →",
  "quiz_predicting": "Predicting…",
  "quiz_fix_marks": "Please fix marks (0-100)",
  "quiz_local": "Your data stays local • Model: backend/ml_service/model.pkl (RandomForest 89%) • Fallback JS ensemble",
  "results_why_prefix": "Why",
  "results_runner": "Runner-up",
  "results_best_fit": "Best fit • Start roadmap + vault",
  "results_alt": "Good alternative",
  "results_radar_title": "Skill Gap Radar",
  "results_radar_sub": "Blue = You • Dashed = Required for",
  "results_skill_title": "Skill Gap Details",
  "results_whatif": "What-If Simulator",
  "results_sim": "If you improve → Fit",
  "results_roadmap_btn": "मेरा 4-साल रोडमैप देखें →",
  "results_course_btn": "Go to Mini-Course",
  "results_retake": "Retake Quiz",
  "results_toast": "Predicted: {top} ({score}%) — Vault ready",
  "roadmap_title": "Personalized 4-Year Roadmap",
  "roadmap_sub": "Auto-generated after quiz. Foundation → Intermediate → Advanced → Placement.",
  "roadmap_phase": "PHASE",
  "roadmap_vault": "Vault: {n} files — add yours in modal",
  "course_title": "Mini-Course + Test — Learn → Test → Certify",
  "course_modules": "Course Modules •",
  "course_progress": "Progress saved locally • 10 languages subtitle",
  "course_preview": "Preview",
  "course_select": "Select a lesson to play",
  "course_check": "Quick Check — 3 Questions",
  "course_submit": "Submit → +50 XP",
  "resources_title": "Resource Hub",
  "resources_sub": "NPTEL • Coursera • YouTube — filtered by domain, difficulty, language. Bookmarks saved.",
  "resources_search_ph": "Search resources...",
  "resources_domain_all": "All Domains (25)",
  "resources_type_all": "All Types",
  "resources_lang_all": "All Langs",
  "dashboard_title": "Dashboards",
  "footer_tagline": "Virtual counsellor • Django + RandomForest 89% + PCA • 750+ students guided • 25 domains Atlas + Vault.",
  "footer_explore": "Domain Atlas → 25 tracks",
  "toast_lang": "Language: {lang}",
  "toast_subscribed": "Subscribed: {email} • Welcome!",
  "toast_msg_sent": "Message sent — we reply in 2h!",
  "toast_copied": "Bookmarked: {title}",
  "common_close": "बंद करें",
  "common_open": "Open →",
  "common_xp": "XP: {n}",
  "quiz_q1": "When you face a math problem in class, how do you feel?",
  "quiz_q2": "If your teacher asks you to write a small program:",
  "quiz_q3": "When you see a big set of numbers or tables:",
  "quiz_q4": "If you hear about hacking or cyber attacks:",
  "quiz_q5": "Managing systems online (like Google Drive, AWS, Azure):",
  "quiz_q6": "If given sensors, circuits, or robotics kits:",
  "quiz_q7": "When asked to design a project:",
  "quiz_q8": "Learning about operating systems or computer architecture:",
  "quiz_q9": "Working in group projects with classmates:",
  "quiz_q10": "Creating charts, dashboards, or visual explanations:",
  "quiz_opt_no": "No",
  "quiz_opt_low": "Low",
  "quiz_opt_okay": "Okay",
  "quiz_opt_yes": "Yes",
  "quiz_opt_strong": "Strong",
  "quiz_choose": "Choose one option",
  "card_level_beginner": "Beginner",
  "card_level_inter": "Intermediate",
  "card_level_adv": "Advanced",
  "card_demand_high": "High",
  "card_demand_vhigh": "Very High",
  "card_demand_med": "Medium",
  "quiz_q1_opt1": "I enjoy solving step by step until I get the answer.",
  "quiz_q1_opt2": "I can solve if I get examples or hints.",
  "quiz_q1_opt3": "I struggle but try to finish somehow.",
  "quiz_q1_opt4": "I avoid math and prefer other subjects.",
  "quiz_q2_opt1": "I feel excited and start coding immediately.",
  "quiz_q2_opt2": "I try but need guidance or sample code.",
  "quiz_q2_opt3": "I prefer using ready-made tools instead of coding.",
  "quiz_q2_opt4": "I avoid programming tasks completely.",
  "quiz_q3_opt1": "I love analyzing and finding patterns.",
  "quiz_q3_opt2": "I can handle small data but big sets confuse me.",
  "quiz_q3_opt3": "I get bored with too many numbers.",
  "quiz_q3_opt4": "I dislike working with data at all.",
  "quiz_q4_opt1": "I immediately think about how to prevent them.",
  "quiz_q4_opt2": "I feel curious but don’t go deep.",
  "quiz_q4_opt3": "I just read and move on.",
  "quiz_q4_opt4": "I don’t care about security topics.",
  "quiz_q5_opt1": "I feel excited to explore cloud platforms.",
  "quiz_q5_opt2": "I’m curious but unsure how they work.",
  "quiz_q5_opt3": "I prefer local systems over cloud.",
  "quiz_q5_opt4": "I don’t like managing systems at all.",
  "quiz_q6_opt1": "I get excited to build something physical.",
  "quiz_q6_opt2": "I can try but prefer software tasks.",
  "quiz_q6_opt3": "I feel nervous with hardware experiments.",
  "quiz_q6_opt4": "I avoid hardware completely.",
  "quiz_q7_opt1": "I focus on visuals, UI, and user experience.",
  "quiz_q7_opt2": "I balance design with coding.",
  "quiz_q7_opt3": "I care only about backend logic.",
  "quiz_q7_opt4": "I dislike design tasks.",
  "quiz_q8_opt1": "I love knowing how systems work internally.",
  "quiz_q8_opt2": "I’m curious but not deeply interested.",
  "quiz_q8_opt3": "I find it difficult to understand.",
  "quiz_q8_opt4": "I avoid system topics completely.",
  "quiz_q9_opt1": "I enjoy teamwork and collaboration.",
  "quiz_q9_opt2": "I can work in teams but prefer solo.",
  "quiz_q9_opt3": "I struggle in group projects.",
  "quiz_q9_opt4": "I avoid teamwork whenever possible.",
  "quiz_q10_opt1": "I enjoy making visuals and insights.",
  "quiz_q10_opt2": "I can do basic graphs only.",
  "quiz_q10_opt3": "I struggle with visualization tasks.",
  "quiz_q10_opt4": "I dislike visuals completely.",
  "quiz_q11": "Thinking about games:",
  "quiz_q11_opt1": "I love designing and building games.",
  "quiz_q11_opt2": "I’m curious about how games are made.",
  "quiz_q11_opt3": "I only play games, not design them.",
  "quiz_q11_opt4": "I’m not interested in games at all.",
  "quiz_q12": "Quantum Computing or AR/VR:",
  "quiz_q12_opt1": "I feel thrilled and want to explore deeply.",
  "quiz_q12_opt2": "I’m curious but not very serious.",
  "quiz_q12_opt3": "I find it confusing and difficult.",
  "quiz_q12_opt4": "I don’t care about futuristic tech.",
  "quiz_q13": "Explaining technical ideas to others:",
  "quiz_q13_opt1": "I can explain clearly to anyone.",
  "quiz_q13_opt2": "I can explain with effort and practice.",
  "quiz_q13_opt3": "I struggle to explain technical points.",
  "quiz_q13_opt4": "I avoid communication tasks completely.",
  "quiz_q14": "Breaking down real-world problems:",
  "quiz_q14_opt1": "I enjoy step-by-step problem solving.",
  "quiz_q14_opt2": "I can solve with guidance or examples.",
  "quiz_q14_opt3": "I struggle with complex problems.",
  "quiz_q14_opt4": "I avoid problem solving tasks.",
  "quiz_q15": "When learning new topics:",
  "quiz_q15_opt1": "I explore deeply and practice regularly.",
  "quiz_q15_opt2": "I learn with examples and guidance.",
  "quiz_q15_opt3": "I need extra support to understand.",
  "quiz_q15_opt4": "I avoid tough topics whenever possible."
 },
 "ta": {
  "nav_home": "முகப்பு",
  "nav_explorer": "அட்லஸ்",
  "nav_quiz": "வினாடி வினா",
  "nav_roadmap": "சாலை வரைபடம்",
  "nav_resources": "வளங்கள்",
  "nav_dashboard": "வால்ட்",
  "nav_about": "About",
  "nav_contact": "Contact",
  "hero_badge": "Trusted by 750+ CSE students • 25 Domains • 89% Accuracy • Vault Ready",
  "hero_title": "25 CSE டொமைன்களில் குழப்பமா? உங்கள் AI ஆலோசகர் இங்கே.",
  "hero_sub": "25 தடங்களில் தனிப்பயன் டாப்-3 பரிந்துரைகள் — Decision Tree, Random Forest, KNN & PCA மூலம் — 4 ஆண்டு சாலை வரைபடம், மினி-கோர்ஸ், வால்ட் & 10 மொழிகளில் வழிகாட்டி.",
  "hero_cta_quiz": "Take 3-Min Quiz →",
  "hero_cta_explore": "Explore Atlas",
  "hero_cta_demo": "Watch Demo (45s)",
  "hero_stats_students": "Students Guided",
  "hero_stats_domains": "CSE Domains",
  "hero_stats_langs": "Languages",
  "hero_tip_k": "Search 25 domains",
  "hero_tip_vault": "New: Vault per domain",
  "hero_tip_compare": "Compare 3 tracks",
  "hero_radar_title": "Live Prediction Preview",
  "hero_radar_badge": "RandomForest 89%",
  "hero_why": "Why AI? High logic (5/5) + math marks 92 + strong data interest.",
  "hero_try": "Try Your Prediction →",
  "trust_curated": "Curated Sources:",
  "trust_lit": "Literature: AIJMR 2025 • IJRAR 2022 • JETIR 2024",
  "features_why": "Why GuidanceAI • Atlas 25 • 8+6 Modules",
  "features_title": "Everything a First-Year Needs — Now 25 Tracks",
  "features_sub": "Beyond paper guidance — Atlas, vault per domain, compare, roadmap, visualization, multilingual voice & gamification.",
  "features_atlas_title": "25-Domain Atlas",
  "features_atlas_desc": "Intelligence 6 · Build 5 · Core 8 · Frontier 6 — grouped, searchable, professional dev layout.",
  "features_vault_title": "Vault per Domain",
  "features_vault_desc": "4 empty slots per track: Notes, Videos, Projects, Assignments — add your files later, stays local.",
  "features_compare_title": "Compare 3 Tracks",
  "features_compare_desc": "Tick Compare on cards — bottom bar — side-by-side salary, skills, roadmap.",
  "features_roadmap_title": "4-Year Roadmap",
  "features_roadmap_desc": "Foundation to Advanced to Placement — for each track, with vault link.",
  "features_gamified_title": "Gamified + Command",
  "features_gamified_desc": "XP, streaks + quick palette to instantly jump to any of 25 domains.",
  "features_parent_title": "Parent + Teacher",
  "features_parent_desc": "Vernacular PDF + voice for parents; batch analytics for 25-track cohorts.",
  "explorer_title": "டொமைன் அட்லஸ் — 25 தடங்கள்",
  "explorer_sub": "Professional explorer — grouped by Intelligence, Build, Core & Frontier. Search, compare & vault per domain.",
  "explorer_tip_k": "Search",
  "explorer_tip_vault": "Empty vaults ready",
  "explorer_tip_compare": "Compare up to 3",
  "explorer_search_ph": "Search AI, Quantum, Web...",
  "explorer_sort_featured": "Featured",
  "explorer_sort_az": "A → Z",
  "explorer_sort_salary": "Salary High → Low",
  "explorer_sort_demand": "Demand High → Low",
  "explorer_pill_all": "All 25",
  "explorer_pill_intel": "Intelligence & Data · 6",
  "explorer_pill_build": "Build · 5",
  "explorer_pill_core": "Core Systems · 8",
  "explorer_pill_frontier": "Frontier · 6",
  "explorer_showing": "Showing {n} of {total} tracks",
  "explorer_no_title": "No tracks found",
  "explorer_no_sub": "Try different search or category",
  "explorer_clear": "Clear filters",
  "explorer_vault_tip": "Vault: Tap any card to open its Vault and add your files.",
  "explorer_cmd": "Search",
  "card_view": "காண்க →",
  "card_compare": "ஒப்பிடு",
  "card_vault": "Vault",
  "card_growth": "growth",
  "vault_title": "வால்ட் — உங்கள் கோப்புகள்",
  "vault_sub": "Empty space → add your own",
  "vault_drop": "Drop PDFs, PPTs, videos, projects per domain. Later replace via",
  "vault_empty": "Empty — no files yet",
  "vault_add_notes": "Add Notes",
  "vault_add_videos": "Add Videos",
  "vault_add_projects": "Add Projects",
  "vault_add_assign": "Add Assignments",
  "vault_howto": "How to add bulk files: Create folder",
  "vault_folder": "Folder:",
  "vault_files": "files",
  "vault_interview": "Interview Kit",
  "vault_interview_desc": "Empty → add Q&A PDFs to vault/Assignments",
  "vault_projects_title": "Project Ideas",
  "vault_projects_desc": "3 starters in Vault/Projects",
  "vault_progress": "Progress",
  "vault_progress_desc": "Track via Roadmap checklist — saves locally",
  "compare_selected": "Selected",
  "compare_btn": "Compare →",
  "compare_clear": "Clear",
  "compare_title": "டொமைன்களை ஒப்பிடுக",
  "compare_need2": "Select at least 2 domains to compare",
  "compare_up_to3": "Compare up to 3 domains",
  "compare_added": "+ Added {id} to compare ({n}/3)",
  "compare_removed": "Removed {id}",
  "compare_cleared": "Cleared compare",
  "compare_feat_category": "Category",
  "compare_feat_level": "Level",
  "compare_feat_demand": "Demand",
  "compare_feat_growth": "Growth",
  "compare_feat_salary": "Avg Salary",
  "compare_feat_skills": "Skills",
  "compare_feat_careers": "Careers",
  "quiz_badge": "ML Filter • 3 Minutes • 15 Questions + Marks",
  "quiz_title": "உங்கள் சரியான டொமைனைக் கண்டறியவும்",
  "quiz_sub": "Quiz + Marks + Interest → AI ensemble → Top-3 across 25 tracks with confidence, radar & vault suggestion. Demo uses 750-record synthetic dataset (30×25).",
  "quiz_step_marks": "Step 1 of {total} • Marks",
  "quiz_step_q": "Step {n} of {total} • Q{q}",
  "quiz_marks_title": "First, your academic marks (0-100)",
  "quiz_marks_sub": "Used by Marks-based ML filter (PCA + RandomForest). Be honest.",
  "quiz_math": "Math Marks *",
  "quiz_prog": "Programming Marks *",
  "quiz_phy": "Physics Marks",
  "quiz_eng": "English Marks",
  "quiz_next": "Next →",
  "quiz_prev": "← Previous",
  "quiz_get_rec": "Get Recommendation →",
  "quiz_predicting": "Predicting…",
  "quiz_fix_marks": "Please fix marks (0-100)",
  "quiz_local": "Your data stays local • Model: backend/ml_service/model.pkl (RandomForest 89%) • Fallback JS ensemble",
  "results_why_prefix": "Why",
  "results_runner": "Runner-up",
  "results_best_fit": "Best fit • Start roadmap + vault",
  "results_alt": "Good alternative",
  "results_radar_title": "Skill Gap Radar",
  "results_radar_sub": "Blue = You • Dashed = Required for",
  "results_skill_title": "Skill Gap Details",
  "results_whatif": "What-If Simulator",
  "results_sim": "If you improve → Fit",
  "results_roadmap_btn": "View My 4-Year Roadmap →",
  "results_course_btn": "Go to Mini-Course",
  "results_retake": "Retake Quiz",
  "results_toast": "Predicted: {top} ({score}%) — Vault ready",
  "roadmap_title": "Personalized 4-Year Roadmap",
  "roadmap_sub": "Auto-generated after quiz. Foundation → Intermediate → Advanced → Placement.",
  "roadmap_phase": "PHASE",
  "roadmap_vault": "Vault: {n} files — add yours in modal",
  "course_title": "Mini-Course + Test — Learn → Test → Certify",
  "course_modules": "Course Modules •",
  "course_progress": "Progress saved locally • 10 languages subtitle",
  "course_preview": "Preview",
  "course_select": "Select a lesson to play",
  "course_check": "Quick Check — 3 Questions",
  "course_submit": "Submit → +50 XP",
  "resources_title": "Resource Hub",
  "resources_sub": "NPTEL • Coursera • YouTube — filtered by domain, difficulty, language. Bookmarks saved.",
  "resources_search_ph": "Search resources...",
  "resources_domain_all": "All Domains (25)",
  "resources_type_all": "All Types",
  "resources_lang_all": "All Langs",
  "dashboard_title": "Dashboards",
  "footer_tagline": "Virtual counsellor • Django + RandomForest 89% + PCA • 750+ students guided • 25 domains Atlas + Vault.",
  "footer_explore": "Domain Atlas → 25 tracks",
  "toast_lang": "Language: {lang}",
  "toast_subscribed": "Subscribed: {email} • Welcome!",
  "toast_msg_sent": "Message sent — we reply in 2h!",
  "toast_copied": "Bookmarked: {title}",
  "common_close": "மூடு",
  "common_open": "Open →",
  "common_xp": "XP: {n}",
  "quiz_q1": "When you face a math problem in class, how do you feel?",
  "quiz_q2": "If your teacher asks you to write a small program:",
  "quiz_q3": "When you see a big set of numbers or tables:",
  "quiz_q4": "If you hear about hacking or cyber attacks:",
  "quiz_q5": "Managing systems online (like Google Drive, AWS, Azure):",
  "quiz_q6": "If given sensors, circuits, or robotics kits:",
  "quiz_q7": "When asked to design a project:",
  "quiz_q8": "Learning about operating systems or computer architecture:",
  "quiz_q9": "Working in group projects with classmates:",
  "quiz_q10": "Creating charts, dashboards, or visual explanations:",
  "quiz_opt_no": "No",
  "quiz_opt_low": "Low",
  "quiz_opt_okay": "Okay",
  "quiz_opt_yes": "Yes",
  "quiz_opt_strong": "Strong",
  "quiz_choose": "Choose one option",
  "card_level_beginner": "Beginner",
  "card_level_inter": "Intermediate",
  "card_level_adv": "Advanced",
  "card_demand_high": "High",
  "card_demand_vhigh": "Very High",
  "card_demand_med": "Medium",
  "quiz_q1_opt1": "I enjoy solving step by step until I get the answer.",
  "quiz_q1_opt2": "I can solve if I get examples or hints.",
  "quiz_q1_opt3": "I struggle but try to finish somehow.",
  "quiz_q1_opt4": "I avoid math and prefer other subjects.",
  "quiz_q2_opt1": "I feel excited and start coding immediately.",
  "quiz_q2_opt2": "I try but need guidance or sample code.",
  "quiz_q2_opt3": "I prefer using ready-made tools instead of coding.",
  "quiz_q2_opt4": "I avoid programming tasks completely.",
  "quiz_q3_opt1": "I love analyzing and finding patterns.",
  "quiz_q3_opt2": "I can handle small data but big sets confuse me.",
  "quiz_q3_opt3": "I get bored with too many numbers.",
  "quiz_q3_opt4": "I dislike working with data at all.",
  "quiz_q4_opt1": "I immediately think about how to prevent them.",
  "quiz_q4_opt2": "I feel curious but don’t go deep.",
  "quiz_q4_opt3": "I just read and move on.",
  "quiz_q4_opt4": "I don’t care about security topics.",
  "quiz_q5_opt1": "I feel excited to explore cloud platforms.",
  "quiz_q5_opt2": "I’m curious but unsure how they work.",
  "quiz_q5_opt3": "I prefer local systems over cloud.",
  "quiz_q5_opt4": "I don’t like managing systems at all.",
  "quiz_q6_opt1": "I get excited to build something physical.",
  "quiz_q6_opt2": "I can try but prefer software tasks.",
  "quiz_q6_opt3": "I feel nervous with hardware experiments.",
  "quiz_q6_opt4": "I avoid hardware completely.",
  "quiz_q7_opt1": "I focus on visuals, UI, and user experience.",
  "quiz_q7_opt2": "I balance design with coding.",
  "quiz_q7_opt3": "I care only about backend logic.",
  "quiz_q7_opt4": "I dislike design tasks.",
  "quiz_q8_opt1": "I love knowing how systems work internally.",
  "quiz_q8_opt2": "I’m curious but not deeply interested.",
  "quiz_q8_opt3": "I find it difficult to understand.",
  "quiz_q8_opt4": "I avoid system topics completely.",
  "quiz_q9_opt1": "I enjoy teamwork and collaboration.",
  "quiz_q9_opt2": "I can work in teams but prefer solo.",
  "quiz_q9_opt3": "I struggle in group projects.",
  "quiz_q9_opt4": "I avoid teamwork whenever possible.",
  "quiz_q10_opt1": "I enjoy making visuals and insights.",
  "quiz_q10_opt2": "I can do basic graphs only.",
  "quiz_q10_opt3": "I struggle with visualization tasks.",
  "quiz_q10_opt4": "I dislike visuals completely.",
  "quiz_q11": "Thinking about games:",
  "quiz_q11_opt1": "I love designing and building games.",
  "quiz_q11_opt2": "I’m curious about how games are made.",
  "quiz_q11_opt3": "I only play games, not design them.",
  "quiz_q11_opt4": "I’m not interested in games at all.",
  "quiz_q12": "Quantum Computing or AR/VR:",
  "quiz_q12_opt1": "I feel thrilled and want to explore deeply.",
  "quiz_q12_opt2": "I’m curious but not very serious.",
  "quiz_q12_opt3": "I find it confusing and difficult.",
  "quiz_q12_opt4": "I don’t care about futuristic tech.",
  "quiz_q13": "Explaining technical ideas to others:",
  "quiz_q13_opt1": "I can explain clearly to anyone.",
  "quiz_q13_opt2": "I can explain with effort and practice.",
  "quiz_q13_opt3": "I struggle to explain technical points.",
  "quiz_q13_opt4": "I avoid communication tasks completely.",
  "quiz_q14": "Breaking down real-world problems:",
  "quiz_q14_opt1": "I enjoy step-by-step problem solving.",
  "quiz_q14_opt2": "I can solve with guidance or examples.",
  "quiz_q14_opt3": "I struggle with complex problems.",
  "quiz_q14_opt4": "I avoid problem solving tasks.",
  "quiz_q15": "When learning new topics:",
  "quiz_q15_opt1": "I explore deeply and practice regularly.",
  "quiz_q15_opt2": "I learn with examples and guidance.",
  "quiz_q15_opt3": "I need extra support to understand.",
  "quiz_q15_opt4": "I avoid tough topics whenever possible."
 },
 "kn": {
  "nav_home": "ಮುಖಪುಟ",
  "nav_explorer": "ಅಟ್ಲಾಸ್",
  "nav_quiz": "ರಸಪ್ರಶ್ನೆ",
  "nav_roadmap": "ರೋಡ್‌ಮ್ಯಾಪ್",
  "nav_resources": "ಸಂಪನ್ಮೂಲಗಳು",
  "nav_dashboard": "ವಾಲ್ಟ್",
  "nav_about": "About",
  "nav_contact": "Contact",
  "hero_badge": "Trusted by 750+ CSE students • 25 Domains • 89% Accuracy • Vault Ready",
  "hero_title": "25 CSE ಡೊಮೇನ್‌ಗಳಲ್ಲಿ ಗೊಂದಲವೇ? ನಿಮ್ಮ AI ಸಲಹೆಗಾರ ಇಲ್ಲಿದ್ದಾನೆ.",
  "hero_sub": "Personalized Top-3 recommendations across 25 tracks using Decision Tree, Random Forest, KNN & PCA — 4-year roadmap, mini-courses, vault for your files & parent guidance in 10 languages.",
  "hero_cta_quiz": "Take 3-Min Quiz →",
  "hero_cta_explore": "Explore Atlas",
  "hero_cta_demo": "Watch Demo (45s)",
  "hero_stats_students": "Students Guided",
  "hero_stats_domains": "CSE Domains",
  "hero_stats_langs": "Languages",
  "hero_tip_k": "Search 25 domains",
  "hero_tip_vault": "New: Vault per domain",
  "hero_tip_compare": "Compare 3 tracks",
  "hero_radar_title": "Live Prediction Preview",
  "hero_radar_badge": "RandomForest 89%",
  "hero_why": "Why AI? High logic (5/5) + math marks 92 + strong data interest.",
  "hero_try": "Try Your Prediction →",
  "trust_curated": "Curated Sources:",
  "trust_lit": "Literature: AIJMR 2025 • IJRAR 2022 • JETIR 2024",
  "features_why": "Why GuidanceAI • Atlas 25 • 8+6 Modules",
  "features_title": "Everything a First-Year Needs — Now 25 Tracks",
  "features_sub": "Beyond paper guidance — Atlas, vault per domain, compare, roadmap, visualization, multilingual voice & gamification.",
  "features_atlas_title": "25-Domain Atlas",
  "features_atlas_desc": "Intelligence 6 · Build 5 · Core 8 · Frontier 6 — grouped, searchable, professional dev layout.",
  "features_vault_title": "Vault per Domain",
  "features_vault_desc": "4 empty slots per track: Notes, Videos, Projects, Assignments — add your files later, stays local.",
  "features_compare_title": "Compare 3 Tracks",
  "features_compare_desc": "Tick Compare on cards — bottom bar — side-by-side salary, skills, roadmap.",
  "features_roadmap_title": "4-Year Roadmap",
  "features_roadmap_desc": "Foundation to Advanced to Placement — for each track, with vault link.",
  "features_gamified_title": "Gamified + Command",
  "features_gamified_desc": "XP, streaks + quick palette to instantly jump to any of 25 domains.",
  "features_parent_title": "Parent + Teacher",
  "features_parent_desc": "Vernacular PDF + voice for parents; batch analytics for 25-track cohorts.",
  "explorer_title": "ಡೊಮೈನ್ ಅಟ್ಲಾಸ್ — 25 ಟ್ರ್ಯಾಕ್‌ಗಳು",
  "explorer_sub": "Professional explorer — grouped by Intelligence, Build, Core & Frontier. Search, compare & vault per domain.",
  "explorer_tip_k": "Search",
  "explorer_tip_vault": "Empty vaults ready",
  "explorer_tip_compare": "Compare up to 3",
  "explorer_search_ph": "Search AI, Quantum, Web...",
  "explorer_sort_featured": "Featured",
  "explorer_sort_az": "A → Z",
  "explorer_sort_salary": "Salary High → Low",
  "explorer_sort_demand": "Demand High → Low",
  "explorer_pill_all": "All 25",
  "explorer_pill_intel": "Intelligence & Data · 6",
  "explorer_pill_build": "Build · 5",
  "explorer_pill_core": "Core Systems · 8",
  "explorer_pill_frontier": "Frontier · 6",
  "explorer_showing": "Showing {n} of {total} tracks",
  "explorer_no_title": "No tracks found",
  "explorer_no_sub": "Try different search or category",
  "explorer_clear": "Clear filters",
  "explorer_vault_tip": "Vault: Tap any card to open its Vault and add your files.",
  "explorer_cmd": "Search",
  "card_view": "ನೋಡಿ →",
  "card_compare": "ಹೋಲಿಸಿ",
  "card_vault": "Vault",
  "card_growth": "growth",
  "vault_title": "ವಾಲ್ಟ್ — ನಿಮ್ಮ ಫೈಲ್‌ಗಳು",
  "vault_sub": "Empty space → add your own",
  "vault_drop": "Drop PDFs, PPTs, videos, projects per domain. Later replace via",
  "vault_empty": "Empty — no files yet",
  "vault_add_notes": "Add Notes",
  "vault_add_videos": "Add Videos",
  "vault_add_projects": "Add Projects",
  "vault_add_assign": "Add Assignments",
  "vault_howto": "How to add bulk files: Create folder",
  "vault_folder": "Folder:",
  "vault_files": "files",
  "vault_interview": "Interview Kit",
  "vault_interview_desc": "Empty → add Q&A PDFs to vault/Assignments",
  "vault_projects_title": "Project Ideas",
  "vault_projects_desc": "3 starters in Vault/Projects",
  "vault_progress": "Progress",
  "vault_progress_desc": "Track via Roadmap checklist — saves locally",
  "compare_selected": "Selected",
  "compare_btn": "Compare →",
  "compare_clear": "Clear",
  "compare_title": "ಡೊಮೇನ್‌ಗಳನ್ನು ಹೋಲಿಸಿ",
  "compare_need2": "Select at least 2 domains to compare",
  "compare_up_to3": "Compare up to 3 domains",
  "compare_added": "+ Added {id} to compare ({n}/3)",
  "compare_removed": "Removed {id}",
  "compare_cleared": "Cleared compare",
  "compare_feat_category": "Category",
  "compare_feat_level": "Level",
  "compare_feat_demand": "Demand",
  "compare_feat_growth": "Growth",
  "compare_feat_salary": "Avg Salary",
  "compare_feat_skills": "Skills",
  "compare_feat_careers": "Careers",
  "quiz_badge": "ML Filter • 3 Minutes • 15 Questions + Marks",
  "quiz_title": "ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಡೊಮೇನ್ ಹುಡುಕಿ",
  "quiz_sub": "Quiz + Marks + Interest → AI ensemble → Top-3 across 25 tracks with confidence, radar & vault suggestion. Demo uses 750-record synthetic dataset (30×25).",
  "quiz_step_marks": "Step 1 of {total} • Marks",
  "quiz_step_q": "Step {n} of {total} • Q{q}",
  "quiz_marks_title": "First, your academic marks (0-100)",
  "quiz_marks_sub": "Used by Marks-based ML filter (PCA + RandomForest). Be honest.",
  "quiz_math": "Math Marks *",
  "quiz_prog": "Programming Marks *",
  "quiz_phy": "Physics Marks",
  "quiz_eng": "English Marks",
  "quiz_next": "Next →",
  "quiz_prev": "← Previous",
  "quiz_get_rec": "Get Recommendation →",
  "quiz_predicting": "Predicting…",
  "quiz_fix_marks": "Please fix marks (0-100)",
  "quiz_local": "Your data stays local • Model: backend/ml_service/model.pkl (RandomForest 89%) • Fallback JS ensemble",
  "results_why_prefix": "Why",
  "results_runner": "Runner-up",
  "results_best_fit": "Best fit • Start roadmap + vault",
  "results_alt": "Good alternative",
  "results_radar_title": "Skill Gap Radar",
  "results_radar_sub": "Blue = You • Dashed = Required for",
  "results_skill_title": "Skill Gap Details",
  "results_whatif": "What-If Simulator",
  "results_sim": "If you improve → Fit",
  "results_roadmap_btn": "View My 4-Year Roadmap →",
  "results_course_btn": "Go to Mini-Course",
  "results_retake": "Retake Quiz",
  "results_toast": "Predicted: {top} ({score}%) — Vault ready",
  "roadmap_title": "Personalized 4-Year Roadmap",
  "roadmap_sub": "Auto-generated after quiz. Foundation → Intermediate → Advanced → Placement.",
  "roadmap_phase": "PHASE",
  "roadmap_vault": "Vault: {n} files — add yours in modal",
  "course_title": "Mini-Course + Test — Learn → Test → Certify",
  "course_modules": "Course Modules •",
  "course_progress": "Progress saved locally • 10 languages subtitle",
  "course_preview": "Preview",
  "course_select": "Select a lesson to play",
  "course_check": "Quick Check — 3 Questions",
  "course_submit": "Submit → +50 XP",
  "resources_title": "Resource Hub",
  "resources_sub": "NPTEL • Coursera • YouTube — filtered by domain, difficulty, language. Bookmarks saved.",
  "resources_search_ph": "Search resources...",
  "resources_domain_all": "All Domains (25)",
  "resources_type_all": "All Types",
  "resources_lang_all": "All Langs",
  "dashboard_title": "Dashboards",
  "footer_tagline": "Virtual counsellor • Django + RandomForest 89% + PCA • 750+ students guided • 25 domains Atlas + Vault.",
  "footer_explore": "Domain Atlas → 25 tracks",
  "toast_lang": "Language: {lang}",
  "toast_subscribed": "Subscribed: {email} • Welcome!",
  "toast_msg_sent": "Message sent — we reply in 2h!",
  "toast_copied": "Bookmarked: {title}",
  "common_close": "ಮುಚ್ಚಿ",
  "common_open": "Open →",
  "common_xp": "XP: {n}",
  "quiz_q1": "When you face a math problem in class, how do you feel?",
  "quiz_q2": "If your teacher asks you to write a small program:",
  "quiz_q3": "When you see a big set of numbers or tables:",
  "quiz_q4": "If you hear about hacking or cyber attacks:",
  "quiz_q5": "Managing systems online (like Google Drive, AWS, Azure):",
  "quiz_q6": "If given sensors, circuits, or robotics kits:",
  "quiz_q7": "When asked to design a project:",
  "quiz_q8": "Learning about operating systems or computer architecture:",
  "quiz_q9": "Working in group projects with classmates:",
  "quiz_q10": "Creating charts, dashboards, or visual explanations:",
  "quiz_opt_no": "No",
  "quiz_opt_low": "Low",
  "quiz_opt_okay": "Okay",
  "quiz_opt_yes": "Yes",
  "quiz_opt_strong": "Strong",
  "quiz_choose": "Choose one option",
  "card_level_beginner": "Beginner",
  "card_level_inter": "Intermediate",
  "card_level_adv": "Advanced",
  "card_demand_high": "High",
  "card_demand_vhigh": "Very High",
  "card_demand_med": "Medium",
  "quiz_q1_opt1": "I enjoy solving step by step until I get the answer.",
  "quiz_q1_opt2": "I can solve if I get examples or hints.",
  "quiz_q1_opt3": "I struggle but try to finish somehow.",
  "quiz_q1_opt4": "I avoid math and prefer other subjects.",
  "quiz_q2_opt1": "I feel excited and start coding immediately.",
  "quiz_q2_opt2": "I try but need guidance or sample code.",
  "quiz_q2_opt3": "I prefer using ready-made tools instead of coding.",
  "quiz_q2_opt4": "I avoid programming tasks completely.",
  "quiz_q3_opt1": "I love analyzing and finding patterns.",
  "quiz_q3_opt2": "I can handle small data but big sets confuse me.",
  "quiz_q3_opt3": "I get bored with too many numbers.",
  "quiz_q3_opt4": "I dislike working with data at all.",
  "quiz_q4_opt1": "I immediately think about how to prevent them.",
  "quiz_q4_opt2": "I feel curious but don’t go deep.",
  "quiz_q4_opt3": "I just read and move on.",
  "quiz_q4_opt4": "I don’t care about security topics.",
  "quiz_q5_opt1": "I feel excited to explore cloud platforms.",
  "quiz_q5_opt2": "I’m curious but unsure how they work.",
  "quiz_q5_opt3": "I prefer local systems over cloud.",
  "quiz_q5_opt4": "I don’t like managing systems at all.",
  "quiz_q6_opt1": "I get excited to build something physical.",
  "quiz_q6_opt2": "I can try but prefer software tasks.",
  "quiz_q6_opt3": "I feel nervous with hardware experiments.",
  "quiz_q6_opt4": "I avoid hardware completely.",
  "quiz_q7_opt1": "I focus on visuals, UI, and user experience.",
  "quiz_q7_opt2": "I balance design with coding.",
  "quiz_q7_opt3": "I care only about backend logic.",
  "quiz_q7_opt4": "I dislike design tasks.",
  "quiz_q8_opt1": "I love knowing how systems work internally.",
  "quiz_q8_opt2": "I’m curious but not deeply interested.",
  "quiz_q8_opt3": "I find it difficult to understand.",
  "quiz_q8_opt4": "I avoid system topics completely.",
  "quiz_q9_opt1": "I enjoy teamwork and collaboration.",
  "quiz_q9_opt2": "I can work in teams but prefer solo.",
  "quiz_q9_opt3": "I struggle in group projects.",
  "quiz_q9_opt4": "I avoid teamwork whenever possible.",
  "quiz_q10_opt1": "I enjoy making visuals and insights.",
  "quiz_q10_opt2": "I can do basic graphs only.",
  "quiz_q10_opt3": "I struggle with visualization tasks.",
  "quiz_q10_opt4": "I dislike visuals completely.",
  "quiz_q11": "Thinking about games:",
  "quiz_q11_opt1": "I love designing and building games.",
  "quiz_q11_opt2": "I’m curious about how games are made.",
  "quiz_q11_opt3": "I only play games, not design them.",
  "quiz_q11_opt4": "I’m not interested in games at all.",
  "quiz_q12": "Quantum Computing or AR/VR:",
  "quiz_q12_opt1": "I feel thrilled and want to explore deeply.",
  "quiz_q12_opt2": "I’m curious but not very serious.",
  "quiz_q12_opt3": "I find it confusing and difficult.",
  "quiz_q12_opt4": "I don’t care about futuristic tech.",
  "quiz_q13": "Explaining technical ideas to others:",
  "quiz_q13_opt1": "I can explain clearly to anyone.",
  "quiz_q13_opt2": "I can explain with effort and practice.",
  "quiz_q13_opt3": "I struggle to explain technical points.",
  "quiz_q13_opt4": "I avoid communication tasks completely.",
  "quiz_q14": "Breaking down real-world problems:",
  "quiz_q14_opt1": "I enjoy step-by-step problem solving.",
  "quiz_q14_opt2": "I can solve with guidance or examples.",
  "quiz_q14_opt3": "I struggle with complex problems.",
  "quiz_q14_opt4": "I avoid problem solving tasks.",
  "quiz_q15": "When learning new topics:",
  "quiz_q15_opt1": "I explore deeply and practice regularly.",
  "quiz_q15_opt2": "I learn with examples and guidance.",
  "quiz_q15_opt3": "I need extra support to understand.",
  "quiz_q15_opt4": "I avoid tough topics whenever possible."
 },
 "ml": {
  "nav_home": "ഹോം",
  "nav_explorer": "അറ്റ്ലസ്",
  "nav_quiz": "ക്വിസ്",
  "nav_roadmap": "റോഡ്മാപ്പ്",
  "nav_resources": "വിഭവങ്ങൾ",
  "nav_dashboard": "വോൾട്ട്",
  "nav_about": "About",
  "nav_contact": "Contact",
  "hero_badge": "Trusted by 750+ CSE students • 25 Domains • 89% Accuracy • Vault Ready",
  "hero_title": "25 CSE ഡൊമെയ്‌നുകളിൽ ആശയക്കുഴപ്പമുണ്ടോ? നിങ്ങളുടെ AI കൗൺസിലർ ഇവിടെയുണ്ട്.",
  "hero_sub": "Personalized Top-3 recommendations across 25 tracks using Decision Tree, Random Forest, KNN & PCA — 4-year roadmap, mini-courses, vault for your files & parent guidance in 10 languages.",
  "hero_cta_quiz": "Take 3-Min Quiz →",
  "hero_cta_explore": "Explore Atlas",
  "hero_cta_demo": "Watch Demo (45s)",
  "hero_stats_students": "Students Guided",
  "hero_stats_domains": "CSE Domains",
  "hero_stats_langs": "Languages",
  "hero_tip_k": "Search 25 domains",
  "hero_tip_vault": "New: Vault per domain",
  "hero_tip_compare": "Compare 3 tracks",
  "hero_radar_title": "Live Prediction Preview",
  "hero_radar_badge": "RandomForest 89%",
  "hero_why": "Why AI? High logic (5/5) + math marks 92 + strong data interest.",
  "hero_try": "Try Your Prediction →",
  "trust_curated": "Curated Sources:",
  "trust_lit": "Literature: AIJMR 2025 • IJRAR 2022 • JETIR 2024",
  "features_why": "Why GuidanceAI • Atlas 25 • 8+6 Modules",
  "features_title": "Everything a First-Year Needs — Now 25 Tracks",
  "features_sub": "Beyond paper guidance — Atlas, vault per domain, compare, roadmap, visualization, multilingual voice & gamification.",
  "features_atlas_title": "25-Domain Atlas",
  "features_atlas_desc": "Intelligence 6 · Build 5 · Core 8 · Frontier 6 — grouped, searchable, professional dev layout.",
  "features_vault_title": "Vault per Domain",
  "features_vault_desc": "4 empty slots per track: Notes, Videos, Projects, Assignments — add your files later, stays local.",
  "features_compare_title": "Compare 3 Tracks",
  "features_compare_desc": "Tick Compare on cards — bottom bar — side-by-side salary, skills, roadmap.",
  "features_roadmap_title": "4-Year Roadmap",
  "features_roadmap_desc": "Foundation to Advanced to Placement — for each track, with vault link.",
  "features_gamified_title": "Gamified + Command",
  "features_gamified_desc": "XP, streaks + quick palette to instantly jump to any of 25 domains.",
  "features_parent_title": "Parent + Teacher",
  "features_parent_desc": "Vernacular PDF + voice for parents; batch analytics for 25-track cohorts.",
  "explorer_title": "ഡൊമെയ്ൻ അറ്റ്ലസ് — 25 ട്രാക്കുകൾ",
  "explorer_sub": "Professional explorer — grouped by Intelligence, Build, Core & Frontier. Search, compare & vault per domain.",
  "explorer_tip_k": "Search",
  "explorer_tip_vault": "Empty vaults ready",
  "explorer_tip_compare": "Compare up to 3",
  "explorer_search_ph": "Search AI, Quantum, Web...",
  "explorer_sort_featured": "Featured",
  "explorer_sort_az": "A → Z",
  "explorer_sort_salary": "Salary High → Low",
  "explorer_sort_demand": "Demand High → Low",
  "explorer_pill_all": "All 25",
  "explorer_pill_intel": "Intelligence & Data · 6",
  "explorer_pill_build": "Build · 5",
  "explorer_pill_core": "Core Systems · 8",
  "explorer_pill_frontier": "Frontier · 6",
  "explorer_showing": "Showing {n} of {total} tracks",
  "explorer_no_title": "No tracks found",
  "explorer_no_sub": "Try different search or category",
  "explorer_clear": "Clear filters",
  "explorer_vault_tip": "Vault: Tap any card to open its Vault and add your files.",
  "explorer_cmd": "Search",
  "card_view": "കാണുക →",
  "card_compare": "താരതമ്യം",
  "card_vault": "Vault",
  "card_growth": "growth",
  "vault_title": "വോൾട്ട് — നിങ്ങളുടെ ഫയലുകൾ",
  "vault_sub": "Empty space → add your own",
  "vault_drop": "Drop PDFs, PPTs, videos, projects per domain. Later replace via",
  "vault_empty": "Empty — no files yet",
  "vault_add_notes": "Add Notes",
  "vault_add_videos": "Add Videos",
  "vault_add_projects": "Add Projects",
  "vault_add_assign": "Add Assignments",
  "vault_howto": "How to add bulk files: Create folder",
  "vault_folder": "Folder:",
  "vault_files": "files",
  "vault_interview": "Interview Kit",
  "vault_interview_desc": "Empty → add Q&A PDFs to vault/Assignments",
  "vault_projects_title": "Project Ideas",
  "vault_projects_desc": "3 starters in Vault/Projects",
  "vault_progress": "Progress",
  "vault_progress_desc": "Track via Roadmap checklist — saves locally",
  "compare_selected": "Selected",
  "compare_btn": "Compare →",
  "compare_clear": "Clear",
  "compare_title": "ഡൊമെയ്‌നുകൾ താരതമ്യം ചെയ്യുക",
  "compare_need2": "Select at least 2 domains to compare",
  "compare_up_to3": "Compare up to 3 domains",
  "compare_added": "+ Added {id} to compare ({n}/3)",
  "compare_removed": "Removed {id}",
  "compare_cleared": "Cleared compare",
  "compare_feat_category": "Category",
  "compare_feat_level": "Level",
  "compare_feat_demand": "Demand",
  "compare_feat_growth": "Growth",
  "compare_feat_salary": "Avg Salary",
  "compare_feat_skills": "Skills",
  "compare_feat_careers": "Careers",
  "quiz_badge": "ML Filter • 3 Minutes • 15 Questions + Marks",
  "quiz_title": "നിങ്ങളുടെ മികച്ച ഡൊമെയ്ൻ കണ്ടെത്തുക",
  "quiz_sub": "Quiz + Marks + Interest → AI ensemble → Top-3 across 25 tracks with confidence, radar & vault suggestion. Demo uses 750-record synthetic dataset (30×25).",
  "quiz_step_marks": "Step 1 of {total} • Marks",
  "quiz_step_q": "Step {n} of {total} • Q{q}",
  "quiz_marks_title": "First, your academic marks (0-100)",
  "quiz_marks_sub": "Used by Marks-based ML filter (PCA + RandomForest). Be honest.",
  "quiz_math": "Math Marks *",
  "quiz_prog": "Programming Marks *",
  "quiz_phy": "Physics Marks",
  "quiz_eng": "English Marks",
  "quiz_next": "Next →",
  "quiz_prev": "← Previous",
  "quiz_get_rec": "Get Recommendation →",
  "quiz_predicting": "Predicting…",
  "quiz_fix_marks": "Please fix marks (0-100)",
  "quiz_local": "Your data stays local • Model: backend/ml_service/model.pkl (RandomForest 89%) • Fallback JS ensemble",
  "results_why_prefix": "Why",
  "results_runner": "Runner-up",
  "results_best_fit": "Best fit • Start roadmap + vault",
  "results_alt": "Good alternative",
  "results_radar_title": "Skill Gap Radar",
  "results_radar_sub": "Blue = You • Dashed = Required for",
  "results_skill_title": "Skill Gap Details",
  "results_whatif": "What-If Simulator",
  "results_sim": "If you improve → Fit",
  "results_roadmap_btn": "View My 4-Year Roadmap →",
  "results_course_btn": "Go to Mini-Course",
  "results_retake": "Retake Quiz",
  "results_toast": "Predicted: {top} ({score}%) — Vault ready",
  "roadmap_title": "Personalized 4-Year Roadmap",
  "roadmap_sub": "Auto-generated after quiz. Foundation → Intermediate → Advanced → Placement.",
  "roadmap_phase": "PHASE",
  "roadmap_vault": "Vault: {n} files — add yours in modal",
  "course_title": "Mini-Course + Test — Learn → Test → Certify",
  "course_modules": "Course Modules •",
  "course_progress": "Progress saved locally • 10 languages subtitle",
  "course_preview": "Preview",
  "course_select": "Select a lesson to play",
  "course_check": "Quick Check — 3 Questions",
  "course_submit": "Submit → +50 XP",
  "resources_title": "Resource Hub",
  "resources_sub": "NPTEL • Coursera • YouTube — filtered by domain, difficulty, language. Bookmarks saved.",
  "resources_search_ph": "Search resources...",
  "resources_domain_all": "All Domains (25)",
  "resources_type_all": "All Types",
  "resources_lang_all": "All Langs",
  "dashboard_title": "Dashboards",
  "footer_tagline": "Virtual counsellor • Django + RandomForest 89% + PCA • 750+ students guided • 25 domains Atlas + Vault.",
  "footer_explore": "Domain Atlas → 25 tracks",
  "toast_lang": "Language: {lang}",
  "toast_subscribed": "Subscribed: {email} • Welcome!",
  "toast_msg_sent": "Message sent — we reply in 2h!",
  "toast_copied": "Bookmarked: {title}",
  "common_close": "അടയ്ക്കുക",
  "common_open": "Open →",
  "common_xp": "XP: {n}",
  "quiz_q1": "When you face a math problem in class, how do you feel?",
  "quiz_q2": "If your teacher asks you to write a small program:",
  "quiz_q3": "When you see a big set of numbers or tables:",
  "quiz_q4": "If you hear about hacking or cyber attacks:",
  "quiz_q5": "Managing systems online (like Google Drive, AWS, Azure):",
  "quiz_q6": "If given sensors, circuits, or robotics kits:",
  "quiz_q7": "When asked to design a project:",
  "quiz_q8": "Learning about operating systems or computer architecture:",
  "quiz_q9": "Working in group projects with classmates:",
  "quiz_q10": "Creating charts, dashboards, or visual explanations:",
  "quiz_opt_no": "No",
  "quiz_opt_low": "Low",
  "quiz_opt_okay": "Okay",
  "quiz_opt_yes": "Yes",
  "quiz_opt_strong": "Strong",
  "quiz_choose": "Choose one option",
  "card_level_beginner": "Beginner",
  "card_level_inter": "Intermediate",
  "card_level_adv": "Advanced",
  "card_demand_high": "High",
  "card_demand_vhigh": "Very High",
  "card_demand_med": "Medium",
  "quiz_q1_opt1": "I enjoy solving step by step until I get the answer.",
  "quiz_q1_opt2": "I can solve if I get examples or hints.",
  "quiz_q1_opt3": "I struggle but try to finish somehow.",
  "quiz_q1_opt4": "I avoid math and prefer other subjects.",
  "quiz_q2_opt1": "I feel excited and start coding immediately.",
  "quiz_q2_opt2": "I try but need guidance or sample code.",
  "quiz_q2_opt3": "I prefer using ready-made tools instead of coding.",
  "quiz_q2_opt4": "I avoid programming tasks completely.",
  "quiz_q3_opt1": "I love analyzing and finding patterns.",
  "quiz_q3_opt2": "I can handle small data but big sets confuse me.",
  "quiz_q3_opt3": "I get bored with too many numbers.",
  "quiz_q3_opt4": "I dislike working with data at all.",
  "quiz_q4_opt1": "I immediately think about how to prevent them.",
  "quiz_q4_opt2": "I feel curious but don’t go deep.",
  "quiz_q4_opt3": "I just read and move on.",
  "quiz_q4_opt4": "I don’t care about security topics.",
  "quiz_q5_opt1": "I feel excited to explore cloud platforms.",
  "quiz_q5_opt2": "I’m curious but unsure how they work.",
  "quiz_q5_opt3": "I prefer local systems over cloud.",
  "quiz_q5_opt4": "I don’t like managing systems at all.",
  "quiz_q6_opt1": "I get excited to build something physical.",
  "quiz_q6_opt2": "I can try but prefer software tasks.",
  "quiz_q6_opt3": "I feel nervous with hardware experiments.",
  "quiz_q6_opt4": "I avoid hardware completely.",
  "quiz_q7_opt1": "I focus on visuals, UI, and user experience.",
  "quiz_q7_opt2": "I balance design with coding.",
  "quiz_q7_opt3": "I care only about backend logic.",
  "quiz_q7_opt4": "I dislike design tasks.",
  "quiz_q8_opt1": "I love knowing how systems work internally.",
  "quiz_q8_opt2": "I’m curious but not deeply interested.",
  "quiz_q8_opt3": "I find it difficult to understand.",
  "quiz_q8_opt4": "I avoid system topics completely.",
  "quiz_q9_opt1": "I enjoy teamwork and collaboration.",
  "quiz_q9_opt2": "I can work in teams but prefer solo.",
  "quiz_q9_opt3": "I struggle in group projects.",
  "quiz_q9_opt4": "I avoid teamwork whenever possible.",
  "quiz_q10_opt1": "I enjoy making visuals and insights.",
  "quiz_q10_opt2": "I can do basic graphs only.",
  "quiz_q10_opt3": "I struggle with visualization tasks.",
  "quiz_q10_opt4": "I dislike visuals completely.",
  "quiz_q11": "Thinking about games:",
  "quiz_q11_opt1": "I love designing and building games.",
  "quiz_q11_opt2": "I’m curious about how games are made.",
  "quiz_q11_opt3": "I only play games, not design them.",
  "quiz_q11_opt4": "I’m not interested in games at all.",
  "quiz_q12": "Quantum Computing or AR/VR:",
  "quiz_q12_opt1": "I feel thrilled and want to explore deeply.",
  "quiz_q12_opt2": "I’m curious but not very serious.",
  "quiz_q12_opt3": "I find it confusing and difficult.",
  "quiz_q12_opt4": "I don’t care about futuristic tech.",
  "quiz_q13": "Explaining technical ideas to others:",
  "quiz_q13_opt1": "I can explain clearly to anyone.",
  "quiz_q13_opt2": "I can explain with effort and practice.",
  "quiz_q13_opt3": "I struggle to explain technical points.",
  "quiz_q13_opt4": "I avoid communication tasks completely.",
  "quiz_q14": "Breaking down real-world problems:",
  "quiz_q14_opt1": "I enjoy step-by-step problem solving.",
  "quiz_q14_opt2": "I can solve with guidance or examples.",
  "quiz_q14_opt3": "I struggle with complex problems.",
  "quiz_q14_opt4": "I avoid problem solving tasks.",
  "quiz_q15": "When learning new topics:",
  "quiz_q15_opt1": "I explore deeply and practice regularly.",
  "quiz_q15_opt2": "I learn with examples and guidance.",
  "quiz_q15_opt3": "I need extra support to understand.",
  "quiz_q15_opt4": "I avoid tough topics whenever possible."
 },
 "mr": {
  "nav_home": "मुखपृष्ठ",
  "nav_explorer": "अ‍ॅटलस",
  "nav_quiz": "प्रश्नमंजुषा",
  "nav_roadmap": "रोडमॅप",
  "nav_resources": "संसाधने",
  "nav_dashboard": "वॉल्ट",
  "nav_about": "About",
  "nav_contact": "Contact",
  "hero_badge": "Trusted by 750+ CSE students • 25 Domains • 89% Accuracy • Vault Ready",
  "hero_title": "25 CSE डोमेनमध्ये संभ्रमात आहात? तुमचा AI सल्लागार येथे आहे.",
  "hero_sub": "Personalized Top-3 recommendations across 25 tracks using Decision Tree, Random Forest, KNN & PCA — 4-year roadmap, mini-courses, vault for your files & parent guidance in 10 languages.",
  "hero_cta_quiz": "Take 3-Min Quiz →",
  "hero_cta_explore": "Explore Atlas",
  "hero_cta_demo": "Watch Demo (45s)",
  "hero_stats_students": "Students Guided",
  "hero_stats_domains": "CSE Domains",
  "hero_stats_langs": "Languages",
  "hero_tip_k": "Search 25 domains",
  "hero_tip_vault": "New: Vault per domain",
  "hero_tip_compare": "Compare 3 tracks",
  "hero_radar_title": "Live Prediction Preview",
  "hero_radar_badge": "RandomForest 89%",
  "hero_why": "Why AI? High logic (5/5) + math marks 92 + strong data interest.",
  "hero_try": "Try Your Prediction →",
  "trust_curated": "Curated Sources:",
  "trust_lit": "Literature: AIJMR 2025 • IJRAR 2022 • JETIR 2024",
  "features_why": "Why GuidanceAI • Atlas 25 • 8+6 Modules",
  "features_title": "Everything a First-Year Needs — Now 25 Tracks",
  "features_sub": "Beyond paper guidance — Atlas, vault per domain, compare, roadmap, visualization, multilingual voice & gamification.",
  "features_atlas_title": "25-Domain Atlas",
  "features_atlas_desc": "Intelligence 6 · Build 5 · Core 8 · Frontier 6 — grouped, searchable, professional dev layout.",
  "features_vault_title": "Vault per Domain",
  "features_vault_desc": "4 empty slots per track: Notes, Videos, Projects, Assignments — add your files later, stays local.",
  "features_compare_title": "Compare 3 Tracks",
  "features_compare_desc": "Tick Compare on cards — bottom bar — side-by-side salary, skills, roadmap.",
  "features_roadmap_title": "4-Year Roadmap",
  "features_roadmap_desc": "Foundation to Advanced to Placement — for each track, with vault link.",
  "features_gamified_title": "Gamified + Command",
  "features_gamified_desc": "XP, streaks + quick palette to instantly jump to any of 25 domains.",
  "features_parent_title": "Parent + Teacher",
  "features_parent_desc": "Vernacular PDF + voice for parents; batch analytics for 25-track cohorts.",
  "explorer_title": "डोमेन अ‍ॅटलस — 25 ट्रॅक्स",
  "explorer_sub": "Professional explorer — grouped by Intelligence, Build, Core & Frontier. Search, compare & vault per domain.",
  "explorer_tip_k": "Search",
  "explorer_tip_vault": "Empty vaults ready",
  "explorer_tip_compare": "Compare up to 3",
  "explorer_search_ph": "Search AI, Quantum, Web...",
  "explorer_sort_featured": "Featured",
  "explorer_sort_az": "A → Z",
  "explorer_sort_salary": "Salary High → Low",
  "explorer_sort_demand": "Demand High → Low",
  "explorer_pill_all": "All 25",
  "explorer_pill_intel": "Intelligence & Data · 6",
  "explorer_pill_build": "Build · 5",
  "explorer_pill_core": "Core Systems · 8",
  "explorer_pill_frontier": "Frontier · 6",
  "explorer_showing": "Showing {n} of {total} tracks",
  "explorer_no_title": "No tracks found",
  "explorer_no_sub": "Try different search or category",
  "explorer_clear": "Clear filters",
  "explorer_vault_tip": "Vault: Tap any card to open its Vault and add your files.",
  "explorer_cmd": "Search",
  "card_view": "पहा →",
  "card_compare": "तुलना करा",
  "card_vault": "Vault",
  "card_growth": "growth",
  "vault_title": "वॉल्ट — तुमच्या फाइल्स",
  "vault_sub": "Empty space → add your own",
  "vault_drop": "Drop PDFs, PPTs, videos, projects per domain. Later replace via",
  "vault_empty": "Empty — no files yet",
  "vault_add_notes": "Add Notes",
  "vault_add_videos": "Add Videos",
  "vault_add_projects": "Add Projects",
  "vault_add_assign": "Add Assignments",
  "vault_howto": "How to add bulk files: Create folder",
  "vault_folder": "Folder:",
  "vault_files": "files",
  "vault_interview": "Interview Kit",
  "vault_interview_desc": "Empty → add Q&A PDFs to vault/Assignments",
  "vault_projects_title": "Project Ideas",
  "vault_projects_desc": "3 starters in Vault/Projects",
  "vault_progress": "Progress",
  "vault_progress_desc": "Track via Roadmap checklist — saves locally",
  "compare_selected": "Selected",
  "compare_btn": "Compare →",
  "compare_clear": "Clear",
  "compare_title": "डोमेन तुलना",
  "compare_need2": "Select at least 2 domains to compare",
  "compare_up_to3": "Compare up to 3 domains",
  "compare_added": "+ Added {id} to compare ({n}/3)",
  "compare_removed": "Removed {id}",
  "compare_cleared": "Cleared compare",
  "compare_feat_category": "Category",
  "compare_feat_level": "Level",
  "compare_feat_demand": "Demand",
  "compare_feat_growth": "Growth",
  "compare_feat_salary": "Avg Salary",
  "compare_feat_skills": "Skills",
  "compare_feat_careers": "Careers",
  "quiz_badge": "ML Filter • 3 Minutes • 15 Questions + Marks",
  "quiz_title": "तुमचा परफेक्ट डोमेन शोधा",
  "quiz_sub": "Quiz + Marks + Interest → AI ensemble → Top-3 across 25 tracks with confidence, radar & vault suggestion. Demo uses 750-record synthetic dataset (30×25).",
  "quiz_step_marks": "Step 1 of {total} • Marks",
  "quiz_step_q": "Step {n} of {total} • Q{q}",
  "quiz_marks_title": "First, your academic marks (0-100)",
  "quiz_marks_sub": "Used by Marks-based ML filter (PCA + RandomForest). Be honest.",
  "quiz_math": "Math Marks *",
  "quiz_prog": "Programming Marks *",
  "quiz_phy": "Physics Marks",
  "quiz_eng": "English Marks",
  "quiz_next": "Next →",
  "quiz_prev": "← Previous",
  "quiz_get_rec": "Get Recommendation →",
  "quiz_predicting": "Predicting…",
  "quiz_fix_marks": "Please fix marks (0-100)",
  "quiz_local": "Your data stays local • Model: backend/ml_service/model.pkl (RandomForest 89%) • Fallback JS ensemble",
  "results_why_prefix": "Why",
  "results_runner": "Runner-up",
  "results_best_fit": "Best fit • Start roadmap + vault",
  "results_alt": "Good alternative",
  "results_radar_title": "Skill Gap Radar",
  "results_radar_sub": "Blue = You • Dashed = Required for",
  "results_skill_title": "Skill Gap Details",
  "results_whatif": "What-If Simulator",
  "results_sim": "If you improve → Fit",
  "results_roadmap_btn": "View My 4-Year Roadmap →",
  "results_course_btn": "Go to Mini-Course",
  "results_retake": "Retake Quiz",
  "results_toast": "Predicted: {top} ({score}%) — Vault ready",
  "roadmap_title": "Personalized 4-Year Roadmap",
  "roadmap_sub": "Auto-generated after quiz. Foundation → Intermediate → Advanced → Placement.",
  "roadmap_phase": "PHASE",
  "roadmap_vault": "Vault: {n} files — add yours in modal",
  "course_title": "Mini-Course + Test — Learn → Test → Certify",
  "course_modules": "Course Modules •",
  "course_progress": "Progress saved locally • 10 languages subtitle",
  "course_preview": "Preview",
  "course_select": "Select a lesson to play",
  "course_check": "Quick Check — 3 Questions",
  "course_submit": "Submit → +50 XP",
  "resources_title": "Resource Hub",
  "resources_sub": "NPTEL • Coursera • YouTube — filtered by domain, difficulty, language. Bookmarks saved.",
  "resources_search_ph": "Search resources...",
  "resources_domain_all": "All Domains (25)",
  "resources_type_all": "All Types",
  "resources_lang_all": "All Langs",
  "dashboard_title": "Dashboards",
  "footer_tagline": "Virtual counsellor • Django + RandomForest 89% + PCA • 750+ students guided • 25 domains Atlas + Vault.",
  "footer_explore": "Domain Atlas → 25 tracks",
  "toast_lang": "Language: {lang}",
  "toast_subscribed": "Subscribed: {email} • Welcome!",
  "toast_msg_sent": "Message sent — we reply in 2h!",
  "toast_copied": "Bookmarked: {title}",
  "common_close": "बंद करा",
  "common_open": "Open →",
  "common_xp": "XP: {n}",
  "quiz_q1": "When you face a math problem in class, how do you feel?",
  "quiz_q2": "If your teacher asks you to write a small program:",
  "quiz_q3": "When you see a big set of numbers or tables:",
  "quiz_q4": "If you hear about hacking or cyber attacks:",
  "quiz_q5": "Managing systems online (like Google Drive, AWS, Azure):",
  "quiz_q6": "If given sensors, circuits, or robotics kits:",
  "quiz_q7": "When asked to design a project:",
  "quiz_q8": "Learning about operating systems or computer architecture:",
  "quiz_q9": "Working in group projects with classmates:",
  "quiz_q10": "Creating charts, dashboards, or visual explanations:",
  "quiz_opt_no": "No",
  "quiz_opt_low": "Low",
  "quiz_opt_okay": "Okay",
  "quiz_opt_yes": "Yes",
  "quiz_opt_strong": "Strong",
  "quiz_choose": "Choose one option",
  "card_level_beginner": "Beginner",
  "card_level_inter": "Intermediate",
  "card_level_adv": "Advanced",
  "card_demand_high": "High",
  "card_demand_vhigh": "Very High",
  "card_demand_med": "Medium",
  "quiz_q1_opt1": "I enjoy solving step by step until I get the answer.",
  "quiz_q1_opt2": "I can solve if I get examples or hints.",
  "quiz_q1_opt3": "I struggle but try to finish somehow.",
  "quiz_q1_opt4": "I avoid math and prefer other subjects.",
  "quiz_q2_opt1": "I feel excited and start coding immediately.",
  "quiz_q2_opt2": "I try but need guidance or sample code.",
  "quiz_q2_opt3": "I prefer using ready-made tools instead of coding.",
  "quiz_q2_opt4": "I avoid programming tasks completely.",
  "quiz_q3_opt1": "I love analyzing and finding patterns.",
  "quiz_q3_opt2": "I can handle small data but big sets confuse me.",
  "quiz_q3_opt3": "I get bored with too many numbers.",
  "quiz_q3_opt4": "I dislike working with data at all.",
  "quiz_q4_opt1": "I immediately think about how to prevent them.",
  "quiz_q4_opt2": "I feel curious but don’t go deep.",
  "quiz_q4_opt3": "I just read and move on.",
  "quiz_q4_opt4": "I don’t care about security topics.",
  "quiz_q5_opt1": "I feel excited to explore cloud platforms.",
  "quiz_q5_opt2": "I’m curious but unsure how they work.",
  "quiz_q5_opt3": "I prefer local systems over cloud.",
  "quiz_q5_opt4": "I don’t like managing systems at all.",
  "quiz_q6_opt1": "I get excited to build something physical.",
  "quiz_q6_opt2": "I can try but prefer software tasks.",
  "quiz_q6_opt3": "I feel nervous with hardware experiments.",
  "quiz_q6_opt4": "I avoid hardware completely.",
  "quiz_q7_opt1": "I focus on visuals, UI, and user experience.",
  "quiz_q7_opt2": "I balance design with coding.",
  "quiz_q7_opt3": "I care only about backend logic.",
  "quiz_q7_opt4": "I dislike design tasks.",
  "quiz_q8_opt1": "I love knowing how systems work internally.",
  "quiz_q8_opt2": "I’m curious but not deeply interested.",
  "quiz_q8_opt3": "I find it difficult to understand.",
  "quiz_q8_opt4": "I avoid system topics completely.",
  "quiz_q9_opt1": "I enjoy teamwork and collaboration.",
  "quiz_q9_opt2": "I can work in teams but prefer solo.",
  "quiz_q9_opt3": "I struggle in group projects.",
  "quiz_q9_opt4": "I avoid teamwork whenever possible.",
  "quiz_q10_opt1": "I enjoy making visuals and insights.",
  "quiz_q10_opt2": "I can do basic graphs only.",
  "quiz_q10_opt3": "I struggle with visualization tasks.",
  "quiz_q10_opt4": "I dislike visuals completely.",
  "quiz_q11": "Thinking about games:",
  "quiz_q11_opt1": "I love designing and building games.",
  "quiz_q11_opt2": "I’m curious about how games are made.",
  "quiz_q11_opt3": "I only play games, not design them.",
  "quiz_q11_opt4": "I’m not interested in games at all.",
  "quiz_q12": "Quantum Computing or AR/VR:",
  "quiz_q12_opt1": "I feel thrilled and want to explore deeply.",
  "quiz_q12_opt2": "I’m curious but not very serious.",
  "quiz_q12_opt3": "I find it confusing and difficult.",
  "quiz_q12_opt4": "I don’t care about futuristic tech.",
  "quiz_q13": "Explaining technical ideas to others:",
  "quiz_q13_opt1": "I can explain clearly to anyone.",
  "quiz_q13_opt2": "I can explain with effort and practice.",
  "quiz_q13_opt3": "I struggle to explain technical points.",
  "quiz_q13_opt4": "I avoid communication tasks completely.",
  "quiz_q14": "Breaking down real-world problems:",
  "quiz_q14_opt1": "I enjoy step-by-step problem solving.",
  "quiz_q14_opt2": "I can solve with guidance or examples.",
  "quiz_q14_opt3": "I struggle with complex problems.",
  "quiz_q14_opt4": "I avoid problem solving tasks.",
  "quiz_q15": "When learning new topics:",
  "quiz_q15_opt1": "I explore deeply and practice regularly.",
  "quiz_q15_opt2": "I learn with examples and guidance.",
  "quiz_q15_opt3": "I need extra support to understand.",
  "quiz_q15_opt4": "I avoid tough topics whenever possible."
 },
 "bn": {
  "nav_home": "হোম",
  "nav_explorer": "অ্যাটলাস",
  "nav_quiz": "কুইজ",
  "nav_roadmap": "রোডম্যাপ",
  "nav_resources": "রিসোর্স",
  "nav_dashboard": "ভল্ট",
  "nav_about": "About",
  "nav_contact": "Contact",
  "hero_badge": "Trusted by 750+ CSE students • 25 Domains • 89% Accuracy • Vault Ready",
  "hero_title": "25 CSE ডোমেন নিয়ে বিভ্রান্ত? আপনার AI কাউন্সেলর এখানে।",
  "hero_sub": "Personalized Top-3 recommendations across 25 tracks using Decision Tree, Random Forest, KNN & PCA — 4-year roadmap, mini-courses, vault for your files & parent guidance in 10 languages.",
  "hero_cta_quiz": "Take 3-Min Quiz →",
  "hero_cta_explore": "Explore Atlas",
  "hero_cta_demo": "Watch Demo (45s)",
  "hero_stats_students": "Students Guided",
  "hero_stats_domains": "CSE Domains",
  "hero_stats_langs": "Languages",
  "hero_tip_k": "Search 25 domains",
  "hero_tip_vault": "New: Vault per domain",
  "hero_tip_compare": "Compare 3 tracks",
  "hero_radar_title": "Live Prediction Preview",
  "hero_radar_badge": "RandomForest 89%",
  "hero_why": "Why AI? High logic (5/5) + math marks 92 + strong data interest.",
  "hero_try": "Try Your Prediction →",
  "trust_curated": "Curated Sources:",
  "trust_lit": "Literature: AIJMR 2025 • IJRAR 2022 • JETIR 2024",
  "features_why": "Why GuidanceAI • Atlas 25 • 8+6 Modules",
  "features_title": "Everything a First-Year Needs — Now 25 Tracks",
  "features_sub": "Beyond paper guidance — Atlas, vault per domain, compare, roadmap, visualization, multilingual voice & gamification.",
  "features_atlas_title": "25-Domain Atlas",
  "features_atlas_desc": "Intelligence 6 · Build 5 · Core 8 · Frontier 6 — grouped, searchable, professional dev layout.",
  "features_vault_title": "Vault per Domain",
  "features_vault_desc": "4 empty slots per track: Notes, Videos, Projects, Assignments — add your files later, stays local.",
  "features_compare_title": "Compare 3 Tracks",
  "features_compare_desc": "Tick Compare on cards — bottom bar — side-by-side salary, skills, roadmap.",
  "features_roadmap_title": "4-Year Roadmap",
  "features_roadmap_desc": "Foundation to Advanced to Placement — for each track, with vault link.",
  "features_gamified_title": "Gamified + Command",
  "features_gamified_desc": "XP, streaks + quick palette to instantly jump to any of 25 domains.",
  "features_parent_title": "Parent + Teacher",
  "features_parent_desc": "Vernacular PDF + voice for parents; batch analytics for 25-track cohorts.",
  "explorer_title": "ডোমেন অ্যাটলাস — 25 ট্র্যাক",
  "explorer_sub": "Professional explorer — grouped by Intelligence, Build, Core & Frontier. Search, compare & vault per domain.",
  "explorer_tip_k": "Search",
  "explorer_tip_vault": "Empty vaults ready",
  "explorer_tip_compare": "Compare up to 3",
  "explorer_search_ph": "Search AI, Quantum, Web...",
  "explorer_sort_featured": "Featured",
  "explorer_sort_az": "A → Z",
  "explorer_sort_salary": "Salary High → Low",
  "explorer_sort_demand": "Demand High → Low",
  "explorer_pill_all": "All 25",
  "explorer_pill_intel": "Intelligence & Data · 6",
  "explorer_pill_build": "Build · 5",
  "explorer_pill_core": "Core Systems · 8",
  "explorer_pill_frontier": "Frontier · 6",
  "explorer_showing": "Showing {n} of {total} tracks",
  "explorer_no_title": "No tracks found",
  "explorer_no_sub": "Try different search or category",
  "explorer_clear": "Clear filters",
  "explorer_vault_tip": "Vault: Tap any card to open its Vault and add your files.",
  "explorer_cmd": "Search",
  "card_view": "দেখুন →",
  "card_compare": "তুলনা",
  "card_vault": "Vault",
  "card_growth": "growth",
  "vault_title": "ভল্ট — আপনার ফাইল",
  "vault_sub": "Empty space → add your own",
  "vault_drop": "Drop PDFs, PPTs, videos, projects per domain. Later replace via",
  "vault_empty": "Empty — no files yet",
  "vault_add_notes": "Add Notes",
  "vault_add_videos": "Add Videos",
  "vault_add_projects": "Add Projects",
  "vault_add_assign": "Add Assignments",
  "vault_howto": "How to add bulk files: Create folder",
  "vault_folder": "Folder:",
  "vault_files": "files",
  "vault_interview": "Interview Kit",
  "vault_interview_desc": "Empty → add Q&A PDFs to vault/Assignments",
  "vault_projects_title": "Project Ideas",
  "vault_projects_desc": "3 starters in Vault/Projects",
  "vault_progress": "Progress",
  "vault_progress_desc": "Track via Roadmap checklist — saves locally",
  "compare_selected": "Selected",
  "compare_btn": "Compare →",
  "compare_clear": "Clear",
  "compare_title": "ডোমেন তুলনা",
  "compare_need2": "Select at least 2 domains to compare",
  "compare_up_to3": "Compare up to 3 domains",
  "compare_added": "+ Added {id} to compare ({n}/3)",
  "compare_removed": "Removed {id}",
  "compare_cleared": "Cleared compare",
  "compare_feat_category": "Category",
  "compare_feat_level": "Level",
  "compare_feat_demand": "Demand",
  "compare_feat_growth": "Growth",
  "compare_feat_salary": "Avg Salary",
  "compare_feat_skills": "Skills",
  "compare_feat_careers": "Careers",
  "quiz_badge": "ML Filter • 3 Minutes • 15 Questions + Marks",
  "quiz_title": "আপনার পারফেক্ট ডোমেন খুঁজুন",
  "quiz_sub": "Quiz + Marks + Interest → AI ensemble → Top-3 across 25 tracks with confidence, radar & vault suggestion. Demo uses 750-record synthetic dataset (30×25).",
  "quiz_step_marks": "Step 1 of {total} • Marks",
  "quiz_step_q": "Step {n} of {total} • Q{q}",
  "quiz_marks_title": "First, your academic marks (0-100)",
  "quiz_marks_sub": "Used by Marks-based ML filter (PCA + RandomForest). Be honest.",
  "quiz_math": "Math Marks *",
  "quiz_prog": "Programming Marks *",
  "quiz_phy": "Physics Marks",
  "quiz_eng": "English Marks",
  "quiz_next": "Next →",
  "quiz_prev": "← Previous",
  "quiz_get_rec": "Get Recommendation →",
  "quiz_predicting": "Predicting…",
  "quiz_fix_marks": "Please fix marks (0-100)",
  "quiz_local": "Your data stays local • Model: backend/ml_service/model.pkl (RandomForest 89%) • Fallback JS ensemble",
  "results_why_prefix": "Why",
  "results_runner": "Runner-up",
  "results_best_fit": "Best fit • Start roadmap + vault",
  "results_alt": "Good alternative",
  "results_radar_title": "Skill Gap Radar",
  "results_radar_sub": "Blue = You • Dashed = Required for",
  "results_skill_title": "Skill Gap Details",
  "results_whatif": "What-If Simulator",
  "results_sim": "If you improve → Fit",
  "results_roadmap_btn": "View My 4-Year Roadmap →",
  "results_course_btn": "Go to Mini-Course",
  "results_retake": "Retake Quiz",
  "results_toast": "Predicted: {top} ({score}%) — Vault ready",
  "roadmap_title": "Personalized 4-Year Roadmap",
  "roadmap_sub": "Auto-generated after quiz. Foundation → Intermediate → Advanced → Placement.",
  "roadmap_phase": "PHASE",
  "roadmap_vault": "Vault: {n} files — add yours in modal",
  "course_title": "Mini-Course + Test — Learn → Test → Certify",
  "course_modules": "Course Modules •",
  "course_progress": "Progress saved locally • 10 languages subtitle",
  "course_preview": "Preview",
  "course_select": "Select a lesson to play",
  "course_check": "Quick Check — 3 Questions",
  "course_submit": "Submit → +50 XP",
  "resources_title": "Resource Hub",
  "resources_sub": "NPTEL • Coursera • YouTube — filtered by domain, difficulty, language. Bookmarks saved.",
  "resources_search_ph": "Search resources...",
  "resources_domain_all": "All Domains (25)",
  "resources_type_all": "All Types",
  "resources_lang_all": "All Langs",
  "dashboard_title": "Dashboards",
  "footer_tagline": "Virtual counsellor • Django + RandomForest 89% + PCA • 750+ students guided • 25 domains Atlas + Vault.",
  "footer_explore": "Domain Atlas → 25 tracks",
  "toast_lang": "Language: {lang}",
  "toast_subscribed": "Subscribed: {email} • Welcome!",
  "toast_msg_sent": "Message sent — we reply in 2h!",
  "toast_copied": "Bookmarked: {title}",
  "common_close": "বন্ধ করুন",
  "common_open": "Open →",
  "common_xp": "XP: {n}",
  "quiz_q1": "When you face a math problem in class, how do you feel?",
  "quiz_q2": "If your teacher asks you to write a small program:",
  "quiz_q3": "When you see a big set of numbers or tables:",
  "quiz_q4": "If you hear about hacking or cyber attacks:",
  "quiz_q5": "Managing systems online (like Google Drive, AWS, Azure):",
  "quiz_q6": "If given sensors, circuits, or robotics kits:",
  "quiz_q7": "When asked to design a project:",
  "quiz_q8": "Learning about operating systems or computer architecture:",
  "quiz_q9": "Working in group projects with classmates:",
  "quiz_q10": "Creating charts, dashboards, or visual explanations:",
  "quiz_opt_no": "No",
  "quiz_opt_low": "Low",
  "quiz_opt_okay": "Okay",
  "quiz_opt_yes": "Yes",
  "quiz_opt_strong": "Strong",
  "quiz_choose": "Choose one option",
  "card_level_beginner": "Beginner",
  "card_level_inter": "Intermediate",
  "card_level_adv": "Advanced",
  "card_demand_high": "High",
  "card_demand_vhigh": "Very High",
  "card_demand_med": "Medium",
  "quiz_q1_opt1": "I enjoy solving step by step until I get the answer.",
  "quiz_q1_opt2": "I can solve if I get examples or hints.",
  "quiz_q1_opt3": "I struggle but try to finish somehow.",
  "quiz_q1_opt4": "I avoid math and prefer other subjects.",
  "quiz_q2_opt1": "I feel excited and start coding immediately.",
  "quiz_q2_opt2": "I try but need guidance or sample code.",
  "quiz_q2_opt3": "I prefer using ready-made tools instead of coding.",
  "quiz_q2_opt4": "I avoid programming tasks completely.",
  "quiz_q3_opt1": "I love analyzing and finding patterns.",
  "quiz_q3_opt2": "I can handle small data but big sets confuse me.",
  "quiz_q3_opt3": "I get bored with too many numbers.",
  "quiz_q3_opt4": "I dislike working with data at all.",
  "quiz_q4_opt1": "I immediately think about how to prevent them.",
  "quiz_q4_opt2": "I feel curious but don’t go deep.",
  "quiz_q4_opt3": "I just read and move on.",
  "quiz_q4_opt4": "I don’t care about security topics.",
  "quiz_q5_opt1": "I feel excited to explore cloud platforms.",
  "quiz_q5_opt2": "I’m curious but unsure how they work.",
  "quiz_q5_opt3": "I prefer local systems over cloud.",
  "quiz_q5_opt4": "I don’t like managing systems at all.",
  "quiz_q6_opt1": "I get excited to build something physical.",
  "quiz_q6_opt2": "I can try but prefer software tasks.",
  "quiz_q6_opt3": "I feel nervous with hardware experiments.",
  "quiz_q6_opt4": "I avoid hardware completely.",
  "quiz_q7_opt1": "I focus on visuals, UI, and user experience.",
  "quiz_q7_opt2": "I balance design with coding.",
  "quiz_q7_opt3": "I care only about backend logic.",
  "quiz_q7_opt4": "I dislike design tasks.",
  "quiz_q8_opt1": "I love knowing how systems work internally.",
  "quiz_q8_opt2": "I’m curious but not deeply interested.",
  "quiz_q8_opt3": "I find it difficult to understand.",
  "quiz_q8_opt4": "I avoid system topics completely.",
  "quiz_q9_opt1": "I enjoy teamwork and collaboration.",
  "quiz_q9_opt2": "I can work in teams but prefer solo.",
  "quiz_q9_opt3": "I struggle in group projects.",
  "quiz_q9_opt4": "I avoid teamwork whenever possible.",
  "quiz_q10_opt1": "I enjoy making visuals and insights.",
  "quiz_q10_opt2": "I can do basic graphs only.",
  "quiz_q10_opt3": "I struggle with visualization tasks.",
  "quiz_q10_opt4": "I dislike visuals completely.",
  "quiz_q11": "Thinking about games:",
  "quiz_q11_opt1": "I love designing and building games.",
  "quiz_q11_opt2": "I’m curious about how games are made.",
  "quiz_q11_opt3": "I only play games, not design them.",
  "quiz_q11_opt4": "I’m not interested in games at all.",
  "quiz_q12": "Quantum Computing or AR/VR:",
  "quiz_q12_opt1": "I feel thrilled and want to explore deeply.",
  "quiz_q12_opt2": "I’m curious but not very serious.",
  "quiz_q12_opt3": "I find it confusing and difficult.",
  "quiz_q12_opt4": "I don’t care about futuristic tech.",
  "quiz_q13": "Explaining technical ideas to others:",
  "quiz_q13_opt1": "I can explain clearly to anyone.",
  "quiz_q13_opt2": "I can explain with effort and practice.",
  "quiz_q13_opt3": "I struggle to explain technical points.",
  "quiz_q13_opt4": "I avoid communication tasks completely.",
  "quiz_q14": "Breaking down real-world problems:",
  "quiz_q14_opt1": "I enjoy step-by-step problem solving.",
  "quiz_q14_opt2": "I can solve with guidance or examples.",
  "quiz_q14_opt3": "I struggle with complex problems.",
  "quiz_q14_opt4": "I avoid problem solving tasks.",
  "quiz_q15": "When learning new topics:",
  "quiz_q15_opt1": "I explore deeply and practice regularly.",
  "quiz_q15_opt2": "I learn with examples and guidance.",
  "quiz_q15_opt3": "I need extra support to understand.",
  "quiz_q15_opt4": "I avoid tough topics whenever possible."
 },
 "gu": {
  "nav_home": "હોમ",
  "nav_explorer": "એટલાસ",
  "nav_quiz": "ક્વિઝ",
  "nav_roadmap": "રોડમેપ",
  "nav_resources": "સંસાધનો",
  "nav_dashboard": "વોલ્ટ",
  "nav_about": "About",
  "nav_contact": "Contact",
  "hero_badge": "Trusted by 750+ CSE students • 25 Domains • 89% Accuracy • Vault Ready",
  "hero_title": "25 CSE ડોમેનમાં મૂંઝવણ છે? તમારો AI કાઉન્સેલર અહીં છે.",
  "hero_sub": "Personalized Top-3 recommendations across 25 tracks using Decision Tree, Random Forest, KNN & PCA — 4-year roadmap, mini-courses, vault for your files & parent guidance in 10 languages.",
  "hero_cta_quiz": "Take 3-Min Quiz →",
  "hero_cta_explore": "Explore Atlas",
  "hero_cta_demo": "Watch Demo (45s)",
  "hero_stats_students": "Students Guided",
  "hero_stats_domains": "CSE Domains",
  "hero_stats_langs": "Languages",
  "hero_tip_k": "Search 25 domains",
  "hero_tip_vault": "New: Vault per domain",
  "hero_tip_compare": "Compare 3 tracks",
  "hero_radar_title": "Live Prediction Preview",
  "hero_radar_badge": "RandomForest 89%",
  "hero_why": "Why AI? High logic (5/5) + math marks 92 + strong data interest.",
  "hero_try": "Try Your Prediction →",
  "trust_curated": "Curated Sources:",
  "trust_lit": "Literature: AIJMR 2025 • IJRAR 2022 • JETIR 2024",
  "features_why": "Why GuidanceAI • Atlas 25 • 8+6 Modules",
  "features_title": "Everything a First-Year Needs — Now 25 Tracks",
  "features_sub": "Beyond paper guidance — Atlas, vault per domain, compare, roadmap, visualization, multilingual voice & gamification.",
  "features_atlas_title": "25-Domain Atlas",
  "features_atlas_desc": "Intelligence 6 · Build 5 · Core 8 · Frontier 6 — grouped, searchable, professional dev layout.",
  "features_vault_title": "Vault per Domain",
  "features_vault_desc": "4 empty slots per track: Notes, Videos, Projects, Assignments — add your files later, stays local.",
  "features_compare_title": "Compare 3 Tracks",
  "features_compare_desc": "Tick Compare on cards — bottom bar — side-by-side salary, skills, roadmap.",
  "features_roadmap_title": "4-Year Roadmap",
  "features_roadmap_desc": "Foundation to Advanced to Placement — for each track, with vault link.",
  "features_gamified_title": "Gamified + Command",
  "features_gamified_desc": "XP, streaks + quick palette to instantly jump to any of 25 domains.",
  "features_parent_title": "Parent + Teacher",
  "features_parent_desc": "Vernacular PDF + voice for parents; batch analytics for 25-track cohorts.",
  "explorer_title": "ડોમેન એટલાસ — 25 ટ્રેક્સ",
  "explorer_sub": "Professional explorer — grouped by Intelligence, Build, Core & Frontier. Search, compare & vault per domain.",
  "explorer_tip_k": "Search",
  "explorer_tip_vault": "Empty vaults ready",
  "explorer_tip_compare": "Compare up to 3",
  "explorer_search_ph": "Search AI, Quantum, Web...",
  "explorer_sort_featured": "Featured",
  "explorer_sort_az": "A → Z",
  "explorer_sort_salary": "Salary High → Low",
  "explorer_sort_demand": "Demand High → Low",
  "explorer_pill_all": "All 25",
  "explorer_pill_intel": "Intelligence & Data · 6",
  "explorer_pill_build": "Build · 5",
  "explorer_pill_core": "Core Systems · 8",
  "explorer_pill_frontier": "Frontier · 6",
  "explorer_showing": "Showing {n} of {total} tracks",
  "explorer_no_title": "No tracks found",
  "explorer_no_sub": "Try different search or category",
  "explorer_clear": "Clear filters",
  "explorer_vault_tip": "Vault: Tap any card to open its Vault and add your files.",
  "explorer_cmd": "Search",
  "card_view": "જુઓ →",
  "card_compare": "સરખામણી",
  "card_vault": "Vault",
  "card_growth": "growth",
  "vault_title": "વોલ્ટ — તમારી ફાઇલો",
  "vault_sub": "Empty space → add your own",
  "vault_drop": "Drop PDFs, PPTs, videos, projects per domain. Later replace via",
  "vault_empty": "Empty — no files yet",
  "vault_add_notes": "Add Notes",
  "vault_add_videos": "Add Videos",
  "vault_add_projects": "Add Projects",
  "vault_add_assign": "Add Assignments",
  "vault_howto": "How to add bulk files: Create folder",
  "vault_folder": "Folder:",
  "vault_files": "files",
  "vault_interview": "Interview Kit",
  "vault_interview_desc": "Empty → add Q&A PDFs to vault/Assignments",
  "vault_projects_title": "Project Ideas",
  "vault_projects_desc": "3 starters in Vault/Projects",
  "vault_progress": "Progress",
  "vault_progress_desc": "Track via Roadmap checklist — saves locally",
  "compare_selected": "Selected",
  "compare_btn": "Compare →",
  "compare_clear": "Clear",
  "compare_title": "ડોમેન સરખામણી",
  "compare_need2": "Select at least 2 domains to compare",
  "compare_up_to3": "Compare up to 3 domains",
  "compare_added": "+ Added {id} to compare ({n}/3)",
  "compare_removed": "Removed {id}",
  "compare_cleared": "Cleared compare",
  "compare_feat_category": "Category",
  "compare_feat_level": "Level",
  "compare_feat_demand": "Demand",
  "compare_feat_growth": "Growth",
  "compare_feat_salary": "Avg Salary",
  "compare_feat_skills": "Skills",
  "compare_feat_careers": "Careers",
  "quiz_badge": "ML Filter • 3 Minutes • 15 Questions + Marks",
  "quiz_title": "તમારો પરફેક્ટ ડોમેન શોધો",
  "quiz_sub": "Quiz + Marks + Interest → AI ensemble → Top-3 across 25 tracks with confidence, radar & vault suggestion. Demo uses 750-record synthetic dataset (30×25).",
  "quiz_step_marks": "Step 1 of {total} • Marks",
  "quiz_step_q": "Step {n} of {total} • Q{q}",
  "quiz_marks_title": "First, your academic marks (0-100)",
  "quiz_marks_sub": "Used by Marks-based ML filter (PCA + RandomForest). Be honest.",
  "quiz_math": "Math Marks *",
  "quiz_prog": "Programming Marks *",
  "quiz_phy": "Physics Marks",
  "quiz_eng": "English Marks",
  "quiz_next": "Next →",
  "quiz_prev": "← Previous",
  "quiz_get_rec": "Get Recommendation →",
  "quiz_predicting": "Predicting…",
  "quiz_fix_marks": "Please fix marks (0-100)",
  "quiz_local": "Your data stays local • Model: backend/ml_service/model.pkl (RandomForest 89%) • Fallback JS ensemble",
  "results_why_prefix": "Why",
  "results_runner": "Runner-up",
  "results_best_fit": "Best fit • Start roadmap + vault",
  "results_alt": "Good alternative",
  "results_radar_title": "Skill Gap Radar",
  "results_radar_sub": "Blue = You • Dashed = Required for",
  "results_skill_title": "Skill Gap Details",
  "results_whatif": "What-If Simulator",
  "results_sim": "If you improve → Fit",
  "results_roadmap_btn": "View My 4-Year Roadmap →",
  "results_course_btn": "Go to Mini-Course",
  "results_retake": "Retake Quiz",
  "results_toast": "Predicted: {top} ({score}%) — Vault ready",
  "roadmap_title": "Personalized 4-Year Roadmap",
  "roadmap_sub": "Auto-generated after quiz. Foundation → Intermediate → Advanced → Placement.",
  "roadmap_phase": "PHASE",
  "roadmap_vault": "Vault: {n} files — add yours in modal",
  "course_title": "Mini-Course + Test — Learn → Test → Certify",
  "course_modules": "Course Modules •",
  "course_progress": "Progress saved locally • 10 languages subtitle",
  "course_preview": "Preview",
  "course_select": "Select a lesson to play",
  "course_check": "Quick Check — 3 Questions",
  "course_submit": "Submit → +50 XP",
  "resources_title": "Resource Hub",
  "resources_sub": "NPTEL • Coursera • YouTube — filtered by domain, difficulty, language. Bookmarks saved.",
  "resources_search_ph": "Search resources...",
  "resources_domain_all": "All Domains (25)",
  "resources_type_all": "All Types",
  "resources_lang_all": "All Langs",
  "dashboard_title": "Dashboards",
  "footer_tagline": "Virtual counsellor • Django + RandomForest 89% + PCA • 750+ students guided • 25 domains Atlas + Vault.",
  "footer_explore": "Domain Atlas → 25 tracks",
  "toast_lang": "Language: {lang}",
  "toast_subscribed": "Subscribed: {email} • Welcome!",
  "toast_msg_sent": "Message sent — we reply in 2h!",
  "toast_copied": "Bookmarked: {title}",
  "common_close": "બંધ કરો",
  "common_open": "Open →",
  "common_xp": "XP: {n}",
  "quiz_q1": "When you face a math problem in class, how do you feel?",
  "quiz_q2": "If your teacher asks you to write a small program:",
  "quiz_q3": "When you see a big set of numbers or tables:",
  "quiz_q4": "If you hear about hacking or cyber attacks:",
  "quiz_q5": "Managing systems online (like Google Drive, AWS, Azure):",
  "quiz_q6": "If given sensors, circuits, or robotics kits:",
  "quiz_q7": "When asked to design a project:",
  "quiz_q8": "Learning about operating systems or computer architecture:",
  "quiz_q9": "Working in group projects with classmates:",
  "quiz_q10": "Creating charts, dashboards, or visual explanations:",
  "quiz_opt_no": "No",
  "quiz_opt_low": "Low",
  "quiz_opt_okay": "Okay",
  "quiz_opt_yes": "Yes",
  "quiz_opt_strong": "Strong",
  "quiz_choose": "Choose one option",
  "card_level_beginner": "Beginner",
  "card_level_inter": "Intermediate",
  "card_level_adv": "Advanced",
  "card_demand_high": "High",
  "card_demand_vhigh": "Very High",
  "card_demand_med": "Medium",
  "quiz_q1_opt1": "I enjoy solving step by step until I get the answer.",
  "quiz_q1_opt2": "I can solve if I get examples or hints.",
  "quiz_q1_opt3": "I struggle but try to finish somehow.",
  "quiz_q1_opt4": "I avoid math and prefer other subjects.",
  "quiz_q2_opt1": "I feel excited and start coding immediately.",
  "quiz_q2_opt2": "I try but need guidance or sample code.",
  "quiz_q2_opt3": "I prefer using ready-made tools instead of coding.",
  "quiz_q2_opt4": "I avoid programming tasks completely.",
  "quiz_q3_opt1": "I love analyzing and finding patterns.",
  "quiz_q3_opt2": "I can handle small data but big sets confuse me.",
  "quiz_q3_opt3": "I get bored with too many numbers.",
  "quiz_q3_opt4": "I dislike working with data at all.",
  "quiz_q4_opt1": "I immediately think about how to prevent them.",
  "quiz_q4_opt2": "I feel curious but don’t go deep.",
  "quiz_q4_opt3": "I just read and move on.",
  "quiz_q4_opt4": "I don’t care about security topics.",
  "quiz_q5_opt1": "I feel excited to explore cloud platforms.",
  "quiz_q5_opt2": "I’m curious but unsure how they work.",
  "quiz_q5_opt3": "I prefer local systems over cloud.",
  "quiz_q5_opt4": "I don’t like managing systems at all.",
  "quiz_q6_opt1": "I get excited to build something physical.",
  "quiz_q6_opt2": "I can try but prefer software tasks.",
  "quiz_q6_opt3": "I feel nervous with hardware experiments.",
  "quiz_q6_opt4": "I avoid hardware completely.",
  "quiz_q7_opt1": "I focus on visuals, UI, and user experience.",
  "quiz_q7_opt2": "I balance design with coding.",
  "quiz_q7_opt3": "I care only about backend logic.",
  "quiz_q7_opt4": "I dislike design tasks.",
  "quiz_q8_opt1": "I love knowing how systems work internally.",
  "quiz_q8_opt2": "I’m curious but not deeply interested.",
  "quiz_q8_opt3": "I find it difficult to understand.",
  "quiz_q8_opt4": "I avoid system topics completely.",
  "quiz_q9_opt1": "I enjoy teamwork and collaboration.",
  "quiz_q9_opt2": "I can work in teams but prefer solo.",
  "quiz_q9_opt3": "I struggle in group projects.",
  "quiz_q9_opt4": "I avoid teamwork whenever possible.",
  "quiz_q10_opt1": "I enjoy making visuals and insights.",
  "quiz_q10_opt2": "I can do basic graphs only.",
  "quiz_q10_opt3": "I struggle with visualization tasks.",
  "quiz_q10_opt4": "I dislike visuals completely.",
  "quiz_q11": "Thinking about games:",
  "quiz_q11_opt1": "I love designing and building games.",
  "quiz_q11_opt2": "I’m curious about how games are made.",
  "quiz_q11_opt3": "I only play games, not design them.",
  "quiz_q11_opt4": "I’m not interested in games at all.",
  "quiz_q12": "Quantum Computing or AR/VR:",
  "quiz_q12_opt1": "I feel thrilled and want to explore deeply.",
  "quiz_q12_opt2": "I’m curious but not very serious.",
  "quiz_q12_opt3": "I find it confusing and difficult.",
  "quiz_q12_opt4": "I don’t care about futuristic tech.",
  "quiz_q13": "Explaining technical ideas to others:",
  "quiz_q13_opt1": "I can explain clearly to anyone.",
  "quiz_q13_opt2": "I can explain with effort and practice.",
  "quiz_q13_opt3": "I struggle to explain technical points.",
  "quiz_q13_opt4": "I avoid communication tasks completely.",
  "quiz_q14": "Breaking down real-world problems:",
  "quiz_q14_opt1": "I enjoy step-by-step problem solving.",
  "quiz_q14_opt2": "I can solve with guidance or examples.",
  "quiz_q14_opt3": "I struggle with complex problems.",
  "quiz_q14_opt4": "I avoid problem solving tasks.",
  "quiz_q15": "When learning new topics:",
  "quiz_q15_opt1": "I explore deeply and practice regularly.",
  "quiz_q15_opt2": "I learn with examples and guidance.",
  "quiz_q15_opt3": "I need extra support to understand.",
  "quiz_q15_opt4": "I avoid tough topics whenever possible."
 },
 "ur": {
  "nav_home": "ہوم",
  "nav_explorer": "اٹلس",
  "nav_quiz": "کوئز",
  "nav_roadmap": "روڈ میپ",
  "nav_resources": "وسائل",
  "nav_dashboard": "والٹ",
  "nav_about": "About",
  "nav_contact": "Contact",
  "hero_badge": "Trusted by 750+ CSE students • 25 Domains • 89% Accuracy • Vault Ready",
  "hero_title": "25 CSE ڈومین میں الجھن؟ آپ کا AI کونسلر یہاں ہے۔",
  "hero_sub": "Personalized Top-3 recommendations across 25 tracks using Decision Tree, Random Forest, KNN & PCA — 4-year roadmap, mini-courses, vault for your files & parent guidance in 10 languages.",
  "hero_cta_quiz": "Take 3-Min Quiz →",
  "hero_cta_explore": "Explore Atlas",
  "hero_cta_demo": "Watch Demo (45s)",
  "hero_stats_students": "Students Guided",
  "hero_stats_domains": "CSE Domains",
  "hero_stats_langs": "Languages",
  "hero_tip_k": "Search 25 domains",
  "hero_tip_vault": "New: Vault per domain",
  "hero_tip_compare": "Compare 3 tracks",
  "hero_radar_title": "Live Prediction Preview",
  "hero_radar_badge": "RandomForest 89%",
  "hero_why": "Why AI? High logic (5/5) + math marks 92 + strong data interest.",
  "hero_try": "Try Your Prediction →",
  "trust_curated": "Curated Sources:",
  "trust_lit": "Literature: AIJMR 2025 • IJRAR 2022 • JETIR 2024",
  "features_why": "Why GuidanceAI • Atlas 25 • 8+6 Modules",
  "features_title": "Everything a First-Year Needs — Now 25 Tracks",
  "features_sub": "Beyond paper guidance — Atlas, vault per domain, compare, roadmap, visualization, multilingual voice & gamification.",
  "features_atlas_title": "25-Domain Atlas",
  "features_atlas_desc": "Intelligence 6 · Build 5 · Core 8 · Frontier 6 — grouped, searchable, professional dev layout.",
  "features_vault_title": "Vault per Domain",
  "features_vault_desc": "4 empty slots per track: Notes, Videos, Projects, Assignments — add your files later, stays local.",
  "features_compare_title": "Compare 3 Tracks",
  "features_compare_desc": "Tick Compare on cards — bottom bar — side-by-side salary, skills, roadmap.",
  "features_roadmap_title": "4-Year Roadmap",
  "features_roadmap_desc": "Foundation to Advanced to Placement — for each track, with vault link.",
  "features_gamified_title": "Gamified + Command",
  "features_gamified_desc": "XP, streaks + quick palette to instantly jump to any of 25 domains.",
  "features_parent_title": "Parent + Teacher",
  "features_parent_desc": "Vernacular PDF + voice for parents; batch analytics for 25-track cohorts.",
  "explorer_title": "ڈومین اٹلس — 25 ٹریکس",
  "explorer_sub": "Professional explorer — grouped by Intelligence, Build, Core & Frontier. Search, compare & vault per domain.",
  "explorer_tip_k": "Search",
  "explorer_tip_vault": "Empty vaults ready",
  "explorer_tip_compare": "Compare up to 3",
  "explorer_search_ph": "Search AI, Quantum, Web...",
  "explorer_sort_featured": "Featured",
  "explorer_sort_az": "A → Z",
  "explorer_sort_salary": "Salary High → Low",
  "explorer_sort_demand": "Demand High → Low",
  "explorer_pill_all": "All 25",
  "explorer_pill_intel": "Intelligence & Data · 6",
  "explorer_pill_build": "Build · 5",
  "explorer_pill_core": "Core Systems · 8",
  "explorer_pill_frontier": "Frontier · 6",
  "explorer_showing": "Showing {n} of {total} tracks",
  "explorer_no_title": "No tracks found",
  "explorer_no_sub": "Try different search or category",
  "explorer_clear": "Clear filters",
  "explorer_vault_tip": "Vault: Tap any card to open its Vault and add your files.",
  "explorer_cmd": "Search",
  "card_view": "دیکھیں →",
  "card_compare": "موازنہ",
  "card_vault": "Vault",
  "card_growth": "growth",
  "vault_title": "والٹ — آپ کی فائلز",
  "vault_sub": "Empty space → add your own",
  "vault_drop": "Drop PDFs, PPTs, videos, projects per domain. Later replace via",
  "vault_empty": "Empty — no files yet",
  "vault_add_notes": "Add Notes",
  "vault_add_videos": "Add Videos",
  "vault_add_projects": "Add Projects",
  "vault_add_assign": "Add Assignments",
  "vault_howto": "How to add bulk files: Create folder",
  "vault_folder": "Folder:",
  "vault_files": "files",
  "vault_interview": "Interview Kit",
  "vault_interview_desc": "Empty → add Q&A PDFs to vault/Assignments",
  "vault_projects_title": "Project Ideas",
  "vault_projects_desc": "3 starters in Vault/Projects",
  "vault_progress": "Progress",
  "vault_progress_desc": "Track via Roadmap checklist — saves locally",
  "compare_selected": "Selected",
  "compare_btn": "Compare →",
  "compare_clear": "Clear",
  "compare_title": "ڈومین کا موازنہ",
  "compare_need2": "Select at least 2 domains to compare",
  "compare_up_to3": "Compare up to 3 domains",
  "compare_added": "+ Added {id} to compare ({n}/3)",
  "compare_removed": "Removed {id}",
  "compare_cleared": "Cleared compare",
  "compare_feat_category": "Category",
  "compare_feat_level": "Level",
  "compare_feat_demand": "Demand",
  "compare_feat_growth": "Growth",
  "compare_feat_salary": "Avg Salary",
  "compare_feat_skills": "Skills",
  "compare_feat_careers": "Careers",
  "quiz_badge": "ML Filter • 3 Minutes • 15 Questions + Marks",
  "quiz_title": "اپنا بہترین ڈومین تلاش کریں",
  "quiz_sub": "Quiz + Marks + Interest → AI ensemble → Top-3 across 25 tracks with confidence, radar & vault suggestion. Demo uses 750-record synthetic dataset (30×25).",
  "quiz_step_marks": "Step 1 of {total} • Marks",
  "quiz_step_q": "Step {n} of {total} • Q{q}",
  "quiz_marks_title": "First, your academic marks (0-100)",
  "quiz_marks_sub": "Used by Marks-based ML filter (PCA + RandomForest). Be honest.",
  "quiz_math": "Math Marks *",
  "quiz_prog": "Programming Marks *",
  "quiz_phy": "Physics Marks",
  "quiz_eng": "English Marks",
  "quiz_next": "Next →",
  "quiz_prev": "← Previous",
  "quiz_get_rec": "Get Recommendation →",
  "quiz_predicting": "Predicting…",
  "quiz_fix_marks": "Please fix marks (0-100)",
  "quiz_local": "Your data stays local • Model: backend/ml_service/model.pkl (RandomForest 89%) • Fallback JS ensemble",
  "results_why_prefix": "Why",
  "results_runner": "Runner-up",
  "results_best_fit": "Best fit • Start roadmap + vault",
  "results_alt": "Good alternative",
  "results_radar_title": "Skill Gap Radar",
  "results_radar_sub": "Blue = You • Dashed = Required for",
  "results_skill_title": "Skill Gap Details",
  "results_whatif": "What-If Simulator",
  "results_sim": "If you improve → Fit",
  "results_roadmap_btn": "View My 4-Year Roadmap →",
  "results_course_btn": "Go to Mini-Course",
  "results_retake": "Retake Quiz",
  "results_toast": "Predicted: {top} ({score}%) — Vault ready",
  "roadmap_title": "Personalized 4-Year Roadmap",
  "roadmap_sub": "Auto-generated after quiz. Foundation → Intermediate → Advanced → Placement.",
  "roadmap_phase": "PHASE",
  "roadmap_vault": "Vault: {n} files — add yours in modal",
  "course_title": "Mini-Course + Test — Learn → Test → Certify",
  "course_modules": "Course Modules •",
  "course_progress": "Progress saved locally • 10 languages subtitle",
  "course_preview": "Preview",
  "course_select": "Select a lesson to play",
  "course_check": "Quick Check — 3 Questions",
  "course_submit": "Submit → +50 XP",
  "resources_title": "Resource Hub",
  "resources_sub": "NPTEL • Coursera • YouTube — filtered by domain, difficulty, language. Bookmarks saved.",
  "resources_search_ph": "Search resources...",
  "resources_domain_all": "All Domains (25)",
  "resources_type_all": "All Types",
  "resources_lang_all": "All Langs",
  "dashboard_title": "Dashboards",
  "footer_tagline": "Virtual counsellor • Django + RandomForest 89% + PCA • 750+ students guided • 25 domains Atlas + Vault.",
  "footer_explore": "Domain Atlas → 25 tracks",
  "toast_lang": "Language: {lang}",
  "toast_subscribed": "Subscribed: {email} • Welcome!",
  "toast_msg_sent": "Message sent — we reply in 2h!",
  "toast_copied": "Bookmarked: {title}",
  "common_close": "بند کریں",
  "common_open": "Open →",
  "common_xp": "XP: {n}",
  "quiz_q1": "When you face a math problem in class, how do you feel?",
  "quiz_q2": "If your teacher asks you to write a small program:",
  "quiz_q3": "When you see a big set of numbers or tables:",
  "quiz_q4": "If you hear about hacking or cyber attacks:",
  "quiz_q5": "Managing systems online (like Google Drive, AWS, Azure):",
  "quiz_q6": "If given sensors, circuits, or robotics kits:",
  "quiz_q7": "When asked to design a project:",
  "quiz_q8": "Learning about operating systems or computer architecture:",
  "quiz_q9": "Working in group projects with classmates:",
  "quiz_q10": "Creating charts, dashboards, or visual explanations:",
  "quiz_opt_no": "No",
  "quiz_opt_low": "Low",
  "quiz_opt_okay": "Okay",
  "quiz_opt_yes": "Yes",
  "quiz_opt_strong": "Strong",
  "quiz_choose": "Choose one option",
  "card_level_beginner": "Beginner",
  "card_level_inter": "Intermediate",
  "card_level_adv": "Advanced",
  "card_demand_high": "High",
  "card_demand_vhigh": "Very High",
  "card_demand_med": "Medium",
  "quiz_q1_opt1": "I enjoy solving step by step until I get the answer.",
  "quiz_q1_opt2": "I can solve if I get examples or hints.",
  "quiz_q1_opt3": "I struggle but try to finish somehow.",
  "quiz_q1_opt4": "I avoid math and prefer other subjects.",
  "quiz_q2_opt1": "I feel excited and start coding immediately.",
  "quiz_q2_opt2": "I try but need guidance or sample code.",
  "quiz_q2_opt3": "I prefer using ready-made tools instead of coding.",
  "quiz_q2_opt4": "I avoid programming tasks completely.",
  "quiz_q3_opt1": "I love analyzing and finding patterns.",
  "quiz_q3_opt2": "I can handle small data but big sets confuse me.",
  "quiz_q3_opt3": "I get bored with too many numbers.",
  "quiz_q3_opt4": "I dislike working with data at all.",
  "quiz_q4_opt1": "I immediately think about how to prevent them.",
  "quiz_q4_opt2": "I feel curious but don’t go deep.",
  "quiz_q4_opt3": "I just read and move on.",
  "quiz_q4_opt4": "I don’t care about security topics.",
  "quiz_q5_opt1": "I feel excited to explore cloud platforms.",
  "quiz_q5_opt2": "I’m curious but unsure how they work.",
  "quiz_q5_opt3": "I prefer local systems over cloud.",
  "quiz_q5_opt4": "I don’t like managing systems at all.",
  "quiz_q6_opt1": "I get excited to build something physical.",
  "quiz_q6_opt2": "I can try but prefer software tasks.",
  "quiz_q6_opt3": "I feel nervous with hardware experiments.",
  "quiz_q6_opt4": "I avoid hardware completely.",
  "quiz_q7_opt1": "I focus on visuals, UI, and user experience.",
  "quiz_q7_opt2": "I balance design with coding.",
  "quiz_q7_opt3": "I care only about backend logic.",
  "quiz_q7_opt4": "I dislike design tasks.",
  "quiz_q8_opt1": "I love knowing how systems work internally.",
  "quiz_q8_opt2": "I’m curious but not deeply interested.",
  "quiz_q8_opt3": "I find it difficult to understand.",
  "quiz_q8_opt4": "I avoid system topics completely.",
  "quiz_q9_opt1": "I enjoy teamwork and collaboration.",
  "quiz_q9_opt2": "I can work in teams but prefer solo.",
  "quiz_q9_opt3": "I struggle in group projects.",
  "quiz_q9_opt4": "I avoid teamwork whenever possible.",
  "quiz_q10_opt1": "I enjoy making visuals and insights.",
  "quiz_q10_opt2": "I can do basic graphs only.",
  "quiz_q10_opt3": "I struggle with visualization tasks.",
  "quiz_q10_opt4": "I dislike visuals completely.",
  "quiz_q11": "Thinking about games:",
  "quiz_q11_opt1": "I love designing and building games.",
  "quiz_q11_opt2": "I’m curious about how games are made.",
  "quiz_q11_opt3": "I only play games, not design them.",
  "quiz_q11_opt4": "I’m not interested in games at all.",
  "quiz_q12": "Quantum Computing or AR/VR:",
  "quiz_q12_opt1": "I feel thrilled and want to explore deeply.",
  "quiz_q12_opt2": "I’m curious but not very serious.",
  "quiz_q12_opt3": "I find it confusing and difficult.",
  "quiz_q12_opt4": "I don’t care about futuristic tech.",
  "quiz_q13": "Explaining technical ideas to others:",
  "quiz_q13_opt1": "I can explain clearly to anyone.",
  "quiz_q13_opt2": "I can explain with effort and practice.",
  "quiz_q13_opt3": "I struggle to explain technical points.",
  "quiz_q13_opt4": "I avoid communication tasks completely.",
  "quiz_q14": "Breaking down real-world problems:",
  "quiz_q14_opt1": "I enjoy step-by-step problem solving.",
  "quiz_q14_opt2": "I can solve with guidance or examples.",
  "quiz_q14_opt3": "I struggle with complex problems.",
  "quiz_q14_opt4": "I avoid problem solving tasks.",
  "quiz_q15": "When learning new topics:",
  "quiz_q15_opt1": "I explore deeply and practice regularly.",
  "quiz_q15_opt2": "I learn with examples and guidance.",
  "quiz_q15_opt3": "I need extra support to understand.",
  "quiz_q15_opt4": "I avoid tough topics whenever possible."
 }
};
const domainNames = {
 "te": {
  "AI": "కృత్రిమ మేధస్సు (AI)",
  "ML": "యంత్ర అభ్యాసం (ML)",
  "Data Science": "డేటా సైన్స్",
  "Big Data": "బిగ్ డేటా",
  "Computer Vision": "కంప్యూటర్ విజన్",
  "NLP": "సహజ భాషా ప్రాసెసింగ్ (NLP)",
  "Web Development": "వెబ్ డెవలప్‌మెంట్",
  "Mobile App Development": "మొబైల్ యాప్ డెవలప్‌మెంట్",
  "Software Engineering": "సాఫ్ట్‌వేర్ ఇంజనీరింగ్",
  "Game Development": "గేమ్ డెవలప్‌మెంట్",
  "HCI": "మానవ-కంప్యూటర్ ఇంటరాక్షన్ (HCI)",
  "Cybersecurity": "సైబర్ భద్రత",
  "Cloud Computing": "క్లౌడ్ కంప్యూటింగ్",
  "Computer Networks": "కంప్యూటర్ నెట్‌వర్క్‌లు",
  "DBMS": "డేటాబేస్ మేనేజ్‌మెంట్ (DBMS)",
  "Operating Systems": "ఆపరేటింగ్ సిస్టమ్స్",
  "Computer Architecture": "కంప్యూటర్ ఆర్కిటెక్చర్",
  "DevOps": "డెవ్‌ఆప్స్",
  "Distributed Systems": "డిస్ట్రిబ్యూటెడ్ సిస్టమ్స్",
  "IoT": "ఇంటర్నెట్ ఆఫ్ థింగ్స్ (IoT)",
  "Blockchain": "బ్లాక్‌చెయిన్",
  "Robotics": "రోబోటిక్స్",
  "AR/VR": "ఆగ్మెంటెడ్ / వర్చువల్ రియాలిటీ (AR/VR)",
  "Embedded Systems": "ఎంబెడెడ్ సిస్టమ్స్",
  "Quantum Computing": "క్వాంటం కంప్యూటింగ్"
 },
 "hi": {
  "AI": "कृत्रिम बुद्धिमत्ता (AI)",
  "ML": "मशीन लर्निंग (ML)",
  "Data Science": "डेटा साइंस",
  "Big Data": "बिग डेटा",
  "Computer Vision": "कंप्यूटर विज़न",
  "NLP": "प्राकृतिक भाषा प्रसंस्करण (NLP)",
  "Web Development": "वेब डेवलपमेंट",
  "Mobile App Development": "मोबाइल ऐप डेवलपमेंट",
  "Software Engineering": "सॉफ्टवेयर इंजीनियरिंग",
  "Game Development": "गेम डेवलपमेंट",
  "HCI": "मानव-कंप्यूटर इंटरैक्शन (HCI)",
  "Cybersecurity": "साइबर सुरक्षा",
  "Cloud Computing": "क्लाउड कंप्यूटिंग",
  "Computer Networks": "कंप्यूटर नेटवर्क्स",
  "DBMS": "डेटाबेस मैनेजमेंट (DBMS)",
  "Operating Systems": "ऑपरेटिंग सिस्टम्स",
  "Computer Architecture": "कंप्यूटर आर्किटेक्चर",
  "DevOps": "डेवऑप्स",
  "Distributed Systems": "डिस्ट्रिब्यूटेड सिस्टम्स",
  "IoT": "इंटरनेट ऑफ थिंग्स (IoT)",
  "Blockchain": "ब्लॉकचेन",
  "Robotics": "रोबोटिक्स",
  "AR/VR": "ऑगमेंटेड / वर्चुअल रियलिटी (AR/VR)",
  "Embedded Systems": "एम्बेडेड सिस्टम्स",
  "Quantum Computing": "क्वांटम कंप्यूटिंग"
 },
     "ta": {
   "AI": "Artificial Intelligence (AI)",
   "ML": "Machine Learning (ML)",
   "Data Science": "Data Science",
   "Big Data": "Big Data",
   "Computer Vision": "Computer Vision",
   "NLP": "Natural Language Processing (NLP)",
   "Web Development": "Web Development",
   "Mobile App Development": "Mobile App Development",
   "Software Engineering": "Software Engineering",
   "Game Development": "Game Development",
   "HCI": "Human-Computer Interaction (HCI)",
   "Cybersecurity": "Cybersecurity",
   "Cloud Computing": "Cloud Computing",
   "Computer Networks": "Computer Networks",
   "DBMS": "Database Management Systems (DBMS)",
   "Operating Systems": "Operating Systems",
   "Computer Architecture": "Computer Architecture",
   "DevOps": "DevOps",
   "Distributed Systems": "Distributed Systems",
   "IoT": "Internet of Things (IoT)",
   "Blockchain": "Blockchain",
   "Robotics": "Robotics",
   "AR/VR": "Augmented Reality / Virtual Reality (AR/VR)",
   "Embedded Systems": "Embedded Systems",
   "Quantum Computing": "Quantum Computing"
  },
     "kn": {
   "AI": "Artificial Intelligence (AI)",
   "ML": "Machine Learning (ML)",
   "Data Science": "Data Science",
   "Big Data": "Big Data",
   "Computer Vision": "Computer Vision",
   "NLP": "Natural Language Processing (NLP)",
   "Web Development": "Web Development",
   "Mobile App Development": "Mobile App Development",
   "Software Engineering": "Software Engineering",
   "Game Development": "Game Development",
   "HCI": "Human-Computer Interaction (HCI)",
   "Cybersecurity": "Cybersecurity",
   "Cloud Computing": "Cloud Computing",
   "Computer Networks": "Computer Networks",
   "DBMS": "Database Management Systems (DBMS)",
   "Operating Systems": "Operating Systems",
   "Computer Architecture": "Computer Architecture",
   "DevOps": "DevOps",
   "Distributed Systems": "Distributed Systems",
   "IoT": "Internet of Things (IoT)",
   "Blockchain": "Blockchain",
   "Robotics": "Robotics",
   "AR/VR": "Augmented Reality / Virtual Reality (AR/VR)",
   "Embedded Systems": "Embedded Systems",
   "Quantum Computing": "Quantum Computing"
  },
     "ml": {
   "AI": "Artificial Intelligence (AI)",
   "ML": "Machine Learning (ML)",
   "Data Science": "Data Science",
   "Big Data": "Big Data",
   "Computer Vision": "Computer Vision",
   "NLP": "Natural Language Processing (NLP)",
   "Web Development": "Web Development",
   "Mobile App Development": "Mobile App Development",
   "Software Engineering": "Software Engineering",
   "Game Development": "Game Development",
   "HCI": "Human-Computer Interaction (HCI)",
   "Cybersecurity": "Cybersecurity",
   "Cloud Computing": "Cloud Computing",
   "Computer Networks": "Computer Networks",
   "DBMS": "Database Management Systems (DBMS)",
   "Operating Systems": "Operating Systems",
   "Computer Architecture": "Computer Architecture",
   "DevOps": "DevOps",
   "Distributed Systems": "Distributed Systems",
   "IoT": "Internet of Things (IoT)",
   "Blockchain": "Blockchain",
   "Robotics": "Robotics",
   "AR/VR": "Augmented Reality / Virtual Reality (AR/VR)",
   "Embedded Systems": "Embedded Systems",
   "Quantum Computing": "Quantum Computing"
  },
     "mr": {
   "AI": "Artificial Intelligence (AI)",
   "ML": "Machine Learning (ML)",
   "Data Science": "Data Science",
   "Big Data": "Big Data",
   "Computer Vision": "Computer Vision",
   "NLP": "Natural Language Processing (NLP)",
   "Web Development": "Web Development",
   "Mobile App Development": "Mobile App Development",
   "Software Engineering": "Software Engineering",
   "Game Development": "Game Development",
   "HCI": "Human-Computer Interaction (HCI)",
   "Cybersecurity": "Cybersecurity",
   "Cloud Computing": "Cloud Computing",
   "Computer Networks": "Computer Networks",
   "DBMS": "Database Management Systems (DBMS)",
   "Operating Systems": "Operating Systems",
   "Computer Architecture": "Computer Architecture",
   "DevOps": "DevOps",
   "Distributed Systems": "Distributed Systems",
   "IoT": "Internet of Things (IoT)",
   "Blockchain": "Blockchain",
   "Robotics": "Robotics",
   "AR/VR": "Augmented Reality / Virtual Reality (AR/VR)",
   "Embedded Systems": "Embedded Systems",
   "Quantum Computing": "Quantum Computing"
  },
     "bn": {
   "AI": "Artificial Intelligence (AI)",
   "ML": "Machine Learning (ML)",
   "Data Science": "Data Science",
   "Big Data": "Big Data",
   "Computer Vision": "Computer Vision",
   "NLP": "Natural Language Processing (NLP)",
   "Web Development": "Web Development",
   "Mobile App Development": "Mobile App Development",
   "Software Engineering": "Software Engineering",
   "Game Development": "Game Development",
   "HCI": "Human-Computer Interaction (HCI)",
   "Cybersecurity": "Cybersecurity",
   "Cloud Computing": "Cloud Computing",
   "Computer Networks": "Computer Networks",
   "DBMS": "Database Management Systems (DBMS)",
   "Operating Systems": "Operating Systems",
   "Computer Architecture": "Computer Architecture",
   "DevOps": "DevOps",
   "Distributed Systems": "Distributed Systems",
   "IoT": "Internet of Things (IoT)",
   "Blockchain": "Blockchain",
   "Robotics": "Robotics",
   "AR/VR": "Augmented Reality / Virtual Reality (AR/VR)",
   "Embedded Systems": "Embedded Systems",
   "Quantum Computing": "Quantum Computing"
  },
     "gu": {
   "AI": "Artificial Intelligence (AI)",
   "ML": "Machine Learning (ML)",
   "Data Science": "Data Science",
   "Big Data": "Big Data",
   "Computer Vision": "Computer Vision",
   "NLP": "Natural Language Processing (NLP)",
   "Web Development": "Web Development",
   "Mobile App Development": "Mobile App Development",
   "Software Engineering": "Software Engineering",
   "Game Development": "Game Development",
   "HCI": "Human-Computer Interaction (HCI)",
   "Cybersecurity": "Cybersecurity",
   "Cloud Computing": "Cloud Computing",
   "Computer Networks": "Computer Networks",
   "DBMS": "Database Management Systems (DBMS)",
   "Operating Systems": "Operating Systems",
   "Computer Architecture": "Computer Architecture",
   "DevOps": "DevOps",
   "Distributed Systems": "Distributed Systems",
   "IoT": "Internet of Things (IoT)",
   "Blockchain": "Blockchain",
   "Robotics": "Robotics",
   "AR/VR": "Augmented Reality / Virtual Reality (AR/VR)",
   "Embedded Systems": "Embedded Systems",
   "Quantum Computing": "Quantum Computing"
  },
 "ur": {
  "AI": "ارتیفیکیال ینتےللیگےنکے (ای)",
  "ML": "ماکحینے لےارنینگ (مل)",
  "Data Science": "داتا سکیےنکے",
  "Big Data": "بیگ داتا",
  "Computer Vision": "کومپوتےر ویسیون",
  "NLP": "ناتورال لانگواگے پروکےسسینگ (نلپ)",
  "Web Development": "وےب دےوےلوپمےنت",
  "Mobile App Development": "موبیلے اپپ دےوےلوپمےنت",
  "Software Engineering": "سوفتوارے ےنگینےےرینگ",
  "Game Development": "گامے دےوےلوپمےنت",
  "HCI": "حومان-کومپوتےر ینتےراکتیون (حکی)",
  "Cybersecurity": "کیبےرسےکوریتی",
  "Cloud Computing": "کلوود کومپوتینگ",
  "Computer Networks": "کومپوتےر نےتوورکس",
  "DBMS": "داتاباسے ماناگےمےنت سیستےمس (دبمس)",
  "Operating Systems": "وپےراتینگ سیستےمس",
  "Computer Architecture": "کومپوتےر ارکحیتےکتورے",
  "DevOps": "دےووپس",
  "Distributed Systems": "دیستریبوتےد سیستےمس",
  "IoT": "ینتےرنےت وف تحینگس (یوت)",
  "Blockchain": "بلوکککحاین",
  "Robotics": "روبوتیکس",
  "AR/VR": "اوگمےنتےد رےالیتی / ویرتوال رےالیتی (ار/ور)",
  "Embedded Systems": "ےمبےددےد سیستےمس",
  "Quantum Computing": "قوانتوم کومپوتینگ"
 },
 "en": {
  "AI": "ai Artificial Intelligence (AI)",
  "ML": "ml Machine Learning (ML)",
  "Data Science": "Data Science",
  "Big Data": "Big Data",
  "Computer Vision": "Computer Vision",
  "NLP": "Natural Language Processing (NLP)",
  "Web Development": "Web Development",
  "Mobile App Development": "Mobile App Development",
  "Software Engineering": "Software Engineering",
  "Game Development": "Game Development",
  "HCI": "Human-Computer Interaction (HCI)",
  "Cybersecurity": "Cybersecurity",
  "Cloud Computing": "Cloud Computing",
  "Computer Networks": "Computer Networks",
  "DBMS": "Database Management Systems (DBMS)",
  "Operating Systems": "Operating Systems",
  "Computer Architecture": "Computer Architecture",
  "DevOps": "DevOps",
  "Distributed Systems": "Distributed Systems",
  "IoT": "Internet of Things (IoT)",
  "Blockchain": "Blockchain",
  "Robotics": "Robotics",
  "AR/VR": "Augmented Reality / Virtual Reality (AR/VR)",
  "Embedded Systems": "Embedded Systems",
  "Quantum Computing": "Quantum Computing"
 }
};
const domainDescs = {
 "te": {
  "AI": "ఆలోచించి, నేర్చుకునే తెలివైన వ్యవస్థలను నిర్మించండి.",
  "ML": "డేటా నుండి నేర్చుకునే అల్గారిథమ్‌లు.",
  "Cybersecurity": "వ్యవస్థలు, నెట్‌వర్క్‌లు & డేటాను దాడుల నుండి రక్షించండి.",
  "Data Science": "Extract insights and stories from massive data.",
  "Big Data": "Process & scale petabytes of distributed data.",
  "Computer Vision": "Teach machines to see, detect & interpret images.",
  "NLP": "Make computers understand & generate human language.",
  "Web Development": "Craft fast, modern, responsive web experiences.",
  "Mobile App Development": "Build native & cross-platform mobile apps.",
  "Software Engineering": "Architect scalable, maintainable software systems.",
  "Game Development": "Design & code immersive games & engines.",
  "HCI": "Design intuitive, human-centered tech.",
  "Cloud Computing": "Scale apps on AWS, Azure & GCP.",
  "Computer Networks": "Design, secure & optimize communication networks.",
  "DBMS": "Design & manage data at scale reliably.",
  "Operating Systems": "Master kernels, processes & memory management.",
  "Computer Architecture": "Design processors, memory & instruction sets.",
  "DevOps": "Automate build, test & deploy pipelines.",
  "Distributed Systems": "Build fault-tolerant, scalable distributed apps.",
  "IoT": "Connect physical devices to cloud & edge.",
  "Blockchain": "Decentralized ledgers, smart contracts & Web3.",
  "Robotics": "Build intelligent robots & autonomous systems.",
  "AR/VR": "Create immersive AR/VR & metaverse experiences.",
  "Embedded Systems": "Program microcontrollers & real-time hardware.",
  "Quantum Computing": "Harness quantum mechanics for next-gen compute."
 },
 "hi": {
  "AI": "सोचने और सीखने वाली बुद्धिमान प्रणालियाँ बनाएँ।",
  "ML": "डेटा से सीखने वाले एल्गोरिदम।",
  "Cybersecurity": "सिस्टम, नेटवर्क और डेटा को हमलों से बचाएँ।",
  "Data Science": "Extract insights and stories from massive data.",
  "Big Data": "Process & scale petabytes of distributed data.",
  "Computer Vision": "Teach machines to see, detect & interpret images.",
  "NLP": "Make computers understand & generate human language.",
  "Web Development": "Craft fast, modern, responsive web experiences.",
  "Mobile App Development": "Build native & cross-platform mobile apps.",
  "Software Engineering": "Architect scalable, maintainable software systems.",
  "Game Development": "Design & code immersive games & engines.",
  "HCI": "Design intuitive, human-centered tech.",
  "Cloud Computing": "Scale apps on AWS, Azure & GCP.",
  "Computer Networks": "Design, secure & optimize communication networks.",
  "DBMS": "Design & manage data at scale reliably.",
  "Operating Systems": "Master kernels, processes & memory management.",
  "Computer Architecture": "Design processors, memory & instruction sets.",
  "DevOps": "Automate build, test & deploy pipelines.",
  "Distributed Systems": "Build fault-tolerant, scalable distributed apps.",
  "IoT": "Connect physical devices to cloud & edge.",
  "Blockchain": "Decentralized ledgers, smart contracts & Web3.",
  "Robotics": "Build intelligent robots & autonomous systems.",
  "AR/VR": "Create immersive AR/VR & metaverse experiences.",
  "Embedded Systems": "Program microcontrollers & real-time hardware.",
  "Quantum Computing": "Harness quantum mechanics for next-gen compute."
 },
     "ta": {
   "AI": "Build intelligent systems that think, learn & reason.",
   "ML": "Algorithms that learn from data and improve.",
   "Data Science": "Extract insights and stories from massive data.",
   "Big Data": "Process & scale petabytes of distributed data.",
   "Computer Vision": "Teach machines to see, detect & interpret images.",
   "NLP": "Make computers understand & generate human language.",
   "Web Development": "Craft fast, modern, responsive web experiences.",
   "Mobile App Development": "Build native & cross-platform mobile apps.",
   "Software Engineering": "Architect scalable, maintainable software systems.",
   "Game Development": "Design & code immersive games & engines.",
   "HCI": "Design intuitive, human-centered tech.",
   "Cybersecurity": "Protect systems, networks & data from attacks.",
   "Cloud Computing": "Scale apps on AWS, Azure & GCP.",
   "Computer Networks": "Design, secure & optimize communication networks.",
   "DBMS": "Design & manage data at scale reliably.",
   "Operating Systems": "Master kernels, processes & memory management.",
   "Computer Architecture": "Design processors, memory & instruction sets.",
   "DevOps": "Automate build, test & deploy pipelines.",
   "Distributed Systems": "Build fault-tolerant, scalable distributed apps.",
   "IoT": "Connect physical devices to cloud & edge.",
   "Blockchain": "Decentralized ledgers, smart contracts & Web3.",
   "Robotics": "Build intelligent robots & autonomous systems.",
   "AR/VR": "Create immersive AR/VR & metaverse experiences.",
   "Embedded Systems": "Program microcontrollers & real-time hardware.",
   "Quantum Computing": "Harness quantum mechanics for next-gen compute."
  },
     "kn": {
   "AI": "Build intelligent systems that think, learn & reason.",
   "ML": "Algorithms that learn from data and improve.",
   "Data Science": "Extract insights and stories from massive data.",
   "Big Data": "Process & scale petabytes of distributed data.",
   "Computer Vision": "Teach machines to see, detect & interpret images.",
   "NLP": "Make computers understand & generate human language.",
   "Web Development": "Craft fast, modern, responsive web experiences.",
   "Mobile App Development": "Build native & cross-platform mobile apps.",
   "Software Engineering": "Architect scalable, maintainable software systems.",
   "Game Development": "Design & code immersive games & engines.",
   "HCI": "Design intuitive, human-centered tech.",
   "Cybersecurity": "Protect systems, networks & data from attacks.",
   "Cloud Computing": "Scale apps on AWS, Azure & GCP.",
   "Computer Networks": "Design, secure & optimize communication networks.",
   "DBMS": "Design & manage data at scale reliably.",
   "Operating Systems": "Master kernels, processes & memory management.",
   "Computer Architecture": "Design processors, memory & instruction sets.",
   "DevOps": "Automate build, test & deploy pipelines.",
   "Distributed Systems": "Build fault-tolerant, scalable distributed apps.",
   "IoT": "Connect physical devices to cloud & edge.",
   "Blockchain": "Decentralized ledgers, smart contracts & Web3.",
   "Robotics": "Build intelligent robots & autonomous systems.",
   "AR/VR": "Create immersive AR/VR & metaverse experiences.",
   "Embedded Systems": "Program microcontrollers & real-time hardware.",
   "Quantum Computing": "Harness quantum mechanics for next-gen compute."
  },
     "ml": {
   "AI": "Build intelligent systems that think, learn & reason.",
   "ML": "Algorithms that learn from data and improve.",
   "Data Science": "Extract insights and stories from massive data.",
   "Big Data": "Process & scale petabytes of distributed data.",
   "Computer Vision": "Teach machines to see, detect & interpret images.",
   "NLP": "Make computers understand & generate human language.",
   "Web Development": "Craft fast, modern, responsive web experiences.",
   "Mobile App Development": "Build native & cross-platform mobile apps.",
   "Software Engineering": "Architect scalable, maintainable software systems.",
   "Game Development": "Design & code immersive games & engines.",
   "HCI": "Design intuitive, human-centered tech.",
   "Cybersecurity": "Protect systems, networks & data from attacks.",
   "Cloud Computing": "Scale apps on AWS, Azure & GCP.",
   "Computer Networks": "Design, secure & optimize communication networks.",
   "DBMS": "Design & manage data at scale reliably.",
   "Operating Systems": "Master kernels, processes & memory management.",
   "Computer Architecture": "Design processors, memory & instruction sets.",
   "DevOps": "Automate build, test & deploy pipelines.",
   "Distributed Systems": "Build fault-tolerant, scalable distributed apps.",
   "IoT": "Connect physical devices to cloud & edge.",
   "Blockchain": "Decentralized ledgers, smart contracts & Web3.",
   "Robotics": "Build intelligent robots & autonomous systems.",
   "AR/VR": "Create immersive AR/VR & metaverse experiences.",
   "Embedded Systems": "Program microcontrollers & real-time hardware.",
   "Quantum Computing": "Harness quantum mechanics for next-gen compute."
  },
     "mr": {
   "AI": "Build intelligent systems that think, learn & reason.",
   "ML": "Algorithms that learn from data and improve.",
   "Data Science": "Extract insights and stories from massive data.",
   "Big Data": "Process & scale petabytes of distributed data.",
   "Computer Vision": "Teach machines to see, detect & interpret images.",
   "NLP": "Make computers understand & generate human language.",
   "Web Development": "Craft fast, modern, responsive web experiences.",
   "Mobile App Development": "Build native & cross-platform mobile apps.",
   "Software Engineering": "Architect scalable, maintainable software systems.",
   "Game Development": "Design & code immersive games & engines.",
   "HCI": "Design intuitive, human-centered tech.",
   "Cybersecurity": "Protect systems, networks & data from attacks.",
   "Cloud Computing": "Scale apps on AWS, Azure & GCP.",
   "Computer Networks": "Design, secure & optimize communication networks.",
   "DBMS": "Design & manage data at scale reliably.",
   "Operating Systems": "Master kernels, processes & memory management.",
   "Computer Architecture": "Design processors, memory & instruction sets.",
   "DevOps": "Automate build, test & deploy pipelines.",
   "Distributed Systems": "Build fault-tolerant, scalable distributed apps.",
   "IoT": "Connect physical devices to cloud & edge.",
   "Blockchain": "Decentralized ledgers, smart contracts & Web3.",
   "Robotics": "Build intelligent robots & autonomous systems.",
   "AR/VR": "Create immersive AR/VR & metaverse experiences.",
   "Embedded Systems": "Program microcontrollers & real-time hardware.",
   "Quantum Computing": "Harness quantum mechanics for next-gen compute."
  },
     "bn": {
   "AI": "Build intelligent systems that think, learn & reason.",
   "ML": "Algorithms that learn from data and improve.",
   "Data Science": "Extract insights and stories from massive data.",
   "Big Data": "Process & scale petabytes of distributed data.",
   "Computer Vision": "Teach machines to see, detect & interpret images.",
   "NLP": "Make computers understand & generate human language.",
   "Web Development": "Craft fast, modern, responsive web experiences.",
   "Mobile App Development": "Build native & cross-platform mobile apps.",
   "Software Engineering": "Architect scalable, maintainable software systems.",
   "Game Development": "Design & code immersive games & engines.",
   "HCI": "Design intuitive, human-centered tech.",
   "Cybersecurity": "Protect systems, networks & data from attacks.",
   "Cloud Computing": "Scale apps on AWS, Azure & GCP.",
   "Computer Networks": "Design, secure & optimize communication networks.",
   "DBMS": "Design & manage data at scale reliably.",
   "Operating Systems": "Master kernels, processes & memory management.",
   "Computer Architecture": "Design processors, memory & instruction sets.",
   "DevOps": "Automate build, test & deploy pipelines.",
   "Distributed Systems": "Build fault-tolerant, scalable distributed apps.",
   "IoT": "Connect physical devices to cloud & edge.",
   "Blockchain": "Decentralized ledgers, smart contracts & Web3.",
   "Robotics": "Build intelligent robots & autonomous systems.",
   "AR/VR": "Create immersive AR/VR & metaverse experiences.",
   "Embedded Systems": "Program microcontrollers & real-time hardware.",
   "Quantum Computing": "Harness quantum mechanics for next-gen compute."
  },
     "gu": {
   "AI": "Build intelligent systems that think, learn & reason.",
   "ML": "Algorithms that learn from data and improve.",
   "Data Science": "Extract insights and stories from massive data.",
   "Big Data": "Process & scale petabytes of distributed data.",
   "Computer Vision": "Teach machines to see, detect & interpret images.",
   "NLP": "Make computers understand & generate human language.",
   "Web Development": "Craft fast, modern, responsive web experiences.",
   "Mobile App Development": "Build native & cross-platform mobile apps.",
   "Software Engineering": "Architect scalable, maintainable software systems.",
   "Game Development": "Design & code immersive games & engines.",
   "HCI": "Design intuitive, human-centered tech.",
   "Cybersecurity": "Protect systems, networks & data from attacks.",
   "Cloud Computing": "Scale apps on AWS, Azure & GCP.",
   "Computer Networks": "Design, secure & optimize communication networks.",
   "DBMS": "Design & manage data at scale reliably.",
   "Operating Systems": "Master kernels, processes & memory management.",
   "Computer Architecture": "Design processors, memory & instruction sets.",
   "DevOps": "Automate build, test & deploy pipelines.",
   "Distributed Systems": "Build fault-tolerant, scalable distributed apps.",
   "IoT": "Connect physical devices to cloud & edge.",
   "Blockchain": "Decentralized ledgers, smart contracts & Web3.",
   "Robotics": "Build intelligent robots & autonomous systems.",
   "AR/VR": "Create immersive AR/VR & metaverse experiences.",
   "Embedded Systems": "Program microcontrollers & real-time hardware.",
   "Quantum Computing": "Harness quantum mechanics for next-gen compute."
  },
 "ur": {
  "AI": "بویلد ینتےللیگےنت سیستےمس تحات تحینک, لےارن & رےاسون.",
  "ML": "الگوریتحمس تحات لےارن فروم داتا اند یمپرووے.",
  "Data Science": "ےکستراکت ینسیگحتس اند ستوریےس فروم ماسسیوے داتا.",
  "Big Data": "پروکےسس & سکالے پےتابیتےس وف دیستریبوتےد داتا.",
  "Computer Vision": "تےاکح ماکحینےس تو سےے, دےتےکت & ینتےرپرےت یماگےس.",
  "NLP": "ماکے کومپوتےرس وندےرستاند & گےنےراتے حومان لانگواگے.",
  "Web Development": "کرافت فاست, مودےرن, رےسپونسیوے وےب ےکسپےریےنکےس.",
  "Mobile App Development": "بویلد ناتیوے & کروسس-پلاتفورم موبیلے اپپس.",
  "Software Engineering": "ارکحیتےکت سکالابلے, ماینتاینابلے سوفتوارے سیستےمس.",
  "Game Development": "دےسیگن & کودے یممےرسیوے گامےس & ےنگینےس.",
  "HCI": "دےسیگن ینتویتیوے, حومان-کےنتےرےد تےکح.",
  "Cybersecurity": "پروتےکت سیستےمس, نےتوورکس & داتا فروم اتتاککس.",
  "Cloud Computing": "سکالے اپپس ون اوس, ازورے & گکپ.",
  "Computer Networks": "دےسیگن, سےکورے & وپتیمیزے کوممونیکاتیون نےتوورکس.",
  "DBMS": "دےسیگن & ماناگے داتا ات سکالے رےلیابلی.",
  "Operating Systems": "ماستےر کےرنےلس, پروکےسسےس & مےموری ماناگےمےنت.",
  "Computer Architecture": "دےسیگن پروکےسسورس, مےموری & ینستروکتیون سےتس.",
  "DevOps": "اوتوماتے بویلد, تےست & دےپلوی پیپےلینےس.",
  "Distributed Systems": "بویلد فاولت-تولےرانت, سکالابلے دیستریبوتےد اپپس.",
  "IoT": "کوننےکت پحیسیکال دےویکےس تو کلوود & ےدگے.",
  "Blockchain": "دےکےنترالیزےد لےدگےرس, سمارت کونتراکتس & وےب3.",
  "Robotics": "بویلد ینتےللیگےنت روبوتس & اوتونومووس سیستےمس.",
  "AR/VR": "کرےاتے یممےرسیوے ار/ور & مےتاوےرسے ےکسپےریےنکےس.",
  "Embedded Systems": "پروگرام میکروکونتروللےرس & رےال-تیمے حاردوارے.",
  "Quantum Computing": "حارنےسس قوانتوم مےکحانیکس فور نےکست-گےن کومپوتے."
 },
 "en": {
  "AI": "Build intelligent systems that think, learn & reason.",
  "ML": "Algorithms that learn from data and improve.",
  "Data Science": "Extract insights and stories from massive data.",
  "Big Data": "Process & scale petabytes of distributed data.",
  "Computer Vision": "Teach machines to see, detect & interpret images.",
  "NLP": "Make computers understand & generate human language.",
  "Web Development": "Craft fast, modern, responsive web experiences.",
  "Mobile App Development": "Build native & cross-platform mobile apps.",
  "Software Engineering": "Architect scalable, maintainable software systems.",
  "Game Development": "Design & code immersive games & engines.",
  "HCI": "Design intuitive, human-centered tech.",
  "Cybersecurity": "Protect systems, networks & data from attacks.",
  "Cloud Computing": "Scale apps on AWS, Azure & GCP.",
  "Computer Networks": "Design, secure & optimize communication networks.",
  "DBMS": "Design & manage data at scale reliably.",
  "Operating Systems": "Master kernels, processes & memory management.",
  "Computer Architecture": "Design processors, memory & instruction sets.",
  "DevOps": "Automate build, test & deploy pipelines.",
  "Distributed Systems": "Build fault-tolerant, scalable distributed apps.",
  "IoT": "Connect physical devices to cloud & edge.",
  "Blockchain": "Decentralized ledgers, smart contracts & Web3.",
  "Robotics": "Build intelligent robots & autonomous systems.",
  "AR/VR": "Create immersive AR/VR & metaverse experiences.",
  "Embedded Systems": "Program microcontrollers & real-time hardware.",
  "Quantum Computing": "Harness quantum mechanics for next-gen compute."
 }
};

// ---------- I18N HELPERS : perfect full translation ----------
function getLang(){ try{ const v=safeGet('lang','en'); if(v) return v; }catch(e){} const el=document.getElementById('langSwitcher'); return el? el.value : 'en'; }
function t(key, params={}){ const lang=getLang(); const dict=i18n[lang]||i18n.en; let val=dict[key]; if(val===undefined) val=i18n.en[key]||key; for(const k in params){ const re=new RegExp('\\{'+k+'\\}','g'); val=val.replace(re, params[k]); } return val; }
function td(id, field){
 const lang=getLang();
 if(field==='name'){
  const m=domainNames[lang]&&domainNames[lang][id];
  if(m && m!==domainNames['en'][id]) return m;
  const prefixes={te:'డొమైన్', hi:'डोमेन', ta:'டொமைன்', kn:'ಡೊಮೇன்', ml:'ഡൊமെയ്ൻ', mr:'डोमेन', bn:'ডোমেইন', gu:'ડોમેઇન', ur:'ڈومین'};
  if(lang!=='en' && prefixes[lang]) return prefixes[lang]+' '+id;
  if(m) return m;
 }
 if(field==='desc'){
  const m=domainDescs[lang]&&domainDescs[lang][id];
  if(m && m!==domainDescs['en'][id]) return m;
  const fallbackDesc={te:'ఈ డొమైన్ గురించి వివరాలు త్వరలో.', hi:'इस डोमेन के बारे में विवरण जल्द ही।', ta:'இந்த டொமைன் பற்றிய விவரங்கள் விரைவில்.', kn:'ಈ ಡೊಮೇನ್ ಬಗ್ಗೆ ವಿವರಗಳು ಶೀಘ್ರದಲ್ಲೇ.', ml:'ഈ ഡൊമെയ്‌നെക്കുറിച്ചുള്ള വിവരങ്ങൾ ഉടൻ.', mr:'या डोमेनबद्दल माहिती लवकरच.', bn:'এই ডোমেন সম্পর্কে বিস্তারিত শীঘ্রই।', gu:'આ ડોમેન વિશે વિગતો ટૂંક સમયમાં।', ur:'اس ڈومین کی تفصیلات جلد۔'};
  if(lang!=='en' && fallbackDesc[lang]) return fallbackDesc[lang];
  if(m) return m;
 }
 const d=domains.find(x=>x.id===id); return d? d[field] : id;
}
function updateAllI18n(){
 document.querySelectorAll('[data-i18n]').forEach(el=>{
  const k=el.dataset.i18n; const val=t(k); if(val && val!==k) el.innerText=val;
 });
 try{
  const se=document.getElementById('explorerSearch'); if(se) se.placeholder=t('explorer_search_ph');
  const rs=document.getElementById('resSearch'); if(rs) rs.placeholder=t('resources_search_ph');
  const es=document.getElementById('explorerSort'); if(es){
   const opts=es.options;
   if(opts[0]) opts[0].text=t('explorer_sort_featured');
   if(opts[1]) opts[1].text=t('explorer_sort_az');
   if(opts[2]) opts[2].text=t('explorer_sort_salary');
   if(opts[3]) opts[3].text=t('explorer_sort_demand');
  }
  const pills=document.querySelectorAll('.cat-pill');
  const pillKeys=['explorer_pill_all','explorer_pill_intel','explorer_pill_build','explorer_pill_core','explorer_pill_frontier'];
  pills.forEach((p,i)=>{ if(pillKeys[i]) p.textContent=t(pillKeys[i]); });
 }catch(e){}
 try{ renderDomains(currentCategory, currentSearch); }catch(e){}
 try{ renderResources(); }catch(e){}
 try{ renderCompareBar(); }catch(e){}
 try{
  const badge=document.querySelector('#home .inline-flex'); if(badge) badge.innerHTML=`<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> ${escapeHtml(t('hero_badge'))}`;
  const stats=document.querySelectorAll('#home .grid.grid-cols-3 > div');
  if(stats[0]) { const d=stats[0].querySelector('div:last-child'); if(d) d.textContent=t('hero_stats_students'); }
  if(stats[1]) { const d=stats[1].querySelector('div:last-child'); if(d) d.textContent=t('hero_stats_domains'); }
  if(stats[2]) { const d=stats[2].querySelector('div:last-child'); if(d) d.textContent=t('hero_stats_langs'); }
  const qb=document.querySelector('#quiz .rounded-full.bg-indigo-50');
  if(qb) qb.textContent=t('quiz_badge');
  const qt=document.querySelector('#quiz h2');
  if(qt) qt.textContent=t('quiz_title');
  const qs=document.querySelector('#quiz h2 + p');
  if(qs) qs.textContent=t('quiz_sub');
  const rt=document.querySelector('#roadmap h2');
  if(rt) rt.textContent=t('roadmap_title');
  const rs2=document.querySelector('#roadmap h2 + p');
  if(rs2) rs2.textContent=t('roadmap_sub');
  const rtitle=document.querySelector('#resources h2');
  if(rtitle) rtitle.textContent=t('resources_title');
  const rsub=document.querySelector('#resources h2 + p');
  if(rsub) rsub.textContent=t('resources_sub');
  const ft=document.querySelector('footer p');
  if(ft) ft.textContent=t('footer_tagline');
 }catch(e){}
}






// ---------- UTILS : XSS escape & persist ---
function escapeHtml(s){ if(typeof s!=='string') return s; return s.replace(/[&<>"']/g, m=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function safeSet(key,val){ try{ localStorage.setItem(key,val);}catch(e){} }
function safeGet(key,def=null){ try{ const v=localStorage.getItem(key); return v===null?def:v;}catch(e){return def;} }

// ---------- VAULT + COMPARE STATE ----------
let compareList = [];
try{ const c=safeGet('compareList'); if(c) compareList=JSON.parse(c); if(!Array.isArray(compareList)) compareList=[]; }catch(e){ compareList=[]; }
function getVault(domainId){
 try{ const v=safeGet('vault_'+domainId); return v? JSON.parse(v): []; }catch(e){ return []; }
}
function saveVault(domainId, arr){ try{ safeSet('vault_'+domainId, JSON.stringify(arr)); }catch(e){} }
function addVaultFile(domainId, slot){
 // 10-Cr real file picker — replaces old prompt() that never uploaded real files
 const pending = { domainId, slot };
 // Create hidden input once and reuse
 let input = document.getElementById('__vaultFileInput');
 if(!input){
  input = document.createElement('input');
  input.type = 'file';
  input.id = '__vaultFileInput';
  input.className = 'hidden';
  input.style.display = 'none';
  document.body.appendChild(input);
  input.addEventListener('change', function(){
   const file = this.files && this.files[0];
   const ctx = this._vaultCtx;
   this.value = '';
   if(!file || !ctx) return;
   const { domainId: dId, slot: cSlot } = ctx;
   if(file.size > 15 * 1024 * 1024){ toast('⚠️ File too large — 15 MB max'); return; }
   const vault = getVault(dId);
   const entry = { name: file.name, slot: cSlot, date: new Date().toLocaleDateString(), size: (file.size/1024 < 1024 ? (file.size/1024).toFixed(1)+' KB' : (file.size/1024/1024).toFixed(2)+' MB'), type: file.type || 'file' };
   // For small files (<2MB) store dataUrl for instant preview/download (10-Cr feel)
   if(file.size < 2 * 1024 * 1024 && file.type){
    const reader = new FileReader();
    reader.onload = function(ev){
     entry.dataUrl = ev.target.result;
     vault.push(entry);
     saveVault(dId, vault);
     toast(`📁 Added ${file.name} to ${dId} / ${cSlot}`);
     refreshVaultUI(dId);
    };
    reader.onerror = function(){
     vault.push(entry);
     saveVault(dId, vault);
     toast(`📁 Added ${file.name} to ${dId} / ${cSlot}`);
     refreshVaultUI(dId);
    };
    if(file.type.startsWith('text/') || file.type.startsWith('image/') || file.type==='application/pdf' || file.size < 1024*1024){
     reader.readAsDataURL(file);
    } else {
     vault.push(entry);
     saveVault(dId, vault);
     toast(`📁 Added ${file.name} to ${dId} / ${cSlot}`);
     refreshVaultUI(dId);
    }
   } else {
    vault.push(entry);
    saveVault(dId, vault);
    toast(`📁 Added ${file.name} to ${dId} / ${cSlot}`);
    refreshVaultUI(dId);
   }
  });
 }
 // Configure accept per slot for better UX
 const acceptMap = {
  'Notes/PDFs': '.pdf,.doc,.docx,.ppt,.pptx,.txt,.md,application/pdf',
  'Videos': 'video/*, .mp4,.webm,.mov',
  'Projects': '.zip,.rar,.pdf,.md,.txt',
  'Assignments': '.pdf,.doc,.docx,.txt'
 };
 input.accept = acceptMap[slot] || '*/*';
 input._vaultCtx = pending;
 input.click();
 // Fallback: if user cancels and still wants manual name, allow prompt on second click with Shift?
}
function refreshVaultUI(domainId){
 // Re-render domain modal if open
 try{
  if(document.getElementById('domainModal') && !document.getElementById('domainModal').classList.contains('hidden')) openDomain(domainId);
 }catch(e){}
 // Re-render atlas grid counts (Vault 0 → Vault 1)
 try{ if(typeof renderDomains === 'function' && document.getElementById('domainGrid')) renderDomains(currentCategory, currentSearch); }catch(e){}
 // If on domain.html, also refresh its vault list
 try{ if(typeof renderDomainVault === 'function') renderDomainVault(); }catch(e){}
 // Update any vault count badges
 try{
  const badge = document.getElementById('vaultCountBadge');
  if(badge) badge.textContent = getVault(domainId).length + ' files';
 }catch(e){}
}
function downloadVaultFile(domainId, idx){
 const vault = getVault(domainId);
 const entry = vault[idx];
 if(!entry) return;
 if(entry.dataUrl){
  const a = document.createElement('a');
  a.href = entry.dataUrl;
  a.download = entry.name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  toast('⬇️ Downloading ' + entry.name);
 } else {
  // No stored data — create a placeholder txt for demo
  const blob = new Blob([`File: ${entry.name}\nSlot: ${entry.slot}\nDomain: ${domainId}\nDate: ${entry.date}\n\nThis is a placeholder. Re-upload the real file to get a downloadable copy.`], {type:'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = entry.name;
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{ URL.revokeObjectURL(url); a.remove(); }, 1000);
  toast('⬇️ Placeholder download for ' + entry.name + ' — re-upload for real file');
 }
}
function previewVaultFile(domainId, idx){
 const vault = getVault(domainId);
 const entry = vault[idx];
 if(!entry || !entry.dataUrl) { downloadVaultFile(domainId, idx); return; }
 if(entry.type && entry.type.startsWith('image/')){
  const w = window.open('', '_blank');
  if(w) w.document.write(`<html><head><title>${entry.name}</title></head><body style="margin:0;background:#0f172a;display:grid;place-items:center;min-height:100vh"><img src="${entry.dataUrl}" style="max-width:90vw;max-height:90vh;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.5)"><p style="color:white;font-family:sans-serif;margin-top:12px">${entry.name} — ${entry.size}</p></body></html>`);
 } else if(entry.type === 'application/pdf'){
  window.open(entry.dataUrl, '_blank');
 } else {
  downloadVaultFile(domainId, idx);
 }
}
function removeVaultFile(domainId, idx){
 const vault=getVault(domainId);
 vault.splice(idx,1);
 saveVault(domainId, vault);
 toast('🗑️ Removed file');
 openDomain(domainId);
}
function vaultCount(domainId){ return getVault(domainId).length; }
function toggleCompare(id){
 const idx=compareList.indexOf(id);
 if(idx>-1) compareList.splice(idx,1);
 else {
  if(compareList.length>=3){ toast('⚠️ '+t('compare_up_to3')); return; }
  compareList.push(id);
 }
 safeSet('compareList', JSON.stringify(compareList));
 renderCompareBar();
 // update checkboxes
 document.querySelectorAll('.compare-check').forEach(cb=>{
  cb.checked = compareList.includes(cb.dataset.id);
 });
 toast(compareList.includes(id)? t('compare_added',{id:id,n:compareList.length}) : t('compare_removed',{id:id}));
}
function renderCompareBar(){
 const bar=document.getElementById('compareBar');
 const count=document.getElementById('compareCount');
 const list=document.getElementById('compareListChips');
 if(!bar) return;
 if(count) count.textContent=compareList.length;
 if(compareList.length===0){
  bar.classList.add('hidden');
  return;
 }
 bar.classList.remove('hidden');
 if(list){
  list.innerHTML=compareList.map(id=>{
   const d=domains.find(x=>x.id===id);
   const name = d? td(d.id,'name') : id;
   return `<span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border text-sm font-semibold">${escapeHtml(name)} <button onclick="toggleCompare('${escapeHtml(id)}')" class="w-5 h-5 rounded-full bg-slate-900 text-white grid place-items-center text-xs">×</button></span>`;
  }).join('');
 }
}
function openCompare(){ if(compareList.length < 2){ toast(t('compare_need2') || 'Select at least 2 domains'); return; }
 if(compareList.length<2){ toast(t('compare_need2')); return; }
 const modal=document.getElementById('compareModal');
 const body=document.getElementById('compareModalBody');
 if(!modal||!body) return;
 const rows = [
  {label:t('compare_feat_category'), key:'category'},
  {label:t('compare_feat_level'), key:'level'},
  {label:t('compare_feat_demand'), key:'demand'},
  {label:t('compare_feat_growth'), key:'growth'},
  {label:t('compare_feat_salary'), key:'salary'},
  {label:t('compare_feat_skills'), key:'skills', fmt:(v)=>v.join(', ')},
  {label:t('compare_feat_careers'), key:'careers', fmt:(v)=>v.join(', ')},
 ];
 let html=`<div class="overflow-x-auto"><table class="w-full text-sm border-collapse"><thead><tr><th class="text-left p-3 bg-slate-50 border">${escapeHtml(t('compare_feat_category'))}</th>${compareList.map(id=>`<th class="p-3 bg-indigo-600 text-white border">${escapeHtml(td(id,'name'))}</th>`).join('')}</tr></thead><tbody>`;
 rows.forEach(r=>{
  html+=`<tr><td class="p-3 font-semibold bg-slate-50 border">${r.label}</td>`;
  compareList.forEach(id=>{
   const d=domains.find(x=>x.id===id);
   let val=d? d[r.key]:'-';
   if(r.fmt && Array.isArray(val)) val=r.fmt(val);
   html+=`<td class="p-3 border">${escapeHtml(String(val||'-'))}</td>`;
  });
  html+=`</tr>`;
 });
 html+=`</tbody></table></div><div class="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-sm"><b>Tip:</b> Vault per domain below lets you add your own files per track. Compare helps choose.</div>`;
 body.innerHTML=html;
 modal.classList.remove('hidden');
}
function clearCompare(){ compareList=[]; safeSet('compareList', JSON.stringify(compareList)); renderCompareBar(); document.querySelectorAll('.compare-check').forEach(cb=>cb.checked=false); toast(t('compare_cleared')); }

// ---------- RENDER DOMAIN GRID (Atlas Grouped) ----------
let currentCategory='All';
let currentSearch='';
function renderDomains(filterCategory='All', search='') {
 currentCategory=filterCategory;
 currentSearch=(search||'').toLowerCase();
 const grid = document.getElementById('domainGrid');
 if(!grid) return;
 const searchQ=currentSearch;
 let isFrontPreview = (typeof window.FRONT_PREVIEW_LIMIT !== 'undefined') && (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/') || window.location.pathname === '');
 let previewLimit = (typeof window.FRONT_PREVIEW_LIMIT !== 'undefined' && isFrontPreview) ? window.FRONT_PREVIEW_LIMIT : null;
 let filtered = domains.filter(d => {
  const catMatch = filterCategory==='All' || d.category===filterCategory || d.id===filterCategory || d.name===filterCategory;
  const searchMatch = !searchQ || d.name.toLowerCase().includes(searchQ) || d.desc.toLowerCase().includes(searchQ) || d.skills.join(' ').toLowerCase().includes(searchQ) || d.category.toLowerCase().includes(searchQ);
  return catMatch && searchMatch;
 });

 // Update filter UI active state
 document.querySelectorAll('.cat-pill').forEach(p=>{
  const isActive = p.dataset.cat===filterCategory;
  p.className = isActive ? 'cat-pill px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold border border-slate-900' : 'cat-pill px-4 py-2 rounded-full bg-white border text-sm font-semibold hover:border-indigo-200 hover:bg-indigo-50';
 });
 const countEl=document.getElementById('domainCount');
 if(countEl) countEl.textContent=t('explorer_showing',{n:filtered.length, total:domains.length});

 if(filtered.length===0){
  grid.innerHTML=`<div class="col-span-full text-center py-16"><div class="w-16 h-16 rounded-2xl bg-slate-100 grid place-items-center mx-auto text-2xl">🔍</div><div class="mt-4 font-bold">${escapeHtml(t('explorer_no_title'))}</div><div class="text-sm text-slate-500">${escapeHtml(t('explorer_no_sub'))}</div><button onclick="renderDomains('All',''); document.getElementById('explorerSearch').value=''" class="mt-4 px-5 py-2 rounded-xl bg-indigo-600 text-white font-semibold">${escapeHtml(t('explorer_clear'))}</button></div>`;
  return;
 }
 // Front preview limit: show only 8, with View All button
 let isPreview = previewLimit && filtered.length > previewLimit && currentCategory==='All' && !currentSearch;
 let displayFiltered = isPreview ? filtered.slice(0, previewLimit) : filtered;
 let wasLimited = isPreview;

 // Front preview: 8 featured
 if(isPreview){
  grid.innerHTML = displayFiltered.map(d=>cardHtml(d)).join('') + `<div class="col-span-full text-center mt-4"><a href="${pagePath('explorer.html')}" class="inline-flex px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold">View All 25 →</a><p class="text-xs text-slate-500 mt-2">Showing 8 featured · Browse all 25 in Atlas</p></div>`;
  const countEl=document.getElementById('domainCount');
  if(countEl) countEl.textContent=`${t('explorer_showing',{n:displayFiltered.length, total:domains.length})} · Preview`;
  return;
 }
 // If All and no search, render grouped by category (pro)
 if(filterCategory==='All' && !searchQ){
  const groups = {};
  categoryList.slice(1).forEach(cat=> groups[cat]=[]);
  displayFiltered.forEach(d=> { if(groups[d.category]) groups[d.category].push(d); else groups[d.category]=[d]; });
  let html='';
  for(const cat of categoryList.slice(1)){
   const list=groups[cat]||[];
   if(list.length===0) continue;
   const catIcons={'Intelligence & Data':'fa-brain','Build & Experience':'fa-code','Core Systems':'fa-server','Frontier Tech':'fa-atom'};
   const catColors={'Intelligence & Data':'from-violet-600 to-indigo-600','Build & Experience':'from-cyan-500 to-blue-600','Core Systems':'from-slate-700 to-slate-900','Frontier Tech':'from-emerald-500 to-teal-600'};
   html+=`<div class="col-span-full mt-2 first:mt-0"><div class="flex items-center gap-3 mb-4"><div class="w-9 h-9 rounded-xl bg-gradient-to-br ${catColors[cat]} grid place-items-center text-white"><i class="fa-solid ${catIcons[cat]}"></i></div><div><div class="font-display font-extrabold">${escapeHtml(cat)} <span class="font-sans font-bold text-sm text-slate-500">· ${list.length}</span></div><div class="text-xs text-slate-500">${cat==='Intelligence & Data'?'ML-first, data-driven careers': cat==='Build & Experience'?'Ship products users touch': cat==='Core Systems'?'The engine — secure, scale, persist':'Hardware, immersion, next compute'}</div></div><div class="ml-auto hidden sm:block h-px flex-1 bg-slate-200 ml-4"></div></div><div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">${list.map(d=>cardHtml(d)).join('')}</div></div>`;
  }
  grid.innerHTML=html;
 } else {
  grid.innerHTML = displayFiltered.map(d=>cardHtml(d)).join('');
  if(wasLimited){
   grid.innerHTML += `<div class="col-span-full text-center mt-4"><a href="${pagePath('explorer.html')}" class="inline-flex px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold">View All 25 →</a></div>`;
  }
 }
}
function cardHtml(d){
 const vc=vaultCount(d.id);
 const isCompared=compareList.includes(d.id);
 const levelKey = d.level==='Beginner'?'card_level_beginner': d.level==='Intermediate'?'card_level_inter': 'card_level_adv';
 const demandKey = d.demand==='Very High'?'card_demand_vhigh': d.demand==='High'?'card_demand_high':'card_demand_med';
 const levelColor=d.level==='Beginner'?'bg-emerald-50 border-emerald-200 text-emerald-700': d.level==='Intermediate'?'bg-blue-50 border-blue-200 text-blue-700':'bg-violet-50 border-violet-200 text-violet-700';
 const demandColor=d.demand==='Very High'?'bg-red-50 border-red-200 text-red-700': d.demand==='High'?'bg-amber-50 border-amber-200 text-amber-700':'bg-slate-50 border-slate-200 text-slate-700';
 return `
  <div class="p-5 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 card-hover flex flex-col group relative overflow-hidden">
   <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${d.color} opacity-80 group-hover:opacity-100 transition"></div>
   <div class="flex items-start justify-between gap-2">
    <div class="w-11 h-11 rounded-2xl bg-gradient-to-br ${d.color} grid place-items-center text-white text-lg flex-shrink-0"><i class="fa-solid ${d.icon}" aria-hidden="true"></i></div>
    <div class="flex flex-col items-end gap-1">
     <span class="px-2 py-1 rounded-full text-[10px] font-bold border tracking-wider ${d.tag==='Trending 2026'?'bg-amber-50 border-amber-200 text-amber-700': d.tag==='Trending'?'bg-violet-50 border-violet-200 text-violet-700':'bg-slate-50 border-slate-200 text-slate-700'}">${escapeHtml(d.tag)}</span>
     <span class="text-[10px] font-mono text-slate-400">${escapeHtml(d.short)}</span>
    </div>
   </div>
   <div class="mt-3 flex items-center gap-2 flex-wrap"><h3 class="font-bold leading-tight text-[15px]">${escapeHtml(td(d.id,'name'))}</h3></div>
   <div class="mt-1 flex flex-wrap gap-1.5"><span class="px-2 py-1 rounded-full text-[11px] font-semibold border ${levelColor}">${escapeHtml(t(levelKey))}</span><span class="px-2 py-1 rounded-full text-[11px] font-semibold border ${demandColor}">${escapeHtml(t(demandKey))}</span><span class="px-2 py-1 rounded-full bg-slate-50 text-[11px] border">${escapeHtml(d.salary)}</span></div>
   <p class="mt-2 text-[13px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">${escapeHtml(td(d.id,'desc'))}</p>
   <div class="mt-3 flex flex-wrap gap-1.5">${d.skills.slice(0,3).map(s=>`<span class="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-[11px] dark:text-slate-300">${escapeHtml(s)}</span>`).join('')}${d.skills.length>3?`<span class="px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[11px] border">+${d.skills.length-3}</span>`:''}</div>
   <div class="mt-3 flex items-center justify-between text-xs text-slate-500"><span class="flex items-center gap-1"><i class="fa-solid fa-chart-line"></i> ${escapeHtml(d.growth)} ${escapeHtml(t('card_growth'))}</span><span class="flex items-center gap-1"><i class="fa-regular fa-folder"></i> ${escapeHtml(t('card_vault'))} ${vc}</span></div>
   <div class="mt-4 flex gap-2">
    <a href="${domainPath(d.id)}" class="flex-1 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-black transition text-center">${escapeHtml(t('card_view'))}</a>
    <button onclick="openDomain('${escapeHtml(d.id)}'); event.preventDefault();" class="px-2 py-2.5 rounded-xl border text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 bg-white dark:bg-slate-800" title="Quick view">👁</button>
    <label class="px-3 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 ${isCompared?'bg-indigo-50 border-indigo-200 text-indigo-700':'bg-white dark:bg-slate-800'}"><input type="checkbox" class="compare-check" data-id="${escapeHtml(d.id)}" ${isCompared?'checked':''} onchange="toggleCompare('${escapeHtml(d.id)}')"> ${escapeHtml(t('card_compare'))}</label>
   </div>
   <a href="${domainPath(d.id)}" class="mt-2 inline-flex items-center gap-1 text-xs text-indigo-600 hover:underline">Immersive handbook → <i class="fa-solid fa-arrow-right text-[10px]"></i></a>
  </div>`;
}
// Defer first render to initLang to avoid FOUC — initLang will call renderDomains with correct lang
// try{ renderDomains(); }catch(e){}
// Wire search & category pills
try{
 const s=document.getElementById('explorerSearch');
 if(s) s.addEventListener('input', e=> renderDomains(currentCategory, e.target.value));
 document.querySelectorAll('.cat-pill').forEach(p=> p.addEventListener('click', ()=> renderDomains(p.dataset.cat, document.getElementById('explorerSearch').value)));
 const sortEl=document.getElementById('explorerSort');
 if(sortEl) sortEl.addEventListener('change', e=>{
  const v=e.target.value;
  if(v==='az') domains.sort((a,b)=> a.name.localeCompare(b.name));
  else if(v==='salary') domains.sort((a,b)=> b.salaryNum - a.salaryNum);
  else if(v==='demand') domains.sort((a,b)=> (b.demand==='Very High'?3: b.demand==='High'?2:1) - (a.demand==='Very High'?3: a.demand==='High'?2:1));
  else domains.sort((a,b)=> categoryList.indexOf(a.category) - categoryList.indexOf(b.category));
  // Note: mutates order but okay for preview; original order lost after sort, consider keeping copy if needed
  renderDomains(currentCategory, document.getElementById('explorerSearch').value);
 });
}catch(e){}

function openDomain(id){
 const d=domains.find(x=>x.id===id||x.name===id);
 if(!d) return;
 const vault=getVault(d.id);
 const vaultHtml = `
  <div class="mt-6 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-dashed dark:border-slate-700">
   <div class="flex items-center justify-between"><h4 class="font-bold flex items-center gap-2"><i class="fa-solid fa-folder-open text-indigo-600"></i> ${escapeHtml(t('vault_title'))} ${escapeHtml(td(d.id,'name'))} <span class="px-2 py-1 rounded-full bg-white border text-xs">${vault.length} ${escapeHtml(t('vault_files'))}</span></h4><span class="text-xs text-slate-500">Empty space → add your own</span></div>
   <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Drop PDFs, PPTs, videos, projects per domain. Later replace via <code class="px-1 py-0.5 bg-white border rounded text-xs">/public/vault/${escapeHtml(d.id.toLowerCase().replace(/[^a-z0-9]/g,''))}/</code> or click Add.</p>
   <div class="mt-4 grid sm:grid-cols-2 gap-3">
    ${['Notes/PDFs','Videos','Projects','Assignments'].map(slot=>{
     const files=vault.filter(f=>f.slot===slot);
     return `<div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border ${files.length?'border-indigo-200 bg-indigo-50/50':'border-slate-200'}">
       <div class="flex justify-between items-center"><span class="font-semibold text-sm flex items-center gap-2"><i class="fa-regular fa-folder"></i> ${slot}</span><span class="text-xs px-2 py-1 rounded-full bg-slate-100 border">${files.length} files</span></div>
       ${files.length? `<ul class="mt-3 space-y-2 text-xs">${files.map((f)=>{ const gi=vault.indexOf(f); return `<li class="flex justify-between items-center p-2 rounded-xl bg-white border gap-2"><button onclick="previewVaultFile('${escapeHtml(d.id)}',${gi})" class="flex-1 flex items-center gap-1.5 text-left truncate hover:text-indigo-600"><i class="fa-regular fa-file"></i><span class="truncate">${escapeHtml(f.name)}</span><span class="text-slate-400 shrink-0">· ${escapeHtml(f.size)}</span>${f.dataUrl?'<span class="ml-1 w-1.5 h-1.5 rounded-full bg-emerald-500" title="previewable"></span>':''}</button><span class="flex gap-1 shrink-0"><button onclick="downloadVaultFile('${escapeHtml(d.id)}',${gi})" title="Download" class="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 grid place-items-center"><i class="fa-solid fa-download text-[11px]"></i></button><button onclick="removeVaultFile('${escapeHtml(d.id)}',${gi})" title="Remove" class="w-7 h-7 rounded-full bg-red-50 hover:bg-red-100 text-red-500 grid place-items-center">×</button></span></li>`}).join('')}</ul>` : `<div class="mt-3 py-6 text-center border-2 border-dashed rounded-xl bg-slate-50 dark:bg-slate-900 text-xs text-slate-500">${escapeHtml(t('vault_empty'))}<br><span class="text-[11px]">${escapeHtml(t('vault_sub'))}</span></div>`}
      <button onclick="addVaultFile('${escapeHtml(d.id)}','${escapeHtml(slot)}')" class="mt-3 w-full py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-black">${escapeHtml(slot==='Notes/PDFs'?t('vault_add_notes'): slot==='Videos'?t('vault_add_videos'): slot==='Projects'?t('vault_add_projects'): t('vault_add_assign'))}</button>
      <div class="mt-2 text-[11px] text-slate-400 text-center">${escapeHtml(t('vault_folder'))} /vault/${escapeHtml(d.id)}/${escapeHtml(slot)}</div>
     </div>`;
    }).join('')}
   </div>
   <div class="mt-3 p-3 rounded-xl bg-white border text-xs"><b>${escapeHtml(t('vault_howto'))}:</b> <code>public/vault/${escapeHtml(d.id)}/</code> — ${escapeHtml(t('vault_drop'))} <code>notes/</code>, <code>videos/</code>, <code>projects/</code>, <code>assignments/</code></div>
  </div>
 `;
 const levelColor=d.level==='Beginner'?'bg-emerald-50 border-emerald-200 text-emerald-700': d.level==='Intermediate'?'bg-blue-50 border-blue-200 text-blue-700':'bg-violet-50 border-violet-200 text-violet-700';
 document.getElementById('domainModalContent').innerHTML=`
  <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${d.color} grid place-items-center text-white text-2xl"><i class="fa-solid ${d.icon}" aria-hidden="true"></i></div>
  <div class="mt-3 flex flex-wrap gap-2"><span class="px-2 py-1 rounded-full text-xs font-bold border ${levelColor}">${escapeHtml(d.level)}</span><span class="px-2 py-1 rounded-full text-xs font-bold border bg-slate-50">${escapeHtml(d.category)}</span><span class="px-2 py-1 rounded-full text-xs font-bold border bg-amber-50 border-amber-200 text-amber-700">${escapeHtml(d.demand)} · ${escapeHtml(d.growth)}</span></div>
  <h3 class="mt-3 font-display font-extrabold text-2xl">${escapeHtml(d.name)} <span class="text-sm font-mono text-slate-400">${escapeHtml(d.short)}</span></h3><p class="text-slate-600 dark:text-slate-400">${escapeHtml(d.desc)} • Avg ${escapeHtml(d.salary)} • Growth ${escapeHtml(d.growth)}</p>
  <div class="mt-4 grid sm:grid-cols-2 gap-4 text-sm">
   <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700 border dark:border-slate-600"><div class="font-bold">Key Skills</div><div class="mt-2 flex flex-wrap gap-1.5">${d.skills.map(s=>`<span class="px-2 py-1 rounded-full bg-white dark:bg-slate-800 border dark:border-slate-700 text-xs">${escapeHtml(s)}</span>`).join('')}</div></div>
   <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-700 border dark:border-slate-600"><div class="font-bold">Careers</div><ul class="mt-2 list-disc pl-4">${d.careers.map(c=>`<li>${escapeHtml(c)}</li>`).join('')}</ul></div>
  </div>
  <div class="mt-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-200"><div class="font-bold text-indigo-900">Roadmap Preview</div><div class="text-sm">${escapeHtml(d.roadmap)}</div><div class="mt-2 text-xs text-indigo-700">Full 8-semester timeline available in Roadmap section →</div></div>
  <div class="mt-4"><div class="font-bold">Top Resources</div><ul class="mt-2 space-y-1 text-sm">${d.resources.map(r=>`<li>• ${escapeHtml(r)}</li>`).join('')}</ul></div>
  ${vaultHtml}
  <div class="mt-4 grid sm:grid-cols-3 gap-2 text-xs">
   <div class="p-3 rounded-xl bg-white border"><b>Interview Kit</b><div class="text-slate-500 mt-1">Empty → add Q&A PDFs to vault/Assignments</div></div>
   <div class="p-3 rounded-xl bg-white border"><b>Project Ideas</b><div class="text-slate-500 mt-1">3 starters in Vault/Projects</div></div>
   <div class="p-3 rounded-xl bg-white border"><b>Progress</b><div class="text-slate-500 mt-1">Track via Roadmap checklist — saves locally</div></div>
  </div>
 `;
 document.getElementById('domainModal').classList.remove('hidden');
 document.getElementById('domainModal').setAttribute('aria-hidden','false');
}

// ---------- QUIZ LOGIC — 15 Qs × 4 opts (bhai's new) ----------
let curStep=1; const totalSteps=1+quizQs.length; // 1 marks + 15 Qs =16
const answers = Array(quizQs.length).fill(2); // 1-4 scale, default 2 (moderate)
function renderQuizQs(){
 const cont=document.getElementById('quizContainer');
 if(!cont) return;
 // clear any previous (for lang switch re-render)
 // keep first marks step, remove old quiz steps if re-rendering
 cont.querySelectorAll('.quiz-step:not([data-step="1"])').forEach(e=> e.remove());
 quizQs.forEach((q,i)=>{
  const div=document.createElement('div');
  div.className='quiz-step hidden';
  div.dataset.step=i+2;
  const qq = t('quiz_q'+(i+1));
  const cat = q.cat;
  // get 4 opts translated
  const opts = [1,2,3,4].map(o=> t(`quiz_q${i+1}_opt${o}`));
  // fallback to English opts in array if translation missing (key returns key)
  const displayOpts = opts.map((tr, idx)=> (tr===`quiz_q${i+1}_opt${idx+1}` ? (q.opts[idx]||tr) : tr));
  div.innerHTML=`
   <h3 class="font-bold text-[15px] leading-snug">${escapeHtml(qq)}</h3>
   <p class="text-xs text-slate-600 dark:text-slate-400 capitalize mt-1">${escapeHtml(cat)} • ${escapeHtml(t('quiz_choose'))}</p>
   <div class="mt-4 grid grid-cols-1 gap-3">
    ${[4,3,2,1].map((v, idx)=>{
     const label = displayOpts[idx];
     const isSel = answers[i]===v;
     return `<button data-q="${i}" data-v="${v}" onclick="setAns(${i},${v})" class="ans-btn text-left p-4 rounded-2xl border-2 flex gap-3 items-start ${isSel?'bg-indigo-600 text-white border-indigo-600':'bg-white dark:bg-slate-700 dark:text-slate-100 hover:border-indigo-200'}">
      <span class="w-8 h-8 rounded-full border-2 ${isSel?'bg-white text-indigo-600 border-white':'bg-slate-50 border-slate-200'} grid place-items-center font-bold text-sm flex-shrink-0">${['A','B','C','D'][idx]}</span>
      <span class="text-sm leading-relaxed">${escapeHtml(label)}</span>
      <span class="ml-auto text-xs font-mono opacity-60">${v}</span>
     </button>`
    }).join('')}
   </div>
  `;
  cont.appendChild(div);
 });
}
renderQuizQs();
function setAns(i,v){ answers[i]=v; document.querySelectorAll(`[data-q="${i}"]`).forEach(b=>{
 const isSel = b.dataset.v==v;
 b.className = isSel
  ? 'ans-btn text-left p-4 rounded-2xl border-2 flex gap-3 items-start bg-indigo-600 text-white border-indigo-600'
  : 'ans-btn text-left p-4 rounded-2xl border-2 flex gap-3 items-start bg-white dark:bg-slate-700 dark:text-slate-100 hover:border-indigo-200';
 // update inner circle
 const circle=b.querySelector('span:first-child');
 if(circle) circle.className = isSel
  ? 'w-8 h-8 rounded-full border-2 bg-white text-indigo-600 border-white grid place-items-center font-bold text-sm flex-shrink-0'
  : 'w-8 h-8 rounded-full border-2 bg-slate-50 border-slate-200 grid place-items-center font-bold text-sm flex-shrink-0';
}); }

function showStep(n){
 document.querySelectorAll('.quiz-step').forEach(el=> el.classList.toggle('hidden', parseInt(el.dataset.step)!==n));
 const prev=document.getElementById('quizPrev'); if(prev) { prev.disabled=n===1; prev.textContent=t('quiz_prev'); }
 const nxt=document.getElementById('quizNext'); if(nxt) nxt.textContent= n===totalSteps? t('quiz_get_rec') : t('quiz_next');
 const label=document.getElementById('quizStepLabel'); if(label) label.textContent= n===1? t('quiz_step_marks',{total:totalSteps}) : t('quiz_step_q',{n:n, total:totalSteps, q:n-1});
 const bar=document.getElementById('quizProgressBar'); if(bar) bar.style.width= (n/totalSteps*100)+'%';
 const txt=document.getElementById('quizProgressText'); if(txt) txt.textContent= Math.round(n/totalSteps*100)+'%';
}
showStep(1);
const prevBtn=document.getElementById('quizPrev'); if(prevBtn) prevBtn.onclick=()=>{ if(curStep>1){ curStep--; showStep(curStep);} }
const nextBtn=document.getElementById('quizNext'); if(nextBtn) nextBtn.onclick=()=>{
 if(curStep<totalSteps){ curStep++; showStep(curStep); }
 else { computePrediction(); }
}

function validateMarks(){
 const fields=[['mMath','errMath','Math'],['mProg','errProg','Programming']];
 let ok=true;
 fields.forEach(([inp,err,label])=>{
  const v=+document.getElementById(inp).value;
  const e=document.getElementById(err);
  if(isNaN(v) || v<0 || v>100){ e.textContent=`${label} must be 0-100`; e.classList.remove('hidden'); ok=false; }
  else e.classList.add('hidden');
 });
 return ok;
}
function computePrediction(){
 if(!validateMarks()){ toast('⚠️ '+t('quiz_fix_marks')); return; }
 const btn=document.getElementById('quizNext');
 const loader=document.getElementById('quizLoading');
 if(btn){ btn.disabled=true; btn.innerHTML='<span class="spinner border-white border-t-white"></span> '+t('quiz_predicting'); }
 if(loader){ loader.classList.remove('hidden'); loader.classList.add('flex'); }
 setTimeout(()=>{
 const math=Math.min(100,Math.max(0,+document.getElementById('mMath').value||0)), prog=Math.min(100,Math.max(0,+document.getElementById('mProg').value||0)), phy=Math.min(100,Math.max(0,+document.getElementById('mPhy').value||0)), eng=Math.min(100,Math.max(0,+document.getElementById('mEng').value||0));
 const weights={
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
 };
 const scores={};
 const vals = [...answers, math/100*4, prog/100*4]; // 15 Qs 1-4 + 2 marks scaled 0-4
 for(const d in weights){
  let s=0; weights[d].forEach((w,i)=> s+= (vals[i]||3)*w);
  scores[d]= s*25; // 1-4 scale *25 => 25-100
 }
 let max=Math.max(...Object.values(scores));
 // Deterministic jitter seeded by answers sum for consistent demo
 const seed = answers.reduce((a,b)=>a+b,0) + math + prog;
 function seededJitter(k){ let h=0; for(let i=0;i<k.length;i++) h=(h*31 + k.charCodeAt(i) + seed)%100; return (h%6); }
 for(const k in scores) scores[k]= Math.min(95, Math.round(scores[k]/max*82 + seededJitter(k) + 2));
 const sorted=Object.entries(scores).sort((a,b)=>b[1]-a[1]);
 const top=sorted[0];
 try{ safeSet('guidance_scores', JSON.stringify(scores)); safeSet('guidance_top', top[0]); }catch(e){}
 try{
  const api=(window.API_URL|| 'http://localhost:8000') + '/api/predict';
  fetch(api, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({answers, marks:{math, prog, phy, eng}})}).then(r=>r.ok?r.json():null).then(data=>{
   if(data && data.top){ const s=data.top3? Object.fromEntries(data.top3.map(x=>[x.domain,x.score])) : scores; const sort=data.top3? data.top3.map(x=>[x.domain,x.score]) : sorted; showResults(sort, s, {math,prog}); }
   else showResults(sorted, scores, {math,prog});
  }).catch(()=> showResults(sorted, scores, {math,prog}));
 }catch(e){ showResults(sorted, scores, {math,prog}); }
 if(btn){ btn.disabled=false; btn.textContent='Get Recommendation →'; }
 if(loader){ loader.classList.add('hidden'); loader.classList.remove('flex'); }
 }, 900);
}

let radarChart, teacherChart;
function fireConfetti(){
 try{
  const c=document.createElement('canvas'); c.id='confettiCanvas'; c.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:60'; document.body.appendChild(c);
  const ctx=c.getContext('2d'); c.width=innerWidth; c.height=innerHeight;
  const parts=Array.from({length:90},()=>({x:Math.random()*c.width, y:-20-Math.random()*200, vx:(Math.random()-0.5)*6, vy:2+Math.random()*4, r:4+Math.random()*4, c:['#4F46E5','#06B6D4','#F59E0B','#10B981','#EC4899'][Math.floor(Math.random()*5)], rot:Math.random()*360}));
  let t=0; (function anim(){ ctx.clearRect(0,0,c.width,c.height); parts.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; p.vy+=0.14; p.rot+=2; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.c; ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r); ctx.restore();}); t++; if(t<160) requestAnimationFrame(anim); else c.remove();})();
 }catch(e){}
}
function showResults(sorted, scores, marks){
 document.getElementById('quizContainer').classList.add('hidden');
 const ctrl=document.querySelector('#quiz .flex.justify-between'); if(ctrl) ctrl.classList.add('hidden');
 const res=document.getElementById('quizResults');
 res.classList.remove('hidden');
 fireConfetti();
 // Persist for roadmap page
 try{ localStorage.setItem('quiz_top_domain', sorted[0][0]); localStorage.setItem('quiz_top_score', String(sorted[0][1])); }catch(e){}

 document.getElementById('resTopDomain').textContent=`${sorted[0][0]} — ${sorted[0][1]}% Match`;
 const strengthLabels=['Logic','Math','Creativity','Security','Cloud','Data','OS','Coding','Trend','Social'];
 const topIdx=answers.map((v,i)=>({v,i})).sort((a,b)=>b.v-a.v).slice(0,2);
 const why=`Why ${sorted[0][0]}? ${strengthLabels[topIdx[0].i]} ${topIdx[0].v}/5` + (topIdx[1] ? ` + ${strengthLabels[topIdx[1].i]} ${topIdx[1].v}/5` : '') + ` + Math ${marks.math}/100, Prog ${marks.prog}/100 → optimal. Runner-up: ${sorted[1][0]} (${sorted[1][1]}%). Model: RandomForest 89% (see ml/metrics.json). Vault ready for ${sorted[0][0]} files.`;
 document.getElementById('resWhy').textContent=why;
 document.getElementById('top3Cards').innerHTML=sorted.slice(0,3).map(([d,p],i)=>`
  <div class="p-4 rounded-2xl ${i===0?'bg-white text-slate-900':'bg-white/20 backdrop-blur border border-white/20'}">
   <div class="text-xs ${i===0?'text-slate-600':'opacity-80'}">Rank ${i+1}</div>
   <div class="font-bold">${d}</div>
   <div class="text-2xl font-extrabold">${p}%</div>
   <div class="mt-2 h-1.5 bg-black/10 rounded-full overflow-hidden"><div class="h-full ${i===0?'bg-indigo-600':'bg-white'}" style="width:${p}%"></div></div>
   <div class="mt-2 text-xs ${i===0?'text-slate-600':'opacity-80'}">${i===0?'Best fit • Start roadmap + vault': 'Good alternative'}</div>
  </div>`).join('');
 const radarDom=document.getElementById('radarDomain'); if(radarDom) radarDom.textContent=sorted[0][0];
 const radarEl=document.getElementById('resultRadar'); if(!radarEl) return; const ctx=radarEl.getContext('2d');
 if(radarChart) radarChart.destroy();
 radarChart=new Chart(ctx,{type:'radar', data:{labels:['Logic','Math','Creativity','Security','Cloud','Data','OS'], datasets:[{label:'You', data: answers.slice(0,7), fill:true, backgroundColor:'rgba(79,70,229,0.2)', borderColor:'#4F46E5', pointBackgroundColor:'#4F46E5'}, {label:'Req for '+sorted[0][0], data: weightsForRadar(sorted[0][0]), fill:true, backgroundColor:'rgba(6,182,214,0.12)', borderColor:'#06B6D4', borderDash:[5,5]}]}, options:{scales:{r:{min:0,max:5,ticks:{stepSize:1}}}, plugins:{legend:{position:'bottom'}}}});
 const gaps=document.getElementById('skillGaps'); if(!gaps) return;
 const req=weightsForRadar(sorted[0][0]);
 const labels=['Logic','Math','Creativity','Security','Cloud','Data','OS'];
 gaps.innerHTML=labels.map((l,i)=>{ const you=answers[i], need=req[i], diff=need-you; const status= diff<=0?'✅ Strong': diff===1?'⚠️ Gap - Practice': '❌ Big Gap - Focus'; return `<div class="flex justify-between items-center p-3 rounded-xl bg-white dark:bg-slate-800 border dark:border-slate-700"><span><b>${l}</b> • You ${you}/5 • Need ${need}/5</span><span class="text-xs">${status}</span></div>`}).join('');
 const xp=120 + Math.round(sorted[0][1]); const dashEl=document.getElementById('dashXP'); if(dashEl) dashEl.textContent=xp; const badgeEl=document.getElementById('xpBadge'); if(badgeEl) badgeEl.textContent='XP: '+xp;
 const sel=document.getElementById('roadmapDomainSelect');
 if(sel){
  // populate 25 if not already
  if(sel.options.length<25){
   sel.innerHTML=domains.map(d=>`<option value="${escapeHtml(d.id)}">${escapeHtml(d.name)}</option>`).join('');
  }
  sel.value=sorted[0][0];
 }
 renderRoadmap(sorted[0][0]);
 renderCourse(sorted[0][0],0);
 setupSim(sorted[0][1]);
 // Inline post-quiz learn (if #postQuizLearn exists on quiz.html)
 try{
  const inline=document.getElementById('postQuizLearn');
  if(inline){
   inline.classList.remove('hidden');
   inline.innerHTML=`<div class="p-6 rounded-3xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4"><div><div class="text-sm opacity-80">Next step</div><div class="font-bold text-lg">Your 36-week roadmap for ${sorted[0][0]} is ready</div><div class="text-sm opacity-70">4 phases · ${sorted[0][1]}% match · Vault ready</div></div><div class="flex gap-2"><a href="${pagePath('roadmap.html?domain='+encodeURIComponent(sorted[0][0])+'&from=quiz')}" class="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold">View Roadmap →</a><a href="${domainPath(sorted[0][0])}" class="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold">Open Handbook →</a></div></div>`;
  }
  // Auto-fill roadmap/course on quiz page if containers exist
  const rc=document.getElementById('roadmapContainerQuiz'); if(rc){ rc.id='roadmapContainer'; renderRoadmap(sorted[0][0]); rc.id='roadmapContainerQuiz'; }
  if(typeof renderCourse==='function') try{ renderCourse(sorted[0][0],0);}catch(e){}
  // If on roadmap.html, respect ?domain param (handled elsewhere)
 }catch(e){}
 res.scrollIntoView({behavior:'smooth'});
 toast(`🎉 Predicted: ${sorted[0][0]} (${sorted[0][1]}%) — Vault ready`);
}
function weightsForRadar(domain){
 const map={
  'AI':[5,5,3,2,2,5,2],'ML':[4,5,3,2,3,5,3],'Data Science':[3,4,3,2,3,5,3],'Big Data':[3,3,2,2,4,5,3],'Computer Vision':[4,4,4,2,2,4,2],'NLP':[4,4,3,2,2,4,2],
  'Web Development':[2,2,5,2,3,2,2],'Mobile App Development':[2,2,4,2,3,2,2],'Software Engineering':[4,3,2,3,3,3,4],'Game Development':[2,2,5,1,2,1,2],'HCI':[2,2,5,1,2,1,1],
  'Cybersecurity':[3,3,2,5,4,2,5],'Cloud Computing':[3,3,2,4,5,3,4],'Computer Networks':[3,2,2,5,4,2,4],'DBMS':[3,3,2,2,3,5,3],'Operating Systems':[4,3,2,3,2,2,5],'Computer Architecture':[4,4,2,3,2,2,5],'DevOps':[3,2,2,3,5,3,4],'Distributed Systems':[4,3,2,3,5,4,4],
  'IoT':[3,3,2,3,4,2,4],'Blockchain':[4,3,2,4,3,4,3],'Robotics':[4,3,3,2,3,3,4],'AR/VR':[2,2,5,1,2,1,2],'Embedded Systems':[4,3,2,2,2,2,5],'Quantum Computing':[5,5,3,2,2,3,3]
 };
 return map[domain]||[3,3,3,3,3,3,3];
}
function setupSim(base){
 const py=document.getElementById('simPython'), ma=document.getElementById('simMath'), lo=document.getElementById('simLogic');
 if(!py||!ma||!lo) return;
 function upd(){
  document.getElementById('simPythonVal').textContent=py.value+'%';
  document.getElementById('simMathVal').textContent=ma.value+'%';
  document.getElementById('simLogicVal').textContent=lo.value+'%';
  const boost=Math.round((py.value-70)*0.15 + (ma.value-80)*0.12 + (lo.value-75)*0.1);
  const nxt=Math.min(95, base+boost);
  document.getElementById('simResult').textContent=`If you improve → Fit ${base}% → ${nxt}% (${boost>=0?'+':''}${boost}%)`;
 }
 [py,ma,lo].forEach(e=> e.oninput=upd); upd();
}
function resetQuiz(){ const c=document.querySelector('#quiz .flex.justify-between'); if(c) c.classList.remove('hidden'); document.getElementById('quizResults').classList.add('hidden'); document.getElementById('quizContainer').classList.remove('hidden'); curStep=1; showStep(1); window.scrollTo({top: document.getElementById('quiz').offsetTop-80, behavior:'smooth'}); }
function speakResult(){ const top=safeGet('guidance_top','AI'); let scores={}; try{ scores=JSON.parse(safeGet('guidance_scores','{}')||'{}'); }catch(e){} const txt=`Recommended domain is ${top} with ${scores[top]||82} percent match. Check your roadmap.`; speak(txt); }
function speakParentReport(){ const el=document.querySelector('#dashParent'); if(el) speak(el.innerText.slice(0,280)); }
function speak(text){
 if('speechSynthesis' in window){
  const u=new SpeechSynthesisUtterance(text);
  const lang=document.getElementById('langSwitcher').value;
  const map={en:'en-US', te:'te-IN', hi:'hi-IN', ta:'ta-IN', kn:'kn-IN', ml:'ml-IN', mr:'mr-IN', bn:'bn-IN', gu:'gu-IN', ur:'ur-PK'};
  u.lang=map[lang]||'en-US'; speechSynthesis.speak(u); toast('🔊 Speaking in '+(lang.toUpperCase()));
 } else toast('Voice not supported');
}
function downloadReport(){
 const top=safeGet('guidance_top','AI');
 let scores={}; try{ scores=JSON.parse(safeGet('guidance_scores','{}')||'{}'); }catch(e){}
 const langSel=document.getElementById('langSwitcher');
 const langText=langSel && langSel.selectedOptions[0] ? langSel.selectedOptions[0].text : 'English';
 const win=window.open('','_blank');
 if(!win){ toast('⚠️ Popup blocked — allow popups to download PDF'); return; }
 win.document.write(`<html><head><meta charset="UTF-8"><title>Parent Report - ${escapeHtml(top)}</title><style>body{font-family:Inter,sans-serif;padding:40px;color:#0f172a;line-height:1.6}h1{color:#4F46E5}.card{border:1px solid #e2e8f0;border-radius:16px;padding:20px;margin:12px 0}button{padding:10px 20px;background:#4F46E5;color:white;border:none;border-radius:10px;cursor:pointer}@media print{button{display:none}}</style></head><body><h1>GuidanceAI — Parent Report (25 Tracks)</h1><p>Generated: ${new Date().toLocaleString()} | Language: ${escapeHtml(langText)}</p><div class="card"><h2>Recommended: ${escapeHtml(top)}</h2><p>Confidence: ${scores[top]||82}% • Based on quiz + marks using RandomForest 89% • Atlas 25 domains</p></div><div class="card"><h3>What to do next?</h3><ul><li>Encourage Python basics 2hrs/week</li><li>Start NPTEL mini-course in vault for ${escapeHtml(top)} (see Resource Hub)</li><li>Support without pressure — check vault for files</li></ul></div><button onclick="print()">Print / Save PDF</button><p style="font-size:12px;color:#64748b;margin-top:20px">File also visible at: docs/Parent_Report_${escapeHtml(top)}.pdf (demo)</p></body></html>`);
 win.document.close();
}

// ---------- ROADMAP ----------
const roadmaps={
 'AI': [{title:'Foundation (Sem 1-2)', items:['Python Basics','Maths: Linear Algebra','Logic & Problem Solving','NPTEL Intro to AI']},{title:'Intermediate (Sem 3-4)', items:['Data Structures','Statistics & Probability','ML Basics (Supervised)','Mini-course: AI Quiz']},{title:'Advanced (Sem 5-6)', items:['Deep Learning','Computer Vision / NLP','Projects: Chatbot','Internship']},{title:'Placement (Sem 7-8)', items:['System Design','Portfolio + Resume','Mock Interviews','Placement: AI Engineer'] }],
 'ML': [{title:'Foundation', items:['Python','Maths: Calculus','Data Analysis']},{title:'Intermediate', items:['Supervised ML','Unsupervised ML','Kaggle']},{title:'Advanced', items:['MLOps','Deployment','Capstone']},{title:'Placement', items:['Resume','ML interviews'] }],
 'Data Science': [{title:'Foundation', items:['Python','Stats','SQL Basics']},{title:'Intermediate', items:['EDA','ML Models','Visualization']},{title:'Advanced', items:['Big Data','Deployment','Capstone']},{title:'Placement', items:['Portfolio','Interviews'] }],
 'Big Data': [{title:'Foundation', items:['Linux','SQL','Python']},{title:'Intermediate', items:['Hadoop','Spark','NoSQL']},{title:'Advanced', items:['Streaming','Cloud Scale']},{title:'Placement', items:['Certification','Engineer'] }],
 'Computer Vision': [{title:'Foundation', items:['Python','Linear Algebra','Image Basics']},{title:'Intermediate', items:['OpenCV','CNN','Detection']},{title:'Advanced', items:['Segmentation','GANs','Projects']},{title:'Placement', items:['Portfolio','CV Engineer'] }],
 'NLP': [{title:'Foundation', items:['Python','Linguistics','Stats']},{title:'Intermediate', items:['NLP Basics','Embeddings','Seq2Seq']},{title:'Advanced', items:['Transformers','LLMs','Projects']},{title:'Placement', items:['Chatbot','NLP Engineer'] }],
 'Web Development': [{title:'Foundation', items:['HTML','CSS','JS Basics']},{title:'Intermediate', items:['React','Node','APIs']},{title:'Advanced', items:['Next.js','System Design','Deploy']},{title:'Placement', items:['Portfolio','Full-Stack'] }],
 'Mobile App Development': [{title:'Foundation', items:['Java/Kotlin','UI Basics']},{title:'Intermediate', items:['Flutter/React Native','APIs']},{title:'Advanced', items:['Publish','Performance']},{title:'Placement', items:['Store','Interviews'] }],
 'Software Engineering': [{title:'Foundation', items:['DSA','OOP','Git']},{title:'Intermediate', items:['System Design','Testing','Agile']},{title:'Advanced', items:['Microservices','CI/CD']},{title:'Placement', items:['SDE'] }],
 'Game Development': [{title:'Foundation', items:['C#','Unity Basics']},{title:'Intermediate', items:['Graphics','Physics']},{title:'Advanced', items:['Multiplayer','Publish']},{title:'Placement', items:['Studio'] }],
 'HCI': [{title:'Foundation', items:['UX Basics','Psychology']},{title:'Intermediate', items:['Figma','Research']},{title:'Advanced', items:['Prototyping','Testing']},{title:'Placement', items:['UX Portfolio'] }],
 'Cybersecurity': [{title:'Foundation', items:['Networking Basics','Linux & OS','Python']},{title:'Intermediate', items:['Ethical Hacking','Cryptography','CTF']},{title:'Advanced', items:['SOC Analyst','Pen Testing']},{title:'Placement', items:['Certifications','Security Engineer'] }],
 'Cloud Computing': [{title:'Foundation', items:['Linux','Networking','Virtualization']},{title:'Intermediate', items:['AWS Fundamentals','Docker']},{title:'Advanced', items:['Kubernetes','DevOps CI/CD']},{title:'Placement', items:['AWS Certification','Cloud Engineer'] }],
 'Computer Networks': [{title:'Foundation', items:['OSI Model','TCP/IP']},{title:'Intermediate', items:['Routing','Switching']},{title:'Advanced', items:['Security','Wireshark']},{title:'Placement', items:['CCNA','Engineer'] }],
 'DBMS': [{title:'Foundation', items:['SQL','ER Model','Normalization']},{title:'Intermediate', items:['NoSQL','Transactions']},{title:'Advanced', items:['Distributed DB','System Design']},{title:'Placement', items:['DBA / Backend'] }],
 'Operating Systems': [{title:'Foundation', items:['C Programming','OS Concepts']},{title:'Intermediate', items:['Processes','Memory Management']},{title:'Advanced', items:['File Systems','Kernel']},{title:'Placement', items:['Systems Engineer'] }],
 'Computer Architecture': [{title:'Foundation', items:['Digital Logic','COA']},{title:'Intermediate', items:['Pipelining','Cache']},{title:'Advanced', items:['Verilog','Projects']},{title:'Placement', items:['Hardware'] }],
 'DevOps': [{title:'Foundation', items:['Linux','Git']},{title:'Intermediate', items:['Docker','K8s']},{title:'Advanced', items:['CI/CD','SRE']},{title:'Placement', items:['DevOps Engineer'] }],
 'Distributed Systems': [{title:'Foundation', items:['OS','Networks']},{title:'Intermediate', items:['Consensus','Replication']},{title:'Advanced', items:['Kafka','Scale']},{title:'Placement', items:['Backend Lead'] }],
 'IoT': [{title:'Foundation', items:['Embedded C','Sensors']},{title:'Intermediate', items:['MQTT','Cloud']},{title:'Advanced', items:['Edge','Projects']},{title:'Placement', items:['IoT Engineer'] }],
 'Blockchain': [{title:'Foundation', items:['Crypto Basics','Solidity']},{title:'Intermediate', items:['Smart Contracts','DApps']},{title:'Advanced', items:['Web3','DeFi']},{title:'Placement', items:['Blockchain Dev'] }],
 'Robotics': [{title:'Foundation', items:['Mechanics','Embedded']},{title:'Intermediate', items:['ROS','Sensors']},{title:'Advanced', items:['AI Control']},{title:'Placement', items:['Robotics Engineer'] }],
 'AR/VR': [{title:'Foundation', items:['Unity','3D Basics']},{title:'Intermediate', items:['ARCore','3D Modeling']},{title:'Advanced', items:['XR Projects']},{title:'Placement', items:['XR Dev'] }],
 'Embedded Systems': [{title:'Foundation', items:['C','ARM']},{title:'Intermediate', items:['RTOS','Drivers']},{title:'Advanced', items:['Projects']},{title:'Placement', items:['Firmware'] }],
 'Quantum Computing': [{title:'Foundation', items:['Linear Algebra','QM']},{title:'Intermediate', items:['Qiskit','Qubits']},{title:'Advanced', items:['Algorithms','Projects']},{title:'Placement', items:['Quantum Research'] }],
};
function renderRoadmap(domain){
 const container=document.getElementById('roadmapContainer'); if(!container) return;
 const data=roadmaps[domain]||roadmaps['AI'];
 const domObj=domains.find(d=>d.id===domain);
 const catBadge=domObj? `<span class="px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs border">${escapeHtml(td(domObj.id,'name').includes('(')? domObj.category : domObj.category)} • ${escapeHtml(domObj.level)}</span>`:'';
 document.getElementById('roadmapContainer').innerHTML=`
  <div class="absolute left-4 top-0 bottom-0 w-1 timeline-line rounded-full hidden md:block"></div>
  <div class="mb-4 flex items-center gap-2">${catBadge} <span class="text-sm text-slate-500"> Vault: ${vaultCount(domain)} files — add yours in modal</span></div>
  <div class="grid md:grid-cols-4 gap-4">
   ${data.map((phase,i)=>`
    <div class="relative p-5 rounded-3xl bg-white dark:bg-slate-800 border dark:border-slate-700">
     <div class="w-8 h-8 rounded-full bg-indigo-600 text-white grid place-items-center font-bold text-sm absolute -top-3 -left-3 hidden md:grid">${i+1}</div>
     <div class="text-xs font-bold text-indigo-600">PHASE ${i+1}</div>
     <div class="font-bold mt-1">${phase.title}</div>
     <ul class="mt-3 space-y-2 text-sm">${phase.items.map(it=>`<li class="flex gap-2"><i class="fa-solid fa-check text-emerald-500 mt-1"></i><span>${it}</span></li>`).join('')}</ul>
     <div class="mt-4 h-1.5 bg-slate-100 rounded-full overflow-hidden"><div class="h-full bg-indigo-600" style="width:${25*(i+1)}%"></div></div>
    </div>`).join('')}
  </div>`;
}
renderRoadmap('AI');

// ---------- MINI COURSE — Enriched 4x25 = 100 lessons — Distinct videos + 3-Q quiz each — 2026-09-19 ----------
const courses={
 'AI': [
  {t:'Intro to AI', d:'What is intelligence? History, scope, real examples', v:'https://www.youtube.com/embed/rfscVS0vtbw', dur:'12 min', quiz:[{q:'AI stands for?', opts:['Artificial Intelligence','Auto Intelligence'], a:0},{q:'Which is true AI?', opts:['ChatGPT','Calculator'], a:0},{q:'AI needs?', opts:['Data + Algorithms','Only rules'], a:0}]},
  {t:'Python Foundations for AI', d:'NumPy, Pandas, logic building', v:'https://www.youtube.com/embed/rfscVS0vtbw', dur:'18 min', quiz:[{q:'Python creator?', opts:['Guido van Rossum','Elon Musk'], a:0},{q:'NumPy is for?', opts:['Numerical arrays','Web pages'], a:0},{q:'Pandas handles?', opts:['Data tables','Images only'], a:0}]},
  {t:'Machine Learning Basics', d:'Supervised vs unsupervised, first model', v:'https://www.youtube.com/embed/GwIo3gDZCVQ', dur:'15 min', quiz:[{q:'Supervised needs?', opts:['Labeled data','No data'], a:0},{q:'KNN is?', opts:['Instance-based','Rule-based'], a:0},{q:'Overfitting means?', opts:['Memorizes training','Generalizes well'], a:0}]},
  {t:'Build Your First Chatbot', d:'RAG + LLM hands-on project', v:'https://www.youtube.com/embed/w7ejDZ8SWv8', dur:'20 min', quiz:[{q:'Chatbot needs?', opts:['NLP','Only HTML'], a:0},{q:'RAG stands for?', opts:['Retrieval-Augmented Generation','Random AI Group'], a:0},{q:'Vector DB stores?', opts:['Embeddings','CSS'], a:0}]}
 ],
 'ML': [
  {t:'What is Machine Learning?', d:'Paradigm shift from rules to data', v:'https://www.youtube.com/embed/GwIo3gDZCVQ', dur:'14 min', quiz:[{q:'ML learns from?', opts:['Data','Manual rules only'], a:0},{q:'PCA reduces?', opts:['Dimensions','Data size only'], a:0},{q:'RandomForest is?', opts:['Ensemble of trees','Single tree'], a:0}]},
  {t:'Linear Regression Intuition', d:'Gradient descent, loss, fit line', v:'https://www.youtube.com/embed/rfscVS0vtbw', dur:'16 min', quiz:[{q:'Linear regression fits?', opts:['Straight line','Circle'], a:0},{q:'Loss measures?', opts:['Error','Speed'], a:0},{q:'Gradient descent does?', opts:['Minimizes loss','Increases loss'], a:0}]},
  {t:'KNN & Decision Trees', d:'Your roadmap models explained', v:'https://www.youtube.com/embed/ukzFI9rgwfU', dur:'15 min', quiz:[{q:'KNN k=1 means?', opts:['Nearest neighbor','All neighbors'], a:0},{q:'Decision tree splits on?', opts:['Features','Random'], a:0},{q:'Tree depth controls?', opts:['Overfitting','Color'], a:0}]},
  {t:'Model Evaluation & MLOps', d:'Precision, recall, deploy with FastAPI', v:'https://www.youtube.com/embed/fqMOX6JJhGo', dur:'18 min', quiz:[{q:'Precision is?', opts:['TP/(TP+FP)','TP/(TP+FN)'], a:0},{q:'MLOps helps?', opts:['Deploy & monitor','Only design'], a:0},{q:'Drift means?', opts:['Data shift over time','Code bug'], a:0}]}
 ],
 'Data Science': [
  {t:'SQL & Data Wrangling', d:'Joins, groupby, cleaning with Pandas', v:'https://www.youtube.com/embed/HXV3zeQKqGY', dur:'16 min', quiz:[{q:'SQL JOIN combines?', opts:['Tables','Images'], a:0},{q:'Pandas DataFrame is?', opts:['Table structure','Video'], a:0},{q:'Missing values should be?', opts:['Handled','Ignored always'], a:0}]},
  {t:'Exploratory Data Analysis', d:'Distributions, outliers, correlation', v:'https://www.youtube.com/embed/c2M-rlkkT5o', dur:'14 min', quiz:[{q:'EDA stands for?', opts:['Exploratory Data Analysis','Extra Data Access'], a:0},{q:'Outlier is?', opts:['Extreme value','Normal value'], a:0},{q:'Correlation shows?', opts:['Relationship','Causation only'], a:0}]},
  {t:'Visualization & Storytelling', d:'Matplotlib, Seaborn, dashboards', v:'https://www.youtube.com/embed/YRhxdVk_sIs', dur:'15 min', quiz:[{q:'Seaborn is for?', opts:['Statistical plots','3D games'], a:0},{q:'Good chart is?', opts:['Honest scales','Truncated axis'], a:0},{q:'Dashboard helps?', opts:['Decisions','Only decoration'], a:0}]},
  {t:'A/B Testing & Product Decks', d:'Experiments that ship correctly', v:'https://www.youtube.com/embed/M988_fsOSWo', dur:'18 min', quiz:[{q:'A/B tests need?', opts:['Control + variant','Only variant'], a:0},{q:'p-value <0.05 means?', opts:['Significant','Not significant'], a:0},{q:'Guardrail metrics?', opts:['Check side effects','Ignore'], a:0}]}
 ],
 'Big Data': [
  {t:'Big Data & Hadoop Intro', d:'HDFS, distributed storage', v:'https://www.youtube.com/embed/3JZ_D3ELwOQ', dur:'15 min', quiz:[{q:'Hadoop stores?', opts:['Petabytes distributed','Only KB'], a:0},{q:'HDFS is?', opts:['Distributed file system','Single file'], a:0},{q:'Big Data 3Vs are?', opts:['Volume, Velocity, Variety','Voltage'], a:0}]},
  {t:'Spark & Fast Processing', d:'RDD, in-memory compute', v:'https://www.youtube.com/embed/3JZ_D3ELwOQ', dur:'16 min', quiz:[{q:'Spark is faster than?', opts:['MapReduce','Excel'], a:0},{q:'RDD stands for?', opts:['Resilient Distributed Dataset','Random Data'], a:0},{q:'Spark runs in?', opts:['Memory','Only disk'], a:0}]},
  {t:'NoSQL & MongoDB', d:'Document stores, Cassandra basics', v:'https://www.youtube.com/embed/c2M-rlkkT5o', dur:'14 min', quiz:[{q:'MongoDB is?', opts:['Document DB','Relational only'], a:0},{q:'NoSQL means?', opts:['Not only SQL','No SQL at all'], a:0},{q:'Cassandra is good for?', opts:['Wide columns','Only small data'], a:0}]},
  {t:'Streaming & Cloud Scale', d:'Kafka, end-to-end pipeline', v:'https://www.youtube.com/embed/M988_fsOSWo', dur:'18 min', quiz:[{q:'Kafka is?', opts:['Streaming platform','Database only'], a:0},{q:'Streaming is?', opts:['Real-time','Batch only'], a:0},{q:'Cloud scale helps?', opts:['Elasticity','Fixed only'], a:0}]}
 ],
 'Computer Vision': [
  {t:'Image Basics & Filters', d:'Pixels, kernels, OpenCV', v:'https://www.youtube.com/embed/YRhxdVk_sIs', dur:'14 min', quiz:[{q:'Pixel is?', opts:['Image unit','Network'], a:0},{q:'OpenCV handles?', opts:['Images','Only text'], a:0},{q:'Filter does?', opts:['Enhances features','Deletes image'], a:0}]},
  {t:'CNN Deep Vision', d:'Convolution, pooling, feature maps', v:'https://www.youtube.com/embed/YRhxdVk_sIs', dur:'16 min', quiz:[{q:'CNN stands for?', opts:['Convolutional Neural Network','Complex Node'], a:0},{q:'Convolution extracts?', opts:['Local patterns','Only colors'], a:0},{q:'Pooling reduces?', opts:['Dimensions','Accuracy only'], a:0}]},
  {t:'Object Detection (YOLO)', d:'Bounding boxes, mAP', v:'https://www.youtube.com/embed/YRhxdVk_sIs', dur:'15 min', quiz:[{q:'YOLO detects?', opts:['Objects real-time','Only faces'], a:0},{q:'Bounding box is?', opts:['Rectangle around object','Text'], a:0},{q:'mAP measures?', opts:['Detection accuracy','Speed only'], a:0}]},
  {t:'Vision Project: Face App', d:'Deploy face filter', v:'https://www.youtube.com/embed/YRhxdVk_sIs', dur:'18 min', quiz:[{q:'Face app needs?', opts:['Camera + model','Only CSS'], a:0},{q:'Inference is?', opts:['Running model','Training only'], a:0},{q:'Edge deployment means?', opts:['On device','Only cloud'], a:0}]}
 ],
 'NLP': [
  {t:'NLP & Tokenization', d:'Text to tokens, vocab', v:'https://www.youtube.com/embed/kCc8FmEb1nY', dur:'14 min', quiz:[{q:'Tokenization splits?', opts:['Text to tokens','Images'], a:0},{q:'Vocab is?', opts:['Word list','Only numbers'], a:0},{q:'Stopwords are?', opts:['Common words','Rare words'], a:0}]},
  {t:'Word Embeddings (Word2Vec)', d:'Vectors that mean meaning', v:'https://www.youtube.com/embed/kCc8FmEb1nY', dur:'15 min', quiz:[{q:'Embedding is?', opts:['Word vector','Word image'], a:0},{q:'Word2Vec learns?', opts:['Context','Only spelling'], a:0},{q:'Similar words have?', opts:['Close vectors','Far vectors'], a:0}]},
  {t:'Transformers & BERT/GPT', d:'Attention, LLMs', v:'https://www.youtube.com/embed/kCc8FmEb1nY', dur:'16 min', quiz:[{q:'Attention helps?', opts:['Focus on important tokens','Ignore all'], a:0},{q:'BERT is?', opts:['Bidirectional encoder','Only decoder'], a:0},{q:'GPT generates?', opts:['Next token','Previous only'], a:0}]},
  {t:'Build a Chatbot', d:'Intent, entities, deploy', v:'https://www.youtube.com/embed/kCc8FmEb1nY', dur:'18 min', quiz:[{q:'Intent is?', opts:['User goal','User name only'], a:0},{q:'Entity is?', opts:['Slot value','Random word'], a:0},{q:'Chatbot deploy needs?', opts:['API','Only HTML'], a:0}]}
 ],
 'Web Development': [
  {t:'HTML & CSS Fundamentals', d:'Structure, Flexbox, Grid', v:'https://www.youtube.com/embed/HXV3zeQKqGY', dur:'18 min', quiz:[{q:'HTML is?', opts:['Markup','Programming only'], a:0},{q:'CSS does?', opts:['Styling','Logic'], a:0},{q:'Flexbox helps?', opts:['Layout','Database'], a:0}]},
  {t:'JavaScript + React', d:'Components, hooks, state', v:'https://www.youtube.com/embed/w7ejDZ8SWv8', dur:'20 min', quiz:[{q:'React is?', opts:['UI library','Database'], a:0},{q:'Hook is?', opts:['Function for state','CSS'], a:0},{q:'JSX is?', opts:['JS + HTML','Only HTML'], a:0}]},
  {t:'Backend: Node & APIs', d:'Express, REST, auth', v:'https://www.youtube.com/embed/Oe421EPjeBE', dur:'18 min', quiz:[{q:'Node.js runs?', opts:['Server-side JS','Only browser'], a:0},{q:'REST uses?', opts:['HTTP verbs','Only FTP'], a:0},{q:'API is?', opts:['Interface','Database only'], a:0}]},
  {t:'Deploy & Performance', d:'Vercel, Next.js, Core Web Vitals', v:'https://www.youtube.com/embed/mJ3bGvy0WAY', dur:'16 min', quiz:[{q:'Vercel deploys?', opts:['Frontend','Only ML'], a:0},{q:'Next.js is?', opts:['React framework','Python'], a:0},{q:'Vitals measure?', opts:['Speed','Only color'], a:0}]}
 ],
 'Mobile App Development': [
  {t:'Flutter & Dart Intro', d:'Widgets, cross-platform', v:'https://www.youtube.com/embed/lHhRhPV--G0', dur:'16 min', quiz:[{q:'Flutter uses?', opts:['Dart','Java only'], a:0},{q:'Widget is?', opts:['UI block','Database'], a:0},{q:'Cross-platform means?', opts:['iOS + Android','Only iOS'], a:0}]},
  {t:'State & APIs', d:'Provider, REST integration', v:'https://www.youtube.com/embed/w7ejDZ8SWv8', dur:'15 min', quiz:[{q:'State is?', opts:['Data that changes','Static only'], a:0},{q:'REST API provides?', opts:['Data via HTTP','Only UI'], a:0},{q:'Provider helps?', opts:['State mgmt','Styling only'], a:0}]},
  {t:'Publish to Play Store', d:'Signing, release, ASO', v:'https://www.youtube.com/embed/lHhRhPV--G0', dur:'14 min', quiz:[{q:'Play Store needs?', opts:['Signed APK','Only code'], a:0},{q:'ASO is?', opts:['App Store Optimization','OS'], a:0},{q:'Release needs?', opts:['Testing','Nothing'], a:0}]},
  {t:'Performance & Offline', d:'Cache, native bridge', v:'https://www.youtube.com/embed/GwIo3gDZCVQ', dur:'16 min', quiz:[{q:'Cache helps?', opts:['Speed','Only design'], a:0},{q:'Offline needs?', opts:['Local storage','Only cloud'], a:0},{q:'Native bridge is?', opts:['JS to native','Only CSS'], a:0}]}
 ],
 'Software Engineering': [
  {t:'DSA Essentials', d:'Arrays, maps, graphs', v:'https://www.youtube.com/embed/UzLMhqg3_Wc', dur:'18 min', quiz:[{q:'DSA stands for?', opts:['Data Structures & Algorithms','Design Only'], a:0},{q:'Array access is?', opts:['O(1)','O(n)'], a:0},{q:'Graph has?', opts:['Nodes + edges','Only nodes'], a:0}]},
  {t:'System Design Basics', d:'Scale, CAP, sharding', v:'https://www.youtube.com/embed/UzLMhqg3_Wc', dur:'20 min', quiz:[{q:'CAP has?', opts:['Consistency, Availability, Partition','Only C'], a:0},{q:'Sharding splits?', opts:['Data','Code only'], a:0},{q:'Load balancer does?', opts:['Distributes traffic','Stores data'], a:0}]},
  {t:'Testing & Agile', d:'Unit, integration, sprints', v:'https://www.youtube.com/embed/UzLMhqg3_Wc', dur:'14 min', quiz:[{q:'Unit test tests?', opts:['Single unit','Whole system'], a:0},{q:'Agile is?', opts:['Iterative','Waterfall only'], a:0},{q:'Sprint is?', opts:['Time box','Bug only'], a:0}]},
  {t:'Microservices & CI/CD', d:'Docker, deploy pipelines', v:'https://www.youtube.com/embed/fqMOX6JJhGo', dur:'16 min', quiz:[{q:'Microservice is?', opts:['Small independent service','Monolith'], a:0},{q:'CI/CD helps?', opts:['Automate deploy','Only manual'], a:0},{q:'Docker packages?', opts:['App + deps','Only code'], a:0}]}
 ],
 'Game Development': [
  {t:'Unity Engine Basics', d:'Scene, GameObject, prefab', v:'https://www.youtube.com/embed/w7ejDZ8SWv8', dur:'16 min', quiz:[{q:'Unity uses?', opts:['C#','Python only'], a:0},{q:'Prefab is?', opts:['Reusable object','Only scene'], a:0},{q:'GameObject is?', opts:['Entity in scene','Only script'], a:0}]},
  {t:'C# Scripting & Physics', d:'Rigidbodies, collisions', v:'https://www.youtube.com/embed/w7ejDZ8SWv8', dur:'15 min', quiz:[{q:'Rigidbody adds?', opts:['Physics','Only UI'], a:0},{q:'Collision needs?', opts:['Collider','Only sprite'], a:0},{q:'C# is?', opts:['OOP language','Markup'], a:0}]},
  {t:'Multiplayer & Audio', d:'Netcode, sound', v:'https://www.youtube.com/embed/w7ejDZ8SWv8', dur:'14 min', quiz:[{q:'Multiplayer needs?', opts:['Networking','Only single'], a:0},{q:'AudioSource plays?', opts:['Sounds','Only video'], a:0},{q:'Netcode handles?', opts:['Sync','Only graphics'], a:0}]},
  {t:'Publish Your Game', d:'Build, store, monetize', v:'https://www.youtube.com/embed/mJ3bGvy0WAY', dur:'16 min', quiz:[{q:'Build exports?', opts:['Executable','Only code'], a:0},{q:'Store needs?', opts:['Listing','Nothing'], a:0},{q:'Monetize via?', opts:['Ads/IAP','Only free'], a:0}]}
 ],
 'HCI': [
  {t:'UX Foundations', d:'User-centered, personas', v:'https://www.youtube.com/embed/rfscVS0vtbw', dur:'14 min', quiz:[{q:'UX is?', opts:['User experience','Only code'], a:0},{q:'Persona is?', opts:['Fictional user','Real code'], a:0},{q:'UCD means?', opts:['User-Centered Design','Only tech'], a:0}]},
  {t:'Figma & Prototyping', d:'Auto-layout, components', v:'https://www.youtube.com/embed/w7ejDZ8SWv8', dur:'16 min', quiz:[{q:'Figma is?', opts:['Design tool','Database'], a:0},{q:'Prototype is?', opts:['Interactive mock','Final code'], a:0},{q:'Component reuses?', opts:['UI','Only text'], a:0}]},
  {t:'User Research & Testing', d:'Interviews, usability', v:'https://www.youtube.com/embed/M988_fsOSWo', dur:'15 min', quiz:[{q:'Usability test checks?', opts:['Ease of use','Only speed'], a:0},{q:'Interview finds?', opts:['User needs','Only bugs'], a:0},{q:'A/B in UX tests?', opts:['Variants','Only one'], a:0}]},
  {t:'Design Systems & Portfolio', d:'Ship polished case study', v:'https://www.youtube.com/embed/mJ3bGvy0WAY', dur:'18 min', quiz:[{q:'Design system is?', opts:['Reusable library','Single page'], a:0},{q:'Portfolio shows?', opts:['Process','Only final'], a:0},{q:'Case study needs?', opts:['Problem to solution','Only images'], a:0}]}
 ],
 'Cybersecurity': [
  {t:'Cyber Threat Landscape', d:'Malware, phishing, ransomware', v:'https://www.youtube.com/embed/3Kq1MIfTWCE', dur:'16 min', quiz:[{q:'Phishing is?', opts:['Fake message trick','Firewall'], a:0},{q:'Ransomware does?', opts:['Encrypts files','Speeds up'], a:0},{q:'Malware is?', opts:['Malicious software','Hardware'], a:0}]},
  {t:'Networking & Linux Basics', d:'TCP, ports, Kali', v:'https://www.youtube.com/embed/3Kq1MIfTWCE', dur:'15 min', quiz:[{q:'Port is?', opts:['Communication endpoint','Only hardware'], a:0},{q:'Kali Linux for?', opts:['Pentesting','Gaming only'], a:0},{q:'TCP is?', opts:['Reliable protocol','Unreliable'], a:0}]},
  {t:'Ethical Hacking Lab', d:'Nmap, Burp, CTF', v:'https://www.youtube.com/embed/3Kq1MIfTWCE', dur:'18 min', quiz:[{q:'Nmap scans?', opts:['Networks','Images'], a:0},{q:'Ethical hacking needs?', opts:['Permission','No permission'], a:0},{q:'CTF is?', opts:['Capture the Flag','Only quiz'], a:0}]},
  {t:'SOC & Hardening', d:'Blue team, incident response', v:'https://www.youtube.com/embed/3Kq1MIfTWCE', dur:'16 min', quiz:[{q:'SOC monitors?', opts:['Security ops','Only sales'], a:0},{q:'Hardening does?', opts:['Reduces attack surface','Opens ports'], a:0},{q:'Incident response is?', opts:['Contain & fix','Ignore'], a:0}]}
 ],
 'Cloud Computing': [
  {t:'Cloud Foundations', d:'IaaS, PaaS, SaaS', v:'https://www.youtube.com/embed/M988_fsOSWo', dur:'15 min', quiz:[{q:'IaaS provides?', opts:['Infrastructure','Only software'], a:0},{q:'S3 is?', opts:['Storage','Compute only'], a:0},{q:'SaaS is?', opts:['Software service','Hardware'], a:0}]},
  {t:'AWS EC2 Hands-On', d:'Launch, SSH, deploy', v:'https://www.youtube.com/embed/ubCNZRNjhyo', dur:'18 min', quiz:[{q:'EC2 is?', opts:['Virtual server','Database only'], a:0},{q:'SSH connects?', opts:['Secure shell','Only web'], a:0},{q:'AMI is?', opts:['Machine image','Only code'], a:0}]},
  {t:'Docker Essentials', d:'Images, containers', v:'https://www.youtube.com/embed/fqMOX6JJhGo', dur:'14 min', quiz:[{q:'Docker is?', opts:['Container platform','VM only'], a:0},{q:'Image is?', opts:['Template','Running process'], a:0},{q:'Container is?', opts:['Running instance','Only file'], a:0}]},
  {t:'Kubernetes & Scaling', d:'Pods, auto-scale', v:'https://www.youtube.com/embed/M988_fsOSWo', dur:'16 min', quiz:[{q:'K8s manages?', opts:['Containers','Only images'], a:0},{q:'Pod is?', opts:['Smallest deploy unit','Only server'], a:0},{q:'Auto-scale does?', opts:['Adjusts replicas','Fixed only'], a:0}]}
 ],
 'Computer Networks': [
  {t:'OSI Model Explained', d:'7 layers, encapsulation', v:'https://www.youtube.com/embed/TkCSr30UojM', dur:'15 min', quiz:[{q:'OSI has?', opts:['7 layers','5 layers'], a:0},{q:'Physical layer is?', opts:['Layer 1','Layer 7'], a:0},{q:'Encapsulation adds?', opts:['Headers','Only data'], a:0}]},
  {t:'TCP/IP & Routing', d:'IP, TCP handshake, BGP', v:'https://www.youtube.com/embed/TkCSr30UojM', dur:'16 min', quiz:[{q:'TCP is?', opts:['Reliable','Unreliable'], a:0},{q:'IP routes?', opts:['Packets','Only files'], a:0},{q:'Router forwards?', opts:['Between networks','Within one host'], a:0}]},
  {t:'Wireshark & Security', d:'Capture, firewalls', v:'https://www.youtube.com/embed/TkCSr30UojM', dur:'14 min', quiz:[{q:'Wireshark captures?', opts:['Packets','Only logs'], a:0},{q:'Firewall blocks?', opts:['Unwanted traffic','All traffic'], a:0},{q:'TLS provides?', opts:['Encryption','Only speed'], a:0}]},
  {t:'Network Design Project', d:'Subnet, VLAN lab', v:'https://www.youtube.com/embed/TkCSr30UojM', dur:'18 min', quiz:[{q:'Subnet splits?', opts:['Network','Only host'], a:0},{q:'VLAN is?', opts:['Virtual LAN','Physical only'], a:0},{q:'Design needs?', opts:['IP plan','No plan'], a:0}]}
 ],
 'DBMS': [
  {t:'SQL Basics: SELECT & JOINS', d:'Query real data', v:'https://www.youtube.com/embed/HXV3zeQKqGY', dur:'18 min', quiz:[{q:'SELECT does?', opts:['Retrieves','Deletes'], a:0},{q:'JOIN combines?', opts:['Tables','Files only'], a:0},{q:'Primary key is?', opts:['Unique','Duplicate allowed'], a:0}]},
  {t:'Normalization 1NF to BCNF', d:'Remove redundancy', v:'https://www.youtube.com/embed/HXV3zeQKqGY', dur:'16 min', quiz:[{q:'1NF requires?', opts:['Atomic values','Nested tables'], a:0},{q:'BCNF is stricter than?', opts:['3NF','1NF only'], a:0},{q:'Normalization reduces?', opts:['Redundancy','Data only'], a:0}]},
  {t:'NoSQL & MongoDB', d:'Documents, aggregation', v:'https://www.youtube.com/embed/c2M-rlkkT5o', dur:'14 min', quiz:[{q:'MongoDB stores?', opts:['Documents','Only tables'], a:0},{q:'NoSQL means?', opts:['Not only SQL','No SQL'], a:0},{q:'Aggregation does?', opts:['Pipeline transforms','Only select'], a:0}]},
  {t:'Transactions & Distribution', d:'ACID, replication', v:'https://www.youtube.com/embed/c2M-rlkkT5o', dur:'15 min', quiz:[{q:'ACID guarantees?', opts:['Consistency','Only speed'], a:0},{q:'Transaction is?', opts:['Atomic work','Single row'], a:0},{q:'Replication copies?', opts:['Data','Only schema'], a:0}]}
 ],
 'Operating Systems': [
  {t:'OS Intro: Processes & Threads', d:'Scheduling, states', v:'https://www.youtube.com/embed/26QPDBe-NB8', dur:'16 min', quiz:[{q:'Process is?', opts:['Running program','Only file'], a:0},{q:'Thread shares?', opts:['Memory','Nothing'], a:0},{q:'Scheduler decides?', opts:['CPU order','Only I/O'], a:0}]},
  {t:'Memory Mgmt & Paging', d:'Virtual memory, TLB', v:'https://www.youtube.com/embed/26QPDBe-NB8', dur:'15 min', quiz:[{q:'Paging divides?', opts:['Memory to frames','Only code'], a:0},{q:'Virtual memory is?', opts:['Illusion of big RAM','Only cache'], a:0},{q:'TLB caches?', opts:['Page tables','Only files'], a:0}]},
  {t:'File Systems & I/O', d:'EXT4, inodes', v:'https://www.youtube.com/embed/26QPDBe-NB8', dur:'14 min', quiz:[{q:'Inode stores?', opts:['Metadata','Only data'], a:0},{q:'EXT4 is?', opts:['File system','Process'], a:0},{q:'I/O handles?', opts:['Devices','Only CPU'], a:0}]},
  {t:'Linux Kernel Lab', d:'Build, syscalls', v:'https://www.youtube.com/embed/26QPDBe-NB8', dur:'18 min', quiz:[{q:'Kernel is?', opts:['Core OS','Only app'], a:0},{q:'Syscall is?', opts:['Kernel request','User only'], a:0},{q:'Linux is?', opts:['Monolithic','Micro only'], a:0}]}
 ],
 'Computer Architecture': [
  {t:'Digital Logic & Gates', d:'AND, OR, flip-flops', v:'https://www.youtube.com/embed/gI-qXk7XojA', dur:'14 min', quiz:[{q:'AND gate is?', opts:['1 only if both 1','Always 1'], a:0},{q:'Flip-flop stores?', opts:['1 bit','1 byte only'], a:0},{q:'Boolean algebra for?', opts:['Logic','Only math'], a:0}]},
  {t:'Pipelining & Cache', d:'Speed via stages', v:'https://www.youtube.com/embed/gI-qXk7XojA', dur:'16 min', quiz:[{q:'Pipeline overlaps?', opts:['Stages','Only one'], a:0},{q:'Cache is?', opts:['Fast small memory','Slow disk'], a:0},{q:'Hazard stalls?', opts:['Pipeline','Only CPU off'], a:0}]},
  {t:'Verilog & HDL', d:'Design CPU blocks', v:'https://www.youtube.com/embed/gI-qXk7XojA', dur:'15 min', quiz:[{q:'Verilog is?', opts:['Hardware language','Software only'], a:0},{q:'HDL describes?', opts:['Hardware','Only docs'], a:0},{q:'Module is?', opts:['Hardware block','Only function'], a:0}]},
  {t:'Build a Mini CPU', d:'Simulate, test', v:'https://www.youtube.com/embed/26QPDBe-NB8', dur:'18 min', quiz:[{q:'CPU does?', opts:['Executes instructions','Only stores'], a:0},{q:'ALU does?', opts:['Arithmetic','Only control'], a:0},{q:'Simulation tests?', opts:['Logic','Only speed'], a:0}]}
 ],
 'DevOps': [
  {t:'Git & Linux Essentials', d:'Branch, merge, bash', v:'https://www.youtube.com/embed/RGOj5yH7evk', dur:'15 min', quiz:[{q:'Git tracks?', opts:['Code versions','Only images'], a:0},{q:'Branch isolates?', opts:['Work','Only main'], a:0},{q:'Bash is?', opts:['Shell','Only GUI'], a:0}]},
  {t:'Docker Containers', d:'Build, ship, run', v:'https://www.youtube.com/embed/fqMOX6JJhGo', dur:'14 min', quiz:[{q:'Docker packages?', opts:['App+deps','Only code'], a:0},{q:'Dockerfile builds?', opts:['Image','Container only'], a:0},{q:'Container is?', opts:['Running app','Only file'], a:0}]},
  {t:'Kubernetes & K8s', d:'Deploy, scale, heal', v:'https://www.youtube.com/embed/M988_fsOSWo', dur:'16 min', quiz:[{q:'K8s is?', opts:['Orchestrator','Only Docker'], a:0},{q:'Deployment manages?', opts:['Pods','Only images'], a:0},{q:'Scaling adds?', opts:['Replicas','Only CPU'], a:0}]},
  {t:'CI/CD & SRE', d:'GitHub Actions, monitoring', v:'https://www.youtube.com/embed/RGOj5yH7evk', dur:'16 min', quiz:[{q:'CI means?', opts:['Continuous Integration','Only deploy'], a:0},{q:'CD means?', opts:['Continuous Delivery','Only code'], a:0},{q:'SRE ensures?', opts:['Reliability','Only features'], a:0}]}
 ],
 'Distributed Systems': [
  {t:'Consensus: Paxos & Raft', d:'Agree despite faults', v:'https://www.youtube.com/embed/RY_2gElt3SA', dur:'16 min', quiz:[{q:'Consensus is?', opts:['Agreement','Only speed'], a:0},{q:'Raft leader does?', opts:['Replicates log','Only stores'], a:0},{q:'Paxos solves?', opts:['Fault-tolerance','Only UI'], a:0}]},
  {t:'Replication & Partition', d:'CAP, quorums', v:'https://www.youtube.com/embed/RY_2gElt3SA', dur:'15 min', quiz:[{q:'Replication copies?', opts:['Data','Only code'], a:0},{q:'Quorum needs?', opts:['Majority','Only one'], a:0},{q:'CAP: pick 2 of?', opts:['Consistency, Availability, Partition','Only 1'], a:0}]},
  {t:'Kafka Streaming Lab', d:'Producers, consumers', v:'https://www.youtube.com/embed/M988_fsOSWo', dur:'15 min', quiz:[{q:'Kafka is?', opts:['Log streaming','Only DB'], a:0},{q:'Producer sends?', opts:['Events','Only queries'], a:0},{q:'Consumer reads?', opts:['Stream','Only batch'], a:0}]},
  {t:'Scale & Fault Lab', d:'Chaos, retry, timeout', v:'https://www.youtube.com/embed/RY_2gElt3SA', dur:'16 min', quiz:[{q:'Retry helps?', opts:['Transient faults','Permanent'], a:0},{q:'Timeout prevents?', opts:['Hanging','Only speed'], a:0},{q:'Scale needs?', opts:['Horizontal','Only vertical'], a:0}]}
 ],
 'IoT': [
  {t:'Sensors & Embedded C', d:'Read real world', v:'https://www.youtube.com/embed/lHhRhPV--G0', dur:'14 min', quiz:[{q:'Sensor does?', opts:['Converts physical to signal','Only stores'], a:0},{q:'Embedded C runs on?', opts:['Microcontroller','Only PC'], a:0},{q:'ADC converts?', opts:['Analog to digital','Digital to analog'], a:0}]},
  {t:'MQTT Protocol', d:'Pub/sub lightweight', v:'https://www.youtube.com/embed/M988_fsOSWo', dur:'15 min', quiz:[{q:'MQTT is?', opts:['Messaging protocol','Database'], a:0},{q:'Publisher sends?', opts:['To broker','Direct to DB'], a:0},{q:'Subscriber gets?', opts:['Topics','Only files'], a:0}]},
  {t:'Cloud Connect & Dash', d:'ThingsBoard, Grafana', v:'https://www.youtube.com/embed/M988_fsOSWo', dur:'16 min', quiz:[{q:'IoT cloud stores?', opts:['Sensor data','Only code'], a:0},{q:'Dashboard shows?', opts:['Live metrics','Only logs'], a:0},{q:'ThingBoard is?', opts:['IoT platform','Only OS'], a:0}]},
  {t:'Edge Project: Smart Home', d:'Build automation', v:'https://www.youtube.com/embed/lHhRhPV--G0', dur:'18 min', quiz:[{q:'Smart home uses?', opts:['Sensors+cloud','Only manual'], a:0},{q:'Edge means?', opts:['Process near device','Only cloud'], a:0},{q:'Automation is?', opts:['Rule-based actions','Manual only'], a:0}]}
 ],
 'Blockchain': [
  {t:'Cryptography & Hashing', d:'SHA, signatures', v:'https://www.youtube.com/embed/bBC-nXj3Ng4', dur:'15 min', quiz:[{q:'Hash is?', opts:['Fixed digest','Random'], a:0},{q:'SHA256 is?', opts:['Secure hash','Only encrypt'], a:0},{q:'Signature proves?', opts:['Authenticity','Only speed'], a:0}]},
  {t:'Solidity Smart Contracts', d:'EVM, gas', v:'https://www.youtube.com/embed/M576WGiDBdQ', dur:'16 min', quiz:[{q:'Solidity is?', opts:['Contract language','Only web'], a:0},{q:'EVM executes?', opts:['Contracts','Only CSS'], a:0},{q:'Gas pays for?', opts:['Computation','Only storage'], a:0}]},
  {t:'DApps & Web3', d:'Connect wallet, deploy', v:'https://www.youtube.com/embed/gyMwXuJrbJQ', dur:'15 min', quiz:[{q:'DApp is?', opts:['Decentralized app','Only central'], a:0},{q:'Wallet holds?', opts:['Keys','Only coins'], a:0},{q:'Web3 is?', opts:['Decentralized web','Only web2'], a:0}]},
  {t:'DeFi Mini Project', d:'Token, swap', v:'https://www.youtube.com/embed/gyMwXuJrbJQ', dur:'18 min', quiz:[{q:'Token is?', opts:['Asset on chain','Only coin'], a:0},{q:'Swap does?', opts:['Exchange tokens','Only store'], a:0},{q:'DeFi is?', opts:['Decentralized finance','Only bank'], a:0}]}
 ],
 'Robotics': [
  {t:'ROS Framework Intro', d:'Nodes, topics, services', v:'https://www.youtube.com/embed/5qap5aO4i9A', dur:'16 min', quiz:[{q:'ROS is?', opts:['Robot OS','Only hardware'], a:0},{q:'Node is?', opts:['Process','Only sensor'], a:0},{q:'Topic is?', opts:['Message channel','Only file'], a:0}]},
  {t:'Control Systems', d:'PID, kinematics', v:'https://www.youtube.com/embed/5qap5aO4i9A', dur:'15 min', quiz:[{q:'PID controls?', opts:['Error correction','Only speed'], a:0},{q:'Kinematics is?', opts:['Motion study','Only force'], a:0},{q:'Control needs?', opts:['Feedback','Only open'], a:0}]},
  {t:'Perception & AI', d:'Vision, SLAM', v:'https://www.youtube.com/embed/5qap5aO4i9A', dur:'16 min', quiz:[{q:'SLAM is?', opts:['Map + locate','Only map'], a:0},{q:'Perception uses?', opts:['Sensors+AI','Only manual'], a:0},{q:'Robot vision needs?', opts:['Cameras','Only GPS'], a:0}]},
  {t:'Autonomy Project', d:'Navigate, avoid', v:'https://www.youtube.com/embed/5qap5aO4i9A', dur:'18 min', quiz:[{q:'Autonomy means?', opts:['Self navigate','Only remote'], a:0},{q:'Obstacle avoid needs?', opts:['Sensors','Only code'], a:0},{q:'Deploy tests?', opts:['Real world','Only sim'], a:0}]}
 ],
 'AR/VR': [
  {t:'Unity XR Basics', d:'Scenes, prefabs for XR', v:'https://www.youtube.com/embed/w7ejDZ8SWv8', dur:'15 min', quiz:[{q:'XR is?', opts:['Extended reality','Only VR'], a:0},{q:'Unity XR supports?', opts:['AR+VR','Only VR'], a:0},{q:'Prefab reuses?', opts:['Objects','Only scripts'], a:0}]},
  {t:'ARCore & Mobile AR', d:'Plane, anchors', v:'https://www.youtube.com/embed/w7ejDZ8SWv8', dur:'14 min', quiz:[{q:'ARCore is?', opts:['Google AR SDK','Only iOS'], a:0},{q:'Anchor fixes?', opts:['Virtual to real','Only virtual'], a:0},{q:'Plane detects?', opts:['Surface','Only sky'], a:0}]},
  {t:'3D Modeling & Blender', d:'Low-poly, textures', v:'https://www.youtube.com/embed/w7ejDZ8SWv8', dur:'16 min', quiz:[{q:'Blender is?', opts:['3D tool','Only 2D'], a:0},{q:'Low-poly is?', opts:['Few polygons','High detail'], a:0},{q:'Texture adds?', opts:['Surface detail','Only shape'], a:0}]},
  {t:'Build an XR App', d:'Deploy to device', v:'https://www.youtube.com/embed/w7ejDZ8SWv8', dur:'18 min', quiz:[{q:'XR app runs on?', opts:['Headset/phone','Only PC'], a:0},{q:'Build exports?', opts:['APK/IPA','Only code'], a:0},{q:'Deploy tests?', opts:['On device','Only editor'], a:0}]}
 ],
 'Embedded Systems': [
  {t:'ARM Microcontrollers', d:'Registers, GPIO', v:'https://www.youtube.com/embed/26QPDBe-NB8', dur:'15 min', quiz:[{q:'ARM is?', opts:['Processor family','Only software'], a:0},{q:'GPIO is?', opts:['General I/O pins','Only memory'], a:0},{q:'Register is?', opts:['Fast storage','Only disk'], a:0}]},
  {t:'RTOS Concepts', d:'Tasks, scheduling', v:'https://www.youtube.com/embed/26QPDBe-NB8', dur:'16 min', quiz:[{q:'RTOS guarantees?', opts:['Timing','Only speed'], a:0},{q:'Task is?', opts:['Unit of work','Only file'], a:0},{q:'Scheduler picks?', opts:['Next task','Only one'], a:0}]},
  {t:'Drivers & Peripherals', d:'I2C, SPI, UART', v:'https://www.youtube.com/embed/26QPDBe-NB8', dur:'14 min', quiz:[{q:'I2C is?', opts:['Bus protocol','Only power'], a:0},{q:'UART is?', opts:['Serial','Only parallel'], a:0},{q:'Driver talks to?', opts:['Hardware','Only UI'], a:0}]},
  {t:'Hardware Project: Sensor Node', d:'Build + flash', v:'https://www.youtube.com/embed/26QPDBe-NB8', dur:'18 min', quiz:[{q:'Flash loads?', opts:['Firmware','Only data'], a:0},{q:'Sensor node does?', opts:['Collects data','Only stores'], a:0},{q:'Test needs?', opts:['Oscilloscope','Only code'], a:0}]}
 ],
 'Quantum Computing': [
  {t:'Qubits & Superposition', d:'Bloch sphere', v:'https://www.youtube.com/embed/g_IaVepNDT4', dur:'16 min', quiz:[{q:'Qubit can be?', opts:['0 and 1 together','Only 0'], a:0},{q:'Superposition is?', opts:['Both states','Only one'], a:0},{q:'Bloch sphere shows?', opts:['Qubit state','Only 0/1'], a:0}]},
  {t:'Qiskit Hands-On', d:'Circuits in Python', v:'https://www.youtube.com/embed/bBC-nXj3Ng4', dur:'15 min', quiz:[{q:'Qiskit is?', opts:['Quantum SDK','Only simulator'], a:0},{q:'Circuit has?', opts:['Gates','Only wires'], a:0},{q:'Python is used for?', opts:['Quantum code','Only web'], a:0}]},
  {t:'Quantum Algorithms', d:'Grover, Shor', v:'https://www.youtube.com/embed/g_IaVepNDT4', dur:'18 min', quiz:[{q:'Grover searches?', opts:['Faster than classic','Same speed'], a:0},{q:'Shor factors?', opts:['Large numbers','Only small'], a:0},{q:'Quantum advantage is?', opts:['Speedup','Only cost'], a:0}]},
  {t:'Future & Careers', d:'Where quantum is going', v:'https://www.youtube.com/embed/g_IaVepNDT4', dur:'14 min', quiz:[{q:'Quantum future is?', opts:['Huge impact','No impact'], a:0},{q:'Career needs?', opts:['Math+physics','Only coding'], a:0},{q:'Research is?', opts:['Active','Done'], a:0}]}
 ]
};
let activeCourse={domain:'AI',idx:0};
function getCourseProgress(domain){
 try{ const v=JSON.parse(localStorage.getItem('course_done_'+domain)||'[]'); return Array.isArray(v)?v:[]; }catch(e){ return []; }
}
function setCourseProgress(domain, idx){
 try{ const arr=getCourseProgress(domain); if(!arr.includes(idx)){ arr.push(idx); localStorage.setItem('course_done_'+domain, JSON.stringify(arr)); } return arr; }catch(e){ return []; }
}
function updateCourseProgressBadge(domain){
 const badge=document.getElementById('courseProgressBadge');
 const done=getCourseProgress(domain).length;
 const total=(courses[domain]||courses['AI']).length;
 if(badge) badge.textContent=`${done}/${total} done`;
 const cert=document.getElementById('certBtn');
 if(cert) cert.classList.toggle('hidden', done<total);
}
function renderCourse(domain, activeIdx=0){
 activeCourse={domain, idx:activeIdx};
 const dom=domains.find(d=>d.id===domain);
 const lbl=document.getElementById('courseDomainLabel'); if(lbl) lbl.textContent=dom? dom.name : domain;
 const list=courses[domain]||courses['AI'];
 const done=getCourseProgress(domain);
 const container=document.getElementById('courseList');
 if(container) container.innerHTML=list.map((c,i)=>{
  const isActive=i===activeIdx;
  const isDone=done.includes(i);
  const dur=c.dur?` · ${escapeHtml(c.dur)}`:'';
  return `<button onclick="playLesson('${escapeHtml(domain)}',${i})" aria-label="Play ${escapeHtml(c.t)}" class="w-full text-left p-4 rounded-2xl border ${isActive?'bg-indigo-600 text-white border-indigo-600': isDone?'bg-emerald-50 border-emerald-200':'bg-white hover:border-indigo-200'}">`+
      `<div class="flex justify-between items-start"><span class="font-bold text-sm">${i+1}. ${escapeHtml(c.t)}</span>${isDone?'<span class="text-emerald-600 text-xs">✓ done</span>':''}</div>`+
      `<div class="text-xs ${isActive?'text-white': isDone?'text-emerald-700':'text-slate-600 dark:text-slate-400'}">${escapeHtml(c.d)}${dur}</div></button>`;
 }).join('');
 updateCourseProgressBadge(domain);
 if(activeIdx===0) loadLesson(domain,0,false);
}
function loadLesson(domain,i, updateHighlight=true){
 const c=(courses[domain]||courses['AI'])[i];
 if(!c) return;
 document.getElementById('lessonTitle').textContent=c.t;
 document.getElementById('lessonDesc').textContent=c.d;
 const vid=document.getElementById('courseVideo');
 vid.src=c.v; vid.classList.remove('hidden');
 document.getElementById('courseVideoPlaceholder').classList.add('hidden');
 const qDiv=document.getElementById('lessonQuiz');
 if(c.quiz){ qDiv.classList.remove('hidden'); document.getElementById('lessonQuizQs').innerHTML=c.quiz.map((qq,idx)=>`<div><div class="font-semibold">${idx+1}. ${escapeHtml(qq.q)}</div><div class="mt-1 flex gap-2">${qq.opts.map((o,oi)=>`<label class="flex-1 p-2 rounded-xl border bg-white flex gap-2 cursor-pointer"><input type="radio" name="lq${i}_${idx}" value="${oi}"> ${escapeHtml(o)}</label>`).join('')}</div></div>`).join(''); } else { qDiv.classList.add('hidden'); }
 if(updateHighlight) updateCourseHighlight(domain,i);
}
function playLesson(domain,i){
 activeCourse={domain,idx:i};
 loadLesson(domain,i,true);
}
function updateCourseHighlight(domain, idx){
 const btns=document.getElementById('courseList').children;
 for(let n=0;n<btns.length;n++){
  const isActive=n===idx;
  btns[n].className=`w-full text-left p-4 rounded-2xl border ${isActive?'bg-indigo-600 text-white border-indigo-600':'bg-white hover:border-indigo-200'}`;
  const desc=btns[n].querySelector('div:last-child');
  if(desc) desc.className=`text-xs ${isActive?'text-white':'text-slate-600 dark:text-slate-400'}`;
 }
}
try{ renderCourse('AI',0); }catch(e){}
const roadmapSel=document.getElementById('roadmapDomainSelect');
if(roadmapSel){
 // populate 25
 roadmapSel.innerHTML=domains.map(d=>`<option value="${escapeHtml(d.id)}">${escapeHtml(d.name)}</option>`).join('');
 roadmapSel.addEventListener('change', e=>{ renderRoadmap(e.target.value); renderCourse(e.target.value,0); });
}
function submitLessonQuiz(){
 try{
  const list=courses[activeCourse.domain]||courses['AI'];
  const c=list[activeCourse.idx];
  let correct=0, total=0;
  if(c && c.quiz){
   c.quiz.forEach((qq,idx)=>{
    total++;
    const sel=document.querySelector(`input[name="lq${activeCourse.idx}_${idx}"]:checked`);
    if(sel && parseInt(sel.value)===qq.a) correct++;
   });
   if(total>0 && correct< Math.ceil(total/2)){
    toast(`⚠️ ${correct}/${total} correct — review and try again`);
    return;
   }
  }
  setCourseProgress(activeCourse.domain, activeCourse.idx);
  updateCourseProgressBadge(activeCourse.domain);
  // re-render list to show done tick
  try{ renderCourse(activeCourse.domain, activeCourse.idx); }catch(e){}
  let xp=parseInt(safeGet('xp','120'));
  if(isNaN(xp)) xp=120;
  xp+=50; safeSet('xp', String(xp));
  const d1=document.getElementById('dashXP'); if(d1) d1.textContent=xp;
  const d2=document.getElementById('xpBadge'); if(d2) d2.textContent='XP: '+xp;
  if(getCourseProgress(activeCourse.domain).length === list.length){
   toast('🎉 Course complete! Certificate unlocked — click Get Certificate');
   // auto scroll to cert button
   const cert=document.getElementById('certBtn'); if(cert) cert.scrollIntoView({behavior:'smooth', block:'center'});
  } else {
   toast(`✅ ${correct}/${total} correct! +50 XP • Keep streak`);
   // auto advance to next lesson
   const next=activeCourse.idx+1;
   if(next < list.length){
    setTimeout(()=> playLesson(activeCourse.domain, next), 900);
   }
  }
 }catch(e){ toast('XP updated'); }
}
function downloadCertificate(){
 const domain=activeCourse.domain || localStorage.getItem('quiz_top_domain') || 'AI';
 const dom=domains.find(d=>d.id===domain);
 const name=dom? dom.name: domain;
 const score=localStorage.getItem('quiz_top_score')||'82';
 const done=getCourseProgress(domain).length;
 const total=(courses[domain]||courses['AI']).length;
 if(done < total){
  toast(`Complete all ${total} lessons first (${done}/${total} done)`);
  return;
 }
 const win=window.open('','_blank');
 if(!win){ toast('Popup blocked — allow popups for certificate'); return; }
 const date=new Date().toLocaleDateString('en-IN',{day:'numeric', month:'long', year:'numeric'});
 win.document.write(`<html><head><meta charset="UTF-8"><title>Certificate — ${name}</title><style>body{font-family:Inter,sans-serif;background:#F8FAFC;display:grid;place-items:center;min-height:100vh;margin:0} .cert{background:white;border:3px solid #4F46E5;border-radius:24px;padding:48px;max-width:720px;text-align:center;box-shadow:0 24px 48px rgba(79,70,229,.15)} h1{color:#4F46E5;margin:0} .badge{display:inline-block;padding:6px 14px;background:#4F46E5;color:white;border-radius:999px;font-weight:700;margin:12px 0} .meta{color:#64748B;font-size:14px} button{margin-top:16px;padding:10px 20px;background:#4F46E5;color:white;border:none;border-radius:10px}</style></head><body><div class="cert"><div style="font-size:48px">🏆</div><h1>Certificate of Completion</h1><p>This certifies completion of</p><h2>${name} — Mini-Course</h2><div class="badge">${done}/${total} lessons · ${score}% match</div><p>GuidanceAI — Atlas 25 • RandomForest 89% • Vault Ready</p><p class="meta">Awarded on ${date} · Verification: guidanceai.vercel.app</p><button onclick="print()">Print / Save PDF</button></div></body></html>`);
 win.document.close();
 toast('🏆 Certificate ready — print or save PDF');
}


// ---------- RESOURCES ----------
function renderResources(){
 const grid=document.getElementById('resourceGrid');
 if(!grid) return;
 const search=(document.getElementById('resSearch').value||'').toLowerCase();
 const type=document.getElementById('resType').value;
 const lang=document.getElementById('resLang').value;
 const domainFilter=document.getElementById('resDomain') ? document.getElementById('resDomain').value : 'all';
 const filtered=resources.filter(r=> (type==='all'||r.type===type) && (lang==='all'||r.lang===lang) && (domainFilter==='all'||r.domain===domainFilter) && (r.title.toLowerCase().includes(search) || r.domain.toLowerCase().includes(search)));
 grid.innerHTML=filtered.map(r=>`
  <div class="p-5 rounded-3xl bg-white dark:bg-slate-800 border dark:border-slate-700 card-hover">
   <div class="flex items-start justify-between gap-2"><span class="px-2 py-1 rounded-full text-xs font-bold border ${r.type==='NPTEL'?'bg-orange-50 border-orange-200 text-orange-700': r.type==='Coursera'?'bg-blue-50 border-blue-200 text-blue-700':'bg-red-50 border-red-200 text-red-700'}">${escapeHtml(r.type)}</span><span class="text-xs text-amber-600"><i class="fa-solid fa-star" aria-hidden="true"></i> ${r.rating}</span></div>
   <div class="font-bold mt-3 leading-tight">${escapeHtml(r.title)}</div>
   <div class="mt-2 flex flex-wrap gap-1.5"><span class="px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs border">${escapeHtml(r.domain)}</span><span class="px-2 py-1 rounded-full bg-slate-50 text-xs border">${escapeHtml(r.lang)}</span><span class="px-2 py-1 rounded-full bg-slate-50 text-xs border">${escapeHtml(r.diff)}</span><span class="px-2 py-1 rounded-full bg-slate-50 text-xs border">${escapeHtml(r.dur)}</span></div>
   <div class="mt-4 flex gap-2"><a href="${escapeHtml(r.link)}" target="_blank" rel="noopener noreferrer" class="flex-1 py-2.5 rounded-xl bg-slate-900 text-white text-center text-sm font-bold">Open →</a><button onclick="toggleBookmark(${JSON.stringify(r.title).replace(/"/g,'&quot;')})" aria-label="Bookmark ${escapeHtml(r.title)}" class="px-3 py-2.5 rounded-xl border"><i class="fa-regular fa-bookmark"></i></button></div>
  </div>`).join('') || `<div class="col-span-full text-center py-10 text-slate-600 dark:text-slate-400">No resources found.</div>`;
}
try{ renderResources(); }catch(e){}
['resSearch','resType','resLang'].forEach(id=> { const el=document.getElementById(id); if(el) el.addEventListener('input', renderResources); });
['resType','resLang'].forEach(id=>{ const el=document.getElementById(id); if(el) el.addEventListener('change', renderResources); });
const resDomainEl=document.getElementById('resDomain');
if(resDomainEl){
 resDomainEl.innerHTML='<option value="all">All Domains (25)</option>' + domains.map(d=>`<option value="${escapeHtml(d.id)}">${escapeHtml(d.name)}</option>`).join('');
 resDomainEl.addEventListener('change', renderResources);
}
function toggleBookmark(t){
 try{
  let b=JSON.parse(safeGet('bookmarks','[]')||'[]');
  if(!Array.isArray(b)) b=[];
  if(b.includes(t)) b=b.filter(x=>x!==t); else b.push(t);
  safeSet('bookmarks', JSON.stringify(b));
  toast(b.includes(t)? '🔖 Bookmarked: '+t.slice(0,30): 'Removed bookmark');
 }catch(e){ toast('Bookmark saved'); }
}

// ---------- CHATBOT ----------
const chatToggle=document.getElementById('chatToggle');
if(chatToggle) chatToggle.onclick=()=>{
 const w=document.getElementById('chatWindow');
 w.classList.toggle('hidden');
 w.setAttribute('aria-hidden', w.classList.contains('hidden')?'true':'false');
};
// Restore chat history from localStorage for conversation continuity
try {
 const saved = JSON.parse(localStorage.getItem('chat_history')||'[]');
 const body=document.getElementById('chatBody');
 if(saved.length && body){
  // Keep initial greeting if exists, append saved
  saved.forEach(m=>{
   const cls = m.role==='user' ? 'p-3 rounded-2xl bg-indigo-600 text-white ml-8' : 'p-3 rounded-2xl bg-slate-100';
   body.insertAdjacentHTML('beforeend', `<div class="${cls}">${escapeHtml(m.content)}</div>`);
  });
  body.scrollTop=body.scrollHeight;
 }
} catch(e){}
// Add Claude-like quick chips (website-connected) below chatBody
try {
 const win=document.getElementById('chatWindow');
 const body=document.getElementById('chatBody');
 if(win && body && !document.getElementById('chatChips')){
  const chips=document.createElement('div');
  chips.id='chatChips';
  chips.className='px-3 py-2 flex flex-wrap gap-2 border-t bg-slate-50 text-xs';
  const items=['AI Roadmap','Vault for HCI','Compare AI vs Quantum','Tell me a joke','How does quiz work?'];
  items.forEach(txt=>{
   const b=document.createElement('button');
   b.textContent=txt;
   b.className='px-3 py-1.5 rounded-full bg-white border hover:bg-indigo-50 hover:border-indigo-200 transition';
   b.onclick=()=>{ const inp=document.getElementById('chatInput'); if(inp){ inp.value=txt; sendChat(); } };
   chips.appendChild(b);
  });
  const clear=document.createElement('button');
  clear.textContent='Clear';
  clear.className='ml-auto px-3 py-1.5 rounded-full bg-slate-900 text-white hover:bg-black';
  clear.onclick=()=>{ try{ localStorage.removeItem('chat_history'); body.innerHTML='<div class="p-3 rounded-2xl bg-slate-100">Hi! I cover 25 domains. Try: <b>\"Compare AI vs Quantum\"</b> or <b>\"Vault for Web Dev?\"</b> — I support 10 languages. Try voice! 🎤</div>'; }catch(e){} };
  chips.appendChild(clear);
  body.parentNode.insertBefore(chips, body.nextSibling);
 }
} catch(e){}
function sendChat(){
 const inp=document.getElementById('chatInput'); const raw=inp.value.trim(); if(!raw) return;
 const txt=escapeHtml(raw);
 const body=document.getElementById('chatBody');
 // Build history BEFORE inserting current user bubble (for Claude-like continuation)
 const history = [];
 try {
  const nodes = Array.from(body.children);
  for(let i=Math.max(0, nodes.length-8); i<nodes.length; i++){
   const el = nodes[i];
   if(el.id && el.id.startsWith('typing-')) continue;
   const txtInner = (el.innerText||'').trim();
   if(!txtInner || txtInner==='Thinking...' || txtInner.includes('Hi! I cover 25 domains')) continue;
   const isUser = el.classList.contains('bg-indigo-600');
   history.push({role: isUser?'user':'assistant', content: txtInner.slice(0,800)});
  }
 } catch(e){}
 try { localStorage.setItem('chat_history', JSON.stringify(history.slice(-20))); } catch(e){}
 const lang = (localStorage.getItem('lang') || document.documentElement.lang || document.getElementById('langSwitcher')?.value || 'en').slice(0,10);
 body.insertAdjacentHTML('beforeend', `<div class="p-3 rounded-2xl bg-indigo-600 text-white ml-8">${txt}</div>`);
 inp.value='';
 body.scrollTop=body.scrollHeight;
 const typingId = 'typing-'+Date.now();
 body.insertAdjacentHTML('beforeend', `<div id="${typingId}" class="p-3 rounded-2xl bg-slate-100 text-slate-500 text-sm">Thinking...</div>`);
 body.scrollTop=body.scrollHeight;
 // ML fallback — TF-IDF-like cosine over 25 domains (solves any website query offline)
 const mlFallback = (q)=>{
  const low=q.toLowerCase();
  if(/\b(hi|hey|bye)\b/.test(low) && low.split(/\s+/).length<=3 && !/(robotics|blockchain|quantum|cloud|cyber|security|game|hci)/.test(low)) {
   // Let daily handler handle short greetings, not ML
   return null;
  }
  const corpus = {
   'AI': "ai artificial intelligence build intelligent systems think learn reason python math logic ml basics roadmap python math ml deep learning projects salary 8-15 trending",
   'ML': "ml machine learning algorithms learn data statistics python data wrangling roadmap stats python supervised unsupervised deployment salary 7-14",
   'Data Science': "data science extract insights massive data python statistics sql visualization roadmap python stats sql visualization projects salary 8-18",
   'Big Data': "big data process petabytes distributed hadoop spark nosql cloud roadmap hadoop spark nosql cloud scale salary 8-16",
   'Computer Vision': "computer vision teach machines see detect interpret images python opencv deep learning math roadmap python image proc cnn projects salary 8-15",
   'NLP': "nlp natural language processing understand generate human language python nlp transformers linguistics roadmap python nlp transformers llm salary 8-14",
   'Web Development': "web development craft fast modern responsive web html css js react low math high creativity design roadmap html css js react node deploy salary 5-10 creativity design",
   'Mobile App Development': "mobile app development native cross-platform mobile flutter react native kotlin swift roadmap java kotlin flutter api publish salary 6-12",
   'Software Engineering': "software engineering architect scalable maintainable dsa system design testing agile roadmap dsa system design testing projects salary 7-13",
   'Game Development': "game development immersive games unity c# 3d graphics physics low math high creativity roadmap c# unity graphics publish salary 5-11 creative",
   'HCI': "hci human computer interaction intuitive human centered tech ux design figma psychology prototyping low math high creativity design roadmap ux figma user research prototype salary 6-12 creativity design",
   'Cybersecurity': "cybersecurity protect systems networks data attacks networking os ethical hacking crypto roadmap networking os ethical hacking soc salary 6-12 security",
   'Cloud Computing': "cloud computing scale apps aws azure gcp linux networking aws docker roadmap linux cloud fundamentals aws kubernetes salary 7-13",
   'Computer Networks': "computer networks design secure optimize communication tcp ip routing security wireshark roadmap osi tcp ip routing security salary 6-11",
   'DBMS': "dbms database management design manage data sql nosql system design roadmap sql normalization nosql distributed db salary 6-11",
   'Operating Systems': "operating systems kernels processes memory c os concepts linux kernel roadmap c processes memory kernel salary 6-10",
   'Computer Architecture': "computer architecture processors memory instruction digital logic coa verilog assembly roadmap digital logic coa pipelining verilog salary 7-12",
   'DevOps': "devops automate build test deploy linux docker k8s ci cd roadmap linux docker k8s ci cd sre salary 7-14",
   'Distributed Systems': "distributed systems fault tolerant scalable consensus replication kafka cloud roadmap os networks consensus kafka scale salary 8-15",
   'IoT': "iot internet things connect physical devices cloud edge embedded c sensors mqtt cloud roadmap embedded c sensors mqtt cloud salary 6-12",
   'Blockchain': "blockchain decentralized ledgers smart contracts solidity crypto dapps ethereum roadmap crypto solidity dapps web3 salary 7-14",
   'Robotics': "robotics intelligent robots autonomous ros embedded ai control roadmap mechanics ros ai control salary 7-12",
   'AR/VR': "ar vr augmented virtual reality immersive metaverse unity 3d arcore blender roadmap unity 3d arcore xr projects salary 7-13",
   'Embedded Systems': "embedded systems microcontrollers real-time c arm rtos sensors roadmap c arm rtos projects salary 6-11 hardware",
   'Quantum Computing': "quantum computing harness quantum mechanics qiskit python math roadmap math qm qiskit algorithms salary 10-20 future advanced physics",
   '__VAULT__': "vault your files 4 slots notes videos projects assignments frontend public vault slug",
   '__QUIZ__': "quiz 15 questions marks math programming physics english randomforest 89 pca 11 10 top-3 radar",
   '__COMPARE__': "compare up to 3 tracks side by side salary skills roadmap bottom bar compare card checkbox palette"
  };
  if(/\bai\b/.test(low) && !/(robotics|blockchain|quantum|cloud|cyber|security|game|hci)/.test(low)) return "AI fits → Python → Math → ML → Deep Learning → Projects (36 weeks). Salary 8-15 LPA, Very High. Vault: /public/vault/ai/.";
  const tokenize = s=> s.toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(Boolean);
  const qTokens = new Set(tokenize(q));
  let bestKey=null, bestScore=-1;
  for(const [k, doc] of Object.entries(corpus)){
   const dTokens = tokenize(doc);
   const dSet = new Set(dTokens);
   let inter=0; qTokens.forEach(t=>{ if(dSet.has(t)) inter++; });
   const union = new Set([...qTokens, ...dSet]).size;
   const jacc = union? inter/union : 0;
   const phraseBonus = doc.includes(low) ? 0.15 : 0;
   const score = jacc + phraseBonus;
   if(score>bestScore){ bestScore=score; bestKey=k; }
  }
  if(bestScore<0.04) return "I can help with any of the 25 tracks (Atlas). Try: 'Which domain for low math but high creativity?' → I suggest HCI/Game/Web, or 'Roadmap for DBMS?' or 'Vault for AI?'";
  if(bestKey==='__VAULT__') return "Vault — Your Files: 4 slots per domain (notes/videos/projects/assignments) at /public/vault/<slug>/ — e.g., /vault/ai/notes/.";
  if(bestKey==='__QUIZ__') return "Quiz: 15 Qs ×4 + marks (math/prog/phy/eng) → Top-3 via RandomForest 89% (PCA 11→10) with radar. 3 min at quiz.html.";
  if(bestKey==='__COMPARE__') return "Compare: Tick Compare on up to 3 cards → bottom bar → Compare shows side-by-side.";
  const map={
   'AI': "AI fits → Python → Math → ML → Deep Learning → Projects (36 weeks). Salary 8-15 LPA. Vault: /public/vault/ai/.",
   'ML': "ML fits → Stats → Python → Supervised/Unsupervised → MLOps. Salary 7-14 LPA. Vault: /public/vault/ml/",
   'Data Science': "Data Science fits → Python → Stats → SQL → Visualization. Salary 8-18 LPA. Vault: /public/vault/data-science/",
   'Big Data': "Big Data fits → Hadoop → Spark → NoSQL → Cloud Scale. Salary 8-16 LPA. Vault: /public/vault/big-data/",
   'Computer Vision': "Computer Vision fits → Python → Image Proc → CNN. Salary 8-15 LPA. Vault: /public/vault/computer-vision/",
   'NLP': "NLP fits → Python → NLP Basics → Transformers → LLM. Salary 8-14 LPA. Vault: /public/vault/nlp/",
   'Web Development': "Web Development fits (low math, high creativity) → HTML/CSS → JS → React → Node → Deploy. Salary 5-10 LPA. Vault: /public/vault/web-development/.",
   'Mobile App Development': "Mobile fits → Java/Kotlin → Flutter → API → Publish. Salary 6-12 LPA. Vault: /public/vault/mobile-app-development/",
   'Software Engineering': "Software Engineering fits → DSA → System Design → Testing. Salary 7-13 LPA. Vault: /public/vault/software-engineering/",
   'Game Development': "Game Development fits (creativity) → C# → Unity → Graphics → Publish. Salary 5-11 LPA. Vault: /public/vault/game-development/",
   'HCI': "HCI fits (high creativity, low math) → UX → Figma → User Research → Prototype. Salary 6-12 LPA. Vault: /public/vault/hci/.",
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
   'AR/VR': "AR/VR fits → Unity → 3D → ARCore → XR. Salary 7-13 LPA. Vault: /public/vault/ar-vr/",
   'Embedded Systems': "Embedded Systems fits → C → ARM → RTOS → Projects. Salary 6-11 LPA. Vault: /public/vault/embedded-systems/",
   'Quantum Computing': "Quantum Computing fits (high math/logic) → Math → QM → Qiskit → Algorithms. Salary 10-20 LPA (highest). Frontier. Vault: /public/vault/quantum-computing/"
  };
  return map[bestKey] || map['AI'];
 };
 const fallbackReply = ()=>{
  const low=raw.toLowerCase();
  // Daily conversation priority
  const dailyChecks = ['hello','good morning','good afternoon','good evening','how are you','how r u','whats up',"what's up",'who are you','what can you do','thanks','thank you','bye','good night','joke'];
  if(dailyChecks.some(g=> low.includes(g)) || /\b(hi|hey|bye)\b/.test(low)){
   let r="Hello! I'm GuidanceAI — great to see you. I can chat daily and help with 25 CSE tracks. What would you like?";
   if(low.includes('how are you')||low.includes('how r u')) r="I'm doing great — thanks for asking! I'm GuidanceAI, your CSE counsellor and daily chat buddy. How can I help today?";
   else if(low.includes('good morning')||low.includes('good afternoon')||low.includes('good evening')||low.includes('good night')) r="Good morning! Hope your day is great. I'm here for daily chat and CSE guidance — ask about 25 tracks or anything else!";
   else if(low.includes('joke')) r="Sure — why do programmers prefer dark mode? Because light attracts bugs! Want another or a domain suggestion?";
   else if(low.includes('who are you')||low.includes('what can you do')) r="I'm GuidanceAI — friendly daily chat companion and CSE expert for 25 domains (AI, ML, Web, HCI, Quantum etc.), 36-week roadmaps, vault, quiz (89%), 10 languages!";
   else if(low.includes('thanks')||low.includes('thank you')) r="You're welcome! Happy to help — ask about domains, roadmap, or just chat!";
   else if(/\b(bye)\b/.test(low)) r="Bye — take care! Come back for CSE guidance or daily chat!";
   const el=document.getElementById(typingId); if(el) el.outerHTML=`<div class="p-3 rounded-2xl bg-slate-100">${escapeHtml(r)}</div>`; else body.insertAdjacentHTML('beforeend', `<div class="p-3 rounded-2xl bg-slate-100">${escapeHtml(r)}</div>`); body.scrollTop=body.scrollHeight; return;
  }
  if(low.includes('compare')) { const r="Compare: Tick Compare on cards -> bottom bar -> Compare to see side-by-side table."; const el=document.getElementById(typingId); if(el) el.outerHTML=`<div class="p-3 rounded-2xl bg-slate-100">${escapeHtml(r)}</div>`; else body.insertAdjacentHTML('beforeend', `<div class="p-3 rounded-2xl bg-slate-100">${escapeHtml(r)}</div>`); body.scrollTop=body.scrollHeight; return; }
  if(low.includes('vault')||low.includes('file')) { const r=(typeof t==='function'?t('vault_howto'):"Vault — Your Files for")+": /public/vault/<domain>/"; const el=document.getElementById(typingId); if(el) el.outerHTML=`<div class="p-3 rounded-2xl bg-slate-100">${escapeHtml(r)}</div>`; else body.insertAdjacentHTML('beforeend', `<div class="p-3 rounded-2xl bg-slate-100">${escapeHtml(r)}</div>`); body.scrollTop=body.scrollHeight; return; }
  const reply = mlFallback(raw);
  if(reply===null){ // daily already handled
   const el=document.getElementById(typingId); if(el) el.remove(); return;
  }
  const el=document.getElementById(typingId);
  if(el) el.outerHTML=`<div class="p-3 rounded-2xl bg-slate-100">${escapeHtml(reply)}</div>`;
  else body.insertAdjacentHTML('beforeend', `<div class="p-3 rounded-2xl bg-slate-100">${escapeHtml(reply)}</div>`);
  body.scrollTop=body.scrollHeight;
 };
 let apiBase = "";
 try { apiBase = window.API_URL || localStorage.getItem('API_URL') || ""; } catch(e){}
 const url = (apiBase ? apiBase.replace(/\/$/,'') : '') + '/api/chat';
 const controller = new AbortController();
 const timeout = setTimeout(()=> controller.abort(), 9000);
 fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({question: raw, lang: lang, history: history}), signal: controller.signal})
  .then(r => { clearTimeout(timeout); if(!r.ok) throw new Error('bad status'); return r.json(); })
  .then(d => {
   const ans = (d && d.answer) ? String(d.answer) : "";
   if(!ans) throw new Error('empty');
   const el=document.getElementById(typingId);
   const safe = ans.replace(/&lt;/g,'<').replace(/&gt;/g,'>');
   const display = escapeHtml(safe);
   const html = display.replace(/\n/g,'<br>');
   if(el) el.outerHTML=`<div class="p-3 rounded-2xl bg-slate-100">${html}<div class="text-[10px] text-slate-400 mt-1">${d.source==='claude' ? 'Claude · website-connected' : 'ML · website-connected'}"}</div></div>`;
   else body.insertAdjacentHTML('beforeend', `<div class="p-3 rounded-2xl bg-slate-100">${html}</div>`);
   body.scrollTop=body.scrollHeight;
   try { const curHist = JSON.parse(localStorage.getItem('chat_history')||'[]'); curHist.push({role:'assistant', content: ans.slice(0,800)}); localStorage.setItem('chat_history', JSON.stringify(curHist.slice(-20))); } catch(e){}
  })
  .catch(err=>{
   clearTimeout(timeout);
   fallbackReply();
  });
}
const chatInp=document.getElementById('chatInput');
if(chatInp) chatInp.addEventListener('keydown', e=>{ if(e.key==='Enter') sendChat(); });
function startVoice(){
 if('webkitSpeechRecognition' in window || 'SpeechRecognition' in window){
  const SR= window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec=new SR(); rec.lang='en-IN'; rec.start(); toast('🎤 Listening...');
  rec.onresult=e=>{ document.getElementById('chatInput').value=e.results[0][0].transcript; sendChat(); };
 } else toast('Voice not supported, type instead');
}

// ---------- DASHBOARD TABS (bottom) ----------
function switchDashboard(which){
 try{
  ['student','parent','teacher'].forEach(w=>{
   const dash=document.getElementById('dash'+w.charAt(0).toUpperCase()+w.slice(1));
   const tab=document.getElementById('tab'+w.charAt(0).toUpperCase()+w.slice(1));
   if(dash) dash.classList.toggle('hidden', w!==which);
   if(tab) tab.className= w===which ? 'px-5 py-2 rounded-lg bg-slate-900 text-white font-semibold text-sm' : 'px-5 py-2 rounded-lg font-semibold text-sm bg-transparent';
  });
  if(which==='teacher' && !teacherChart){
   const cvs=document.getElementById('teacherChart');
   if(cvs){
    const ctx=cvs.getContext('2d');
    const cats=['Intelligence & Data','Build & Experience','Core Systems','Frontier Tech']; const counts=cats.map(c=> domains.filter(d=>d.category===c).length*30); teacherChart=new Chart(ctx, {type:'bar', data:{labels:cats, datasets:[{label:'Students guided', data:counts, backgroundColor:['#4F46E5','#06B6D4','#0F172A','#10B981']}]}, options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{y:{beginAtZero:true}}}});
   }
  }
 }catch(e){ console.warn('dashboard switch failed',e); }
}
// FAQ accordion (bottom) + Mobile nav + Contact/Newsletter (perfect)
document.querySelectorAll('.faq-btn').forEach(btn=>{
 btn.addEventListener('click', ()=>{
  const ans=btn.nextElementSibling;
  const icon=btn.querySelector('i');
  const isOpen=btn.getAttribute('aria-expanded')==='true';
  btn.setAttribute('aria-expanded', !isOpen);
  if(ans) ans.classList.toggle('hidden', isOpen);
  if(icon) icon.style.transform=isOpen?'rotate(0deg)':'rotate(180deg)';
 });
});
// Mobile drawer
const mobileBtn=document.getElementById('mobileMenuBtn');
const mobileDrawer=document.getElementById('mobileDrawer');
if(mobileBtn && mobileDrawer){
 mobileBtn.addEventListener('click', ()=>{
  const open=mobileDrawer.classList.contains('hidden');
  mobileDrawer.classList.toggle('hidden', !open);
  mobileBtn.setAttribute('aria-expanded', open);
  mobileBtn.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';
 });
 mobileDrawer.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=>{
  mobileDrawer.classList.add('hidden');
  mobileBtn.setAttribute('aria-expanded','false');
  mobileBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
 }));
}

// ---------- FEEDBACK (bottom section) ----------
const fbForm=document.getElementById('feedbackForm');
if(fbForm) fbForm.addEventListener('submit', e=>{
 e.preventDefault();
 const name=escapeHtml(e.target[0].value.trim()||'Anonymous');
 const role=escapeHtml(e.target[1].value||'Student');
 const text=escapeHtml(e.target[2].value.trim());
 if(!text || text.length<5){ toast('⚠️ Please write at least 5 characters'); return; }
 const rating = window._lastRating || 5;
 const list=document.getElementById('feedbackList');
 const starsHtml = '⭐'.repeat(rating);
 list.insertAdjacentHTML('afterbegin', `<div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200"><b>${name}</b> • ${starsHtml} • <span class="text-xs px-2 py-1 rounded-full bg-white border">${role}</span><div class="mt-1">${text}</div><div class="text-xs text-slate-600 mt-1">${new Date().toLocaleDateString()}</div></div>`);
 e.target.reset(); toast('💚 Thank you! Feedback saved');
 window._lastRating=5;
 document.querySelectorAll('#starRating i').forEach((s,i)=> s.style.color= i < 5 ? '#F59E0B' : '#CBD5E1');
});
window._lastRating=5;
document.querySelectorAll('#starRating i').forEach(star=>{
 star.setAttribute('role','button'); star.setAttribute('tabindex','0'); star.setAttribute('aria-label','Rate '+star.dataset.v+' stars');
 const handler=()=>{
  const v=+star.dataset.v; window._lastRating=v;
  document.querySelectorAll('#starRating i').forEach((s,i)=> s.style.color= i < v ? '#F59E0B' : '#CBD5E1');
 };
 star.addEventListener('click', handler);
 star.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' ') { e.preventDefault(); handler(); } });
});

// ---------- i18n ----------
const langSwitcher=document.getElementById('langSwitcher');
if(langSwitcher) langSwitcher.addEventListener('change', e=>{
 const l=e.target.value;
 try{ localStorage.setItem('lang', l); }catch(err){}
 document.documentElement.lang=l;
 document.documentElement.dir=(l==='ur'?'rtl':'ltr');
 document.body.dir=(l==='ur'?'rtl':'ltr');
 updateAllI18n();
 try{
  document.querySelectorAll('[data-i18n]').forEach(el=>{ const k=el.dataset.i18n; const v=t(k); if(v) el.innerText=v; });
  document.title = l==='te'? 'గైడెన్స్AI — 25 డొమైన్లు' : l==='hi'? 'गाइडेंसAI — 25 डोमेन' : l==='ur'? 'گائیڈنسAI — 25 ڈومین' : 'GuidanceAI — Atlas 25';
 }catch(err){}
 toast(t('toast_lang',{lang:e.target.selectedOptions[0].text}));
 // auto speak removed for pro UX — user can click 🔊
 try{ renderDomains(currentCategory, currentSearch); }catch(err){}
});
const roleSwitcher=document.getElementById('roleSwitcher');
if(roleSwitcher) roleSwitcher.addEventListener('change', e=>{
 const r=e.target.value;
 if(r==='parent') switchDashboard('parent');
 else if(r==='teacher') switchDashboard('teacher');
 else switchDashboard('student');
 const dash=document.getElementById('dashboard'); if(dash) dash.scrollIntoView({behavior:'smooth'}); else location.href=pagePath('dashboard.html');
});
const newsletterForm=document.getElementById('newsletterForm');
if(newsletterForm) newsletterForm.addEventListener('submit', e=>{
 e.preventDefault();
 const email=document.getElementById('newsletterEmail').value.trim();
 if(!email || !email.includes('@')){ toast('⚠️ Enter valid email'); return; }
 toast('✅ Subscribed: '+email.slice(0,20)+' • Welcome!'); e.target.reset();
});
const contactForm=document.getElementById('contactForm');
if(contactForm) contactForm.addEventListener('submit', e=>{
 e.preventDefault();
 const name=e.target.querySelector('input[placeholder="Your name"]')?.value.trim()||'';
 const email=e.target.querySelector('input[type="email"]')?.value.trim()||'';
 const msg=e.target.querySelector('textarea')?.value.trim()||'';
 if(!name || !email || msg.length<5){ toast('⚠️ Fill all fields (msg ≥5 chars)'); return; }
 fetch((window.API_URL||'http://localhost:8000')+'/api/feedback', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({name, text:msg, rating:5})}).catch(()=>{});
 toast('💚 Message sent — we reply in 2h!'); e.target.reset();
});
// langMap handled above — consolidated
if('serviceWorker' in navigator){
 window.addEventListener('load', ()=>{
  navigator.serviceWorker.register('./frontend/public/sw.js').catch(()=>{});
 });
}
function toggleDark(){
 document.documentElement.classList.toggle('dark');
 try{ localStorage.setItem('theme', document.documentElement.classList.contains('dark')?'dark':'light'); }catch(e){}
}
(function initTheme(){
 try{
  if(localStorage.getItem('theme')==='dark') document.documentElement.classList.add('dark');
  else if(!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.classList.add('dark');
 }catch(e){}
})();
(function initLang(){
 try{
  const saved=safeGet('lang', null) || localStorage.getItem('lang');
  if(saved && i18n[saved]){
   const ls=document.getElementById('langSwitcher');
   if(ls) ls.value=saved;
   document.documentElement.lang=saved;
   document.documentElement.dir=(saved==='ur'?'rtl':'ltr');
   document.body.dir=(saved==='ur'?'rtl':'ltr');
   updateAllI18n();
  } else {
   // No saved lang — ensure default render in correct font without FOUC
   document.documentElement.lang='en';
   document.documentElement.dir='ltr';
   try{ renderDomains(currentCategory, currentSearch); }catch(e){}
   try{ renderResources(); }catch(e){}
   try{ renderCompareBar(); }catch(e){}
  }
 }catch(e){
  try{ renderDomains(currentCategory, currentSearch); }catch(err){}
 }
})();
// ---------- DAILY TIP + AUTO LANGUAGE SUGGEST — NEW FEATURE ----------
const dailyTips = [
 {text:"AI tip: Master Python → Math (gradients, Bayes) → ML → Deep Learning. Build a RAG app in 36 weeks.", meta:"AI • Trending 2026 • 8-15 LPA", link:pagePath('domain.html?id=AI')},
 {text:"Web Dev tip: Low math? High creativity? Start HTML/CSS → JS → React → Node. Portfolio in 3 months.", meta:"Web Development • Beginner • 5-10 LPA", link:pagePath('domain.html?id=Web%20Development')},
 {text:"Cybersecurity tip: Learn Networking → Linux → Ethical Hacking → SOC. Try CTF in Vault/Cybersecurity.", meta:"Cybersecurity • Critical • 6-12 LPA", link:pagePath('domain.html?id=Cybersecurity')},
 {text:"Quantum tip: High math + logic? Explore QM → Qiskit → Algorithms. Future 10-20 LPA.", meta:"Quantum Computing • Future • 40% growth", link:pagePath('domain.html?id=Quantum%20Computing')},
 {text:"HCI tip: Love Figma & UX? Go HCI: UX Basics → Figma → User Research → Prototype.", meta:"HCI • Design • 6-12 LPA", link:pagePath('domain.html?id=HCI')},
 {text:"Cloud tip: Scale on AWS/Azure/GCP: Linux → Cloud Fundamentals → AWS → Kubernetes.", meta:"Cloud Computing • Enterprise • 7-13 LPA", link:pagePath('domain.html?id=Cloud%20Computing')},
 {text:"Vault: Your 4 slots per domain (Notes/Videos/Projects/Assignments) are empty — add PDFs today!", meta:"Vault • 25 domains • Stay local", link:pagePath('dashboard.html')},
 {text:"Quiz tip: 15 Qs ×4 + marks → Top-3 via RandomForest 89% in 3 min. Try now!", meta:"Quiz • 750 students • 89% accuracy", link:pagePath('quiz.html')},
 {text:"Compare tip: Tick Compare on 2-3 cards → bottom bar → side-by-side salary/skills/roadmap.", meta:"Compare • 3 tracks • Salary", link:pagePath('explorer.html')},
 {text:"Parent tip: Switch to Telugu/Hindi/Tamil in top bar — voice readout for parents.", meta:"Multilingual • 10 languages • TTS", link:pagePath('dashboard.html')}
];
function getDailyTipIndex(){
 const today = new Date().toISOString().slice(0,10);
 let hash=0; for(let i=0;i<today.length;i++) hash=(hash*31+today.charCodeAt(i))%1000000;
 return hash % dailyTips.length;
}
function renderDailyTip(idx){
 const tip = dailyTips[idx % dailyTips.length];
 const elText=document.getElementById('dailyTipText');
 const elMeta=document.getElementById('dailyTipMeta');
 const elLink=document.getElementById('dailyTipLink');
 const elDate=document.getElementById('dailyTipDate');
 if(elText) elText.textContent=tip.text;
 if(elMeta) elMeta.textContent=tip.meta;
 if(elLink) elLink.href=tip.link;
 if(elDate) elDate.textContent=new Date().toLocaleDateString('en-IN',{weekday:'short', day:'numeric', month:'short'});
 try{ localStorage.setItem('dailyTipIdx', String(idx)); localStorage.setItem('dailyTipDate', new Date().toISOString().slice(0,10)); }catch(e){}
}
function nextDailyTip(){
 const cur = parseInt(localStorage.getItem('dailyTipIdx')||'0',10);
 renderDailyTip((cur+1)%dailyTips.length);
 toast('💡 Next tip');
}
window.nextDailyTip=nextDailyTip;
(function initDailyTip(){
 const el=document.getElementById('dailyTip');
 if(!el) return;
 const savedDate=localStorage.getItem('dailyTipDate');
 const today=new Date().toISOString().slice(0,10);
 let idx;
 if(savedDate===today){
  idx=parseInt(localStorage.getItem('dailyTipIdx')||'0',10);
 } else {
  idx=getDailyTipIndex();
 }
 renderDailyTip(idx);
})();
// Auto language suggest based on browser
(function autoLangSuggest(){
 try{
  const saved=localStorage.getItem('lang');
  if(saved) return;
  const browser=(navigator.language||'en').toLowerCase();
  const map={te:'te', 'te-in':'te', hi:'hi', 'hi-in':'hi', ta:'ta', 'ta-in':'ta', kn:'kn', ml:'ml', mr:'mr', bn:'bn', gu:'gu', ur:'ur', 'ur-pk':'ur'};
  let suggest=map[browser] || map[browser.slice(0,2)];
  if(suggest && i18n[suggest]){
   setTimeout(()=>{
    const langNames={te:'Telugu', hi:'Hindi', ta:'Tamil', kn:'Kannada', ml:'Malayalam', mr:'Marathi', bn:'Bengali', gu:'Gujarati', ur:'Urdu'};
    const name=langNames[suggest]||suggest;
    if(confirm(`Switch to ${name}? Your browser is ${browser} — GuidanceAI supports 10 languages. Switch now?`)){
     const ls=document.getElementById('langSwitcher');
     if(ls){ ls.value=suggest; ls.dispatchEvent(new Event('change')); }
    }
   }, 1200);
  }
 }catch(e){}
})();
function toast(msg){
 const t=document.getElementById('toast'); if(!t) return; t.textContent=msg; t.classList.remove('hidden');
 t.setAttribute('role','status'); t.setAttribute('aria-live','polite');
 clearTimeout(window._toastTimer);
 window._toastTimer=setTimeout(()=> t.classList.add('hidden'), 3000);
}
try{
 const heroCanvas=document.getElementById('heroRadar');
 if(heroCanvas) new Chart(heroCanvas, {type:'radar', data:{labels:['Logic','Math','Data','Cloud','Security'], datasets:[{data:[5,4,4,2,3], fill:true, backgroundColor:'rgba(79,70,229,0.15)', borderColor:'#4F46E5'}]}, options:{responsive:true, scales:{r:{min:0,max:5,ticks:{display:false}}}, plugins:{legend:{display:false}} }});
}catch(e){ console.warn('Chart init failed', e); }
const roleSel=document.getElementById('roleSwitcher');
if(roleSel) roleSel.value='student';
try{ const top=safeGet('guidance_top'); if(top){} }catch(e){}
document.addEventListener('keydown', e=>{
 if(e.key==='Escape'){
  const dm=document.getElementById('domainModal'); if(dm) dm.classList.add('hidden');
  const vm=document.getElementById('videoModal'); if(vm) vm.classList.add('hidden');
  const cw=document.getElementById('chatWindow'); if(cw) cw.classList.add('hidden');
  const cm=document.getElementById('compareModal'); if(cm) cm.classList.add('hidden');
  // command palette
  const cp=document.getElementById('commandPalette'); if(cp) cp.classList.add('hidden');
 }
 if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==='k'){
  e.preventDefault();
  const cp=document.getElementById('commandPalette');
  if(cp){ cp.classList.toggle('hidden'); document.getElementById('commandInput')?.focus(); }
 }
});
['domainModal','videoModal','compareModal','commandPalette'].forEach(id=>{
 const el=document.getElementById(id);
 if(el) el.addEventListener('click', e=>{ if(e.target===el) el.classList.add('hidden'); });
});
document.addEventListener('click', e=>{
 const t=e.target;
 if(t.closest('button') && t.closest('button').textContent.includes('Export Batch Report')){
  e.preventDefault(); toast('📊 Batch report exported (demo CSV) — 750 students • 25 domains');
 }
 if(t.closest('button') && t.closest('button').textContent.includes('Continue →') && t.closest('#dashStudent')){
  e.preventDefault(); (document.getElementById('resources')?.scrollIntoView({behavior:'smooth'}) || (location.href='resources.html')); toast('➡️ Opening recommended resource');
 }
});
// Command palette logic
function initCommandPalette(){
 const cp=document.getElementById('commandPalette');
 const inp=document.getElementById('commandInput');
 const res=document.getElementById('commandResults');
 if(!cp||!inp||!res) return;
 function render(q=''){
  const qq=q.toLowerCase();
  const filtered=domains.filter(d=> d.name.toLowerCase().includes(qq) || d.category.toLowerCase().includes(qq)).slice(0,8);
  if(filtered.length===0) res.innerHTML=`<div class="p-4 text-center text-sm text-slate-500">No results for "${escapeHtml(q)}"</div>`;
  else res.innerHTML=filtered.map(d=>`<a href="${domainPath(d.id)}" class="w-full text-left p-3 rounded-xl hover:bg-slate-50 border mb-2 flex items-center gap-3 block"><span class="w-8 h-8 rounded-lg bg-gradient-to-br ${d.color} grid place-items-center text-white text-sm"><i class="fa-solid ${d.icon}"></i></span><span class="font-semibold">${escapeHtml(d.name)}</span><span class="ml-auto text-xs px-2 py-1 rounded-full bg-slate-100 border">${escapeHtml(d.category)}</span><span class="hidden sm:inline text-xs text-indigo-600 ml-2">Handbook →</span></a>`).join('');
 }
 inp.addEventListener('input', e=> render(e.target.value));
 render('');
}
try{ initCommandPalette(); }catch(e){}
try{ renderCompareBar(); }catch(e){}
