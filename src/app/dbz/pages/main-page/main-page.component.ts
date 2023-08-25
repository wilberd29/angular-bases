import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personajes';
import { DbzService } from 'src/app/services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private dbzService: DbzService) { }
  
  get PersonajesServ(): Personaje[] {
    return [...this.dbzService.Personajes];
  }

  onDeletePersonajeServ(id: string): void {
    this.dbzService.EliminarPersonajeByID(id);
  }

  onNewPersonajeServ(personaje: Personaje) {
    this.dbzService.AdicionarPersonaje(personaje);
  }
  

  ngOnInit(): void {
  }

}
