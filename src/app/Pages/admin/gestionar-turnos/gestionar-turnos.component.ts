import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionar-turnos',
  templateUrl: './gestionar-turnos.component.html',
  styleUrls: ['./gestionar-turnos.component.css']
})
export class GestionarTurnosComponent implements OnInit {

  labores: any[] = [
    { value: 'steak-0', nombre: 'Campo' },
    { value: 'pizza-1', nombre: 'Oficina' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
