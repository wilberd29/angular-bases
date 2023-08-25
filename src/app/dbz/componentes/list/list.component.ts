import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input('PersonajeList') public PersonajeList: Personaje[]=[
    {
      nombre: 'Trunk',
      poder: 10
    }
  ]
  
    //@Output("onDeletePersonaje") onDeletePersonaje: EventEmitter<number>=new EventEmitter();
    @Output("onDeletePersonaje") onDeletePersonaje: EventEmitter<string>=new EventEmitter();
    
  constructor() { 
    
  }

  ngOnInit() {
  }

  // EliminarPersonaje(index: number): void {
  //    console.log(index);
  //    this.onDeletePersonaje.emit(index);
  //  }
   EliminarPersonaje(id?: string): void {
    console.log(id);
    if (!id) return;
    this.onDeletePersonaje.emit(id);
  }

}
