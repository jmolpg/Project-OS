import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinishedActivitiesRoutingModule } from './finished-activities-routing.module';
import { FinishedActivitiesComponent } from './finished-activities.component';


@NgModule({
  declarations: [
    FinishedActivitiesComponent
  ],
  imports: [
    CommonModule,
    FinishedActivitiesRoutingModule
  ]
})
export class FinishedActivitiesModule { }
