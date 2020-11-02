let valores = [2,3,4,5,6,7,5,3,];

for(let pos in valores){
    console.log(valores[pos]);
}

let encontrar = valores.indexOf(2);

if(encontrar == -1){
    console.log(`Ò valor não foi encontrado`)
}else {
    console.log(`O valor está na posição ${encontrar}` );
}

