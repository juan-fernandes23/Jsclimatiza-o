var moldura = document.getElementById("moldura");
var botaoVoltar = document.getElementById("btnVoltar");
var botaoAvancar = document.getElementById("btnAvancar");

var fotos = ["img1.png", "img2.png", "img3.png", "img4.jpg","img12.png","img13.png"];
var indice = 0;
var tempoEspera = 2000;
var temporizador;

window.onload = Inicio;

function Inicio() {
    botaoVoltar.onclick = Voltar;
    botaoAvancar.onclick = Avancar;
    MostrarFoto();
    AutomatizarFoto();
}

function MostrarFoto() {
    moldura.src = "img/" + fotos[indice];
}

function Voltar() {
    indice = (indice > 0) ? indice - 1 : fotos.length - 1;
    MostrarFoto();
    PararReiniciar();
}

function Avancar() {
    indice = (indice < fotos.length - 1) ? indice + 1 : 0;
    MostrarFoto();
    PararReiniciar();
}

function PararReiniciar() {
    clearInterval(temporizador);
    AutomatizarFoto();
}

function AutomatizarFoto() {
    temporizador = setInterval(Avancar, tempoEspera);
}
