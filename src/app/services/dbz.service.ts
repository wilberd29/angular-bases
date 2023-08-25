import { Injectable } from '@angular/core';
import { Personaje } from '../dbz/interfaces/personajes';
import {v4 as uuid} from 'uuid';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public Personajes: Personaje[]=[
    {
      id: uuid(),
      nombre: 'Krillin',
      poder: 1000
    },
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 9500
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      poder: 7500
    },
  ];


  constructor() {
    console.log(this.Personajes);
   }

  AdicionarPersonaje(personaje: Personaje): void {
    //debugger;
    // const newPersonaje: Personaje = {
    //   id: uuid(),
    //   nombre: personaje.nombre,
    //   poder: personaje.poder
    // }
    //otra forma
    const newPersonaje: Personaje={ id:uuid(), ...personaje};
    //this.Personajes.push(personaje);
    this.Personajes.push(newPersonaje);
    console.log(newPersonaje);
  }

  // EliminarPersonaje(index: number): void {
  //   this.Personajes.splice(index, 1);
  // }
  EliminarPersonajeByID(id: string) {
      this.Personajes =this.Personajes.filter(personaje => personaje.id !==id);
     }
}
