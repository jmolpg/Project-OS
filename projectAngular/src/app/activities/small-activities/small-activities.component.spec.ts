import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallActivitiesComponent } from './small-activities.component';

describe('SmallActivitiesComponent', () => {
  let component: SmallActivitiesComponent;
  let fixture: ComponentFixture<SmallActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmallActivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
