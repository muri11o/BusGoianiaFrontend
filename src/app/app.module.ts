import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { FavoritosComponent } from './menu/favoritos/favoritos.component';
import { NoticiasComponent } from './menu/noticias/noticias.component';
import { rootRouterConfig } from './app.routes';
import { SobreComponent } from './menu/sobre/sobre.component';
import { TerminalService } from './home/terminais/terminais.service';
import { ListaTerminaisComponent } from './home/terminais/lista-terminais/lista-terminais.component';
import { PontoOnibusService } from './home/pontoOnibus/pontoOnibus.service';
import { HorariosPontoOnibusComponent } from './home/pontoOnibus/horarios-ponto-onibus/horarios-ponto-onibus.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    FavoritosComponent,
    NoticiasComponent,
    SobreComponent,
    ListaTerminaisComponent,
    HorariosPontoOnibusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false} )],
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    TerminalService,
    PontoOnibusService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
