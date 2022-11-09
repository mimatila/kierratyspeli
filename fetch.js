var jate;
var jate2;

var pontot=[];
var kaikki=[];
var kaikkiorg=[];
var yksi=[];
var kaksi=[];
var kolme=[];
var nelja=[];
var viisi=[];
var kuusi=[];
var seitseman=[];

var pontot2=[];
var kaikki2=[];
var kaikkiorg2=[];
var yksi2=[];
var kaksi2=[];
var kolme2=[];
var nelja2=[];
var viisi2=[];
var kuusi2=[];
var seitseman2=[];

async function getJate() {
    let apiResponse = await fetch("https://mimatila.github.io/kierratyspeli/kotijate.json");
    let response = apiResponse.json();
    return response;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }

async function getAutoJate() {
    let autoapiResponse = await fetch("https://mimatila.github.io/kierratyspeli/autojate.json");
    let autoresponse = autoapiResponse.json();
    return autoresponse;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }
    
    getJate().then((result)=>{  
    console.log("1. osa")
    jate=result;
    
    for(var i=0;i<Object.values(jate)[0].length;i++){
      kaikki.push(Object.values(jate)[0][i]);
    }

    for(var i=0;i<Object.values(jate)[1].length;i++){
      yksi.push(Object.values(jate)[1][i]);
    }

    for(var i=0;i<Object.values(jate)[2].length;i++){
      kaksi.push(Object.values(jate)[2][i]);
    }

    for(var i=0;i<Object.values(jate)[3].length;i++){
      kolme.push(Object.values(jate)[3][i]);
    }

    for(var i=0;i<Object.values(jate)[4].length;i++){
      nelja.push(Object.values(jate)[4][i]);
    }

    for(var i=0;i<Object.values(jate)[5].length;i++){
      viisi.push(Object.values(jate)[5][i]);
    }

    for(var i=0;i<Object.values(jate)[6].length;i++){
      kuusi.push(Object.values(jate)[6][i]);
    }
    
    for(var i=0;i<Object.values(jate)[7].length;i++){
      seitseman.push(Object.values(jate)[7][i]);
    }
    
    for(var i=0;i<kaikki.length;i++){
      kaikkiorg.push(kaikki[i]);
    }

    for(var i=0;i<Object.keys(jate).length-1;i++){
      pontot.push(Object.keys(jate)[i+1]);
    }    
  })
 
  getAutoJate().then((result2)=>{  
    console.log("1. osa")
    jate2=result2;
    
    for(var i=0;i<Object.values(jate2)[0].length;i++){
      kaikki2.push(Object.values(jate2)[0][i]);
    }

    for(var i=0;i<Object.values(jate2)[1].length;i++){
      yksi2.push(Object.values(jate2)[1][i]);
    }

    for(var i=0;i<Object.values(jate2)[2].length;i++){
      kaksi2.push(Object.values(jate2)[2][i]);
    }

    for(var i=0;i<Object.values(jate2)[3].length;i++){
      kolme2.push(Object.values(jate2)[3][i]);
    }

    for(var i=0;i<Object.values(jate2)[4].length;i++){
      nelja2.push(Object.values(jate2)[4][i]);
    }

    for(var i=0;i<Object.values(jate2)[5].length;i++){
      viisi2.push(Object.values(jate2)[5][i]);
    }

    for(var i=0;i<Object.values(jate2)[6].length;i++){
      kuusi2.push(Object.values(jate2)[6][i]);
    }
    
    for(var i=0;i<Object.values(jate2)[7].length;i++){
      seitseman2.push(Object.values(jate2)[7][i]);
    }
    
    for(var i=0;i<kaikki2.length;i++){
      kaikkiorg2.push(kaikki2[i]);
    }

    for(var i=0;i<Object.keys(jate2).length-1;i++){
      pontot2.push(Object.keys(jate2)[i+1]);
    }    
  })
 
   
  