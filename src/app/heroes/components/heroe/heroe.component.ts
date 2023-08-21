import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public nombre: string='Ironman';
public edad: number=45;

get capitalizableNombre(): string {
  return this.nombre.toUpperCase();
}

//metodo
getHeroeDescripcion(): string {
  return `${this.nombre} - ${this.edad}`;  
}

CambiarHeroe() :void {
  this.nombre='Spiderman';
}

CambiarEdad() :void {
  this.edad=25;
}

resetForm(): void {
  this.nombre='Wilber'
  this.edad=48

  document.querySelectorAll('h1').forEach(element => {
    element.innerHTML = '<h1>Desde Angular</h1>'
  });
}
}
