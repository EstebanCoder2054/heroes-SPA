//el heroe component me ayuda a visulaizar una página para mostrar a un heroe en específico
import { Component } from '@angular/core';
//para poder agarrar el paámetro que viene desde la URL entonces primero hay que importar...
import { ActivatedRoute } from '@angular/router';
//y se implementa de igual manera que un servicio

//ahora se importa el servicio para que pueda interactuar con el componente y se implement en el constructor
import { HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {}



  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService ) { 
    //para poder acceder a los parámetros tenemos que "suscribirnos" a un observador
    //el observador nos retorna los parámetros los cuáles son los que recibimos en la función de flecha
    this._activatedRoute.params.subscribe( (params) => {
    //  console.log( params['id'] ); //se muestra con el mismo id que está configurado en el router
    
    this.heroe = this._heroesService.getHeroe(params ['id'] );
    console.log(this.heroe);
    
    } )

  }


}
