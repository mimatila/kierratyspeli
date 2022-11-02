var kotijate;
var pontot=[];
var jatteet=[];
var jatteetorg=[];
var seka=[];
var metalli=[];
var lasi=[];
var bio=[];
var paperi=[];
var muovi=[];
var kartonki=[];

async function getKotiJate() {
    let apiResponse = await fetch("http://localhost/kierrätys/kotijate.json");
    let response = apiResponse.json();
    return response;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }
   
  getKotiJate().then((result)=>{  
    
    kotijate=result;
    
    for(var i=0;i<Object.values(kotijate)[0].length;i++){
      jatteet.push(Object.values(kotijate)[0][i]);
    }

    for(var i=0;i<Object.values(kotijate)[1].length;i++){
      seka.push(Object.values(kotijate)[1][i]);
    }

    for(var i=0;i<Object.values(kotijate)[2].length;i++){
      metalli.push(Object.values(kotijate)[2][i]);
    }

    for(var i=0;i<Object.values(kotijate)[3].length;i++){
      lasi.push(Object.values(kotijate)[3][i]);
    }

    for(var i=0;i<Object.values(kotijate)[4].length;i++){
      bio.push(Object.values(kotijate)[4][i]);
    }

    for(var i=0;i<Object.values(kotijate)[5].length;i++){
      paperi.push(Object.values(kotijate)[5][i]);
    }

    for(var i=0;i<Object.values(kotijate)[6].length;i++){
      muovi.push(Object.values(kotijate)[6][i]);
    }
    
    for(var i=0;i<Object.values(kotijate)[7].length;i++){
      kartonki.push(Object.values(kotijate)[7][i]);
    }
    
    for(var i=0;i<jatteet.length;i++){
      jatteetorg.push(jatteet[i]);
    }
    for(var i=0;i<Object.keys(kotijate).length-1;i++){
      pontot.push(Object.keys(kotijate)[i+1]);
    }    
  })
