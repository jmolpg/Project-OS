import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiggerActivitiesRoutingModule } from './bigger-activities-routing.module';
import { BiggerActivitiesComponent } from './bigger-activities.component';


@NgModule({
  declarations: [
    BiggerActivitiesComponent
  ],
  imports: [
    CommonModule,
    BiggerActivitiesRoutingModule
  ]
})
export class BiggerActivitiesModule { }
