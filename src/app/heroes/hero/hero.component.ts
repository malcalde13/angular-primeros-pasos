import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  //creamos alguna propiedades y realizamos una interpolacion en el html
  // la interpolacion se refiere a embeber expresiones en texto marcado {{ }}
  public name: string = 'ironman';
  public age: number = 45;


  //Los getter son una propiedad que se ven como una propiedad pero realmente es un metodo! WTF!
  //Capitalizamos el nombre del personaje
  get capitaLizedName(): string {
    return this.name.toUpperCase();
  }

  // Creamos un metodo
  getHeroDescription(): string {
    // concatenacion
    return `${this.name} -${this.age}`;

  }

  //Creamos dos nuevos metodos, para cambiar el nombre y la edad en los botones
  // "Cambiar Nombre" "Cambiar edad"
  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;

  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
