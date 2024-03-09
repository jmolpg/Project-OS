import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllFuncionariosRoutingModule } from './all-funcionarios-routing.module';
import { AllFuncionariosComponent } from './all-funcionarios.component';


@NgModule({
  declarations: [
    AllFuncionariosComponent
  ],
  imports: [
    CommonModule,
    AllFuncionariosRoutingModule
  ]
})
export class AllFuncionariosModule { }
