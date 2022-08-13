import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CookieService } from "src/app/cookie.service";
import { AppSettings } from "src/appsettings";
import { AppSettingsService } from "src/appsettings.service";
import { RootFavorito } from "./rootFavorito";


@Injectable()
export class FavoritosService {

    constructor(private http: HttpClient, public cookieService: CookieService, public appSettingsService: AppSettingsService) {
        this.settings = {} as AppSettings;
        this.appSettingsService.getSettings().subscribe(settings => this.settings = settings, () => null, () => {this.settings.baseUrlAuth});
    }

    public settings: AppSettings;    

    obterListaDeFavoritos() : Observable<RootFavorito> {
        return this.http.get<RootFavorito>(this.settings.baseUrlMain + `pontos-onibus-favotiros`,
        { headers: new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.getCookie('token')}`) });
    }

    adicionarFavorito(pontoOnibus: string) : Observable<RootFavorito> {
        return this.http.get<RootFavorito>(this.settings.baseUrlMain + `adicionar-favoritos?numeroPonto=${pontoOnibus}`,
        { headers: new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.getCookie('token')}`) });
    }

    excluirFavorito(id: string) : Observable<RootFavorito> {
        return this.http.delete<RootFavorito>(this.settings.baseUrlMain + `pontos-onibus-favotiros?id=${id}`,
        { headers: new HttpHeaders().set('Authorization', `Bearer ${this.cookieService.getCookie('token')}`) });
    }
}