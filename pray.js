var scream = new Audio("scream.mp3");
var pray = () => {
    scream.currentTime = 0;
    scream.play();
    document.open();
    document.write('<img src="william.webp" onclick="cansee()" style="height:100%; width: 100%;">');
    alert("STOP FUCKING PRAYING TO ME AND LET ME SLEEP");
}

var fart = new Audio("fart.mp3");
var cansee = () => {
    fart.currentTime = 0;
    fart.play();
    alert("DONT TOUCH ME");
}

var knogleken = () => {

}
