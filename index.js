let player1, player2;
do {
    player1 = prompt("Jugador 1:", "");
    document.getElementById("p1").innerHTML = player1;
} while (player1 == null);
do {
    player2 = prompt("Jugador 2:", "");
    document.getElementById("p2").innerHTML = player2;
} while (player2 == null);

let ronda = 0;
let total1Score = 0;
let total2Score = 0;
let inicio = false;


function tirarDados() {
    if (ronda < 13 && ronda > 0) {
        if (ronda % 2 != 0) document.getElementById("anuncios").innerHTML = "Te toca " + player1;
        if (ronda % 2 == 0) document.getElementById("anuncios").innerHTML = "Te toca " + player2;

        let dado1 = parseInt(Math.random() * 6) + 1;
        let dado2 = parseInt(Math.random() * 6) + 1;
        let dado3 = parseInt(Math.random() * 6) + 1;
        let dado4 = parseInt(Math.random() * 6) + 1;
        let dado5 = parseInt(Math.random() * 6) + 1;

        document.getElementById("img1").src = "/dados/" + dado1 + ".png";
        document.getElementById("img2").src = "/dados/" + dado2 + ".png";
        document.getElementById("img3").src = "/dados/" + dado3 + ".png";
        document.getElementById("img4").src = "/dados/" + dado4 + ".png";
        document.getElementById("img5").src = "/dados/" + dado4 + ".png";

        let sumaRonda = dado1 + dado2 + dado3 + dado4 + dado5;
        if (ronda % 2 == 0) {
            total1Score = total1Score + sumaRonda;
            document.getElementById("total1").innerHTML = total1Score;
        }
        if (ronda % 2 != 0) {
            total2Score = total2Score + sumaRonda;
            document.getElementById("total2").innerHTML = total2Score;
        }
        document.getElementById("ronda" + ronda).innerHTML = sumaRonda;
        sumaRonda = 0;
        console.log(ronda);
        ronda++;
    }
    if (ronda == 13 ) {
        if (total1Score > total2Score) {
            document.getElementById("anuncios").innerHTML = "has ganado "+player1;
        } else {
            document.getElementById("anuncios").innerHTML = "has ganado "+player2;
        }
        for (let i = 1; i <= 12; i++) document.getElementById("ronda" + i).innerHTML = 0;
        document.getElementById("total1").innerHTML = 0;
        document.getElementById("total2").innerHTML = 0;
        total1Score = 0;
        total2Score = 0;
        console.log("MAXIMO DE RONDA");
        ronda = 0;
    }
    if (ronda == 0) {
        ronda = 1;
    }
}
