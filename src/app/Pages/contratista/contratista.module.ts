import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratistaRoutingModule } from './contratista-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/Shared/Modules/Material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ContratistaRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class ContratistaModule { }
