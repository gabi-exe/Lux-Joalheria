const botaoLogin = document.querySelector('.Botao-login');

botaoLogin.addEventListener('click', function(){
    const email = document.getElementById('Email').value;
    const senha = document.getElementById('Senha').value;

    if (email === '' || senha === '') {
        alert('Preencha email e senha para continuar.');
        return;
    }

    if (email === 'bemvindo@gmail.com' && senha === 'bemvindo') {
        alert('Login realizado com sucesso!');
        window.location.href = 'pag.produtos.html';
    } else {
        alert('Email ou senha incorretos.');
    }
});