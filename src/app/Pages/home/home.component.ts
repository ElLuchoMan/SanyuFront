import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Tarjetas de la vista
  cards = [
    {
      avatar: 'inventory_2', //Ícono de la tarjeta
      title: 'Productos', //Título de la tarjeta
      subtitle: 'Listado de nuestros productos', //Subtítulo de la tarjeta
      img: 'https://i.imgur.com/tmDjT0m.jpg',//Imagen de la tarjeta
      button: 'Productos', //Texto del botón
      urlTo: '/404',//Url a la que se dirigirá la tarjeta
    },
    {
      avatar: 'miscellaneous_services',//Ícono de la tarjeta
      title: 'Servicios',//Título de la tarjeta
      subtitle: 'Listado de nuestros servicios',//Subtítulo de la tarjeta
      img: 'https://i.imgur.com/wfGbIhM.jpg',//Imagen de la tarjeta
      button: 'Servicios',//Texto del botón
      urlTo: '/404',//Url a la que se dirigirá la tarjeta
    },
    {
      avatar: 'contact_mail',//Ícono de la tarjeta
      title: 'Contacto', //Título de la tarjeta
      subtitle: 'Contacta con nosotros',//Subtítulo de la tarjeta
      img: 'https://i.imgur.com/nyWLQLy.jpg',//Imagen de la tarjeta
      button: 'Contacto',//Texto del botón
      urlTo: '/404',//Url a la que se dirigirá la tarjeta
    },
  ];
  constructor() { }
  ngOnInit(): void {
  }

}
