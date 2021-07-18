import { HttpRequest } from '@angular/common/http';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth';
import { Contratista } from '../models/contratista';
import { Credenciales } from '../models/credenciales';
import { Jornada } from '../models/jornada';
import { Turno } from '../models/turno';

@Injectable({
  providedIn: 'root'
})
export class SanyuService {
  baseUrl = environment.urlSANYU; //Url de la API de SANYU
  documento: number; //Documento que se guarda tras buscar los turnos de un contratista, para poder enviarlo al crear un turno
  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }
  //Método que permite traer TODOS los turnos de un contratista mediantes su documento
  buscarTurnosContratista(documento: number): Observable<Turno> {
    return this.httpClient.get<Turno>(this.baseUrl + `turnos/turno/${documento}`);
  }
  //Método que permite traer la información básica de un contratista
  buscarContratista(documento: number): Observable<Contratista> {
    return this.httpClient.get<Contratista>(this.baseUrl + `contratistas/${documento}`);
  }
  //Método que permite traer todos los contratistas sin turno
  contratistasSinTurno(): Observable<Contratista> {
    return this.httpClient.get<Contratista>(this.baseUrl + 'contratistas/SinTurno');
  }
  //Método que permite traer las jornadas desde la base de datos
  getJornada(): Observable<Jornada> {
    return this.httpClient.get<Jornada>(this.baseUrl + 'jornadas/');
  }
  //Método que permite traer un tunro desde ID
  getTurno(idTurno): Observable<Turno> {
    return this.httpClient.get<Turno>(this.baseUrl + `turnos/${idTurno}`);
  }
  //Método que permite actualizar un turno
  actualizarTurno(idTurno, turno: Turno): Observable<Turno> {
    return this.httpClient.put<Turno>(this.baseUrl + `turnos/actualizar/${idTurno}`, turno);
  }
  //Método que permite traer el turno del día para un contratista mediante su documento
  buscarTurnoDelDia(documento: number): Observable<Turno> {
    return this.httpClient.get<Turno>(this.baseUrl + `turnos/turnoHoy/${documento}`);
  }
  //Método que permite la creación de un turno y se lo asigna directamente al contratista indicado con su documento
  crearTurno(turno: Turno, documento: number): Observable<Turno> {
    return this.httpClient.post<Turno>(this.baseUrl + `/turnos/${documento}`, turno);
  }
  //Método que permite la carga de un archivo plano para la creación de turnos
  cargarTurnos(archivo: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    //Se agrega el archivo a la formData
    formData.append('turnos', archivo);
    //Se crea el HttpRequest con la configuración necesaria para la carga del archivo de tipo MultipartFile
    const post = new HttpRequest('POST', this.baseUrl + 'turnosMasivos', formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.httpClient.request(post);
  }
  //Método para iniciar sesión
  login(credenciales: Credenciales) {
    return this.httpClient.post(this.baseUrl + 'auth', credenciales);
  }
  //Método que permite verificar la autentificación dentro del sistema
  verificaAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('usuario')) {
      return of(false);
    } else {
      if (localStorage.getItem('usuario')) {
        return of(true);
      }
    }
  }
  //Método para cerrar sesión eliminando el local storage
  logout() {
    localStorage.clear();
    this.toastr.success('Vuelva pronto', 'Sesión terminada');
  }
}
