import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalFuncionarioRoutingModule } from './personal-funcionario-routing.module';
import { PersonalFuncionarioComponent } from './personal-funcionario.component';


@NgModule({
  declarations: [
    PersonalFuncionarioComponent
  ],
  imports: [
    CommonModule,
    PersonalFuncionarioRoutingModule
  ]
})
export class PersonalFuncionarioModule { }
