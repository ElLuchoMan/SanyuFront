import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
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
  buscarForm: FormGroup = this.fb.group({
    documento: ['', Validators.required]
  })
  displayedColumns = ['labor', 'fecha', 'inicio', 'final', 'jornada', 'acciones'];
  documento: number;
  Date = new Date();
  datasource: any;
  info: Auth;
  turnoEliminar: Turno | null;
  contratista: Contratista;
  turnos: Turno[] = [];
  // @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private sanyuService: SanyuService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.info = JSON.parse(localStorage.getItem('usuario'));
  }

  buscar() {
    this.documento = this.buscarForm.value.documento;
    this.sanyuService.buscarTurnosContratista(this.documento).subscribe((data) => {
      if (data != null) {
        this.turnos.push(data);
        this.datasource = data;
        this.mostrarContratista();
      }
      // if (data.estadoContratista == 'Inactivo') {
      //   this.toastr.error('Contratista inactivo', '¡ERROR!');
      // } else {
      //   if (data[0] != null) {
      //     this.turnos.push(data);
      //     this.datasource = data;

      //   } else {
      //     if (data.turnos == null) {
      //       this.toastr.error('El contratista no cuenta con turnos', '¡ERROR!');
      //     } else {
      //      if (data.turnos != null){
      //         this.turnos.push(data.turnos);
      //       }
      //     }
      //   }
      // }
    }, error => {
      this.toastr.error('No se puede encontrar el contratista', '¡ERROR!');
    })
    this.sanyuService.documento = this.documento;
  }
  mostrarContratista() {
    this.sanyuService.buscarContratista(this.buscarForm.value.documento).subscribe(data => {
      this.contratista = data;
    })
  }

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
      const dialog = this.dialog.open(DialogComponent, {
        width: '250px',
        data: this.turnos
      });
      dialog.afterClosed().subscribe((result) => {
        if (result) {
          this.sanyuService.actualizarTurno(idTurno, turnoAEliminar).subscribe(resp => {
            this.toastr.success('Turno eliminado con éxito', '¡HECHO!');
            this.buscar();
          }, error => {
            this.toastr.error(error, '¡ERROR!');
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





