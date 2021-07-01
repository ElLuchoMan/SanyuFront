import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Contratista } from 'src/app/Shared/models/contratista';
import { Jornada } from 'src/app/Shared/models/jornada';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

@Component({
  selector: 'app-gestionar-turnos',
  templateUrl: './gestionar-turnos.component.html',
  styleUrls: ['./gestionar-turnos.component.css']
})
export class GestionarTurnosComponent implements OnInit {
  contratista: Contratista[] = [];
  buscarForm: FormGroup = this.fb.group({
    documento: ['',]
  })
  documento: number = 0;
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
  jornadas: Jornada;
  inicio: any[] = [
    { value: '06:00 am', nombre: '6:00 am' },
    { value: '02:00 pm', nombre: '02:00 pm' },
    { value: '10:00 pm', nombre: '10:00 pm' },
  ]
  fin: any[] = [
    { value: '02:00 pm', nombre: '02:00 pm' },
    { value: '10:00 pm', nombre: '10:00 pm' },
    { value: '06:00 am', nombre: '6:00 am' },
  ]

  buscar() {
    this.sanyuService.buscarContratista(this.buscarForm.value.documento).subscribe((data) => {
      console.log(data);
      if (data != null) {
        if (data.estadoContratista == 'Activo') {
          this.contratista.push(data);
          this.documento = data.documento;
          console.log(data.documento);
        } else {
          if (data.estadoContratista == 'Inactivo') {
            this.toastr.error('El contratista no se encuentra activo', '¡ERROR!');
          }
        }
      }
    }, error => {
      this.toastr.error('No existe un contratista con ese documento o no hay acceso a la base de datos', '¡ERROR!');
    }
    )
  }

  guardar() {
    const turno: any = {
      labor: this.agregarTurnoForm.get('labor').value,
      fecha: this.agregarTurnoForm.get('fecha').value,
      jornada: this.agregarTurnoForm.get('jornada').value,
      horaInicio: this.agregarTurnoForm.get('horaInicio').value,
      horaFin: this.agregarTurnoForm.get('horaFin').value
    };

    console.log(turno);
  }
  jornada() {
    this.sanyuService.getJornada().forEach(element => {
      this.jornadas = element;
    })
  }
  ngOnInit(): void {
    this.jornada();
  }


  constructor(private fb: FormBuilder, private sanyuService: SanyuService, private toastr: ToastrService) { }

}