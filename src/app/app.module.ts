import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/**
 * Es posible crear modulos de la aplicación web
 * de esta forma conseguimos tener una aplicacion
 * más organizada y en el modulo principal no tendremos tanto
 * codigo que nos pueda llegar a estorbar
 */
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
