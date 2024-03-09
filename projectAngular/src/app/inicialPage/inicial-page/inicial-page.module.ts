import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicialPageRoutingModule } from './inicial-page-routing.module';
import { InicialPageComponent } from './inicial-page.component';


@NgModule({
  declarations: [InicialPageComponent],
  imports: [
    CommonModule,
    InicialPageRoutingModule
  ]
})
export class InicialPageModule { }
