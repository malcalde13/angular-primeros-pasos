import { Component } from '@angular/core';

//Este decorador transforma mi clase para que se un componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app de Agular';
  //De esta forma el codigo es mas legigle, public title: string
  // public counter: number = 10;

  //Creamos un nuevo metodo
  //Colocamos void porque el metodo no regresa nada
  // increaseBy(value: number): void {
  // this.counter = this.counter+1;
  //Tomamos el valor del counter y le sumamos uno
  //increaseBy va recibir un value del tipo numberr
  //   this.counter += value;
  //incrementamos el value
  // }
  // decreaseBy(): void {
  //   this.counter -= 1;
  // }

  // resetCounter(): void {
  //   this.counter = 10;
  // }
}
