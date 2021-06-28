import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent implements OnInit {

  displayedColumns = ['nombreContratista', 'identificacion', 'jornada', 'labor', 'fecha', 'inicio', 'final'];
  Date = new Date();

  contratista: any = [{
    nombre: 'Bryan Luis', id: 1015466494, jornada: 'Mañana', labor: 'Campo', fecha: this.Date, inicio: '6:00', final: '14:00'
  }]
  datasource: any = this.contratista;
  // @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {

  }


}
