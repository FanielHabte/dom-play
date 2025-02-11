//alert("Hi from dom play");
/*

    Creat an app that on click actpors lines are highlighted 

    With a single click, highlight (bold or otherwise) all lines for a specific actor in a play 
    Un-highlight (normal or otherwise) all lines from all other actors in the play

    The function(s) created to do the work must accommodate any number of actors and any number of additional lines added to the page.

    HTML "hooks" may be added to the page for proper operations 

*/

//document.querySelector(".Hamlet").style.backgroundColor = " Yellow"

function highlightActor(actor) {
    const spans = document.querySelectorAll("#play span");
    for (const mySpan of spans) {
        if (actor === mySpan.dataset.actor) {
            mySpan.style.backgroundColor = 'Orange';
        } else {
            mySpan.style.backgroundColor = 'white';
        }
    }
}

const spans = document.querySelectorAll("#play span");

for (const mySpan of spans) {
    mySpan.addEventListener("click", function (ev) {
        highlightActor(mySpan.dataset.actor);
    });
}
