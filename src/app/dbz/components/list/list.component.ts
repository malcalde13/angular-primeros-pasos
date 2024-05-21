import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html'
})

export class ListComponent {

  // Aca defino la informcaion que el listado en HTML tiene que utilizar
  // para renderizar

  // Desde mi main.page neceisto enviarle el listado de personajes chacaterList, al list.component.ts
  // Para permitir esa comunicacion, la propiedad que querramos recibir desde afuera va a llevar
  // el decorador @Input
  // Al colocar este decorador sobre una propiedad, estoy indicando que mi ListComponent
  // puede recibir una propiedad llamada characterList
  @Input()
  public characterList: Character[] = [{
    name: "Trunks",
    power: 10
    // Esta propiedad tiene un valor por defecto que es:
    // name: "Trunks",
    // power: 10
  }]


  // PRIMERO ESTO
  // Creamos un objeto del tipo Eventemitter que lo importamos de @angular\core
  // Este EventEmitter va a emitir un <number>
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  // TERCERO ESTO
  // Creamos un nuevo metodo para reaccionar cuando se hace clic en el boton X
  // Vamos a emitir el indice del listado del personaje
  // Entonces recibimos el index (index) que va a ser del tipo number

  onDeleteCharacater(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
  // Indicamos que ID es opcional
  // y que si no existe, entonces nunca lo manda a llamar

}
