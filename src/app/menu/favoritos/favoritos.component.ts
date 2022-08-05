import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html'
})

export class FavoritosComponent implements OnInit {

  constructor(public cookieService: CookieService) {
    this.isCookie = false
  }

  public isCookie: boolean;

  ngOnInit(): void {
    let token = this.cookieService.getCookie('token');

    if (token === undefined || token == null || token.length <= 0 ){
        this.isCookie = false;
      }
      else{
        this.isCookie = true;
      }
  }
}