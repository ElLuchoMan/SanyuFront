import { Component, Inject, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-carga-masiva',
  templateUrl: './info-carga-masiva.component.html',
  styleUrls: ['./info-carga-masiva.component.css']
})
export class InfoCargaMasivaComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: null) { }
  ngOnInit(): void {
  }
  //Responde al componente que lo utiliza si se aceptó o no la confirmación
  confirmar() {
    this.dialogRef.close(true);
  }
}