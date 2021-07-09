import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogComponent } from 'src/app/Shared/Components/dialog/dialog.component';
import { Auth } from 'src/app/Shared/models/auth';
import { Turno } from 'src/app/Shared/models/turno';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  turnoHoy: Turno;
  fechaHoy = new Date();
  cards = [
    {
      avatar: 'remove_red_eye',
      title: 'Ver Turnos',
      subtitle: 'Consulta todos tus turnos',
      img: 'https://i.imgur.com/6sbZSNx.jpg',
      button: 'Ver Turnos',
      urlTo: '/pages/users/contratista/turnos',
    },
    {
      avatar: 'pending_actions',
      title: 'Reporte de incidentes',
      subtitle: '¿Tuviste algún inconveniente? Háznoslo saber',
      img: 'https://i.imgur.com/drgizze.jpg',
      button: 'Reportar Incidentes',
      urlTo: '/404',
    },
    {
      avatar: 'how_to_reg',
      title: 'Asistente Virtual',
      subtitle: 'Reportes, Vacacaciones, incapacidades y trámites',
      img: 'https://i.imgur.com/Fbq84jz.jpg',
      button: 'Asistente Virtual',
      urlTo: '/404',
    },
  ];
  info: Auth;
  documento: number;
  constructor(public dialog: MatDialog, private sanyuService: SanyuService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.info = JSON.parse(localStorage.getItem('usuario'));
    this.documento = this.info.documento;
    this.mostrar();
  }
  mostrar() {

    this.sanyuService.buscarTurnoDelDia(this.documento).subscribe(data => {
      console.log(data);
      this.turnoHoy = data;
    })
  }
  iniciarTurno(idTurno) {
    this.sanyuService.getTurno(idTurno).subscribe(turnoIniciar => {

      const iniciarTurno: any = {
        estadoTurno: turnoIniciar?.estadoTurno,
        idTurno: turnoIniciar!.idTurno,
        fechaFin: turnoIniciar?.fechaInicio,
        fechaInicio: turnoIniciar?.fechaInicio,
        fechaModificacion: null,
        finTurno: null,
        horaFin: turnoIniciar?.horaFin,
        horaInicio: turnoIniciar?.horaInicio,
        inicioTurno: new Date().getHours() + ':' + new Date().getMinutes(),
        jornada: turnoIniciar?.jornada,
        labor: turnoIniciar?.labor,
        modificador: null,
        observacion: null,
      }
      const dialog = this.dialog.open(DialogComponent, {
        width: '250px',
        data: this.turnoHoy
      });
      dialog.afterClosed().subscribe((result) => {
        if (result) {
          console.log(new Date().getHours() + ':' + new Date().getMinutes());
          this.sanyuService.actualizarTurno(idTurno, iniciarTurno).subscribe(resp => {
            this.toastr.success('Turno iniciado', '¡HECHO!');
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