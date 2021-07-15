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
  //Tarjetas de contratista
  cards = [
    {
      avatar: 'remove_red_eye', //Ícono de la tarjeta
      title: 'Ver Turnos',//Título de la tarjeta
      subtitle: 'Consulta todos tus turnos',//Subtítulo de la tarjeta
      img: 'https://i.imgur.com/6sbZSNx.jpg',//url de la imagen
      button: 'Ver Turnos',//Texto del botón
      urlTo: '/pages/users/contratista/turnos',//url de la tarjeta
    },
    {
      avatar: 'pending_actions',//Ícono de la tarjeta
      title: 'Reporte de incidentes',//Título de la tarjeta
      subtitle: '¿Tuviste algún inconveniente? Háznoslo saber',//Subtítulo de la tarjeta
      img: 'https://i.imgur.com/drgizze.jpg',//url de la imagen
      button: 'Reportar Incidentes',//Texto del botón
      urlTo: '/404',//url de la tarjeta
    },
    {
      avatar: 'how_to_reg',//Ícono de la tarjeta
      title: 'Asistente Virtual',//Título de la tarjeta
      subtitle: 'Reportes, Vacacaciones, incapacidades y trámites',//Subtítulo de la tarjeta
      img: 'https://i.imgur.com/Fbq84jz.jpg', //url de la imagen
      button: 'Asistente Virtual', //Texto del botón
      urlTo: '/404',//url de la tarjeta
    },
  ];
  info: Auth;
  documento: number;
  constructor(public dialog: MatDialog, private sanyuService: SanyuService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.info = JSON.parse(localStorage.getItem('usuario'));
    this.documento = this.info.documento;
    this.mostrarTurnoDia();
  }
  //Método que trae la información del turno del día
  mostrarTurnoDia() {
    this.sanyuService.buscarTurnoDelDia(this.documento).subscribe(data => {
      console.log(data);
      this.turnoHoy = data;
    })
  }
  //Método que permite actualizar el turno para agregar la hora de inicio
  iniciarTurno(idTurno) {
    this.sanyuService.getTurno(idTurno).subscribe(turnoIniciar => {
      //Turno que se enviará al método en el servicio
      const iniciarTurno: any = {
        estadoTurno: turnoIniciar?.estadoTurno,
        idTurno: turnoIniciar!.idTurno,
        fechaFin: turnoIniciar?.fechaInicio,
        fechaInicio: turnoIniciar?.fechaInicio,
        fechaModificacion: null,
        finTurno: null,
        horaFin: turnoIniciar?.horaFin,
        horaInicio: turnoIniciar?.horaInicio,
        //Se toman las horas, minutos y segundos del momento en que se inicia el turno
        inicioTurno: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
        jornada: turnoIniciar?.jornada,
        labor: turnoIniciar?.labor,
        modificador: null,
        observacion: null,
      }
      //Díalogo de confirmación
      const dialog = this.dialog.open(DialogComponent, {
        width: '200px',
        data: this.turnoHoy
      });
      dialog.afterClosed().subscribe((result) => {
        //Si el usuario presiona Aceptar se actualiza el turno
        if (result) {
          console.log(new Date().getHours() + ':' + new Date().getMinutes());
          this.sanyuService.actualizarTurno(idTurno, iniciarTurno).subscribe(resp => {
            //Mensaje de confirmación
            this.toastr.success('Turno iniciado', '¡HECHO!');
            window.location.reload();
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