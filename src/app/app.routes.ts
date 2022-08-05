import { Routes } from '@angular/router';
import { ContaComponent } from './auth/conta/conta.component';
import { LoginComponent } from './auth/login/login.component';
import { HorariosPontoOnibusComponent } from './home/pontoOnibus/horarios-ponto-onibus/horarios-ponto-onibus.component';
import { ListaTerminaisComponent } from './home/terminais/lista-terminais/lista-terminais.component';
import { FavoritosComponent } from './menu/favoritos/favoritos.component';
import { NoticiasComponent } from './menu/noticias/noticias.component';
import { SobreComponent } from './menu/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { GetCookieExampleComponent } from './teste/get-cookie-example/get-cookie-example.component';
import { SetCookieExampleComponent } from './teste/set-cookie-example/set-cookie-example.component';

export const rootRouterConfig: Routes =[
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'terminais', component: ListaTerminaisComponent },
    { path: 'ponto-onibus', component: HorariosPontoOnibusComponent },
    { path: 'get-cookie', component: GetCookieExampleComponent },
    { path: 'set-cookie', component: SetCookieExampleComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastrar', component: ContaComponent }
];