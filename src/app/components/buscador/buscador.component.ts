import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private _activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService ) { }

  //así como se puede trabajar sobre el constructor también se puede trabajar sobre el ngOnInit, no problem
  ngOnInit() {

    this._activatedRoute.params.subscribe( (params) => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe( params['termino'] );
      console.log(this.heroes);
    } );

  }

}
