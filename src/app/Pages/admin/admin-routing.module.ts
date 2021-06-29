import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaMasivaComponent } from './gestionar-turnos/carga-masiva/carga-masiva.component';
import { GestionarTurnosComponent } from './gestionar-turnos/gestionar-turnos.component';
import { HomeComponent } from './home/home.component';
import { EditarComponent } from './ver-turnos/editar/editar.component';
import { VerTurnosComponent } from './ver-turnos/ver-turnos.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'turnos', component: VerTurnosComponent },
      { path: 'gestionar', component: GestionarTurnosComponent },
      { path: 'masivos', component: CargaMasivaComponent },
      { path: 'modificar/:idTurno', component: EditarComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
