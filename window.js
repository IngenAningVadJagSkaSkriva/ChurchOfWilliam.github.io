var colision = (x,xSize,y,ySize,x2,x2Size,y2,y2Size) => {
    //X0
//00
if(x <= x2 && y <= y2) if(((x2 >= x && x2 <= (x + xSize)) && (y2 >= y && y2 <= (y + ySize)))) {
    return 1;
}
//0X
//00
if(x >= x2 && y <= y2) if((((x2 + x2Size) >= x && (x2 + x2Size) <= (x + xSize)) && (y2 >= y && y2 <= (y + ySize)))) {
    return 1
}
//00
//X0
if(x <= x2 && y >= y2) if(((x2 >= x && x2 <= (x + xSize)) && ((y2 + y2Size) >= y && (y2 + y2Size) <= (y + ySize)))) {
    return 1;
}
//00
//0X
if(x >= x2 && y >= y2) if((((x2 + x2Size) >= x && (x2 + x2Size) <= (x + xSize)) && ((y2 + y2Size) >= y && (y2 + y2Size) <= (y + ySize)))) {
    return 1;
}
//king in the castle
return null;
}

onbeforeunload = () => {
    w.close();
    for(let i = 0; i < 4; i++) {
        wall[i].close();
    }
}

function RB(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var checkifprime = (number) => { // I FUCKING COPIED THIS FROM SOMEWHERE OF THE INTERNET BECAUSE IM TOO BORED TO PROGRAM PRIME NUMBER CHECK
    // program to check if a number is prime or not

let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    return null;
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        return 1;
    } else {
        return null;
    }
}

// check if number is less than 1
else {
    return null;
}
}

var doorsound = new Audio("door.mp3");
var yourname;
var count = 0;
var countMax = 1;
var william = () => {
    x = screen.width / 2;
        y = screen.height / 2;
        window.moveTo(x,y);
        plus = 0;
        alert("Hello my name is William and I own this place and can crash your chromebook at any time");
        if(localStorage.getItem("x") != "ok") {
            localStorage.setItem("x", "ok");
            yourname = prompt("What is your name?");
            localStorage.setItem("name",yourname);
            }
        yourname = localStorage.getItem("name");
        while(!confirm("Your name is " + yourname + "?")) {
        yourname = prompt("What is your name?");
        localStorage.setItem("name",yourname);
        }
}
var level = (s) => {
    if(s != 1) {
        doorsound.currentTime = 0;
        doorsound.play();
    }
    w.document.open();
    for(let i = 0; i < 4; i++) {
        if(s != 1) {
            wall[i].occupied = 0;
        }
        if(wall[i].occupied != 1) {
            wall[i].document.open();
            wall[i].document.title = "WALL";
        }
    }
    w.document.open();
    if(mapX == 10 && mapY == 10) {
        wall[2].document.write('<script>var readbook = () => {window.open("KnogGrottisarna.pdf","","HEIGHT=" + screen.availHeight + ",WIDTH=" + screen.availWidth);}</script><button onclick="readbook()">CLICK ME TO READ KNOG GROTTISARNA</button>');
        wall[1].document.write("WILLIAM IS HOLDING AN MEETING IN LEVEL X15Y10");
        w.document.write("this place feels holy<br>");
    } else if(mapX == 0 && mapY == 0) {
        wall[1].document.write("Welcome to the church of William this place is infinite in size and you will never escape.");
        wall[2].document.write('use arrow keys to move and press "s" to stop, press "p" to pause or unpause, press "d" to run, press "a" to walk, press the man face to start the game and start controlling and also if you cant controll just press the man face again or unpause');
        wall[2].document.title = "CONTROLS";
        wall[3].document.write("KNOG GROTTISARNA IS A HOLY BOOK IN WILLIAMISM GO READ IT AT LEVEL X10Y10");
        w.document.write("where am I?<br>");
    } else if(mapX == 15 && mapY == 10) {
        if(EO != 1) {
            william();
            document.getElementById("ambient").play();
        }
        EO = 1;
        wall[1].document.write('William classroom: zpzuy46<br>Add another google account to your chromebook to join LINK: <a href="https://www.google.com/accounts/Logout">https://www.google.com/accounts/Logout</a')
        if(s != 1) wall[3].document.write('<script src="pray.js"></script><button onclick="pray()">Click me to pray to William</button>');
        wall[3].occupied = 1;
        w.document.write("my hand hurts<br>I think I broke a knuckle<br>");
    } else if(checkifprime(mapX) && checkifprime(mapY)) {
        if(wall[3].occupied != 1) wall[3].document.write('<script src="pray.js"></script><button onclick="pray()">Click me to pray to William</button>');
        wall[3].occupied = 1;
    } else {
        if(!ambient.paused) {
            ambient.pause();
            ambient.currentTime = 0;
        }
        EO = 0;
        if(s != 1) for(let i = 1; i < 4; i++) {
            if(RB(0,3) == 1) {
                wall[i].document.write('<script src="pray.js"></script>I CAN SEE YOU<br><img src="william.webp" onclick="cansee()" style="height: 50%; width: 50%;">');
                wall[i].occupied = 1;
            }
        }
    }
    w.document.write("entered level X" + mapX + "Y" + mapY);
    if(plus <= 0) w.document.write('<br>press "a" to start walking or press "d" to start running');
    wall[0].document.write("LEVEL: X" + mapX + "Y" + mapY);
}
var EO = 0;
var x1 = 2;
var y1 = 2;
var y = screen.height / 2;
var x = 1;
var xo;
var yo;
var mapX = 0;
var mapY = 0;
var plus = 5;
var plusMAX = 5;
var plusMAX2 = 10;
var p = 0;
var x2 = x;
var y2 = y - window.outerHeight;
var w = window.open('','','HEIGHT=' + window.outerHeight * 1.1 + ',WIDTH=' + window.outerHeight * 1.1);
var wall = [];
for(let i = 0; i < 4; i++) {
    wall[i] = window.open('','','HEIGHT=' + screen.height * 0.25 + ',WIDTH=' + screen.width * 0.3);
}
wall[0].moveTo(0,0);
wall[1].moveTo((screen.width - wall[1].outerWidth),0);
wall[2].moveTo(0,(screen.height - wall[2].outerHeight));
wall[3].moveTo((screen.width - wall[3].outerWidth),(screen.height - wall[3].outerHeight));
w.moveTo(x2,y2);
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
    return;
    }
    switch (event.key) {
    case "ArrowDown":
        y1 = 1;
        x1 = 2;
      break;
    case "ArrowUp":
        y1 = 0;
        x1 = 2;
      break;
    case "ArrowLeft":
        x1 = 0;
        y1 = 2;
      break;
    case "ArrowRight":
        x1 = 1;
        y1 = 2;
      break;
    case "s":
        plus = 0;
        w.document.write('<br>press "a" to start walking or press "d" to start running');
        break;
    case "d":
        plus = plusMAX2;
        level(1);
        break;
    case "a":
        plus = plusMAX;
        level(1);
        break;
    case "e":
        plus = plusMAX;
        break;
    case "p":
        if(p == 0) {
            p = 1;
        } else {
            p = 0;
        }
        break;
    case "f":
        if(prompt("TYPE THE CODE FOR DEVELOPER TOOLS") != "I hate gays") break;
        mapX = prompt("X");
        mapY = prompt("Y");
        level();
        break;
    default:
      return;
    }
    event.preventDefault();
    }, true);

//move
setInterval(()=>{
    if(p == 1) return 0;
    yo = y;
    xo = x;
    if(y1 == 1) {
        y += plus;
    } else if(y1 == 0) {
        y -= plus;
    }
    if(x1 == 1) {
        x += plus;
    } else if(x1 == 0) {
        x -= plus;
    }
    if(x >= (screen.width - window.outerWidth)) {
        x = 1;
        mapX++;
        level();
    } else if(x <= 0) {
        x = screen.width - window.outerWidth;
        mapX--;
        level();
    }
    if(y >= (screen.height - window.outerHeight)) {
        y = 1;
        mapY--;
        level();
    } else if(y <= 0) {
        y = screen.height - window.outerHeight;
        mapY++;
        level();
    }
    x2 = x;
    y2 = y - w.outerHeight;
    window.moveTo(x,y);
    w.moveTo(x2,y2);
    for(let i = 0; i < 4; i++) {
        if(colision(wall[i].screenX,wall[i].outerWidth,wall[i].screenY,wall[i].outerHeight,x,window.outerWidth,y,window.outerHeight)) {
            x = xo;
            y = yo;
        }
    }
    wall[0].moveTo(0,0);
wall[1].moveTo((screen.width - wall[1].outerWidth),0);
wall[2].moveTo(0,(screen.height - wall[2].outerHeight));
wall[3].moveTo((screen.width - wall[3].outerWidth),(screen.height - wall[3].outerHeight));
},10);
level();
