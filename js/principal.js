// declaração de variáveis com captura de elemento HTML
var violao = document.getElementById("violao");
var teclado = document.getElementById("teclado");
var flauta = document.getElementById("flauta");

// evento de botão da escolha de instrumento
violao.addEventListener('click', function() {
    showSection('acorde-violao');
});
teclado.addEventListener('click', function() {
    showSection('acorde-teclado');
});
flauta.addEventListener('click', function() {
    showSection('acorde-flauta');
});

// Seleciona o ícone de som e o áudio do C violão 
var iconeSom_c_violao = document.getElementById("iconeSom-c-violao");
var audio_c_violao = document.getElementById("audio-som-c-violao");

// Seleciona o ícone de som e o áudio do C teclado
var iconeSom_c_teclado = document.getElementById("iconeSom-c-teclado");
var audio_c_teclado = document.getElementById("audio-som-c-teclado");

// Seleciona o ícone de som e o áudio do C flauta 
var iconeSom_c_flauta = document.getElementById("iconeSom-c-flauta");
var audio_c_flauta = document.getElementById("audio-som-c-flauta");

// Adiciona um evento de clique ao ícone de som do violão nota C
iconeSom_c_violao.addEventListener('click', function() {
    audio_c_violao.play(); // Reproduz o áudio
});
// Adiciona um evento de clique ao ícone de som do teclado nota C
iconeSom_c_teclado.addEventListener('click', function() {
    audio_c_teclado.play(); // Reproduz o áudio
});
// Adiciona um evento de clique ao ícone de som da flauta nota C
iconeSom_c_flauta.addEventListener('click', function() {
    audio_c_flauta.play(); // Reproduz o áudio
});