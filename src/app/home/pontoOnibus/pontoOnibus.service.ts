import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CookieService } from "src/app/cookie.service";
import { AppSettings } from "src/appsettings";
import { AppSettingsService } from "src/appsettings.service";
import { RootHorarioPontoOnibus } from "./rootHorarioPontoOnibus";

@Injectable()
export class PontoOnibusService {

    constructor(private http: HttpClient, public cookieService: CookieService, public appSettingsService: AppSettingsService) {
        this.settings = {} as AppSettings;
        this.appSettingsService.getSettings().subscribe(settings => this.settings = settings, () => null, () => {this.settings.baseUrlAuth});
    }

    public settings: AppSettings;    

    obterHorariosOnibus(numeroPonto: string) : Observable<RootHorarioPontoOnibus> {
        return this.http
        .get<RootHorarioPontoOnibus>(this.settings.baseUrlMain + `ponto-onibus?numeroPontoOnibus=${numeroPonto}`,
        { headers: new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.getCookie('token')}`) });
    }

}