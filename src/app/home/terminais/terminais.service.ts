import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootTerminalOnibus } from './rootTerminalOnibus';

@Injectable()
export class TerminalService {

    constructor(private http: HttpClient) {}

    protected urlService: string = "https://localhost:7145/v1/api/";

    obterTerminais() : Observable<RootTerminalOnibus> {
        return this.http
        .get<RootTerminalOnibus>(this.urlService + 'terminal-onibus');
    }
}