import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
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
  //Columnas a mostrar en la tabla
  displayedColumns = ['fechaInicio', 'fechaFin', 'horaInicio', 'horaFin', 'jornada', 'labor'];
  //Información del usuario autenticado
  info: Auth;
  documento: number;
  //Arreglo de turnos
  turnos: Turno[] = [];
  datasource: any = this.turnos;
  sinTurno: boolean = false;

  // @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private sanyuService: SanyuService, private toastr: ToastrService) { }

  ngOnInit(): void {
    //Se asigna la información del local storage a una variable info
    this.info = JSON.parse(localStorage.getItem('usuario'));
    //Se toma el documento del contratista desde la variable info
    this.documento = this.info.documento;
    //Se llama a la función que obtiene los turnos del contratista
    this.infoContratista();
  }
  logout() {
    this.sanyuService.logout();
  }
  //Función que obtiene los turnos del contratista
  infoContratista() {
    this.sanyuService.buscarTurnosContratista(this.documento).subscribe((data) => {
      //Si existen los datos, se asignan a la variable turnos y al datasource
      console.log(data);
      if (data != null) {
        this.turnos.push(data);
        this.datasource = data;
      }
      if (data[0] == null) {
        this.toastr.error('No tienes turnos registrados', 'ERROR');
        this.sinTurno = true;
      }
    })
  }
}
