let cur=3;const track=document.getElementById('track');
track.innerHTML=EVENTS.map((e,i)=>`<div class="ev" data-i="${i}"><div class="t">${e.t}</div>${e.lab||e.y}<span class="d evd" title="${T(e.t)}">${evIcon(e.t,44)}</span></div>`).join('');
const els=[...track.children];
const lineY=()=>{const d=track.querySelector('.ev .evd');if(d){const r=d.getBoundingClientRect();track.style.setProperty('--ly',(r.top-track.getBoundingClientRect().top+r.height/2-1)+'px')}};lineY();addEventListener('resize',lineY);document.fonts&&document.fonts.ready.then(lineY);
function vis(){const q=document.getElementById('q').value.toLowerCase(),eras=[...document.querySelectorAll('.ef:checked')].map(c=>c.value);
return EVENTS.map((e,i)=>eras.includes(e.era)&&(e.t+" "+e.txt+" "+e.y+" "+e.from+" "+e.to).toLowerCase().includes(q))}
// Schematic of western Arabia: equirectangular projection (lon scaled by cos(mid-lat)). Wider view used when Jerusalem is involved.
const VIEWS={hejaz:{lon0:36.4,lon1:42.5,lat0:20.4,lat1:26.4,K:35.5},isra:{lon0:33.6,lon1:41.4,lat0:20.6,lat1:32.6,K:18}};
let V=VIEWS.hejaz;const CXf=v=>Math.cos((v.lat0+v.lat1)/2*Math.PI/180);
const P=([la,lo])=>[+((lo-V.lon0)*CXf(V)*V.K).toFixed(1),+((V.lat1-la)*V.K).toFixed(1)];
const MP={Makkah:{ll:[21.4225,39.8262],side:'r'},Madinah:{ll:[24.4672,39.6111],side:'r'},Badr:{ll:[23.78,38.79],side:'l'},"Mount Uhud":{ll:[24.50,39.61],side:'r',near:'Madinah'},
 Hudaybiyyah:{ll:[21.44,39.64],side:'l'},Taif:{ll:[21.27,40.42],side:'r'},Khaybar:{ll:[25.70,39.29],side:'r'},"Cave of Hira":{ll:[21.4575,39.8592],side:'r',near:'Makkah'},Jerusalem:{ll:[31.7761,35.2358],side:'r',far:1}};
const RED=[[19.5,40.2],[20.5,39.6],[20.9,39.45],[21.5,39.17],[22.0,39.05],[22.8,39.03],[23.6,38.5],[24.1,38.05],[24.6,37.6],[25.05,37.25],[26.0,36.55],[26.4,36.4],[27.0,35.8],[28.0,34.8],[29.5,35.0],[29.5,34.9],[28.0,34.4],[27.7,34.2],[26.6,34.0],[25.0,34.9],[24.0,35.4],[23.0,35.6],[22.2,36.6],[21.5,37.0],[20.5,37.25],[19.5,37.4]];
const MED=[[31.3,32.0],[31.3,34.2],[31.6,34.5],[32.1,34.75],[32.8,34.95],[33.5,35.2],[33.5,32.0]];
function mini(e){V=(e.from in MP&&MP[e.from].far)||(e.to in MP&&MP[e.to].far)?VIEWS.isra:VIEWS.hejaz;const W=+((V.lon1-V.lon0)*CXf(V)*V.K).toFixed(0),H=+((V.lat1-V.lat0)*V.K).toFixed(0);
 const poly=pts=>'M'+pts.map(P).map(p=>p.join(' ')).join(' L')+'Z';const sea=poly(RED)+' '+(V===VIEWS.isra?poly(MED):'');
 const hl=[e.from,e.to].filter((n,i,a)=>MP[n]&&a.indexOf(n)===i);
 const dots=Object.entries(MP).filter(([n,m])=>!hl.includes(n)&&!m.near&&!m.far).map(([n,m])=>{const[x,y]=P(m.ll);return `<circle cx="${x}" cy="${y}" r="2.6" fill="#8f8466" opacity=".55"/>`}).join('');
 let route='';
 if(hl.length===2){const[a,b]=hl.map(n=>P(MP[n].ll)),dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy);
  if(L>12){const ux=dx/L,uy=dy/L,s=[a[0]+ux*7,a[1]+uy*7],t=[b[0]-ux*9,b[1]-uy*9],sg=(-uy)<0?1:-1,c=[(s[0]+t[0])/2-uy*L*.22*sg,(s[1]+t[1])/2+ux*L*.22*sg];
   route=`<path d="M${s} Q${c} ${t}" fill="none" stroke="#a5761f" stroke-width="2.4" stroke-dasharray="5 4" marker-end="url(#ah)"/>`}}
 // Highlight: places that are within a few km of each other are shown as one point with a combined label
 const groups=[];hl.forEach(n=>{const base=MP[n].near&&hl.includes(MP[n].near)?MP[n].near:n;let g=groups.find(g=>g.base===base);if(!g){g={base,names:[]};groups.push(g)}g.names.push(n)});
 groups.forEach(g=>{if(g.names.length===1&&MP[g.names[0]].near){g.base=g.names[0]}});
 const pins=groups.map((g,i)=>{const m=MP[g.base]||MP[g.names[0]],[x,y]=P(m.ll),r=m.side==='r',isTo=g.names.includes(e.to)&&e.from!==e.to&&groups.length>1;
  const main=g.names.length>1?g.base:g.names[0],sub=g.names.length>1?'+ '+g.names.filter(n=>n!==g.base).join(', ')+' (nearby)':'';
  const wl=Math.max(main.length*6.6,sub.length*5),side=r&&x+9+wl<W?'r':(!r&&x-9-wl>0?'l':(x+9+wl<W?'r':'l')),tx=side==='r'?x+9:x-9,an=side==='r'?'start':'end';
  const st='fill="#1f2a24" stroke="#f6edd6" stroke-width="3" paint-order="stroke"';
  return `<circle cx="${x}" cy="${y}" r="${isTo?6:5}" fill="${isTo?'#c9a14a':'#0f3d2e'}" stroke="#fff" stroke-width="1.5"/>
  <text x="${tx}" y="${y+4}" text-anchor="${an}" font-size="11.5" font-weight="700" ${st}>${main}</text>${sub?`<text x="${tx}" y="${y+16}" text-anchor="${an}" font-size="8.5" ${st}>${sub}</text>`:''}`}).join('');
 const km100=(100/111)*V.K*(V===VIEWS.isra?2:1);
 return `<svg viewBox="0 -14 ${W} ${H+14}" width="100%" role="img" aria-label="Route map ${e.from} to ${e.to}" style="display:block;${V===VIEWS.isra?"max-height:340px;margin:0 auto":""}">
 <defs><marker id="ah" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#a5761f"/></marker></defs>
 <rect y="-14" width="${W}" height="${H+14}" fill="#efe1c0"/><path d="${sea}" fill="#a9c7c4"/>
 ${(()=>{const rs=V===VIEWS.isra?[24.2,36.6]:[22.6,37.75],q=P(rs);return `<text x="${q[0]}" y="${q[1]}" font-size="10" font-style="italic" fill="#3f6d73" transform="rotate(-58 ${q})" text-anchor="middle">Red Sea</text>`})()}${V===VIEWS.isra?`<text x="${P([31.4,33.75])[0]}" y="${P([31.4,33.75])[1]}" font-size="6.5" font-style="italic" fill="#3f6d73">Med. Sea</text>`:""}
 <text x="${W-8}" y="16" font-size="9" letter-spacing="2" fill="#8a6a2f" text-anchor="end">${V===VIEWS.isra?"":"HEJAZ"}</text>
 ${dots}${route}${pins}
 <g transform="translate(${W-16},${V===VIEWS.isra?H*0.45:H-30})"><path d="M0 -10 L4 4 L0 1 L-4 4Z" fill="#6b5527"/><text y="14" font-size="9" text-anchor="middle" fill="#6b5527">N</text></g>
 <g transform="translate(8,${H-10})"><path d="M0 0h${km100.toFixed(1)}" stroke="#6b5527" stroke-width="2"/><text x="0" y="-4" font-size="8" fill="#6b5527">${V===VIEWS.isra?200:100} km</text></g>
 </svg><div class="mmleg"><span><i style="background:#0f3d2e"></i>From</span><span><i style="background:#c9a14a"></i>To</span><span><i class="rt"></i>Route</span><span><i style="background:#8f8466;opacity:.6;width:6px;height:6px"></i>Other</span></div><div class="mmcap">Schematic · real relative positions</div>`}
function show(i){cur=i;const e=EVENTS[i];const sy=document.querySelector('.detail .sym');if(sy){sy.innerHTML=evIcon(e.t,72,'pop');sy.title=T(e.t)}els.forEach((el,j)=>el.classList.toggle('on',j===i));
dt.textContent=e.lab?`${T(e.t)} (${T(e.lab.toLowerCase())})`:`${T(e.t)} (${T("c. # CE").replace("#",e.y)})`;dft.textContent=`${T(e.from)} → ${T(e.to)}`;dx.innerHTML=e.html+(qrefs(e.s).length?"<br>"+verseBtn(qrefs(e.s)):"");mm.innerHTML=`<div class="mmtitle">${evIcon(e.t,24,'mmi')}${e.from===e.to?e.from:e.from+' → '+e.to}</div>`+mini(e);
tbar.style.width=((i+1)/EVENTS.length*100)+'%';markViewed(e.y)}
function filt(){const v=vis();els.forEach((el,i)=>el.classList.toggle('hide',!v[i]));if(!v[cur]){const n=v.indexOf(true);if(n>=0)show(n)}}
function step(d){const v=vis();let i=cur;do{i+=d}while(i>=0&&i<EVENTS.length&&!v[i]);if(i>=0&&i<EVENTS.length)show(i)}
els.forEach(el=>el.onclick=()=>show(+el.dataset.i));prev.onclick=()=>step(-1);next.onclick=()=>step(1);
q.oninput=filt;document.querySelectorAll('.ef').forEach(c=>c.onchange=()=>{all.checked=[...document.querySelectorAll('.ef')].every(x=>x.checked);filt()});
all.onchange=()=>{document.querySelectorAll('.ef').forEach(c=>c.checked=all.checked);filt()};
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)});
show(EVENTS.findIndex(e=>e.t==="Hijrah"));
