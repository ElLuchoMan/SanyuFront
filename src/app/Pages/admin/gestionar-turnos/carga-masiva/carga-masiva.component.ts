import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-carga-masiva',
  templateUrl: './carga-masiva.component.html',
  styleUrls: ['./carga-masiva.component.css']
})
export class CargaMasivaComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
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
}
