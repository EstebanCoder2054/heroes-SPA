import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//acá irán las rutas
//las rutas se declaran en los imports
import { APP_ROUTING } from './app.routes';

//acá irán los servicios
import {HeroesService} from './servicios/heroes.service';


//acá irán los componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    //las rutas van en imports
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    //los servicios van en providers
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
