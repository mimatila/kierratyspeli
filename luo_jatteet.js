const jatteet = ["likaantuneet paperit ja pahvit","hehku- ja halogeenilamput","sulakkeet","siivousjäte","imurin pölypussit",
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
"wc- ja talouspaperirullien hylsyt","kartonkiset kertakäyttöastiat"];

const seka = ["likaantuneet paperit ja pahvit","hehku- ja halogeenilamput","sulakkeet","siivousjäte","imurin pölypussit",
"pvc–muovia sisältävät puhallettavat lelut","pvc-muovia sisältävät muovipressut","pvc–muovia sisältävät sadevaatteet",
"tablettien läpipainopakkaukset","lelu- ja autotarvikepakkaukset","sipsipussit ja kahvipaketit","tuhka ja tupakantumpit", 
"ikkuna- ja peililasi","pyrexlasi","posliini","keramiikka","kristalli","kasetit (VHS- ja C-kasetit)","tulostimien värikasetit", 
"valokuvat ja negatiivit","nahka ja lumput","polkupyörän renkaat","kumiset lelut","rikkinäiset kengät ja vaatteet", 
"kertakäyttövaipat ja terveyssiteet","tavallinen ja  mineraalipohjainen kissanhiekka","lemmikkieläinten jätökset"];

const metalli = ["säilyketölkit","kotitalouden pienmetalliesineet","metalliset kannet ja korkit","alumiinifoliot ja -vuoat","tuikkujen kuoret","maalipurkit", 
"spraypullot"];

const lasi = ["ikkunalasi ilman karmeja","peili- ja tasolasi","juomalasit","kristalli","muut lasituotteet","opaalilasiset pullot",
"paistinpannujen ja kattiloiden lasiset kannet"];

const bio = ["ruoantähteet", "pilaantuneet elintarvikkeet","hedelmien- ja kasvistenkuoret","naatit","mehumaijan sakat","kahvin- ja teenporot", 
"käytetyt suodatin- ja teepussit","kananmunankuoret","kalanperkuujätteet","pienet luut","talouspaperi","lautasliinat ja nenäliinat", 
"leikkokukat","ruukkukukkien kasviosat"];

const paperi = ["sanoma- ja aikakauslehdet","toimistopaperit","mainospostit","uusiopaperit","kirjekuoret","värilliset kopiopaperit","pehmeäkantiset kirjat", 
"kovakantisen kirjan sivut"];

const muovi = ["muovipakkaukset","elintarvike- ja pesuainepakkaukset","muovipussit ja -kääreet","muovipullot, -kanisterit ja -purkit","styroksipakkaukset"];

const kartonki = ["maito- ja mehutölkit","muro- ja keksipaketit","muut kuivien tuotteiden kartonkipakkaukset","pahvilaatikot","pitsalaatikot", 
"wc- ja talouspaperirullien hylsyt","kartonkiset kertakäyttöastiat"];

// the divs are taken by id from the canvas.
let firstDiv = document.getElementById('firstLine');
let secondDiv = document.getElementById('secondLine');
let thirdDiv = document.getElementById('thirdLine');
let innerDiv = document.getElementById('innerLine');

// The rabbish bin's names.
let bins = ["seka", "metalli", "lasi", "bio", "paperi", "muovi", "kartonki"];

// the function returns a random number.
function chooseRandomNum(){
  return Math.floor(Math.random() * (jatteet.length));
}

// the checker for unsimilarity of random numbers
function checkTheRandom(arr, randomNum){
  let token = true;
  for(let elem of arr){
    if(elem == randomNum){
      token = false;
    }
  }
  return token;
}

//The array of got random numbers.
let insistRandoms = [];

//The cards creating and implacement into firstLines DIV.
for(let i = 0; i < 16; i++){
  let newRandom;
  while(true){
    newRandom = chooseRandomNum();
    if(checkTheRandom(insistRandoms, newRandom)==true){
      break;
    }
  }
  insistRandoms.push(newRandom);
  let elem = document.createElement('div');
  elem.classList = "cards";
  elem.innerText = jatteet[newRandom];
  elem.name = jatteet[newRandom];
  elem.draggable = true;
  firstDiv.appendChild(elem);
  console.log(elem.name);
}

// The rabbish bin's creating.
for(let elem of bins){
  let rabbishBin = document.createElement('img');
  let adress = elem + ".png";
  rabbishBin.src = adress;
  rabbishBin.title = elem;
  rabbishBin.classList = "bins";
  secondDiv.appendChild(rabbishBin);
  console.log(rabbishBin.classList);
}

for(let i = 0; i < 16; i++){
  let circle = document.createElement('div');
  circle.classList = "circle";
  innerDiv.appendChild(circle);
}

for(let elem of bins){
  let binName = document.createElement('div');
  binName.innerText = elem;
  binName.classList = "bins";
  binName.style.textAlign = "center";
  thirdDiv.appendChild(binName);
}
