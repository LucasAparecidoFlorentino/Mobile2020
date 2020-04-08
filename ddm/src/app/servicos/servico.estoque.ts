import { Estoque } from '../entidades/estoque';
import { Injectable } from '@angular/core';

@Injectable()
export class ServicoEstoque{
  listaEstoques = new Array<Estoque>();

  estoque : Estoque = new Estoque;

  adicionar() : void {
    this.listaEstoques.push(this.estoque);
    this.estoque = new Estoque;
  }

  excluir(i:number) : void {
    this.listaEstoques.splice(i,1);
  }

  alterar(i:number) : void {
    this.estoque = this.listaEstoques[i];
    this.listaEstoques.splice(i,1);
  }
}
