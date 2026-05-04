let pelitilaAlue;
let pontotAlue;
let kortitAlue;
let pallotAlue;
let kortti=[];
let korttiTeksti=[];
let pallo=[];
let kuvaJate = [];
let dataJSON;
let dataReady = false;
let valinta = "Kotijäte Peli";
let pelitila = "playing"; // playing | gameover
let resultEl;
let gameoverEl;
const restartBtn = document.getElementById("restartBtn");
let moveIndex = 0;
let success_count=0;
let gameover_status=false;
let peliData;
let pontot;
let kaikkiJatteet;
let ponttoTekstit;    //kategoriat voi sis. tyhjiä ja ÄÖ


async function start() {

  console.log("START GAME");
  /*
  restartBtn = document.createElement("button");
  restartBtn.innerHTML = "Pelaa uudestaan";
  restartBtn.id = "restartBtn";
  restartBtn.style.display = "none";
  */

  restartBtn.addEventListener("click", () => {
  resetGame();
  myGame();
  });

  document.getElementById("kotipainike").addEventListener("click", function () {
  window.location.href = "index.html";
  });
/*
  document.querySelector("#pelipaneeli").appendChild(restartBtn);
  */
  console.log("1 OK");
  dataJSON = await loadGameData();
  console.log("2 OK", dataJSON);
  dataReady = true; // 👈 TÄNNE

  // Nämä että nimessä voi olla ÄÖ ja tyhjiä!
  categories = [
  "SEKAJÄTE",
  "METALLI",
  "LASI",
  "BIO",
  "PAPERI",
  "MUOVI",
  "KARTONKI"
];

  categories2 = [
  "METALLI",
  "ÖLJYT JA NESTEET",
  "KIINTEÄ ÖLJYINEN",
  "VAIHTO-OSAT",
  "UUSIO ENERGIA",
  "POLTETTAVA",
  "SER"
];

  listener(); 

  const dataKey = valinta === "Kotijäte Peli" ? "kotijate" : "autojate";
  tarkistaData(dataKey, dataJSON);
  
  myGame(); // 🔥 käynnistyy heti
  
}

function myGame() {
  //console.log(kotijatteet);

  restartBtn.style.display = "none";

  peliData =
  valinta === "Kotijäte Peli"
    ? dataJSON.kotijate
    : dataJSON.autojate;

  pontot = Object.keys(peliData); 
  kaikkiJatteet = Object.values(peliData).flat();
//document.querySelector("#peli").appendChild(restartBtn);

if (!dataReady) {
    
  alert("JSON data ei ole vielä ladattu");
  return;
}

//console.log("2. osa"+valinta)

document.getElementById("painike").style.display="none";
document.getElementById("painike2").style.display="none";
document.getElementById("kierratys").style.display="none";
document.getElementById("kierratys2").style.display="none";

luoPaneelit();
luoPontot(pontot);
//console.log("JEEEE "+valinta); 
luoKortit(kaikkiJatteet);
}

function clearDropHighlight(target) {
  if (!target) return;
  target.style.background = "";
  target.style.borderRadius = "";
}

function updateScore() {
  if (resultEl) {
    resultEl.innerHTML = success_count + "/15";
  }
}

function GameOver() {
  pelitila = "gameover";

  restartBtn.style.display = "block";

  // 🔥 nollaa kaikki pöntöt
  document.querySelectorAll("[class^='droptarget']").forEach(el => {
    el.style.background = "";
    el.style.borderRadius = "";
  });

  gameoverEl.style.display = "block";
  resultEl.style.display = "block";
  restartBtn.style.display = "block";
}

function resetGame() {
  moveIndex = 0;
  success_count = 0;
  pelitila = "playing";

  // 👇 tyhjennä vain pelialueet, ei koko containeria
  if (kortitAlue) kortitAlue.remove();
  if (pontotAlue) pontotAlue.remove();
  if (pallotAlue) pallotAlue.remove();
  if (pelitilaAlue) pelitilaAlue.remove();

  gameoverEl = null;
  resultEl = null;

  if (restartBtn) {
    restartBtn.style.display = "none";
  }
}


function muotoileAutoTeksti(text) {
  if (typeof text !== "string") return "";

  let t = text.trim();
  // 1) JA → pysyy samassa rivissä, mutta katkeaa sen jälkeen
  t = t.replace(/\s+JA\s+/g, " JA\n");
  // 2) - → katkeaa, mutta viiva säilyy
  t = t.replace(/\s*-\s*/g, "-\n");
  // 3) vain muut yksittäiset välit (EI JA:n sisällä enää sotketa)
  t = t.replace(/ (?!(JA|-))/g, "\n");

  return t.replace(/\n/g, "<br>");
}

function painike() {
  valinta = "Kotijäte Peli";
}

function painike2() {
  valinta = "Autojäte Peli";
}


function luoPaneelit() {
  
  kortitAlue=document.createElement("div");
  kortitAlue.className="grid-kortit-container";
  document.querySelector("#pelipaneeli").appendChild(kortitAlue);
    
  pelitilaAlue=document.createElement("div");
  pelitilaAlue.className="grid-gameover-container";
  document.querySelector("#pelipaneeli").appendChild(pelitilaAlue);

  pontotAlue=document.createElement("div");
  pontotAlue.className="grid-pontot-container";
  document.querySelector("#pelipaneeli").appendChild(pontotAlue);

  pallotAlue=document.createElement("div");
  pallotAlue.className="grid-valot-container";
  document.querySelector("#pelipaneeli").appendChild(pallotAlue);
    
  // tulos näytölle x/15

  gameoverEl = document.createElement("p");
  gameoverEl.id = "gameover";
  gameoverEl.style.display = "none"; // piiloon alussa
  pelitilaAlue.appendChild(gameoverEl);
  gameoverEl.innerHTML = "GAME OVER";

  resultEl = document.createElement("p");
  resultEl.id = "result";
  resultEl.style.alignSelf = "start";
  resultEl.style.display = "none"; // 🔥 TÄHÄN
  pelitilaAlue.appendChild(resultEl);
  resultEl.innerHTML = success_count + "/15";

} 

function luoKortit(kaikkiJatteet) {
  
  //console.log(kotijatteet);
  
  for (let u = 0; u < 1; u++) { 

  pallo[u]=document.createElement("div");
  pallo[u].id="pallo"+u;   
  pallo[u].className="pallo";
  pallotAlue.appendChild(pallo[u]);
  
  //nappula.push(document.createElement("div"));
  kortti[u] = document.createElement("div");
  let tekstiDiv = document.createElement("div");
  kortti[u].appendChild(tekstiDiv);
  korttiTeksti[u] = tekstiDiv;
  korttiTeksti[u].style.borderRadius="6px";
  kortti[u].id = "roskakortti"+u;
  kortti[u].className = "roskakortti";
  kortti[u].dataset.index = u;
  pallo[u].dataset.index = u;

  
    const randomItem = (arr) => {
    const u = Math.floor(Math.random() * arr.length);
    return arr.splice(u, 1)[0];
    };

    
  korttiTeksti[u].innerHTML=randomItem(kaikkiJatteet);
  korttiTeksti[u].style.fontWeight="bold";
  korttiTeksti[u].id = "dragtarget"+u; 
  kortti[u].draggable="true";  
  kortitAlue.appendChild(kortti[u]); 
}


} 

function luoPontot(pontot) {

  const ponttoTekstit =
    valinta === "Kotijäte Peli"
      ? categories
      : categories2;

  for (let u = 0; u < pontot.length; u++) {

    const kuva = document.createElement("img");
    kuva.className = "droptarget" + u;
    kuva.src = pontot[u] + ".png";
    kuva.dataset.type = pontot[u];

    const item = document.createElement("div");
    item.classList.add("pontto-item");

    const kuvaBox = document.createElement("div");
    kuvaBox.appendChild(kuva);

    // 🔥 luodaan teksti tässä (ei enää arrayta)
    const tekstiEl = document.createElement("p");
    tekstiEl.className = "jateteksti";

    tekstiEl.innerHTML =
      valinta === "Autojäte Peli"
        ? muotoileAutoTeksti(ponttoTekstit[u])
        : ponttoTekstit[u];

    item.appendChild(kuvaBox);
    item.appendChild(tekstiEl);

    pontotAlue.appendChild(item);
  }
}

function tarkistaData(dataKey, dataJSON) {
  const dataset = dataJSON[dataKey];

  const kaikki = Object.values(dataset).flat();

  const pontot = Object.keys(dataset)
    .filter(k => k !== `${dataKey}tteet`)
    .flatMap(k => dataset[k].map(x => x.toLowerCase().trim()));

  const kaikkiSet = new Set(kaikki);
  const ponttoSet = new Set(pontot);

  const puuttuvat = kaikki.filter(x => !ponttoSet.has(x));
  const ylimaaraiset = pontot.filter(x => !kaikkiSet.has(x));

  console.log("=== CHECK ===");
  console.log(dataKey, "kaikki:", kaikki.length);
  console.log("pöntöt:", pontot.length);
  console.log("MATCH:", kaikki.length === pontot.length);

  return {
    ok: puuttuvat.length === 0 && ylimaaraiset.length === 0,
    puuttuvat,
    ylimaaraiset
  };
}