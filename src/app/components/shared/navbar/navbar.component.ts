import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _router:Router ) {}

  ngOnInit(  ) {
  }


  buscarHeroe(termino:string){
    //console.log(`El término que has buscado es: ${termino}`);
    //el arreglo tiene que ir con el nombre que se declaró en el path
    this._router.navigate( [ '/buscador', termino ] );
  }

}
