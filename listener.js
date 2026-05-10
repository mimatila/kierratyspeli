let listenersAdded = false;
let resultColor="valkoinen";

function listener() {

  if (listenersAdded) return;
  listenersAdded = true;

  /* ---------------- DRAG START ---------------- */
  document.addEventListener("dragstart", function (event) {
    const card = event.target.closest(".roskakortti");
    if (!card) return;

    event.dataTransfer.setData("kortti", card.id);
    card.style.opacity = "0.6";
  });

  /* ---------------- DRAG ---------------- */
  document.addEventListener("drag", function (event) {
    const card = event.target.closest(".roskakortti");
    if (!card) return;
  });

  /* ---------------- DRAG END ---------------- */
  document.addEventListener("dragend", function (event) {
    const card = event.target.closest(".roskakortti");
    if (!card) return;

    card.style.opacity = "1";
  });

  /* ---------------- DRAG ENTER ---------------- */
  document.addEventListener("dragenter", function (event) {
    const target = event.target.closest("[class^='droptarget']");
    if (!target) return;

    target.style.background = "yellow";
    target.style.borderRadius = "6px";
  });

  /* ---------------- DRAG OVER ---------------- */
  document.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  /* ---------------- DRAG LEAVE ---------------- */
  document.addEventListener("dragleave", function (event) {
    const target = event.target.closest("[class^='droptarget']");
    if (!target) return;

    target.style.background = "";
    target.style.borderRadius = "";
  });

  /* ---------------- DROP ---------------- */
  document.addEventListener("drop", function (event) {
  event.preventDefault();

  if (pelitila === "gameover") return;

  const target = event.target.closest("[class^='droptarget']");
  if (!target) return;

  const cardId = event.dataTransfer.getData("kortti");
  const card = document.getElementById(cardId);
  if (!card) return;

  const type = target.dataset.type;

  const lista =
    valinta === "Kotijäte Peli"
      ? dataJSON.kotijate[type]
      : dataJSON.autojate[type];

  const text = card.textContent.trim();

  const normalize = str =>
    str.toLowerCase().replace(/\s+/g, " ").trim();

  const match = lista?.some(item =>
    normalize(item) === normalize(text)
  );

  // 🔥 SIIRRETÄÄN KORTTI ENSIN
  target.appendChild(card);
  card.style.opacity = "1";

  // 🔥 INDEX LOGIIKKA
  const currentIndex = moveIndex;
  moveIndex++;

  // 🔥 PÄIVITÄ PALLO
  const palloEl = document.getElementById("pallo" + currentIndex);

  if (palloEl) {
    palloEl.style.backgroundColor = match ? "green" : "red";
  }

  // 🔥 SCORE
  if (match) {
    success_count++;
    updateScore();
  }

  // 🔥 GAME OVER (AINOASTAAN YKSI KERTA)
  if (moveIndex >= 15) {
    //console.log("hehe000: "+success_count+" hahahah: "+resultEl);
    gameState = "gameover";

    if (success_count < 9) result.style.color = "red";
      else if (success_count < 14) result.style.color = "yellow";
        else result.style.color = "green";
    
    /*
    if(success_count<9) {
      result.style.color= "red";
    }
    if(success_count>=9&&success_count<14) {
      result.style.color= "yellow";
    }
    if(success_count>=14) {
      result.style.color= "green";
    }
      */
    setTimeout(() => GameOver(), 50);
    return;
  }

  clearDropHighlight(target);
});
}