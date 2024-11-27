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

var estrelaAmarela = document.getElementById("estrelaAmarela-c-violao");
var audio_favoritado = document.getElementById("audio-som-favoritado");
var booleanFavoritadoViolao = false;
let favoritos = [];

// Função para exibir os itens favoritados na seção 'favoritos'
function exibirFavoritos() {
    const favoritosSection = document.getElementById('favoritos');
    
    // Limpa o conteúdo atual da seção favoritos
    favoritosSection.innerHTML = "<h2>Favoritos</h2>";

    // Verifica se há itens favoritos para exibir
    if (favoritos.length > 0) {
        // Cria a tabela
        const tabelaFavoritos = document.createElement('table');
        tabelaFavoritos.innerHTML = "<tr><th>Notas favoritadas</th></tr>"; // Cabeçalho da tabela

        // Preenche a tabela com os itens favoritados
        favoritos.forEach(item => {
            const row = tabelaFavoritos.insertRow();
            const cell = row.insertCell();
            cell.textContent = item;
        });

        favoritosSection.appendChild(tabelaFavoritos);
    } else {
        favoritosSection.innerHTML += "<p>Sem itens favoritados.</p>";
    }
}

// Adiciona o event listener ao elemento estrela
estrelaAmarela.addEventListener('click', function() {
    audio_favoritado.play();
    
    // Alterna o valor de booleanFavoritado e adiciona/remove dos favoritos
    booleanFavoritadoViolao = !booleanFavoritadoViolao;

    if (booleanFavoritadoViolao) {
        alert("Favoritado");
        favoritos.push("Violão - Acorde C"); // Exemplo de item favoritado
    } else {
        alert("Desfavoritado");
        favoritos.pop(); // Remove o item
    }

    // Atualiza a tabela de favoritos
    exibirFavoritos();
});

var estrelaAmarelaTeclado = document.getElementById("estrelaAmarela-c-teclado");
var booleanFavoritadoTeclado = false;

estrelaAmarelaTeclado.addEventListener('click', function() {
    audio_favoritado.play();
    
    // Alterna o valor de booleanFavoritado e adiciona/remove dos favoritos
    booleanFavoritadoTeclado = !booleanFavoritadoTeclado;

    if (booleanFavoritadoTeclado) {
        alert("Favoritado");
        favoritos.push("Teclado - Acorde C"); // Exemplo de item favoritado
    } else {
        alert("Desfavoritado");
        favoritos.pop(); // Remove o item
    }

    // Atualiza a tabela de favoritos
    exibirFavoritos();
});

var estrelaAmarelaFlauta = document.getElementById("estrelaAmarela-c-flauta");
var booleanFavoritadoFlauta = false;

estrelaAmarelaFlauta.addEventListener('click', function() {
    audio_favoritado.play();
    
    // Alterna o valor de booleanFavoritado e adiciona/remove dos favoritos
    booleanFavoritadoFlauta = !booleanFavoritadoFlauta;

    if (booleanFavoritadoFlauta) {
        alert("Favoritado");
        favoritos.push("Flauta - Acorde C"); // Exemplo de item favoritado
    } else {
        alert("Desfavoritado");
        favoritos.pop(); // Remove o item
    }

    // Atualiza a tabela de favoritos
    exibirFavoritos();
});
// Exibe a lista de favoritos na inicialização
exibirFavoritos();

