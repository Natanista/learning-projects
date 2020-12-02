
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

 //Pascal Case, camelCase
 function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
     this.marcaCelular = marcaCelular,
     this.tamanhoTela = tamanhoTela,
     this.capacidadeBateria = capacidadeBateria,
     this.ligar = function() {
         console.log("Fazendo ligação...");
     }
 }

const novoCelular = new Celular('LG',6,4600);