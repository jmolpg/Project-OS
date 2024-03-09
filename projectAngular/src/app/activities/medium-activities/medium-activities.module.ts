import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediumActivitiesRoutingModule } from './medium-activities-routing.module';
import { MediumActivitiesComponent } from './medium-activities.component';


@NgModule({
  declarations: [
    MediumActivitiesComponent
  ],
  imports: [
    CommonModule,
    MediumActivitiesRoutingModule
  ]
})
export class MediumActivitiesModule { }
