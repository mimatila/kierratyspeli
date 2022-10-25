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
var kuva0;
var kuva1;
var kuva2;
var kuva3;
var kuva4;
var kuva5;
var kuva6; 
var data;
var i;
var counter=0;

function myFunction(){

if(gameover_status==false){

document.getElementById("clickMe").style.display="none";

const jatteet = ["likaantuneet paperit ja pahvit","hehku- ja halogeenilamput","sulakkeet","siivousjäte","imurin pölypussit",
"pvc–muovia sisältävät puhallettavat lelut","pvc-muovia sisältävät muovipressut","pvc–muovia sisältävät sadevaatteet",
"tablettien läpipainopakkaukset","lelu- ja autotarvikepakkaukset","sipsipussit ja kahvipaketit","tuhka ja tupakantumpit", 
"ikkuna- ja peililasi","pyrexlasi","posliini","keramiikka","kristalli","kasetit (VHS- ja C-kasetit)","tulostimien värikasetit", 
"valokuvat ja negatiivit","nahka ja lumput","polkupyörän renkaat","kumiset lelut","rikkinäiset kengät ja vaatteet", 
"kertakäyttövaipat ja terveyssiteet","tavallinen ja  mineraalipohjainen kissanhiekka","lemmikkieläinten jätökset",
"ruoantähteet", "pilaantuneet elintarvikkeet","hedelmien- ja kasvistenkuoret","naatit","mehumaijan sakat","kahvin- ja teenporot", 
"käytetyt suodatin- ja teepussit","kananmunankuoret","kalanperkuujätteet","pienet luut","talouspaperi","lautasliinat ja nenäliinat", 
"leikkokukat","ruukkukukkien kasviosat",
"muovipakkaukset","elintarvike- ja pesuainepakkaukset","muovipussit ja -kääreet","muovipullot, -kanisterit ja -purkit","styroksipakkaukset",
"ikkunalasi ilman karmeja","peili- ja tasolasi","juomalasit","kristalli","muut lasituotteet","opaalilasiset pullot",
"paistinpannujen ja kattiloiden lasiset kannet","säilyketölkit","kotitalouden pienmetalliesineet","metalliset kannet ja korkit","alumiinifoliot ja -vuoat","tuikkujen kuoret","maalipurkit", 
"spraypullot","sanoma- ja aikakauslehdet","toimistopaperit","mainospostit","uusiopaperit","kirjekuoret","värilliset kopiopaperit","pehmeäkantiset kirjat", 
"kovakantisen kirjan sivut","maito- ja mehutölkit","muro- ja keksipaketit","muut kuivien tuotteiden kartonkipakkaukset","pahvilaatikot","pitsalaatikot", 
"wc- ja talouspaperirullien hylsyt","kartonkiset kertakäyttöastiat"];

const seka = ["likaantuneet paperit ja pahvit","hehku- ja halogeenilamput","sulakkeet","siivousjäte","imurin pölypussit",
"pvc–muovia sisältävät puhallettavat lelut","pvc-muovia sisältävät muovipressut","pvc–muovia sisältävät sadevaatteet",
"tablettien läpipainopakkaukset","lelu- ja autotarvikepakkaukset","sipsipussit ja kahvipaketit","tuhka ja tupakantumpit", 
"ikkuna- ja peililasi","pyrexlasi","posliini","keramiikka","kristalli","kasetit (VHS- ja C-kasetit)","tulostimien värikasetit", 
"valokuvat ja negatiivit","nahka ja lumput","polkupyörän renkaat","kumiset lelut","rikkinäiset kengät ja vaatteet", 
"kertakäyttövaipat ja terveyssiteet","tavallinen ja  mineraalipohjainen kissanhiekka","lemmikkieläinten jätökset"];

const metalli = ["säilyketölkit","kotitalouden pienmetalliesineet","metalliset kannet ja korkit","alumiinifoliot ja -vuoat","tuikkujen kuoret","maalipurkit", 
"spraypullot"];

const lasi = ["ikkunalasi ilman karmeja","peili- ja tasolasi","juomalasit","kristalli","muut lasituotteet","opaalilasiset pullot",
"paistinpannujen ja kattiloiden lasiset kannet"];

const bio = ["ruoantähteet", "pilaantuneet elintarvikkeet","hedelmien- ja kasvistenkuoret","naatit","mehumaijan sakat","kahvin- ja teenporot", 
"käytetyt suodatin- ja teepussit","kananmunankuoret","kalanperkuujätteet","pienet luut","talouspaperi","lautasliinat ja nenäliinat", 
"leikkokukat","ruukkukukkien kasviosat"];

const paperi = ["sanoma- ja aikakauslehdet","toimistopaperit","mainospostit","uusiopaperit","kirjekuoret","värilliset kopiopaperit","pehmeäkantiset kirjat", 
"kovakantisen kirjan sivut"];

const muovi = ["muovipakkaukset","elintarvike- ja pesuainepakkaukset","muovipussit ja -kääreet","muovipullot, -kanisterit ja -purkit","styroksipakkaukset"];

const kartonki = ["maito- ja mehutölkit","muro- ja keksipaketit","muut kuivien tuotteiden kartonkipakkaukset","pahvilaatikot","pitsalaatikot", 
"wc- ja talouspaperirullien hylsyt","kartonkiset kertakäyttöastiat"];

var jate0=document.createElement("p");
jate0.id="jateteksti";
jate0.innerHTML = "SEKAJÄTE";

var jate1=document.createElement("p");
jate1.id="jateteksti";
jate1.innerHTML = "METALLI";

var jate2=document.createElement("p");
jate2.id="jateteksti";
jate2.innerHTML = "LASI";

var jate3=document.createElement("p");
jate3.id="jateteksti";
jate3.innerHTML = "BIO";

var jate4=document.createElement("p");
jate4.id="jateteksti";
jate4.innerHTML = "PAPERI";

var jate5=document.createElement("p");
jate5.id="jateteksti";
jate5.innerHTML = "MUOVI";

var jate6=document.createElement("p");
jate6.id="jateteksti";
jate6.innerHTML = "KARTONKI";

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
 
    for (i = 0; i < 15; i++) {  

      pallo[i]=document.createElement("div");
      pallo[i].id="pallo"+i;   
      pallo[i].className="pallo";
      grid_valot.appendChild(pallo[i]);
     
      nappula.push(document.createElement("div"));
      teksti[i] = nappula[i].appendChild(document.createElement("div"));
      teksti[i].style.borderRadius="6px";
      nappula[i].id = "mydiv"+i;
      nappula[i].className = "mydiv";
      
      const randomItem = jatteet => jatteet.splice((Math.random() * jatteet.length) | 0, 1);
      //teksti[i].innerHTML = jatteet[Math.floor(Math.random()*jatteet.length)];
      teksti[i].innerHTML=randomItem(jatteet);
      teksti[i].style.fontWeight="bold";
      teksti[i].id = "dragtarget"; 
      nappula[i].draggable="true";  
      grid_nappulat.appendChild(nappula[i]); 
      }
              
var img_seka = document.createElement("img");
var img_metalli = document.createElement("img");
var img_lasi = document.createElement("img");
var img_bio = document.createElement("img");
var img_paperi = document.createElement("img");
var img_muovi = document.createElement("img");
var img_kartonki = document.createElement("img");

    img_seka.src = "seka.png";  
    img_metalli.src = "metalli.png";
    img_lasi.src = "lasi.png";  
    img_bio.src = "bio.png";
    img_paperi.src = "paperi.png";  
    img_muovi.src = "muovi.png";
    img_kartonki.src = "kartonki.png";
    
    kuva0 = document.createElement("div"); 
    kuva0.appendChild(img_seka);
    img_seka.className="droptarget0";      
    grid_pontot.appendChild(kuva0);
          
    kuva1 = document.createElement("div");
    kuva1.appendChild(img_metalli);
    img_metalli.className="droptarget1";
    grid_pontot.appendChild(kuva1);

    kuva2 = document.createElement("div");
    kuva2.appendChild(img_lasi);
    img_lasi.className="droptarget2";
    grid_pontot.appendChild(kuva2);

    kuva3 = document.createElement("div");
    kuva3.appendChild(img_bio);
    img_bio.className="droptarget3";
    grid_pontot.appendChild(kuva3);
  
    kuva4 = document.createElement("div");
    kuva4.appendChild(img_paperi);
    img_paperi.className="droptarget4";
    grid_pontot.appendChild(kuva4);

    kuva5 = document.createElement("div");
    kuva5.appendChild(img_muovi);
    img_muovi.className="droptarget5";
    grid_pontot.appendChild(kuva5);  
        
    kuva6 = document.createElement("div");
    kuva6.appendChild(img_kartonki);
    img_kartonki.className="droptarget6";
    grid_pontot.appendChild(kuva6);

    grid_pontot.appendChild(jate0);
    grid_pontot.appendChild(jate1);
    grid_pontot.appendChild(jate2);
    grid_pontot.appendChild(jate3);
    grid_pontot.appendChild(jate4);
    grid_pontot.appendChild(jate5);
    grid_pontot.appendChild(jate6);
        
         if(counter==0){
               /* Events fired on the drag target */
              
         document.addEventListener("dragstart", function(event) {
                
                 // The dataTransfer.setData() method sets the data type and the value of the dragged data
           
               
          event.dataTransfer.setData("div", event.target.id);
                 
                  
          if(event.target.id.length<7){
           index = event.target.id.charAt(event.target.id.length-1);
          }
          if(event.target.id.length>6){
                    
           index = event.target.id.slice(-2);
          }            
                              
          event.dataTransfer.setData("text", teksti[index].innerHTML);
          
          event.dataTransfer.setData("pallo", pallo[last].id);
                               
          // Output some text when starting to drag the p element
          //document.getElementById("demo").innerHTML = "Started to drag the p element.";
                
          // Change the opacity of the draggable element
          event.target.style.opacity = "0.4";
          });
               
          // While dragging the p element, change the color of the output text
          document.addEventListener("drag", function(event) {
          //document.getElementById("demo").style.color = "red";
          });
               
          // Output some text when finished dragging the p element and reset the opacity
          document.addEventListener("dragend", function(event) {
          //document.getElementById("demo").innerHTML = "Finished dragging the p element.";
          event.target.style.opacity = "1";
          
          });
               
          /* Events fired on the drop target */
               
          // When the draggable p element enters the droptarget, change the DIVS's border style
          document.addEventListener("dragenter", function(event) {
          if ( event.target.className == ("droptarget0") || 
            event.target.className == ("droptarget1")||
            event.target.className == ("droptarget2")||
            event.target.className == ("droptarget3")||
            event.target.className == ("droptarget4")||
            event.target.className == ("droptarget5")||
            event.target.className == ("droptarget6"))  {
                   
            //event.target.style.border = "0.5px dotted yellow";
            event.target.style.background = "lightyellow";
            event.target.style.borderRadius = "6px";
            }
            });
               
            // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
            document.addEventListener("dragover", function(event) {
            event.preventDefault();
            });
               
            // When the draggable p element leaves the droptarget, reset the DIVS's border style
            document.addEventListener("dragleave", function(event) {
            if ( event.target.className == ("droptarget0") || 
              event.target.className == ("droptarget1")||
              event.target.className == ("droptarget2")||
              event.target.className == ("droptarget3")||
              event.target.className == ("droptarget4")||
              event.target.className == ("droptarget5")||
              event.target.className == ("droptarget6"))  {
              event.target.style.border = "";
              event.target.style.background = "";
              event.target.style.borderRadius = "";
              }
            });
               
              /* On drop - Prevent the browser default handling of the data (default is open as link on drop)
                 Reset the color of the output text and DIV's border color
                 Get the dragged data with the dataTransfer.getData() method
                 The dragged data is the id of the dragged element ("drag1")
                 Append the dragged element into the drop element
              */
              document.addEventListener("drop", function(event) {
                 
              event.preventDefault();
                
              if ( event.target.className == ("droptarget0") || 
                event.target.className == ("droptarget1")||
                event.target.className == ("droptarget2")||
                event.target.className == ("droptarget3")||
                event.target.className == ("droptarget4")||
                event.target.className == ("droptarget5")||
                event.target.className == ("droptarget6")) {
                
                last=last+1;
                
                //document.getElementById("demo").style.color = "green";
                event.target.style.border = "";
                event.target.style.background = "";
                event.target.style.borderRadius = "";
                  
              data = event.dataTransfer.getData("div");
                   console.log("heko: "+event.target.className+" hik "+data)
               event.target.appendChild(document.getElementById(data));
               
               
               

                if((event.target.className == ("droptarget0")&&seka.includes(event.dataTransfer.getData("text")))
                  ||(event.target.className == ("droptarget1")&&metalli.includes(event.dataTransfer.getData("text")))
                  ||(event.target.className == ("droptarget2")&&lasi.includes(event.dataTransfer.getData("text")))
                  ||(event.target.className == ("droptarget3")&&bio.includes(event.dataTransfer.getData("text")))
                  ||(event.target.className == ("droptarget4")&&paperi.includes(event.dataTransfer.getData("text")))
                  ||(event.target.className == ("droptarget5")&&muovi.includes(event.dataTransfer.getData("text")))
                  ||(event.target.className == ("droptarget6")&&kartonki.includes(event.dataTransfer.getData("text"))))
                  {
                    console.log("osu oikeeseen");
                    
                  } else document.getElementById(event.dataTransfer.getData("pallo")).style.background="red";
                          
                
                if(event.target.className == ("droptarget0")&&seka.includes(event.dataTransfer.getData("text"))){
                   success_count=success_count+1;    
                   document.getElementById(event.dataTransfer.getData("pallo")).style.background="green";                                                     
                  } 
                if(event.target.className == ("droptarget1")&&metalli.includes(event.dataTransfer.getData("text"))){
                   success_count=success_count+1;
                   document.getElementById(event.dataTransfer.getData("pallo")).style.background="green"; 
                  }  
                if(event.target.className == ("droptarget2")&&lasi.includes(event.dataTransfer.getData("text"))){
                   success_count=success_count+1;
                   document.getElementById(event.dataTransfer.getData("pallo")).style.background="green"; 
                  }  
                if(event.target.className == ("droptarget3")&&bio.includes(event.dataTransfer.getData("text"))){
                   success_count=success_count+1;
                   document.getElementById(event.dataTransfer.getData("pallo")).style.background="green"; 
                  } 
                if(event.target.className == ("droptarget4")&&paperi.includes(event.dataTransfer.getData("text"))){
                   success_count=success_count+1;
                   document.getElementById(event.dataTransfer.getData("pallo")).style.background="green"; 
                  }  
                if(event.target.className == ("droptarget5")&&muovi.includes(event.dataTransfer.getData("text"))){
                   success_count=success_count+1;
                   document.getElementById(event.dataTransfer.getData("pallo")).style.background="green"; 
                  }  
                if(event.target.className == ("droptarget6")&&kartonki.includes(event.dataTransfer.getData("text"))){
                   success_count=success_count+1;
                   document.getElementById(event.dataTransfer.getData("pallo")).style.background="green"; 
                  }  
                  
                if(last==15){
                   
                   document.getElementById("result").style.display="block";
                   document.getElementById("gameover").style.display="block";
                   document.getElementById("clickMe").style.display="block";
                   //document.getElementById("clickMe").value="Pelaa uudestaan";
                   gameover_status=true;
                   document.getElementById("result").innerHTML=success_count+"/15";
                  
                  }
                 }
                });}
              } }       
              
              function GameOver(){  
                
                if(gameover_status==true){
                  counter=counter+1;
                  gameover_status=false;
                  
                //console.log("hurraa"+document.getElementById("mydiv0").id);           

                //document.querySelector("peli").remove();
                console.log(document.querySelector("peli").children)
                          
                document.querySelector("peli").removeChild(grid_nappulat);
                document.querySelector("peli").removeChild(grid_pontot);
                document.querySelector("peli").removeChild(grid_valot);
                document.querySelector("peli").removeChild(grid_keskusta);           

                img_seka=null;
                img_metalli=null;
                img_lasi=null;
                img_bio=null;
                img_papaeri=null;
                img_muovi=null;
                img_kartonki=null;

                pallo=[];
                jatteet=[];
                seka=[];
                metalli=[];
                lasi=[];
                bio=[];
                paperi=[];
                muovi=[];
                kartonki=[];
                success_count=0;
                last=0;
                index=0;
                i=0;

                jate0=null;
                jate1=null;
                jate2=null;
                jate3=null;
                jate4=null;
                jate5=null;
                jate6=null;

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

            
      
       