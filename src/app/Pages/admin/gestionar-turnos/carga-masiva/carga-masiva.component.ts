import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

@Component({
  selector: 'app-carga-masiva',
  templateUrl: './carga-masiva.component.html',
  styleUrls: ['./carga-masiva.component.css']
})
export class CargaMasivaComponent implements OnInit {

  constructor(private fb: FormBuilder, private sanyuService: SanyuService) { }
  buscarForm: FormGroup = this.fb.group({
    documento: ['',]
  })
  turnosMasivosForm: FormGroup = this.fb.group({
    archivoMasivo: ['',]
  })
  ngOnInit(): void {
  }
  guardar() {

  }
  logout() {
    this.sanyuService.logout();
  }
}
