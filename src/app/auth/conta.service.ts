import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Conta } from "./conta";
import { RootAccessToken } from "./rootAccessToken";


@Injectable()
export class ContaService {

    constructor(private http: HttpClient) {}

    protected urlService: string = "https://localhost:7088/v1/api/";

    realizarCadastro(email: string, confirmarEmail: string, nome: string, senha: string) : Observable<RootAccessToken> {

        var conta = new Conta(email, confirmarEmail, nome, senha);

        return this.http.post<RootAccessToken>(this.urlService + 'conta/cadastrar', conta);
    }
}