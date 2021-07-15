import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../Core/Auth/Guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', children: [
      //Se implementa lazy load para acceder a los módulos de Administrador, pasando por el Guard si el rol es de Administrador
      { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard], data: { rol: ['Administrador'] } },
      //Se implementa lazy load para acceder a los módulos de Campo, pasando por el Guard si el rol es de Campo
      { path: 'contratista', loadChildren: () => import('./contratista/contratista.module').then(m => m.ContratistaModule), canActivate: [AuthGuard], data: { rol: ['Campo'] } },
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
