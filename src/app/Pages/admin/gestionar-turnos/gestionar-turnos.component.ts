import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Contratista } from 'src/app/Shared/models/contratista';
import { Jornada } from 'src/app/Shared/models/jornada';
import { Turno } from 'src/app/Shared/models/turno';
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
  selectedLabor = 'Campo';
  documento: number = 0;
  //Fecha actual para limitar el DatePicker
  hoy = new Date();
  jornadas: Jornada;
  //Formulario de agregar turno
  agregarTurnoForm: FormGroup = this.fb.group({
    labor: ['',],
    jornada: [''],
    horaInicio: [''],
    horaFin: [''],
    fecha: [''],
    fechaInicio: [''],
    fechaFin: [''],

  })
  //Arreglo de labores a desempeñar
  labores: any[] = [
    { value: 'Campo', nombre: 'Campo' },
    { value: 'Oficina', nombre: 'Oficina' },
  ];
  //Horarios de inicio de jornada
  inicio: any[] = [
    { value: '06:00AM', nombre: '6:00 am' },
    { value: '02:00PM', nombre: '02:00 pm' },
    { value: '10:00PM', nombre: '10:00 pm' },
  ]
  //Horarios de fin de jornada
  fin: any[] = [
    { value: '02:00PM', nombre: '02:00 pm' },
    { value: '10:00PM', nombre: '10:00 pm' },
    { value: '06:00AM', nombre: '6:00 am' },
  ]

  buscar() {
    //Método que permite buscar a un contratista
    this.sanyuService.buscarContratista(this.buscarForm.value.documento).subscribe((data) => {
      //Validar que la información no sea nula
      if (data != null) {
        //Si la información es válida, el contratista está activo y no es Administrador se carga la información 
        if (data.estadoContratista == 'Activo' && data.rol.nombreRol != 'Administrador') {
          this.contratista.push(data);
          this.documento = data.documento;
        } else {
          //Si la información no es válida, o el usuario es administrador, se muestra un mensaje de error
          if (data.estadoContratista == 'Inactivo' || data.rol.nombreRol == 'Administrador') {
            this.toastr.error('El contratista no se encuentra activo o es administrador', '¡ERROR!');
          }
        }
      }
    }, error => {
      this.toastr.error('No existe un contratista con ese documento o no hay acceso a la base de datos', '¡ERROR!');
    }
    )
  }
  //Método que permite saber qué valor del select está seleccionado
  onChange(newValue) {
    this.selectedLabor = newValue;
  }
  //Método para guardar el turno si la labor es Oficina
  guardarOficina() {
    //Variable a enviar al método de guardar turno del servicio
    const turno: Turno = {
      idTurno: null,
      labor: this.agregarTurnoForm.get('labor').value,
      fechaInicio: this.agregarTurnoForm.get('fechaInicio').value,
      fechaFin: this.agregarTurnoForm.get('fechaFin').value,
      //Horario por defecto
      horaInicio: '08:00AM',
      horaFin: '05:00PM',
      //Se asigna la jornada de Oficina
      jornada: { estadoJornada: null, idJornada: 4, nombreJornada: null },
      estadoTurno: 'Activo',
      fechaModificacion: null,
      modificador: null,
      finTurno: null,
      inicioTurno: null,
    };
    this.sanyuService.crearTurno(turno, this.documento).subscribe(data => {
      //Si se realiza la creación, se notifica
      this.toastr.success('El turno de Oficina se ha creado con éxito', '¡HECHO!');
    }, error => {
      //Si no se realliza la creación se informa el error
      this.toastr.error('No se ha podido crear el turno', '¡ERROR!');
    })
  }
  //Método para guardar el turno si la labor es Campo
  guardarCampo() {
    //Variable a enviar al método de guardar turno del servicio
    const turno: Turno = {
      idTurno: null,
      labor: this.agregarTurnoForm.get('labor').value,
      fechaInicio: this.agregarTurnoForm.get('fecha').value,
      fechaFin: this.agregarTurnoForm.get('fecha').value,
      horaInicio: this.agregarTurnoForm.get('horaInicio').value,
      horaFin: this.agregarTurnoForm.get('horaFin').value,
      jornada: { estadoJornada: null, idJornada: this.agregarTurnoForm.get('jornada').value, nombreJornada: null },
      estadoTurno: 'Activo',
      fechaModificacion: null,
      modificador: null,
      finTurno: null,
      inicioTurno: null,
    };
    this.sanyuService.crearTurno(turno, this.documento).subscribe(data => {
      //Si se realiza la creación, se notifica
      this.toastr.success('El turno de Campo se ha creado con éxito', '¡HECHO!');
      //Se limpia el formulario
      this.agregarTurnoForm.reset();
    }, error => {
      //Si no se realliza la creación se informa el error
      this.toastr.error('No se ha podido crear el turno', '¡ERROR!');
    })

  }
  getJornadas() {
    this.sanyuService.getJornada().forEach(data => {
      this.jornadas = data;
    })
  }
  finesSemana = (d: Date): boolean => {
    const day = d.getDay();
    //Evita que se peudan seleccionar fines de semana
    return day !== 0 && day !== 6;
  }
  ngOnInit(): void {
    this.getJornadas();
  }
  logout() {
    this.sanyuService.logout();
  }

  constructor(private fb: FormBuilder, private sanyuService: SanyuService, private toastr: ToastrService) { }

}

