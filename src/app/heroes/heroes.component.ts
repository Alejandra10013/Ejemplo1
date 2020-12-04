import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from './mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// @Component es conocido como decorador permite especificar metadata sobre este componente
// y eso permite a angular generar componentes particulares
// como el selector: ´´ que es el elemento css selector
// template url: es la direccion del template que se esta usando
// styleurls: direccion de la hoja de estilos que pueden ser mas de una. por eso es que hay un array (implements OnInit)

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void { }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}
// export es importante para que pueda ser usado el import en otras areas.
// la implementacion de OnInit(lifecicle hook) hace que cada que se corre la app cada componente tiene un lifecicle hook























