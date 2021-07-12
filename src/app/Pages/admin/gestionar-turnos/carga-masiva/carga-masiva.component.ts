import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

@Component({
  selector: 'app-carga-masiva',
  templateUrl: './carga-masiva.component.html',
  styleUrls: ['./carga-masiva.component.css']
})
export class CargaMasivaComponent implements OnInit {
  public archivo: File | null = null;
  constructor(private fb: FormBuilder, private sanyuService: SanyuService) { }
  buscarForm: FormGroup = this.fb.group({
    documento: ['',]
  })
  ngOnInit(): void {
  }
  manejoArchivo(file: any) {
    this.archivo = file.target.files[0];
  }
  guardar() {
    this.sanyuService.cargarTurnos(this.archivo).subscribe(data => {
      console.log(this.archivo);
    })
  }

  logout() {
    this.sanyuService.logout();
  }
}
