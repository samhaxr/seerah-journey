// Citation helper: "b:3902" = Sahih al-Bukhari (sunnah.com English numbering), "m:746" = Sahih Muslim, "q:9:40" = Qur'an
const nd=x=>String(x).replace(/\s*—\s*/g,', ').replace(/(\d)–(\d)/g,'$1-$2').replace(/–/g,'-');const LG=window.LANG||'en',T=window.T||(x=>x);
const CL={en:{q:"Qur'an",b:'Bukhari',m:'Muslim'},ur:{q:'قرآن',b:'بخاری',m:'مسلم'},hi:{q:'क़ुरआन',b:'बुख़ारी',m:'मुस्लिम'}}[LG];
function cite(r){const[k,...x]=r.split(':');const n=x.join(':');
 if(k==='q'){const[s,a]=n.split(':');return `<a class="cite notr" target="_blank" rel="noopener" href="https://quran.com/${s}/${a}">${CL.q} ${s}:${a}</a><button class="vplay" data-verses="${s}:${a}" aria-label="${T('Play')} ${CL.q} ${s}:${a}" title="${T('Play recitation & translation')}">▶</button>`}
 const c=k==='b'?'bukhari':'muslim';return `<a class="cite notr" target="_blank" rel="noopener" href="https://sunnah.com/${c}:${n}">${CL[k]} ${n}</a>`+(LG==='ur'&&window.HUR[r]?`<button class="hur notr" data-h="${r}" aria-expanded="false" title="sunnah.com اردو ترجمہ">اردو</button>`:'')}
const cites=a=>'<span class="cites">['+a.map(cite).join(', ')+']</span>';
function qtrBlock(c){if(LG==='en')return '';const k=c.filter(r=>r.startsWith('q:')).map(r=>r.slice(2));if(!k.length)return '';
 return k.map(v=>`<span class="qtr notr" dir="${LG==='ur'?'rtl':'ltr'}"><span class="qtx">${LG==="ur"?"﴿":"“"}${nd(window.QTR.v[v])}${LG==="ur"?"﴾":"”"}</span> <small>(${CL.q} ${v}${LG==='ur'?'، ترجمہ: ':', अनुवाद: '}${window.QTR.by})</small></span>`).join('')}
const sent=list=>list.map(([t,c])=>{if(LG==='en')return t+(c.length?' '+cites(c):'');
 const h=c.some(r=>!r.startsWith('q:'));
 return `<span class="sn">${T(t)}</span>`+(h?`<sup class="stn notr" title="${T("Site's translation of the summary, not an official hadith translation")}">†</sup>`:'')+(c.length?' '+cites(c):'')+qtrBlock(c)}).join(' ');
document.addEventListener('click',e=>{const b=e.target.closest('.hur');if(!b)return;e.preventDefault();const nx=b.nextElementSibling;
 if(nx&&nx.classList.contains('hurtx')){nx.remove();b.setAttribute('aria-expanded','false');return}
 b.insertAdjacentHTML('afterend',`<span class="hurtx notr" dir="rtl" lang="ur">${nd(window.HUR[b.dataset.h])} <small>(sunnah.com پر شائع شدہ اردو ترجمہ، ${b.textContent==='اردو'?'':''}${CL[b.dataset.h[0]]} ${b.dataset.h.slice(2)})</small></span>`);b.setAttribute('aria-expanded','true')});
const plain=list=>list.map(x=>x[0]).join(' ');
// Years are conventional ("commonly dated") and carry no citation; the sources give relative timing only.
const EVENTS=[
{y:570,t:"Birth in Makkah",era:"early",from:"Makkah",to:"Makkah",ll:[21.4225,39.8262],s:[["He grew up an orphan, and Allah gave him refuge.",["q:93:6"]],["Before his mission, the Quraysh said they had never found him saying anything but the truth.",["b:4770"]]]},
{y:610,t:"First Revelation",era:"makkah",from:"Makkah",to:"Cave of Hira",ll:[21.4575,39.8592],s:[["Revelation began when he was forty.",["b:3902"]],["While worshipping in seclusion in the Cave of Hira, the angel came and commanded him to read; the first verses were 'Recite in the name of your Lord who created…'. He returned to Khadijah with his heart beating severely, who comforted him.",["b:3","q:96:1"]]]},
{y:620,lab:"Undated",t:"Isra & Miʿraj",era:"makkah",from:"Makkah",to:"Jerusalem",ll:[31.7761,35.2358],s:[["Allah took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, to show him of His signs.",["q:17:1"]],["It happened while he was in Makkah; he was then taken up through the heavens, where the prayers were enjoined.",["b:349"]],["When Quraysh disbelieved him, Allah displayed Jerusalem before him and he described it to them.",["b:3886"]],["The date is not stated in these sources (it is commonly observed on 27 Rajab).",[]]]},
{y:622,t:"Hijrah",era:"madinah",from:"Makkah",to:"Madinah",ll:[24.4672,39.6111],s:[["After thirteen years of revelation in Makkah he was ordered to emigrate.",["b:3902"]],["He and Abu Bakr hid three nights in the Cave of Thawr before setting out with a hired guide.",["b:3905"]],["In the cave he said to his companion, 'Do not grieve; indeed Allah is with us.'",["q:9:40","b:3653"]],["In Madinah he built the mosque and joined the Emigrants and Ansar in brotherhood.",["b:428","b:2048"]]]},
{y:624,t:"Battle of Badr",era:"madinah",from:"Madinah",to:"Badr",ll:[23.78,38.79],s:[["Allah gave the believers victory at Badr while they were few.",["q:3:123"]],["Those at Badr numbered just over three hundred and ten, the number of Talut's companions.",["b:3957"]],["The Qur'an calls it the Day of Criterion, the day the two armies met.",["q:8:41"]]]},
{y:625,t:"Battle of Uhud",era:"madinah",from:"Madinah",to:"Mount Uhud",ll:[24.50,39.61],s:[["Fifty archers under ʿAbdullah bin Jubair were told never to leave their place; most left for the booty and the Muslims were routed.",["b:3039","q:3:152"]],["Hamzah was killed at Uhud by Wahshi.",["b:4072"]]]},
{y:627,t:"Battle of the Trench",era:"madinah",from:"Confederates",to:"Madinah",ll:[24.47,39.60],s:[["The Emigrants and Ansar dug the trench themselves on a very cold morning, tired and hungry.",["b:2834"]],["When the armies came, Allah sent against them a wind and armies unseen.",["q:33:9"]]]},
{y:628,t:"Treaty of Hudaybiyyah",era:"madinah",from:"Madinah",to:"Hudaybiyyah",ll:[21.44,39.64],s:[["At al-Hudaybiyyah the Prophet ﷺ agreed a truce with Quraysh.",["b:2731"]],["The believers pledged allegiance under the tree, and Allah was pleased with them.",["q:48:18"]],["Allah called it 'a clear conquest'.",["q:48:1"]]]},
{y:630,t:"Conquest of Makkah",era:"madinah",from:"Madinah",to:"Makkah",ll:[21.4225,39.8262],s:[["He left Madinah in Ramadan with ten thousand Muslims.",["b:4276"]],["There were 360 idols around the Kaʿbah; he struck them reciting 'Truth has come and falsehood has departed.'",["b:4287","q:17:81"]]]},
{y:632,t:"Farewell Hajj",era:"legacy",from:"Madinah",to:"Makkah",ll:[21.355,39.984],s:[["It was his only Hajj after the Hijrah.",["b:4404"]],["In his sermon he declared: 'Your blood, your properties and your honour are sacred to one another.'",["b:1739"]],["He passed away at sixty-three, in ʿAishah's house.",["b:3902","b:4449"]]]}];
EVENTS.forEach(e=>{e.html=sent(e.s);e.txt=plain(e.s)});
const LESSONS=[
["Character: 'And indeed, you are of a great moral character.'",["q:68:4"]],
["Trust: in the cave he told Abu Bakr, 'Do not grieve; indeed Allah is with us.'",["q:9:40"]],
["Brotherhood: the Prophet ﷺ joined ʿAbdur-Rahman bin ʿAuf and Saʿd bin ar-Rabiʿ as brothers.",["b:2048"]],
["Consultation: 'consult them in the matter.'",["q:3:159"]],
["Mercy: after being rejected, he hoped Allah would bring from their descendants people who worship Him alone.",["b:3231"]],
["Truthfulness: Quraysh admitted they never found him telling anything but the truth.",["b:4770"]],
["Good manners: 'The best amongst you are those who have the best manners and character.'",["b:3559"]]];
const SOURCES_NOTE='Sources: every factual statement on this site cites the Qur\'an (quran.com, Saheeh International) or Sahih al-Bukhari / Sahih Muslim (sunnah.com English numbering). Calendar years (CE) are conventional dating and are not stated in these sources. Audio: Qur\'an verses only: recitation by the reciter you choose (default Mishary Rashid Alafasy; also Saad al-Ghamdi, Abdul Rahman al-Sudais, Saud al-Shuraim, Maher al-Muaiqly, Yasser al-Dosari, Abdul Basit Abdus-Samad, Mahmoud Khalil al-Husary, Muhammad Siddiq al-Minshawi, Abu Bakr al-Shatri, Hani ar-Rifai, Ahmed al-Ajmi, Ali al-Hudhaify and Nasser al-Qatami), English translation (Sahih International) read by Ibrahim Walk, Urdu translation read by Shamshad Ali Khan or Farhat Hashmi; streamed from EveryAyah.com (not hosted here; all rights remain with their owners). Hadith texts have no audio: no attributed human recordings of individual hadith were found.';
const viewed=()=>JSON.parse(localStorage.getItem('sj_viewed')||'[]');
function markViewed(y){const v=viewed();if(!v.includes(y)){v.push(y);localStorage.setItem('sj_viewed',JSON.stringify(v))}}
if(localStorage.getItem('sj_night')==='1')document.body.classList.add('night');
document.addEventListener('click',e=>{const b=e.target.closest('[data-night]');if(b){const n=document.body.classList.toggle('night');localStorage.setItem('sj_night',n?'1':'0')}
const m=e.target.closest('.burger');if(m)document.querySelector('.links').classList.toggle('open')});

const progress=()=>{const ev=viewed().length/EVENTS.length,ls=JSON.parse(localStorage.getItem('sj_lessons')||'[]').length/(window.TOTAL_LESSONS||46),qb=(+localStorage.getItem('sj_quiz_best')||0)/100;return Math.round((ev*0.4+Math.min(ls,1)*0.4+qb*0.2)*100)};
document.addEventListener('DOMContentLoaded',()=>{const q=document.querySelector('.quote');
 if(LG!=='en'&&window.I18N_NOTE)document.body.insertAdjacentHTML('beforeend','<footer class="srcnote i18nnote notr">'+window.I18N_NOTE+'</footer>');
 if(q){q.insertAdjacentHTML('beforeend','<div style="font:12px Lato;font-style:normal;opacity:.75;margin-top:4px">'+SOURCES_NOTE+'</div>')}
 else document.body.insertAdjacentHTML('beforeend','<footer class="srcnote">'+SOURCES_NOTE+'</footer>')
 const fn=q?q.lastElementChild:document.querySelector('footer.srcnote:not(.i18nnote)');if(fn)fn.insertAdjacentHTML('beforeend',' <a class="reclink" href="reciters.html">'+T('Qur\'an reciters')+' →</a>')});
// ===== Qur'an verse audio (human recordings, streamed from everyayah.com; nothing is bundled) =====
// Reciters: every folder verified on EveryAyah.com to serve all cited verses + Al-Fatihah 1:1-7 (tests/reciter_verify.py)
const RECITERS=[
 {id:'alafasy',f:'Alafasy_128kbps',kb:128,st:'murattal',n:{en:'Mishary Rashid Alafasy',ar:'مشاري راشد العفاسي',ur:'مشاری راشد العفاسی',hi:'मिशारी राशिद अल-अफ़ासी'},b:'Kuwaiti reciter and imam.'},
 {id:'ghamdi',f:'Ghamadi_40kbps',kb:40,st:'murattal',n:{en:'Saad al-Ghamdi',ar:'سعد الغامدي',ur:'سعد الغامدی',hi:'साद अल-ग़ामिदी'},b:'Reciter who has served as a guest imam of Masjid an-Nabawi.'},
 {id:'sudais',f:'Abdurrahmaan_As-Sudais_192kbps',kb:192,st:'murattal',n:{en:'Abdul Rahman al-Sudais',ar:'عبد الرحمن السديس',ur:'عبدالرحمٰن السدیس',hi:'अब्दुर्रहमान अस-सुदैस'},b:'Chief Imam of Masjid al-Haram, Makkah.'},
 {id:'shuraim',f:'Saood_ash-Shuraym_128kbps',kb:128,st:'murattal',n:{en:'Saud al-Shuraim',ar:'سعود الشريم',ur:'سعود الشریم',hi:'सऊद अश-शुरैम'},b:'Saudi reciter and scholar; former imam and khatib of Masjid al-Haram.'},
 {id:'muaiqly',f:'MaherAlMuaiqly128kbps',kb:128,st:'murattal',n:{en:'Maher al-Muaiqly',ar:'ماهر المعيقلي',ur:'ماہر المعیقلی',hi:'माहिर अल-मुऐक़िली'},b:'Imam and khatib of Masjid al-Haram, Makkah.'},
 {id:'dosari',f:'Yasser_Ad-Dussary_128kbps',kb:128,st:'murattal',n:{en:'Yasser al-Dosari',ar:'ياسر الدوسري',ur:'یاسر الدوسری',hi:'यासिर अद-दोसरी'},b:'Saudi reciter; one of the imams of Masjid al-Haram since 2019.'},
 {id:'basit',f:'Abdul_Basit_Murattal_192kbps',kb:192,st:'murattal',n:{en:'Abdul Basit Abdus-Samad',ar:'عبد الباسط عبد الصمد',ur:'عبدالباسط عبدالصمد',hi:'अब्दुल बासित अब्दुस्समद'},b:'Egyptian reciter and hafiz (20th century).'},
 {id:'basitm',f:'Abdul_Basit_Mujawwad_128kbps',kb:128,st:'mujawwad',n:{en:'Abdul Basit Abdus-Samad',ar:'عبد الباسط عبد الصمد',ur:'عبدالباسط عبدالصمد',hi:'अब्दुल बासित अब्दुस्समद'},b:'Egyptian reciter and hafiz (20th century).'},
 {id:'husary',f:'Husary_128kbps',kb:128,st:'murattal',n:{en:'Mahmoud Khalil al-Husary',ar:'محمود خليل الحصري',ur:'محمود خلیل الحصری',hi:'महमूद ख़लील अल-हुसरी'},b:'Egyptian reciter (20th century).'},
 {id:'husarym',f:'Husary_128kbps_Mujawwad',kb:128,st:'mujawwad',n:{en:'Mahmoud Khalil al-Husary',ar:'محمود خليل الحصري',ur:'محمود خلیل الحصری',hi:'महमूद ख़लील अल-हुसरी'},b:'Egyptian reciter (20th century).'},
 {id:'minshawi',f:'Minshawy_Murattal_128kbps',kb:128,st:'murattal',n:{en:'Muhammad Siddiq al-Minshawi',ar:'محمد صديق المنشاوي',ur:'محمد صدیق المنشاوی',hi:'मुहम्मद सिद्दीक़ अल-मिनशावी'},b:'Egyptian reciter and hafiz (20th century).'},
 {id:'minshawim',f:'Minshawy_Mujawwad_192kbps',kb:192,st:'mujawwad',n:{en:'Muhammad Siddiq al-Minshawi',ar:'محمد صديق المنشاوي',ur:'محمد صدیق المنشاوی',hi:'मुहम्मद सिद्दीक़ अल-मिनशावी'},b:'Egyptian reciter and hafiz (20th century).'},
 {id:'shatri',f:'Abu_Bakr_Ash-Shaatree_128kbps',kb:128,st:'murattal',n:{en:'Abu Bakr al-Shatri',ar:'أبو بكر الشاطري',ur:'ابوبکر الشاطری',hi:'अबू बक्र अश-शातिरी'},b:''},
 {id:'rifai',f:'Hani_Rifai_192kbps',kb:192,st:'murattal',n:{en:'Hani ar-Rifai',ar:'هاني الرفاعي',ur:'ہانی الرفاعی',hi:'हानी अर-रिफ़ाई'},b:''},
 {id:'ajmi',f:'ahmed_ibn_ali_al_ajamy_128kbps',kb:128,st:'murattal',n:{en:'Ahmed al-Ajmi',ar:'أحمد بن علي العجمي',ur:'احمد بن علی العجمی',hi:'अहमद बिन अली अल-अजमी'},b:''},
 {id:'hudhaify',f:'Hudhaify_128kbps',kb:128,st:'murattal',n:{en:'Ali al-Hudhaify',ar:'علي الحذيفي',ur:'علی الحذیفی',hi:'अली अल-हुज़ैफ़ी'},b:''},
 {id:'qatami',f:'Nasser_Alqatami_128kbps',kb:128,st:'murattal',n:{en:'Nasser al-Qatami',ar:'ناصر القطامي',ur:'ناصر القطامی',hi:'नासिर अल-क़तामी'},b:''}];
// Qur'an reader helpers (shared by home, quran.html, surah.html)
const AIN=n=>String(n).replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
const lastRead=()=>{try{return JSON.parse(localStorage.getItem('sj_lastread'))}catch(e){return null}};
const contRead=()=>{const r=lastRead();if(!r)return '';const nm=LG==='en'?r.tl:(r.tlx&&r.tlx[LG])||r.tl;
 return `<a class="contread" href="surah.html?s=${r.s}#a${r.a}"><span>📖 ${T('Continue reading')}</span><b class="notr">${nm} · ${r.s}:${r.a}</b></a>`};
document.addEventListener('DOMContentLoaded',()=>{const h=document.querySelector('.hero');if(h&&/index\.html$|\/$/.test(location.pathname)&&lastRead())h.insertAdjacentHTML('afterend',`<div class="contwrap">${contRead()}</div>`)});
const recName=r=>r.n[LG]||r.n.en;
const recStyle=r=>T(r.st==='mujawwad'?'Mujawwad':'Murattal');
const recLabel=r=>`${recName(r)} · ${recStyle(r)}`;
const curRec=()=>RECITERS.find(r=>r.id===localStorage.getItem('sj_reciter'))||RECITERS[0];
function setRec(id){localStorage.setItem('sj_reciter',id);document.querySelectorAll('select.recsel').forEach(s=>s.value=id);document.dispatchEvent(new CustomEvent('sj-reciter',{detail:id}))}
const recSelect=(id,cls='')=>`<select class="recsel notr ${cls}" ${id?`id="${id}"`:''} aria-label="${T('Reciter')}">${RECITERS.map(r=>`<option value="${r.id}" ${r.id===curRec().id?'selected':''}>${recLabel(r)}</option>`).join('')}</select>`;
document.addEventListener('change',e=>{if(e.target.matches('select.recsel'))setRec(e.target.value)});
const VA={base:'https://everyayah.com/data/',
 get recitation(){const r=curRec();return {folder:r.f,name:recLabel(r)}},
 translations:{en:{folder:'English/Sahih_Intnl_Ibrahim_Walk_192kbps',name:'Ibrahim Walk (Sahih International)',label:'English'},
               ur:{folder:'translations/urdu_shamshad_ali_khan_46kbps',name:'Shamshad Ali Khan',label:'اردو (شمشاد علی خان)'},
               ur2:{folder:'translations/urdu_farhat_hashmi',name:'Farhat Hashmi (word for word)',label:'اردو (فرحت ہاشمی، لفظی)'}}};
// Hindi: no human-recorded per-ayah Hindi translation audio source was found; the selector offers only languages that exist.
const vurl=(folder,k)=>{const[s,a]=k.split(':');return VA.base+folder+'/'+String(s).padStart(3,'0')+String(a).padStart(3,'0')+'.mp3'};
const fmtT=s=>{s=isFinite(s)?Math.floor(s):0;return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')};
const qrefs=list=>[...new Set(list.flatMap(x=>x[1]).filter(r=>r.startsWith('q:')).map(r=>r.slice(2)))];
const verseBtn=(keys,label)=>keys.length?`<button class="vbtn" data-verses="${keys.join(',')}" aria-label="Listen to Qur'an ${keys.join(', ')}">🔊 ${label||'Listen to the verse'+(keys.length>1?'s':'')}</button>`:'';
const VP=(()=>{const a=new Audio();a.preload='auto';let queue=[],qi=0,keys=[],onDone=null,bar=null,btn=null,recO=null;
 const RF=()=>recO?RECITERS.find(r=>r.id===recO):curRec();
 const HIN=LG==='hi';
 const mode=()=>HIN?'ar':(localStorage.getItem('sj_vmode')||'both');
 const lang=()=>{const v=localStorage.getItem('sj_vlang');if(LG==='ur')return v==='ur2'?'ur2':'ur';return 'en'};
 function build(){queue=[];keys.forEach(k=>{if(mode()!=='tr')queue.push({k,t:'ar'});if(mode()!=='ar')queue.push({k,t:'tr'})})}
 function ensureBar(){if(bar)return;document.body.insertAdjacentHTML('beforeend',`<div class="vplayer" id="vplayer" hidden role="region" aria-label="Qur'an audio player">
  <div class="vtop"><button id="vpPrev" aria-label="Previous">⏮</button><button id="vpPlay" aria-label="Play">▶</button><button id="vpNext" aria-label="Next">⏭</button>
  <div class="vmeta"><b id="vpNow" class="notr"></b><small id="vpWho" class="notr"></small></div><small id="vpTime">0:00 / 0:00</small><button id="vpOpt" aria-label="Audio options" aria-expanded="false">⚙</button><button id="vpClose" aria-label="Close">✕</button></div>
  <div class="bar" id="vpSeek"><i id="vpFill"></i></div>
  <div class="vopts"><label class="vrec">${T('Listen with')}: ${recSelect('vpRec')}</label><a class="vrecall" href="reciters.html">${T('All reciters')}</a><span role="group" aria-label="Play mode"><button data-m="ar">Arabic</button><button data-m="tr">Translation</button><button data-m="both">Both</button></span>
  ${HIN?`<small class="hinote">${T('Hindi verse audio is unavailable; playing the Arabic recitation only.')}</small>`:`<label>${T('Translation reader')}: <select id="vpLang">${Object.entries(VA.translations).filter(([k])=>LG==='ur'?k!=='en':k==='en').map(([k,v])=>`<option value="${k}">${v.label}</option>`).join('')}</select></label>`}</div></div>`);
  bar=document.getElementById('vplayer');const padSync=()=>{document.body.style.paddingBottom=bar.hidden?'':(bar.offsetHeight+24)+'px'};new ResizeObserver(padSync).observe(bar);new MutationObserver(padSync).observe(bar,{attributes:true,attributeFilter:['hidden']});if(window.vpLang)vpLang.value=lang();if(HIN)bar.querySelectorAll('[data-m]').forEach(b=>{if(b.dataset.m!=='ar'){b.disabled=true;b.title=T('Hindi verse audio is unavailable')}});
  vpOpt.onclick=()=>{const o=bar.classList.toggle('opts');vpOpt.setAttribute('aria-expanded',o)};vpPlay.onclick=()=>api.toggle();vpPrev.onclick=()=>step(-1);vpNext.onclick=()=>step(1);vpClose.onclick=()=>{api.stop();bar.hidden=true;emit()};
  if(window.vpLang)vpLang.onchange=()=>{localStorage.setItem('sj_vlang',vpLang.value);load(qi,!a.paused)};
  bar.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>{const cur=queue[qi];localStorage.setItem('sj_vmode',b.dataset.m);build();qi=Math.max(0,queue.findIndex(x=>x.k===(cur&&cur.k)));opts();load(qi,!a.paused)});
  vpSeek.onclick=e=>{const r=vpSeek.getBoundingClientRect();if(a.duration)a.currentTime=(e.clientX-r.left)/r.width*a.duration};opts()}
 function opts(){bar.querySelectorAll('[data-m]').forEach(b=>b.classList.toggle('on',b.dataset.m===mode()))}
 function ui(){if(!bar)return;const d=a.duration||0,c=queue[qi];vpFill.style.width=(d?a.currentTime/d*100:0)+'%';vpTime.textContent=fmtT(a.currentTime)+' / '+fmtT(d);
  vpPlay.textContent=a.paused?'▶':'❚❚';
  if(c){const tr=VA.translations[lang()];vpNow.textContent=`${CL.q} ${c.k} · ${c.t==='ar'?T('Arabic'):tr.label}  (${qi+1}/${queue.length})`;
   vpWho.textContent=c.t==='ar'?`${T('Recitation')}: ${recLabel(RF())}`:`${T('Translation')}: ${tr.name}`}
  document.querySelectorAll('.vbtn,.vplay').forEach(x=>x.classList.toggle('playing',!a.paused&&x===btn))}
 ['timeupdate','loadedmetadata','play','pause'].forEach(e=>a.addEventListener(e,ui));
 let rep='none';const emit=()=>document.dispatchEvent(new CustomEvent('vp-item',{detail:queue[qi]&&bar&&!bar.hidden?{k:queue[qi].k,t:queue[qi].t,i:qi}:null}));
 a.addEventListener('ended',()=>{const c=queue[qi];
  if(rep==='ayah'&&c&&(qi===queue.length-1||queue[qi+1].k!==c.k)){load(queue.findIndex(x=>x.k===c.k),true);return}
  if(qi<queue.length-1)load(qi+1,true);else if(rep==='surah'&&queue.length){load(0,true)}else{ui();const f=onDone;onDone=null;f&&f()}});
 a.addEventListener('error',()=>{vpNow.textContent='Audio unavailable (needs an internet connection)';if(qi<queue.length-1)setTimeout(()=>load(qi+1,true),800)});
 function load(i,play){qi=i;const c=queue[i];if(!c)return;setTimeout(emit,0);a.src=c.t==='ar'?vurl(RF().f,c.k):vurl(VA.translations[lang()].folder,c.k);a.load();ui();if(play)a.play().catch(()=>{})}
 function step(d){const n=qi+d;if(n>=0&&n<queue.length)load(n,true)}
 const api={el:a,get queue(){return queue},get index(){return qi},
  get repeat(){return rep},set repeat(v){rep=v},get keys(){return keys},
  playAt(k,startKey,el){ensureBar();keys=k;recO=null;btn=el||null;onDone=null;build();bar.hidden=false;load(Math.max(0,queue.findIndex(x=>x.k===startKey)),true)},
  play(k,el,done,rec){ensureBar();keys=k;recO=rec||null;btn=el||null;onDone=done||null;build();bar.hidden=false;load(0,true)},
  toggle(){if(!queue.length)return;a.paused?a.play().catch(()=>{}):a.pause()},stop(){a.pause();onDone=null;ui()}};
 document.addEventListener('click',e=>{const b=e.target.closest('[data-verses]');if(!b)return;e.preventDefault();e.stopPropagation();
  if(btn===b&&queue.length&&bar&&!bar.hidden){api.toggle();return}api.play(b.dataset.verses.split(','),b,null,b.dataset.reciter)});
 document.addEventListener('sj-reciter',()=>{recO=null;const c=queue[qi];if(c&&c.t==='ar'&&bar&&!bar.hidden){const p=!a.paused;load(qi,p)}else ui()});
 return api})();
