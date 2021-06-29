import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contratista } from 'src/app/Shared/models/contratista';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  contratista: Contratista[] = [];
  documento: number = 0;
  editarTurnoForm: FormGroup = this.fb.group({
    nombre: ['',],
    documento: ['',],
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
      labor: this.editarTurnoForm.get('labor').value,
      fecha: this.editarTurnoForm.get('fecha').value,
      jornada: this.editarTurnoForm.get('jornada').value,
      horaInicio: this.editarTurnoForm.get('horaInicio').value,
      horaFin: this.editarTurnoForm.get('horaFin').value
    };

    console.log(turno);
  }

  ngOnInit(): void {
  }


  constructor(private fb: FormBuilder, private sanyuService: SanyuService) { }

}
