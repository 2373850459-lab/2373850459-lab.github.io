(() => {
  const projects = (window.PORTFOLIO_PROJECTS || []).slice().sort((a,b)=>(a.sortOrder??999)-(b.sortOrder??999));
  const $ = (s, root=document) => root.querySelector(s);
  const esc = (v='') => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const linkTo = p => p.caseStudyPath || `case-${encodeURIComponent(p.slug)}.html`;
  const card = (p,i) => `<article class="project-card" data-category="${esc(p.category)}" data-search="${esc([p.title,p.english,p.subtitle,p.summary,p.category,...p.tags].join(' ').toLowerCase())}"><a class="project-card-link" href="${linkTo(p)}"><div class="project-image"><img src="${esc(p.cover)}" alt="${esc(p.coverAlt||p.title)}" loading="lazy"></div><div class="project-info"><h3>${esc(p.title)} <span class="project-number">/ 0${i+1}</span></h3><span class="project-subtitle">${esc(p.subtitle)}</span><div class="project-tags">${(p.tags||[]).slice(0,4).map(t=>`<span>${esc(t)}</span>`).join('')}</div></div></a></article>`;
  function renderHome(){
    const root=$('#featured-projects'); if(!root)return;
    const featured=projects.filter(p=>p.featured).slice(0,4);
    root.innerHTML=featured.map((p,i)=>card(p,i)).join('');
    const count=$('#home-project-count'); if(count)count.textContent=String(featured.length).padStart(2,'0');
    const range=$('#featured-range'); if(range)range.textContent=featured.length?`01 — ${String(featured.length).padStart(2,'0')}`:'00';
  }
  function renderWork(){
    const root=$('#all-projects'); if(!root)return;
    const filterRoot=$('#project-filters'), search=$('#project-search'), results=$('#results-line');
    if(!filterRoot || !search || !results)return;
    const categories=['全部',...new Set(projects.map(p=>p.category).filter(Boolean))];
    let active='全部', query='';
    filterRoot.innerHTML=categories.map((c,i)=>`<button class="filter-button" type="button" data-filter="${esc(c)}" aria-pressed="${i===0?'true':'false'}">${esc(c)}</button>`).join('');
    function draw(){
      const filtered=projects.filter(p=>(active==='全部'||p.category===active)&&([p.title,p.english,p.subtitle,p.summary,p.category,...(p.tags||[])].join(' ').toLowerCase().includes(query)));
      root.innerHTML=filtered.length?filtered.map((p,i)=>card(p,i)).join(''):`<div class="empty-state">没有找到匹配的项目。可以尝试其他关键词或分类。</div>`;
      results.textContent=`显示 ${filtered.length} / ${projects.length} 个项目`;
    }
    filterRoot.addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;active=b.dataset.filter;filterRoot.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));draw();});
    search.addEventListener('input',()=>{query=search.value.trim().toLowerCase();draw();});
    draw();
  }
  const renderParagraphs = a => (a||[]).map(t=>`<p class="body-copy">${esc(t)}</p>`).join('');
  const renderImages = a => {if(!a||!a.length)return '';const cls=a.length===1?'one':a.some(x=>x.size==='wide')?'':'three';return `<div class="visual-grid ${cls}">${a.map(x=>`<figure class="visual-card ${x.size==='wide'?'wide':''}"><a href="${esc(x.src)}" data-zoom data-caption="${esc(x.caption||x.alt||'')}" aria-label="放大查看：${esc(x.alt||'项目图片')}"><img src="${esc(x.src)}" alt="${esc(x.alt||'项目图片')}" loading="lazy"></a>${x.caption?`<figcaption>${esc(x.caption)}</figcaption>`:''}</figure>`).join('')}</div>`;};
  const renderTimeline = a => a?.length?`<div class="timeline">${a.map((x,i)=>`<div class="timeline-item"><strong>${esc(x[0])}</strong><p>${esc(x[1])}</p></div>`).join('')}</div>`:'';
  const renderComparison = a => a?.length?`<div class="comparison-list">${a.map(x=>`<div class="comparison-item"><strong>${esc(x[0])}</strong><p><b>问题 / 考量</b>${esc(x[1])}</p><p><b>设计回应</b>${esc(x[2])}</p></div>`).join('')}</div>`:'';
  const renderBullets = a => a?.length?`<ul class="bullet-list">${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'';
  const renderStats = a => a?.length?`<div class="stat-grid">${a.map(x=>`<div class="stat-card"><b>${esc(x[0])}</b><span>${esc(x[1])}</span></div>`).join('')}</div>`:'';
  function renderCase(){
    const root=$('#case-root'); if(!root)return;
    const slug=document.body.dataset.slug || new URLSearchParams(location.search).get('slug');
    const p=projects.find(x=>x.slug===slug);
    if(!p){root.innerHTML=`<div class="page-intro"><span class="eyebrow">CASE NOT FOUND</span><h1>暂未找到项目<span class="period">.</span></h1><p>项目可能已移动，或链接中的 slug 不存在。</p><a class="button button-dark" href="work.html">返回作品列表</a></div>`;return;}
    document.title=`${p.title} — ${p.subtitle} | Portfolio`;
    document.documentElement.style.setProperty('--case-accent',p.accent||'#526b59');
    document.documentElement.style.setProperty('--case-soft',p.accentSoft||'#e7ece5');
    const sections=p.sections||[];
    const meta=(p.meta||[]).map(m=>`<div><dt>${esc(m[0])}</dt><dd>${esc(m[1])}</dd></div>`).join('');
    const toc=sections.map(s=>`<a href="#${esc(s.id)}">${esc(s.eyebrow.split('/').pop().trim())} · ${esc(s.title.replace(/[。！？].*$/,''))}</a>`).join('');
    const content=sections.map(s=>`<section class="case-section" id="${esc(s.id)}"><header class="case-section-head"><span class="eyebrow">${esc(s.eyebrow)}</span><h2>${esc(s.title)}</h2><p class="lead">${esc(s.lead||'')}</p></header>${renderParagraphs(s.paragraphs)}${renderTimeline(s.timeline)}${renderComparison(s.comparison)}${renderBullets(s.bullets)}${renderStats(s.stats)}${s.note?`<aside class="case-note ${esc(s.note.type||'')}"><strong>${esc(s.note.label)}</strong><p>${esc(s.note.text)}</p></aside>`:''}${renderImages(s.images)}${s.videoBlock&&p.video?`<div class="video-wrap"><video controls preload="metadata" poster="${esc(p.videoPoster||'')}"><source src="${esc(p.video)}" type="video/mp4">当前浏览器无法播放此视频。</video><p>原始项目录屏：附件核验 V02。视频展示的是原型交互，不代表真实业务系统已上线。</p></div>`:''}</section>`).join('');
    const links=(p.links||[]).map(l=>`<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} <span>↗</span></a>`).join('');
    const related=projects.filter(x=>x.slug!==p.slug).slice(0,2).map(x=>`<a class="related-card" href="${linkTo(x)}"><img src="${esc(x.cover)}" alt="${esc(x.coverAlt||x.title)}" loading="lazy"><strong>${esc(x.title)} · ${esc(x.subtitle)}</strong><span>${esc(x.category)} / 查看案例 ↗</span></a>`).join('');
    root.innerHTML=`<div class="case-hero" style="--case-accent:${esc(p.accent)};--case-soft:${esc(p.accentSoft)}"><a class="case-back" href="work.html">← 返回全部作品</a><div class="case-hero-top"><div><span class="case-category">${esc(p.category)} / CASE STUDY</span><p class="case-english">${esc(p.english)}</p><h1 class="case-title">${esc(p.title)}</h1><p class="case-subtitle">${esc(p.subtitle)}</p><p class="case-summary">${esc(p.summary)}</p></div><aside class="case-hero-side"><b>CASE / ${String(p.sortOrder||1).padStart(2,'0')}</b><p>通过具体场景、交互决策和验证边界，展示项目如何从问题走向体验方案。</p></aside></div><img class="case-cover" src="${esc(p.cover)}" alt="${esc(p.coverAlt||p.title)}"><dl class="case-meta">${meta}</dl>${links?`<div class="case-links">${links}</div>`:''}</div><div class="case-layout"><nav class="case-toc" aria-label="案例章节"><div class="case-toc-title">ON THIS PAGE</div>${toc}</nav><div class="case-sections">${content}<section class="related-section"><h2>继续浏览其他项目</h2><div class="related-grid">${related}</div></section></div></div>`;
    const tocLinks=[...root.querySelectorAll('.case-toc a')];
    if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){tocLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}});},{rootMargin:'-20% 0px -70% 0px'});sections.forEach(s=>{const el=document.getElementById(s.id);if(el)observer.observe(el);});}
    root.addEventListener('click',e=>{const a=e.target.closest('[data-zoom]');if(!a)return;e.preventDefault();const d=$('#image-viewer');if(!d)return;const img=d.querySelector('img');img.src=a.href;img.alt=a.querySelector('img')?.alt||'';d.querySelector('p').textContent=a.dataset.caption||img.alt;if(d.showModal)d.showModal();else window.open(a.href,'_blank');});
  }
  function nav(){
    const toggle=$('.menu-toggle'), mainNav=$('#main-nav');
    if(!toggle || !mainNav)return;
    const closeMenu=(restoreFocus=false)=>{
      mainNav.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label','打开导航菜单');
      if(restoreFocus)toggle.focus();
    };
    toggle.addEventListener('click',()=>{
      const open=mainNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
      toggle.setAttribute('aria-label',open?'关闭导航菜单':'打开导航菜单');
    });
    mainNav.addEventListener('click',e=>{
      if(e.target.closest('a'))closeMenu(false);
    });
    document.addEventListener('click',e=>{
      if(mainNav.classList.contains('open') && !mainNav.contains(e.target) && !toggle.contains(e.target))closeMenu(false);
    });
    document.addEventListener('keydown',e=>{
      if(e.key==='Escape' && mainNav.classList.contains('open'))closeMenu(true);
    });
    window.addEventListener('resize',()=>{
      if(window.innerWidth>620 && mainNav.classList.contains('open'))closeMenu(false);
    });
  }
  nav();
  const viewer=$('#image-viewer');
  if(viewer)viewer.addEventListener('click',e=>{if(e.target===viewer && viewer.open)viewer.close();});
  renderHome();renderWork();renderCase();
})();
