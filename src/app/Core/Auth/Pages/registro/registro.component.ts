import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorService } from 'src/app/Shared/Services/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private validatorService: ValidatorService) { }
  registroForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    password: ['', Validators.required],
  })
  get emailErrorMsg(): string {
    const errors = this.registroForm.get('email')?.errors;
    if (errors?.required) {
      return 'El correo es obligatorio';
    } else if (errors?.pattern) {
      return 'El valor ingresado no tiene formato de correo';
    } else if (errors?.emailTomado) {
      return 'El correo ya está resgistrado';
    }
    return ''
  }
  ngOnInit(): void {
  }

  campoNoValido(campo: string) {
    return this.registroForm.get(campo)?.invalid && this.registroForm.get(campo)?.touched;
  }
  guardarPersona() {
    this.router.navigate(['/login']);
  }
}
