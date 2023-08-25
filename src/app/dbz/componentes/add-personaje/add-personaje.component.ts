import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent implements OnInit {

@Output("onNewPersonaje") onNewPersonaje: EventEmitter<Personaje>=new EventEmitter();

public Personaje: Personaje={
  nombre: '',
  poder: 0
};

  constructor() { }

  ngOnInit(): void {
  }

  addPersonaje(): void {
    console.log(this.Personaje);
    if (this.Personaje.nombre.length ===0) return;

    this.onNewPersonaje.emit(this.Personaje);
    this.Personaje= {nombre: '', poder:0};
    // this.Personaje.nombre='';
    // this.Personaje.poder=0;
  }

}
