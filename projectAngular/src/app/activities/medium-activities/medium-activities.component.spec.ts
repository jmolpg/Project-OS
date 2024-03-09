import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumActivitiesComponent } from './medium-activities.component';

describe('MediumActivitiesComponent', () => {
  let component: MediumActivitiesComponent;
  let fixture: ComponentFixture<MediumActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediumActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediumActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
