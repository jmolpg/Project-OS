import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalFuncionarioComponent } from './personal-funcionario.component';

describe('PersonalFuncionarioComponent', () => {
  let component: PersonalFuncionarioComponent;
  let fixture: ComponentFixture<PersonalFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalFuncionarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
