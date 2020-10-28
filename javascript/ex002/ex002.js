function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || fano.value > ano) {
    alert("Error");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero;
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
      genero = "Homem";
      if(idade >= 0 && idade < 10 ){
        img.setAttribute('src','img/crianca_menino.png')
      }else if(idade < 21){
        img.setAttribute('src','img/adolescente_homem.png')
      }else if(idade < 50){
        img.setAttribute('src','img/adulto_homem.png')
      }else{
        img.setAttribute('src','img/idoso_homem.png')
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if(idade >= 0  && idade < 10 ){
        img.setAttribute('src','img/crianca_menina.png')
      }else if(idade < 21){
        img.setAttribute('src','img/adolescente_mulher.png')
      }else if(idade < 50){
        img.setAttribute('src','img/adulto_mulher.png')
      }else{
        img.setAttribute('src','img/idoso_mulher.png')
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img)
  }
}
