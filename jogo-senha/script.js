let senha = gerarSenha();
let tentativas = [];

function gerarSenha() {
    let numeros = [];
    while (numeros.length < 4) {
        let digito = Math.floor(Math.random() * 10).toString();
        if (!numeros.includes(digito)) {
            numeros.push(digito);
        }
    }
    return numeros.join('');
}

function mostrarSenha() {
    alert(`A senha secreta é: ${senha}`);
}

function fazerTentativa() {
    const guessInput = document.getElementById('guessInput');
    const tentativa = guessInput.value;

    if (tentativa.length !== 4 || !/^\d{4}$/.test(tentativa)) {
        alert('Por favor, insira um número de 4 dígitos.');
        return;
    }

    const resultado = verificarTentativa(tentativa);
    tentativas.unshift(`Tentativa: ${tentativa} - Bulls: ${resultado.bulls}, Cows: ${resultado.cows}`);

    atualizarTentativas();
    guessInput.value = '';

    if (resultado.bulls === 4) {
        alert("Parabéns! Você adivinhou a senha!");
    }
}

function verificarTentativa(tentativa) {
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < tentativa.length; i++) {
        if (tentativa[i] === senha[i]) {
            bulls++;
        } else if (senha.includes(tentativa[i])) {
            cows++;
        }
    }

    return { bulls, cows };
}

function atualizarTentativas() {
    const attemptsList = document.getElementById('attemptsList');
    attemptsList.innerHTML = '';

    tentativas.forEach(tentativa => {
        const li = document.createElement('li');
        li.textContent = tentativa;
        attemptsList.appendChild(li);
    });
}

function voltarParaPortifolio(){
    window.location.href = '../index.html';
}
