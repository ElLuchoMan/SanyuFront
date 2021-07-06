import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contratista } from '../models/contratista';
import { Jornada } from '../models/jornada';
import { Turno } from '../models/turno';

@Injectable({
  providedIn: 'root'
})
export class SanyuService {
  baseUrl = environment.urlContratistas;
  constructor(private httpClient: HttpClient) { }
  buscarTurnosContratista(documento: number): Observable<Turno> {
    return this.httpClient.get<Turno>(this.baseUrl + `turnos/turno/${documento}`);
  }
  buscarContratista(documento: number): Observable<Contratista> {
    return this.httpClient.get<Contratista>(this.baseUrl + `contratistas/${documento}`);
  }

  contratistasSinTurno(): Observable<Contratista> {
    return this.httpClient.get<Contratista>(this.baseUrl + 'contratistas/SinTurno');
  }

  getJornada(): Observable<Jornada> {
    return this.httpClient.get<Jornada>(this.baseUrl + 'jornadas/');
  }
  getTurno(idTurno): Observable<Turno> {
    return this.httpClient.get<Turno>(this.baseUrl + `turnos/${idTurno}`);
  }
  actualizarTurno(idTurno, turno: Turno) {
    return this.httpClient.put<Turno>(this.baseUrl + `turnos/actualizar/${idTurno}`, turno);
  }

}
