import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageFuncionariosComponent } from './home-page-funcionarios.component';

describe('HomePageFuncionariosComponent', () => {
  let component: HomePageFuncionariosComponent;
  let fixture: ComponentFixture<HomePageFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageFuncionariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
