import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public NombreHeroes: string[]=['Spiderman', 'Ironman', 'Hulk', 'Batman', 'Thor'];
  public eliminadoHeroe?:string;
  constructor() { }

  ngOnInit(): void {
  }

  EliminarUlimoHeroe(): void {
    //const deleteHeroe= this.NombreHeroes.pop();
     //console.log({deleteHeroe})
     this.eliminadoHeroe= this.NombreHeroes.pop();
  }

}
