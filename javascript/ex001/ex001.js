function carregar(){
    var data = new Date();
    var hora = data.getHours();
    
var mensagem = document.getElementById('msg');
var img = document.getElementById('foto');
msg.innerHTML = `Agora são ${hora} horas`;
if(hora >= 0 && hora < 12){
    img.src = 'img/manha.jpg';
    document.body.style.background = '#D09660';
}else if(hora >= 12 && hora <= 18){
    img.src = 'img/tarde.jpg';
    document.body.style.background = '#ACCCD7';
}else{
    img.src = 'img/noite.jpg';
    document.body.style.background = '#004A4F';
}
}