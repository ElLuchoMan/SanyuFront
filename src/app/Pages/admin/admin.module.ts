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





@NgModule({
  declarations: [HomeComponent, VerTurnosComponent, GestionarTurnosComponent, CargaMasivaComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
