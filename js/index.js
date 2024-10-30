// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCU5HV44wkTMy-bRxl19dq-KjxLLyPfwco",
    authDomain: "tune-tracer-f8d6c.firebaseapp.com",
    projectId: "tune-tracer-f8d6c",
    storageBucket: "tune-tracer-f8d6c.appspot.com",
    messagingSenderId: "942315395649",
    appId: "1:942315395649:web:6747f96b266050b67bc4c0"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();  // Inicialize a autenticação aqui

// Remova o redirecionamento automático no onAuthStateChanged
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log('Usuário autenticado:', user); // Apenas log, sem redirecionamento imediato
    } else {
        console.log('Nenhum usuário autenticado.'); // Depuração
    }
});

// Processar login
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = ''; // Limpar mensagem anterior

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('Usuário logado:', userCredential.user); // Depuração
            // Redirecionar após login bem-sucedido
            window.location.href = 'home.html';
        })
        .catch((error) => {
            console.error('Erro de autenticação:', error); // Depuração
            errorMessage.textContent = "Erro: Usuário não encontrado ou senha incorreta.";
        });
});
