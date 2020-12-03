const marcas = [
    {id:1,
    nome:'a'},
    {id:2,
    nome:'b'}
];

console.log(marcas.find(marca =>
     marca.nome === 'a'
));

const carros = [
    {
        nome: 'Corvette',
        potencia:800
    },
    {
        nome:'Mustang',
        potencia:900
    }
];

console.log(carros.find(carro => 
    carro.potencia >= 900
    ));