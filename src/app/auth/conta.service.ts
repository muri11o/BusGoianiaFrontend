import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppSettings } from "src/appsettings";
import { AppSettingsService } from "src/appsettings.service";
import { Conta } from "./conta";
import { RootAccessToken } from "./rootAccessToken";


@Injectable()
export class ContaService {

    constructor(private http: HttpClient, public appSettingsService: AppSettingsService) {
        this.settings = {} as AppSettings;
        this.appSettingsService.getSettings().subscribe(settings => this.settings = settings, () => null, () => {this.settings.baseUrlAuth});
    }

    public settings: AppSettings; 

    realizarCadastro(email: string, confirmarEmail: string, nome: string, senha: string) : Observable<RootAccessToken> {

        var conta = new Conta(email, confirmarEmail, nome, senha);

        return this.http.post<RootAccessToken>(this.settings.baseUrlAuth + 'conta/cadastrar', conta);
    }
}