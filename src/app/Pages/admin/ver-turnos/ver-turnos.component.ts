import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { DialogComponent } from 'src/app/Shared/Components/dialog/dialog.component';
import { Contratista } from 'src/app/Shared/models/contratista';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';


@Component({
  selector: 'app-ver-turnos',
  templateUrl: './ver-turnos.component.html',
  styleUrls: ['./ver-turnos.component.css']
})
export class VerTurnosComponent implements OnInit {
  buscarForm: FormGroup = this.fb.group({
    documento: ['',]
  })
  displayedColumns = ['nombreContratista', 'identificacion', 'jornada', 'labor', 'fecha', 'inicio', 'final', 'acciones'];
  Date = new Date();
  datasource: any;
  contratistas: Contratista[] = [];
  // @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private sanyuService: SanyuService, private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.buscar();
    // this.sinTurno();
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
  buscar() {
    this.sanyuService.buscarContratista(this.buscarForm.value.documento).subscribe((data) => {
      if (data.estadoContratista = "Activo") {
        this.contratistas.push(data);
        console.log(data);
        this.datasource = data;
      }
    })
  }
  sinTurno() {
    this.sanyuService.contratistasSinTurno().subscribe(data => {
      console.log(data);
      if (data.estadoContratista = "Activo") {
        this.contratistas.push(data);
        console.log(data);
        this.datasource = data;
      }
    })
  }
}

