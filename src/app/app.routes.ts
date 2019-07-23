//todas las rutas que sean declaradas tienen que ser previamente importadas
import {RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

//APP_ROUTES es un arreglo de rutas, acá irán todas las rutas y en caso de que ninguna coincide se irá al home de nuevo
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    //para recibir un parámetro (en este caso es parámetro de búsqueda) se hace...
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscador/:termino', component: BuscadorComponent },
    //en caso de no encontrar ninguna ruta se redigirirá al home
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

//es un poco más eficiente poner después de APP_ROUTES esto , { useHash: true }