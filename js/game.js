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
function gameMoveEntity(x,y){

}
