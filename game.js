var gameover_status=false;
var nappula=[];
var teksti=[];
var pallo=[];
var grid_nappulat;
var grid_pontot;
var grid_valot;
var grid_keskusta;
var success_count=0;
var last=0;
var index=0;
var data;
var counter=0;
var kuva=[];
var img=[];
var text;
var valinta;


function painike(){
  valinta=document.getElementById("painike").value;
}

function painike2(){
  valinta=document.getElementById("painike2").value;
}

function myGame(){

 console.log("2. osa"+valinta)
document.getElementById("painike").style.display="none";
document.getElementById("painike2").style.display="none";

if(valinta=="Kotijäte Peli"){
for(var i=0;i<pontot.length;i++){
  jate[i]=document.createElement("p");
  jate[i].id="jateteksti";
  jate[i].innerHTML=pontot[i];
}
}

if(valinta=="Autojäte Peli"){
  console.log("hitsi")
  for(var i=0;i<pontot2.length;i++){
    jate2[i]=document.createElement("p");
    jate2[i].id="jateteksti";
    jate2[i].innerHTML=pontot2[i];
  }
  }
 
  grid_nappulat=document.createElement("div");
  grid_nappulat.className="grid-nappulat-container";
  document.querySelector("peli").appendChild(grid_nappulat);
    
  grid_keskusta=document.createElement("div");
  grid_keskusta.className="grid-keskusta-container";
  document.querySelector("peli").appendChild(grid_keskusta);

  grid_pontot=document.createElement("div");
  grid_pontot.className="grid-pontot-container";
  document.querySelector("peli").appendChild(grid_pontot);

  grid_valot=document.createElement("div");
  grid_valot.className="grid-valot-container";
  document.querySelector("peli").appendChild(grid_valot);
    
  // tulos näytölle x/15

var gameover=document.createElement("p");
  gameover.id="gameover";
  grid_keskusta.appendChild(gameover);
  gameover.innerHTML="GAMEOVER";

var result=document.createElement("p");
result.id="result";
result.style.alignSelf="start";
grid_keskusta.appendChild(result);
result.innerHTML=success_count+"/15";

console.log("hikka :"+kaikki2.length+"  org:"+kaikkiorg2.length)

for (var i = 0; i < 1; i++) {  

  pallo[i]=document.createElement("div");
  pallo[i].id="pallo"+i;   
  pallo[i].className="pallo";
  grid_valot.appendChild(pallo[i]);
     
  nappula.push(document.createElement("div"));
  teksti[i] = nappula[i].appendChild(document.createElement("div"));
  teksti[i].style.borderRadius="6px";
  nappula[i].id = "mydiv"+i;
  nappula[i].className = "mydiv";

  if(valinta=="Kotijäte Peli"){
  const randomItem = kaikki => kaikki.splice((Math.random() * kaikki.length) | 0, 1);
  //teksti[i].innerHTML = kaikki[Math.floor(Math.random()*kaikki.length)];
  teksti[i].innerHTML=randomItem(kaikki);
  teksti[i].style.fontWeight="bold";
  teksti[i].id = "dragtarget"; 
  nappula[i].draggable="true";  
  grid_nappulat.appendChild(nappula[i]); 
  }

  if(valinta=="Autojäte Peli"){
    const randomItem = kaikki2 => kaikki2.splice((Math.random() * kaikki2.length) | 0, 1);
    //teksti[i].innerHTML = kaikki[Math.floor(Math.random()*kaikki.length)];
    teksti[i].innerHTML=randomItem(kaikki2);
    teksti[i].style.fontWeight="bold";
    teksti[i].id = "dragtarget"; 
    nappula[i].draggable="true";  
    grid_nappulat.appendChild(nappula[i]); 
    }

}

  if(valinta=="Kotijäte Peli"){       
    for(var i=0;i<pontot.length;i++){
      img[i]=document.createElement("img");
      img[i].className="droptarget"+i; 
    } 
      

    for(var i=0;i<pontot.length;i++){
      img[i].src=pontot[i]+".png";
    }
  
    
    for(var i=0;i<pontot.length;i++){
      kuva[i]=document.createElement("div");
      kuva[i].appendChild(img[i]);
      grid_pontot.appendChild(kuva[i]);
    }
   
    for(var i=0;i<pontot.length;i++){
      grid_pontot.appendChild(jate[i]);
    }
}

if(valinta=="Autojäte Peli"){       
  for(var i=0;i<pontot2.length;i++){
    img[i]=document.createElement("img");
    img[i].className="droptarget"+i; 
  } 
    

  for(var i=0;i<pontot2.length;i++){
    img[i].src=pontot2[i]+".png";
  }

  
  for(var i=0;i<pontot2.length;i++){
    kuva[i]=document.createElement("div");
    kuva[i].appendChild(img[i]);
    grid_pontot.appendChild(kuva[i]);
  }
 
  for(var i=0;i<pontot2.length;i++){
    grid_pontot.appendChild(jate2[i]);
  }
}
   
  listener();
         
  } 
              
  function GameOver(){  
    console.log("99. osa")         
    if(gameover_status==true){
      kaikki=[];
      for(var i=0;i<kaikkiorg.length;i++){
      kaikki.push(kaikkiorg[i])
      }

  if(gameover_status==true){
        kaikki2=[];
        for(var i=0;i<kaikkiorg2.length;i++){
        kaikki2.push(kaikkiorg2[i])
        }

    counter=counter+1;
    gameover_status=false;
   
    //document.querySelector("peli").remove();
    console.log(document.querySelector("peli").children)
                          
    document.querySelector("peli").removeChild(grid_nappulat);
    document.querySelector("peli").removeChild(grid_pontot);
    document.querySelector("peli").removeChild(grid_valot);
    document.querySelector("peli").removeChild(grid_keskusta);           

    img=null;
    pallo=[];               
    success_count=0;
    last=0;
    index=0;
    kuva=[];
    img=[];
    jate=[];
    jate2=[];
    nappula=[];
    teksti=[];
    grid_nappulat=null;
    grid_keskusta=null;
    grid_pontot=null;
    grid_valot=null;
    gameover=null;
    result=null;
    data=null;         
  }
}
}