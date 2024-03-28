import { Component } from '@angular/core';
import { LoginDireitaComponent } from '../login-direita/login-direita.component';
import { LoginEsquerdaComponent } from '../login-esquerda/login-esquerda.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginDireitaComponent, LoginEsquerdaComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
