const pessoa = {
    nome: 'Natan',
    idade: 21
};

//key : value
for(let chave in pessoa){
    console.log(chave, pessoa.nome);
}

const cores = ["azul", "vermelho", "rosa"];

for(let index in cores){
    console.log(index, cores[index]);
}