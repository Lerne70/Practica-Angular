import { Component } from '@angular/core';
import { Perssonaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  nuevo: Perssonaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor() {}

}
