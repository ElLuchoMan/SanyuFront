import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/Shared/Modules/Material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VerTurnosComponent } from './ver-turnos/ver-turnos.component';
import { GestionarTurnosComponent } from './gestionar-turnos/gestionar-turnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CargaMasivaComponent } from './gestionar-turnos/carga-masiva/carga-masiva.component';
import { EditarComponent } from './ver-turnos/editar/editar.component';
import { SinTurnoComponent } from './ver-turnos/sin-turno/sin-turno.component';





@NgModule({
  //Componentes necesarios para el módulo de Administrador
  declarations: [
    HomeComponent,
    VerTurnosComponent,
    GestionarTurnosComponent,
    CargaMasivaComponent,
    EditarComponent,
    SinTurnoComponent,
  ],
  //Módulos necesarios para el módulo de Administrador
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
