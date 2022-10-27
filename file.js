var kotijate = {
  "jatteet": [
    ["likaantuneet paperit ja pahvit","hehku- ja halogeenilamput","sulakkeet","siivousjäte","imurin pölypussit",
    "pvc–muovia sisältävät puhallettavat lelut","pvc-muovia sisältävät muovipressut","pvc–muovia sisältävät sadevaatteet",
    "tablettien läpipainopakkaukset","lelu- ja autotarvikepakkaukset","sipsipussit ja kahvipaketit","tuhka ja tupakantumpit", 
    "ikkuna- ja peililasi","pyrexlasi","posliini","keramiikka","kristalli","kasetit (VHS- ja C-kasetit)","tulostimien värikasetit", 
    "valokuvat ja negatiivit","nahka ja lumput","polkupyörän renkaat","kumiset lelut","rikkinäiset kengät ja vaatteet", 
    "kertakäyttövaipat ja terveyssiteet","tavallinen ja  mineraalipohjainen kissanhiekka","lemmikkieläinten jätökset",
    "ruoantähteet", "pilaantuneet elintarvikkeet","hedelmien- ja kasvistenkuoret","naatit","mehumaijan sakat","kahvin- ja teenporot", 
    "käytetyt suodatin- ja teepussit","kananmunankuoret","kalanperkuujätteet","pienet luut","talouspaperi","lautasliinat ja nenäliinat", 
    "leikkokukat","ruukkukukkien kasviosat",
    "muovipakkaukset","elintarvike- ja pesuainepakkaukset","muovipussit ja -kääreet","muovipullot, -kanisterit ja -purkit","styroksipakkaukset",
    "ikkunalasi ilman karmeja","peili- ja tasolasi","juomalasit","kristalli","muut lasituotteet","opaalilasiset pullot",
    "paistinpannujen ja kattiloiden lasiset kannet","säilyketölkit","kotitalouden pienmetalliesineet","metalliset kannet ja korkit","alumiinifoliot ja -vuoat","tuikkujen kuoret","maalipurkit", 
    "spraypullot","sanoma- ja aikakauslehdet","toimistopaperit","mainospostit","uusiopaperit","kirjekuoret","värilliset kopiopaperit","pehmeäkantiset kirjat", 
    "kovakantisen kirjan sivut","maito- ja mehutölkit","muro- ja keksipaketit","muut kuivien tuotteiden kartonkipakkaukset","pahvilaatikot","pitsalaatikot", 
    "wc- ja talouspaperirullien hylsyt","kartonkiset kertakäyttöastiat"]
  ],
  "SEKAJÄTE": [
    ["likaantuneet paperit ja pahvit","hehku- ja halogeenilamput","sulakkeet","siivousjäte","imurin pölypussit",
    "pvc–muovia sisältävät puhallettavat lelut","pvc-muovia sisältävät muovipressut","pvc–muovia sisältävät sadevaatteet",
    "tablettien läpipainopakkaukset","lelu- ja autotarvikepakkaukset","sipsipussit ja kahvipaketit","tuhka ja tupakantumpit", 
    "ikkuna- ja peililasi","pyrexlasi","posliini","keramiikka","kristalli","kasetit (VHS- ja C-kasetit)","tulostimien värikasetit", 
    "valokuvat ja negatiivit","nahka ja lumput","polkupyörän renkaat","kumiset lelut","rikkinäiset kengät ja vaatteet", 
    "kertakäyttövaipat ja terveyssiteet","tavallinen ja  mineraalipohjainen kissanhiekka","lemmikkieläinten jätökset"]
  ],
  "METALLI": [
    ["säilyketölkit","kotitalouden pienmetalliesineet","metalliset kannet ja korkit","alumiinifoliot ja -vuoat","tuikkujen kuoret","maalipurkit", 
    "spraypullot"]
  ],
  "LASI": [
    ["ikkunalasi ilman karmeja","peili- ja tasolasi","juomalasit","kristalli","muut lasituotteet","opaalilasiset pullot",
    "paistinpannujen ja kattiloiden lasiset kannet"]
  ],
  "BIO": [
    ["ruoantähteet", "pilaantuneet elintarvikkeet","hedelmien- ja kasvistenkuoret","naatit","mehumaijan sakat","kahvin- ja teenporot", 
    "käytetyt suodatin- ja teepussit","kananmunankuoret","kalanperkuujätteet","pienet luut","talouspaperi","lautasliinat ja nenäliinat", 
    "leikkokukat","ruukkukukkien kasviosat"]
  ],
  "PAPERI": [
    ["sanoma- ja aikakauslehdet","toimistopaperit","mainospostit","uusiopaperit","kirjekuoret","värilliset kopiopaperit","pehmeäkantiset kirjat", 
    "kovakantisen kirjan sivut"]
  ],
  "MUOVI": [
    ["muovipakkaukset","elintarvike- ja pesuainepakkaukset","muovipussit ja -kääreet","muovipullot, -kanisterit ja -purkit","styroksipakkaukset"]
  ],
  "KARTONKI": [
    ["maito- ja mehutölkit","muro- ja keksipaketit","muut kuivien tuotteiden kartonkipakkaukset","pahvilaatikot","pitsalaatikot", 
    "wc- ja talouspaperirullien hylsyt","kartonkiset kertakäyttöastiat"]
  ],

};
var json_jatteet;
var fs = require('fs');
fs.writeFile('mynewfile3.json', json_jatteet=JSON.stringify(kotijate.jatteet[0]), function (err) {
  if (err) throw err;
  console.log('Saved!');
});