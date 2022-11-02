function listener(){

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
      document.getElementById("clickMe").style.position="relative";
      document.getElementById("clickMe").style.top="50%";
      document.getElementById("clickMe").style.textAlign="center";
      //document.getElementById("clickMe").value="Pelaa uudestaan";
      gameover_status=true;
      document.getElementById("result").innerHTML=success_count+"/15";
    }
    }
    });
  }
    
}