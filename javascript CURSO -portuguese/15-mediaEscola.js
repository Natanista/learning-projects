const conjunto = [100, 100, 90, 80, 100];


function mediaDoAluno(notas){
    let soma = 0;

    for(let nota of notas){
        soma+= nota;
    }
    const media = soma/(notas.length);

    if(media < 59){
        console.log("F");
    }
    else if(media < 69){
        console.log("D")
    }
    else if(media < 79){
        console.log("C")
    }
    else if(media < 89){
        console.log("B")
    }
    else{
        console.log("A")
    }

}

mediaDoAluno(conjunto);

