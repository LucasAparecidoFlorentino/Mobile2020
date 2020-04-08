export class Estoque{

  nome : string;
  quantidade : Number;

  getNome():string{
    return this.nome;
  }

  setNome(nome:string) : void{
    this.nome = nome;
  }

  getQuantidade():Number{
    return this.quantidade;
  }

  setQuantidade(quantidade:Number) : void{
    this.quantidade = quantidade;
  }
}
