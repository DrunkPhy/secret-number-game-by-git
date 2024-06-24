let listaNumeros = [];
let limiteLista = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;


mensagemInicial();

function verificarChute() {
    numeroChute = document.querySelector("input").value

    if (numeroChute == numeroSecreto) {
        var palavraTentativas = tentativas > 1 ? "guesses" : "guess"
        let mensagemTentativas =  `you guessed! the number was ${numeroSecreto} and you had ${tentativas} ${palavraTentativas}`;
        exibirTexto("p",mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("chutar").setAttribute("disabled", true);
    } else {
        if(numeroChute > numeroSecreto) {
            let palavraTentativas = tentativas > 1 ? "guesses" : "guess"
            let mensagemTentativas = `the number you guessed is bigger than the secret number, ${tentativas} ${palavraTentativas}`;
            exibirTexto("p",mensagemTentativas);
        } else {
            let palavraTentativas = tentativas > 1 ? "guesses" : "guess"
            let mensagemTentativas = `the number you guessed is smaller than the secret number, ${tentativas} ${palavraTentativas}`;
            exibirTexto("p",mensagemTentativas);
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumero() {
    let numeroEscolhido = parseInt((Math.random() * limiteLista + 1));
    let quantidadeElementos = listaNumeros.length;
    
    if(quantidadeElementos ==  limiteLista) {
        listaNumeros = [];
    }

    if(listaNumeros.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaNumeros.push(numeroEscolhido);
        console.log(listaNumeros);
        return numeroEscolhido;
    }
}

function limparCampo() {
    numeroChute = document.querySelector("input");
    numeroChute.value = "";
}

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "US English Female", {rate: 1.2});
}

function mensagemInicial() {
    exibirTexto("h1", "Random Number Game");
    exibirTexto("p", "choose a number between 1 and 10");
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("chutar").removeAttribute("disabled");
}