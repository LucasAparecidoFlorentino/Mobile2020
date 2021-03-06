import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";
import { Erro404Component } from "./erro404/erro404.component";
import { VetoresComponent } from "./vetores/vetores.component";


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sobre", component: SobreComponent},
  {path: "vetores", component: VetoresComponent},

  {path: "**", component: Erro404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
