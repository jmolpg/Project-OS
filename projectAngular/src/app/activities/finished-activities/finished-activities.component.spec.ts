import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedActivitiesComponent } from './finished-activities.component';

describe('FinishedActivitiesComponent', () => {
  let component: FinishedActivitiesComponent;
  let fixture: ComponentFixture<FinishedActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinishedActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinishedActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
