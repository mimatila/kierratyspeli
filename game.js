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
var jate=[];
var kuva=[];
var img=[];
var text;

function myGame(){

document.getElementById("clickMe").style.display="none";
console.log(jatteet.length+"hiehie")
for(var i=0;i<pontot.length;i++){
  jate[i]=document.createElement("p");
  jate[i].id="jateteksti";
  jate[i].innerHTML=pontot[i];
}
 
  grid_nappulat=document.createElement("div");
  grid_nappulat.className="grid-nappulat-container";
  document.querySelector("peli").appendChild(grid_nappulat);
    
  grid_keskusta=document.createElement("div");
  grid_keskusta.className="grid-keskusta";
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
  gameover.style.color = "white";
  gameover.style.fontSize = "35px";
  gameover.style.fontWeight="bold";
  gameover.style.display="none";
  gameover.style.margin="0px";
  gameover.style.textAlign="center";
  grid_keskusta.appendChild(gameover);
  gameover.innerHTML="GAMEOVER";

var result=document.createElement("p");
  result.id="result";
  result.style.margin="0px";
  result.style.color = "white";
  result.style.fontSize = "35px";
  result.style.fontWeight="bold";
  result.style.display="none";
  result.style.textAlign="center";

result.style.alignSelf="start";
grid_keskusta.appendChild(result);
result.innerHTML=success_count+"/15";

//console.log("hikka :"+jatteet.length+"  org:"+jatteetorg.length)


for (var i = 0; i < 15; i++) {  

  pallo[i]=document.createElement("div");
  pallo[i].id="pallo"+i;   
  pallo[i].className="pallo";
  grid_valot.appendChild(pallo[i]);
     
  nappula.push(document.createElement("div"));
  teksti[i] = nappula[i].appendChild(document.createElement("div"));
  teksti[i].style.borderRadius="6px";
  nappula[i].id = "mydiv"+i;
  nappula[i].className = "mydiv";
                
  console.log("wit "+jatteet.length+"org "+jatteetorg.length);
     
  const randomItem = jatteet => jatteet.splice((Math.random() * jatteet.length) | 0, 1);
  //teksti[i].innerHTML = jatteet[Math.floor(Math.random()*jatteet.length)];
  teksti[i].innerHTML=randomItem(jatteet);
  teksti[i].style.fontWeight="bold";
  teksti[i].id = "dragtarget"; 
  nappula[i].draggable="true";  
  grid_nappulat.appendChild(nappula[i]); 
 }
         
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
     
  listener();
         
  } 
                 
              
  function GameOver(){  
                
    if(gameover_status==true){
      console.log("hikka :"+jatteet.length+"  org:"+jatteetorg.length)
      jatteet=[];
      for(var i=0;i<jatteetorg.length;i++){
      jatteet.push(jatteetorg[i])
      }
    counter=counter+1;
    gameover_status=false;
                  
    //console.log("hurraa"+document.getElementById("mydiv0").id);           

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

            
      
       