import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { DialogComponent } from 'src/app/Shared/Components/dialog/dialog.component';
import { Auth } from 'src/app/Shared/models/auth';
import { Contratista } from 'src/app/Shared/models/contratista';
import { Turno } from 'src/app/Shared/models/turno';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';
@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent implements OnInit {
  //Formulario de búqueda
  buscarForm: FormGroup = this.fb.group({
    documento: ['', Validators.required]
  })
  displayedColumns = ['fechaInicio', 'fechaFin', 'horaInicio', 'horaFin', 'jornada', 'labor', 'acciones'];
  documento: number;
  //Fecha del día
  Date = new Date();
  datasource: any;
  info: Auth;
  turnoEliminar: Turno | null;
  contratista: Contratista;
  turnos: Turno[] = [];

  constructor(public dialog: MatDialog, private sanyuService: SanyuService, private fb: FormBuilder, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.info = JSON.parse(localStorage.getItem('usuario'));
  }
  //Método que permite traer la información del contratista si no es administrador
  mostrarContratista() {
    this.sanyuService.buscarContratista(this.buscarForm.value.documento).subscribe(data => {
      if (data.rol.nombreRol != 'Administrador') {
        this.contratista = data;
      }
    })
  }
  //Método que permite buscar los turnos del contratista
  buscar() {
    this.documento = this.buscarForm.value.documento;
    this.sanyuService.buscarTurnosContratista(this.documento).subscribe((data) => {
      //Si la respuesta trae datos, los agrega al arreglo que mostrará la tabla además, cargará la información del contratista
      if (data[0] != null) {
        this.turnos.push(data);
        this.datasource = data;
        this.mostrarContratista();
        //Sino, se moestrará un mensaje de error
      } else {
        if (data[0] == null) { }
        this.toastr.error('No se encuentran turnos para el contratista', '¡ERROR!');
      }
    }, error => {
    })
    //Se toma el documento del contratista y se envía al servicio para que se traiga la información del contratista en la vista de edición
    this.sanyuService.documento = this.documento;
  }
  //Método que permite hacer borrado lógico del turno de un conratista
  borrarTurno(idTurno) {
    this.sanyuService.getTurno(idTurno).subscribe(turnoEliminar => {
      const turnoAEliminar: any = {
        estadoTurno: "Inactivo",
        idTurno: turnoEliminar!.idTurno,
        fechaFin: turnoEliminar?.fechaFin,
        fechaInicio: turnoEliminar?.fechaInicio,
        fechaModificacion: new Date(),
        finTurno: turnoEliminar?.finTurno,
        horaFin: turnoEliminar?.horaFin,
        horaInicio: turnoEliminar?.horaInicio,
        inicioTurno: turnoEliminar?.inicioTurno,
        jornada: turnoEliminar?.jornada,
        labor: turnoEliminar?.labor,
        modificador: this.info.nombre,
        observacion: "Eliminado",
      }
      //Diálogo de confirmación
      const dialog = this.dialog.open(DialogComponent, {
        width: '200px',
        data: this.turnos
      });
      dialog.afterClosed().subscribe((result) => {
        //Si el usuario presiona Aceptar, se elimina el turno
        if (result) {
          this.sanyuService.actualizarTurno(idTurno, turnoAEliminar).subscribe(resp => {
            //Mensaje de confirmación de borrado
            this.toastr.success('Turno eliminado con éxito', '¡HECHO!');
            //Se vuelven a trar los turnos
            this.buscar();
          }, error => {
            //Si la respuesta trae error, se muestra un mensaje de error
            this.toastr.error(error + '', '¡ERROR!');
          }
          )
        }
      })
    })
  }
  logout() {
    this.sanyuService.logout();
  }
}





