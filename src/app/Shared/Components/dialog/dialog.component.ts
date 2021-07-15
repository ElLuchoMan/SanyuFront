import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Turno } from '../../models/turno';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Turno) { }
  ngOnInit(): void {
  }
  //Responde al componente que lo utiliza si se aceptó o no la confirmación
  confirmar() {
    this.dialogRef.close(true);
  }
  cerrar() {
    this.dialogRef.close();
  }
}
