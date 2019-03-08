function setVars(){
x = 0;
y = 0;
}
function mainGame(){
window.addEventListener('keydown', handleKeyDown, true)
window.addEventListener('keyup', handleKeyUp, true)


var direction = 0;
var key_left = false;
var key_right = false;

function handleKeyDown(event)
    {
        if (event.key === "ArrowLeft") 
                key_left = true;
        else if (event.key === "ArrowRight")
                key_right = true;
    }

function handleKeyUp(event)
    {
           if (event.key === "ArrowLeft") 
                key_left = false;
           else if (event.key === "ArrowRight")
                key_right = false;
    }
    do {
     x++   
    }
    while (key_right = true);
    do {
     x--   
    }
    while (key_left = true);









}
function gameMoveEntity(a,b){
   x = x + a;
   y = y + b;
   document.getElementByClass("player").top = y + "px";
   document.getElementByClass("player").left = x + "px";
}
