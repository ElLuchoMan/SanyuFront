import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SanyuService {
  baseUrl = environment.urlContratistas;
  constructor(private httpClient: HttpClient) { }
}
