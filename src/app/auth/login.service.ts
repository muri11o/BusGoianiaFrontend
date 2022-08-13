import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";
import { AppSettings } from "src/appsettings";
import { AppSettingsService } from "src/appsettings.service";
import { Login } from "./login";
import { RootAccessToken } from "./rootAccessToken";

@Injectable()
export class LoginService {

    constructor(private http: HttpClient, public appSettingsService: AppSettingsService) {
        this.settings = {} as AppSettings;
        this.appSettingsService.getSettings().subscribe(settings => this.settings = settings, () => null, () => {this.settings.baseUrlAuth});
    }

    public settings: AppSettings;  
    
    obterToken(email: string, senha: string) : Observable<RootAccessToken> {

       var login = new Login(email, senha);

       return this.http
       .post<RootAccessToken>(this.settings.baseUrlAuth + 'auth/login', login);
    }

}