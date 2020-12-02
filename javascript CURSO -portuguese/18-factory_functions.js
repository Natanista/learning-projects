

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){

   return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação")
        }
    }

}

const telefone = criarCelular('Motorola',5.5,5000);
console.log(telefone);