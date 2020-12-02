const faixas = [
    {tooltip: 'até R$700', minimo:0, maximo:700},
    {tooltip: 'de R$700 a R$1000', minimo:700, maximo:1000},
    {tooltip: 'de R$1000 até R$1300', minimo:1000, maximo:1300}
];

function criaFaixaPreco(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
};

let faixa2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',200,300)
];


console.log(faixas);

function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('a',2,300)
]
