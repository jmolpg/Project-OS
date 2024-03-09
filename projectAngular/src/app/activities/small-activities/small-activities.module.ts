import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmallActivitiesRoutingModule } from './small-activities-routing.module';
import { SmallActivitiesComponent } from './small-activities.component';


@NgModule({
  declarations: [
    SmallActivitiesComponent
  ],
  imports: [
    CommonModule,
    SmallActivitiesRoutingModule
  ]
})
export class SmallActivitiesModule { }
