import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFuncionariosComponent } from './all-funcionarios.component';

describe('AllFuncionariosComponent', () => {
  let component: AllFuncionariosComponent;
  let fixture: ComponentFixture<AllFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllFuncionariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
