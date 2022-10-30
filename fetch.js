
async function getJatteet() {
    let apiResponse = await fetch("http://localhost/jatteet.json");
    let response = apiResponse.json();
    return response;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }
      
     getJatteet().then((result)=>{  
    jatteet=result;
    console.log(jatteet[0]);
  })
  
 

  async function getSeka() {
    let apiResponse = await fetch("http://localhost/seka.json");
    let response = apiResponse.json();
    return response;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }
  
  getSeka().then((result)=>{  
    seka=result;
    console.log(seka[0]);
  })

  async function getMetalli() {
    let apiResponse = await fetch("http://localhost/metalli.json");
    let response = apiResponse.json();
    return response;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }
  
  getMetalli().then((result)=>{  
    metalli=result;
    console.log(metalli[0]);
  })

  async function getLasi() {
    let apiResponse = await fetch("http://localhost/lasi.json");
    let response = apiResponse.json();
    return response;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }
  
  getLasi().then((result)=>{  
    lasi=result;
    console.log(lasi[0]);
  })

  async function getBio() {
    let apiResponse = await fetch("http://localhost/bio.json");
    let response = apiResponse.json();
    return response;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }
  
  getBio().then((result)=>{  
    bio=result;
    console.log(bio[0]);
  })
 
  async function getPaperi() {
    let apiResponse = await fetch("http://localhost/paperi.json");
    let response = apiResponse.json();
    return response;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }
  
  getPaperi().then((result)=>{  
    paperi=result;
    console.log(paperi[0]);
  })


  async function getMuovi() {
    let apiResponse = await fetch("http://localhost/muovi.json");
    let response = apiResponse.json();
    return response;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }
  
  getMuovi().then((result)=>{  
    muovi=result;
    console.log(muovi[0]);
  })


  async function getKartonki() {
    let apiResponse = await fetch("http://localhost/kartonki.json");
    let response = apiResponse.json();
    return response;
    // Since we waited for our API to respond using await
    // The response variable will return the response from the API
    // And not a promise.
    //console.log(response);
  }
  
  getKartonki().then((result)=>{  
    kartonki=result;
    console.log(kartonki[0]);
  })