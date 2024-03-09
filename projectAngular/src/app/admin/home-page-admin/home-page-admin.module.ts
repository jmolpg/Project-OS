import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageAdminRoutingModule } from './home-page-admin-routing.module';
import { HomePageAdminComponent } from './home-page-admin.component';


@NgModule({
  declarations: [
    HomePageAdminComponent
  ],
  imports: [
    CommonModule,
    HomePageAdminRoutingModule
  ]
})
export class HomePageAdminModule { }
