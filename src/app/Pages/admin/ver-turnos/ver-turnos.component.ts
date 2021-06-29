import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
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
    documento: ['', Validators.required]
  })
  displayedColumns = ['nombreContratista', 'identificacion', 'jornada', 'labor', 'fecha', 'inicio', 'final', 'acciones'];
  Date = new Date();
  datasource: any;
  contratistas: Contratista[] = [];
  // @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private sanyuService: SanyuService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    // this.buscar();
    // this.sinTurno();
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
  buscar() {
    this.sanyuService.buscarTurnosContratista(this.buscarForm.value.documento).subscribe((data) => {
      if (data[0] != null) {
        this.contratistas.push(data);
        this.datasource = data;
        console.log(data);
      } else {
        if (data[0] == null) {
          
          this.toastr.error('No existe contratista con ese documento', '¡ERROR!');
        }
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

