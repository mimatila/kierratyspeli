var gameover_status=false;
var nappula=[];
var teksti=[];
var pallo=[];
var jatteet=[];
var jatteetorg=[];
var seka=[];
var metalli=[];
var lasi=[];
var bio=[];
var paperi=[];
var muovi=[];
var kartonki=[];
//var jatteet=[];
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


function myFunction(){

if(gameover_status==false){


document.getElementById("clickMe").style.display="none";


var kotijate = {
  "jatteet": [
    ["likaantuneet paperit ja pahvit","hehku- ja halogeenilamput","sulakkeet","siivousjäte","imurin pölypussit",
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
    "wc- ja talouspaperirullien hylsyt","kartonkiset kertakäyttöastiat"]
  ],
  "SEKAJÄTE": [
    ["likaantuneet paperit ja pahvit","hehku- ja halogeenilamput","sulakkeet","siivousjäte","imurin pölypussit",
    "pvc–muovia sisältävät puhallettavat lelut","pvc-muovia sisältävät muovipressut","pvc–muovia sisältävät sadevaatteet",
    "tablettien läpipainopakkaukset","lelu- ja autotarvikepakkaukset","sipsipussit ja kahvipaketit","tuhka ja tupakantumpit", 
    "ikkuna- ja peililasi","pyrexlasi","posliini","keramiikka","kristalli","kasetit (VHS- ja C-kasetit)","tulostimien värikasetit", 
    "valokuvat ja negatiivit","nahka ja lumput","polkupyörän renkaat","kumiset lelut","rikkinäiset kengät ja vaatteet", 
    "kertakäyttövaipat ja terveyssiteet","tavallinen ja  mineraalipohjainen kissanhiekka","lemmikkieläinten jätökset"]
  ],
  "METALLI": [
    ["säilyketölkit","kotitalouden pienmetalliesineet","metalliset kannet ja korkit","alumiinifoliot ja -vuoat","tuikkujen kuoret","maalipurkit", 
    "spraypullot"]
  ],
  "LASI": [
    ["ikkunalasi ilman karmeja","peili- ja tasolasi","juomalasit","kristalli","muut lasituotteet","opaalilasiset pullot",
    "paistinpannujen ja kattiloiden lasiset kannet"]
  ],
  "BIO": [
    ["ruoantähteet", "pilaantuneet elintarvikkeet","hedelmien- ja kasvistenkuoret","naatit","mehumaijan sakat","kahvin- ja teenporot", 
    "käytetyt suodatin- ja teepussit","kananmunankuoret","kalanperkuujätteet","pienet luut","talouspaperi","lautasliinat ja nenäliinat", 
    "leikkokukat","ruukkukukkien kasviosat"]
  ],
  "PAPERI": [
    ["sanoma- ja aikakauslehdet","toimistopaperit","mainospostit","uusiopaperit","kirjekuoret","värilliset kopiopaperit","pehmeäkantiset kirjat", 
    "kovakantisen kirjan sivut"]
  ],
  "MUOVI": [
    ["muovipakkaukset","elintarvike- ja pesuainepakkaukset","muovipussit ja -kääreet","muovipullot, -kanisterit ja -purkit","styroksipakkaukset"]
  ],
  "KARTONKI": [
    ["maito- ja mehutölkit","muro- ja keksipaketit","muut kuivien tuotteiden kartonkipakkaukset","pahvilaatikot","pitsalaatikot", 
    "wc- ja talouspaperirullien hylsyt","kartonkiset kertakäyttöastiat"]
  ],

};

for(var i=0;i<Object.keys(kotijate).length-1;i++){
   jate[i]=document.createElement("p");
   jate[i].id="jateteksti";
   jate[i].innerHTML=Object.keys(kotijate)[i+1];
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

console.log(jatteet)


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
                
      //console.log("wit "+jatteet2[4]);
     
      const randomItem = jatteet => jatteet.splice((Math.random() * jatteet.length) | 0, 1);
      //teksti[i].innerHTML = jatteet[Math.floor(Math.random()*jatteet.length)];
      teksti[i].innerHTML=randomItem(jatteet);
      teksti[i].style.fontWeight="bold";
      teksti[i].id = "dragtarget"; 
      nappula[i].draggable="true";  
      grid_nappulat.appendChild(nappula[i]); 
      }
         
      for(var i=0;i<Object.keys(kotijate).length-1;i++){
        img[i]=document.createElement("img");
        img[i].className="droptarget"+i;      
      }


    img[0].src = "seka.png";  
    img[1].src = "metalli.png";
    img[2].src = "lasi.png";  
    img[3].src = "bio.png";
    img[4].src = "paperi.png";  
    img[5].src = "muovi.png";
    img[6].src = "kartonki.png";
    
    for(var i=0;i<Object.keys(kotijate).length-1;i++){
        kuva[i]=document.createElement("div");
        kuva[i].appendChild(img[i]);
        grid_pontot.appendChild(kuva[i]);
    }
   
    for(var i=0;i<Object.keys(kotijate).length-1;i++){
      grid_pontot.appendChild(jate[i]);
    }

        
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
              } 
            }       
              
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

                img=null;
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

            
      
       