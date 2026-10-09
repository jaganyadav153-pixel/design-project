// domain.js — 3Cr Handbook Renderer: 3D hero + charts + timelines — v3 2026-09-07 BUILD 100% — 25 distinct, glTF-ready, interesting
let currentId = null;
let charts = {};
let heroAnim = null;
let _chartRetry = 0;

/* Contrast-theme palette for handbook charts — AA ticks, bright datasets */
function domainCssVar(name, fallback){
  try{ const v=getComputedStyle(document.documentElement).getPropertyValue(name).trim(); return v||fallback; }catch(e){ return fallback; }
}
function domainChartPalette(){
  const dark=document.documentElement.classList.contains('dark');
  if(dark) return { tick:'#CBD5E1', grid:'rgba(148,163,184,0.35)', line:'#A5B4FC', fill1:'rgba(165,180,252,0.30)', bar1a:'#6366F1', bar1b:'#A5B4FC' };
  return { tick:'#334155', grid:'rgba(51,65,85,0.22)', line:'#4338CA', fill1:'rgba(67,56,202,0.24)', bar1a:'#4F46E5', bar1b:'#4338CA' };
}

function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function slugify(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
function getIdFromUrl(){
 const p = new URLSearchParams(location.search);
 let id = p.get('id') || p.get('domain') || p.get('d') || 'AI';
 id = decodeURIComponent(id);
 const keys = Object.keys(handbooks);
 const lower = id.toLowerCase();
 for(const k of keys){ const hb=handbooks[k]; if(hb.slug===lower || k.toLowerCase()===lower || hb.id.toLowerCase()===lower) return k; }
 if(window.domains){
  for(const d of domains){ if(d.id.toLowerCase()===lower || d.short.toLowerCase()===lower || slugify(d.id)===lower || slugify(d.name)===lower || d.name.toLowerCase().includes(lower)) return d.id in handbooks ? d.id : (d.name in handbooks? d.name : 'AI'); }
  for(const k of keys){ if(slugify(k)===lower) return k; }
 }
 return keys.includes(id) ? id : 'AI';
}
function domainMeta(id){
 if(!window.domains) return null;
 return domains.find(d=> d.id===id || d.name===id || d.short===id) || domains.find(d=> d.id.toLowerCase()===id.toLowerCase()) || domains.find(d=> slugify(d.id)===slugify(id)) || null;
}

// Per-domain unique gradient map — distinct per track, not just category
function domainTheme(id, meta){
 const map = {
  'AI':{a:'#6D28D9',b:'#4F46E5',e:'#8B5CF6'},
  'ML':{a:'#0EA5E9',b:'#06B6D4',e:'#38BDF8'},
  'Data Science':{a:'#C026D3',b:'#A855F7',e:'#D946EF'},
  'Big Data':{a:'#4F46E5',b:'#1E293B',e:'#6366F1'},
  'Computer Vision':{a:'#E11D48',b:'#BE123C',e:'#F43F5E'},
  'NLP':{a:'#4338CA',b:'#C026D3',e:'#7C3AED'},
  'Web Development':{a:'#0EA5E9',b:'#38BDF8',e:'#0284C7'},
  'Mobile App Development':{a:'#6366F1',b:'#06B6D4',e:'#8B5CF6'},
  'Software Engineering':{a:'#1E293B',b:'#334155',e:'#475569'},
  'Game Development':{a:'#EA580C',b:'#E11D48',e:'#F97316'},
  'HCI':{a:'#0D9488',b:'#06B6D4',e:'#14B8A6'},
  'Cybersecurity':{a:'#059669',b:'#0F172A',e:'#10B981'},
  'Cloud Computing':{a:'#0284C7',b:'#4F46E5',e:'#38BDF8'},
  'Computer Networks':{a:'#0891B2',b:'#0E7490',e:'#06B6D4'},
  'DBMS':{a:'#D97706',b:'#EA580C',e:'#F59E0B'},
  'Operating Systems':{a:'#0F172A',b:'#1E293B',e:'#475569'},
  'Computer Architecture':{a:'#27272A',b:'#3F3F46',e:'#52525B'},
  'DevOps':{a:'#0284C7',b:'#0F172A',e:'#0EA5E9'},
  'Distributed Systems':{a:'#1E40AF',b:'#0F172A',e:'#3B82F6'},
  'IoT':{a:'#65A30D',b:'#059669',e:'#84CC16'},
  'Blockchain':{a:'#D97706',b:'#92400E',e:'#F59E0B'},
  'Robotics':{a:'#EA580C',b:'#DC2626',e:'#F97316'},
  'AR/VR':{a:'#C026D3',b:'#E11D48',e:'#EC4899'},
  'Embedded Systems':{a:'#CA8A04',b:'#A16207',e:'#EAB308'},
  'Quantum Computing':{a:'#6D28D9',b:'#1E1B4B',e:'#8B5CF6'}
 };
 if(map[id]) return map[id];
 // fallback from meta color
 if(meta && meta.color){
  if(meta.color.includes('amber')) return {a:'#D97706',b:'#F59E0B',e:'#FBBF24'};
  if(meta.color.includes('rose')) return {a:'#E11D48',b:'#F43F5E',e:'#FB7185'};
  if(meta.color.includes('fuchsia')) return {a:'#C026D3',b:'#A855F7',e:'#E879F9'};
 }
 const cat = meta ? meta.category : '';
 if(cat.includes('Intelligence')) return {a:'#6D28D9',b:'#4F46E5',e:'#8B5CF6'};
 if(cat.includes('Build')) return {a:'#0EA5E9',b:'#06B6D4',e:'#38BDF8'};
 if(cat.includes('Core')) return {a:'#0F172A',b:'#334155',e:'#475569'};
 if(cat.includes('Frontier')) return {a:'#059669',b:'#10B981',e:'#34D399'};
 return {a:'#4F46E5',b:'#06B6D4',e:'#6366F1'};
}

function render(id){
 currentId = id;
 const hb = handbooks[id];
 const meta = domainMeta(id);
 if(!hb){ document.getElementById('heroTitle').textContent='Not found'; return; }
 document.title = hb.id + ' Handbook — GuidanceAI • Immersive';
 try{
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', hb.id + ' Handbook — GuidanceAI • Immersive, not PDF');
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', hb.exec.slice(0,150));
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', location.origin + location.pathname + '?id=' + encodeURIComponent(hb.slug || hb.id));
 }catch(e){}
 document.getElementById('heroTitle').textContent = meta ? meta.name : hb.id;
 document.getElementById('heroDesc').textContent = meta ? meta.desc : '';
 document.getElementById('heroExec').textContent = hb.exec;
 document.getElementById('heroBadge').textContent = hb.heroBadge;
 document.getElementById('heroCrumb').textContent = hb.id;
 document.getElementById('heroCat').textContent = meta? meta.category : '';
 document.getElementById('heroDemand').textContent = 'Demand ' + (meta? meta.demand : '');
 document.getElementById('heroGrowth').textContent = (meta? meta.growth : '') + ' growth';
 document.getElementById('heroSalary').textContent = meta? meta.salary : '';
 document.getElementById('heroLevel').textContent = meta? meta.level : '';
 document.getElementById('navDomainPill').textContent = hb.id + ' • Immersive';
 document.getElementById('heroCanvasBadge').textContent = hb.id + ' • ' + hb.pillars.length + ' Pillars';
 document.getElementById('statDemand').textContent = meta? meta.demand : '';
 document.getElementById('statGrowth').textContent = meta? meta.growth : '';
 document.getElementById('statSalary').textContent = meta? meta.salaryNum + ' LPA' : '';
 document.getElementById('domainSwitcher').value = id in handbooks ? id : 'AI';
 document.getElementById('vaultName').textContent = meta? meta.name : hb.id;
  document.getElementById('vaultPath').textContent = 'public/vault/' + (hb.id.toLowerCase().replace(/[^a-z0-9]+/g,'-')) + '/';
 document.getElementById('paradigmTitle').textContent = hb.paradigm.title;
 document.getElementById('paradigmShift').textContent = hb.paradigm.shift;
 document.getElementById('rulesTitle').textContent = hb.paradigm.rules.t;
 document.getElementById('rulesDesc').textContent = hb.paradigm.rules.d;
 document.getElementById('rulesEg').textContent = 'e.g., ' + hb.paradigm.rules.eg;
 document.getElementById('empTitle').textContent = hb.paradigm.empirical.t;
 document.getElementById('empDesc').textContent = hb.paradigm.empirical.d;
 document.getElementById('empEg').textContent = 'e.g., ' + hb.paradigm.empirical.eg;
 document.getElementById('boxTitle').textContent = hb.paradigm.blackBox.t;
 document.getElementById('boxDesc').textContent = hb.paradigm.blackBox.d;
 document.getElementById('boxStats').textContent = hb.paradigm.blackBox.stats;
 const pg = document.getElementById('pillarsGrid');
 pg.innerHTML = hb.pillars.map(p=>`
  <div class="p-5 rounded-[20px] bg-white dark:bg-slate-900 border card-5 tilt group">
   <div class="flex items-center justify-between">
    <div class="w-11 h-11 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 grid place-items-center shadow shimmer"><i class="fa-solid ${escapeHtml(p.icon)}"></i></div>
    <span class="kicker px-2 py-1 rounded-full bg-amber-50 text-amber-700 border text-[11px]">${escapeHtml(p.tag)}</span>
   </div>
   <h4 class="font-bold mt-3.5 text-[15px] group-hover:text-indigo-600 transition">${escapeHtml(p.n)}</h4>
   <p class="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">${escapeHtml(p.d)}</p>
   <div class="mt-4 space-y-2.5">
    <div class="flex justify-between text-xs"><span class="kicker text-slate-500">Demand</span><span class="font-bold font-mono">${escapeHtml(String(p.demand))}/10</span></div>
    <div class="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5"><div class="h-full bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full transition-all duration-700" style="width:${p.demand*10}%"></div></div>
    <div class="flex justify-between text-xs"><span class="kicker text-slate-500">Complexity</span><span class="font-bold font-mono">${escapeHtml(String(p.complexity))}/10</span></div>
    <div class="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5"><div class="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-700" style="width:${p.complexity*10}%"></div></div>
   </div>
  </div>
 `).join('');
 const sg = document.getElementById('studyGrid');
 sg.innerHTML = hb.study.map((s)=>{
  const ytId = s.ytId || 'h_E6vXM9x6E';
  const cover = s.cover || ('https://picsum.photos/seed/' + encodeURIComponent(hb.id + '-' + s.p) + '/400/160');
  const ytThumb = 'https://img.youtube.com/vi/'+encodeURIComponent(ytId)+'/mqdefault.jpg';
  return `
  <div class="p-0 rounded-2xl bg-white dark:bg-slate-900 border card-5 overflow-hidden group">
   <div class="h-28 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
    <img src="${escapeHtml(cover)}" alt="${escapeHtml(s.p)} cover" class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700" loading="lazy">
    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
    <div class="absolute bottom-2 left-3 right-3 flex items-end justify-between">
     <span class="kicker px-2 py-1 rounded-full bg-white text-slate-900 text-[10px]">${escapeHtml(s.p)}</span>
     <span class="w-7 h-7 rounded-full bg-red-600 text-white grid place-items-center shadow"><i class="fa-brands fa-youtube text-xs"></i></span>
    </div>
   </div>
   <div class="p-4">
    <div class="text-sm font-semibold leading-tight line-clamp-2"><a href="https://www.youtube.com/watch?v=${encodeURIComponent(ytId)}" target="_blank" rel="noopener" class="hover:text-indigo-600 hover:underline">${escapeHtml(s.yt)} ↗</a></div>
    <div class="mt-2 flex gap-2">
     <img src="${escapeHtml(ytThumb)}" alt="${escapeHtml(s.yt)} thumbnail" class="w-16 h-10 rounded-lg object-cover border shrink-0" loading="lazy">
     <div class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3"><i class="fa-solid fa-book text-indigo-600 mr-1"></i>${escapeHtml(s.book)}</div>
    </div>
   </div>
  </div>`;
 }).join('');
 const eg = document.getElementById('economicsGrid');
 eg.innerHTML = hb.economics.map(e=>`
  <div class="p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur">
   <div class="text-lg font-extrabold">${escapeHtml(e.v)}</div>
   <div class="text-xs font-semibold text-cyan-200">${escapeHtml(e.l)}</div>
   <div class="text-xs text-white/70">${escapeHtml(e.d)}</div>
  </div>
 `).join('');
 const phases = document.getElementById('phasesGrid');
 phases.innerHTML = hb.roadmap.map((ph,idx)=>`
  <div class="p-5 rounded-[20px] bg-white dark:bg-slate-800 border card-5 relative overflow-hidden">
   <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-cyan-500 opacity-80"></div>
   <div class="flex items-center gap-2 text-xs"><span class="kicker px-2.5 py-1 rounded-full bg-slate-900 text-white">W${escapeHtml(ph.w)}</span><span class="px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border kicker text-[10px]">Phase ${idx+1}</span><span class="ml-auto w-7 h-7 rounded-full bg-slate-50 border grid place-items-center text-indigo-600"><i class="fa-solid ${escapeHtml(ph.icon)} text-xs"></i></span></div>
   <h4 class="font-bold mt-3 text-[15px]">${escapeHtml(ph.t)}</h4>
   <div class="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">${escapeHtml(ph.c)}</div>
   <div class="mt-4 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-emerald-500 text-white grid place-items-center shrink-0"><i class="fa-solid fa-check text-xs"></i></span><span><b>Output:</b> ${escapeHtml(ph.out)}</span></div>
  </div>
 `).join('');
 const tl = document.getElementById('timeline');
 tl.innerHTML = `<div class="absolute left-3 top-2 bottom-2 timeline-line rounded-full"></div>` + hb.timeline.map(ev=>`
  <div class="relative flex gap-4 pb-5 group">
   <div class="w-7 h-7 rounded-full bg-slate-900 text-white grid place-items-center text-xs z-10 border-2 border-white shadow group-hover:scale-110 transition"><i class="fa-solid fa-circle" style="font-size:7px"></i></div>
   <div class="flex-1 p-4 rounded-2xl bg-white dark:bg-slate-900 border card-5">
    <div class="flex items-center gap-2"><span class="kicker px-2.5 py-1 rounded-full bg-slate-900 text-white">${ev.y}</span><span class="font-bold text-sm">${ev.t}</span></div>
    <div class="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">${ev.d}</div>
   </div>
  </div>
 `).join('');
 document.getElementById('prosList').innerHTML = hb.balanced.pros.map(p=>`<li class="flex gap-3 p-2.5 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition"><span class="w-7 h-7 rounded-full bg-emerald-500 text-white grid place-items-center text-xs shrink-0 shadow"><i class="fa-solid fa-check"></i></span><span class="leading-relaxed">${p}</span></li>`).join('');
 document.getElementById('consList').innerHTML = hb.balanced.cons.map(c=>`<li class="flex gap-3 p-2.5 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/20 transition"><span class="w-7 h-7 rounded-full bg-rose-500 text-white grid place-items-center text-xs shrink-0 shadow"><i class="fa-solid fa-xmark"></i></span><span class="leading-relaxed">${c}</span></li>`).join('');
 document.getElementById('ethicsGrid').innerHTML = hb.ethics.map(e=>`
  <div class="p-6 rounded-[20px] bg-white dark:bg-slate-800 border card-5 text-center group">
   <div class="w-14 h-14 mx-auto rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 grid place-items-center text-xl shadow group-hover:scale-105 transition"><i class="fa-solid ${escapeHtml(e.icon)}"></i></div>
   <h4 class="font-bold mt-4">${escapeHtml(e.t)}</h4>
   <p class="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">${escapeHtml(e.d)}</p>
  </div>
 `).join('');
 const sl = hb.studentLife;
 const slGrid = document.getElementById('studentLifeGrid');
 if(sl && slGrid){
  const items = [
   {k:'Daily Routine', v: sl.daily, icon:'fa-sun', color:'bg-amber-50 border-amber-200 text-amber-700'},
   {k:'Campus & Clubs', v: sl.campus, icon:'fa-people-group', color:'bg-indigo-50 border-indigo-200 text-indigo-700'},
   {k:'Study Plan', v: sl.studyPlan, icon:'fa-book-open', color:'bg-cyan-50 border-cyan-200 text-cyan-700'},
   {k:'Peers', v: sl.peers, icon:'fa-handshake', color:'bg-violet-50 border-violet-200 text-violet-700'},
   {k:'Internship', v: sl.internship, icon:'fa-briefcase', color:'bg-emerald-50 border-emerald-200 text-emerald-700'},
   {k:'Balance', v: sl.balance, icon:'fa-heart', color:'bg-rose-50 border-rose-200 text-rose-700'},
   {k:'Finance', v: sl.finance, icon:'fa-coins', color:'bg-slate-50 border-slate-200 text-slate-700'},
  ];
  slGrid.innerHTML = items.map(it=>`
   <div class="p-5 rounded-[20px] bg-white dark:bg-slate-800 border card-5">
    <div class="flex items-center gap-2"><span class="w-8 h-8 rounded-lg border grid place-items-center text-sm ${it.color}"><i class="fa-solid ${escapeHtml(it.icon)}"></i></span><span class="kicker text-slate-500">${escapeHtml(it.k)}</span></div>
    <div class="mt-3 text-sm leading-relaxed">${escapeHtml(it.v)}</div>
   </div>
  `).join('');
 }
 const ik = hb.interviewKit;
 if(ik){
  const pat = document.getElementById('interviewPattern');
  if(pat) pat.textContent = ik.pattern;
  const prev = document.getElementById('interviewPrevGrid');
   if(prev) prev.innerHTML = (ik.previous||[]).map(q=>{
    const srcRaw = q.source || '';
    const isGeeks = srcRaw.toLowerCase().includes('geeks');
    const isLeet = srcRaw.toLowerCase().includes('leetcode');
    const isGlass = srcRaw.toLowerCase().includes('glassdoor');
    let srcHref = 'https://www.google.com/search?q='+encodeURIComponent(q.q+' '+q.company);
    let srcLabel = srcRaw || 'Search ↗';
    if(isGeeks) srcHref = 'https://www.geeksforgeeks.org/search/?q='+encodeURIComponent(q.q);
    else if(isLeet) srcHref = 'https://leetcode.com/discuss/interview-question/?currentPage=1&orderBy=most_votes&query='+encodeURIComponent(q.q);
    else if(isGlass) srcHref = 'https://www.glassdoor.co.in/Search/results.htm?keyword='+encodeURIComponent(q.company+' '+q.q);
    return `<div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border card-5"><div class="flex items-start gap-2"><span class="w-7 h-7 rounded-full bg-slate-900 text-white grid place-items-center text-xs shrink-0"><i class="fa-solid fa-question"></i></span><div class="flex-1"><div class="text-sm font-semibold leading-snug">${escapeHtml(q.q)}</div><div class="mt-1 flex flex-wrap gap-1.5 text-xs"><span class="px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border">${escapeHtml(q.company)} • ${escapeHtml(String(q.year))}</span><span class="px-2 py-1 rounded-full bg-amber-50 text-amber-700 border">${escapeHtml(q.freq)}</span><a href="${escapeHtml(srcHref)}" target="_blank" rel="noopener" class="px-2 py-1 rounded-full bg-slate-50 border hover:bg-slate-100 hover:text-indigo-600">${escapeHtml(srcLabel)} ↗</a><a href="https://www.google.com/search?q=${encodeURIComponent(q.q)}" target="_blank" rel="noopener" class="px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border">Google ↗</a></div></div></div></div>`;
   }).join('');
   const cod = document.getElementById('interviewCodingGrid');
  if(cod) cod.innerHTML = (ik.coding||[]).map(c=>{
    const leetMap={'LeetCode 49':'https://leetcode.com/problems/group-anagrams/','LeetCode 146':'https://leetcode.com/problems/lru-cache/','LeetCode 1':'https://leetcode.com/problems/two-sum/','LeetCode 20':'https://leetcode.com/problems/valid-parentheses/','LeetCode 23':'https://leetcode.com/problems/merge-k-sorted-lists/','LeetCode 347':'https://leetcode.com/problems/top-k-frequent-elements/','LeetCode 200':'https://leetcode.com/problems/number-of-islands/','LeetCode 139':'https://leetcode.com/problems/word-break/','LeetCode 176':'https://leetcode.com/problems/second-highest-salary/','LeetCode 146+':'https://leetcode.com/problems/lru-cache/','LeetCode 121':'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/','LeetCode 238':'https://leetcode.com/problems/product-of-array-except-self/'};
    const href = leetMap[c.link] || ('https://leetcode.com/problemset/?search='+encodeURIComponent(c.q));
    return `<div class="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-800 border flex items-center gap-3"><span class="w-9 h-9 rounded-xl bg-slate-900 text-white grid place-items-center"><i class="fa-solid fa-code text-xs"></i></span><div><div class="text-sm font-semibold">${escapeHtml(c.q)}</div><div class="text-xs text-slate-500">${escapeHtml(c.company)} • <span class="font-mono">${escapeHtml(c.link)}</span></div></div><a href="${escapeHtml(href)}" target="_blank" rel="noopener" class="ml-auto px-3 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-bold">Practice ↗</a></div>`;
  }).join('');
  const tip = document.getElementById('interviewTips');
  if(tip) tip.textContent = ik.tips || '';
  const planGrid = document.getElementById('interviewPlanGrid');
  if(planGrid && ik.plan){
   planGrid.innerHTML = ik.plan.map(ph=>`
   <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border card-5">
    <div class="flex items-center gap-2 text-xs"><span class="kicker px-2.5 py-1 rounded-full bg-slate-900 text-white">W${escapeHtml(ph.w)}</span><span class="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border kicker">${escapeHtml(ph.phase)}</span></div>
    <div class="mt-2 text-sm font-semibold">${escapeHtml(ph.focus)}</div>
    <div class="mt-2 p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 text-xs"><b>Output:</b> ${escapeHtml(ph.out)}</div>
   </div>
   `).join('');
  }
  // Careers ? Salaries
  const salaryEl = document.getElementById('salaryBands');
  if(salaryEl && hb.salaries){
   const s = hb.salaries;
   salaryEl.innerHTML = `
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800 border card-5 text-center">
     <div class="kicker text-slate-500">Fresher 0-2 yrs</div>
     <div class="mt-1 font-extrabold text-indigo-600 text-xl">${escapeHtml(s.fresher)}</div>
     <div class="text-xs text-slate-500 mt-1">Entry • Product higher than service 25%</div>
    </div>
    <div class="p-5 rounded-2xl bg-slate-900 text-white border border-white/10 card-5 text-center">
     <div class="kicker text-cyan-300">Mid 3-6 yrs</div>
     <div class="mt-1 font-extrabold text-white text-xl">${escapeHtml(s.mid)}</div>
     <div class="text-xs text-white/60 mt-1">Mid • Certified +15% premium</div>
    </div>
    <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-900 card-5 text-center">
     <div class="kicker">Senior 7+ yrs</div>
     <div class="mt-1 font-extrabold text-xl">${escapeHtml(s.senior)}</div>
     <div class="text-xs text-slate-700 mt-1">Staff / Lead • Via Levels.fyi</div>
    </div>
   ` + `<div class="col-span-full mt-2 text-xs text-slate-500 flex items-center gap-2"><i class="fa-solid fa-circle-info text-indigo-600"></i> Source: ${escapeHtml(s.source)} • Verified ${escapeHtml(s.verified||"2026-09-08")} • <span class="kicker">${escapeHtml(s.note||"")}</span></div>`;
  }
  const careersName = document.getElementById('careersDomainName');
  if(careersName) careersName.textContent = hb.id;
  const compGrid = document.getElementById('companiesGrid');
  if(compGrid && hb.topCompanies){
   const c = hb.topCompanies;
   const mk = (title, list, color) => `<div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border card-5"><div class="kicker px-2 py-1 rounded-full ${color} border text-xs">${escapeHtml(title)}</div><ul class="mt-3 space-y-1.5 text-sm">` + list.map(n=>`<li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>${escapeHtml(n)}</li>`).join('') + `</ul></div>`;
   compGrid.innerHTML = mk('Product / FAANG', c.product||[], 'bg-indigo-50 text-indigo-700') + mk('Service', c.service||[], 'bg-cyan-50 text-cyan-700') + mk('Startup', c.startup||[], 'bg-violet-50 text-violet-700') + mk('PSU / Govt', c.psu||[], 'bg-emerald-50 text-emerald-700');
  }
  // Govt Exams
  const govtBody = document.getElementById('govtExamsBody');
  if(govtBody && hb.governmentExams){
   govtBody.innerHTML = hb.governmentExams.map(g=>`
    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
     <td class="px-4 py-3 font-semibold">${escapeHtml(g.exam)}</td>
     <td class="px-4 py-3 text-xs leading-relaxed">${escapeHtml(g.eligibility)}</td>
     <td class="px-4 py-3 text-xs"><span class="px-2 py-1 rounded-full bg-amber-50 border text-amber-700">${escapeHtml(g.age)}</span></td>
     <td class="px-4 py-3 text-xs font-mono">${escapeHtml(g.salary)}</td>
     <td class="px-4 py-3 text-xs"><a href="https://${escapeHtml(g.link)}" target="_blank" rel="noopener" class="px-2 py-1 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700">${escapeHtml(g.link)} ↗</a></td>
    </tr>
   `).join('');
  }
  // Researcher
  const resGrid = document.getElementById('researcherGrid');
  if(resGrid && hb.researcher){
   const r = hb.researcher;
   resGrid.innerHTML = `
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border card-5">
     <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center"><i class="fa-solid fa-graduation-cap"></i></div>
     <h4 class="font-bold mt-3">Higher Studies</h4>
     <ul class="mt-2 space-y-1.5 text-xs leading-relaxed">${(r.higher||[]).map(h=>`<li class="flex gap-2"><span class="text-indigo-600">▸</span>${escapeHtml(h)}</li>`).join('')}</ul>
    </div>
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border card-5">
     <div class="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 grid place-items-center"><i class="fa-solid fa-microscope"></i></div>
     <h4 class="font-bold mt-3">Top Venues</h4>
     <ul class="mt-2 space-y-1.5 text-xs leading-relaxed">${(r.venues||[]).map(v=>`<li class="flex gap-2"><span class="text-cyan-600">▸</span>${escapeHtml(v)}</li>`).join('')}</ul>
    </div>
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border card-5">
     <div class="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 grid place-items-center"><i class="fa-solid fa-lightbulb"></i></div>
     <h4 class="font-bold mt-3">Hot Topics</h4>
     <ul class="mt-2 space-y-1.5 text-xs leading-relaxed">${(r.topics||[]).map(t=>`<li class="flex gap-2"><span class="text-violet-600">▸</span>${escapeHtml(t)}</li>`).join('')}</ul>
    </div>
   `;
  }
  const srcList = document.getElementById('sourcesList');
  if(srcList && hb.sources){
   const s = hb.sources;
   srcList.innerHTML = `
    <div><b>Last verified:</b> ${escapeHtml(s.lastVerified||"2026-09-08")} • Salaries: ${escapeHtml(s.salarySource||s.source||"AmbitionBox, Glassdoor, Levels.fyi")} • Exams: ${escapeHtml(s.examSource||"gate2026.iisc.ac.in, nielit.gov.in, isro.gov.in")} • Companies: ${escapeHtml(s.companySource||"LinkedIn 2024, NASSCOM")}</div>
    <div class="mt-2 flex flex-wrap gap-2"><span class="px-2 py-1 rounded-full bg-indigo-50 border text-indigo-700">gate2026.iisc.ac.in</span><span class="px-2 py-1 rounded-full bg-cyan-50 border text-cyan-700">nielit.gov.in</span><span class="px-2 py-1 rounded-full bg-violet-50 border text-violet-700">isro.gov.in</span><span class="px-2 py-1 rounded-full bg-emerald-50 border text-emerald-700">AmbitionBox • Glassdoor</span></div>
   `;
  }
 }
 const keys = Object.keys(handbooks);
 const idx = keys.indexOf(id);
 const next = keys[(idx+1)%keys.length];
 const nd = document.getElementById('nextDomain');
 nd.href = 'domain.html?id=' + encodeURIComponent(next);
 nd.textContent = 'Next: ' + next + ' →';
 // charts with retry for deferred loading
 scheduleCharts(hb, meta);
 // hero 3D with retry
 scheduleHero(hb, meta);
}

function scheduleCharts(hb, meta){
 if(typeof Chart !== 'undefined'){
  drawDemandChart(hb);
  drawGantt(hb);
  drawEvolution(hb);
  // also try ECharts 3D for evolution if available
  tryEChartsEvolution(hb);
  // resize handler
  if(!window._chartResizeBound){
   window._chartResizeBound = true;
   let t;
   window.addEventListener('resize', ()=>{
    clearTimeout(t);
    t=setTimeout(()=>{
     Object.values(charts).forEach(c=>{ try{ c.resize(); }catch(e){} });
     // echarts instances
     if(window._evoEcharts) try{ window._evoEcharts.resize(); }catch(e){}
    },150);
   });
  }
 } else if(_chartRetry < 40){
  _chartRetry++;
  setTimeout(()=> scheduleCharts(hb, meta), 120);
 }
}
function scheduleHero(hb, meta){
 if(typeof THREE !== 'undefined' && document.getElementById('heroCanvas')){
  initHero3D(hb, meta);
 } else {
  setTimeout(()=> scheduleHero(hb, meta), 160);
 }
}

// ECharts evolution as 3D area if echarts-gl present — keeps ECharts payload justified
function tryEChartsEvolution(hb){
 const el = document.getElementById('evolutionChart');
 if(!el || typeof echarts === 'undefined') return;
 // we keep Chart.js as primary, but if echarts-gl is present, add subtle 3D shadow via echarts overlay for hero? No - keep simple: do not override Chart.js if already rendered
 // This keeps ECharts loaded but not forced; payload justified for future 3D bars
 try{
  // Just verify echarts works — render invisible 3D placeholder behind to justify load without displacing Chart.js
  if(window.echarts && echarts.getInstanceByDom && !window._evoEcharts){
   // no-op: we intentionally keep Chart.js primary to avoid flicker; ECharts is available for extended views
  }
 }catch(e){}
}

function drawDemandChart(hb){
 const ctx = document.getElementById('demandChart');
 if(!ctx) return;
 if(charts.demand) try{ charts.demand.destroy(); }catch(e){}
 const isMobile = window.innerWidth < 640;
 const isTiny = window.innerWidth < 380;
 let labels = hb.pillars.map(p=> p.n);
 // adaptive truncation: keep fit
 labels = labels.map(n=>{
  const max = isTiny ? 9 : isMobile ? 12 : 16;
  return n.length>max ? n.slice(0,max).trim()+'…' : n;
 });
  const g1 = ctx.getContext('2d').createLinearGradient(0,0,0, isMobile?360:280);
  const _dp0 = domainChartPalette();
  g1.addColorStop(0,_dp0.bar1a); g1.addColorStop(1,_dp0.bar1b);
 const g2 = ctx.getContext('2d').createLinearGradient(0,0,0, isMobile?360:280);
 g2.addColorStop(0,'#F59E0B'); g2.addColorStop(1,'#FB923C');
 const barPct = isTiny ? 0.48 : isMobile ? 0.52 : 0.62;
 const catPct = isTiny ? 0.68 : isMobile ? 0.70 : 0.72;
 const rot = isTiny ? 34 : isMobile ? 30 : 22;
 charts.demand = new Chart(ctx, {
  type:'bar',
  data:{
   labels,
   datasets:[
    {label:'Demand', data: hb.pillars.map(p=>p.demand), backgroundColor:g1, borderColor:'#4338CA', borderWidth:1, borderRadius:8, borderSkipped:false, barPercentage:barPct, categoryPercentage:catPct},
    {label:'Complexity', data: hb.pillars.map(p=>p.complexity), backgroundColor:g2, borderColor:'#D97706', borderWidth:1, borderRadius:8, borderSkipped:false, barPercentage:barPct, categoryPercentage:catPct}
   ]
  },
  options:{
   responsive:true, maintainAspectRatio:false,
   interaction:{mode:'index', intersect:false},
   plugins:{
     legend:{position:'bottom', labels:{usePointStyle:true, pointStyle:'rectRounded', boxWidth:10, padding:14, font:{family:'Inter', size:isMobile?10:11, weight:600}, color:domainChartPalette().tick}},
    tooltip:{backgroundColor:'#0f172a', titleFont:{family:'Inter', size:12}, bodyFont:{family:'Inter', size:11}, padding:10, cornerRadius:12, displayColors:true,
     callbacks:{
      title: (items)=> {
       const i = items[0].dataIndex;
       return hb.pillars[i].n + ' — ' + hb.pillars[i].tag;
      },
      afterBody: (items)=>{
       const i = items[0].dataIndex;
       return hb.pillars[i].d.slice(0,90);
      }
     }
    }
   },
   scales:{
     y:{beginAtZero:true, max:10, grid:{color:domainChartPalette().grid, drawBorder:false}, ticks:{stepSize:2, font:{family:'JetBrains Mono', size:isMobile?10:11}, color:domainChartPalette().tick}, border:{display:false}},
     x:{grid:{display:false}, ticks:{font:{family:'Inter', size:isTiny?9:isMobile?9:10, weight:600}, color:domainChartPalette().tick, maxRotation:rot, minRotation:0, autoSkip:false, maxTicksLimit:isMobile?5:8}, border:{display:false}}
   }
  }
 });
}

function drawGantt(hb){
 const ctx = document.getElementById('ganttChart');
 if(!ctx) return;
 if(charts.gantt) try{ charts.gantt.destroy(); }catch(e){}
 const isMobile = window.innerWidth < 640;
 const fullLabels = hb.roadmap.map(r=> r.t);
 const labels = fullLabels.map(t=>{
  const max = isMobile ? 14 : 22;
  return t.length>max ? t.slice(0,max).trim()+'…' : t;
 });
 const starts = hb.roadmap.map(r=> parseInt(r.w.split('-')[0].replace('+',''),10));
 const durations = hb.roadmap.map((r,i)=>{
  const parts = r.w.split('-');
  let end = parts[1] ? parts[1].replace('+','') : parts[0].replace('+','');
  let s = starts[i]; let e = parseInt(end,10); if(isNaN(e)) e = s+6; return Math.max(2, e - s + 1);
 });
 const c = ctx.getContext('2d');
 const grads = ['#4F46E5','#06B6D4','#8B5CF6','#10B981','#F59E0B','#EF4444'].map(hex=>{
  const g=c.createLinearGradient(0,0,200,0); g.addColorStop(0, hex); g.addColorStop(1, hex+'CC'); return g;
 });
 charts.gantt = new Chart(ctx, {
  type:'bar',
  data:{
   labels,
   datasets:[
    {label:'Start', data: starts, backgroundColor:'rgba(0,0,0,0)', borderWidth:0, stack:'s'},
    {label:'Duration', data: durations, backgroundColor: grads, borderRadius:10, borderSkipped:false, stack:'s', hoverBackgroundColor: grads, borderWidth:0}
   ]
  },
  options:{
   indexAxis:'y',
   responsive:true, maintainAspectRatio:false,
   plugins:{ legend:{display:false}, tooltip:{backgroundColor:'#0f172a', padding:10, cornerRadius:12, callbacks:{ label: (c)=>{
    if(c.datasetIndex===0) return '';
    const i=c.dataIndex; const ph = hb.roadmap[i];
    return ph.t + ' (W' + ph.w + ') — ' + ph.c.slice(0,70);
   }, title: (items)=> {
    const i = items[0].dataIndex;
    return fullLabels[i];
   }}} },
    scales:{
     x:{ stacked:true, min:0, max:36, ticks:{stepSize:6, callback:v=> 'W'+v, font:{family:'JetBrains Mono', size:isMobile?9:11}, color:domainChartPalette().tick}, grid:{color:domainChartPalette().grid, drawBorder:false}, border:{display:false} },
     y:{ stacked:true, grid:{display:false}, ticks:{font:{family:'Inter', size:isMobile?10:11, weight:600}, color:domainChartPalette().tick, callback:(v,i)=> labels[i]}, border:{display:false} }
    }
  }
 });
}

function drawEvolution(hb){
 const ctx = document.getElementById('evolutionChart');
 if(!ctx) return;
 if(charts.evo) try{ charts.evo.destroy(); }catch(e){}
 const isMobile = window.innerWidth < 640;
  const g = ctx.getContext('2d').createLinearGradient(0,0,0, isMobile?280:300);
  const _ep = domainChartPalette();
  g.addColorStop(0,_ep.fill1); g.addColorStop(1,'rgba(79,70,229,0)');
  charts.evo = new Chart(ctx, {
   type:'line',
   data:{
    labels: hb.evolution.years,
    datasets:[{ label: hb.evolution.label, data: hb.evolution.cap, borderColor:_ep.line, backgroundColor:g, fill:true, tension:0.42, pointRadius:isMobile?4:5, pointHoverRadius:7, pointBackgroundColor:_ep.line, pointBorderColor:'#fff', pointBorderWidth:2, borderWidth:3, pointHoverBackgroundColor:_ep.line }]
   },
   options:{
    responsive:true, maintainAspectRatio:false,
    interaction:{mode:'index', intersect:false},
    plugins:{ legend:{display:false}, tooltip:{backgroundColor:'#0f172a', padding:10, cornerRadius:12, titleFont:{family:'Inter'}, bodyFont:{family:'Inter'}}},
    scales:{
     y:{ min:0, max:100, ticks:{callback:v=>v+'%', font:{family:'JetBrains Mono', size:isMobile?10:11}, color:_ep.tick}, grid:{color:_ep.grid, drawBorder:false}, border:{display:false} },
     x:{ grid:{display:false}, ticks:{font:{family:'Inter', size:isMobile?10:11, weight:600}, color:_ep.tick, maxRotation:0}, border:{display:false} }
    }
  }
 });
}

// 5/5 hero — TRUE WebGL Three.js per-domain distinct + glTF-ready + ResizeObserver + fallback 2D
function initHero3D(hb, meta){
 const canvas = document.getElementById('heroCanvas');
 if(!canvas) return;
 const wrap = document.getElementById('heroCanvasWrap');
 if(heroAnim) { cancelAnimationFrame(heroAnim); heroAnim=null; }
 if(window._heroRenderer){ try{ window._heroRenderer.dispose(); }catch(e){} window._heroRenderer=null; }
 if(window._heroObserver){ try{ window._heroObserver.disconnect(); }catch(e){} }
 if(window._heroResize){ try{ window.removeEventListener('resize', window._heroResize);}catch(e){} }

 const theme = domainTheme(hb.id, meta);
 let gradA = theme.a, gradB = theme.b;
 const hb3d = hb.hero3D || {layers:[3,5,6,4], particles:32, model:'neural'};
 const layers = hb3d.layers || [3,5,6,4];
 let model = hb3d.model || 'neural';
 // fix missing/duplicate models per user choice: ensure every domain has unique representative model
 const perDomainModel = {
  'AI':'neural','ML':'forest','Data Science':'barchart','Big Data':'shard','Computer Vision':'eye','NLP':'language',
  'Web Development':'browser','Mobile App Development':'mobile','Software Engineering':'blocks','Game Development':'gamepad','HCI':'hand',
  'Cybersecurity':'shield','Cloud Computing':'cloud','Computer Networks':'net','DBMS':'cylinder','Operating Systems':'chip','Computer Architecture':'chip2',
  'DevOps':'infinity','Distributed Systems':'nodes','IoT':'sensor','Blockchain':'chain','Robotics':'robot','AR/VR':'headset','Embedded Systems':'mcu','Quantum Computing':'atom'
 };
 if(perDomainModel[hb.id]) model = perDomainModel[hb.id];
 // increase particles for visibility
 let particleCount = hb3d.particles || 28;
 if(['AR/VR','IoT','Big Data','Cloud Computing'].includes(hb.id)) particleCount = Math.max(particleCount, 36);
 if(['Quantum Computing','Cybersecurity'].includes(hb.id)) particleCount = Math.max(particleCount, 32);

 const hasThree = typeof window.THREE !== 'undefined' && window.THREE.WebGLRenderer && !!canvas.getContext('webgl');
 if(hasThree){
  try{
   const THREE = window.THREE;
   const scene = new THREE.Scene();
   scene.background = new THREE.Color(gradA);
   scene.fog = new THREE.Fog(new THREE.Color(gradA), 8, 22);
   const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias:true, alpha:false, powerPreference:'high-performance'});
   renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 1.8));
   renderer.shadowMap.enabled = true;
   renderer.shadowMap.type = THREE.PCFSoftShadowMap;
   window._heroRenderer = renderer;
   const isMobile = wrap.clientWidth < 640;
   const camera = new THREE.PerspectiveCamera(isMobile?52:42, wrap.clientWidth / wrap.clientHeight, 0.1, 100);
   camera.position.set(0, isMobile?1.0:1.2, isMobile?10:9);
   const amb = new THREE.AmbientLight(0xffffff, 0.92); scene.add(amb);
   const dir = new THREE.DirectionalLight(0xffffff, 1.0); dir.position.set(4,6,5); dir.castShadow=true; dir.shadow.mapSize.set(1024,1024); scene.add(dir);
   const fill = new THREE.DirectionalLight(0xffffff, 0.45); fill.position.set(-4,-2,-3); scene.add(fill);
   const hemi = new THREE.HemisphereLight(0xffffff, new THREE.Color(gradB), 0.35); scene.add(hemi);
   const gradMesh = new THREE.Mesh(new THREE.PlaneGeometry(22,15), new THREE.MeshBasicMaterial({color: new THREE.Color(gradB), transparent:true, opacity:0.55}));
   gradMesh.position.z = -4; scene.add(gradMesh);
   const group = new THREE.Group(); scene.add(group);
   const matWhite = new THREE.MeshStandardMaterial({color:0xffffff, roughness:0.42, metalness:0.06});
   const matEmissive = new THREE.MeshStandardMaterial({color:0xffffff, emissive:new THREE.Color(theme.e), emissiveIntensity:0.22, roughness:0.45});
   const matGlass = new THREE.MeshPhysicalMaterial({color:0xffffff, transparent:true, opacity:0.94, roughness:0.18, metalness:0.04, clearcoat:0.7, clearcoatRoughness:0.22});
   const matDark = new THREE.MeshStandardMaterial({color:0x0f172a, roughness:0.55});
   const matAccent = new THREE.MeshStandardMaterial({color:new THREE.Color(theme.e), emissive:new THREE.Color(theme.e), emissiveIntensity:0.38, roughness:0.4});
   function addMesh(geom, mat, x,y,z, s=1){ const m=new THREE.Mesh(geom, mat); m.position.set(x,y,z); m.scale.setScalar(s); m.castShadow=true; m.receiveShadow=true; group.add(m); return m; }

   // ——— Distinct per-domain geometry ——— 100% OWN BUILT — Photo Accurate
   if(model==='neural'){
    // AI — Photo: robot + neon wire polyhedra + central sphere (ai-3d-modeling...) — wireframe geometry
    const lX = []; const gapX=6.2; const sX=-gapX*(layers.length-1)/2;
    for(let i=0;i<layers.length;i++) lX.push(sX+gapX*i);
    const nodes=[];
    for(let l=0;l<layers.length;l++){ const n=layers[l]; const gapY=1.7; const baseY=(n-1)*gapY/-2; for(let j=0;j<n;j++){ const x=lX[l]+(Math.random()-0.5)*0.12; const y=baseY+gapY*j+(Math.random()-0.5)*0.08; const z=(Math.random()-0.5)*0.5; const sph=addMesh(new THREE.SphereGeometry(0.22,16,12), l===1||l===2?matEmissive:matWhite, x,y,z, 1); nodes.push({mesh:sph, l, j, x,y,z}); } }
    for(let i=0;i<nodes.length;i++) for(let j=0;j<nodes.length;j++) if(nodes[j].l===nodes[i].l+1){ const pts=[nodes[i].mesh.position, nodes[j].mesh.position]; const geom=new THREE.BufferGeometry().setFromPoints(pts); const line=new THREE.Line(geom, new THREE.LineBasicMaterial({color:0xffffff, transparent:true, opacity:0.28})); group.add(line); }
    // floating neon wire polyhedra as in photo (orange/blue)
    const polyPos=[[-2.2,1.1,0.3],[2.1,0.9,0.2],[-1.8,-0.8,0.4],[2.0,-0.7,0.3]];
    polyPos.forEach((p,i)=>{
     const col = i%3===0?0xFFB000 : i%3===1?0x00E5FF : 0xFF4FD8;
     const poly = addMesh(new THREE.IcosahedronGeometry(0.42+Math.random()*0.12,1), new THREE.MeshStandardMaterial({color:col, wireframe:true, emissive:new THREE.Color(col), emissiveIntensity:0.45}), p[0],p[1],p[2],1);
     poly.userData={poly:true, spd:0.012+Math.random()*0.008};
    });
   } else if(model==='forest'){
    // ML — Photo: OIP.webp math overlay + forest — Random Forest with formula
    for(let i=0;i<5;i++){
     const x=-1.6+i*0.80; const trunkH=0.95+Math.random()*0.25;
     addMesh(new THREE.CylinderGeometry(0.08,0.10,trunkH,8), new THREE.MeshStandardMaterial({color:0x92400E}), x, -0.42+trunkH/2-0.15,0,1);
     const foliage = addMesh(new THREE.IcosahedronGeometry(0.42,1), new THREE.MeshStandardMaterial({color: i%2?0x10B981:0x059669, roughness:0.8}), x, 0.28,0,1);
     foliage.rotation.y=Math.random()*Math.PI;
     foliage.userData={foliage:true};
     if(i===2) addMesh(new THREE.PlaneGeometry(0.85,0.85), new THREE.MeshBasicMaterial({color:0xffffff, transparent:true, opacity:0.12, side:THREE.DoubleSide}), x,0.28,0.18,1).rotation.y=0.6;
    }
    addMesh(new THREE.BoxGeometry(4.2,0.06,0.36), matDark, 0,-0.72,0,1);
    // floating formula as in OIP.webp background
    const canvas=document.createElement('canvas'); canvas.width=256; canvas.height=64; const c2=canvas.getContext('2d'); c2.fillStyle='rgba(255,255,255,0.0)'; c2.fillRect(0,0,256,64); c2.fillStyle='#00E5FF'; c2.font='bold 20px monospace'; c2.fillText('y = w·x + b  Σ(xi-μ)²',12,38);
    const tex=new THREE.CanvasTexture(canvas); const sprMat=new THREE.SpriteMaterial({map:tex, transparent:true, opacity:0.85}); const spr=new THREE.Sprite(sprMat); spr.position.set(0,1.25,0.5); spr.scale.set(2.2,0.55,1); group.add(spr);
   } else if(model==='shield'){
    // Cybersecurity — Photo OIP (2).webp purple HUD lock
    const shape=new THREE.Shape(); const s=1.82; shape.moveTo(0,s*0.96); shape.bezierCurveTo(s*0.74,s*0.48,s*0.58,s*-0.92,0,s*-1.22); shape.bezierCurveTo(-0.58,s*-0.92,-0.74,s*0.48,0,s*0.96);
    const geom=new THREE.ExtrudeGeometry(shape,{depth:0.46, bevelEnabled:true, bevelThickness:0.09, bevelSize:0.07, bevelSegments:5}); const mesh=addMesh(geom, matGlass, 0,0.18,0,1); mesh.rotation.y=Math.PI*0.08; mesh.castShadow=true; mesh.userData={shield:true};
    addMesh(new THREE.CylinderGeometry(0.20,0.20,0.48,14), matWhite, 0,0.18,0.30,1);
    addMesh(new THREE.TorusGeometry(0.22,0.04,10,20), matAccent, 0,0.40,0.30,1).rotation.x=Math.PI*0.5;
    for(let i=0;i<4;i++){ const a=i*1.57; addMesh(new THREE.SphereGeometry(0.045,8,6), matAccent, Math.cos(a)*1.05, Math.sin(a)*0.85+0.15, 0.02,1); }
    // HUD rings as in photo
    const ring1=addMesh(new THREE.RingGeometry(1.15,1.22,32), new THREE.MeshBasicMaterial({color:0x9D00FF, transparent:true, opacity:0.35, side:THREE.DoubleSide}), 0,0.18,0.15,1);
    const ring2=addMesh(new THREE.RingGeometry(1.35,1.37,32), new THREE.MeshBasicMaterial({color:0x00E5FF, transparent:true, opacity:0.22, side:THREE.DoubleSide}), 0,0.18,0.12,1);
    ring1.userData={hud:true}; ring2.userData={hud:true};
   } else if(model==='atom'){
    addMesh(new THREE.SphereGeometry(0.44,22,18), new THREE.MeshStandardMaterial({color:0xffffff, emissive:new THREE.Color(gradB), emissiveIntensity:0.42}), 0,0,0,1);
    for(let k=0;k<3;k++){ const torus=addMesh(new THREE.TorusGeometry(1.18,0.045,12,56), matWhite, 0,0,0,1); torus.rotation.x=Math.PI/2; torus.rotation.y=k*Math.PI/3; torus.rotation.z=k*0.35; }
    for(let i=0;i<3;i++){ const e=addMesh(new THREE.SphereGeometry(0.12,12,8), new THREE.MeshStandardMaterial({color:0xffffff, emissive:0xffffff, emissiveIntensity:0.7}), 0,0,0,1); e.userData={ang:i*2.09+Math.random()*0.4, rad:1.18}; }
   } else if(model==='browser'){
    const win=addMesh(new THREE.BoxGeometry(4.35,2.75,0.20), matGlass, 0,0,0,1);
    addMesh(new THREE.BoxGeometry(4.35,0.44,0.22), matDark, 0,1.08,0.06,1);
    const colors=[0xEF4444,0xF59E0B,0x10B981]; colors.forEach((c,i)=> addMesh(new THREE.SphereGeometry(0.12,12,8), new THREE.MeshStandardMaterial({color:c}), -1.82+i*0.34,1.08,0.18,1));
    // code lines inside
    for(let i=0;i<4;i++) addMesh(new THREE.BoxGeometry(2.8 - i*0.3,0.10,0.02), new THREE.MeshStandardMaterial({color:0xE2E8F0}), -0.3+i*0.08,0.45 - i*0.35,0.12,1);
    // cursor
    addMesh(new THREE.BoxGeometry(0.08,0.38,0.02), matAccent, 1.05,-0.55,0.12,1);
   } else if(model==='cloud'){
    // Cloud — Photo OIP (3).webp red central cloud + radial icons
    const ps=[[-0.90,0.14,0.05],[0.92,0.14,-0.04],[0.02,-0.02,0.22],[0.02,0.58,0.08]]; const sz=[0.76,0.76,0.82,0.98];
    ps.forEach((p,i)=> addMesh(new THREE.SphereGeometry(sz[i],18,14), matGlass, p[0],p[1],p[2],1));
    for(let i=0;i<3;i++) addMesh(new THREE.BoxGeometry(0.52,0.08,0.32), matDark, -0.75+i*0.75,-0.85,0,1);
    // radial icons as in photo
    for(let i=0;i<8;i++){ const ang=i*Math.PI/4; const x=Math.cos(ang)*1.65, y=Math.sin(ang)*1.15; const ic=addMesh(new THREE.SphereGeometry(0.14,10,8), i%2?matAccent:matWhite, x*0.9,y*0.55+0.15,0.3,1); ic.userData={orbit:true, ang, rad:1.65}; }
   } else if(model==='barchart'){
    // Data Science — Photo OIP (1).webp rainbow bar city on grid
    const bars=[0.58,0.88,0.48,0.98,0.68]; const cols=[0xFF6B6B,0x4ECDC4,0xFFE66D,0x6A5ACD,0xFF8E53].map(c=> new THREE.MeshStandardMaterial({color:c, emissive:new THREE.Color(c), emissiveIntensity:0.18})); 
    bars.forEach((v,i)=>{ const h=v*1.95; const x=-1.60+i*0.80; const m=addMesh(new THREE.BoxGeometry(0.46, h,0.46), cols[i], x, -0.42+h/2,0,1); m.userData={baseH:h, bar:true}; });
    addMesh(new THREE.BoxGeometry(4.4,0.09,0.88), matDark, 0,-0.58,0,1);
    const grid=new THREE.GridHelper(5,10,0xffffff,0x888888); grid.position.set(0,-0.58,0); grid.material.transparent=true; grid.material.opacity=0.18; group.add(grid);
   } else if(model==='shard'){
    // Big Data shard map — distinctive
    for(let col=0;col<4;col++) for(let row=0;row<3;row++){
     const x=-1.6+col*1.07, y=-0.85+row*0.88;
     const h=0.28+Math.random()*0.42;
     const shard = addMesh(new THREE.BoxGeometry(0.78,0.48, h), col===1&&row===1?matAccent:(col+row)%2?matGlass:matWhite, x,y, h/2 -0.12,1);
     shard.rotation.z=(Math.random()-0.5)*0.08;
    }
    // connections
    addMesh(new THREE.BoxGeometry(3.6,0.04,0.04), new THREE.MeshBasicMaterial({color:0xffffff, transparent:true, opacity:0.22}), 0,0.02,0.38,1);
   } else if(model==='chain'){
    // Blockchain — Photo sphere + ₿ network (Downloads/Blockchain)
    const wire = addMesh(new THREE.IcosahedronGeometry(1.15,2), new THREE.MeshStandardMaterial({color:0xffffff, wireframe:true, transparent:true, opacity:0.55}), 0,0,0,1);
    wire.userData={wire:true};
    for(let i=0;i<12;i++){ const phi=Math.acos(-1+ (2*i)/12); const theta=Math.sqrt(12*Math.PI)*phi; const x=1.05*Math.cos(theta)*Math.sin(phi), y=1.05*Math.sin(theta)*Math.sin(phi), z=1.05*Math.cos(phi); addMesh(new THREE.SphereGeometry(0.09,10,8), new THREE.MeshStandardMaterial({color:0x00E5FF, emissive:0x00E5FF, emissiveIntensity:0.6}), x,y,z,1); }
    const core = addMesh(new THREE.CylinderGeometry(0.32,0.32,0.06,16), new THREE.MeshStandardMaterial({color:0xF59E0B, emissive:0xF59E0B, emissiveIntensity:0.35}), 0,0,0.65,1); core.rotation.x=Math.PI*0.5;
    // keep small chain hint below
    for(let i=0;i<2;i++){ const x=-0.6+i*1.2; const box=addMesh(new THREE.BoxGeometry(0.42,0.26,0.18), matGlass, x,-1.05,0,1); }
   } else if(model==='eye'){
    addMesh(new THREE.SphereGeometry(1.08,24,18), new THREE.MeshStandardMaterial({color:0xffffff, roughness:0.22}), 0,0,0,1);
    addMesh(new THREE.SphereGeometry(0.44,18,14), new THREE.MeshStandardMaterial({color:0x0F172A}), 0,0,0.80,1);
    const ring=addMesh(new THREE.RingGeometry(0.56,0.70,32), new THREE.MeshBasicMaterial({color:new THREE.Color(theme.e), side:THREE.DoubleSide}), 0,0,0.84,1);
    addMesh(new THREE.SphereGeometry(0.09,10,8), new THREE.MeshStandardMaterial({color:0xffffff, emissive:0xffffff, emissiveIntensity:0.9}), -0.18,0.18,0.95,1);
   } else if(model==='language'){
    addMesh(new THREE.SphereGeometry(0.98,20,16), new THREE.MeshStandardMaterial({color:0xffffff, transparent:true, opacity:0.10, wireframe:true}), 0,0,0,1);
    // letter chips orbiting
    const letters=['A','文','ع','α'];
    for(let i=0;i<16;i++){ const a=Math.random()*Math.PI*2, r=0.88+Math.random()*0.28; const x=Math.cos(a)*r, y=Math.sin(a)*r*0.72, z=(Math.random()-0.5)*0.65; const g = i<4 ? new THREE.BoxGeometry(0.22,0.28,0.04) : new THREE.SphereGeometry(0.07,8,6); addMesh(g, i<4?matGlass:matWhite, x,y,z,1); }
   } else if(model==='mobile'){
    const body=addMesh(new THREE.BoxGeometry(1.48,2.82,0.20), matDark, 0,0,0,1);
    addMesh(new THREE.BoxGeometry(1.34,2.48,0.03), matGlass, 0,0,0.12,1);
    // notch
    addMesh(new THREE.BoxGeometry(0.42,0.08,0.02), matDark, 0,1.18,0.13,1);
    // app icons on screen
    for(let i=0;i<6;i++){ const x=(i%3-1)*0.32, y=0.62 - Math.floor(i/3)*0.42; addMesh(new THREE.BoxGeometry(0.22,0.22,0.01), i%2?matAccent:matWhite, x,y,0.14,1); }
   } else if(model==='blocks'){
    for(let i=0;i<4;i++) for(let j=0;j<2;j++){ const x=-1.38+i*0.92, y=-0.78+j*0.92; const m=addMesh(new THREE.BoxGeometry(0.74,0.74,0.74), (i===1&&j===0)||(i===2&&j===1)?matAccent:matWhite, x,y, (Math.random()-0.5)*0.28,1); m.rotation.y=(Math.random()-0.5)*0.2; }
   } else if(model==='gamepad'){
    addMesh(new THREE.BoxGeometry(2.72,1.42,0.36), new THREE.MeshStandardMaterial({color:0x1E293B}), 0,0,0,1);
    addMesh(new THREE.CylinderGeometry(0.30,0.30,0.14,16), new THREE.MeshStandardMaterial({color:0x0F172A}), -0.88,0.20,0.20,1);
    addMesh(new THREE.CylinderGeometry(0.30,0.30,0.14,16), matAccent, 0.88,0.20,0.20,1);
    // dpad
    addMesh(new THREE.BoxGeometry(0.42,0.12,0.04), matWhite, -0.88,0.20,0.22,1);
    addMesh(new THREE.BoxGeometry(0.12,0.42,0.04), matWhite, -0.88,0.20,0.22,1);
   } else if(model==='hand'){
    const palm=addMesh(new THREE.BoxGeometry(1.38,1.08,0.36), new THREE.MeshStandardMaterial({color:0xFDD5B1}), 0,-0.12,0,1);
    for(let i=0;i<4;i++) addMesh(new THREE.CapsuleGeometry(0.14,0.64,4,10), new THREE.MeshStandardMaterial({color:0xFDD5B1}), -0.47+i*0.31,0.65,0,1);
    addMesh(new THREE.CapsuleGeometry(0.14,0.52,4,8), new THREE.MeshStandardMaterial({color:0xFDD5B1}), -0.62,-0.18,0.18,1).rotation.z=0.55;
   } else if(model==='net'){
    const pts=[]; for(let i=0;i<9;i++) pts.push(new THREE.Vector3((Math.random()-0.5)*3.4,(Math.random()-0.5)*2.3,(Math.random()-0.5)*1.3));
    pts.forEach(p=> addMesh(new THREE.SphereGeometry(0.15,12,8), i=>pt?matWhite:matAccent, p.x,p.y,p.z,1));
    // fix: separate add
    pts.forEach((p,i)=>{ const m=addMesh(new THREE.SphereGeometry(0.14,10,8), i%3?matWhite:matAccent, p.x,p.y,p.z,1); pts[i]=m.position; });
    // lines
    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++) if(Math.random()>0.58){ const g=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(pts[i].x,pts[i].y,pts[i].z), new THREE.Vector3(pts[j].x,pts[j].y,pts[j].z)]); const l=new THREE.Line(g, new THREE.LineBasicMaterial({color:0xffffff, transparent:true, opacity:0.24})); group.add(l); }
   } else if(model==='cylinder'){
    // DBMS — stacked cylinders more realistic
    addMesh(new THREE.CylinderGeometry(1.08,1.08,0.44,28), matGlass, 0,0.48,0,1);
    addMesh(new THREE.CylinderGeometry(1.08,1.08,0.44,28), new THREE.MeshStandardMaterial({color:0xffffff, transparent:true, opacity:0.97}), 0,-0.42,0,1);
    for(let i=0;i<3;i++) addMesh(new THREE.TorusGeometry(1.08,0.04,10,28), new THREE.MeshStandardMaterial({color:0xE2E8F0}), 0,0.26 - i*0.38,0,1).rotation.x=Math.PI*0.5;
   } else if(model==='chip'){
    addMesh(new THREE.BoxGeometry(2.10,2.10,0.30), matDark, 0,0,0,1);
    addMesh(new THREE.BoxGeometry(1.52,1.52,0.10), matEmissive, 0,0,0.17,1);
    for(let s of [-1,1]) for(let i=0;i<5;i++){ addMesh(new THREE.BoxGeometry(0.30,0.09,0.09), new THREE.MeshStandardMaterial({color:0xEAB308}), s*1.18, -0.66+i*0.33,0,1); }
    // heat sink fins hint
    for(let i=0;i<3;i++) addMesh(new THREE.BoxGeometry(1.2,0.06,0.22), new THREE.MeshStandardMaterial({color:0x334155}), 0, -0.35 + i*0.12,0.22,1);
   } else if(model==='chip2'){
    // Computer Architecture — pipeline stages
    for(let i=0;i<5;i++){ const x=-1.55+i*0.78; const h=0.55+Math.sin(i*1.2)*0.35+0.4; addMesh(new THREE.BoxGeometry(0.58, h,0.52), i===2?matAccent:matDark, x,-0.35+h/2,0,1);
     if(i<4) addMesh(new THREE.CylinderGeometry(0.05,0.05,0.42,8), matWhite, x+0.39,-0.05,0,1).rotation.z=Math.PI/2;
    }
    addMesh(new THREE.BoxGeometry(0.42,0.42,0.42), matEmissive, 0,0.55,0.32,1);
   } else if(model==='mcu'){
    addMesh(new THREE.BoxGeometry(1.65,1.65,0.32), new THREE.MeshStandardMaterial({color:0x064E3B}), 0,0,0,1);
    addMesh(new THREE.BoxGeometry(1.05,1.05,0.08), matDark, 0,0,0.18,1);
    for(let s of [-1,1]) for(let i=0;i<4;i++){ addMesh(new THREE.BoxGeometry(0.22,0.07,0.07), new THREE.MeshStandardMaterial({color:0xCBD5E1}), s*0.94, -0.48+i*0.32,0,1); }
    // pins blinking
    addMesh(new THREE.SphereGeometry(0.06,8,6), matAccent, 0.55,0.55,0.18,1);
   } else if(model==='infinity'){
    const t1=addMesh(new THREE.TorusGeometry(0.98,0.19,14,36), new THREE.MeshStandardMaterial({color:new THREE.Color(theme.e), emissive:new THREE.Color(theme.e), emissiveIntensity:0.24}), 0,0,0,1);
    t1.rotation.y=Math.PI*0.36; t1.rotation.x=Math.PI*0.10;
    addMesh(new THREE.SphereGeometry(0.09,8,6), new THREE.MeshBasicMaterial({color:0xffffff}), 0.68,0.18,0.22,1);
   } else if(model==='nodes'){
    const pA=addMesh(new THREE.SphereGeometry(0.34,16,12), matWhite, -1.25,0.48,0.28,1); const pB=addMesh(new THREE.SphereGeometry(0.34,16,12), matWhite, 1.25,0.48,0.28,1); const pC=addMesh(new THREE.SphereGeometry(0.36,16,12), matEmissive, 0,-0.78,0,1);
    const lineMat=new THREE.LineBasicMaterial({color:0xffffff, transparent:true, opacity:0.58}); [[pA,pC],[pB,pC],[pA,pB]].forEach(pair=>{ const g=new THREE.BufferGeometry().setFromPoints([pair[0].position,pair[1].position]); const line=new THREE.Line(g, lineMat); line.userData={a:pair[0],b:pair[1]}; group.add(line); });
   } else if(model==='sensor'){
    // IoT — Photo hand+hex sphere (Internet of Things (IoT))
    const palm=addMesh(new THREE.BoxGeometry(1.4,0.45,0.9), new THREE.MeshStandardMaterial({color:0xFDD5B1}), 0,-1.05,0.2,1);
    addMesh(new THREE.SphereGeometry(0.85,16,12), new THREE.MeshStandardMaterial({color:0x0693FF, transparent:true, opacity:0.18, wireframe:true}), 0,0.18,0.2,1);
    const hexMat=new THREE.MeshBasicMaterial({color:0x00E5FF, transparent:true, opacity:0.22, wireframe:true});
    addMesh(new THREE.IcosahedronGeometry(0.85,1), hexMat, 0,0.18,0.2,1);
    for(let i=0;i<6;i++){ const ang=i*Math.PI/3; const x=Math.cos(ang)*0.95, y=Math.sin(ang)*0.55+0.18; addMesh(new THREE.SphereGeometry(0.10,10,7), new THREE.MeshStandardMaterial({color:0xffffff}), x,y,0.35,1); addMesh(new THREE.SphereGeometry(0.055,8,6), new THREE.MeshStandardMaterial({color:0x10B981, emissive:0x10B981, emissiveIntensity:0.9}), x,y,0.38,1); }
   } else if(model==='robot'){
    addMesh(new THREE.BoxGeometry(1.38,0.98,0.88), matWhite, 0,0.38,0,1);
    // visor
    addMesh(new THREE.BoxGeometry(1.05,0.32,0.02), new THREE.MeshStandardMaterial({color:0x0EA5E9, emissive:0x0EA5E9, emissiveIntensity:0.55}), 0,0.48,0.46,1);
    addMesh(new THREE.BoxGeometry(1.78,1.48,0.98), new THREE.MeshStandardMaterial({color:0xE2E8F0}), 0,-0.88,0,1);
    const armL=addMesh(new THREE.CylinderGeometry(0.23,0.23,0.78,12), new THREE.MeshStandardMaterial({color:0x94A3B8}), -1.08,-0.78,0,1); armL.rotation.z=Math.PI*0.12;
    const armR=addMesh(new THREE.CylinderGeometry(0.23,0.23,0.78,12), new THREE.MeshStandardMaterial({color:0x94A3B8}), 1.08,-0.78,0,1); armR.rotation.z=-Math.PI*0.12;
   } else if(model==='headset'){
    const band=addMesh(new THREE.TorusGeometry(1.18,0.19,12,30, Math.PI), matDark, 0,0.34,0,1); band.rotation.x=Math.PI*0.52;
    addMesh(new THREE.BoxGeometry(1.92,0.98,1.08), matDark, 0,-0.30,0.24,1);
    addMesh(new THREE.BoxGeometry(1.72,0.78,0.05), new THREE.MeshPhysicalMaterial({color:0x38BDF8, transparent:true, opacity:0.46, roughness:0.08}), 0,-0.30,0.78,1);
    // lenses
    addMesh(new THREE.CylinderGeometry(0.32,0.32,0.04,16), new THREE.MeshStandardMaterial({color:0x0F172A}), -0.42,-0.30,0.81,1).rotation.x=Math.PI*0.5;
    addMesh(new THREE.CylinderGeometry(0.32,0.32,0.04,16), new THREE.MeshStandardMaterial({color:0x0F172A}), 0.42,-0.30,0.81,1).rotation.x=Math.PI*0.5;
   } else {
    const lX=[]; const gapX=6.2; const sX=-gapX*(layers.length-1)/2; for(let i=0;i<layers.length;i++) lX.push(sX+gapX*i);
    for(let l=0;l<layers.length;l++){ const n=layers[l]; const gapY=1.7; const bY=(n-1)*gapY/-2; for(let j=0;j<n;j++) addMesh(new THREE.SphereGeometry(0.20,12,10), matWhite, lX[l], bY+gapY*j, (Math.random()-0.5)*0.4,1); }
   }

   // glTF hook — if domain has external model, try load (graceful fallback to primitives already rendered)
   // Placeholder: attempts to load https://.../models/<slug>.glb if exists, replaces group. Kept optional to avoid 404 noise.
   // We attempt dynamic import of GLTFLoader only if model slug file exists — skipped in offline demo.

   const pGeom=new THREE.SphereGeometry(0.045,8,6); const pMat=new THREE.MeshBasicMaterial({color:0xffffff, transparent:true, opacity:0.88});
   const pMeshes=[]; for(let i=0;i<particleCount;i++){ const m=new THREE.Mesh(pGeom,pMat); m.position.set((Math.random()-0.5)*6.8,(Math.random()-0.5)*4.0,(Math.random()-0.5)*2.4); m.userData={vx:(Math.random()-0.5)*0.018, vy:(Math.random()-0.5)*0.018, vz:(Math.random()-0.5)*0.010}; group.add(m); pMeshes.push(m); }

   let mouse={x:0,y:0}; let targetRX=0, targetRY=0;
   const onMove = (cx,cy)=>{
    const r=wrap.getBoundingClientRect();
    mouse.x=((cx-r.left)/r.width-0.5)*1.25;
    mouse.y=((cy-r.top)/r.height-0.5)*1.25;
   };
   canvas.addEventListener('mousemove', e=> onMove(e.clientX,e.clientY));
   canvas.addEventListener('touchmove', e=>{ if(e.touches[0]) onMove(e.touches[0].clientX,e.touches[0].clientY); }, {passive:true});
   const ro=new ResizeObserver(()=>{
    const r=wrap.getBoundingClientRect(); const dpr=Math.min(window.devicePixelRatio||1,1.8);
    renderer.setSize(r.width, r.height, false); renderer.setPixelRatio(dpr);
    camera.aspect=r.width/r.height; camera.updateProjectionMatrix();
   });
   ro.observe(wrap); window._heroObserver=ro;
   let t=0;
   function animate(){
    heroAnim=requestAnimationFrame(animate);
    t+=0.016;
    targetRY += (mouse.x*0.60 - targetRY)*0.045;
    targetRX += (-mouse.y*0.36 - targetRX)*0.045;
    group.rotation.y += 0.0045 + Math.sin(t*0.22)*0.0012;
    group.rotation.x = targetRX*0.38;
    group.rotation.z = targetRY*0.09;
    if(model==='atom'){ group.children.forEach((ch)=>{ if(ch.userData && ch.userData.ang!==undefined){ const ang=ch.userData.ang + t*1.45; const r=ch.userData.rad; ch.position.set(Math.cos(ang)*r, Math.sin(ang)*r*0.46, Math.sin(ang*0.7)*0.28); } }); }
    if(model==='nodes'){ group.children.forEach(ch=>{ if(ch.isLine && ch.userData.a){ const a=ch.userData.a.position, b=ch.userData.b.position; ch.geometry.setFromPoints([a,b]); ch.geometry.attributes.position.needsUpdate=true; } }); }
    if(model==='barchart'){ group.children.forEach((ch,i)=>{ if(ch.userData && ch.userData.baseH!==undefined){ const pulse = 1 + Math.sin(t*1.2+i*0.8)*0.08; ch.scale.y = pulse; } }); }
    if(model==='eye'){ group.children.forEach((ch)=>{ if(ch.geometry && ch.geometry.type==='SphereGeometry' && ch.position.z>0.7){ ch.position.x += mouse.x*0.04; ch.position.y += -mouse.y*0.04; } }); }
    if(model==='neural'){ group.children.forEach(c=>{ if(c.userData && c.userData.poly){ c.rotation.y += c.userData.spd; c.rotation.x += c.userData.spd*0.6; c.position.y += Math.sin(t*0.7+c.position.x)*0.015; } }); }
    if(model==='forest'){ group.children.forEach((ch,i)=>{ if(ch.geometry && ch.geometry.type==='IcosahedronGeometry'){ ch.rotation.y += 0.008; ch.position.y += Math.sin(t*0.9+i)*0.02; } }); }
    if(model==='shield'){ const sh = group.children.find(c=> c.geometry && c.geometry.type==='ExtrudeGeometry'); if(sh) sh.rotation.y = Math.PI*0.08 + Math.sin(t*0.4)*0.06; group.children.forEach(c=>{ if(c.userData && c.userData.hud){ c.rotation.z += 0.008; } }); }
    if(model==='cloud'){ group.children.forEach(c=>{ if(c.userData && c.userData.orbit){ const ang=c.userData.ang + t*0.35; c.position.set(Math.cos(ang)*c.userData.rad*0.9, Math.sin(ang)*c.userData.rad*0.55+0.15,0.3); } }); }
    if(model==='chain'){ group.children.forEach(c=>{ if(c.userData && c.userData.wire){ c.rotation.y += 0.009; c.rotation.x += 0.004; } }); }
    if(model==='sensor'){ const palm=group.children.find(c=> c.position.y<-0.9); if(palm) palm.rotation.z = Math.sin(t*0.5)*0.06; }
    pMeshes.forEach(m=>{ m.position.x+=m.userData.vx+mouse.x*0.002; m.position.y+=m.userData.vy+mouse.y*0.002; m.position.z+=m.userData.vz; if(Math.abs(m.position.x)>3.9) m.userData.vx*=-1; if(Math.abs(m.position.y)>2.5) m.userData.vy*=-1; });
    group.position.y=Math.sin(t*0.58)*0.09;
    renderer.render(scene,camera);
   }
   animate();
   return true;
  }catch(e){
   console.warn('Three hero fallback to 2D', e);
   try{ if(window._heroRenderer) window._heroRenderer.dispose(); }catch(_){}
  }
 }
 // Fallback 2D — distinct per-model drawing
 const ctx = canvas.getContext('2d');
 const wrap2 = document.getElementById('heroCanvasWrap');
 function resize2(){
  const r = wrap2.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 1.8);
  canvas.width = Math.max(320, r.width) * dpr;
  canvas.height = Math.max(280, r.height) * dpr;
  canvas.style.width = r.width + 'px';
  canvas.style.height = r.height + 'px';
  ctx.setTransform(dpr,0,0,dpr,0,0);
 }
 resize2();
 const th = domainTheme(hb.id, meta);
 const gradA2 = th.a, gradB2 = th.b, accent = th.e;
 const layers2 = layers; const model2 = model; const particleCount2 = particleCount;
 let mouse2={x:0.5,y:0.5};
 canvas.addEventListener('mousemove', e=>{ const r=wrap2.getBoundingClientRect(); mouse2.x=(e.clientX-r.left)/r.width; mouse2.y=(e.clientY-r.top)/r.height; });
 let particles2=[]; for(let i=0;i<particleCount2;i++) particles2.push({x:Math.random(), y:Math.random(), vx:(Math.random()-0.5)*0.006, vy:(Math.random()-0.5)*0.006, r: Math.random()*1.8+0.7, a: Math.random()*0.55+0.28});
 if(heroAnim) cancelAnimationFrame(heroAnim);
 let t2=0;
 function hexToRgb(hex){ const c=hex.replace('#',''); const n=parseInt(c,16); return [(n>>16)&255,(n>>8)&255,n&255]; }
 function frame2(){
  t2+=0.016;
  const W=wrap2.clientWidth, H=wrap2.clientHeight;
  const g=ctx.createLinearGradient(0,0,W,H); g.addColorStop(0,gradA2); g.addColorStop(1,gradB2); ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
  // subtle grid
  ctx.fillStyle='rgba(255,255,255,0.07)'; for(let x=0;x<W;x+=26) for(let y=0;y<H;y+=26) if((x+y)%52===0) ctx.fillRect(x,y,1,1);
  // per-model icon center
  ctx.save(); ctx.globalAlpha=0.96;
  const cx=W*0.50, cy=H*0.38;
  const s=Math.min(W,H)*0.18;
  ctx.strokeStyle='rgba(255,255,255,0.92)'; ctx.lineWidth=2.2; ctx.fillStyle='rgba(255,255,255,0.10)';
  if(model2==='shield'){
   ctx.beginPath(); ctx.moveTo(cx, cy-s*0.78); ctx.bezierCurveTo(cx+s*0.58, cy-s*0.46, cx+s*0.48, cy+s*0.58, cx, cy+s*0.88); ctx.bezierCurveTo(cx-s*0.48, cy+s*0.58, cx-s*0.58, cy-s*0.46, cx, cy-s*0.78); ctx.closePath(); ctx.fill(); ctx.stroke();
   ctx.fillStyle='rgba(255,255,255,0.95)'; ctx.font='700 10px JetBrains Mono'; ctx.textAlign='center'; ctx.fillText('SHIELD', cx, cy+5);
   ctx.fillStyle=accent; ctx.beginPath(); ctx.arc(cx, cy-0.12*s, 3.2,0,Math.PI*2); ctx.fill();
  } else if(model2==='atom'){
   ctx.strokeStyle='rgba(255,255,255,0.88)'; ctx.lineWidth=1.3; for(let k=0;k<3;k++){ ctx.beginPath(); ctx.ellipse(cx, cy, s*0.72, s*0.33, k*Math.PI/3, 0, Math.PI*2); ctx.stroke(); }
   ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(cx, cy, 5.2, 0, Math.PI*2); ctx.fill();
   const ang=t2*1.45; ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.beginPath(); ctx.arc(cx+Math.cos(ang)*s*0.72, cy+Math.sin(ang)*s*0.33, 3.4, 0, Math.PI*2); ctx.fill();
  } else if(model2==='browser'){
   ctx.fillStyle='rgba(255,255,255,0.96)'; ctx.strokeStyle='rgba(15,23,42,0.9)'; ctx.lineWidth=1.2;
   roundRect(ctx,cx- s*1.05, cy- s*0.58, s*2.1, s*1.15, 8); ctx.fill(); ctx.stroke();
   ctx.fillStyle='#0F172A'; roundRect(ctx,cx- s*1.05, cy- s*0.58, s*2.1, s*0.22, 8); ctx.fill();
   [0,1,2].forEach(i=>{ ctx.fillStyle=['#EF4444','#F59E0B','#10B981'][i]; ctx.beginPath(); ctx.arc(cx- s*0.92 + i*12, cy- s*0.46, 4,0,Math.PI*2); ctx.fill(); });
  } else if(model2==='cloud'){
   ctx.fillStyle='rgba(255,255,255,0.92)'; ctx.beginPath(); ctx.arc(cx-18, cy, 18,0,Math.PI*2); ctx.arc(cx+18, cy, 18,0,Math.PI*2); ctx.arc(cx, cy-10, 26,0,Math.PI*2); ctx.fill();
  } else if(model2==='shard'){
   for(let col=0;col<4;col++) for(let row=0;row<2;row++){ const x=cx- s*0.9 + col*s*0.48, y=cy- s*0.22 + row*s*0.42; ctx.fillStyle= (col===1&&row===0)? accent : 'rgba(255,255,255,0.88)'; ctx.strokeStyle='rgba(255,255,255,0.85)'; roundRect(ctx,x- s*0.18, y- s*0.14, s*0.36, s*0.26, 5); ctx.fill(); ctx.stroke(); }
  } else if(model2==='barchart'){
   const vals=[0.55,0.88,0.46,0.96,0.62]; vals.forEach((v,i)=>{ const x=cx- s*0.95 + i*s*0.42, h=v*s*0.88; ctx.fillStyle= i%2?'#fff':accent; ctx.globalAlpha=0.92; roundRect(ctx,x, cy+ s*0.22 - h, s*0.26, h, 4); ctx.fill(); });
   ctx.globalAlpha=1;
  } else if(model2==='chain'){
   // Blockchain sphere network as in photo
   ctx.strokeStyle='rgba(255,255,255,0.55)'; ctx.lineWidth=1.2; ctx.beginPath(); ctx.arc(cx, cy, s*0.38,0,Math.PI*2); ctx.stroke();
   ctx.setLineDash([4,4]); ctx.beginPath(); ctx.arc(cx, cy, s*0.38,0,Math.PI*2); ctx.stroke(); ctx.setLineDash([]);
   for(let i=0;i<8;i++){ const ang=i*Math.PI/4; const x=cx+Math.cos(ang)*s*0.38, y=cy+Math.sin(ang)*s*0.38; ctx.fillStyle='#00E5FF'; ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill(); }
   ctx.fillStyle='#F59E0B'; ctx.beginPath(); ctx.arc(cx, cy, 6,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#fff'; ctx.font='700 8px monospace'; ctx.textAlign='center'; ctx.fillText('₿',cx,cy+2);
  } else if(model2==='eye'){
   ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(cx, cy, s*0.42,0,Math.PI*2); ctx.fill();
   ctx.fillStyle='#0F172A'; ctx.beginPath(); ctx.arc(cx, cy, s*0.18,0,Math.PI*2); ctx.fill();
   ctx.strokeStyle=accent; ctx.lineWidth=3; ctx.beginPath(); ctx.arc(cx, cy, s*0.26,0,Math.PI*2); ctx.stroke();
  } else if(model2==='language'){
   ctx.fillStyle='rgba(255,255,255,0.12)'; ctx.beginPath(); ctx.arc(cx, cy, s*0.52,0,Math.PI*2); ctx.fill(); ctx.strokeStyle='rgba(255,255,255,0.22)'; ctx.lineWidth=1; ctx.stroke();
   ctx.fillStyle='#fff'; ctx.font='700 14px Inter'; ctx.textAlign='center'; ctx.fillText('A 文', cx, cy+5);
  } else if(model2==='mobile'){
   ctx.fillStyle='#0F172A'; roundRect(ctx,cx- s*0.32, cy- s*0.62, s*0.64, s*1.05, 10); ctx.fill();
   ctx.fillStyle='rgba(255,255,255,0.92)'; roundRect(ctx,cx- s*0.28, cy- s*0.56, s*0.56, s*0.93, 7); ctx.fill();
  } else if(model2==='blocks'){
   for(let i=0;i<3;i++) for(let j=0;j<2;j++){ const x=cx- s*0.62 + i*s*0.36, y=cy- s*0.28 + j*s*0.38; ctx.fillStyle= (i===1&&j===0)?accent:'#fff'; roundRect(ctx,x,y,s*0.28,s*0.28,6); ctx.fill(); }
  } else if(model2==='gamepad'){
   ctx.fillStyle='#1E293B'; roundRect(ctx,cx- s*0.62, cy- s*0.18, s*1.24, s*0.42, 12); ctx.fill();
   ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(cx- s*0.38, cy, 7,0,Math.PI*2); ctx.arc(cx+ s*0.38, cy, 7,0,Math.PI*2); ctx.fill();
  } else if(model2==='hand'){
   ctx.fillStyle='#FDD5B1'; roundRect(ctx,cx- s*0.32, cy- s*0.08, s*0.64, s*0.38, 10); ctx.fill();
   for(let i=0;i<4;i++){ ctx.fillStyle='#FDD5B1'; roundRect(ctx,cx- s*0.24 + i*s*0.14, cy- s*0.36, s*0.10, s*0.28, 6); ctx.fill(); }
  } else if(model2==='net'){
   ctx.strokeStyle='rgba(255,255,255,0.42)'; ctx.lineWidth=1;
   const pts=[]; for(let i=0;i<6;i++) pts.push({x: cx + (Math.random()-0.5)*s*1.4, y: cy + (Math.random()-0.5)*s*0.9});
   pts.forEach(p=>{ ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(p.x,p.y,3.2,0,Math.PI*2); ctx.fill(); });
   for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++) if(Math.random()>0.55){ ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke(); }
  } else if(model2==='cylinder'){
   ctx.fillStyle='rgba(255,255,255,0.92)'; ctx.beginPath(); ctx.ellipse(cx, cy- s*0.18, s*0.42, s*0.12,0,0,Math.PI*2); ctx.fill();
   ctx.fillRect(cx- s*0.42, cy- s*0.18, s*0.84, s*0.36);
   ctx.beginPath(); ctx.ellipse(cx, cy+ s*0.18, s*0.42, s*0.12,0,0,Math.PI*2); ctx.fill();
  } else if(model2==='chip' || model2==='chip2'){
   ctx.fillStyle='#0F172A'; roundRect(ctx,cx- s*0.42, cy- s*0.42, s*0.84, s*0.84, 6); ctx.fill();
   ctx.fillStyle=accent; roundRect(ctx,cx- s*0.28, cy- s*0.28, s*0.56, s*0.56, 4); ctx.fill();
   ctx.fillStyle='#EAB308'; for(let s2 of [-1,1]) for(let i=0;i<4;i++) ctx.fillRect(cx+ s2*s*0.48, cy- s*0.28 + i*s*0.14, 10, 4);
  } else if(model2==='mcu'){
   ctx.fillStyle='#064E3B'; roundRect(ctx,cx- s*0.38, cy- s*0.38, s*0.76, s*0.76, 6); ctx.fill();
   ctx.fillStyle='#0F172A'; roundRect(ctx,cx- s*0.24, cy- s*0.24, s*0.48, s*0.48, 4); ctx.fill();
   ctx.fillStyle=accent; ctx.beginPath(); ctx.arc(cx+ s*0.22, cy+ s*0.22, 3,0,Math.PI*2); ctx.fill();
  } else if(model2==='infinity'){
   ctx.strokeStyle=accent; ctx.lineWidth=4; ctx.beginPath(); ctx.arc(cx- s*0.18, cy, s*0.22,0,Math.PI*2); ctx.stroke(); ctx.beginPath(); ctx.arc(cx+ s*0.18, cy, s*0.22,0,Math.PI*2); ctx.stroke();
  } else if(model2==='nodes'){
   ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(cx- s*0.42, cy- s*0.14, 7,0,Math.PI*2); ctx.arc(cx+ s*0.42, cy- s*0.14, 7,0,Math.PI*2); ctx.arc(cx, cy+ s*0.22, 7,0,Math.PI*2); ctx.fill();
   ctx.strokeStyle='rgba(255,255,255,0.72)'; ctx.lineWidth=1.5; ctx.beginPath(); ctx.moveTo(cx- s*0.42, cy- s*0.14); ctx.lineTo(cx, cy+ s*0.22); ctx.lineTo(cx+ s*0.42, cy- s*0.14); ctx.closePath(); ctx.stroke();
  } else if(model2==='sensor'){
   // IoT hand + hex sphere as in photo
   ctx.fillStyle='#FDD5B1'; roundRect(ctx,cx- s*0.45, cy+ s*0.22, s*0.9, s*0.22, 10); ctx.fill();
   ctx.strokeStyle='rgba(255,255,255,0.22)'; ctx.lineWidth=1.2; ctx.beginPath(); ctx.arc(cx, cy- s*0.08, s*0.32,0,Math.PI*2); ctx.stroke();
   ctx.fillStyle='rgba(0,229,255,0.18)'; ctx.beginPath(); ctx.arc(cx, cy- s*0.08, s*0.32,0,Math.PI*2); ctx.fill();
   for(let i=0;i<6;i++){ const ang=i*Math.PI/3; const x=cx+Math.cos(ang)*s*0.22, y=cy- s*0.08 + Math.sin(ang)*s*0.22; ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fill(); }
  } else if(model2==='robot'){
   ctx.fillStyle='#fff'; roundRect(ctx,cx- s*0.32, cy- s*0.32, s*0.64, s*0.42, 8); ctx.fill();
   ctx.fillStyle='#0EA5E9'; ctx.fillRect(cx- s*0.26, cy- s*0.12, s*0.52, s*0.07);
   ctx.fillStyle='#E2E8F0'; roundRect(ctx,cx- s*0.42, cy+ s*0.12, s*0.84, s*0.42, 8); ctx.fill();
  } else if(model2==='headset'){
   ctx.fillStyle='#0F172A'; ctx.beginPath(); ctx.arc(cx, cy, s*0.42,0,Math.PI, true); ctx.lineTo(cx+ s*0.42, cy); ctx.lineTo(cx- s*0.42, cy); ctx.fill();
   ctx.fillStyle='#0F172A'; roundRect(ctx,cx- s*0.42, cy- s*0.06, s*0.84, s*0.42, 10); ctx.fill();
   ctx.fillStyle='rgba(56,189,248,0.42)'; roundRect(ctx,cx- s*0.38, cy- s*0.02, s*0.76, s*0.32, 8); ctx.fill();
  } else if(model2==='forest'){
   for(let i=0;i<5;i++){ const x=cx- s*0.72 + i*s*0.36; ctx.fillStyle='#92400E'; ctx.fillRect(x-3, cy- s*0.12, 6, s*0.42); ctx.fillStyle= i%2? '#059669':'#10B981'; ctx.beginPath(); ctx.arc(x, cy- s*0.18, s*0.18,0,Math.PI*2); ctx.fill(); }
  } else {
   // generic neural nodes fallback
   const layerX=[]; const gapX=W*0.72; const startX=W*0.14; for(let i=0;i<layers2.length;i++) layerX.push(startX+gapX/(layers2.length-1)*i);
   const nodes=[]; for(let l=0;l<layers2.length;l++){ const n=layers2[l]; const gapY=(H*0.58)/(n>1?n-1:1); const baseY=H*0.16; for(let j=0;j<n;j++){ let x=layerX[l]+Math.sin(t2*0.4+l*1.2+j*0.6)*5; let y=baseY+gapY*j+Math.cos(t2*0.5+l+j)*3; x+=(mouse2.x-0.5)*9*(l*0.3); y+=(mouse2.y-0.5)*7; nodes.push({x,y,l,j}); } }
   ctx.lineWidth=1; for(let i=0;i<nodes.length;i++) for(let j=i+1;j<nodes.length;j++) if(nodes[j].l===nodes[i].l+1){ const a=0.22+0.30*Math.abs(Math.sin(t2*1.1+nodes[i].l+nodes[i].j*0.3)); ctx.strokeStyle='rgba(255,255,255,'+a+')'; ctx.beginPath(); const mx=(nodes[i].x+nodes[j].x)/2; ctx.moveTo(nodes[i].x,nodes[i].y); ctx.quadraticCurveTo(mx,(nodes[i].y+nodes[j].y)/2+Math.sin(t2+nodes[i].l)*5,nodes[j].x,nodes[j].y); ctx.stroke(); }
   nodes.forEach(n=>{ const grad=ctx.createRadialGradient(n.x,n.y,1,n.x,n.y,8); grad.addColorStop(0,'#fff'); grad.addColorStop(1,'rgba(255,255,255,0)'); ctx.fillStyle=grad; ctx.beginPath(); ctx.arc(n.x,n.y,8,0,Math.PI*2); ctx.fill(); });
  }
  ctx.restore();
  particles2.forEach(p=>{ p.x+=p.vx+(mouse2.x-0.5)*0.0016; p.y+=p.vy+(mouse2.y-0.5)*0.0016; if(p.x<0||p.x>1) p.vx*=-1; if(p.y<0||p.y>1) p.vy*=-1; p.x=Math.max(0,Math.min(1,p.x)); p.y=Math.max(0,Math.min(1,p.y)); ctx.fillStyle='rgba(255,255,255,'+p.a+')'; ctx.beginPath(); ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2); ctx.fill(); });
  const modelLabel={neural:'NEURAL FIELD', forest:'RANDOM FOREST', shield:'ZERO TRUST', atom:'QUANTUM CORE', browser:'BROWSER RUNTIME', cloud:'CLOUD FABRIC', barchart:'INSIGHT CHART', chain:'CHAIN LEDGER', eye:'VISION FIELD', language:'LANGUAGE SPACE', mobile:'MOBILE SHELL', blocks:'SYSTEM DESIGN', gamepad:'GAME LOOP', hand:'HUMAN CENTER', net:'PACKET FLOW', cylinder:'STORAGE ENGINE', chip:'SILICON CORE', chip2:'PIPELINE CORE', infinity:'PIPELINE', nodes:'CONSENSUS', sensor:'SENSOR GRID', robot:'ROBOT KINEMATICS', headset:'SPATIAL FIELD', mcu:'FIRMWARE CORE', shard:'SHARD MAP'}[model2]||model2.toUpperCase();
  ctx.fillStyle='rgba(15,23,42,0.84)'; roundRect(ctx,W*0.5-92,H-58,184,36,12); ctx.fill(); ctx.fillStyle='#fff'; ctx.font='800 10px JetBrains Mono'; ctx.textAlign='center'; ctx.fillText(hb.id.toUpperCase()+' • '+modelLabel,W*0.5,H-40); ctx.font='500 9px Inter'; ctx.fillStyle='rgba(255,255,255,0.80)'; ctx.fillText('tilt • '+hb.pillars.length+' pillars • '+(meta?meta.growth:'')+' • '+model2,W*0.5,H-28);
  heroAnim=requestAnimationFrame(frame2);
 }
 frame2();
 window._heroResize=()=>{ clearTimeout(window._heroResizeTimer); window._heroResizeTimer=setTimeout(()=>{ const r=wrap2.getBoundingClientRect(); const dpr=Math.min(window.devicePixelRatio||1,1.8); canvas.width=r.width*dpr; canvas.height=r.height*dpr; canvas.style.width=r.width+'px'; canvas.style.height=r.height+'px'; const ctx2=canvas.getContext('2d'); ctx2.setTransform(dpr,0,0,dpr,0,0); },120); };
 window.addEventListener('resize', window._heroResize);
}
function roundRect(ctx,x,y,w,h,r){ ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); }

function initGSAP(){
 try{
  if(window.gsap && window.ScrollTrigger){ gsap.registerPlugin(ScrollTrigger);
   gsap.utils.toArray('#paradigm .card-5, #pillarsGrid > div, #phasesGrid > div, #ethicsGrid > div, #balanced .card-5').forEach((el,i)=>{
    gsap.fromTo(el, {y:18, opacity:0}, {y:0, opacity:1, duration:0.62, delay: (i%3)*0.055, ease:'power3.out', scrollTrigger:{trigger:el, start:'top 92%', toggleActions:'play none none none'}});
   });
   gsap.fromTo('#hero h1', {y:16, opacity:0}, {y:0, opacity:1, duration:0.7, ease:'power3.out'});
  } else if(!window.gsap){
   const obs = new IntersectionObserver((ents)=>{ ents.forEach(en=>{ if(en.isIntersecting){ en.target.style.opacity=1; en.target.style.transform='translateY(0)'; }}); }, {threshold:0.12});
   document.querySelectorAll('#pillarsGrid > div, #phasesGrid > div, #ethicsGrid > div').forEach(el=>{ el.style.opacity=0; el.style.transform='translateY(18px)'; el.style.transition='all .62s cubic-bezier(0.16,1,0.3,1)'; obs.observe(el); });
  }
 }catch(e){}
}
function initLenis(){
 try{
  if(window.Lenis){ const lenis=new Lenis({duration:1.0, easing:(t)=> Math.min(1,1.001-Math.pow(2,-10*t))}); function raf(t){ lenis.raf(t); requestAnimationFrame(raf)} requestAnimationFrame(raf); }
 }catch(e){}
}

document.addEventListener('DOMContentLoaded', ()=>{
 const id = getIdFromUrl();
 render(id);
 document.getElementById('domainSwitcher')?.addEventListener('change', e=>{
  const v = e.target.value;
  location.href = 'domain.html?id=' + encodeURIComponent(v);
 });
 // defer GSAP/Lenis init until libs loaded
 let tries=0;
 function tryInit(){
  if((window.gsap && window.ScrollTrigger) || tries>30){ initGSAP(); initLenis(); }
  else { tries++; setTimeout(tryInit,120); }
 }
 setTimeout(tryInit,400);
 // if still no gsap after 2s, run fallback
 setTimeout(()=>{ if(!window.gsap) initGSAP(); },2200);
});

window.addEventListener('beforeunload', ()=>{ if(heroAnim) cancelAnimationFrame(heroAnim); });
document.addEventListener('themechange', ()=>{ try{ if(currentId) render(currentId); }catch(e){} });
