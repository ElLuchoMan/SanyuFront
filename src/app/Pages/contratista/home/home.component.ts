import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  turnoHoy: any[] = [{ labor: 'campo', jornada: 'mañana', horaInicio: '6:00', horaFin: '16:00' }];  
  // turnoHoy: any[] = [];

  cards = [
    {
      avatar: 'remove_red_eye',
      title: 'Ver Turnos',
      subtitle: 'Consulta todos tus turnos',
      img: 'https://i.imgur.com/6sbZSNx.jpg',
      button: 'Ver Turnos',
      urlTo: '/turnos',
    },
    {
      avatar: 'pending_actions',
      title: 'Reporte de incidentes',
      subtitle: '¿Tuviste algún inconveniente? Háznoslo saber',
      img: 'https://i.imgur.com/drgizze.jpg',
      button: 'Reportar Incidentes',
      // urlTo: '/servicios',
    },
    {
      avatar: 'how_to_reg',
      title: 'Asistente Virtual',
      subtitle: 'Reportes, Vacacaciones, incapacidades y trámites',
      img: 'https://i.imgur.com/Fbq84jz.jpg',
      button: 'Asistente Virtual',
      urlTo: '/',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  mostrar(){
    console.log()
  }

}
