import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-herores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  // Creamos una propiedad que va a tener como tipo de dato un array de string[]
  // y lo incializamos
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public deletedHero?: string;

  // Creamos un metodo
  removeLastHero(): void {
    //El metodo pop remueve el ultimo elemento de la lista y lo regresa
    //Pop va a regresar un string o undefined

    // this.heroNames.pop();

    // Entonces creamos una constante

    // const deletedHero = this.heroNames.pop();

    //const deletedHero es una variabble que solo va a existir en este ambito
    // removeLastHero(): void {
    // const deletedHero = this.heroNames.pop();
    //}

    // Si quiero que este en toda mi clase tengo que crearlo como una propiedad
    // de claese publica

    // Una vez creada la clase publica deletedHero hacemos lo siguiente
    this.deletedHero = this.heroNames.pop();
    //Aca indicamos que this.deletedHero va a ser igual a lo que regrese el metodo pop

  }

}
