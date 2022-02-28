let ronda = 0, sumaRonda, dado1, dado2, dado3, dado4, dado5;
let player1, player2;
player1 = prompt("Nombre Jugador 1:");
document.getElementById("p1").innerHTML = player1;
player2 = prompt("Nombre Jugador 2:");
document.getElementById("p2").innerHTML = player2;
function tirarDados() {
    sumaRonda = 0;
    dado1 = parseInt(Math.random() * 6) + 1;
    document.getElementById("d1").innerHTML = dado1
    document.getElementById("img1").src = "/dados/" + dado1 + ".png"

    dado2 = parseInt(Math.random() * 6) + 1;
    document.getElementById("d2").innerHTML = dado2
    document.getElementById("img2").src = "/dados/" + dado2 + ".png"

    dado3 = parseInt(Math.random() * 6) + 1;
    document.getElementById("d3").innerHTML = dado3
    document.getElementById("img3").src = "/dados/" + dado3 + ".png"

    dado4 = parseInt(Math.random() * 6) + 1;
    document.getElementById("d4").innerHTML = dado4
    document.getElementById("img4").src = "/dados/" + dado4 + ".png"

    dado5 = parseInt(Math.random() * 6) + 1;
    document.getElementById("d5").innerHTML = dado5
    document.getElementById("img5").src = "/dados/" + dado5 + ".png"
}
sumaRonda = dado1 + dado2 + dado3 + dado4 + dado5;
    console.log(sumaRonda);
    if (ronda % 2 == 0) {
        alert("Te toca " + player1);

    } else {
        alert("Te toca " + play2);
    }
    document.getElementById("ronda" + ronda).innerHTML = sumaRonda;
    ronda++;