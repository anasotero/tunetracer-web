// declaração de variáveis com captura de elemento HTML
var violao = document.getElementById("violao");
var teclado = document.getElementById("teclado");
var flauta = document.getElementById("flauta");

// evento de botão 
violao.addEventListener('click', function() {
    showSection('acorde-violao');
});
teclado.addEventListener('click', function() {
    showSection('acorde-teclado');
});
flauta.addEventListener('click', function() {
    showSection('acorde-flauta');
});

// Seleciona o ícone de som e o áudio
var iconeSom = document.getElementById("iconeSom");
var audio = document.getElementById("audio-som");

// Adiciona um evento de clique ao ícone de som
iconeSom.addEventListener('click', function() {
    audio.play(); // Reproduz o áudio
});
