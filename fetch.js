async function loadJSON(url) {
  const response = await fetch(url);
  return await response.json();
}

async function loadGameData() {

  const kotijate = await loadJSON("kotijate.json");
  const autojate = await loadJSON("autojate.json");

  window.loadJSON = loadJSON;
  window.loadGameData = loadGameData;

  return { kotijate, autojate };

  
}