const X=(q,o,a,t,c)=>({q,o,a,e:[[t,c]]});
const QUIZZES=[
{id:"life",t:"Life of the Prophet ﷺ",qs:[
X("At what age did revelation begin?",["25","40","50","63"],1,"He began receiving revelation at forty.",["b:3902"]),
X("How many years did he stay in Makkah after revelation began?",["Five","Ten","Thirteen","Twenty"],2,"He stayed in Makkah thirteen years receiving revelation.",["b:3902"]),
X("At what age did he pass away?",["60","61","63","70"],2,"He died at the age of sixty-three.",["b:3902"]),
X("Where did the first revelation come?",["Cave of Thawr","Cave of Hira","Masjid Quba","Mount Uhud"],1,"It came in the Cave of Hira.",["b:3"]),
X("Which verse begins the first revelation?",["'Recite in the name of your Lord who created'","'Say: He is Allah, One'","'All praise is for Allah'","'O you wrapped in garments'"],0,"The first verses were 'Recite in the name of your Lord who created…'.",["q:96:1","b:3"]),
X("Who comforted him after the first revelation?",["Abu Bakr","Khadijah","ʿAli","Abu Talib"],1,"He returned to Khadijah, who comforted him.",["b:3"]),
X("To whom did Khadijah take him afterwards?",["Waraqa bin Naufal","Abu Jahl","Zaid bin Haritha","Ibn ʿAbbas"],0,"She took him to her cousin Waraqa bin Naufal.",["b:3"]),
X("What does Surah ad-Duha say Allah did when He found him an orphan?",["Gave him refuge","Made him a king","Sent him to Sham","Gave him wealth"],0,"'Did He not find you an orphan and give you refuge?'",["q:93:6"]),
X("From which hill did he call Quraysh to warn them?",["Uhud","Safa","Thawr","ʿArafat"],1,"He ascended as-Safa; they said they had never found him telling anything but the truth.",["b:4770"]),
X("In whose house did he pass away?",["Khadijah's","ʿAishah's","Abu Ayyub's","Fatimah's"],1,"He passed away in ʿAishah's house.",["b:4449"])]},
{id:"hijrah",t:"The Hijrah",qs:[
X("How many nights did they stay in the Cave of Thawr?",["One","Three","Seven","Fourteen"],1,"They stayed there three nights.",["b:3905"]),
X("Who was the Prophet's companion in the cave?",["ʿUmar","Abu Bakr","ʿAli","Bilal"],1,"Abu Bakr was with him in the cave.",["b:3653","q:9:40"]),
X("What did he say when Abu Bakr feared being seen?",["'Run quickly'","'What do you think of two, the third of whom is Allah?'","'Return to Makkah'","'Hide the camels'"],1,"'What do you think of two (persons) the third of whom is Allah?'",["b:3653"]),
X("Which verse records 'Do not grieve; indeed Allah is with us'?",["2:255","9:40","17:80","48:1"],1,"Surah at-Tawbah 9:40.",["q:9:40"]),
X("From which tribe was the hired guide?",["Bani ad-Dail","Banu Hashim","Banu Thaqif","Banu Najjar"],0,"They hired a man from the tribe of Bani ad-Dail.",["b:3905"]),
X("Who also accompanied them when they set out from the cave?",["ʿAmir bin Fuhaira","Khalid bin al-Walid","Abu Sufyan","Wahshi"],0,"ʿAmir bin Fuhaira and the guide went along with them.",["b:3905"]),
X("How many nights did he stay with Banu ʿAmr bin ʿAuf on arrival?",["Three","Seven","Fourteen","Thirty"],2,"He stayed there fourteen nights.",["b:428"]),
X("At whose house did he dismount in Madinah?",["Abu Ayyub's","Saʿd's","ʿUthman's","Abu Bakr's"],0,"He dismounted at the courtyard of Abu Ayyub's house.",["b:428"]),
X("ʿAbdur-Rahman bin ʿAuf was made brother to whom?",["Saʿd bin ar-Rabiʿ","Bilal","Musʿab","Salman"],0,"He was joined in brotherhood with Saʿd bin ar-Rabiʿ.",["b:2048"]),
X("Who were the first to come to Madinah teaching the Qur'an?",["Musʿab bin ʿUmair and Ibn Umm Maktum","ʿUmar and ʿUthman","Abu Bakr and Bilal","Saʿd and ʿAmmar"],0,"Al-Baraʾ: the first to come to us were Musʿab bin ʿUmair and Ibn Umm Maktum.",["b:3925"])]},
{id:"battles",t:"The Battles",qs:[
X("Roughly how many fought at Badr?",["About 40","Just over 310","About 3,000","10,000"],1,"Over three hundred and ten, the number of Talut's companions.",["b:3957"]),
X("The Qur'an says Allah gave victory at Badr while the believers were…",["Many","Weak / few","Wealthy","Mounted"],1,"'Allah had given you victory at Badr while you were weak.'",["q:3:123"]),
X("How many archers were posted at Uhud?",["Ten","Fifty","One hundred","Three hundred"],1,"Fifty archers.",["b:3039"]),
X("Who commanded the archers at Uhud?",["ʿAbdullah bin Jubair","Hamzah","Khalid bin al-Walid","Abu ʿUbaydah"],0,"ʿAbdullah bin Jubair commanded them.",["b:3039"]),
X("Who killed Hamzah at Uhud?",["Abu Jahl","Wahshi","Abu Sufyan","Ubayy"],1,"Wahshi narrated how he killed Hamzah.",["b:4072"]),
X("What did Allah send against the confederate armies?",["A flood","A wind and unseen armies","An earthquake","Locusts"],1,"'We sent upon them a wind and armies you did not see.'",["q:33:9"]),
X("Who dug the trench?",["Hired labourers","The Emigrants and Ansar themselves","The confederates","No one"],1,"The Emigrants and Ansar dug it on a cold morning, having no slaves to do it.",["b:2834"]),
X("How did the Qur'an describe the outcome of Hudaybiyyah?",["A clear conquest","A defeat","A trial","A delay"],0,"'Indeed, We have given you a clear conquest.'",["q:48:1"]),
X("How many set out with him for the Conquest of Makkah?",["313","3,000","Ten thousand","Seventy"],2,"He left Madinah with ten thousand.",["b:4276"]),
X("How many idols were around the Kaʿbah at the Conquest?",["7","100","360","1,000"],2,"There were 360 idols around the Kaʿbah.",["b:4287"])]},
{id:"character",t:"Character of the Prophet ﷺ",qs:[
X("How does the Qur'an describe his character?",["Great","Stern","Ordinary","Hidden"],0,"'Indeed, you are of a great moral character.'",["q:68:4"]),
X("ʿAishah said his character was…",["The Qur'an","Silence","Poetry","Wealth"],0,"'The character of the Messenger of Allah was the Qur'an.'",["m:746"]),
X("Who did he say are the best among you?",["The richest","Those with the best manners and character","The strongest","The eldest"],1,"'The best amongst you are those who have the best manners and character.'",["b:3559"]),
X("When given a choice between two matters, he chose…",["The harder","The easier, unless sinful","Whatever others chose","Neither"],1,"He chose the easier of the two as long as it was not sinful.",["b:3560"]),
X("Did he take revenge for his own sake?",["Often","Never","Only in Makkah","Only in war"],1,"He never took revenge for his own sake.",["b:3560"]),
X("He was more shy than…",["A virgin in her seclusion","A child","A scholar","A king"],0,"He was more shy than a veiled virgin girl.",["b:3562"]),
X("He was sent as a mercy to…",["The Arabs only","The worlds","Makkah","The believers only"],1,"'We have not sent you except as a mercy to the worlds.'",["q:21:107"]),
X("Qur'an 3:159 tells him to … his companions in the matter.",["Consult","Ignore","Test","Leave"],0,"'…and consult them in the matter.'",["q:3:159"]),
X("Rejected by Ibn ʿAbd-Yalil, he hoped that Allah would…",["Destroy them","Bring from their offspring people who worship Him alone","Exile them","Make them poor"],1,"He hoped their offspring would worship Allah alone.",["b:3231"]),
X("Qur'an 33:21 calls the Messenger…",["An excellent pattern","A poet","A king","A warner only"],0,"'There has certainly been for you in the Messenger of Allah an excellent pattern.'",["q:33:21"])]},
{id:"pillars",t:"Pillars of Islam",qs:[
X("Islam is built on how many pillars?",["Three","Four","Five","Seven"],2,"Islam is built on five.",["b:8"]),
X("Which is NOT one of the five listed in the hadith?",["Hajj","Fasting Ramadan","Zakat","Jihad"],3,"The five are the testimony, prayer, zakat, Hajj and fasting Ramadan.",["b:8"]),
X("The five prayers are likened to…",["A river at the door one bathes in five times a day","A mountain","A lamp","A tree"],0,"Like bathing five times daily in a river at one's door.",["b:528"]),
X("Qur'an 2:43 commands to establish prayer and…",["Give zakah","Travel","Build","Fight"],0,"'Establish prayer and give zakah.'",["q:2:43"]),
X("Whom did the Prophet ﷺ send to Yemen with the teaching on zakat?",["Muʿadh","Bilal","ʿAmr","Abu Hurairah"],0,"Muʿadh: zakat is taken from the rich and given to the poor.",["b:1395"]),
X("The first recipients listed for zakah in 9:60 are…",["The poor and the needy","Soldiers","Scholars","Rulers"],0,"'Zakah expenditures are only for the poor and for the needy…'",["q:9:60"]),
X("Why was fasting decreed (2:183)?",["That you may become righteous","To lose weight","For trade","For war"],0,"'…that you may become righteous.'",["q:2:183"]),
X("In which month was the Qur'an revealed?",["Muharram","Rajab","Ramadan","Dhul-Hijjah"],2,"'The month of Ramadan in which was revealed the Qur'an.'",["q:2:185"]),
X("Fasting Ramadan out of faith and hope of reward brings…",["Forgiveness of past sins","Wealth","Fame","Nothing"],0,"His past sins will be forgiven.",["b:38"]),
X("The reward of an accepted Hajj is…",["Paradise","A title","Gold","Long life"],0,"The reward for Hajj mabrur is nothing except Paradise.",["b:1773"])]},
{id:"prophets",t:"Prophets in the Qur'an",qs:[
X("How long did Nuh remain among his people?",["100 years","950 years","40 years","1,000 years exactly"],1,"A thousand years minus fifty.",["q:29:14"]),
X("What did Allah command the fire about Ibrahim?",["Burn","Be coolness and safety","Rise","Spread"],1,"'O fire, be coolness and safety upon Abraham.'",["q:21:69"]),
X("Who raised the foundations of the House with Ibrahim?",["Ismaʿil","Ishaq","Lut","Yaʿqub"],0,"Ibrahim and Ismaʿil raised its foundations.",["q:2:127"]),
X("In Yusuf's dream, how many stars prostrated?",["Seven","Ten","Eleven","Twelve"],2,"Eleven stars, the sun and the moon.",["q:12:4"]),
X("What was Musa told to strike the sea with?",["His hand","His staff","A stone","A sword"],1,"'Strike with your staff the sea.'",["q:26:63"]),
X("Which prophet smiled at the speech of an ant?",["Dawud","Sulayman","Yunus","Ayyub"],1,"Sulayman smiled at her speech.",["q:27:18","q:27:19"]),
X("Which prophet called 'Adversity has touched me'?",["Ayyub","Nuh","Hud","Salih"],0,"Ayyub called to his Lord.",["q:21:83"]),
X("Who called out 'There is no deity except You' within the darknesses?",["Yunus","Musa","Ibrahim","Yusuf"],0,"The man of the fish, Yunus.",["q:21:87"]),
X("To which prophet was the Zabur given?",["Dawud","Musa","ʿIsa","Ibrahim"],0,"'…and to David We gave the book [of Psalms].'",["q:4:163"]),
X("What were ʿIsa's words: 'Indeed, I am…'",["The son of Allah","The servant of Allah","A king","An angel"],1,"'Indeed, I am the servant of Allah.'",["q:19:30"])]},
{id:"adab",t:"Manners & Character",qs:[
X("Whoever believes in Allah and the Last Day should…",["Speak good or keep quiet","Speak always","Never speak","Argue"],0,"Speak good or keep quiet.",["b:6018"]),
X("None truly believes until he loves for his brother…",["What he loves for himself","Wealth","Nothing","Hardship"],0,"…what he loves for himself.",["b:13"]),
X("A good word is…",["Charity","Weakness","Pride","Idle"],0,"A good word is charity.",["b:2989"]),
X("What must one not say even once to parents?",["'Uff'","'Thank you'","'Salam'","'Yes'"],0,"'Say not to them so much as uff.'",["q:17:23"]),
X("Who is the strong one?",["The wrestler","The one who controls himself in anger","The rich","The tall"],1,"The strong is the one who controls himself while in anger.",["b:6114"]),
X("Which deed is described as among the best?",["Feeding people and greeting known and unknown","Hoarding","Silence always","Travelling"],0,"Feed people and greet those you know and do not know.",["b:12"]),
X("A Muslim is one from whose … other Muslims are safe.",["Tongue and hands","Wealth","House","Animals"],0,"From whose tongue and hands Muslims are safe.",["b:10"]),
X("Qur'an 49:12 forbids…",["Spying and backbiting","Trade","Travel","Marriage"],0,"'Do not spy or backbite each other.'",["q:49:12"]),
X("Luqman advised his son to be moderate in pace and…",["Lower your voice","Raise your voice","Run","Sing"],0,"'Be moderate in your pace and lower your voice.'",["q:31:19"]),
X("Qur'an 2:83: 'Speak to people…'",["Good words","Harshly","Rarely","In secret"],0,"'And speak to people good words.'",["q:2:83"])]},
{id:"women",t:"Women of the Seerah",qs:[
X("Who is called the best amongst the women of this nation?",["Khadijah","Hind","Sumayyah","Zainab"],0,"'Khadijah is the best amongst the women.'",["b:3432"]),
X("Gabriel conveyed to Khadijah glad tidings of…",["A palace in Paradise","Wealth","A son","Victory"],0,"A palace in Paradise with no noise or fatigue.",["b:3820"]),
X("ʿAishah's superiority is likened to that of…",["Tharid over other meals","Gold over silver","The moon over stars","Rain"],0,"Like tharid over other meals.",["b:3770"]),
X("Who sent greetings to ʿAishah through the Prophet ﷺ?",["Gabriel","Khadijah","Abu Bakr","ʿUmar"],0,"'O ʿAishah! This is Gabriel greeting you.'",["b:3768"]),
X("Of whom did he say 'She is a part of me'?",["Fatimah","Zainab","Ruqayyah","Hafsah"],0,"'Fatimah is a part of me.'",["b:3714"]),
X("Fatimah was told she would be chief of…",["The ladies of Paradise","Madinah","Quraysh","The Ansar"],0,"Chief of the ladies of Paradise.",["b:3624"]),
X("Who cut her waist belt to tie the Hijrah provisions?",["Asmaʾ bint Abi Bakr","ʿAishah","Umm Salamah","Fatimah"],0,"Asmaʾ, hence 'Dhat an-Nitaqayn'.",["b:2979"]),
X("Who did the angels say was chosen above the women of the worlds?",["Maryam","Hawwaʾ","Sarah","Asiyah"],0,"'O Mary, indeed Allah has chosen you…above the women of the worlds.'",["q:3:42"]),
X("Who comforted the Prophet ﷺ after the first revelation?",["Khadijah","ʿAishah","Fatimah","Asmaʾ"],0,"Khadijah comforted him.",["b:3"]),
X("In whose house did the Prophet ﷺ pass away?",["ʿAishah's","Hafsah's","Fatimah's","Khadijah's"],0,"In ʿAishah's house.",["b:4449"])]},
{id:"dua",t:"Duʿa & Dhikr",qs:[
X("'Remember Me; I will …'",["Remember you","Test you","Reward you later","Leave you"],0,"'So remember Me; I will remember you.'",["q:2:152"]),
X("Hearts find rest (are assured) by…",["Remembrance of Allah","Wealth","Sleep","Travel"],0,"'By the remembrance of Allah hearts are assured.'",["q:13:28"]),
X("'Call upon Me; I will…'",["Respond to you","Forget you","Delay","Test you"],0,"'Call upon Me; I will respond to you.'",["q:40:60"]),
X("Which verse says 'Indeed I am near'?",["2:186","2:255","1:5","112:1"],0,"Al-Baqarah 2:186.",["q:2:186"]),
X("Which two phrases are 'light on the tongue, heavy in the balance'?",["SubhanAllahi wa bihamdihi, SubhanAllahil-ʿAdhim","Bismillah, Alhamdulillah","Allahu akbar, La ilaha illallah","Astaghfirullah, Ameen"],0,"SubhanAllahi wa bihamdihi; SubhanAllahil-ʿAdhim.",["b:6682"]),
X("Saying SubhanAllahi wa bihamdihi 100 times a day…",["Wipes away sins","Brings wealth","Cures illness","Nothing"],0,"His sins are forgiven even if like sea foam.",["b:6405"]),
X("The 'most superior way of asking forgiveness' begins…",["'O Allah, You are my Lord…'","'Our Lord, give us…'","'Glory be to Allah…'","'In the name of Allah…'"],0,"'O Allah, You are my Lord, there is none worthy of worship except You…'",["b:6306"]),
X("What was the Prophet's most frequent invocation?",["'Our Lord, give us good in this world and good in the Hereafter…'","'O Allah, forgive me'","'Allah is the Greatest'","'There is no power…'"],0,"Anas: his most frequent invocation, cf. 2:201.",["b:6389","q:2:201"]),
X("'La hawla wa la quwwata illa billah' is…",["A treasure of Paradise","A Qur'an verse","A greeting","A curse"],0,"One of the treasures of Paradise.",["b:6384"]),
X("Yunus' duʿa in the darkness was…",["'There is no deity except You; exalted are You…'","'Our Lord, accept from us'","'Adversity has touched me'","'My Lord, expand my chest'"],0,"Qur'an 21:87.",["q:21:87"])]}];

QUIZZES.push(
{id:"isra",t:"Isra & Miʿraj",qs:[
X("Which verse opens with the Night Journey?",["17:1","2:255","53:1","96:1"],0,"'Exalted is He who took His Servant by night…'",["q:17:1"]),
X("From which mosque to which mosque was the Isra?",["Al-Haram to al-Aqsa","Quba to al-Haram","Al-Aqsa to Quba","Nabawi to al-Aqsa"],0,"From al-Masjid al-Haram to al-Masjid al-Aqsa.",["q:17:1"]),
X("How is al-Buraq described?",["White, larger than a donkey, smaller than a mule","A black horse","A camel","A bird"],0,"White, larger than a donkey but smaller than a mule.",["m:162a"]),
X("How many rakʿahs did he pray in Bait al-Maqdis?",["Two","Four","Seven","None"],0,"He entered the mosque and prayed two rakʿahs.",["m:162a"]),
X("Offered wine and milk, he chose…",["Milk","Wine","Water","Honey"],0,"He chose the milk; Gabriel said he had chosen the natural thing.",["m:162a"]),
X("Who was in the first heaven?",["Adam","Ibrahim","Musa","ʿIsa"],0,"'This is your father, Adam.'",["b:3887"]),
X("Who was in the sixth heaven (Bukhari 3887 / Muslim 162a)?",["Musa","Harun","Idris","Yusuf"],0,"He saw Musa in the sixth heaven.",["b:3887","m:162a"]),
X("Who was reclining against al-Bait al-Maʿmur?",["Ibrahim","Adam","Idris","Nuh"],0,"Ibrahim, in the seventh heaven.",["m:162a"]),
X("How many angels enter al-Bait al-Maʿmur each day?",["Seventy thousand","One thousand","Seven hundred","Seventy"],0,"70,000 angels, never to return.",["b:3207","m:162a"]),
X("How many daily prayers were first enjoined?",["Fifty","Ten","Five","Forty"],0,"Fifty, reduced to five on Musa's advice.",["b:3887"]),
X("Which two visible rivers flowed from Sidrat al-Muntaha?",["Nile and Euphrates","Tigris and Jordan","Indus and Nile","Euphrates and Jordan"],0,"The visible rivers are the Nile and the Euphrates.",["b:3887"])]},
{id:"quran",t:"Qur'an Knowledge",qs:[
X("In which month was the Qur'an revealed?",["Ramadan","Rajab","Shaʿban","Muharram"],0,"'The month of Ramadan in which was revealed the Qur'an.'",["q:2:185"]),
X("In what language was the Qur'an sent down?",["Arabic","Hebrew","Syriac","Persian"],0,"'We have sent it down as an Arabic Qur'an that you might understand.'",["q:12:2"]),
X("Who guards the Qur'an?",["Allah","The scholars","The caliphs","No one"],0,"'Indeed, it is We who sent down the message, and We will be its guardian.'",["q:15:9"]),
X("The Night of Decree is better than…",["A thousand months","A hundred years","Ramadan","A lifetime"],0,"'The Night of Decree is better than a thousand months.'",["q:97:3"]),
X("Surah al-Ikhlas is equal to … of the Qur'an.",["One third","One half","One quarter","All"],0,"'This Surah is equal to one-third of the Qur'an!'",["b:5013"]),
X("How should the Qur'an be recited (73:4)?",["With measured recitation (tartil)","Quickly","Silently only","Once a year"],0,"'Recite the Qur'an with measured recitation.'",["q:73:4"]),
X("The best of you are those who…",["Learn the Qur'an and teach it","Memorise poetry","Build mosques","Travel"],0,"'The best among you are those who learn the Qur'an and teach it.'",["b:5027"]),
X("Whose letter began 'In the name of Allah, the Entirely Merciful'?",["Sulayman's","Musa's","Yusuf's","Nuh's"],0,"'It is from Solomon, and it reads: In the name of Allah…'",["q:27:30"]),
X("The Qur'an is described in 17:82 as…",["Healing and mercy for the believers","A book of poetry","A history only","A law for Arabs"],0,"'…that which is healing and mercy for the believers.'",["q:17:82"]),
X("What were the first revealed words?",["'Recite in the name of your Lord who created'","'All praise is for Allah'","'Say: He is Allah, One'","'O mankind'"],0,"The first revelation in Hira began with these words.",["q:96:1","b:3"]),
X("'Allah, there is no deity except Him, the Ever-Living, the Self-Sustaining' is the opening of…",["2:255","1:1","112:1","36:1"],0,"Al-Baqarah 2:255 (Ayat al-Kursi).",["q:2:255"])]},
{id:"sahabah",t:"The Sahabah",qs:[
X("Who was the Prophet's companion in the cave?",["Abu Bakr","ʿUmar","ʿUthman","ʿAli"],0,"Abu Bakr.",["b:3653"]),
X("'If I were to take a Khalil, I would have taken…'",["Abu Bakr","ʿUmar","ʿAli","Bilal"],0,"'…I would have taken Abu Bakr.'",["b:3656"]),
X("Who did the Prophet ﷺ say Satan avoids on the path?",["ʿUmar","Abu Hurairah","Khalid","Zaid"],0,"Satan takes another path than ʿUmar's.",["b:3683"]),
X("To whom do even the angels show modesty?",["ʿUthman","Abu Bakr","ʿAli","Saʿd"],0,"'Should I not show modesty to one whom even the angels show modesty?'",["m:2401"]),
X("Who bought and dug the well of Rumah?",["ʿUthman","ʿAbdur-Rahman","Talhah","Abu Bakr"],0,"ʿUthman reminded the people that he dug the well of Rumah.",["b:2778"]),
X("'You are to me like Aaron was to Moses' was said to…",["ʿAli","Abu Bakr","ʿUmar","Musʿab"],0,"Said to ʿAli.",["b:3706"]),
X("Who was given the flag at Khaybar?",["ʿAli","Khalid","ʿUmar","Abu ʿUbaydah"],0,"The Prophet ﷺ gave the flag to ʿAli.",["b:3701"]),
X("Whose footsteps did the Prophet ﷺ hear in Paradise?",["Bilal","Salman","Abu Dharr","Anas"],0,"Bilal's footsteps.",["b:1149"]),
X("Who is 'the trustworthy man of this Ummah'?",["Abu ʿUbaydah bin al-Jarrah","Saʿd","Zubair","Talhah"],0,"Abu ʿUbaydah.",["b:3744"]),
X("Who was the first Arab to shoot an arrow in Allah's cause?",["Saʿd bin Abi Waqqas","Hamzah","ʿAli","Khalid"],0,"Saʿd said so of himself.",["b:3728"]),
X("Whose shroud did not cover both head and feet after Uhud?",["Musʿab bin ʿUmair","Hamzah","Bilal","Zaid"],0,"Musʿab's only garment was too short.",["b:1276"])]},
{id:"hadith",t:"Hadith Sayings: Complete It",qs:[
X("'Actions are (judged) by…'",["Intentions","Results","Numbers","Wealth"],0,"'The reward of deeds depends upon the intentions.'",["b:1"]),
X("'The religion is…'",["Sincerity (naṣīḥah)","Ritual","Knowledge","Wealth"],0,"'The Religion is sincerity': to Allah, His Book, His Messenger, the leaders and the people.",["m:55"]),
X("'Cleanliness is … of faith.'",["Half","All","A third","A branch"],0,"'Cleanliness is half of faith.'",["m:223"]),
X("'Allah does not look at your faces and wealth, but at your…'",["Hearts and deeds","Lineage","Speech","Clothes"],0,"'…He looks to your heart and to your deeds.'",["m:2564c"]),
X("'Whoever follows a path seeking knowledge, Allah makes easy for him a path to…'",["Paradise","Wealth","Leadership","Fame"],0,"A path to Paradise.",["m:2699"]),
X("'None of you truly believes until he loves for his brother…'",["What he loves for himself","Gold","Nothing","His wealth"],0,"…what he loves for himself.",["b:13"]),
X("'Whoever believes in Allah and the Last Day, let him…'",["Speak good or keep quiet","Fast daily","Travel","Debate"],0,"Speak good or keep quiet.",["b:6018"]),
X("'The strong one is not the wrestler but…'",["The one who controls himself in anger","The rich","The leader","The scholar"],0,"…the one who controls himself while angry.",["b:6114"]),
X("'A good word is…'",["Charity","Enough","Rare","Weak"],0,"'A good word is charity.'",["b:2989"]),
X("'The best among you are those who learn the Qur'an and…'",["Teach it","Sell it","Hide it","Sing it"],0,"…and teach it.",["b:5027"]),
X("'A Muslim is one from whose tongue and … the Muslims are safe.'",["Hands","Wealth","Eyes","House"],0,"…tongue and hands.",["b:10"])]},
{id:"ramadan",t:"Ramadan & Fasting",qs:[
X("Fasting was prescribed so that you may become…",["Righteous","Rich","Strong","Famous"],0,"'…that you may become righteous.'",["q:2:183"]),
X("Who may make up missed fasts on other days?",["The ill or travelling","Only the elderly","No one","Only children"],0,"'Whoever among you is ill or on a journey, then an equal number of other days.'",["q:2:184"]),
X("Until when may one eat and drink at night?",["Until the white thread of dawn is distinct from the black","Midnight","Sunrise","ʿIsha"],0,"Until the white thread of dawn becomes distinct.",["q:2:187"]),
X("Allah said fasting is…",["For Me, and I will reward it","Optional","For the angels","A punishment"],0,"'Fasting is for Me and I will give the reward for it.'",["b:1904"]),
X("What did the Prophet ﷺ say about suhur?",["There is blessing in it","Skip it","Only in winter","It breaks the fast"],0,"'Take suhur, as there is a blessing in it.'",["b:1923"]),
X("People remain on the right path as long as they…",["Hasten to break the fast","Delay iftar","Fast every day","Skip suhur"],0,"…as long as they hasten the breaking of the fast.",["b:1957"]),
X("When Ramadan begins, the gates of … are opened.",["Heaven","Hell","The mosques","The cities"],0,"The gates of heaven are opened, Hell's closed, devils chained.",["b:1899"]),
X("Standing in prayer on Laylat al-Qadr out of faith and hope brings…",["Forgiveness of past sins","Wealth","Health","Nothing"],0,"His past sins will be forgiven.",["b:1901"]),
X("Seek Laylat al-Qadr in…",["The odd nights of the last ten","The first night","Shaʿban","Any month"],0,"Search for it in the odd nights of the last ten of Ramadan.",["b:2017"]),
X("Fasting Ramadan then six days of Shawwal is like…",["Fasting perpetually","One month","Two months","A Hajj"],0,"'…as if he fasted perpetually.'",["m:1164"]),
X("The Night of Decree is better than…",["A thousand months","Ten nights","A year","Ramadan"],0,"'Better than a thousand months.'",["q:97:3"])]});
QUIZZES.push({id:"mixed",t:"Mixed Challenge",mixed:true,qs:[]});
const bestOf=id=>localStorage.getItem('sj_qbest_'+id);
function syncOverall(){const real=QUIZZES.filter(z=>!z.mixed),avg=Math.round(real.reduce((s,z)=>s+(+bestOf(z.id)||0),0)/real.length);
 localStorage.setItem('sj_quiz_best',avg);} // home progress: average of best scores across topic quizzes
let Z=null,qs=[],i=0,score=0,answered=false;
function picker(){Z=null;qview.hidden=true;pick.hidden=false;
 pick.innerHTML=QUIZZES.map(z=>{const b=bestOf(z.id);return `<button class="pc qz" data-id="${z.id}"><div class="init" style="width:54px;height:54px;font-size:20px">${({life:'☾',hijrah:'➶',battles:'⚑',character:'❖',pillars:'۞',isra:'☾',quran:'۝',sahabah:'❂',hadith:'❝',ramadan:'☪',prophets:'✧',adab:'❀',women:'✿',dua:'✋',mixed:'✦'})[z.id]}</div><h3>${z.t}</h3><small>${z.mixed?'15 random questions from all quizzes':z.qs.length+' questions'}</small><div style="margin-top:8px;color:var(--gold2);font-weight:700">Best: ${b?b+'%':'-'}</div></button>`}).join('');
 pick.querySelectorAll('.qz').forEach(b=>b.onclick=()=>start(b.dataset.id))}
function start(id){Z=QUIZZES.find(z=>z.id===id);qs=Z.mixed?QUIZZES.filter(z=>!z.mixed).flatMap(z=>z.qs).sort(()=>Math.random()-.5).slice(0,15):Z.qs;
 i=0;score=0;sc.textContent='Score: 0';qtitle.textContent=Z.t;best.textContent=bestOf(id)?bestOf(id)+'%':'-';pick.hidden=true;qview.hidden=false;show()}
function show(){answered=false;const x=qs[i];qn.textContent=`Question ${i+1} of ${qs.length}`;qq.textContent=x.q;
 opts.innerHTML=x.o.map((o,j)=>`<button class="opt" data-j="${j}">${o}</button>`).join('');ex.style.display='none';nx.style.display='none';
 opts.querySelectorAll('.opt').forEach(b=>b.onclick=()=>choose(+b.dataset.j))}
function choose(j){if(answered)return;answered=true;const x=qs[i];if(j===x.a)score++;
 opts.children[x.a].classList.add('right');if(j!==x.a)opts.children[j].classList.add('wrong');
 ex.innerHTML=(j===x.a?'✅ Correct. ':'❌ Not quite. ')+sent(x.e);ex.style.display='block';sc.textContent=`Score: ${score}`;nx.style.display='inline-flex';nx.textContent=i<qs.length-1?'Next →':'See result'}
nx.onclick=()=>{if(i<qs.length-1){i++;show()}else finish()};
function finish(){const p=Math.round(score/qs.length*100),b=Math.max(p,+bestOf(Z.id)||0);localStorage.setItem('sj_qbest_'+Z.id,b);syncOverall();
 qn.textContent='Result';qq.textContent=`You scored ${score}/${qs.length} (${p}%). Best: ${b}%`;best.textContent=b+'%';
 opts.innerHTML='<button class="gbtn" id="again">Try again</button> <button class="ob" id="back" style="cursor:pointer">All quizzes</button>';ex.style.display='none';nx.style.display='none';
 again.onclick=()=>start(Z.id);back.onclick=picker}
backTop.onclick=picker;picker();
