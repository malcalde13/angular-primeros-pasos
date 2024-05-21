import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

// Injetable es el decorador
// Este decorador en particular le va a decir a Angular que lo trate como un servicio y no como una clase
// Si no utilizaramos el providedIn: 'root' tendriamos que definir el servicio en los providers dentro de app.module.ts
// Cuando utilizamos providedIn: 'root' nuestro servicios va a ser un Singleton en todoa la aplicacion
// No importa cuantas veces utilice el servicio dentro de la aplicacion, siempre y cuando
// lo haga mediante ineccion de dependencias voy a obtener el valor exactamente como se encuentra en es momento\

//en JS los objetos pasan por referencia

@Injectable({ providedIn: 'root' })
export class DbzService {

  // Array de heroes
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 8000
  }];

  // Creamos un nuevo metodo
  // Este es el nombre que voy a utilizar en el evento onNewCharacter dentro de mi main-page-component.html
  // Este metodo va a recibir un parametro character de tipo Character
  addCharacter(character: Character): void {

    // Agrego un nuevo elemento
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    // En caso de que el caracter tenga muchas prpopiedades
    // Podemos realizar lo siguiente
    const newCharacter: Character = { id: uuid(), ...character };
    // Con esto estoy indicando, tomoa todas las propiedades del character y esparcelas
    // en este nuevo objeto que estoy creando { id: uuid(), ...character }

    // Mando a crear el nuevo newCharacter
    this.characters.push(newCharacter);
  }

  // console.log('MainPage');
  // console.log(character)
  //Cuando agrego el push estoy indicando que agregue el personaje al final de la lista
  // this.characters.push(character);

  // SEGUNDO ESTO
  // Implemento el nuevo metodo onDeleteCharacter
  // Recibimos la posicion Index del tipo number
  // utilizo el splice para eliminar el personaje y el 1
  // para que solo elimine el personaje que clickeo

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

  // El filter va a regresar un nuevo arreglo con la condicion que tenemos aca
  // (character => character.id !== id);



  // deleteCharacterById(index: number) {
  //   this.characters.splice(index, 1)
  // }


}



