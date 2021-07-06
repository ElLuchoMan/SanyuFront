import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Contratista } from 'src/app/Shared/models/contratista';
import { Jornada } from 'src/app/Shared/models/jornada';
import { Turno } from 'src/app/Shared/models/turno';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  contratista: Contratista[] = [];
  turnos: Turno[] = [];
  id: any = 0;
  documento: number;
  editarTurnoForm: FormGroup = this.fb.group({
    horaFin: ['', Validators.required],
    observacion: ['', Validators.required],

  })
  constructor(private fb: FormBuilder, private sanyuService: SanyuService, private aRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.getTurno();
    this.getJornadas();
  }

  labores: any[] = [
    { value: 'Campo', nombre: 'Campo' },
    { value: 'Oficina', nombre: 'Oficina' },
  ];
  jornadas: Jornada;




  getJornadas() {
    this.sanyuService.getJornada().forEach(data => {
      this.jornadas = data;
    })
  }

  getTurno() {
    this.sanyuService.getTurno(this.id).subscribe(data => {
      console.log(data);
      this.turnos.push(data);
    })
  }
  guardar() {
    const turno: Turno = {
      fechaFin: this.turnos[0].fechaInicio,
      fechaInicio: this.turnos[0].fechaInicio,
      fechaModificacion: new Date(),
      finTurno: null,
      horaFin: this.editarTurnoForm.get('horaFin').value,
      horaInicio: this.turnos[0].horaInicio,
      idTurno: this.turnos[0].idTurno,
      inicioTurno: null,
      jornada: this.turnos[0].jornada,
      labor: this.turnos[0].labor,
      modificador: null,
      observacion: this.editarTurnoForm.get('observacion').value,

    };
    console.log(turno);
  }
}
