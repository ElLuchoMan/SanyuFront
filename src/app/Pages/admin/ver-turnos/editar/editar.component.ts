import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  jornadas: Jornada;
  //Formulario para editar turno
  editarTurnoForm: FormGroup = this.fb.group({
    horaFin: ['', Validators.required],
    observacion: ['', Validators.required],
  })
  constructor(private fb: FormBuilder, private sanyuService: SanyuService, private aRoute: ActivatedRoute, private toastr: ToastrService, private route: Router) {
  }
  ngOnInit(): void {
    this.info = JSON.parse(localStorage.getItem('usuario'));
    //Se toma el ID del turno que trae la ruta
    this.id = this.aRoute.snapshot.paramMap.get('id');
    //Se toma el documento guradado en el servicio
    this.documento = this.sanyuService.documento;
    //Métodos que cargan la información
    this.getTurno();
    this.getJornadas();
    this.mostrarContratista();
  }
  //Arreglo de labores que peude desempeñar el contratista
  labores: any[] = [
    { value: 'Campo', nombre: 'Campo' },
    { value: 'Oficina', nombre: 'Oficina' },
  ];
  //Método que permite cargar la información de las jornadas
  getJornadas() {
    this.sanyuService.getJornada().forEach(data => {
      this.jornadas = data;
    })
  }
  //Método que trae la información de un solo turno
  getTurno() {
    this.sanyuService.getTurno(this.id).subscribe(data => {
      this.turno = data;
    })
  }
  guardar() {
    //Variable turno que se enviará al servicio
    const turno: Turno = {
      estadoTurno: this.turno.estadoTurno,
      fechaFin: null,
      fechaInicio: this.turno.fechaInicio,
      fechaModificacion: new Date(),
      finTurno: null,
      //Nueva hora de finalización del turno
      horaFin: this.editarTurnoForm.get('horaFin').value,
      horaInicio: this.turno.horaInicio,
      idTurno: this.turno.idTurno,
      inicioTurno: this.turno.inicioTurno,
      jornada: this.turno.jornada,
      labor: this.turno.labor,
      //Nombre del administrador que modifica el turno
      modificador: this.info.nombre,
      //Razón por la que se modifica el turno
      observacion: this.editarTurnoForm.get('observacion').value,
    };
    //Método que permite actualizar el turno
    this.sanyuService.actualizarTurno(this.id, turno).subscribe(data => {
      //Si se realiza la acutalización de un turno, se muestra un mensaje de aceptación y se redirige a la vista de turnos
      this.toastr.success('Se ha modificado el turno', '¡HECHO!')
      this.route.navigate(['/pages/users/admin/turnos']);
    }, error => {
      //Si no se puede actualizar, se muestra un mensaje de error
      this.toastr.success('No se ha podido modificar el turno', '¡ERROR!')
    })
  }

  mostrarContratista() {
    //Método que carga la información del contratista
    this.sanyuService.buscarContratista(this.documento).subscribe(data => {
      this.contratista = data;
    })
  }
  logout() {
    this.sanyuService.logout();
  }
}
