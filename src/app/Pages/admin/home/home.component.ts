import { Component, OnInit } from '@angular/core';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

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
      subtitle: 'Consulta los turnos de los contratistas y modifícalos',
      img: 'https://i.imgur.com/6sbZSNx.jpg',
      button: 'Ver Turnos',
      urlTo: '/pages/users/admin/turnos',
    },
    {
      avatar: 'pending_actions',
      title: 'Gestionar turnos ',
      subtitle: 'Agrega turnos a los contratistas o haz una carga masiva',
      img: 'https://i.imgur.com/drgizze.jpg',
      button: 'Gestionar Turnos',
      urlTo: '/pages/users/admin//gestionar',
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
  constructor(private sanyuService: SanyuService) { }

  ngOnInit(): void {
  }
  logout() {
    this.sanyuService.logout();
  }
}
