import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestionar-turnos',
  templateUrl: './gestionar-turnos.component.html',
  styleUrls: ['./gestionar-turnos.component.css']
})
export class GestionarTurnosComponent implements OnInit {

  buscarForm: FormGroup = this.fb.group({
    documento: ['',]
  })
  agregarTurnoForm: FormGroup = this.fb.group({
    labor: ['',],
    fecha: ['',],
    jornada: ['',],
    horaInicio: ['',],
    horaFin: ['',],

  })
  labores: any[] = [
    { value: 'Campo', nombre: 'Campo' },
    { value: 'Oficina', nombre: 'Oficina' },
  ];
  jornadas: any[] = [
    { value: '1', nombre: 'Mañana' },
    { value: '2', nombre: 'Tarde' },
    { value: '3', nombre: 'Oficina' }
  ];

  guardar() {
    const turno: any = {
      labor: this.agregarTurnoForm.get('labor').value,
      fecha: this.agregarTurnoForm.get('fecha').value,
      jornada: this.agregarTurnoForm.get('jornada').value,
      horaInicio: this.agregarTurnoForm.get('horaInicio').value,
      horaFin: this.agregarTurnoForm.get('horaFin').value
    }
    console.log(turno);
  }

  ngOnInit(): void {
  }
  consultar() {

  }

  constructor(private fb: FormBuilder) { }

}