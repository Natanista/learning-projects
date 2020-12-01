function exibirAsteristicos(linhas){
    let soma = '';
    for(let linha = 1; linha <= linhas; linha++){
        soma += '*';
        console.log(soma);
    }
}

exibirAsteristicos(10);