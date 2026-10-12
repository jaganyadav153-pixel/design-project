/* GuidanceAI Mobile Pro — bottom tabbar + drawer polish (10Cr) */
(function(){
  try{
    var isMobile = window.matchMedia('(max-width:1023px)').matches;
    // viewport-fit for notch (idempotent)
    try{
      var vp = document.querySelector('meta[name="viewport"]');
      if(vp && vp.content.indexOf('viewport-fit')===-1) vp.content += ', viewport-fit=cover';
    }catch(e){}

    // figure base path: pages/ vs root vs pages/domains/ (V25 short hubs sit 2 deep)
    var inPages = /\/pages\//.test(location.pathname) || document.querySelector('link[href*="../assets/"]');
    var inHub = /\/pages\/domains\//.test(location.pathname);
    var up = inHub ? '../' : '';
    var P = inPages ? '' : 'pages/';
    var H = inPages ? '../index.html' : '#home';
    if(inPages){ try{ H = '../index.html'; }catch(e){} }

    function here(href){
      var p = location.pathname.toLowerCase();
      href = (href||'').toLowerCase();
      if(href.indexOf('quiz')>-1) return p.indexOf('quiz')>-1;
      if(href.indexOf('explorer')>-1) return p.indexOf('explorer')>-1 || (p.endsWith('/')||p.endsWith('index.html')) && !!document.getElementById('explorer');
      if(href.indexOf('roadmap')>-1) return p.indexOf('roadmap')>-1;
      if(href.indexOf('dashboard')>-1||href.indexOf('vault')>-1) return p.indexOf('dashboard')>-1;
      if(href==='#home'||href.indexOf('index.html')>-1) return p.endsWith('/')||p.endsWith('index.html')||p.endsWith('design project')||p.endsWith('design%20project');
      return false;
    }

    // build tabbar once
    if(!document.getElementById('mTabbar')){
      var bar = document.createElement('nav');
      bar.id = 'mTabbar';
      bar.setAttribute('aria-label','Mobile quick navigation');
      var home = H, atlas = inPages ? up+'explorer.html' : 'pages/explorer.html',
          quiz = inPages ? up+'quiz.html#quiz' : 'pages/quiz.html#quiz',
          road = inPages ? up+'roadmap.html' : 'pages/roadmap.html',
          vault= inPages ? up+'dashboard.html' : 'pages/dashboard.html';
      if(inHub){ try{ home = '../../index.html'; }catch(e){} }
      // on homepage atlas should jump to section, not page
      try{
        var onHome = (location.pathname.endsWith('/')||location.pathname.endsWith('index.html')) && !!document.getElementById('explorer');
        if(onHome && !inPages) atlas = '#explorer';
      }catch(e){}
      bar.innerHTML =
        '<a href="'+home+'" data-m="home"><i class="fa-solid fa-house"></i><span>Home</span></a>'+
        '<a href="'+atlas+'" data-m="atlas"><i class="fa-solid fa-layer-group"></i><span>Atlas</span></a>'+
        '<a class="m-cta" href="'+quiz+'" data-m="quiz" aria-label="Start quiz"><span class="fab"><i class="fa-solid fa-bolt"></i></span><small>Quiz</small></a>'+
        '<a href="'+road+'" data-m="road"><i class="fa-solid fa-road"></i><span>Roadmap</span></a>'+
        '<a href="'+vault+'" data-m="vault"><i class="fa-solid fa-folder-open"></i><span>Vault</span></a>';
      document.body.appendChild(bar);
      // active state
      try{
        var links = bar.querySelectorAll('a');
        var act = null;
        links.forEach(function(a){
          var h = a.getAttribute('href');
          if(h==='quiz.html#quiz'||h==='pages/quiz.html#quiz'){ if(here('quiz')) act=a; }
          else if(h.indexOf('explorer')>-1||h==='#explorer'){ if(here('explorer')) act=a; }
          else if(h.indexOf('roadmap')>-1){ if(here('roadmap')) act=a; }
          else if(h.indexOf('dashboard')>-1){ if(here('dashboard')) act=a; }
          else { if(here('home') && !act && !here('quiz') && !here('roadmap') && !here('dashboard')) act=a; }
        });
        if(act) act.classList.add('active');
        // smooth anchor for #explorer on home
        bar.addEventListener('click', function(e){
          var a = e.target.closest('a'); if(!a) return;
          var h = a.getAttribute('href');
          if(h==='#explorer' && typeof window.scrollToDomains==='function'){ e.preventDefault(); window.scrollToDomains(e); }
          if(h==='#home'){ try{ window.scrollTo({top:0,behavior:'smooth'}); e.preventDefault(); }catch(_){} }
        });
      }catch(e){}
    }

    // drawer: INDEPENDENT toggle (works even if app.js fails) + icon swap
    // inner pages lack lang/role in drawer → clone once so tiny-phone hiding loses nothing
    try{
      var _ls = document.getElementById('langSwitcher');
      var _dr = document.getElementById('mobileDrawer');
      if(_ls && _dr && !_dr.querySelector('select[data-clone="lang"]') && window.matchMedia('(max-width:1023px)').matches){
        var wrap = document.createElement('div');
        wrap.style.cssText = 'display:flex;gap:8px;padding:12px 16px 0;';
        var c1 = _ls.cloneNode(true); c1.removeAttribute('id'); c1.setAttribute('data-clone','lang'); c1.style.cssText='flex:1;min-height:44px;border:1px solid #E2E8F0;border-radius:12px;padding:8px;';
        c1.value = _ls.value;
        c1.addEventListener('change', function(){ _ls.value = c1.value; _ls.dispatchEvent(new Event('change')); });
        _ls.addEventListener('change', function(){ c1.value = _ls.value; });
        wrap.appendChild(c1);
        var _rs = document.getElementById('roleSwitcher');
        if(_rs){
          var c2 = _rs.cloneNode(true); c2.removeAttribute('id'); c2.setAttribute('data-clone','role'); c2.style.cssText='flex:1;min-height:44px;border-radius:12px;padding:8px;background:#0F172A;color:#fff;';
          c2.value = _rs.value;
          c2.addEventListener('change', function(){ _rs.value = c2.value; _rs.dispatchEvent(new Event('change')); });
          _rs.addEventListener('change', function(){ c2.value = _rs.value; });
          wrap.appendChild(c2);
        }
        _dr.insertBefore(wrap, _dr.firstChild);
      }
    }catch(e){}
    try{
      var btn = document.getElementById('mobileMenuBtn');
      var drawer = document.getElementById('mobileDrawer');
      if(btn && drawer){
        // NOTE: app.js owns the toggle. We NEVER toggle here (double-toggle = dead button).
        // We only keep aria + icon in sync via observer (fresh <i> lookup: app.js rewrites innerHTML).
        var sync = function(){
          var open = !drawer.classList.contains('hidden');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
          try{
            var ic = btn.querySelector('i');
            if(ic && !document.body.classList.contains('fa-missing')){
              ic.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            }
          }catch(_){}
        };
        try{
          new MutationObserver(function(){ setTimeout(sync, 0); })
            .observe(drawer, {attributes: true, attributeFilter: ['class']});
        }catch(_){}
        btn.addEventListener('click', function(){ setTimeout(sync, 30); });
        document.addEventListener('keydown', function(e){
          if(e.key==='Escape' && !drawer.classList.contains('hidden')){ setTimeout(sync, 30); }
        });
        window.addEventListener('resize', function(){
          if(window.innerWidth>=1024 && !drawer.classList.contains('hidden')){ setTimeout(sync, 30); }
        });
        sync();
      }
    }catch(e){}

    // lift fixed chat/compare above tabbar even if CSS missed (old webviews)
    try{
      if(isMobile){
        var chat = document.getElementById('chatToggle');
        if(chat){ chat.style.bottom = 'calc(64px + env(safe-area-inset-bottom, 0px) + 12px)'; }
      }
    }catch(e){}

    // Google-compact: Show more/less for Atlas preview (cuts 1600px on mobile)
    try{
      var grid = document.getElementById('domainGrid');
      var isHomePreview = !!document.getElementById('home') && !!document.getElementById('explorer') && typeof window.FRONT_PREVIEW_LIMIT !== 'undefined';
      if(grid && isHomePreview) grid.classList.add('m-preview');
      if(grid && grid.classList.contains('m-preview') && window.matchMedia('(max-width:1023px)').matches && !document.getElementById('mShowMore')){
        var btn = document.createElement('button');
        btn.id = 'mShowMore';
        btn.type = 'button';
        btn.style.cssText = 'width:100%;margin-top:12px;min-height:48px;border-radius:14px;background:#0F172A;color:#fff;font-weight:700;font-size:14.5px;display:none;align-items:center;justify-content:center;gap:8px;';
        var update = function(){
          var exp = grid.classList.contains('m-expanded');
          btn.innerHTML = exp ? 'Show less ↑' : 'Show all 25 tracks ↓';
          // hide the button when nothing is actually hidden (e.g. 4-card preview)
          try{
            var kids = grid.children, hidden = 0;
            for(var i=0;i<kids.length;i++){
              var k = kids[i];
              if(i>=4 && !k.classList.contains('col-span-full') && window.getComputedStyle(k).display==='none') hidden++;
            }
            btn.classList.toggle('m-gone', hidden===0 && !exp);
          }catch(_){}
        };
        btn.addEventListener('click', function(){
          grid.classList.toggle('m-expanded');
          update();
          if(!grid.classList.contains('m-expanded')){
            try{ grid.scrollIntoView({behavior:'smooth', block:'start'}); }catch(_){}
          }
        });
        grid.parentNode.insertBefore(btn, grid.nextSibling);
        update();
        // re-label when grid re-renders (search/filter)
        var obs = new MutationObserver(function(){ update(); });
        try{ obs.observe(grid, {childList:true}); }catch(_){}
      }
    }catch(e){}
    // Google-compact: ultra-short homepage — More toggle for secondary sections
    // Gate with body.m-compact so content is NEVER missing if JS fails
    try{
      var isHome = !!document.getElementById('home') && !!document.getElementById('explorer');
      if(isHome && window.matchMedia('(max-width:1023px)').matches){
        var quizSec = document.getElementById('quiz');
        // only compact AFTER toggle exists
        if(!document.getElementById('mMoreWrap')){
          var wrap = document.createElement('div');
          wrap.id = 'mMoreWrap';
          wrap.innerHTML = '<button id="mMoreBtn" type="button"><span class="lbl">More about GuidanceAI ↓</span></button>';
          if(quizSec && quizSec.parentNode) quizSec.parentNode.insertBefore(wrap, quizSec);
          else if(grid && grid.parentNode) grid.parentNode.appendChild(wrap);
          var mBtn = document.getElementById('mMoreBtn');
          if(mBtn) mBtn.addEventListener('click', function(){
            var show = document.body.classList.toggle('m-show-all');
            try{
              var lbl = mBtn.querySelector('.lbl');
              if(lbl) lbl.textContent = show ? 'Show less ↑' : 'More about GuidanceAI ↓';
              if(show) document.getElementById('features').scrollIntoView({behavior:'smooth', block:'start'});
              else window.scrollTo({top:0, behavior:'smooth'});
            }catch(_){}
          });
        }
        document.body.classList.add('m-compact');
      }
    }catch(e){}

    // 10Cr icon fallback BULLETPROOF: assume FA missing until proven loaded
    // Old check (font-family on <i>) never fired. New: document.fonts + stylesheet status.
    try{
      document.body.classList.add('fa-missing'); // safe default: show emoji
      var faProven = false;
      try{
        if(document.fonts && document.fonts.check){
          // FA6 family names: "Font Awesome 6 Free", "Font Awesome 6 Brands"
          if(document.fonts.check('16px "Font Awesome 6 Free"') || document.fonts.check('16px "Font Awesome 6 Brands"')) faProven = true;
        }
      }catch(_){}
      // stylesheet loaded + not blocked?
      try{
        var faSheets = Array.prototype.filter.call(document.styleSheets || [], function(s){
          try{ return (s.href||'').indexOf('font-awesome')>-1 || (s.href||'').indexOf('fontawesome')>-1; }catch(_){ return false; }
        });
        if(faSheets.length===0) faProven = false; // no FA css at all (offline) → stay missing
      }catch(_){}
      if(faProven) document.body.classList.remove('fa-missing');
      else {
        // re-check after fonts load (slow 3G): upgrade to icons when ready
        try{
          if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){
            try{
              if(document.fonts.check('16px "Font Awesome 6 Free"')) document.body.classList.remove('fa-missing');
            }catch(_){}
          });
        }catch(_){}
        setTimeout(function(){
          try{
            if(document.fonts && document.fonts.check && document.fonts.check('16px "Font Awesome 6 Free"')) document.body.classList.remove('fa-missing');
          }catch(_){}
        }, 2500);
        // inject emoji into icon-only buttons (once)
        var jobs = [
          ['#mobileMenuBtn', '☰'],
          ['#chatToggle', '💬'],
          ['button[onclick*="toggleDark"]', '🌙'],
          ['button[onclick*="startVoice"]', '🎤'],
          ['#passToggle', '👁️'],
          ['#mTabbar a[data-m="home"] i', '🏠'],
          ['#mTabbar a[data-m="atlas"] i', '🗂️'],
          ['#mTabbar a.m-cta span.fab i', '⚡'],
          ['#mTabbar a[data-m="road"] i', '🛣️'],
          ['#mTabbar a[data-m="vault"] i', '📁']
        ];
        jobs.forEach(function(j){
          try{
            document.querySelectorAll(j[0]).forEach(function(el){
              if(el.dataset.faFixed) return;
              el.dataset.faFixed = '1';
              var s = document.createElement('span');
              s.className = 'fa-fallback';
              s.textContent = j[1];
              s.setAttribute('aria-hidden', 'true');
              el.parentNode.insertBefore(s, el.nextSibling);
            });
          }catch(_){}
        });
      }
    }catch(e){}
    // Google-like touch focus: material ripple + scroll focused inputs above keyboard
    try{
      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var touchUI = window.matchMedia('(hover: none)').matches;
      if(touchUI && !reduceMotion){
        document.addEventListener('pointerdown', function(e){
          var t = e.target && e.target.closest ? e.target.closest('a,button') : null;
          if(!t || t.disabled) return;
          try{
            t.classList.add('ripple-host');
            var r = t.getBoundingClientRect();
            var d = Math.max(r.width, r.height);
            var s = document.createElement('span');
            s.className = 'ripple-ink';
            s.style.cssText = 'width:'+d+'px;height:'+d+'px;left:'+(e.clientX-r.left-d/2)+'px;top:'+(e.clientY-r.top-d/2)+'px;';
            t.appendChild(s);
            setTimeout(function(){ s.remove(); }, 550);
          }catch(_){}
        }, {passive:true});
      }
      // focusing an input scrolls it above the keyboard (Google search behavior)
      ['explorerSearch','commandInput','chatInput','mMath','mProg'].forEach(function(id){
        var el = document.getElementById(id);
        if(!el || el.dataset.focusScroll) return;
        el.dataset.focusScroll = '1';
        el.addEventListener('focus', function(){
          setTimeout(function(){
            try{ el.scrollIntoView({behavior:'smooth', block:'center'}); }catch(_){}
          }, 320);
        });
      });
    }catch(e){}
    // Microsoft/Google-grade modal focus: trap Tab, ESC closes, focus returns to opener
    // Works for domain/compare/video/command/gate/onboard/chat on every page.
    try{
      var MODALS = ['domainModal','compareModal','videoModal','commandPalette','gateModal','onboardModal','chatWindow'];
      var opener = null;
      var focusables = function(root){
        try{
          return Array.prototype.filter.call(root.querySelectorAll('a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])'), function(el){
            return !el.disabled && el.offsetParent !== null;
          });
        }catch(_){ return []; }
      };
      var topOpen = function(){
        for(var i=MODALS.length-1;i>=0;i--){
          var m = document.getElementById(MODALS[i]);
          if(m && !m.classList.contains('hidden')) return m;
        }
        return null;
      };
      MODALS.forEach(function(id){
        var m = document.getElementById(id);
        if(!m) return;
        try{
          new MutationObserver(function(){
            var open = !m.classList.contains('hidden');
            document.body.classList.toggle('m-modal-open', !!topOpen());
            if(open){
              if(!opener) opener = document.activeElement;
              setTimeout(function(){
                var f = focusables(m);
                var auto = m.querySelector('#commandInput,#chatInput');
                (auto || f[0] || m).focus && ((auto || f[0] || m).focus({preventScroll:true}));
              }, 60);
            } else if(!topOpen() && opener && opener.focus){
              try{ opener.focus({preventScroll:true}); }catch(_){}
              opener = null;
            }
          }).observe(m, {attributes:true, attributeFilter:['class']});
        }catch(_){}
      });
      document.addEventListener('keydown', function(e){
        var m = topOpen();
        if(!m) return;
        if(e.key === 'Escape'){
          // chat + command close natively; others hide + restore
          if(m.id === 'chatWindow'){ m.classList.add('hidden'); }
          else if(m.id === 'commandPalette'){ m.classList.add('hidden'); }
          else m.classList.add('hidden');
          document.body.classList.toggle('m-modal-open', !!topOpen());
          if(!topOpen() && opener && opener.focus){ try{ opener.focus({preventScroll:true}); }catch(_){} opener = null; }
        } else if(e.key === 'Tab'){
          var f = focusables(m);
          if(!f.length) return;
          var first = f[0], last = f[f.length-1];
          if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
          else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
        }
      }, true);
    }catch(e){}
    // Handbook pages: reading progress + TOC spy (sticky jump-nav highlights position)
    // V25: tab sub-pages (#hbTabs) replaced anchor TOC (#hbToc) — progress works for both,
    // anchor spy only for legacy #hbToc (tab buttons own their active state in domain-tabs.js).
    try{
      var toc = document.getElementById('hbTabs') || document.getElementById('hbToc');
      if(toc){
        var bar = document.createElement('div');
        bar.id = 'mReadBar';
        document.body.appendChild(bar);
        var secs = ['paradigm','pillars','roadmap','chronology','balanced','studentLife','interviewKit','careers','govtExams','researcher']
          .map(function(id){ return document.getElementById(id); }).filter(Boolean);
        var onScroll = function(){
          try{
            var h = document.documentElement;
            var max = h.scrollHeight - h.clientHeight;
            var p = max > 0 ? (h.scrollTop / max) * 100 : 0;
            bar.style.display = 'block';
            bar.style.width = p + '%';
          }catch(_){}
        };
        document.addEventListener('scroll', onScroll, {passive:true});
        onScroll();
        try{
          var links = toc.querySelectorAll('a[href^="#"]');
          var spy = new IntersectionObserver(function(entries){
            entries.forEach(function(en){
              if(en.isIntersecting){
                links.forEach(function(a){
                  a.classList.toggle('hb-active', a.getAttribute('href') === '#' + en.target.id);
                });
              }
            });
          }, {rootMargin:'-40% 0px -55% 0px'});
          secs.forEach(function(s){ spy.observe(s); });
        }catch(_){}
      }
    }catch(e){}
    // V25b — header balance fallback for LAPTOP browsers without text-wrap:balance
    // (Chrome/Edge <114, Safari <17.5, Firefox <121 ignore it, so the old orphan-wrap
    // persists there while phones look fixed). Modern browsers skip via the CSS.supports gate.
    // Splits wrapped #heroTitle / .hub-title at the middle word gap — never 1-word last line.
    try{
      var balNative = (window.CSS && window.CSS.supports && window.CSS.supports('text-wrap: balance')) ? true : false;
      if(!balNative){
        var balOne = function(el){
          try{
            if(!el || !el.textContent || el.textContent.indexOf(' ') === -1) return;
            if(el.dataset.balSrc == null) el.dataset.balSrc = el.textContent;
            var src = el.dataset.balSrc;
            el.textContent = src; // reset previous <br>
            var cs = window.getComputedStyle ? getComputedStyle(el) : null;
            var fs = cs ? parseFloat(cs.fontSize) : 20;
            var lh = cs ? parseFloat(cs.lineHeight) : NaN;
            if(isNaN(lh)) lh = fs * 1.2;
            if(el.offsetHeight <= lh * 1.35 && el.scrollWidth <= el.clientWidth + 2) return; // one line: nothing to do
            var words = src.split(/\s+/);
            if(words.length < 4) return;
            var total = src.length, bi = Math.ceil(words.length / 2), best = 1e9;
            for(var i = 1; i < words.length; i++){
              var left = words.slice(0, i).join(' ').length;
              var score = Math.abs(left - (total - left));
              if(words.length - i === 1) score += 30; // never strand the last word alone
              if(score < best){ best = score; bi = i; }
            }
            el.innerHTML = '';
            el.appendChild(document.createTextNode(words.slice(0, bi).join(' ')));
            el.appendChild(document.createElement('br'));
            el.appendChild(document.createTextNode(words.slice(bi).join(' ')));
          }catch(_){}
        };
        var balAll = function(){
          try{
            Array.prototype.forEach.call(document.querySelectorAll('#heroTitle, .hub-title'), balOne);
          }catch(_){}
        };
        var balT = null;
        var balKick = function(){ clearTimeout(balT); balT = setTimeout(balAll, 120); };
        document.addEventListener('DOMContentLoaded', balKick);
        try{ if(document.fonts && document.fonts.ready) document.fonts.ready.then(balKick); }catch(_){}
        window.addEventListener('load', balKick);
        window.addEventListener('resize', balKick);
        try{
          var ht = document.getElementById('heroTitle');
          if(ht && window.MutationObserver) new MutationObserver(balKick).observe(ht, {childList: true, characterData: true, subtree: true});
        }catch(_){}
        setTimeout(balAll, 900);
      }
    }catch(e){}
    // Lenis-proof nested scrollers: smooth-scroll hijackers must ignore swipe rows
    try{
      document.querySelectorAll('#hbTabs > div #hbTabBar, #hbToc > div, #pillarsGrid, #phasesGrid, #features div.grid, section .mt-6.grid.md\\:grid-cols-3, .gantt-scroll, section#explorer .sticky, section#resources .flex.flex-wrap.gap-2, #domainGrid').forEach(function(el){
        el.setAttribute('data-lenis-prevent', '');
        el.style.overscrollBehaviorX = 'contain';
      });
      // chip taps glide exactly (no native-jump vs Lenis fight) — legacy anchor TOC only
      var hbT = document.getElementById('hbToc');
      if(hbT) hbT.addEventListener('click', function(e){
        var a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
        if(!a) return;
        var t = document.querySelector(a.getAttribute('href'));
        if(!t) return;
        e.preventDefault();
        try{ t.scrollIntoView({behavior:'smooth', block:'start'}); }catch(_){ t.scrollIntoView(); }
        try{ history.replaceState(null, '', a.getAttribute('href')); }catch(_){}
      });
    }catch(e){}
  }catch(err){ /* mobile-nav silent */ }
})();
