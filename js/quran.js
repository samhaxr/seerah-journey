// Surah index: all 114 surahs, search + Makki/Madani filter, continue reading
const sName=x=>LG==='en'?x.tl:x.tlx[LG];
cont.innerHTML=contRead();
let pf='all';
const norm=t=>(t||'').toLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640'ʿʾ’\-\s]/g,'').replace(/ٱ|أ|إ|آ/g,'ا').replace(/[ىي]/g,'ی').replace(/ة/g,'ہ');
function draw(){const q=norm(qq.value);let n=0;
 sgrid.innerHTML=QINDEX.filter(x=>(pf==='all'||x.place===pf)&&(!q||String(x.s)===qq.value.trim()||[x.tl,x.ar,x.tlx.ur,x.tlx.hi,x.mean.en,x.mean.ur,x.mean.hi].some(v=>norm(v).includes(q)))).map(x=>{n++;return `<a class="scard" href="surah.html?s=${x.s}">
  <span class="snum notr">${LG==='en'?x.s:AIN(x.s)}</span><span class="smid"><b class="notr">${sName(x)}</b><small class="notr">${x.mean[LG]||x.mean.en}</small><small class="smeta">${T('# ayahs').replace('#',x.n)} · ${T(x.place==='makkah'?'Makki':'Madani')}</small></span>
  <span class="sar notr" lang="ar" dir="rtl">${x.ar}</span></a>`}).join('');
 qcount.textContent=T('# surahs').replace('#',n)}
qq.oninput=draw;document.addEventListener('click',e=>{const b=e.target.closest('[data-p]');if(!b)return;pf=b.dataset.p;document.querySelectorAll('[data-p]').forEach(x=>x.classList.toggle('on',x===b));draw()});
draw();
