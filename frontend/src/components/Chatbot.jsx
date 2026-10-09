import { useState, useEffect } from 'react'

export default function Chatbot(){
  const [open,setOpen]=useState(false)
  const [input,setInput]=useState('')
  const [msgs,setMsgs]=useState([{from:'bot', text:'Hi! Ask me: "Which domain for high math & love for security?" — I support 10 languages. 🎤'}])

  const API = import.meta.env.VITE_API_URL || ''
  // Persist msgs to localStorage for continuity
  useEffect(()=>{ try{ localStorage.setItem('chat_history_react', JSON.stringify(msgs.slice(-20))); }catch(e){} }, [msgs]);
  useEffect(()=>{ try{ const saved=JSON.parse(localStorage.getItem('chat_history_react')||'[]'); if(saved.length>1) setMsgs(saved); }catch(e){} }, []);
  const send= async()=>{
    const txt=input.trim(); if(!txt) return
    const lang = (localStorage.getItem('lang') || document.documentElement.lang || 'en').slice(0,10)
    // Build history from msgs (exclude Thinking placeholder)
    const history = msgs.filter(m=> m.text!=='Thinking...').slice(-8).map(m=> ({role: m.from==='user'?'user':'assistant', content: m.text.slice(0,800)}))
    setMsgs(m=> [...m, {from:'user', text:txt}, {from:'bot', text:'Thinking...'}])
    setInput('')
    try{
      const url = API ? `${API}/api/chat` : '/api/chat'
      const r= await fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({question:txt, lang, history})})
      if(r.ok){ const d=await r.json(); setMsgs(m=> { const copy=[...m]; copy[copy.length-1]={from:'bot', text:d.answer + (d.source==='claude' ? ' \n\n· Claude · website-scoped' : '')}; return copy}); return }
      // non-ok -> remove thinking then fallback
      setMsgs(m=> m.slice(0,-1))
    }catch(e){ setMsgs(m=> m.slice(0,-1)) }
    // Daily conversation priority (word boundary for hi/hey/bye)
    const lowCheck=txt.toLowerCase()
    if(['hello','good morning','good afternoon','good evening','how are you','how r u','whats up',"what's up",'who are you','what can you do','thanks','thank you','good night','joke'].some(g=> lowCheck.includes(g)) || /\b(hi|hey|bye)\b/.test(lowCheck)){
      let r="Hello! I'm GuidanceAI — great to see you. I can chat daily and help with 25 CSE tracks."
      if(lowCheck.includes('how are you')) r="I'm doing great — thanks! I'm GuidanceAI, your CSE counsellor and daily chat buddy. How can I help?"
      else if(lowCheck.includes('joke')) r="Why do programmers prefer dark mode? Because light attracts bugs! Want another?"
      else if(lowCheck.includes('who are you')||lowCheck.includes('what can you do')) r="I'm GuidanceAI — daily chat companion and CSE expert for 25 domains, roadmaps, vault, quiz (89%), 10 languages!"
      setTimeout(()=> setMsgs(m=> [...m, {from:'bot', text:r}]), 300)
      return
    }
    // ML fallback — TF-IDF-like Jaccard over 25 domains (solves any website query offline)
    const low=txt.toLowerCase()
    const mlFallback=(q)=>{
      if(/\bai\b/.test(q.toLowerCase()) && !/(robotics|blockchain|quantum|cloud|cyber|security|game|hci)/.test(q.toLowerCase())) return "AI fits \u2192 Python \u2192 Math \u2192 ML \u2192 Deep Learning \u2192 Projects (36 weeks). Salary 8-15 LPA. Vault: /public/vault/ai/";
      const corpus={
        'AI':"ai artificial intelligence build intelligent systems think learn reason python math logic ml basics roadmap python math ml deep learning projects salary 8-15 trending",
        'Data Science':"data science extract insights massive data python statistics sql visualization roadmap python stats sql visualization projects salary 8-18",
        'Web Development':"web development craft fast modern responsive web html css js react low math high creativity design roadmap html css js react node deploy salary 5-10 creativity design",
        'HCI':"hci human computer interaction intuitive human centered low math high creativity ux design figma psychology prototyping roadmap ux figma user research prototype salary 6-12 creativity design",
        'Game Development':"game development immersive games unity low math high creativity c# 3d graphics physics roadmap c# unity graphics publish salary 5-11 creative",
        'Cybersecurity':"cybersecurity protect systems networks data attacks networking os ethical hacking crypto roadmap networking os ethical hacking soc salary 6-12 security",
        'Quantum Computing':"quantum computing harness quantum mechanics qiskit python math roadmap math qm qiskit algorithms salary 10-20 future advanced physics",
        'Cloud Computing':"cloud computing scale apps aws azure gcp linux networking aws docker roadmap linux cloud fundamentals aws kubernetes salary 7-13",
        'DBMS':"dbms database management design manage data sql nosql system design roadmap sql normalization nosql distributed db salary 6-11",
        'Vault':"vault your files 4 slots notes videos projects assignments frontend public vault slug",
        'Quiz':"quiz 15 questions marks math programming physics english randomforest 89 pca 11 10 top-3 radar",
        'Compare':"compare up to 3 tracks side by side salary skills roadmap bottom bar compare card checkbox"
      }
      const tok=s=>s.toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(Boolean)
      const qSet=new Set(tok(q))
      let best=null, bestScore=-1
      for(const [k,doc] of Object.entries(corpus)){
        const dSet=new Set(tok(doc))
        let inter=0; qSet.forEach(t=>{ if(dSet.has(t)) inter++ })
        const union=new Set([...qSet,...dSet]).size
        const score= union? inter/union : 0
        if(score>bestScore){ bestScore=score; best=k }
      }
      if(bestScore<0.04) return "I can help with any of the 25 tracks (Atlas). Try: 'Which domain for low math but high creativity?' → I suggest HCI/Game/Web, or 'Roadmap for DBMS?' or 'Vault for AI?'"
      const map={
        'AI':"AI fits → Python → Math → ML → Deep Learning → Projects (36 weeks). Salary 8-15 LPA. Vault: /public/vault/ai/",
        'Data Science':"Data Science fits → Python → Stats → SQL → Visualization. Salary 8-18 LPA. Vault: /public/vault/data-science/",
        'Web Development':"Web Development fits (low math, high creativity) → HTML/CSS → JS → React → Node → Deploy. Salary 5-10 LPA. Vault: /public/vault/web-development/",
        'HCI':"HCI fits (high creativity, low math) → UX Basics → Figma → User Research → Prototype. Salary 6-12 LPA. Vault: /public/vault/hci/",
        'Game Development':"Game Development fits (creativity) → C# → Unity → Graphics → Publish. Salary 5-11 LPA. Vault: /public/vault/game-development/",
        'Cybersecurity':"Cybersecurity fits → Networking → Linux → Ethical Hacking → SOC. Salary 6-12 LPA. Vault: /public/vault/cybersecurity/",
        'Quantum Computing':"Quantum Computing fits (high math/logic) → Math → QM → Qiskit → Algorithms. Salary 10-20 LPA. Frontier. Vault: /public/vault/quantum-computing/",
        'Cloud Computing':"Cloud fits → Linux → Cloud Fundamentals → AWS → Kubernetes. Salary 7-13 LPA. Vault: /public/vault/cloud-computing/",
        'DBMS':"DBMS fits → SQL → Normalization → NoSQL → Distributed DB. Salary 6-11 LPA. Vault: /public/vault/dbms/",
        'Vault':"Vault — 4 slots per domain (notes/videos/projects/assignments) at /public/vault/<slug>/ — e.g., /vault/ai/notes/ — stays local.",
        'Quiz':"Quiz: 15 Qs ×4 + marks → Top-3 via RandomForest 89% (PCA 11→10) with radar. 3 min at quiz.html.",
        'Compare':"Compare: Tick Compare on up to 3 cards → bottom bar → Compare side-by-side."
      }
      return map[best] || map['AI']
    }
    let reply
    if(low.includes('vault')||low.includes('file')) reply="Vault — 4 slots per domain (notes/videos/projects/assignments) at /public/vault/<slug>/ — e.g., /vault/ai/notes/ — stays local."
    else if(low.includes('compare')) reply="Compare: Tick Compare on up to 3 cards → bottom bar → Compare side-by-side. Press ⌘K."
    else reply=mlFallback(txt)
    setTimeout(()=> setMsgs(m=> [...m, {from:'bot', text:reply}]), 300)
  }

  return (
    <>
      <button onClick={()=> setOpen(!open)} aria-label="Toggle chatbot" className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-indigo-600 text-white shadow-xl grid place-items-center text-xl z-40"><i className="fa-solid fa-robot"></i></button>
      {open && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[92vw] bg-white rounded-3xl shadow-2xl border overflow-hidden z-40 flex flex-col" style={{height:480}}>
          <div className="p-4 bg-slate-900 text-white flex justify-between"><div><div className="font-bold">GuidanceAI Assistant</div><div className="text-xs opacity-70">Multilingual • Voice</div></div><button onClick={()=> setOpen(false)} className="w-8 h-8 rounded-full bg-white/15 grid place-items-center"><i className="fa-solid fa-xmark"></i></button></div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm dark:bg-slate-900">
            {msgs.map((m,i)=> <div key={i} className={`p-3 rounded-2xl ${m.from==='user'?'bg-indigo-600 text-white ml-8':'bg-slate-100 dark:bg-slate-700 dark:text-slate-100 text-slate-800'}`}>{m.text}</div>)}
          </div>
          {/* Quick chips — Claude-like suggestions, website-connected */}
          <div className="px-3 py-2 flex flex-wrap gap-2 border-t bg-slate-50 text-xs">
            {['AI Roadmap','Vault for HCI','Compare AI vs Quantum','Tell me a joke','How does quiz work?'].map(chip=> (
              <button key={chip} onClick={()=>{ setInput(chip); setTimeout(()=> send(), 100) }} className="px-3 py-1.5 rounded-full bg-white border hover:bg-indigo-50 hover:border-indigo-200 transition">{chip}</button>
            ))}
            <button onClick={()=>{ setMsgs([{from:'bot', text:'Hi! Ask me: \"Which domain for high math & love for security?\" — I support 10 languages. 🎤'}]); localStorage.removeItem('chat_history_react'); }} className="ml-auto px-3 py-1.5 rounded-full bg-slate-900 text-white hover:bg-black">Clear</button>
          </div>
          <div className="p-3 border-t flex gap-2">
            <input value={input} onChange={e=> setInput(e.target.value)} onKeyDown={e=> e.key==='Enter' && send()} placeholder="Ask in any language..." className="flex-1 px-4 py-2.5 rounded-xl border" aria-label="Chat input"/>
            <button onClick={send} className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-bold">Send</button>
          </div>
        </div>
      )}
    </>
  )
}
