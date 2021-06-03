import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      avatar: 'inventory_2',
      title: 'Productos',
      subtitle: 'Listado de nuestros productos',
      img: 'https://i.imgur.com/tmDjT0m.jpg',
      button: 'Ir',
      urlTo: '/productos',
    },
    {
      avatar: 'miscellaneous_services',
      title: 'Servicios',
      subtitle: 'Listado de nuestros servicios',
      img: 'https://i.imgur.com/wfGbIhM.jpg',
      button: 'Ir',
      urlTo: '/servicios',
    },
    {
      avatar: 'contact_mail',
      title: 'Contacto',
      subtitle: 'Contacta con nosotros',
      img: 'https://i.imgur.com/nyWLQLy.jpg',
      button: 'Ir',
      urlTo: '/contacto',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
