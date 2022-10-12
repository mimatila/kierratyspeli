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


var success_count=0;
var last=0;
var index=0;

// tulos näytölle x/15

var result=document.createElement("p");
result.id="p";
result.style.position = 'absolute';
result.style.left = "1000px";
result.style.top = "20px";
result.style.color = "black";
result.style.fontSize = "35px";

document.body.appendChild(result);
result.innerHTML=success_count+"/15";

var jateteksti=document.createElement("p");
jateteksti.id="jateteksti";
jateteksti.style.position = 'absolute';
jateteksti.style.color = "black";
jateteksti.style.top = "520px";
jateteksti.style.left = "105px";
document.body.appendChild(jateteksti);
jateteksti.innerHTML = "SEKAJÄTE";

var jate1=document.createElement("p");
jate1.id="jateteksti";
jate1.style.position = 'absolute';
jate1.style.color = "black";
jate1.style.top = "520px";
jate1.style.left = "210px";
document.body.appendChild(jate1);
jate1.innerHTML = "METALLI";

var jate2=document.createElement("p");
jate2.id="jateteksti";
jate2.style.position = 'absolute';
jate2.style.color = "black";
jate2.style.top = "520px";
jate2.style.left = "325px";
document.body.appendChild(jate2);
jate2.innerHTML = "LASI";

var jate3=document.createElement("p");
jate3.id="jateteksti";
jate3.style.position = 'absolute';
jate3.style.color = "black";
jate3.style.top = "520px";
jate3.style.left = "430px";
document.body.appendChild(jate3);
jate3.innerHTML = "BIO";

var jate4=document.createElement("p");
jate4.id="jateteksti";
jate4.style.position = 'absolute';
jate4.style.color = "black";
jate4.style.top = "520px";
jate4.style.left = "517px";
document.body.appendChild(jate4);
jate4.innerHTML = "PAPERI";

var jate5=document.createElement("p");
jate5.id="jateteksti";
jate5.style.position = 'absolute';
jate5.style.color = "black";
jate5.style.top = "520px";
jate5.style.left = "617px";
document.body.appendChild(jate5);
jate5.innerHTML = "MUOVI";

var jate6=document.createElement("p");
jate6.id="jateteksti";
jate6.style.position = 'absolute';
jate6.style.color = "black";
jate6.style.top = "520px";
jate6.style.left = "705px";
document.body.appendChild(jate6);
jate6.innerHTML = "KARTONKI";


    var nappula=[];
    var teksti=[];

    for (var i = 0; i < 15; i++) {  
        
      nappula.push(document.createElement("div"));
      teksti[i] = nappula[i].appendChild(document.createElement("div"));
      nappula[i].id = "mydiv"+i;
      nappula[i].className = "mydiv";
      //teksti[i].innerHTML=jatteet[i];
      
      const randomItem = jatteet => jatteet.splice((Math.random() * jatteet.length) | 0, 1);
      //teksti[i].innerHTML = jatteet[Math.floor(Math.random()*jatteet.length)];
      teksti[i].innerHTML=randomItem(jatteet);

      teksti[i].id = "dragtarget"; 
      nappula[i].draggable="true";  
         
      nappula[i].style.position = 'absolute';
      nappula[i].style.top = "100px";

        if(i==0||i==5||i==10){
            nappula[i].style.left = "100px";
        }
        
        if((i>0&&i<5)){
            
            var h_sijainti=100+(i*150)+"px";
            nappula[i].style.left = h_sijainti;
        }    
        
        if((i>5&&i<10)){
            
          var h_sijainti=100+((i-5)*150)+"px";
          nappula[i].style.left = h_sijainti;
      } 

      if((i>10)){
            
        var h_sijainti=100+((i-10)*150)+"px";
        nappula[i].style.left = h_sijainti;
    } 
       
        if(i>4&&i<10){
            
          var v_sijainti=150+"px";
          nappula[i].style.top = v_sijainti;
        }  

        if(i>9){
            
          var v_sijainti=200+"px";
          nappula[i].style.top = v_sijainti;
        }  

        document.body.appendChild(nappula[i]);
      
        

                             //Make the DIV element draggagle:

      
       
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
    
    var kuva0 = document.createElement("div");
        
        kuva0.id=("kuva0");
        kuva0=img_seka;
        kuva0.className="droptarget0";
        kuva0.style.zIndex=10;
        kuva0.style.position = 'absolute';
        kuva0.style.top = "400px";
        kuva0.style.left = "100px";
        document.body.appendChild(kuva0);
        
    
        var kuva1 = document.createElement("div");
        kuva1.id=("kuva1");
        kuva1=img_metalli;
        kuva1.className="droptarget1";
        kuva1.style.position = 'absolute';
        kuva1.style.top = "400px";
        kuva1.style.left = "200px";
        document.body.appendChild(kuva1);

        var kuva2 = document.createElement("div");
        kuva2.id=("kuva2");
        kuva2=img_lasi;
        kuva2.className="droptarget2";
        kuva2.style.position = 'absolute';
        kuva2.style.top = "400px";
        kuva2.style.left = "300px";
        document.body.appendChild(kuva2);

        var kuva3 = document.createElement("div");
        kuva3.id=("kuva3");
        kuva3=img_bio;
        kuva3.className="droptarget3";
        kuva3.style.position = 'absolute';
        kuva3.style.top = "400px";
        kuva3.style.left = "400px";
        document.body.appendChild(kuva3);
  
        var kuva4 = document.createElement("div");
        kuva4.id=("kuva4");
        kuva4=img_paperi;
        kuva4.className="droptarget4";
        kuva4.style.position = 'absolute';
        kuva4.style.top = "400px";
        kuva4.style.left = "500px";
        document.body.appendChild(kuva4);

        var kuva5 = document.createElement("div");
        kuva5.id=("kuva5");
        kuva5=img_muovi;
        kuva5.className="droptarget5";
        kuva5.style.position = 'absolute';
        kuva5.style.top = "400px";
        kuva5.style.left = "600px";
        document.body.appendChild(kuva5);   
        
        var kuva6 = document.createElement("div");
        kuva6.id=("kuva6");
        kuva6=img_kartonki;
        kuva6.className="droptarget6";
        kuva6.style.position = 'absolute';
        kuva6.style.top = "400px";
        kuva6.style.left = "700px";
        document.body.appendChild(kuva6); 
               
 

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
                 
                 
                
                 // Output some text when starting to drag the p element
                 document.getElementById("demo").innerHTML = "Started to drag the p element.";
                
                 // Change the opacity of the draggable element
                 event.target.style.opacity = "0.4";
               });
               
               // While dragging the p element, change the color of the output text
               document.addEventListener("drag", function(event) {
                 document.getElementById("demo").style.color = "red";
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
                   event.target.style.border = "3px dotted red";
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
                  
                   document.getElementById("demo").style.color = "green";
                   event.target.style.border = "";
                   
                   var data = event.dataTransfer.getData("div");
                   
                   event.target.appendChild(document.getElementById(data));
                   
                   last=last+1;

                  if(event.target.className == ("droptarget0")&&seka.includes(event.dataTransfer.getData("text"))){
                     success_count=success_count+1;
                    
                                         
                   }
                  if(event.target.className == ("droptarget1")&&metalli.includes(event.dataTransfer.getData("text"))){
                    success_count=success_count+1;
                    
                  }
                  if(event.target.className == ("droptarget2")&&lasi.includes(event.dataTransfer.getData("text"))){
                    success_count=success_count+1;
                    
                  }
                  if(event.target.className == ("droptarget3")&&bio.includes(event.dataTransfer.getData("text"))){
                    success_count=success_count+1;
                    
                  }
                  if(event.target.className == ("droptarget4")&&paperi.includes(event.dataTransfer.getData("text"))){
                    success_count=success_count+1;
                   
                  }
                  if(event.target.className == ("droptarget5")&&muovi.includes(event.dataTransfer.getData("text"))){
                    success_count=success_count+1;
                    
                  }
                  if(event.target.className == ("droptarget6")&&muovi.includes(event.dataTransfer.getData("text"))){
                    success_count=success_count+1;
                    
                  }
                    if(last==15){
                    document.getElementById("p").innerHTML=success_count+"/15";
                    }
                 }
               });
               
               
       