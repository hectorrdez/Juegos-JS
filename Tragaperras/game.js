
let money = parseInt(Math.random() * (1000 - 200) + 200)
let moneyCounter = document.querySelectorAll(".money img");
let moneyCount = Array(6);

let moneyText = money.toString();
let times = moneyCount.length - moneyText.length;

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

//ESTO SOLO FUNCIONA CON UNA IMAGEN POR DIV
let display = [document.querySelectorAll('.display1 img'), document.querySelectorAll('.display2 img'), document.querySelectorAll('.display3 img')];
let index = [[0,0,0], [0,0,0], [0,0,0]];
let timer0 = setInterval(changeImg, 80);

for (i = 0; i < 3; i++) {
    index[i][0] = parseInt(Math.random() * 15);
    display[i][0].src = "img/" + index[i][0] + ".png";
}

function changeImg() {
    for (i = 0; i < 3; i++) {
        if ((index[i][0] + 1) < 15) {
            index[i][2]=index[i][1];
            index[i][1]=index[i][0];
            index[i][0]++;
        }
        else index[i][0] = 0;
        for (j = 0; j < 3; j++) {
            display[i][j].src = "img/" + index[i][j] + ".png";
        }
    }



    // for (i = 0; i < 3; i++) {
    //     if (index[0][i] + 1 < 15) index[0][i]++;
    //     else index[0][i] = 0;
    //     display[0][i].src = "img/" + index[0][i] + ".png";
        // for (j = 1; j < 3; j++) {
        //     index[i][j] = index[i - 1][j];
        //     display[i][j].src = "img/" + index[i][j] + ".png";
        // }
    //}
    // for (i = 0; i < img.length; i++) {
    //     index[i]++;
    //     if (index[i] > 15) index[i] = 0;
    //     // let player = img[i].animate([
    //     //     {transform: 'translate(0, -100px)'},
    //     //     {transform: 'translate(0, 250px)'}
    //     //   ], 300);
    //     //let player = img[i].animate([{ transform: "translate(0px, 50px)" }], 150);
    //     img[i].src = "img/" + index[i] + ".png";
    // }
}