function verificarVelocidade(velocidade){
    const velocidadeMax = 70;
    const kmPontos = 5;
    if(velocidade <= velocidadeMax){
        console.log('ok!');
    }
    else{
        const pontos = Math.floor((velocidade - velocidadeMax) / kmPontos);

        if(pontos >= 12){
            console.log("Carteira suspensa!");
        }
        else{
            console.log(`Pontos: ${pontos}`);
        }
    }
}

verificarVelocidade(130);