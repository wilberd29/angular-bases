import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './componentes/list/list.component';
import { AddPersonajeComponent } from './componentes/add-personaje/add-personaje.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
