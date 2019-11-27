import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../../servicios/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  busqueda:any[] = [];
  termino: string;

  constructor(private _heroesService: HeroesService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.busqueda = this._heroesService.buscarHeroes( params['termino'] );
      //console.log(this.busqueda);
    });
   }

  ngOnInit() {
  }

  verHeroe(idx:number){

    this._router.navigate( ['/heroe',idx] );


  }

}
