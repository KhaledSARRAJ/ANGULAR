import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = []; // liste des héros initialisée à vide
  selectedHero? : Hero;

  // injection du HeroService via le constructeur
  constructor(private heroService : HeroService) {     
  }

  // initialisation du composant :
  ngOnInit(): void {
    this.heroService.getHeroes()
                    .subscribe( maListeDeHeros => this.heroes = maListeDeHeros );
  }

  /*
  // VERSION LONGUE :
  // initialisation du composant :
  ngOnInit(): void {
    // je récupère un observable :
    let obs = this.heroService.getHeroes();
    // je donne à mon observable ma méthode de callback (update) :
    obs.subscribe( this.update );

    console.log("plop");
  }

  // fonction de callback :
  update(result : Hero[]){
    this.heroes = result;
  }

  */

  selectHero(hero : Hero) : void {
    console.log(hero);
    if (this.selectedHero == hero){
      this.selectedHero = null;
    }
    else{
      this.selectedHero = hero;
    }
  }

  

}
