import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from 'src/app/Shared/Services/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  show: boolean;
  icon: boolean;
  constructor(private fb: FormBuilder, private router: Router, private validatorService: ValidatorService, private toastr: ToastrService) { }
  registroForm: FormGroup = this.fb.group({
    documento: ['', Validators.required],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    password: ['', Validators.required],
    telefono: ['', Validators.required],
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
  verPassword() {
    this.show = !this.show;
    this.icon = !this.icon;
  }


  campoNoValido(campo: string) {
    return this.registroForm.get(campo)?.invalid && this.registroForm.get(campo)?.touched;
  }
  guardarPersona() {
    this.router.navigate(['/pages/users/admin']);
    this.toastr.success('Usuario creado con éxito', '¡HECHO!');

  }
}
