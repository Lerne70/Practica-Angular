import { Injectable } from "@angular/core";
import { Perssonaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Perssonaje[] = [
        {
          nombre: 'Goku',
          poder: 150000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    get personajes():Perssonaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje( personaje: Perssonaje) {
        this._personajes.push(personaje);
    }
}