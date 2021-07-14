import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Router, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  info = JSON.parse(localStorage.getItem('usuario'));
  rol = this.info.rol.nombreRol;
  constructor(private authService: SanyuService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.verificaAutenticacion()
      .pipe(
        tap(estaAutenticado => {
          if (!estaAutenticado && this.rol == null) {
            this.router.navigate(['./auth/login']);
          }
        })
      );


  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {
    return this.authService.verificaAutenticacion()
      .pipe(
        tap(estaAutenticado => {
          if (!estaAutenticado && this.rol == null) {
            this.router.navigate(['./auth/login']);
          }
        })
      );
  }
}
