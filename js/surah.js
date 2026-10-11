// Surah reader: lazy-loads data/quran/NNN.js (works over http and file://), audio via the shared verse player.
// content-visibility makes far-off heights estimates, so re-check the position after scrolling
function goTo(el,smooth,block='center'){el.scrollIntoView({block,behavior:smooth?'smooth':'auto'});[350,800,1500].forEach(t=>setTimeout(()=>{const r=el.getBoundingClientRect();if(r.top<60||r.bottom>innerHeight)el.scrollIntoView({block})},t))}
const S=Math.min(114,Math.max(1,parseInt(new URLSearchParams(location.search).get('s'))||1));
const IX=QINDEX[S-1],sName=x=>LG==='en'?x.tl:x.tlx[LG];
const TRN={en:'Saheeh International',ur:'فتح محمد جالندھری',hi:'मौलाना अज़ीज़ुल हक़ अल-उमरी'};
const TRL={en:'Saheeh International',ur:'جالندھری',hi:'अल-उमरी'};
const BISM='بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ';
document.title=`${sName(IX)} · ${T('Seerah Journey')}`;
const sl=(x,cls)=>x?`<a class="${cls}" href="surah.html?s=${x.s}" rel="${cls==='sprev'?'prev':'next'}">${cls==='sprev'?'‹ ':''}<span class="notr">${sName(x)}</span>${cls==='snext'?' ›':''}</a>`:'<span></span>';
shead.innerHTML=`<div class="shnav">${sl(QINDEX[S-2],'sprev')}<a class="sidx" href="quran.html">${T('All surahs')}</a>${sl(QINDEX[S],'snext')}</div>
 <h1 class="shar notr" lang="ar" dir="rtl">${IX.ar}</h1><h2 class="notr">${S}. ${sName(IX)}</h2><p><span class="notr">${IX.mean[LG]||IX.mean.en}</span> · ${T('# ayahs').replace('#',IX.n)} · ${T(IX.place==='makkah'?'Makki':'Madani')}</p>
 <p class="trby" id="trby"></p>`;
snav.innerHTML=sl(QINDEX[S-2],'sprev')+sl(QINDEX[S],'snext');
document.querySelector('.qrec').innerHTML=`<label>${T('Reciter')}: ${recSelect('qRecSel')}</label>`;
// settings
const R=document.getElementById('reader');
let fs=+localStorage.getItem('sj_qfs')||(innerWidth<600?26:30);const setFs=v=>{fs=Math.min(52,Math.max(20,v));R.style.setProperty('--qfs',fs+'px');localStorage.setItem('sj_qfs',fs)};setFs(fs);
qMinus.onclick=()=>setFs(fs-3);qPlus.onclick=()=>setFs(fs+3);
// translations: any combination of en/ur/hi, default = site language, remembered
const TRS=()=>{try{const v=JSON.parse(localStorage.getItem('sj_qtrs'));if(Array.isArray(v))return v.filter(x=>TRN[x])}catch(e){}return [LG]};
function setTrs(v){localStorage.setItem('sj_qtrs',JSON.stringify(v));['en','ur','hi'].forEach(l=>R.classList.toggle('tr-'+l,v.includes(l)));R.classList.toggle('notrans',!v.length);
 document.querySelectorAll('[data-tr]').forEach(b=>{const on=v.includes(b.dataset.tr);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
 trby.innerHTML=v.length?`${T('Translation')}: `+v.map(l=>`<span class="notr" lang="${l}">${TRN[l]}</span>`).join(' · '):''}
document.querySelectorAll('[data-tr]').forEach(b=>b.onclick=()=>{const v=TRS(),l=b.dataset.tr;setTrs(v.includes(l)?v.filter(x=>x!==l):['en','ur','hi'].filter(x=>x===l||v.includes(x)))});
qRep.value=localStorage.getItem('sj_qrep')||'none';VP.repeat=qRep.value;qRep.onchange=()=>{localStorage.setItem('sj_qrep',qRep.value);VP.repeat=qRep.value};
// data
let KEYS=[];
function render(d){KEYS=d.v.map(v=>S+':'+v.a);
 R.innerHTML=(S!==1&&S!==9?`<p class="bism notr" lang="ar" dir="rtl">${BISM}</p>`:'')+d.v.map(v=>`<article class="ayah" id="a${v.a}" data-k="${S}:${v.a}">
  <div class="aytools"><span class="ayno notr">${S}:${v.a}</span><button class="ayplay" data-from="${S}:${v.a}" aria-label="${T('Play from ayah')} ${v.a}">▶</button></div>
  <p class="ayar notr" lang="ar" dir="rtl">${v.ar} <span class="aymark">﴿${AIN(v.a)}﴾</span></p>
  ${['en','ur','hi'].map(l=>`<p class="aytr notr t-${l}" lang="${l}" dir="${l==='ur'?'rtl':'ltr'}"><span class="trlab">${TRL[l]}</span>${v[l]}</p>`).join('')}</article>`).join('');
 const h=location.hash.match(/^#a(\d+)$/);if(h){const el=document.getElementById('a'+h[1]);if(el)requestAnimationFrame(()=>goTo(el,false,'start'))}
 watch()}
setTrs(TRS());
function load(){const sc=document.createElement('script');sc.src=`data/quran/${String(S).padStart(3,'0')}.js`;
 sc.onload=()=>render(QDATA[S]);sc.onerror=()=>{qload.textContent=T('Could not load this surah.')};document.head.appendChild(sc)}
load();
// remember position
const save=a=>localStorage.setItem('sj_lastread',JSON.stringify({s:S,a:+a,tl:IX.tl,tlx:IX.tlx}));
let saveT;function watch(){const io=new IntersectionObserver(es=>{clearTimeout(saveT);saveT=setTimeout(()=>{const vis=[...R.querySelectorAll('.ayah')].find(e=>{const r=e.getBoundingClientRect();return r.bottom>90&&r.top<innerHeight*0.6});if(vis&&!playing())save(vis.id.slice(1))},400)});R.querySelectorAll('.ayah').forEach(e=>io.observe(e))}
// audio
const playing=()=>!VP.el.paused&&VP.keys&&VP.keys[0]===KEYS[0];
qPlay.onclick=()=>{if(VP.keys===KEYS&&VP.queue.length){VP.toggle();return}VP.playAt(KEYS,KEYS[0],qPlay)};
R.addEventListener('click',e=>{const b=e.target.closest('[data-from]');if(b)VP.playAt(KEYS,b.dataset.from,b)});
let userScroll=0;addEventListener('wheel',()=>userScroll=Date.now(),{passive:true});addEventListener('touchmove',()=>userScroll=Date.now(),{passive:true});
document.addEventListener('vp-item',e=>{R.querySelectorAll('.ayah.cur').forEach(x=>x.classList.remove('cur'));const d=e.detail;
 if(!d||!d.k.startsWith(S+':'))return;const el=document.querySelector(`.ayah[data-k="${d.k}"]`);if(!el)return;el.classList.add('cur');save(d.k.split(':')[1]);
 if(Date.now()-userScroll>4000)goTo(el,!matchMedia('(prefers-reduced-motion: reduce)').matches)});
const btnUi=()=>{qPlay.textContent=(VP.keys===KEYS&&!VP.el.paused)?'❚❚ '+T('Pause'):'▶ '+T('Play surah')};['play','pause','ended'].forEach(ev=>VP.el.addEventListener(ev,btnUi));btnUi();
