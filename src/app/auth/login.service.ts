import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, take } from "rxjs";
import { Login } from "./login";
import { RootAccessToken } from "./rootAccessToken";

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {}

    protected urlService: string = "https://localhost:7088/v1/api/";
    
    obterToken(email: string, senha: string) : Observable<RootAccessToken> {

       var login = new Login(email, senha);

       return this.http
       .post<RootAccessToken>(this.urlService + 'auth/login', login);
    }

}