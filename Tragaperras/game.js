
let money = parseInt(Math.random() * (1000 - 200) + 200)
let moneyCounter = document.querySelectorAll(".money img");
let moneyCount = Array(6);

let moneyText = money.toString();
let times = moneyCount.length - moneyText.length;

let audioOpt = true;
let ambience = document.querySelector("#ambience");
let ambienceBt = document.querySelector(".sound");

ambienceBt.onclick = changeAmbience;

function changeAmbience() {
    if (audioOpt == true) {
        ambience.pause();
        audioOpt = false;
        ambienceBt.classList.remove("activated");
    } else {
        ambience.play();
        audioOpt = true;
        ambienceBt.classList.add("activated");
    }
}

if (times > 0) {
    for (let i = 0; i < times; i++) {
        moneyCount[i] = "0";
    }
    for (let i = 0; i < moneyText.length; i++) {
        moneyCount[i + times] = moneyText[i];
    }
} else {
}
for (let i = 0; i < moneyCount.length; i++) {
    moneyCounter[i].src = `img/7seg/${moneyCount[i]}.png`;
}
let display = [document.querySelectorAll('.display1 img'), document.querySelectorAll('.display2 img'), document.querySelectorAll('.display3 img')];
let index = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let timer0,timer1,timer2,interval0,interval1,interval2;

let tiradaBt = document.querySelector(".pulse");
tiradaBt.onclick = tirada;

let effects = document.querySelector("#effects");

function tirada() {
    display[0][1].classList.remove("blur");
    display[1][1].classList.remove("blur");
    display[2][1].classList.remove("blur");
    
    effects.play();

    interval0 = 60;
    interval1 = interval0;
    interval2 = interval0;

    timer0 = setInterval(changeImg0, interval0);
    timer1 = setInterval(changeImg1, interval1);
    timer2 = setInterval(changeImg2, interval2);

    let timeout0 = 4000;
    let timeout1 = 6000;
    let timeout2 = 8500;

    let contador0 = setTimeout(freno0, timeout0);
    let contador1 = setTimeout(freno1, timeout1);
    let contador2 = setTimeout(freno2, timeout2);

    for (i = 0; i < 3; i++) {
        index[i][0] = parseInt(Math.random() * 15);
        display[i][0].src = "img/" + index[i][0] + ".png";
    }
}

function changeImg0() {
    clearInterval(timer0);
    interval0+=1;
    timer0 = setInterval(changeImg0, interval0);
    if ((index[0][0] + 1) < 15) {
        index[0][2] = index[0][1];
        index[0][1] = index[0][0];
        index[0][0]++;
    }
    else index[0][0] = 0;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            display[i][j].src = "img/" + index[i][j] + ".png";
        }
    }
}
function changeImg1() {
    clearInterval(timer1);
    interval1+=8;
    timer1 = setInterval(changeImg1, interval1);
    if ((index[1][0] + 1) < 15) {
        index[1][2] = index[1][1];
        index[1][1] = index[1][0];
        index[1][0]++;
    }
    else index[1][0] = 0;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            display[i][j].src = "img/" + index[i][j] + ".png";
        }
    }
}
function changeImg2() {
    clearInterval(timer2);
    interval2+=12;
    timer2 = setInterval(changeImg2, interval2);
    if ((index[2][0] + 1) < 15) {
        index[2][2] = index[2][1];
        index[2][1] = index[2][0];
        index[2][0]++;
    }
    else index[2][0] = 0;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            display[i][j].src = "img/" + index[i][j] + ".png";
        }
    }
}

function freno0() {
    clearInterval(timer0);
    for (i = 0; i < 3; i++) {
        display[0][i].classList.remove('blur');
    }
}
function freno1() {
    clearInterval(timer1);
    for (i = 0; i < 3; i++) {
        display[1][i].classList.remove('blur');
    }
}
function freno2() {
    clearInterval(timer2);
    for (i = 0; i < 3; i++) {
        display[2][i].classList.remove('blur');
    }
}