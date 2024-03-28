import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEsquerdaComponent } from './login-esquerda.component';

describe('LoginEsquerdaComponent', () => {
  let component: LoginEsquerdaComponent;
  let fixture: ComponentFixture<LoginEsquerdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginEsquerdaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginEsquerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
