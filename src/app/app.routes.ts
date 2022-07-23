import { Routes } from '@angular/router';
import { HorariosPontoOnibusComponent } from './home/pontoOnibus/horarios-ponto-onibus/horarios-ponto-onibus.component';
import { ListaTerminaisComponent } from './home/terminais/lista-terminais/lista-terminais.component';
import { FavoritosComponent } from './menu/favoritos/favoritos.component';
import { NoticiasComponent } from './menu/noticias/noticias.component';
import { SobreComponent } from './menu/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';

export const rootRouterConfig: Routes =[
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'terminais', component: ListaTerminaisComponent },
    { path: 'ponto-onibus', component: HorariosPontoOnibusComponent }
];