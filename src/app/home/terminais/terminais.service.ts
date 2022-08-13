import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootTerminalOnibus } from './rootTerminalOnibus';
import { Validators } from '@angular/forms';
import { CookieService } from 'src/app/cookie.service';
import { AppSettingsService } from 'src/appsettings.service';
import { AppSettings } from 'src/appsettings';

@Injectable()
export class TerminalService {

    constructor(private http: HttpClient, public cookieService: CookieService, public appSettingsService: AppSettingsService) {
        this.settings = {} as AppSettings;
        this.appSettingsService.getSettings().subscribe(settings => this.settings = settings, () => null, () => {this.settings.baseUrlAuth});
    }

    public settings: AppSettings;    

    obterTerminais() : Observable<RootTerminalOnibus> {

        return this.http.get<RootTerminalOnibus>(this.settings.baseUrlMain + 'terminal-onibus',
         { headers: new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.getCookie('token')}`) } );
    }
}