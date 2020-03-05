import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ClienteModule } from "./cliente/cliente.module";
import { ProdutoModule } from "./produto/produto.module";

import { ObjetivoComponent } from"./objetivo/objetivo.component";
import { HelloComponent } from"./hello/hello.component";
import { NumerosComponent } from"./numeros/numeros.component";

@NgModule({
  declarations: [
    AppComponent,ObjetivoComponent,HelloComponent,NumerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClienteModule,
    ProdutoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
