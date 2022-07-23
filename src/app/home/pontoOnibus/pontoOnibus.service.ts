import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RootHorarioPontoOnibus } from "./rootHorarioPontoOnibus";

@Injectable()
export class PontoOnibusService {

    constructor(private http: HttpClient) {}

    protected urlService: string = "https://localhost:7145/v1/api/";

    obterHorariosOnibus(numeroPonto: string) : Observable<RootHorarioPontoOnibus> {
        return this.http
        .get<RootHorarioPontoOnibus>(this.urlService + `ponto-onibus?numeroPontoOnibus=${numeroPonto}`);
    }

}