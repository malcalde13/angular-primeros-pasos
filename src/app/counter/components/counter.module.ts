import { NgModule } from "@angular/core";
import { CounterComponent } from './counter.component';

// UN MODULO ES UNA SIMPLE CLASE QUE TIENE UN DECORADOR, Y EL MODULO COMO CUALQUIER OTRO
// EN UN AGRUPADOR, ENCAPSULA UNA FUNCIONALIDAD
// Este modulo pretende agrupar toda la funcionalidad que tiene el counter (component\counter)
// El modulo va a ser visible dentro del modulo (components\counter)
// El objetivo del modulo es que este encapsulado, protegido el mundo exterior

@NgModule({
  declarations: [
    CounterComponent
  ],
  // Si quiero que el modulo sea visible para el exterior, tengo que exportarlo
  exports: [
    CounterComponent
  ]
})
export class counterModule {

}
