import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-get-cookie-example',
  templateUrl: './get-cookie-example.component.html'
})
export class GetCookieExampleComponent implements OnInit {

  

  constructor(public cookie: CookieService) {
    this.user = '';
   }

  public user: string;

  ngOnInit(): void {
    this.user = this.cookie.getCookie('user');
  }

}
