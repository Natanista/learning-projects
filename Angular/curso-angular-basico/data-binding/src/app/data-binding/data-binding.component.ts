import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  constructor() { }
  title = 'data-binding';

  valorAtual: string = "";
  valorSalvo: string;

  isMouseOver: boolean = false;

  nome: string = "Natan";

  pessoa: any = {
    nome: 'def',
    idade: 22
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  
  }
}
