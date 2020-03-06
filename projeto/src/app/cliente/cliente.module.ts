import { NgModule } from "@angular/core";

import { SalvarComponent } from "./cliente-salvar/salvar.component";
import { AlterarComponent } from "./cliente-alterar/alterar.component";
import { ExcluirComponent } from "./cliente-excluir/excluir.component"

@NgModule({
  declarations: [SalvarComponent,AlterarComponent,ExcluirComponent],
  exports: [SalvarComponent,AlterarComponent,ExcluirComponent],
  imports: []
})
export class ClienteModule{


}
