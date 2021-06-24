import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionar-turnos',
  templateUrl: './gestionar-turnos.component.html',
  styleUrls: ['./gestionar-turnos.component.css']
})
export class GestionarTurnosComponent implements OnInit {

  labores: any[] = [
    { value: 'Campo', nombre: 'Campo' },
    { value: 'Oficina', nombre: 'Oficina' },
  ];
  jornadas: any[] = [
    { value: '1', nombre: 'Mañana' },
    { value: '2', nombre: 'Tarde' },
    { value: '3', nombre: 'Oficina' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
