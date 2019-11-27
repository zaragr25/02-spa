import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../servicios/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService, private _router: Router) { }

  ngOnInit() {
  }

  buscarHeroe( termino:string ){
    this._router.navigate( ['/search',termino] );

  }

}
