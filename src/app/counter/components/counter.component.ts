import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetCounter()">Reset</button>
  `
})
//Con los back ticks nos poermite hacer un string multilinea


//@component es un decorador que transforma mi clase en un componente
//Si creo un commponente necesito un templante
//Creamos el template como un string
//Selector es como yo quiero usar este counter en el html
//Cuando creamos un componente en Angular debemos definirlo en algun lugar
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;

  }
}

//Este componente necesita ser parte de un modulo
//Debemos declararlo en app.modules.ts para que se pueda utilizar en este modulo

//FORMA MAS RAPIDA PARA CREAR EL DECORADOR
//Una forma mas rapida de crear este decorardor es, utilizando el snippets de Angular (Angular Snippets)
//a- y aca elegimos el snippet que necesitarmos, en este caso, a-component
