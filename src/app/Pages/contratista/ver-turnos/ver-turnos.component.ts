import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Contratista } from 'src/app/Shared/models/contratista';
import { Turno } from 'src/app/Shared/models/turno';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent implements OnInit {

  displayedColumns = ['fecha', 'jornada', 'labor', 'inicio', 'final'];
  Date = new Date();
  info: any;
  documento: number;
  turnos: Turno[] = [];
  datasource: any = this.turnos;

  // @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private sanyuService: SanyuService) { }

  ngOnInit(): void {
    this.info = JSON.parse(localStorage.getItem('usuario'));
    this.documento = this.info.documento;
    this.infoContratista();
  }
  logout() {
    this.sanyuService.logout();
  }
  infoContratista() {
    this.sanyuService.buscarTurnosContratista(this.documento).subscribe((data) => {
      if (data != null) {
        this.turnos.push(data);
        this.datasource = data;
      }
    })
  }
}
