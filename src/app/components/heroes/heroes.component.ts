import { Component, OnInit } from '@angular/core';

//para poder utilizar un servicio es necesario primero importarlo
import { HeroesService, Heroe } from '../../servicios/heroes.service';

//para poder redireccionar a una página en específico primero se necesita el router...
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  //para poder utilizar el servicio en el constructor...
  //de igual manera es para usar el router (que en realidad es un servicio)
  constructor(private _heroesService:HeroesService, private _router:Router ) { 
  
}

  ngOnInit() {
    
    this.heroes = this._heroesService.getHeroes();

  }

  verHeroe( idx:number ){
    //el navigate recibe un arrglo igualito al del [RouterLink]
    this._router.navigate( ['./heroe', idx] );
  }

}
