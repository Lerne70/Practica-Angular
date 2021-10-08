import { Component, Input } from '@angular/core';
import { Perssonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() personajes: Perssonaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {}
}
