import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/Shared/Modules/Material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VerTurnosComponent } from './ver-turnos/ver-turnos.component';
import { GestionarTurnosComponent } from './gestionar-turnos/gestionar-turnos.component';




@NgModule({
  declarations: [HomeComponent, VerTurnosComponent, GestionarTurnosComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class AdminModule { }
