import { Component, OnInit } from '@angular/core';
import { RootHorarioPontoOnibus } from '../rootHorarioPontoOnibus';
import { PontoOnibusService } from '../pontoOnibus.service';
import { HorarioPontoOnibus } from '../horarioPontoOnibus';
import { ActivatedRoute } from '@angular/router';
import { FavoritosService } from 'src/app/menu/favoritos/favoritos.service';
import { CookieService } from 'src/app/cookie.service';

@Component({
  selector: 'app-horarios-ponto-onibus',
  templateUrl: './horarios-ponto-onibus.component.html'
})
export class HorariosPontoOnibusComponent implements OnInit {

  constructor(public cookieService: CookieService, private pontoOnibusService: PontoOnibusService, private activatedRoute: ActivatedRoute, private favoritoService: FavoritosService) {
    this.numeroPontoOnibus = '';
    this.numeroPontoOnibusView = '';
    this.isAuthenticated = true;
    this.root = {} as RootHorarioPontoOnibus;
  }

  public isAuthenticated: boolean;
  public numeroPontoOnibus: string;
  public numeroPontoOnibusView: string;
  public root: RootHorarioPontoOnibus;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(parametro => {
      if (parametro['ponto'] != undefined || parametro['ponto'] != null || parametro['ponto'] != '') {
        this.numeroPontoOnibus = parametro['ponto'];
        this.getHorariosPontoOnibus();
      }
    });

  }

  getHorariosPontoOnibus() {
    this.numeroPontoOnibusView = this.numeroPontoOnibus;

    this.pontoOnibusService.obterHorariosOnibus(this.numeroPontoOnibus)
      .subscribe(
        horarios => {
          this.root = horarios;
        },
        error => console.log(error)
      );
  }

  adicionarFavorito() {

    let token = this.cookieService.getCookie('token');

    if (token === undefined || token == null || token.length <= 0) {
      this.isAuthenticated = false;
    }
    else {
      this.isAuthenticated = true;
    }

    if (this.isAuthenticated) {

      if (this.numeroPontoOnibus == '' || this.numeroPontoOnibus == undefined || this.numeroPontoOnibus == null) {
        location.href = "/ponto-onibus";
      } else {
        this.favoritoService.adicionarFavorito(this.numeroPontoOnibus)
          .subscribe(
            horarios => {
              location.href = "/favoritos";
            },
            error => console.log(error)
          );
      }
    }
  }
}
