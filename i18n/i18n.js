// i18n core: loads the language dictionary synchronously, translates rendered text nodes/attributes.
(function(){
const LANGS={en:{dir:'ltr',name:'EN'},ur:{dir:'rtl',name:'اردو'},hi:{dir:'ltr',name:'हिन्दी'}};
let L=new URLSearchParams(location.search).get('lang')||localStorage.getItem('sj_lang')||'en';if(!LANGS[L])L='en';
window.LANG=L;window.LANGS=LANGS;window.I18N=window.I18N||{};window.QTR=window.QTR||{};window.HUR=window.HUR||{};
document.documentElement.lang=L;document.documentElement.dir=LANGS[L].dir;
if(L!=='en'){document.write('<script src="i18n/'+L+'.js"><\/script><script src="i18n/quran-'+L+'.js"><\/script>'+(L==='ur'?'<script src="i18n/hadith-ur.js"><\/script>':''))}
const norm=s=>s.replace(/\s+/g,' ').trim();
const SEP=/(\s+→\s+|\s+·\s+|\s+—\s+|\s+\/\s+|:\s+)/;
function look(k){const D=window.I18N;if(D[k]!=null)return D[k];
 if(/\d/.test(k)){const nums=k.match(/\d+/g),p=D[k.replace(/\d+/g,'#')];if(p!=null){let i=0;return p.replace(/#/g,()=>nums[i++]??'')}}
 return null}
function T(s){if(L==="en"||s==null)return s;const k=norm(String(s));if(!k)return s;if(/[\u0600-\u06FF\u0900-\u097F]/.test(k)&&!look(k))return s;let r=look(k);
 if(r==null&&SEP.test(k)){const parts=k.split(SEP);const out=parts.map((p,i)=>i%2?p:(look(p)??(/[A-Za-z]{2}/.test(p)?null:p)));if(out.every(x=>x!=null))r=out.join('')}
 if(r==null){(window.__miss=window.__miss||new Set()).add(k);return s}
 const m=String(s).match(/^(\s*)[\s\S]*?(\s*)$/);return m[1]+r+m[2]}
window.T=T;
const ATTR=['placeholder','aria-label','title','alt'];
const SKIP='script,style,.leaflet-control-attribution,.notr,[translate="no"]';
function walk(root){if(L==='en')return;
 if(root.nodeType===3){const p=root.parentElement;if(p&&!p.closest(SKIP)&&/[A-Za-z]/.test(root.nodeValue)){const t=T(root.nodeValue);if(t!==root.nodeValue)root.nodeValue=t}
  if(p&&root.nodeValue.includes('\uFDFA')&&!p.classList.contains('saw')&&!p.closest('title,option')){const parts=root.nodeValue.split('\uFDFA'),f=document.createDocumentFragment();
   parts.forEach((x,i)=>{if(i){const s=document.createElement('span');s.className='saw';s.textContent='\uFDFA';f.appendChild(s)}if(x)f.appendChild(document.createTextNode(x))});root.replaceWith(f)}return}
 if(root.nodeType!==1||root.closest(SKIP))return;
 ATTR.forEach(a=>{if(root.hasAttribute(a)){const v=root.getAttribute(a);if(/[A-Za-z]/.test(v)){const t=T(v);if(t!==v)root.setAttribute(a,t)}}});
 const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT);const texts=[];let n;while(n=tw.nextNode()){if(n.nodeType===3){texts.push(n);continue}if(n.matches(SKIP)){continue}ATTR.forEach(a=>{if(n.hasAttribute(a)){const v=n.getAttribute(a);if(/[A-Za-z]/.test(v)){const t=T(v);if(t!==v)n.setAttribute(a,t)}}})}texts.forEach(walk)}
window.i18nWalk=walk;
if(L!=='en'){new MutationObserver(ms=>ms.forEach(m=>{if(m.type==='characterData')walk(m.target);else if(m.type==='attributes')walk(m.target);else m.addedNodes.forEach(walk)}))
 .observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTR});
 document.addEventListener('DOMContentLoaded',()=>{document.title=T(document.title);walk(document.body)})}
// switcher
document.addEventListener('DOMContentLoaded',()=>{const nav=document.querySelector('.nav .night')||document.querySelector('[data-night]');if(!nav)return;
 nav.insertAdjacentHTML('beforebegin',`<div class="langsw notr" role="group" aria-label="Language">${Object.entries(LANGS).map(([k,v])=>`<button data-lang="${k}" lang="${k}" dir="${v.dir}" class="${k===L?'on':''}" aria-pressed="${k===L}">${v.name}</button>`).join('')}</div>`);
 const links=document.querySelector('.links');if(links)links.insertAdjacentHTML('beforeend',`<div class="langsw inmenu notr" role="group" aria-label="Language">${Object.entries(LANGS).map(([k,v])=>`<button data-lang="${k}" lang="${k}" dir="${v.dir}" class="${k===L?'on':''}" aria-pressed="${k===L}">${v.name}</button>`).join('')}</div>`);
 document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{localStorage.setItem('sj_lang',b.dataset.lang);const u=new URL(location.href);u.searchParams.delete('lang');location.href=u.href})});
})();
