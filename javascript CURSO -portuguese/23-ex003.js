// criar um objeto endereço
//rua
//cidade
//CEP
//exibirEndereco

const endereco = {
    rua: 'Gabriela',
    cidade: 'Barueri',
    CEP : 01202045
}

function exibirEndereco(endereco){
    for(let chave in endereco )
    console.log(chave, endereco[chave]);
}

exibirEndereco(endereco);