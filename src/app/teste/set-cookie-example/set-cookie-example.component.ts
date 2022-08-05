import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-set-cookie-example',
  templateUrl: './set-cookie-example.component.html'
})
export class SetCookieExampleComponent implements OnInit {

  constructor(public cookie: CookieService) { }

  ngOnInit(): void {
    this.cookie.setCookie({
      name: 'user',
      value: 'Readerstack',
      session: true,
    });
  }

}
