import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratistaRoutingModule } from './contratista-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/Shared/Modules/Material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VerTurnosComponent } from './ver-turnos/ver-turnos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  //Listado de componentes del módulo de Contratista
  declarations: [
    HomeComponent,
    VerTurnosComponent],
  //Importaciones necesarias
  imports: [
    CommonModule,
    ContratistaRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class ContratistaModule { }
