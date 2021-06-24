import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      avatar: 'remove_red_eye',
      title: 'Ver Turnos',
      subtitle: 'Consulta los turnos y contratistas',
      img: 'https://i.imgur.com/6sbZSNx.jpg',
      button: 'Ver Turnos',
      urlTo: '/pages/users/admin/turnos',
    },
    {
      avatar: 'pending_actions',
      title: 'Gestionar turnos ',
      subtitle: 'Agrega o edita los turnos de los contratistas',
      img: 'https://i.imgur.com/drgizze.jpg',
      button: 'Gestionar Turnos',
      // urlTo: '/servicios',
    },
    {
      avatar: 'how_to_reg',
      title: 'Registrar Contratistas',
      subtitle: 'Agrega nuevos Contratistas',
      img: 'https://i.imgur.com/Fbq84jz.jpg',
      button: 'Registrar Contratistas',
      urlTo: '/registro',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
