let jsondata = "";
let apiUrl = "http://localhost/kotijate.json"
var kotijate;
var huo=[];

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main() {
    
    //OPTION 2
    jsondata = await getJson(apiUrl)
    return jsondata;
    //console.log(jsondata);
}


//console.log(getIP());


main().then(data => {
    //var nameDiv = document.querySelector('#PlayerName')
    //nameDiv.innerHTML = `Batting: ${player}`;   
   
    kotijate=data;
    for(var i=0;i<Object.values(kotijate)[0].length;i++){
        huo.push(Object.values(kotijate)[0][i]);
      }
    //console.log("mikaonparas: "+kotijate);
})

console.log("mikaonparas TAAS: "+kotijate);
//Object.keys(test)[0]
