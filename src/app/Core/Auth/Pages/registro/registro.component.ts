import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contratista } from 'src/app/Shared/models/contratista';
import { Rol } from 'src/app/Shared/models/rol';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';
import { ValidatorService } from 'src/app/Shared/Services/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  show: boolean;
  icon: boolean;
  roles: Rol;
  constructor(private fb: FormBuilder, private router: Router, private validatorService: ValidatorService, private toastr: ToastrService, private sanyuService: SanyuService) { }
  registroForm: FormGroup = this.fb.group({
    documento: ['', Validators.required],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    password: ['', Validators.required],
    telefono: ['', Validators.required],
    rol: ['', Validators.required],
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
    this.getRoles();
  }
  verPassword() {
    this.show = !this.show;
    this.icon = !this.icon;
  }

  getRoles() {
    this.sanyuService.getRol().forEach(data => {
      this.roles = data;
    })

  }
  campoNoValido(campo: string) {
    return this.registroForm.get(campo)?.invalid && this.registroForm.get(campo)?.touched;
  }
  guardarPersona() {
    const contratista: Contratista = {
      documento: this.registroForm.get('documento').value,
      nombre: this.registroForm.get('nombres').value + this.registroForm.get('apellidos').value,
      password: this.registroForm.get('password').value,
      telefono: this.registroForm.get('telefono').value,
      estadoContratista: 'Activo',
      rol: { estadoRol: null, idRol: this.registroForm.get('rol').value, nombreRol: null },
    };
    this.sanyuService.crearContratista(contratista).subscribe(data => {
      this.router.navigate(['/pages/users/admin']);
      this.toastr.success('Usuario creado con éxito', '¡HECHO!');
      this.registroForm.reset();
    },
      error => {
        // this.toastr.error(error, '¡ERROR!');
      });



  }
}
