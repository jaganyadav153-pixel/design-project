import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import DomainCard from './components/DomainCard.jsx'
import QuizEngine from './components/QuizEngine.jsx'
import RadarChart from './components/RadarChart.jsx'
import Chatbot from './components/Chatbot.jsx'

const domains = [
  {id:'AI', name:'Artificial Intelligence (AI)', short:'AI', category:'Intelligence & Data', icon:'fa-brain', color:'from-violet-600 to-indigo-600', tag:'Trending 2026', desc:'Build intelligent systems that think & learn.', skills:['Python','Math','Logic','ML Basics'], careers:['AI Engineer (12 LPA)','Data Scientist'], salary:'8-15 LPA'},
  {id:'ML', name:'Machine Learning (ML)', short:'ML', category:'Intelligence & Data', icon:'fa-chart-line', color:'from-cyan-500 to-blue-600', tag:'High Demand', desc:'Algorithms that learn from data.', skills:['Statistics','Python'], careers:['ML Engineer (10 LPA)'], salary:'7-14 LPA'},
  {id:'Data Science', name:'Data Science', short:'DS', category:'Intelligence & Data', icon:'fa-chart-pie', color:'from-fuchsia-600 to-indigo-600', tag:'High Demand', desc:'Extract insights from massive data.', skills:['Python','Stats','SQL'], careers:['Data Scientist (14 LPA)'], salary:'8-18 LPA'},
  {id:'Big Data', name:'Big Data', short:'BD', category:'Intelligence & Data', icon:'fa-server', color:'from-violet-600 to-purple-600', tag:'Enterprise', desc:'Process petabytes of distributed data.', skills:['Hadoop','Spark','NoSQL'], careers:['Big Data Engineer (11 LPA)'], salary:'8-16 LPA'},
  {id:'Computer Vision', name:'Computer Vision', short:'CV', category:'Intelligence & Data', icon:'fa-eye', color:'from-pink-600 to-violet-600', tag:'Trending', desc:'Teach machines to see & interpret images.', skills:['OpenCV','Deep Learning'], careers:['CV Engineer (12 LPA)'], salary:'8-15 LPA'},
  {id:'NLP', name:'Natural Language Processing (NLP)', short:'NLP', category:'Intelligence & Data', icon:'fa-language', color:'from-indigo-600 to-fuchsia-600', tag:'Trending', desc:'Make computers understand language.', skills:['NLP','Transformers'], careers:['NLP Engineer (11 LPA)'], salary:'8-14 LPA'},
  {id:'Web Development', name:'Web Development', short:'WEB', category:'Build & Experience', icon:'fa-code', color:'from-blue-500 to-sky-500', tag:'Evergreen', desc:'Craft modern web experiences.', skills:['HTML','CSS','React'], careers:['Frontend (8 LPA)'], salary:'5-10 LPA'},
  {id:'Mobile App Development', name:'Mobile App Development', short:'MOB', category:'Build & Experience', icon:'fa-mobile-screen-button', color:'from-indigo-500 to-violet-600', tag:'High Demand', desc:'Build Android/iOS apps.', skills:['Flutter','React Native'], careers:['Mobile Engineer (9 LPA)'], salary:'6-12 LPA'},
  {id:'Software Engineering', name:'Software Engineering', short:'SE', category:'Build & Experience', icon:'fa-diagram-project', color:'from-slate-600 to-slate-800', tag:'Core', desc:'Architect scalable software.', skills:['DSA','System Design'], careers:['SDE (10 LPA)'], salary:'7-13 LPA'},
  {id:'Game Development', name:'Game Development', short:'GAME', category:'Build & Experience', icon:'fa-gamepad', color:'from-red-600 to-orange-600', tag:'Creative', desc:'Design immersive games.', skills:['Unity','C#'], careers:['Game Dev (8 LPA)'], salary:'5-11 LPA'},
  {id:'HCI', name:'Human-Computer Interaction (HCI)', short:'HCI', category:'Build & Experience', icon:'fa-hand-pointer', color:'from-teal-600 to-cyan-600', tag:'Design', desc:'Design human-centered tech.', skills:['UX','Figma'], careers:['UX Engineer (9 LPA)'], salary:'6-12 LPA'},
  {id:'Cybersecurity', name:'Cybersecurity', short:'CYB', category:'Core Systems', icon:'fa-shield-halved', color:'from-emerald-500 to-teal-600', tag:'Critical', desc:'Protect systems & data.', skills:['Networking','OS'], careers:['Security Analyst (8 LPA)'], salary:'6-12 LPA'},
  {id:'Cloud Computing', name:'Cloud Computing', short:'CLOUD', category:'Core Systems', icon:'fa-cloud', color:'from-sky-500 to-indigo-500', tag:'Enterprise', desc:'Scale apps on AWS/Azure/GCP.', skills:['Linux','AWS','Docker'], careers:['Cloud Engineer (9 LPA)'], salary:'7-13 LPA'},
  {id:'Computer Networks', name:'Computer Networks', short:'CN', category:'Core Systems', icon:'fa-network-wired', color:'from-cyan-600 to-teal-600', tag:'Core', desc:'Design & secure networks.', skills:['TCP/IP','Routing'], careers:['Network Engineer (7 LPA)'], salary:'6-11 LPA'},
  {id:'DBMS', name:'Database Management', short:'DB', category:'Core Systems', icon:'fa-database', color:'from-orange-600 to-amber-500', tag:'Evergreen', desc:'Design & manage data at scale.', skills:['SQL','NoSQL'], careers:['DBA (7 LPA)'], salary:'6-11 LPA'},
  {id:'Operating Systems', name:'Operating Systems', short:'OS', category:'Core Systems', icon:'fa-desktop', color:'from-slate-800 to-zinc-900', tag:'Core', desc:'Master kernels & memory.', skills:['C','OS Concepts'], careers:['Systems Engineer (7 LPA)'], salary:'6-10 LPA'},
  {id:'Computer Architecture', name:'Computer Architecture', short:'CA', category:'Core Systems', icon:'fa-memory', color:'from-zinc-700 to-neutral-800', tag:'Core', desc:'Design processors & memory.', skills:['COA','Verilog'], careers:['Hardware Engineer (9 LPA)'], salary:'7-12 LPA'},
  {id:'DevOps', name:'DevOps', short:'DEVOPS', category:'Core Systems', icon:'fa-infinity', color:'from-sky-600 to-slate-700', tag:'High Demand', desc:'Automate build & deploy.', skills:['Docker','K8s','CI/CD'], careers:['DevOps Engineer (10 LPA)'], salary:'7-14 LPA'},
  {id:'Distributed Systems', name:'Distributed Systems', short:'DSYS', category:'Core Systems', icon:'fa-share-nodes', color:'from-blue-700 to-slate-700', tag:'Advanced', desc:'Build fault-tolerant distributed apps.', skills:['Consensus','Kafka'], careers:['Distributed Engineer (12 LPA)'], salary:'8-15 LPA'},
  {id:'IoT', name:'Internet of Things (IoT)', short:'IOT', category:'Frontier Tech', icon:'fa-tower-broadcast', color:'from-lime-500 to-emerald-600', tag:'Emerging', desc:'Connect devices to cloud.', skills:['Embedded C','Sensors'], careers:['IoT Engineer (8 LPA)'], salary:'6-12 LPA'},
  {id:'Blockchain', name:'Blockchain', short:'BC', category:'Frontier Tech', icon:'fa-cubes', color:'from-amber-500 to-orange-600', tag:'Emerging', desc:'Decentralized ledgers & Web3.', skills:['Solidity','Crypto'], careers:['Blockchain Dev (10 LPA)'], salary:'7-14 LPA'},
  {id:'Robotics', name:'Robotics', short:'ROB', category:'Frontier Tech', icon:'fa-robot', color:'from-orange-600 to-red-600', tag:'Emerging', desc:'Build intelligent robots.', skills:['ROS','Embedded'], careers:['Robotics Engineer (9 LPA)'], salary:'7-12 LPA'},
  {id:'AR/VR', name:'Augmented Reality / Virtual Reality (AR/VR)', short:'XR', category:'Frontier Tech', icon:'fa-vr-cardboard', color:'from-fuchsia-500 to-pink-500', tag:'Emerging', desc:'Create immersive AR/VR.', skills:['Unity','3D'], careers:['AR/VR Dev (9 LPA)'], salary:'7-13 LPA'},
  {id:'Embedded Systems', name:'Embedded Systems', short:'ES', category:'Frontier Tech', icon:'fa-microchip', color:'from-amber-600 to-yellow-500', tag:'Core HW', desc:'Program microcontrollers.', skills:['C','ARM','RTOS'], careers:['Embedded Engineer (8 LPA)'], salary:'6-11 LPA'},
  {id:'Quantum Computing', name:'Quantum Computing', short:'QC', category:'Frontier Tech', icon:'fa-atom', color:'from-purple-700 to-indigo-700', tag:'Future', desc:'Next-gen quantum compute.', skills:['Qiskit','QM'], careers:['Quantum Dev (15 LPA)'], salary:'10-20 LPA'},
]

export default function App(){
  const { t, i18n } = useTranslation()
  const [category, setCategory]=useState('All')
  const [search, setSearch]=useState('')
  const [result, setResult]=useState(null)
  const setLang = (lng)=> {
    i18n.changeLanguage(lng)
    try {
      localStorage.setItem('lang', lng)
      document.documentElement.lang = lng
      document.documentElement.dir = lng==='ur' ? 'rtl' : 'ltr'
    } catch {}
  }
  const filtered = domains.filter(d=> (category==='All'|| d.category===category || d.id===category) && (d.name.toLowerCase().includes(search.toLowerCase())|| d.desc.toLowerCase().includes(search.toLowerCase()) || d.category.toLowerCase().includes(search.toLowerCase())))

  useEffect(()=>{ document.title='GuidanceAI — Atlas 25 • CSE Domain Recommender' },[])

  return (
    <div>
      <nav className="sticky top-0 z-50 glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 grid place-items-center text-white font-extrabold">G</div>
            <span className="font-display font-bold">GuidanceAI</span>
            <span className="hidden md:inline-flex ml-2 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-200">Atlas 25 • 89%</span>
          </div>
          <select value={i18n.language} onChange={e=> setLang(e.target.value)} aria-label="Language" className="px-2 py-2 rounded-lg border text-xs bg-white">
            <option value="en">English</option><option value="te">తెలుగు</option><option value="hi">हिन्दी</option><option value="ta">தமிழ்</option><option value="kn">ಕನ್ನಡ</option><option value="ml">മലയാളം</option><option value="mr">मराठी</option><option value="bn">বাংলা</option><option value="gu">ગુજરાતી</option><option value="ur">اردو</option>
          </select>
          <a href="#quiz" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold">{t('hero_cta_quiz')}</a>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-sm border border-white/20"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Trusted by 750+ students • 25 Domains • 89% • Vault Ready</div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight">Confused between 25 CSE domains? <span className="text-cyan-200">Your AI Counsellor is here.</span></h1>
            <p className="mt-4 text-white/90">Personalized Top-3 across 25 tracks using RandomForest + PCA • 4-year roadmap + vault + 10 languages.</p>
            <div className="mt-6 flex gap-3">
              <a href="#quiz" className="px-7 py-3.5 rounded-xl bg-white text-indigo-700 font-bold">Take 3-Min Quiz →</a>
              <a href="#explorer" className="px-7 py-3.5 rounded-xl bg-slate-900 text-white font-semibold">Explore Atlas</a>
            </div>
          </div>
          <div className="bg-white text-slate-800 rounded-3xl p-6 shadow-2xl">
            <div className="flex justify-between"><h3 className="font-bold">Live Prediction Preview</h3><span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border">RandomForest 89%</span></div>
            <div className="mt-4"><RadarChart /></div>
            <p className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs"><b>Why AI?</b> High logic (5/5) + math 92 + vault ready.</p>
          </div>
        </div>
      </section>

      <section id="explorer" className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold">Domain Atlas — 25 Tracks</h2>
            <p className="text-slate-500 text-sm">Grouped by Intelligence, Build, Core & Frontier • Search + Vault per domain</p>
          </div>
          <div className="flex gap-2">
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search AI, Quantum..." className="px-4 py-2.5 rounded-xl border w-64" aria-label="Search"/>
            <select value={category} onChange={e=>setCategory(e.target.value)} className="px-4 py-2.5 rounded-xl border" aria-label="Filter">
              <option value="All">All 25</option>
              <option value="Intelligence & Data">Intelligence & Data (6)</option>
              <option value="Build & Experience">Build & Experience (5)</option>
              <option value="Core Systems">Core Systems (8)</option>
              <option value="Frontier Tech">Frontier Tech (6)</option>
            </select>
          </div>
        </div>
        <div className="mt-4 text-sm text-slate-500">Showing {filtered.length} of {domains.length} tracks • Each card has Vault (4 slots) — add your files later</div>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map(d=> <DomainCard key={d.id} domain={d} />)}
          {filtered.length===0 && <div className="col-span-full text-center py-10 text-slate-500">No tracks found.</div>}
        </div>
      </section>

      <section id="quiz" className="bg-white border-y py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center">Find Your Perfect Domain (25-way)</h2>
          <p className="text-center text-slate-500 mt-2">Quiz + Marks → AI ensemble → Top-3 across 25 with vault suggestion.</p>
          <div className="mt-6 bg-slate-50 rounded-3xl p-6 border">
            <QuizEngine onResult={setResult} />
            {result && (
              <div className="mt-6 p-6 rounded-3xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white">
                <h3 className="font-extrabold text-2xl">{result.top} — {result.confidence}% Match</h3>
                <p className="text-white/90 mt-2">{result.explanation} Vault ready for {result.top}.</p>
                <div className="mt-4 grid sm:grid-cols-3 gap-3">
                  {result.top3.map((t,i)=> (
                    <div key={t.domain} className={`p-4 rounded-2xl ${i===0?'bg-white text-slate-900':'bg-white/15 border border-white/20'}`}>
                      <div className="text-xs opacity-80">#{i+1}</div>
                      <div className="font-bold">{t.domain}</div>
                      <div className="text-xl font-extrabold">{t.score}%</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div><div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-indigo-600 grid place-items-center font-extrabold">G</div><span className="font-bold">GuidanceAI Atlas 25</span></div><p className="mt-3 text-sm text-white/60">Virtual counsellor • Django + RandomForest 89% • 25 tracks • Vault • 750 (30×25)</p></div>
          <div><div className="font-bold">Explore</div><ul className="mt-3 space-y-2 text-sm text-white/70"><li>Atlas 25 Tracks</li><li>Quiz 25-way</li><li>Roadmaps + Vault</li><li>Compare 3</li></ul></div>
          <div><div className="font-bold">For Users</div><ul className="mt-3 space-y-2 text-sm text-white/70"><li>Student + Vault</li><li>Parent Voice Report</li><li>Teacher Analytics (25)</li></ul></div>
          <div><div className="font-bold">Tech</div><ul className="mt-3 space-y-2 text-sm text-white/70"><li>RandomForest 89% • PCA 11→10 • 25-way</li><li>Dataset: 750 (30×25) • Atlas</li><li>Vault: /vault/ • Offline</li></ul></div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/50 text-center">© 2026 GuidanceAI Atlas 25 • Vault ready</div>
      </footer>

      <Chatbot />
    </div>
  )
}
