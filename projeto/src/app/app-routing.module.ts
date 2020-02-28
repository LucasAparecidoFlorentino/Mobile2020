import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjetivoComponent } from "./objetivo/objetivo.component";
import { HelloComponent } from "./hello/hello.component";
import { NumerosComponent } from"./numeros/numeros.component";

const routes: Routes = [
  {path:"objetivo", component: ObjetivoComponent},
  {path:"hello", component: HelloComponent},
  {path:"numeros", component: NumerosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
