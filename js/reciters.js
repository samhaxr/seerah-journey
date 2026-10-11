// Reciters page: settings panel + list with Al-Fatihah samples
const FAT=[1,2,3,4,5,6,7].map(a=>'1:'+a).join(',');
recSelWrap.innerHTML=recSelect('recDefault');
let stF='all';
function draw(){const cur=curRec().id;
 recgrid.innerHTML=RECITERS.filter(r=>stF==='all'||r.st===stF).map(r=>`<article class="reccard${r.id===cur?' cur':''}" data-id="${r.id}">
  <div class="rechead"><b class="notr">${recName(r)}</b>${LG!=='en'?`<small class="notr ren latin">${r.n.en}</small>`:''}<span class="recar notr" lang="ar" dir="rtl">${r.n.ar}</span></div>
  <div class="rectags"><span class="tag ${r.st}">${recStyle(r)}</span><span class="tag kb notr latin">${r.kb} kbps</span>${r.id===cur?`<span class="tag on">${T('In use')}</span>`:''}</div>
  ${r.b?`<p>${T(r.b)}</p>`:''}
  <div class="recbtns"><button class="vbtn" data-verses="${FAT}" data-reciter="${r.id}" aria-label="${T('Sample: Al-Fatihah 1:1-7')} ${recName(r)}">▶ ${T('Sample: Al-Fatihah 1:1-7')}</button>
  <button class="gbtn use" data-use="${r.id}" ${r.id===cur?'disabled':''}>${r.id===cur?T('Selected'):T('Use this reciter')}</button></div>
  <a class="recsrc notr latin" href="https://everyayah.com/data/${r.f}/" target="_blank" rel="noopener">everyayah.com/data/${r.f}/</a></article>`).join('')}
document.addEventListener('click',e=>{const u=e.target.closest('[data-use]');if(u)setRec(u.dataset.use);const f=e.target.closest('[data-st]');if(f){stF=f.dataset.st;document.querySelectorAll('[data-st]').forEach(b=>b.classList.toggle('on',b===f));draw()}});
document.addEventListener('sj-reciter',draw);draw();
