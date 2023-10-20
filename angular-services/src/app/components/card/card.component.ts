import { Component , Inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  pokemon:Pokemon  = {
    id: 0, name:"" , sprites:{front_default:""}, types:[]
   };




  constructor(
    private activeRouter:ActivatedRoute ,
    private pokemonService:PokemonService){

  }

  ngOnInit(): void {

    this.pokemonService.getPokemon('pikachu').subscribe({
      next: (res)=> { console.log( res );
        this.pokemon = {
          id: res.id ,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
          }
          console.log( this.pokemon );
      },

      error: (err)=>{ console.log('Erro ao consumir a api')}
    });
  }



}
