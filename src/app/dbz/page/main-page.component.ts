import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service'

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  // Dentro del constructor injectamos el servicio dbz.service.ts
  // DbzService el nobmre de la clase
  // Esto realiza la injeccion de dependencias
  // Esto va a hablitar en todo mi componente del mainpage, toda la informacion
  // que este siendo utilizada en dbz.service.ts
  // dbzService es la instancia de una clase por lo tanto tengo lo poersonajes y los metodos
  // Como es publico voy a hacer referencia a dbzService en mi mainpage
  constructor(private dbzService: DbzService) {

  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }


  // Creamos un nuevo Metodo
  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  // Creamos un nuevo Metodo
  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

}



// console.log('MainPage');
// console.log(character)
//Cuando agrego el push estoy indicando que agregue el personaje al final de la lista
// this.characters.push(character);


// SERVICIOS PRIVADOS
//Una de las razon principales por las que tenemos que hacer nuestros sevicios privaos
// es si en caso de que importemos el MainPageComponent, expondriamos el servicio
// private dbzService: DbzService para que sea publico

// Una manera de resolver esto es creando un Getters
// Creamos un Getter de character que va a regresar un array de tipo Character
// get characters(): Character[]
// return [...this.dbzService.characters];
// Utilizo la sintaxis de spread para generar un copia de this.dbzService.characters

// onDeleteCharacter(id: string): void{
// No regeresa nada, recibe el Id del tipo string y manda a llamar
// this.dbzService.deleteCharacterById(id)
// Esto hace que borre el personaje por el ID

// onNewCharacter(character: Character)
// Va aa recibir un character del tipo Character y manda a llamar a
// this.dbzService.addCharacter(character);
