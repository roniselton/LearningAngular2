import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl:string = "";
  private pokJson:Pokemon | any;

  constructor(private http:HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  getPokemon(nome:string):Observable<Pokemon>{
    this.pokJson = this.http.get<Pokemon>( this.baseUrl + nome );
    console.log( this.pokJson );
    return this.pokJson;
  }

}
