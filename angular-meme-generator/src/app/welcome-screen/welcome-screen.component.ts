import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
})
export class WelcomeScreenComponent implements OnInit {
  isLogin = true;
  isRegister = false;
  constructor(
    private login: LoginComponent,
    private register: RegisterComponent
  ) {}

  setToLogin() {
    this.isLogin = true;
    this.isRegister = false;
  }

  setToRegister() {
    this.isRegister = true;
    this.isLogin = false;
  }

  ngOnInit(): void {}
}
