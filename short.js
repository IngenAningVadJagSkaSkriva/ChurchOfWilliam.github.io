
var x = screen.width;
var y = screen.height;
setInterval(() => {
    x -= screen.width * 0.005;
    y -= screen.height * 0.005;
    if(x <= 0 || y <= 0) window.close();
    window.resizeTo(x,y);
    window.moveTo(((screen.width / 2) - window.outerWidth / 2), ((screen.height / 2) - window.outerHeight / 2));
},20);