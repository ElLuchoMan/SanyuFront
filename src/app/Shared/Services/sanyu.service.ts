import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contratista } from '../models/contratista';

@Injectable({
  providedIn: 'root'
})
export class SanyuService {
  baseUrl = environment.urlContratistas;
  constructor(private httpClient: HttpClient) { }
  buscarTurnosContratista(documento: number): Observable<Contratista> {
    return this.httpClient.get<Contratista>(this.baseUrl + `contratistas/turnos/${documento}`);
  }
  buscarContratista(documento: number): Observable<Contratista> {
    return this.httpClient.get<Contratista>(this.baseUrl + `contratistas/${documento}`);
  }

  contratistasSinTurno(): Observable<Contratista> {
    return this.httpClient.get<Contratista>(this.baseUrl + 'contratistas/SinTurno');
  }
}
