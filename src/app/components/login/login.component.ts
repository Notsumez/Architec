import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, SignupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  ngOnInit() {
    // Defina o login como verdadeiro e o signup como falso por padrão
    this.login = true;
    this.signup = false;
  }
  
  constructor(){

  }

  signup:boolean = true;
  login:boolean = true;

  showLogin(){
    if(this.login == true){
      this.login = false;
      this.signup = true;
    }
  }

  showSign(){
    if(this.signup == true){
      this.signup = false;
      this.login = true;
    }
  }
}
