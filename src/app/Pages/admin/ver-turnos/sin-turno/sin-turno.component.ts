import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Contratista } from 'src/app/Shared/models/contratista';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

@Component({
  selector: 'app-sin-turno',
  templateUrl: './sin-turno.component.html',
  styleUrls: ['./sin-turno.component.css']
})
export class SinTurnoComponent implements OnInit {
  buscarForm: FormGroup = this.fb.group({
    documento: ['', Validators.required]
  })
  datasource: any;
  contratistas: Contratista[] = [];
  displayedColumns = ['nombreContratista', 'identificacion', 'rol', 'telefono'];
  constructor(private fb: FormBuilder, private sanyuService: SanyuService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.sinTurno();
  }
  //Método que permite traer la información de los contratistas sin turno
  sinTurno() {
    this.sanyuService.contratistasSinTurno().subscribe(data => {
      //Si la respuesta es nula, se muestra un mensaje
      if (data[0] == null) {
        this.toastr.error('No se han encontrado contratistas', '¡ERROR!')
        //Si la respuesta no es nula, se cargan los contratistas en el arreglo
      } else {
        if (data[0] != null) {
          this.contratistas.push(data);
          this.datasource = data;
        }
      }
    })
  }
  logout() {
    this.sanyuService.logout();
  }
}
