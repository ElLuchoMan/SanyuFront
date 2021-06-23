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
      img: 'https://i.imgur.com/tmDjT0m.jpg',
      button: 'Ver Turnos',
      // urlTo: '/productos',
    },
    {
      avatar: 'pending_actions',
      title: 'Gestionar turnos ',
      subtitle: 'Agrega o edita los turnos de los contratistas',
      img: 'https://i.imgur.com/wfGbIhM.jpg',
      button: 'Gestionar Turnos',
      // urlTo: '/servicios',
    },
    {
      avatar: 'how_to_reg',
      title: 'Registrar Contratistas',
      subtitle: 'Agrega nuevos Contratistas',
      img: 'https://i.imgur.com/nyWLQLy.jpg',
      button: 'Registrar Contratistas',
      urlTo: '/contacto',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
