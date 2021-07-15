import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VerTurnosComponent } from './ver-turnos/ver-turnos.component';

const routes: Routes = [
  {
    //Se definen las rutas a las que puede acceder el Contratista
    path: '', children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'turnos', component: VerTurnosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratistaRoutingModule { }
