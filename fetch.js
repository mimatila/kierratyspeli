var jate;

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

async function getJate() {
    let apiResponse = await fetch("http://localhost/kierrätys/kotijate.json");
    let response = apiResponse.json();
    return response;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }
   
  getJate().then((result)=>{  
    
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

  async function getAutoJate() {
    let autoapiResponse = await fetch("http://localhost/kierrätys/autojate.json");
    let autoresponse = autoapiResponse.json();
    return autoresponse;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }
   
  