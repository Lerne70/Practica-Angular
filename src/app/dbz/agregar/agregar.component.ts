import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Perssonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Perssonaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService:  DbzService) {}

  // @Output() onNuevoPersonaje: EventEmitter<Perssonaje> = new EventEmitter();

  agregar() {
    if(this.nuevo.nombre.trim().length === 0){ return; }
    
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
