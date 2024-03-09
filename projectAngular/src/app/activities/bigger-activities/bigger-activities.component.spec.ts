import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggerActivitiesComponent } from './bigger-activities.component';

describe('BiggerActivitiesComponent', () => {
  let component: BiggerActivitiesComponent;
  let fixture: ComponentFixture<BiggerActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiggerActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiggerActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
