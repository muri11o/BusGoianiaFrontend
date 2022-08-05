import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';
import { LoginService } from '../login.service';
import { RootAccessToken } from '../rootAccessToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(public cookieService: CookieService, private router: Router, private loginService: LoginService) {
    this.loginFail = false;
    this.email = '';
    this.senha = '';
    this.root = {} as RootAccessToken;
  }

  public loginFail: boolean;
  public email: string;
  public senha: string;
  public root: RootAccessToken;

  ngOnInit(): void {
  }

  public login() {
    this.loginService.obterToken(this.email, this.senha)
      .subscribe(token => {
        this.root = token;
        this.loginFail = false;
      },
        error => this.loginFail = true);

    if (!this.loginFail) {
      this.criarCookieToken();
      location.href = "/home";
    }
  }

  private criarCookieToken() {
    this.cookieService.setCookie({
      name: 'token',
      value: this.root.data.accessToken,
      session: true,
    })
  }
}
