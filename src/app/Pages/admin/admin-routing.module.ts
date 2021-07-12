import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/Core/Auth/Guards/auth.guard';
import { CargaMasivaComponent } from './gestionar-turnos/carga-masiva/carga-masiva.component';
import { GestionarTurnosComponent } from './gestionar-turnos/gestionar-turnos.component';
import { HomeComponent } from './home/home.component';
import { EditarComponent } from './ver-turnos/editar/editar.component';
import { SinTurnoComponent } from './ver-turnos/sin-turno/sin-turno.component';
import { VerTurnosComponent } from './ver-turnos/ver-turnos.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { rol: 'Administrador' } },
      { path: 'turnos', component: VerTurnosComponent, canActivate: [AuthGuard], data: { rol: 'Administrador' } },
      { path: 'gestionar', component: GestionarTurnosComponent, canActivate: [AuthGuard], data: { rol: 'Administrador' } },
      { path: 'sin-turno', component: SinTurnoComponent, canActivate: [AuthGuard], data: { rol: 'Administrador' } },
      { path: 'masivos', component: CargaMasivaComponent, canActivate: [AuthGuard], data: { rol: 'Administrador' } },
      { path: 'modificar/:id', component: EditarComponent, canActivate: [AuthGuard], data: { rol: 'Administrador' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
