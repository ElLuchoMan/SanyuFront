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
      urlTo: null,
    },
    {
      avatar: 'pending_actions',
      title: 'Gestionar turnos ',
      subtitle: 'Agrega o edita los turnos de los contratistas',
      img: 'https://i.imgur.com/drgizze.jpg',
      button: 'Gestionar Turnos',
      urlTo: 'null',
    },
    {
      avatar: 'how_to_reg',
      title: 'Contactar clientes',
      subtitle: 'Contacta con los clientes activos',
      img: 'https://i.imgur.com/jDTqWlK.jpg',
      button: 'Contactar Clientes',
      urlTo: null,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
