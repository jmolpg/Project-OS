import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageFuncionariosRoutingModule } from './home-page-funcionarios-routing.module';
import { HomePageFuncionariosComponent } from './home-page-funcionarios.component';


@NgModule({
  declarations: [
    HomePageFuncionariosComponent
  ],
  imports: [
    CommonModule,
    HomePageFuncionariosRoutingModule
  ]
})
export class HomePageFuncionariosModule { }
