function exibirTipo(numero){
    for(let i = 0; i <= numero; i++){
        if(i % 2 == 0){
            console.log(`${i} PAR`);
        }
        else{
            console.log(`${i} ÍMPAR`)
        }
    }
}

exibirTipo(10);
