import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DialogComponent } from 'src/app/Shared/Components/dialog/dialog.component';


@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent implements OnInit {
  displayedColumns = ['nombreContratista', 'identificacion', 'jornada', 'labor', 'fecha', 'inicio', 'final', 'acciones'];
  Date = new Date();
  datasource: any = [{
    nombre: 'Bryan Luis', id: 1015466494, jornada: 'Mañana', labor: 'Campo', fecha: this.Date, inicio: '6:00', final: '14:00'
  }];
  // @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}

