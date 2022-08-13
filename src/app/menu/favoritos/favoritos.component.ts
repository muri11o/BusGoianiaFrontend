import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/cookie.service';
import { FavoritosService } from './favoritos.service';
import { RootFavorito } from './rootFavorito';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html'
})

export class FavoritosComponent implements OnInit {

  constructor(public cookieService: CookieService, private favoritoService: FavoritosService) {
    this.root = {} as RootFavorito;
    this.isAuthenticated = false;
  }

  public root: RootFavorito;
  public isAuthenticated: boolean;

  ngOnInit(): void {

    let token = this.cookieService.getCookie('token');

    if (token === undefined || token == null || token.length <= 0) {
      this.isAuthenticated = false;
    }
    else {
      this.isAuthenticated = true;
    }

    if (this.isAuthenticated) {


      this.favoritoService.obterListaDeFavoritos()
        .subscribe(
          favoritos => {
            this.root = favoritos;
          },
          error => console.log(error)
        );
    }
  }

  verHorarios(pontoOnibus: string) {
    location.href = `/ponto-onibus?ponto=${pontoOnibus}`;
  }

  excluirFavorito(idFavorito: string) {
    this.favoritoService.excluirFavorito(idFavorito)
      .subscribe(
        favorito => {
          location.href = "/favoritos";
        },
        error => console.log(error)
      );
  }
}