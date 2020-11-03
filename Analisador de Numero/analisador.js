let num = document.querySelector("input#fnum");
let lista = document.getElementById("flista");
let res = document.querySelector("div#res")
let vetores = [];
num.value = ``;
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, vetores)){
        vetores.push(Number(num.value));
        let item = document.createElement("option");
        item.text = `O valor ${num.value} foi adicionado`;
        lista.appendChild(item);
        

    }else{
        alert("Valor inválido ou já encontrado na lista");
    }
    num.value = ``;
    num.focus();
}

function finalizar(){
    if(vetores.length == 0){
        alert("Adicione valores antes de finalizar!")
    }else{
        let total = vetores.length;
        let maior = vetores[0];
        let menor = vetores[0];
        let media = 0;
        let soma = 0;

        for(let pos in vetores){
            soma += vetores[pos];
            if(vetores[pos] > maior)
                maior = vetores[pos];
                if(vetores[pos] < menor)
                menor = vetores[pos];
                    
            
            
        }

        media = soma/total;
        res.innerHTML = ``;
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`;
        res.innerHTML += `<p>A media dos valores é de ${Math.trunc(media)}</p>`;

    }
}