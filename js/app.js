let qtdPista = parseInt(document.getElementById('qtd-pista').innerHTML);
let qtdSuperior = parseInt(document.getElementById('qtd-superior').innerHTML);
let qtdInferior = parseInt(document.getElementById('qtd-inferior').innerHTML);
limpar();

function limpar() {
    document.getElementById('qtd').value = '';    
}

function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = document.getElementById('qtd');

    if (tipo.value == 'pista') {
        if (qtdPista < parseInt(qtd.value)) {
            alert('Quantidade de ingressos indisponível');
            return;
        }
        qtdPista -= parseInt(qtd.value);
        document.getElementById('qtd-pista').innerHTML = qtdPista;
    }else if (tipo.value == 'superior') {
        if (qtdSuperior < parseInt(qtd.value)) {
            alert('Quantidade de ingressos indisponível');
            return;
        }
        qtdSuperior -= parseInt(qtd.value);
        document.getElementById('qtd-superior').innerHTML = qtdSuperior;
    }else {
        if (qtdInferior < parseInt(qtd.value)) {
            alert('Quantidade de ingressos indisponível');
            return;
        }
        qtdInferior -= parseInt(qtd.value);
        document.getElementById('qtd-inferior').innerHTML = qtdInferior;
    }    
    limpar();
}