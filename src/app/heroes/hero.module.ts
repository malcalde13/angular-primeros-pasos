import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// Las dependecias principales de angular deben estar arrriba
// Luego del ade 3eros
// Y por ultimo nuestro codigo


import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],

  exports: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    CommonModule
  ]

})
export class heroModule { }
