import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  constructor(
    private activeRouter:ActivatedRoute,
    private router:Router){
      // pegando o id
      this.activeRouter.params.subscribe((value)=>console.log(value));
    // http://localhost:4200/portfolio/2?name=Roni&token=123
    this.activeRouter.queryParams.subscribe((value)=>console.log(value));

  }
  ngOnInit(): void {

  }

  retornarInicio():void{
    console.log('retornarInicio');
    this.router.navigate(['/']);
  }
}
