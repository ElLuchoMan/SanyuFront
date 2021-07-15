import { Component, OnInit } from '@angular/core';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Tarjetas a mostrar en el home de Administrador
  cards = [
    {
      avatar: 'remove_red_eye', //Ícono de la tarjeta
      title: 'Ver Turnos',//Título de la tarjeta
      subtitle: 'Consulta los turnos de los contratistas y modifícalos',//Subtítulo de la tarjeta
      img: 'https://i.imgur.com/6sbZSNx.jpg',//Imagen de la tarjeta
      button: 'Ver Turnos',//Botón de la tarjeta
      urlTo: '/pages/users/admin/turnos',//URL a la que se dirige la tarjeta
    },
    {
      avatar: 'pending_actions',//Ícono de la tarjeta
      title: 'Gestionar turnos ',//Título de la tarjeta
      subtitle: 'Agrega turnos a los contratistas o haz una carga masiva',//
      img: 'https://i.imgur.com/drgizze.jpg',//Imagen de la tarjeta
      button: 'Gestionar Turnos',//Botón de la tarjeta
      urlTo: '/pages/users/admin//gestionar',//
    },
    {
      avatar: 'how_to_reg',//Ícono de la tarjeta
      title: 'Registrar Contratistas',//Título de la tarjeta
      subtitle: 'Agrega nuevos Contratistas',//Subtítulo de la tarjeta
      img: 'https://i.imgur.com/Fbq84jz.jpg',//Imagen de la tarjeta
      button: 'Registrar Contratistas',//Botón de la tarjeta
      urlTo: '/registro',//URL a la que se dirige la tarjeta
    },
  ];
  constructor(private sanyuService: SanyuService) { }

  ngOnInit(): void {
  }
  logout() {
    this.sanyuService.logout();
  }
}
