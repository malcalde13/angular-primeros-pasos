import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './character.component.html'
})

export class CharacterComponent {

  // Creamos un objeto del tipo Eventemitter que lo importamos de @angular\core
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // Lo inicializamos a la hora de definir la propiedad
  // Estos van a ser los valores por defecto
  public character: Character = {
    name: '',
    power: 0
  }

  // Creo un nuevo metodo
  // Como no regresa nada le colocamos el :void
  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }

}


// EventEmitter en flexible y puede emitir lo que nosostros querramos
// En este caso le vamos a decir que queremos emitir un Character
// y con new Eventemitter() creamos la instacia de este emisor de eventos
// Para poder utilizar este objeto en mi main page debo colocar el @Output()
// Con esto ya puedo emitir el onNewCharacter


// emitCharacter(): void {
// console.log(this.character);
// En este punto realizamos una validacion
// if ( this.character.name.length === 0 ) retur;
// Esto es para que no se envien personajes que no contengan nombre

// Si tiene un nombre vamos a llamar a
// this.onNewCharacter.emit(this.character);

//Aca podemos dejar solo una linea de codigo
// this.character.name = '';
// this.character.power = 0;

// De la siguinte forma tenemos una asignacion y una sola lectura a ese objeto
// this.character = {name'', power: 0 };
