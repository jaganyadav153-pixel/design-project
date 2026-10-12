// domain-tabs.js — Friend feedback fix: long handbook -> 6 bite-size interactive sub-pages
// Each tab is a sub-page with own UI, deep-linked via ?id=<short-slug>&tab=<name>
// Short slugs come from handbooks.js (ai, ml, data-science, ... quantum-computing)
(function(){
  var TABS = ['overview','learn','roadmap','careers','interview','life'];
  var TAB_META = {
    overview:  { n: 1, label: 'Overview',       hint: 'Should you like the daily work? Paradigm + honest pros/cons.', sections: ['paradigm','balanced'] },
    learn:     { n: 2, label: 'Learn',          hint: 'What you actually learn & build — 5 pillars + study guide.',  sections: ['pillars'] },
    roadmap:   { n: 3, label: 'Roadmap',        hint: 'Your 36-week step-by-step plan. Follow in order.',            sections: ['roadmap'] },
    careers:   { n: 4, label: 'Careers',        hint: 'Where you get hired & how much — salary, companies, govt.',   sections: ['careers','govtExams','researcher'] },
    interview: { n: 5, label: 'Interview',      hint: 'Crack the top offer — previous Qs + coding + 8-week plan.',   sections: ['interviewKit'] },
    life:      { n: 6, label: 'Life & Future',  hint: 'Can you see yourself here? Student life + history → future.', sections: ['studentLife','chronology'] }
  };
  function getTab(){
    try{
      var t = new URLSearchParams(location.search).get('tab');
      if(t){ t = t.toLowerCase(); if(TAB_META[t]) return t; }
      var h = (location.hash||'').replace('#','').toLowerCase();
      if(TAB_META[h]) return h;
    }catch(e){}
    return 'overview';
  }
  function shortSlug(){
    try{
      if(typeof getIdFromUrl === 'function' && typeof handbooks !== 'undefined'){
        var id = getIdFromUrl();
        var hb = handbooks[id];
        if(hb && hb.slug) return hb.slug;
        return String(id).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
      }
    }catch(e){}
    try{ return new URLSearchParams(location.search).get('id') || 'ai'; }catch(e){ return 'ai'; }
  }
  function shortUrl(tab){
    return 'domain.html?id=' + encodeURIComponent(shortSlug()) + '&tab=' + (tab || getTab());
  }
  function applyTab(tab, push, scroll){
    if(typeof scroll === 'undefined') scroll = true;
    if(!TAB_META[tab]) tab = 'overview';
    var meta = TAB_META[tab];
    // show / hide sections
    var all = [];
    Object.keys(TAB_META).forEach(function(k){ TAB_META[k].sections.forEach(function(s){ if(all.indexOf(s)<0) all.push(s); }); });
    all.forEach(function(id){
      var el = document.getElementById(id);
      if(!el) return;
      el.style.display = meta.sections.indexOf(id) >= 0 ? '' : 'none';
    });
    // tab bar active
    document.querySelectorAll('.hb-tab').forEach(function(b){
      var on = b.dataset.tab === tab;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.className = 'hb-tab px-4 py-2.5 rounded-xl text-sm border whitespace-nowrap min-h-[44px] ' +
        (on ? 'font-bold bg-slate-900 text-white border-slate-900 shadow' : 'font-semibold bg-white dark:bg-slate-800 hover:border-indigo-300');
    });
    // progress
    var bar = document.getElementById('hbProgressBar');
    var lab = document.getElementById('hbProgressLabel');
    var step = document.getElementById('hbStepLabel');
    var hint = document.getElementById('hbTabHint');
    if(bar) bar.style.width = Math.round(meta.n / TABS.length * 100) + '%';
    if(lab) lab.textContent = meta.n + '/' + TABS.length + ' · ' + meta.label;
    if(step) step.textContent = 'Part ' + meta.n + ' of ' + TABS.length + ' — ' + meta.hint;
    if(hint) hint.textContent = meta.hint + ' (' + meta.n + '/' + TABS.length + ')';
    // prev/next disabled states
    var prev = document.getElementById('hbPrevBtn');
    var next = document.getElementById('hbNextBtn');
    if(prev) prev.disabled = (meta.n === 1);
    if(prev) prev.style.opacity = (meta.n === 1) ? '.4' : '1';
    if(next) next.textContent = (meta.n === TABS.length) ? 'Finish → Quiz' : 'Next: ' + TAB_META[TABS[meta.n]].label + ' →';
    // url (no reload)
    try{
      var url = shortUrl(tab);
      if(push) history.pushState({tab: tab}, '', url);
      else history.replaceState({tab: tab}, '', url);
      var can = document.querySelector('link[rel="canonical"]');
      if(can) can.setAttribute('href', location.origin + location.pathname + '?id=' + encodeURIComponent(shortSlug()) + '&tab=' + tab);
      document.title = (document.getElementById('heroTitle')?.textContent || 'Domain') + ' — ' + meta.label + ' | GuidanceAI';
    }catch(e){}
    // redraw charts in newly visible tab (Chart.js needs visible canvas)
    setTimeout(function(){
      try{
        if(typeof currentId !== 'undefined' && currentId && typeof scheduleCharts === 'function' && typeof handbooks !== 'undefined'){
          var hb = handbooks[currentId];
          var m = (typeof domainMeta === 'function') ? domainMeta(currentId) : null;
          if(hb) scheduleCharts(hb, m);
        }
      }catch(e){}
      try{ Object.values(window.charts || {}).forEach(function(c){ try{ c.resize(); }catch(e){} }); }catch(e){}
    }, 120);
    // scroll to the TOP OF THE NEW TAB'S FIRST SECTION (not the tab bar):
    // tabs have very different heights, so keeping the old scrollY lands "somewhere".
    // Offset = measured sticky nav + sticky tab bar, so the heading clears both.
    if(scroll){
      setTimeout(function(){
        try{
          var first = null;
          for(var i = 0; i < meta.sections.length; i++){
            var s = document.getElementById(meta.sections[i]);
            if(s && s.style.display !== 'none'){ first = s; break; }
          }
          if(!first) return;
          var nav = document.querySelector('nav.sticky');
          var bar = document.getElementById('hbTabs');
          var off = (nav ? nav.offsetHeight : 64) + (bar ? bar.offsetHeight : 120) + 10;
          var reduce = false;
          try{ reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){}
          var top = first.getBoundingClientRect().top + (window.pageYOffset || 0) - off;
          window.scrollTo({top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth'});
        }catch(e){}
      }, 60);
    }
  }
  window.hbGo = function(dir){
    var cur = getTab();
    var i = TABS.indexOf(cur) + dir;
    if(i < 0) i = 0;
    if(i >= TABS.length){
      location.href = 'quiz.html#quiz';
      return;
    }
    applyTab(TABS[i], true);
  };
  window.hbShare = function(){
    var url = location.origin + location.pathname + '?id=' + encodeURIComponent(shortSlug()) + '&tab=' + getTab();
    try{
      if(location.hostname === '' || location.protocol === 'file:') url = location.href.split('#')[0];
    }catch(e){}
    try{
      navigator.clipboard.writeText(url).then(function(){ toast('Short link copied: ' + url); }, function(){ toast(url); });
    }catch(e){ try{ toast(url); }catch(_){} }
  };
  window.hbShortUrl = shortUrl;
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.hb-tab').forEach(function(b){
      b.addEventListener('click', function(){ applyTab(b.dataset.tab, true); });
    });
    // initial: honor ?tab=, then normalize long ?id=Quantum%20Computing -> short slug (no scroll yank)
    applyTab(getTab(), false, false);
  });
  window.addEventListener('popstate', function(){ applyTab(getTab(), false, false); });
})();
