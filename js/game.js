function setVars(){
x = 0;
y = 0;
}
function mainGame(){
document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "ArrowLeft") {
        gameMoveEntity(x-1,y);
    }
    if (event.key === "ArrowRight") {
        gameMoveEntity(x+1,y)
    }
});













}
function gameMoveEntity(a,b){
   x = x + a;
   y = y + b;
   document.getElementByClass("player").top = y + "px";
   document.getElementByClass("player").left = x + "px";
}
