const marcas = [
    {
        id:1,
        nome:'a'
    },
    {
        id:2,
        nome:'b'
    }
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca);

const alunos = [
    {
        nome:'Natan',
        nota: 10
    },
    {
        nome:'Matheus',
        nota:9
    },
    {
        nome:'Joca',
        nota:10
    },
    {
        nome:'Maria',
        nota:8
    }
];

const melhorAluno = alunos.find(function(aluno){
    return aluno.nota >= 10;
}

);

console.log(melhorAluno);

