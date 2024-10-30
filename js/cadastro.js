
const firebaseConfig = {
    apiKey: "AIzaSyCU5HV44wkTMy-bRxl19dq-KjxLLyPfwco",
    authDomain: "tune-tracer-f8d6c.firebaseapp.com",
    projectId: "tune-tracer-f8d6c",
    storageBucket: "tune-tracer-f8d6c.appspot.com",
    messagingSenderId: "942315395649",
    appId: "1:942315395649:web:6747f96b266050b67bc4c0"
  };


firebase.initializeApp(firebaseConfig);

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    // Limpar mensagem de erro anterior
    errorMessage.textContent = '';

    // Validação simples
    if (!email || !username || !password || !confirmPassword) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Validação de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Por favor, insira um e-mail válido.';
        return;
    }

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
        errorMessage.textContent = 'As senhas não coincidem.';
        return;
    }

    // Verificar tamanho mínimo da senha
    if (password.length < 6) {
        errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        return;
    }

    // Se passou em todas as validações, pode prosseguir para o cadastro no Firebase
    cadastrarUsuario(email, password);
});

// Função para cadastrar o usuário no Firebase
function cadastrarUsuario(email, password) {
    const auth = firebase.auth();

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('Usuário cadastrado:', userCredential.user);
            // Redirecionar ou realizar outra ação após o cadastro
            window.location.href = 'login.html';  // Exemplo de redirecionamento
        })
        .catch((error) => {
            document.getElementById('error-message').textContent = "Erro: " + error.message;
        });
}
