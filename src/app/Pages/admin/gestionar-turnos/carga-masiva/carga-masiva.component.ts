import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { InfoCargaMasivaComponent } from 'src/app/Shared/Components/info-carga-masiva/info-carga-masiva.component';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

@Component({
  selector: 'app-carga-masiva',
  templateUrl: './carga-masiva.component.html',
  styleUrls: ['./carga-masiva.component.css']
})
export class CargaMasivaComponent implements OnInit {
  public archivo: File | null = null;
  constructor(private fb: FormBuilder, private sanyuService: SanyuService, public dialog: MatDialog, private toastr: ToastrService) { }
  buscarForm: FormGroup = this.fb.group({
    documento: ['',]
  })
  ngOnInit(): void {
    this.informacion();
  }
  manejoArchivo(file: any) {
    //Asignamos a la variable archivo, el archivo subido en el input file
    this.archivo = file.target.files[0];
  }
  guardar() {
    //Se llama al método de la clase SanyuService para guardar el archivo, enviando el archivo cargado por el usuario
    this.sanyuService.cargarTurnos(this.archivo).subscribe(data => {
      this.toastr.success('Se ha cargado el archivo', '¡HECHO!');
    })
  }
  logout() {
    this.sanyuService.logout();
  }
  informacion() {
    const dialog = this.dialog.open(InfoCargaMasivaComponent, {
      // width: '200px',
      data: null,
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
      }
    })
  }
}
