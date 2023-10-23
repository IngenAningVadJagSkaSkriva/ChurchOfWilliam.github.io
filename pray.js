var scream = new Audio("scream.mp3");
if(localStorage.getItem("once") != "ok") {
    localStorage.setItem("once","ok");
    localStorage.setItem("prays",0);
}
var prays = parseInt(localStorage.getItem("prays"));
var pray = (s) => {
    prays++;
    if(s == 1) if(confirm("do you want me to forget all the times you have prayed to me?")) prays = 0;
    localStorage.setItem("prays", prays);
    document.title = prays;
    scream.currentTime = 0;
    scream.play();
    document.open();
    document.write('<img src="william.webp" onclick="cansee()" style="height:100%; width: 100%;">');
    alert("STOP FUCKING PRAYING TO ME AND LET ME SLEEP YOU HAVE PRAYED "+prays+" TIMES!");
    if(prays >= 5) {
        let w = window.open('','','HEIGHT='+screen.height+',WIDTH='+screen.width);
        w.document.write('<script src="short.js"></script><img src="naked.gif" style="HEIGHT: 100%; WIDTH: 100%;">');
    }
}

var fart = new Audio("fart.mp3");
var cansee = () => {
    fart.currentTime = 0;
    fart.play();
    alert("DONT TOUCH ME");
}

var knogleken = () => {

}
