export default function DomainCard({domain}){
  const open = ()=> {
    const ev = new CustomEvent('openDomain', {detail: domain.id})
    window.dispatchEvent(ev)
    // fallback: dispatch vault-aware modal if vanilla JS present
    if(window.openDomain) window.openDomain(domain.id)
    else document.getElementById('quiz')?.scrollIntoView({behavior:'smooth'})
  }
  const toggle = (e)=>{
    e.stopPropagation();
    if(window.toggleCompare) window.toggleCompare(domain.id);
  }
  const vc = (()=>{ try{ const v=localStorage.getItem('vault_'+domain.id); return v? JSON.parse(v).length:0 }catch{ return 0}})();
  return (
    <div onClick={open} role="button" tabIndex={0} onKeyDown={e=> e.key==='Enter' && open()} className="p-5 rounded-3xl bg-white dark:bg-slate-800 border dark:border-slate-700 card-hover cursor-pointer flex flex-col group relative overflow-hidden text-slate-800 dark:text-slate-100">
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${domain.color}`}></div>
      <div className="flex justify-between items-start">
        <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${domain.color} grid place-items-center text-white text-lg`}><i className={`fa-solid ${domain.icon}`} aria-hidden="true"></i></div>
        <span className="px-2 py-1 rounded-full text-[11px] font-bold border bg-slate-50 dark:bg-slate-700 dark:text-slate-200">{domain.tag}</span>
      </div>
      <h3 className="font-bold mt-3 leading-tight text-[15px] text-slate-900 dark:text-white">{domain.name}</h3>
      <div className="mt-1 flex gap-1.5 flex-wrap"><span className="px-2 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 text-[11px] border dark:border-indigo-700">{domain.category}</span><span className="px-2 py-1 rounded-full bg-slate-50 dark:bg-slate-700 dark:text-slate-200 text-[11px] border dark:border-slate-600">{domain.salary}</span></div>
      <p className="mt-2 text-[13px] text-slate-500 dark:text-slate-300 line-clamp-2">{domain.desc}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">{domain.skills.slice(0,3).map(s=> <span key={s} className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 dark:text-slate-200 text-xs">{s}</span>)}{domain.skills.length>3 && <span className="px-2 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 text-xs border">+{domain.skills.length-3}</span>}</div>
      <div className="mt-3 text-xs text-slate-500 dark:text-slate-400 flex justify-between"><span>{domain.category}</span><span>Vault {vc} files</span></div>
      <div className="mt-4 flex gap-2">
        <span className="flex-1 py-2.5 rounded-xl bg-slate-900 text-white text-center text-sm font-semibold">View →</span>
        <button onClick={toggle} className="px-3 py-2.5 rounded-xl border text-xs font-semibold hover:bg-slate-50">Compare</button>
      </div>
    </div>
  )
}
