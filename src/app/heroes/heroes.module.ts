import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HereoComponent } from './hereo/heroe.component';
import { ListadoComponent } from './listado/listado.component';
/**
 * En este modulo se contiene todo lo relacionado con con
 * heroes.
 * Al tener esta separación no es posible trabajar de manera
 * más organizada
 */
@NgModule({
    declarations: [
        HereoComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        // Nos sirve para utilizar directivas como ngFor o ngIf, entre otras cosas 
        CommonModule
    ]
})
export class HeroesModule {}