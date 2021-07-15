import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  //Validación de nombre y apellido para la creación de un usuario
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  //Validación de documento para la creación de un usuario
  public documentoPattern: string = '([0-9]+)';
  //Validación para formato de correo electrónico
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  constructor() { }
}