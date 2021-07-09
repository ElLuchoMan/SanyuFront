import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private fb: FormBuilder, private sanyuService: SanyuService) { }

  ngOnInit(): void {
    this.sinTurno();
  }
  sinTurno() {
    this.sanyuService.contratistasSinTurno().subscribe(data => {
      console.log(data);
      this.contratistas.push(data);
      console.log(data);
      this.datasource = data;
    })
  }
  logout() {
    this.sanyuService.logout();
  }
}
