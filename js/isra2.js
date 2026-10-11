// Interactive Isra & Mi'raj features. Wording follows Bukhari 3887 / Muslim 162a (sunnah.com English).
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const HEAV=[
{h:1,en:"Adam",ar:"آدم",greet:"'You are welcomed, O pious son and pious Prophet.'",intro:"Gabriel said: 'This is your father, Adam; pay him your greetings.'",lesson:null,s:[["Gabriel said: 'This is your father, Adam; pay him your greetings.' Adam replied: 'You are welcomed, O pious son and pious Prophet.'",["b:3887"]],["Muslim's narration also places Adam in the first heaven, who welcomed him and prayed for his good.",["m:162a"]]]},
{h:2,en:"Yahya and ʿIsa",ar:"يحيى وعيسى",greet:"'You are welcomed, O pious brother and pious Prophet.'",lesson:"prophets-4",s:[["He saw Yahya and ʿIsa, who were cousins of each other; they said: 'You are welcomed, O pious brother and pious Prophet.'",["b:3887"]],["Muslim's narration also places ʿIsa son of Maryam and Yahya son of Zakariya in the second heaven.",["m:162a"]]],multi:["Yahya","ʿIsa"]},
{h:3,en:"Yusuf",ar:"يوسف",greet:"'You are welcomed, O pious brother and pious Prophet.'",lesson:"prophets-2",s:[["He saw Yusuf, who said: 'You are welcomed, O pious brother and pious Prophet.'",["b:3887"]],["Yusuf had been given half of beauty.",["m:162a"]]]},
{h:4,en:"Idris",ar:"إدريس",greet:"'You are welcomed, O pious brother and pious Prophet.'",lesson:null,s:[["He saw Idris, who said: 'You are welcomed, O pious brother and pious Prophet.'",["b:3887"]],["'Mention in the Book Idris. Indeed, he was a man of truth and a prophet. And We raised him to a high station.'",["q:19:56","q:19:57"]]]},
{h:5,en:"Harun",ar:"هارون",greet:"'You are welcomed, O pious brother and pious Prophet.'",lesson:null,s:[["He saw Harun (Aaron), who said: 'You are welcomed, O pious brother and pious Prophet.'",["b:3887","m:162a"]]]},
{h:6,en:"Musa",ar:"موسى",greet:"'You are welcomed, O pious brother and pious Prophet.'",lesson:"prophets-3",s:[["He saw Musa, who said: 'You are welcomed, O pious brother and pious Prophet.'",["b:3887","m:162a"]],["When he left, Musa wept, saying that after him a young man had been sent whose followers would enter Paradise in greater numbers than his own.",["b:3887"]]]},
{h:7,en:"Ibrahim",ar:"إبراهيم",greet:"'You are welcomed, O pious son and pious Prophet.'",lesson:"prophets-1",s:[["Gabriel said: 'This is your father; pay your greetings to him.' Ibrahim replied: 'You are welcomed, O pious son and pious Prophet.'",["b:3887"]],["Ibrahim was reclining against al-Bait al-Maʿmur, which seventy thousand angels enter every day, never to return.",["m:162a","b:3207"]]]}];
const ORDER_NOTE=["Abu Dharr's narration differs: its narrator did not remember every heaven and mentions Ibrahim in the sixth. The order here follows Bukhari 3887 and Muslim 162a.",["b:349","b:3887","m:162a"]];
const SKY_EXTRA={makkah:{t:"Makkah: the night begins",s:[["While he was in Makkah, the roof of his house was opened and Gabriel descended; he opened his chest, washed it with Zamzam water, and filled it from a golden tray full of wisdom and faith.",["b:349"]]]},
 aqsa:{t:"Masjid al-Aqsa",s:[["Carried by al-Buraq, he came to Bait al-Maqdis, tethered it to the ring used by the prophets, and prayed two rakʿahs.",["m:162a"]],["'…to al-Masjid al-Aqsa, whose surroundings We have blessed.'",["q:17:1"]]]},
 sidrah:{t:"Sidrat al-Muntaha",s:[["Its fruits were like the jars of Hajr and its leaves like the ears of elephants; four rivers flowed: two hidden, and two visible: the Nile and the Euphrates.",["b:3887"]],["'At the Lote Tree of the Utmost Boundary; near it is the Garden of Refuge.'",["q:53:14","q:53:15"]]]}};
const NIGHT=[
{t:"The chest opened",s:SKY_EXTRA.makkah.s},
{t:"Al-Buraq",s:[["A white animal, smaller than a mule and bigger than a donkey, was brought; its stride reached as far as its sight.",["b:3887","m:162a"]]]},
{t:"Bait al-Maqdis",s:SKY_EXTRA.aqsa.s},
{t:"The two vessels",s:[["At Bait al-Maqdis Gabriel brought a vessel of wine and a vessel of milk; he chose the milk and Gabriel said: 'You have chosen the natural thing.'",["m:162a"]],["Bukhari's narration places a choice of wine, milk and honey after al-Bait al-Maʿmur; he took the milk.",["b:3887"]]]},
...HEAV.map(x=>({t:`${x.h}${['st','nd','rd'][x.h-1]||'th'} heaven: ${x.en}`,s:x.s})),
{t:"Sidrat al-Muntaha",s:SKY_EXTRA.sidrah.s},
{t:"Al-Bait al-Maʿmur",s:[["Al-Bait al-Maʿmur was shown to him; 70,000 angels pray there daily and never return to it.",["b:3207","b:3887"]]]},
{t:"Fifty prayers",s:[["Fifty prayers a day were enjoined on him.",["b:3887"]]]},
{t:"Musa's advice: fifty to five",s:[["Musa said: 'Your followers cannot bear fifty prayers a day… go back to your Lord and ask for reduction.' He returned again and again until five remained.",["b:3887","m:162a"]],["'I have passed My order and have lessened the burden of My worshippers.'",["b:3887"]]]},
{t:"Return: Jerusalem shown to Quraysh",s:[["When Quraysh did not believe him, he stood in al-Hijr and Allah displayed Jerusalem before him, and he described it while looking at it.",["b:3886"]]]}];
const PMAP=[
{n:"Makkah (Kaʿbah)",ll:[21.4225,39.8262],who:"Ibrahim and Ismaʿil",h:7,trad:false,s:[["Ibrahim and Ismaʿil raised the foundations of the House.",["q:2:127"]],["Ibrahim and Ismaʿil were charged to purify the House; the station of Ibrahim is taken as a place of prayer.",["q:2:125"]]]},
{n:"Egypt",ll:[30.04,31.24],who:"Yusuf; Musa and Harun",h:3,trad:false,approx:true,s:[["The one from Egypt who bought Yusuf established him in the land.",["q:12:21"]],["Yusuf told his parents: 'Enter Egypt, Allah willing, safe.'",["q:12:99"]],["Musa and his brother were told: 'Settle your people in Egypt in houses.'",["q:10:87"]]],links:[3,5,6]},
{n:"Mount Sinai (Tur)",ll:[28.5394,33.9750],who:"Musa",h:6,trad:true,s:[["The Qur'an names Mount Sinai.",["q:95:2"]],["Musa was called at the side of the Mount, in the sacred valley of Tuwa.",["q:28:46","q:20:12"]]]},
{n:"Masjid al-Aqsa",ll:[31.7761,35.2358],who:"The ring used by the prophets",h:0,trad:false,s:[["'…to al-Masjid al-Aqsa, whose surroundings We have blessed.'",["q:17:1"]],["Al-Buraq was tethered to the ring used by the prophets.",["m:162a"]]]}];
const $=s=>document.querySelector(s);
const ord=h=>h+(['st','nd','rd'][h-1]||'th');
// ---------- 1) Night sky
const sky=$('#skyStages');
const stages=[{k:'makkah',lbl:'Makkah',...SKY_EXTRA.makkah},{k:'aqsa',lbl:'Masjid al-Aqsa',...SKY_EXTRA.aqsa},...HEAV.map(x=>({k:'h'+x.h,lbl:ord(x.h)+' heaven',t:x.en,ar:x.ar,greet:x.greet,s:x.s,gate:1})),{k:'sidrah',lbl:'Beyond the seventh',...SKY_EXTRA.sidrah}];
sky.innerHTML=stages.map(st=>`<div class="stage ${st.gate?'gated':''}" data-k="${st.k}" ${st.gate?'id="heaven-'+st.k.slice(1)+'"':''}>
 ${st.gate?`<div class="gatebox" aria-hidden="true"><div class="arch"><div class="door l"></div><div class="door r"></div><div class="light"></div></div></div>`:`<div class="orb">${st.k==='sidrah'?'🌿':st.k==='aqsa'?'🕌':'🕋'}</div>`}
 <div class="reveal"><div class="lv">${st.lbl}</div>${st.ar?`<div class="arname">${st.ar}</div>`:''}<h3>${st.t}</h3>${st.greet?`<blockquote>${st.greet}</blockquote>`:''}<p>${sent(st.s)}</p>${verseBtn(qrefs(st.s))||'<small class="noaudio">Hadith narration (no audio)</small>'}</div></div>`).join('')+`<p class="skynote">${ORDER_NOTE[0]} ${cites(ORDER_NOTE[1])}</p>`;
const autoN=$('#autoNarr');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('open');
 if(autoN.checked&&e.intersectionRatio>0.6){const b=e.target.querySelector('.vbtn');if(b&&!b.classList.contains('playing'))b.click()}
 const i=stages.findIndex(s=>s.k===e.target.dataset.k);$('#altFill').style.height=((i+1)/stages.length*100)+'%';$('#altLbl').textContent=stages[i].lbl}}),{threshold:[0.35,0.65]});
sky.querySelectorAll('.stage').forEach(s=>RM?s.classList.add('open'):io.observe(s));if(RM)sky.querySelectorAll('.stage').forEach(s=>io.observe(s));
// starfield
(function(){const c=$('#stars'),n=RM?90:180;let h='';for(let i=0;i<n;i++){const s=Math.random()*2+.6;h+=`<i style="left:${Math.random()*100}%;top:${Math.random()*100}%;width:${s}px;height:${s}px;animation-delay:${(Math.random()*4).toFixed(2)}s;animation-duration:${(2+Math.random()*3).toFixed(2)}s"></i>`}c.innerHTML=h})();
// ---------- 2) Night timeline
const nl=$('#nightList');let ni=0,slide=false;
const stepIc=k=>`<svg class="evi" width="36" height="36" viewBox="0 0 48 48">${ICONS[k]}</svg>`;
const STEPI=NIGHT.map(x=>/^Makkah|^Return/.test(x.t)?stepIc('birth'):/Buraq|Bait al-Maqdis|Aqsa/.test(x.t)?stepIc('isra'):'');
{const h=document.querySelector('#night h2');if(h)h.insertAdjacentHTML('afterbegin',evIcon('Isra & Miʿraj',40,'hicon'))}
nl.innerHTML=NIGHT.map((x,i)=>`<li data-i="${i}"><button class="num" aria-label="Step ${i+1}">${i+1}</button><div><b>${STEPI[i]?`<span class="stepi" aria-hidden="true">${STEPI[i]}</span>`:""}${x.t}</b><p>${sent(x.s)}</p>${verseBtn(qrefs(x.s))}</div></li>`).join('');
function nShow(i,scroll=true){ni=Math.max(0,Math.min(NIGHT.length-1,i));nl.querySelectorAll('li').forEach((l,j)=>{l.classList.toggle('on',j===ni);l.classList.toggle('done',j<ni)});
 $('#nCount').textContent=`Step ${ni+1} of ${NIGHT.length}`;if(scroll){const li=nl.children[ni];nl.scrollTo({top:li.offsetTop-nl.offsetTop-10,behavior:RM?'auto':'smooth'})}
 if(slide){clearTimeout(nTimer);const k=qrefs(NIGHT[ni].s),adv=()=>{if(slide&&ni<NIGHT.length-1)nShow(ni+1);else stopSlide()};
  if(k.length)VP.play(k,null,adv);else{VP.stop();nTimer=setTimeout(adv,SLIDE_MS)}}}
let nTimer=null;const SLIDE_MS=8000;
function stopSlide(){slide=false;clearTimeout(nTimer);$('#nPlay').textContent='▶ Play slideshow';}
$('#nPrev').onclick=()=>nShow(ni-1);$('#nNext').onclick=()=>nShow(ni+1);
$('#nPlay').onclick=()=>{if(slide){stopSlide();VP.stop();return}slide=true;$('#nPlay').textContent='■ Stop';nShow(ni)};
nl.querySelectorAll('.num').forEach(b=>b.onclick=()=>nShow(+b.closest('li').dataset.i));nShow(0,false);
// ---------- 3) Heavens chart
(function(){
 const RR=k=>44+k*25,LH=24;
 function draw(){const el=$('#chart'),narrow=el.clientWidth<520;
  // rings centred at (C,C); labels in a column to the right joined by elbow leader lines (desktop),
  // or numbered markers + an HTML legend (narrow screens) so nothing overlaps at any size/language.
  const C=232,OY=40,W=narrow?C*2:C*2+250,H=C*2+OY+6,KX=C*2+12;let g='';
  for(let k=7;k>=1;k--){const x=HEAV[k-1];g+=`<circle class="ring" data-h="${k}" cx="${C}" cy="${C+OY}" r="${RR(k)}" tabindex="0" role="button" aria-label="${T(ord(k)+' heaven')}: ${T(x.en)}"/>`}
  for(let k=1;k<=7;k++){const x=HEAV[k-1],r=RR(k)-12.5,ang=(-62+(7-k)*0,0);
   // marker on each ring band along a diagonal (upper-right), spaced so numbers never collide
   const th=(-50+ (k-1)*0)*Math.PI/180,px=C+r*Math.cos(th),py=C+OY+r*Math.sin(th);
   g+=`<g class="rl" data-h="${k}" tabindex="-1"><circle cx="${px}" cy="${py}" r="9" class="rn"/><text x="${px}" y="${py+3.5}" text-anchor="middle" class="rnum">${k}</text>`;
   if(!narrow){const ly=48+(7-k)*((H-90)/6);
    g+=`<polyline class="lead" points="${px+9},${py} ${KX-14},${ly} ${KX-4},${ly}"/><text class="lbl" x="${KX}" y="${ly-7}" data-fit="1">${T(x.en)}</text><text class="lbla" x="${KX}" y="${ly+21}">${x.ar}</text>`}
   g+=`</g>`}
  g+=`<circle cx="${C}" cy="${C+OY}" r="38" fill="#c9a14a"/><text x="${C}" y="${C+OY-4}" text-anchor="middle" class="ctr" data-fit="70">${T('Earth')}</text><text x="${C}" y="${C+OY+20}" text-anchor="middle" class="ctr2" data-fit="70">${T('al-Aqsa')}</text>`;
  g+=`<text x="${C}" y="26" text-anchor="middle" class="sid" data-fit="${C*2-20}">✦ ${T('Sidrat al-Muntaha')} ✦</text>`;
  el.innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="group" aria-label="${T('Seven heavens chart')}" class="notr">${g}</svg>`+(narrow?`<ol class="chartlegend">${HEAV.map((x,i)=>`<li data-h="${i+1}"><b>${i+1}</b> ${T(x.en)} <span class="lar">${x.ar}</span></li>`).join('')}</ol>`:'');
  fit();
  el.querySelectorAll('.ring,.rl,.chartlegend li').forEach(r=>{const h=+r.dataset.h;r.addEventListener('click',()=>sel(h));r.addEventListener('mouseenter',()=>sel(h));r.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();sel(h)}})});sel(cur)}
 function fit(){const svg=$('#chart svg');if(!svg)return;const W=svg.viewBox.baseVal.width;
  svg.querySelectorAll('[data-fit]').forEach(t=>{const max=t.dataset.fit==='1'?W-(+t.getAttribute('x'))-6:+t.dataset.fit;let fs=parseFloat(getComputedStyle(t).fontSize);t.style.fontSize='';fs=parseFloat(getComputedStyle(t).fontSize);
   while(t.getComputedTextLength()>max&&fs>7){fs-=.5;t.style.fontSize=fs+'px'}})}
 let cur=1,lastN=null;
 window.addEventListener('resize',()=>{const n=$('#chart').clientWidth<520;if(n!==lastN){lastN=n;draw()}});
 if(document.fonts)document.fonts.ready.then(fit);
 function sel(h){cur=h;const x=HEAV[h-1];document.querySelectorAll('#chart .ring,#chart .rl,#chart .chartlegend li').forEach(r=>r.classList.toggle('on',+r.dataset.h===h));
  $('#chartInfo').innerHTML=`<div class="lbl">${LG==="en"?ord(h).toUpperCase()+" HEAVEN":T(ord(h)+" heaven")}</div><div class="arname" style="color:var(--gold2)">${x.ar}</div><h3>${x.en}</h3><blockquote>${x.greet}</blockquote><p>${sent(x.s)}</p>${x.lesson?`<a class="gbtn" href="courses.html#l-${x.lesson}">Read the lesson in Stories of the Prophets →</a>`:'<small><i>No dedicated lesson in the Stories of the Prophets course yet.</i></small>'}`}
 lastN=$('#chart').clientWidth<520;draw()})();
// ---------- 4) Prophets connection map
(function(){const m=L.map('pmap',{scrollWheelZoom:false});
 L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',{maxZoom:13,attribution:'Tiles © Esri'}).addTo(m);
 L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',{maxZoom:13,opacity:.55,className:'relief'}).addTo(m);
 m.fitBounds([[21.0,30.5],[32.2,40.5]],{padding:[20,20]});
 const ic=t=>L.divIcon({className:'pin'+(t?' trad':''),html:'<span class="pinv"><i style="display:block;transform:rotate(45deg);color:#c9a14a;text-align:center;line-height:22px;font-size:12px;font-style:normal">✦</i></span>',iconSize:[44,44],iconAnchor:[22,40]});
 const show=p=>{$('#pinfo').innerHTML=`<b style="font-size:17px">${p.n}</b><br>${p.trad?'<div class="tradtag">Traditional location: the exact site is not stated in the sources</div>':''}${p.approx?'<div class="tradtag">Region only (no city is named)</div>':''}<small><b>${p.who}</b></small><p>${sent(p.s)}</p>${(p.links||(p.h?[p.h]:[])).map(h=>`<a class="ob" href="#heaven-${h}" data-goto="${h}">${HEAV[h-1].en}: ${ord(h)} heaven ↑</a>`).join(' ')}${p.h===0?'<a class="ob" href="#sky" data-goto="aqsa">Masjid al-Aqsa in the night sky ↑</a>':''}`;
  document.querySelectorAll('#pinfo [data-goto]').forEach(a=>a.onclick=e=>{e.preventDefault();const k=a.dataset.goto,el=document.querySelector(`.stage[data-k="${k==='aqsa'?'aqsa':'h'+k}"]`);el.scrollIntoView({behavior:RM?'auto':'smooth',block:'center'});el.classList.add('open','flash');setTimeout(()=>el.classList.remove('flash'),1600)})};
 PMAP.forEach(p=>L.marker(p.ll,{icon:ic(p.trad)}).addTo(m).bindTooltip(p.n+(p.trad?' (traditional)':''),{permanent:true,direction:p.ll[1]>38?'left':'right',className:'lbl2',offset:[p.ll[1]>38?-14:10,-14]}).on('click',()=>show(p)));
 show(PMAP[0]);window.PMAP_MAP=m})();
// ---------- 5) Memory game
(function(){const tiles=[{id:'adam',n:'Adam',ar:'آدم',h:1},{id:'yahya',n:'Yahya',ar:'يحيى',h:2},{id:'isa',n:'ʿIsa',ar:'عيسى',h:2},{id:'yusuf',n:'Yusuf',ar:'يوسف',h:3},{id:'idris',n:'Idris',ar:'إدريس',h:4},{id:'harun',n:'Harun',ar:'هارون',h:5},{id:'musa',n:'Musa',ar:'موسى',h:6},{id:'ibrahim',n:'Ibrahim',ar:'إبراهيم',h:7}];
 let place={},selTile=null;const pool=$('#gPool'),slots=$('#gSlots');
 const best=()=>localStorage.getItem('sj_miraj_best');
 function render(){const sh=[...tiles].sort((a,b)=>(a.id>b.id?1:-1));
  pool.innerHTML=sh.filter(t=>!place[t.id]).map(t=>tileHTML(t)).join('')||'<small>All placed. Press Check.</small>';
  slots.innerHTML=[7,6,5,4,3,2,1].map(h=>`<div class="slot" data-h="${h}" tabindex="0" role="button" aria-label="${ord(h)} heaven drop zone"><span class="lv">${ord(h)} heaven</span><div class="in">${tiles.filter(t=>place[t.id]===h).map(t=>tileHTML(t)).join('')}</div></div>`).join('');
  document.querySelectorAll('.tile').forEach(el=>{el.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',el.dataset.id);el.classList.add('drag')});el.addEventListener('dragend',()=>el.classList.remove('drag'));
   el.addEventListener('click',e=>{e.stopPropagation();selTile=selTile===el.dataset.id?null:el.dataset.id;mark()})});
  document.querySelectorAll('.slot').forEach(s=>{s.addEventListener('dragover',e=>{e.preventDefault();s.classList.add('over')});s.addEventListener('dragleave',()=>s.classList.remove('over'));
   s.addEventListener('drop',e=>{e.preventDefault();s.classList.remove('over');put(e.dataTransfer.getData('text/plain'),+s.dataset.h)});
   const act=()=>{if(selTile)put(selTile,+s.dataset.h)};s.addEventListener('click',act);s.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act()}})});
  pool.ondragover=e=>e.preventDefault();pool.ondrop=e=>{e.preventDefault();const id=e.dataTransfer.getData('text/plain');delete place[id];render()};
  mark();$('#gBest').textContent=best()?best()+'/8':'-'}
 const tileHTML=t=>`<button class="tile" draggable="true" data-id="${t.id}" aria-label="${t.n}"><span class="arname">${t.ar}</span>${t.n}</button>`;
 function mark(){document.querySelectorAll('.tile').forEach(el=>el.classList.toggle('sel',el.dataset.id===selTile));$('#gHint').textContent=selTile?`Selected ${tiles.find(t=>t.id===selTile).n}. Now choose a heaven.`:'Drag a name onto a heaven, or tap/press Enter on a name, then on a heaven.'}
 function put(id,h){if(!id)return;place[id]=h;selTile=null;$('#gResult').innerHTML='';render();const nx=document.querySelector('#gPool .tile');if(nx&&document.activeElement&&document.activeElement.classList.contains('slot'))nx.focus()}
 $('#gCheck').onclick=()=>{let sc=0;tiles.forEach(t=>{if(place[t.id]===t.h)sc++});const b=Math.max(sc,+best()||0);localStorage.setItem('sj_miraj_best',b);
  document.querySelectorAll('.slot .tile').forEach(el=>{const t=tiles.find(x=>x.id===el.dataset.id);el.classList.add(place[t.id]===t.h?'right':'wrong')});
  $('#gResult').innerHTML=`<b>Score: ${sc}/8</b> · Best: ${b}/8<ol>${HEAV.map(x=>`<li><b>${ord(x.h)}:</b> ${x.en} ${cites(x.h===2?['b:3887','m:162a']:['b:3887','m:162a'])}</li>`).join('')}</ol><small>${ORDER_NOTE[0]} ${cites(ORDER_NOTE[1])}</small>`;$('#gBest').textContent=b+'/8'};
 $('#gReset').onclick=()=>{place={};selTile=null;$('#gResult').innerHTML='';render()};render();window.MIRAJ_TILES=tiles})();
