import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Auth } from 'src/app/Shared/models/auth';
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
  contratista: Contratista;
  turno: Turno;
  info: Auth;
  id: any = 0;
  documento: number;
  editarTurnoForm: FormGroup = this.fb.group({
    horaFin: ['', Validators.required],
    observacion: ['', Validators.required],

  })
  constructor(private fb: FormBuilder, private sanyuService: SanyuService, private aRoute: ActivatedRoute, private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.info = JSON.parse(localStorage.getItem('usuario'));
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.documento = this.sanyuService.documento;
    this.getTurno();
    this.getJornadas();
    this.mostrarContratista();
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
      this.turno = data;
    })
  }
  guardar() {
    const turno: Turno = {
      estadoTurno: this.turno.estadoTurno,
      fechaFin: null,
      fechaInicio: this.turno.fechaInicio,
      fechaModificacion: new Date(),
      finTurno: null,
      horaFin: this.editarTurnoForm.get('horaFin').value,
      horaInicio: this.turno.horaInicio,
      idTurno: this.turno.idTurno,
      inicioTurno: this.turno.inicioTurno,
      jornada: this.turno.jornada,
      labor: this.turno.labor,
      modificador: this.info.nombre,
      observacion: this.editarTurnoForm.get('observacion').value,

    };
    this.sanyuService.actualizarTurno(this.id, turno).subscribe(data => {
      this.toastr.success('Se ha modificado el turno', '¡HECHO!')
    }, error => {
      this.toastr.success('No se ha podido modificar el turno', '¡ERROR!')
    })
  }
  logout() {
    this.sanyuService.logout();
  }
  mostrarContratista() {
    this.sanyuService.buscarContratista(this.documento).subscribe(data => {
      this.contratista = data;
    })
  }
}
