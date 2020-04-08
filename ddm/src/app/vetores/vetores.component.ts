import { Component } from '@angular/core';
import { ServicoEstoque } from '../servicos/servico.estoque';
import { Estoque } from '../entidades/estoque';

@Component({
  selector: 'vetor-component',
  templateUrl: 'vetores.component.html',
  styleUrls: ['vetores.component.css']
})

export class VetoresComponent{

  servico: ServicoEstoque;

  constructor(servico: ServicoEstoque){
    this.servico = servico;
  }

  adicionar() : void {
    this.servico.adicionar();
  }

  excluir(i:number) : void {
    this.servico.excluir(i);
  }

  alterar(i:number) : void {
    this.servico.alterar(i);
  }
}
