import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

    produtos:string[] = [];

    @Input() novoItem:string ="";

    menuType:string = "user";

    consultarProdutos():void{
      this.produtos = ["Melao","Laranja","Limao","Maca"];
    }

    adicionar():void{
      this.produtos.push( this.novoItem );
      this.novoItem = "";
    }

    remover(index:number){

      this.produtos.splice( index , index );
      // let item = delete this.produtos[index]; //remove o elemento mas não retira o espaço
    }

}
