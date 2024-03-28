import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDireitaComponent } from './login-direita.component';

describe('LoginDireitaComponent', () => {
  let component: LoginDireitaComponent;
  let fixture: ComponentFixture<LoginDireitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginDireitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginDireitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
