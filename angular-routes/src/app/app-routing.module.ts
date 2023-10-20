import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  {path:'',component:TitleComponent , pathMatch:'full'},
  {path:'portfolio/:idItem',component:CardComponent},
  {path:'**', redirectTo:''} //Rota coringa que vai para qualquer coisa... pode criar um pagina de erro.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
