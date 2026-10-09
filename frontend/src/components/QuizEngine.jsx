import { useState } from 'react'

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
  {q:'When learning new topics:', cat:'learning', opts:['I explore deeply and practice regularly.','I learn with examples and guidance.','I need extra support to understand.','I avoid tough topics whenever possible.']},
]

export default function QuizEngine({onResult}){
  const [step,setStep]=useState(0) // 0 marks, 1..15 quiz
  const [answers,setAnswers]=useState(Array(15).fill(2))
  const [marks,setMarks]=useState({math:85, prog:78, phy:72, eng:80})
  const [loading,setLoading]=useState(false)

  const setAns = (i,v)=> {
    const a=[...answers]; a[i]=v; setAnswers(a)
  }

  const API = import.meta.env.VITE_API_URL || ''
  const compute = async()=>{
    if(marks.math<0||marks.math>100||marks.prog<0||marks.prog>100){ alert('Marks must be 0-100'); return }
    setLoading(true)
    try{
      const url = API ? `${API}/api/predict` : '/api/predict'
      const res = await fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({answers, marks})})
      if(res.ok){
        const data= await res.json()
        onResult(data)
        return
      }
      throw new Error('backend offline')
    }catch(e){
      // weighted fallback 25x17
      const weights={
        'AI': [0.140,0.075,0.103,0.028,0.028,0.028,0.028,0.075,0.028,0.075,0.028,0.028,0.028,0.140,0.103, 0.056,0.056],
        'ML': [0.140,0.075,0.140,0.028,0.028,0.028,0.028,0.028,0.028,0.075,0.028,0.028,0.028,0.103,0.103, 0.056,0.056],
        'Data Science': [0.103,0.075,0.140,0.028,0.028,0.028,0.028,0.028,0.028,0.140,0.028,0.028,0.028,0.103,0.075, 0.056,0.056],
        'Big Data': [0.103,0.028,0.140,0.028,0.103,0.028,0.028,0.028,0.028,0.075,0.028,0.028,0.028,0.075,0.028, 0.056,0.056],
        'Computer Vision': [0.140,0.028,0.103,0.028,0.028,0.028,0.075,0.028,0.028,0.140,0.028,0.028,0.028,0.075,0.028, 0.056,0.056],
        'NLP': [0.103,0.028,0.140,0.028,0.028,0.028,0.028,0.028,0.028,0.075,0.028,0.028,0.140,0.075,0.028, 0.056,0.056],
        'Web Development': [0.028,0.140,0.028,0.028,0.028,0.028,0.140,0.028,0.075,0.075,0.028,0.028,0.075,0.028,0.028, 0.056,0.056],
        'Mobile App Development': [0.028,0.140,0.028,0.028,0.028,0.028,0.075,0.028,0.075,0.075,0.028,0.028,0.028,0.028,0.028, 0.056,0.056],
        'Software Engineering': [0.028,0.140,0.028,0.028,0.028,0.028,0.028,0.028,0.140,0.028,0.028,0.028,0.075,0.140,0.075, 0.056,0.056],
        'Game Development': [0.028,0.103,0.028,0.028,0.028,0.028,0.075,0.028,0.028,0.075,0.140,0.028,0.028,0.028,0.028, 0.056,0.056],
        'HCI': [0.028,0.075,0.028,0.028,0.028,0.028,0.140,0.028,0.075,0.075,0.028,0.028,0.140,0.028,0.028, 0.056,0.056],
        'Cybersecurity': [0.103,0.028,0.028,0.140,0.075,0.028,0.028,0.140,0.028,0.028,0.028,0.028,0.028,0.075,0.028, 0.056,0.056],
        'Cloud Computing': [0.075,0.028,0.028,0.075,0.140,0.075,0.028,0.075,0.075,0.028,0.028,0.028,0.028,0.028,0.028, 0.056,0.056],
        'Computer Networks': [0.028,0.028,0.028,0.103,0.103,0.075,0.028,0.075,0.075,0.028,0.028,0.028,0.028,0.075,0.028, 0.056,0.056],
        'DBMS': [0.075,0.028,0.140,0.028,0.075,0.028,0.028,0.075,0.028,0.103,0.028,0.028,0.028,0.075,0.028, 0.056,0.056],
        'Operating Systems': [0.140,0.075,0.028,0.075,0.028,0.075,0.028,0.140,0.028,0.028,0.028,0.028,0.028,0.075,0.028, 0.056,0.056],
        'Computer Architecture': [0.140,0.075,0.028,0.028,0.028,0.075,0.028,0.140,0.028,0.028,0.028,0.028,0.028,0.075,0.028, 0.056,0.056],
        'DevOps': [0.028,0.075,0.028,0.028,0.140,0.075,0.028,0.075,0.075,0.028,0.028,0.028,0.028,0.075,0.028, 0.056,0.056],
        'Distributed Systems': [0.028,0.028,0.028,0.075,0.103,0.075,0.028,0.075,0.103,0.028,0.028,0.028,0.028,0.075,0.028, 0.056,0.056],
        'IoT': [0.103,0.028,0.028,0.028,0.075,0.140,0.028,0.075,0.075,0.028,0.028,0.028,0.028,0.075,0.028, 0.056,0.056],
        'Blockchain': [0.140,0.028,0.103,0.103,0.028,0.075,0.028,0.075,0.028,0.028,0.028,0.028,0.028,0.075,0.028, 0.056,0.056],
        'Robotics': [0.103,0.028,0.028,0.028,0.028,0.140,0.028,0.075,0.075,0.028,0.028,0.028,0.028,0.140,0.028, 0.056,0.056],
        'AR/VR': [0.028,0.075,0.028,0.028,0.028,0.028,0.075,0.028,0.028,0.075,0.075,0.140,0.028,0.028,0.028, 0.056,0.056],
        'Embedded Systems': [0.103,0.075,0.028,0.028,0.028,0.140,0.028,0.140,0.028,0.028,0.028,0.028,0.028,0.075,0.028, 0.056,0.056],
        'Quantum Computing': [0.140,0.028,0.103,0.028,0.028,0.028,0.028,0.075,0.028,0.028,0.028,0.140,0.028,0.103,0.028, 0.056,0.056],
      }
      const vals=[...answers, marks.math/25, marks.prog/25]
      const scores={}
      for(const d in weights){ let s=0; weights[d].forEach((w,i)=> s+= (vals[i]||2)*w); scores[d]= s*25 }
      let max=Math.max(...Object.values(scores))
      for(const k in scores) scores[k]= Math.min(95, Math.round(scores[k]/max*82+8))
      const sorted=Object.entries(scores).sort((a,b)=>b[1]-a[1])
      onResult({top:sorted[0][0], confidence:sorted[0][1], top3: sorted.slice(0,3).map(([d,s])=>({domain:d,score:s})), explanation: `Weighted fallback: ${sorted[0][0]} optimal`, model:'fallback 15×4'})
    }finally{ setLoading(false)}
  }

  const total=16
  return (
    <div>
      <div className="flex justify-between text-xs font-semibold"><span>Step {step+1} of {total}</span><span>{Math.round((step+1)/total*100)}%</span></div>
      <div className="mt-2 h-2 bg-white rounded-full overflow-hidden border"><div className="h-full bg-indigo-600 transition-all" style={{width:(step+1)/total*100+'%'}}></div></div>

      {step===0 && (
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <label className="bg-white p-4 rounded-2xl border"><span className="text-sm font-semibold">Math Marks *</span><input type="number" min="0" max="100" value={marks.math} onChange={e=> setMarks({...marks, math: +e.target.value})} className="mt-2 w-full px-3 py-2 rounded-xl border" /></label>
          <label className="bg-white p-4 rounded-2xl border"><span className="text-sm font-semibold">Programming Marks *</span><input type="number" min="0" max="100" value={marks.prog} onChange={e=> setMarks({...marks, prog: +e.target.value})} className="mt-2 w-full px-3 py-2 rounded-xl border" /></label>
          <label className="bg-white p-4 rounded-2xl border"><span className="text-sm font-semibold">Physics Marks</span><input type="number" min="0" max="100" value={marks.phy} onChange={e=> setMarks({...marks, phy: +e.target.value})} className="mt-2 w-full px-3 py-2 rounded-xl border" /></label>
          <label className="bg-white p-4 rounded-2xl border"><span className="text-sm font-semibold">English Marks</span><input type="number" min="0" max="100" value={marks.eng} onChange={e=> setMarks({...marks, eng: +e.target.value})} className="mt-2 w-full px-3 py-2 rounded-xl border" /></label>
        </div>
      )}
      {step>=1 && step<=15 && (
        <div className="mt-6">
          <h3 className="font-bold">Q{step}. {quizQs[step-1].q}</h3>
          <p className="text-xs text-slate-500 capitalize">{quizQs[step-1].cat} • Choose one</p>
          <div className="mt-4 grid grid-cols-1 gap-3">
            {quizQs[step-1].opts.map((opt, idx)=>{
              const v = 4-idx
              return (
                <button key={v} onClick={()=> setAns(step-1,v)} className={`text-left p-4 rounded-2xl border-2 flex gap-3 ${answers[step-1]===v?'bg-indigo-600 text-white border-indigo-600':'bg-white dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 hover:border-indigo-200'}`}>
                  <span className={`w-8 h-8 rounded-full border-2 grid place-items-center font-bold text-sm flex-shrink-0 ${answers[step-1]===v?'bg-white text-indigo-600 border-white':'bg-slate-50 dark:bg-slate-700 dark:text-slate-200 border-slate-200'}`}>{['A','B','C','D'][idx]}</span>
                  <span className="text-sm leading-relaxed">{opt}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
      <div className="mt-6 flex justify-between">
        <button onClick={()=> setStep(Math.max(0,step-1))} disabled={step===0} className="px-6 py-3 rounded-xl border bg-white font-semibold disabled:opacity-50">← Previous</button>
        {step<15 ? <button onClick={()=> setStep(step+1)} className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold">Next →</button> : <button onClick={compute} disabled={loading} className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold">{loading?'Predicting…':'Get Recommendation →'}</button>}
      </div>
    </div>
  )
}
