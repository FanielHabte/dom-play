//alert("Hi from dom play");
/*

    Creat an app that on click actpors lines are highlighted 

    With a single click, highlight (bold or otherwise) all lines for a specific actor in a play 
    Un-highlight (normal or otherwise) all lines from all other actors in the play

    The function(s) created to do the work must accommodate any number of actors and any number of additional lines added to the page.

    HTML "hooks" may be added to the page for proper operations 

*/

//document.querySelector(".Hamlet").style.backgroundColor = " Yellow"

function highlight (el){

    if(el.style.backgroundColor == 'white'){//orange
        el.style.backgroundColor= 'orange';
    }else{//white
        el.style.backgroundColor= 'white';
    }    
   
 }


function myAlert(){
    alert("I'm Clicked! ");
 }

function highlightActor(actor){
    //alert("Hi i am "+ actor);
    for(const mySpan of spans)

    {if(actor == mySpan.dataset.actor ){//orange
        mySpan.style.backgroundColor= 'Orange';
    }
    
    else{//white
        mySpan.style.backgroundColor= 'green';
    }  }
}

 const spans = document.querySelectorAll("#play span");
 console.log(spans);


 for(const mySpan of spans){
   // mySpan.addEventListener("click",myAlert);
    mySpan.addEventListener("click",function(ev){
        highlightActor(mySpan.dataset.actor);
    });
    //alert(mySpan.dataset.actor);
 }