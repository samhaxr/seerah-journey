const L=(t,s)=>({t,s});
const COURSES=[
{id:"life",t:"Life of the Prophet ﷺ",l:[L("An orphan given refuge",[["Allah found him an orphan and gave him refuge.",["q:93:6"]]]),L("The trustworthy one",[["Quraysh said they had never found him telling anything but the truth.",["b:4770"]]]),L("Revelation at forty",[["Revelation began when he was forty; he spent thirteen years in Makkah, ten in Madinah, and died at sixty-three.",["b:3902"]]]),L("The Cave of Hira",[["The angel commanded 'Read', and the first verses of Surah al-ʿAlaq were revealed; Khadijah comforted him.",["b:3","q:96:1"]]])]},
{id:"hijrah",t:"The Hijrah",l:[L("Ordered to migrate",[["After thirteen years in Makkah he was ordered to migrate.",["b:3902"]]]),L("The Cave of Thawr",[["He and Abu Bakr stayed three nights in the Cave of Thawr.",["b:3905"]],["'What do you think of two, the third of whom is Allah?'",["b:3653","q:9:40"]]]),L("Arrival and the mosque",[["He stayed fourteen nights with Banu ʿAmr bin ʿAuf, then built the mosque in Madinah.",["b:428"]]]),L("Brotherhood",[["He joined Emigrants and Ansar as brothers, such as ʿAbdur-Rahman bin ʿAuf and Saʿd bin ar-Rabiʿ.",["b:2048"]]])]},
{id:"battles",t:"The Battles",l:[L("Badr",[["Allah gave victory at Badr while the believers were few, just over three hundred and ten.",["q:3:123","b:3957"]]]),L("Uhud",[["The archers left their post against the Prophet's command, and the Muslims suffered.",["b:3039","q:3:152"]]]),L("The Trench",[["The Companions dug the trench in the cold; Allah sent a wind and unseen armies.",["b:2834","q:33:9"]]]),L("Hudaybiyyah and the Conquest",[["The truce of Hudaybiyyah was called 'a clear conquest'; later he entered Makkah with ten thousand and removed the 360 idols.",["q:48:1","b:4276","b:4287"]]])]},
{id:"character",t:"Character of the Prophet ﷺ",l:[L("A great moral character",[["'And indeed, you are of a great moral character.'",["q:68:4"]],["ʿAishah said his character was the Qur'an.",["m:746"]]]),L("Gentleness and consultation",[["By Allah's mercy he was lenient, and was told to consult them.",["q:3:159"]]]),L("Best manners",[["He never used bad language and said the best of you are those with the best character.",["b:3559"]]]),L("Mercy to the worlds",[["'We have not sent you except as a mercy to the worlds.'",["q:21:107"]],["Even when rejected, he hoped for guidance for their descendants.",["b:3231"]]])]}];

COURSES.push(
{id:"pillars",t:"Pillars of Islam",l:[
 L("Built on five",[["Islam is built on five: testifying that none has the right to be worshipped but Allah and that Muhammad is His Messenger, establishing prayer, paying zakat, Hajj, and fasting in Ramadan.",["b:8"]]]),
 L("Prayer",[["'Establish prayer and give zakah.'",["q:2:43"]],["The five prayers wipe away sins like bathing five times a day in a river at one's door removes dirt.",["b:528"]]]),
 L("Zakat",[["Sending Muʿadh to Yemen, the Prophet ﷺ taught that zakat is taken from the rich and given to the poor.",["b:1395"]],["The Qur'an names its recipients, beginning with the poor and the needy.",["q:9:60"]]]),
 L("Fasting",[["Fasting was decreed as it was for those before us, that we may become righteous.",["q:2:183"]],["Ramadan is the month in which the Qur'an was revealed.",["q:2:185"]],["Whoever fasts Ramadan out of faith and hoping for reward has his past sins forgiven.",["b:38"]]]),
 L("Hajj",[["Pilgrimage to the House is due to Allah from whoever is able to find a way.",["q:3:97"]],["The reward of an accepted Hajj (Hajj mabrur) is nothing but Paradise.",["b:1773"]]])]},
{id:"prophets",t:"Stories of the Prophets in the Qur'an",l:[
 L("Nuh",[["Nuh remained among his people a thousand years less fifty, then the flood seized them.",["q:29:14"]]]),
 L("Ibrahim and Ismaʿil",[["When Ibrahim was thrown into the fire, Allah said: 'O fire, be coolness and safety upon Abraham.'",["q:21:69"]],["Ibrahim and Ismaʿil raised the foundations of the House, praying 'Our Lord, accept from us.'",["q:2:127"]]]),
 L("Yusuf",[["Yusuf told his father he saw eleven stars, the sun and the moon prostrating to him.",["q:12:4"]]]),
 L("Musa",[["Allah inspired Musa: 'Strike the sea with your staff', and it parted like towering mountains.",["q:26:63"]]]),
 L("Sulayman, Ayyub, Yunus and ʿIsa",[["Sulayman smiled at the speech of an ant and thanked his Lord.",["q:27:18","q:27:19"]],["Ayyub called: 'Adversity has touched me, and You are the most merciful of the merciful.'",["q:21:83"]],["Yunus called out in the darknesses: 'There is no deity except You; exalted are You.'",["q:21:87"]],["ʿIsa said: 'Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet.'",["q:19:30"]]])]},
{id:"adab",t:"Manners & Character (Adab)",l:[
 L("Speak good or stay silent",[["Whoever believes in Allah and the Last Day should speak good or keep quiet.",["b:6018"]],["'Speak to people good words.'",["q:2:83"]]]),
 L("Love for your brother",[["None of you truly believes until he loves for his brother what he loves for himself.",["b:13"]]]),
 L("Safety of tongue and hand",[["A Muslim is one from whose tongue and hands other Muslims are safe.",["b:10"]],["Do not spy or backbite one another.",["q:49:12"]]]),
 L("Kind words and greetings",[["A good word is charity.",["b:2989"]],["Among the best deeds: feeding people and greeting those you know and those you do not.",["b:12"]],["Be moderate in your pace and lower your voice.",["q:31:19"]]]),
 L("Parents and anger",[["Do not say even 'uff' to your parents; speak to them a noble word.",["q:17:23"]],["The strong one is not the wrestler but the one who controls himself in anger.",["b:6114"]]])]},
{id:"women",t:"Women of the Seerah",l:[
 L("Khadijah",[["She comforted the Prophet ﷺ after the first revelation.",["b:3"]],["'Khadijah is the best amongst the women (of this nation).'",["b:3432"]],["Gabriel brought her greetings from her Lord and glad tidings of a palace in Paradise.",["b:3820"]]]),
 L("ʿAishah",[["Her superiority over other women is like tharid over other meals.",["b:3770"]],["Gabriel sent her his greeting.",["b:3768"]],["The Prophet ﷺ passed away in her house.",["b:4449"]]]),
 L("Fatimah",[["'Fatimah is a part of me.'",["b:3714"]],["He told her she would be the chief of the ladies of Paradise.",["b:3624"]]]),
 L("Asmaʾ bint Abi Bakr",[["She prepared the journey-food for the Hijrah and cut her waist belt in two to tie it, earning the name Dhat an-Nitaqayn.",["b:2979"]]]),
 L("Maryam in the Qur'an",[["'Allah has chosen you and purified you and chosen you above the women of the worlds.'",["q:3:42"]]])]},
{id:"dua",t:"Duʿa & Dhikr",l:[
 L("Remember Me",[["'Remember Me; I will remember you.'",["q:2:152"]],["By the remembrance of Allah hearts are assured.",["q:13:28"]]]),
 L("Allah answers",[["'Call upon Me; I will respond to you.'",["q:40:60"]],["'Indeed I am near. I respond to the invocation of the supplicant.'",["q:2:186"]]]),
 L("Light on the tongue",[["SubhanAllahi wa bihamdihi, SubhanAllahil-ʿAdhim: two phrases easy on the tongue, heavy in the balance, beloved to the Gracious.",["b:6682"]],["Saying SubhanAllahi wa bihamdihi a hundred times a day wipes away sins.",["b:6405"]]]),
 L("The master of seeking forgiveness",[["The best way to seek forgiveness begins: 'O Allah, You are my Lord, there is none worthy of worship except You. You created me and I am Your servant…'",["b:6306"]]]),
 L("His most frequent duʿa",[["'Our Lord, give us good in this world and good in the Hereafter, and protect us from the Fire' was his most frequent invocation.",["b:6389","q:2:201"]],["La hawla wa la quwwata illa billah is one of the treasures of Paradise.",["b:6384"]]])]});

COURSES.push({id:"isra",t:"Isra & Miʿraj",l:[
 L("The Night Journey in the Qur'an",[["Allah took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, to show him of His signs.",["q:17:1"]],["The date is not given in these sources.",[]]]),
 L("Al-Buraq and Bait al-Maqdis",[["Al-Buraq, a white animal larger than a donkey and smaller than a mule, carried him; at Bait al-Maqdis he tethered it to the ring used by the prophets and prayed two rakʿahs.",["m:162a"]],["Offered wine and milk, he chose milk, and Gabriel said he had chosen the natural thing.",["m:162a"]]]),
 L("Through the seven heavens",[["He met Adam, then Yahya and ʿIsa, Yusuf, Idris, Harun, Musa and Ibrahim, in the first to seventh heavens.",["b:3887","m:162a"]],["Ibrahim was reclining against al-Bait al-Maʿmur, entered daily by seventy thousand angels.",["m:162a","b:3207"]]]),
 L("Sidrat al-Muntaha",[["At the Lote Tree of the Utmost Boundary, near the Garden of Refuge, he saw of the greatest signs of his Lord.",["q:53:14","q:53:15","q:53:18"]],["Four rivers flowed from it: two hidden, and two visible: the Nile and the Euphrates.",["b:3887"]]]),
 L("Fifty to five",[["Fifty prayers were enjoined; on Musa's advice he asked for lightening until five remained.",["b:3887","m:162a"]],["A voice declared: 'I have passed My order and lessened the burden of My worshippers.'",["b:3887"]]])]});
window.TOTAL_LESSONS=COURSES.reduce((a,c)=>a+c.l.length,0);
const done=()=>JSON.parse(localStorage.getItem('sj_lessons')||'[]');
chips.innerHTML=COURSES.map(c=>`<a href="#c-${c.id}">${c.t}</a>`).join('');
function render(){const d=done();cl.innerHTML=COURSES.map(c=>{const n=c.l.filter((_,j)=>d.includes(c.id+j)).length;
 return `<div class="course" id="c-${c.id}"><h2>${c.t}</h2><div style="display:flex;gap:12px;align-items:center;font-size:13px"><div class="bar" style="flex:1"><i style="width:${n/c.l.length*100}%"></i></div><span class="cp" data-c="${c.id}">${n}/${c.l.length} done</span></div>
 ${c.l.map((l,j)=>`<div class="lesson" id="l-${c.id}-${j}"><label class="ck"><input type="checkbox" data-k="${c.id+j}" ${d.includes(c.id+j)?'checked':''} aria-label="Mark done"></label><div><b>${j+1}. ${l.t}</b><p>${sent(l.s)}</p></div>${verseBtn(qrefs(l.s),"Verses")}</div>`).join('')}</div>`}).join('');
 total.textContent=`${d.length} / ${TOTAL_LESSONS} lessons complete`;
 cl.querySelectorAll('input').forEach(x=>x.onchange=()=>{let v=done();v=x.checked?[...new Set([...v,x.dataset.k])]:v.filter(k=>k!==x.dataset.k);localStorage.setItem('sj_lessons',JSON.stringify(v));render()});
}
render();
