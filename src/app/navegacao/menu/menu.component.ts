import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(public cookieService: CookieService, private router: Router) {
    this.isAuthenticated = false;
  }

  public isAuthenticated: boolean;

    public sair() {
      this.cookieService.deleteCookie('token');
      location.href = "/home";
    }

  ngOnInit(): void {
    
    let token = this.cookieService.getCookie('token');

    if (token === undefined || token == null || token.length <= 0 ){
      this.isAuthenticated = false;
    }
    else{
      this.isAuthenticated = true;
    }

  }

}
