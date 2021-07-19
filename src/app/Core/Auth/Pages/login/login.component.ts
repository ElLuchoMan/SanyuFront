import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Credenciales } from 'src/app/Shared/models/credenciales';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show: boolean;
  loginForm: FormGroup = this.fb.group({
    documento: new FormControl('', [Validators.required, Validators.pattern('\\d{7,10}')]),
    password: ['', Validators.required],
  })
  info: any;
  constructor(private router: Router, private snackBar: MatSnackBar, private fb: FormBuilder, private toastr: ToastrService, private sanyuService: SanyuService) { }
  ngOnInit(): void {
    this.show = false;
  }
  verPassword() {
    this.show = !this.show;
  }
  login() {
    const credenciales: Credenciales = {
      documento: this.loginForm.get('documento').value,
      password: this.loginForm.get('password').value,
    }
    this.sanyuService.login(credenciales).subscribe(data => {
      localStorage.setItem('usuario', JSON.stringify(data));
      this.info = JSON.parse(localStorage.getItem('usuario'));
      console.log();
      //Se valida la respuesta de la API, si es inválida, se muestra un mensaje
      if (data == null) {
        this.toastr.error('Verifique sus credenciales', '¡ERROR!');
      } else {
        if (data?.estadoContratista == 'Inactivo') {
          this.toastr.error('Su estado es inactivo', '¡ERROR!');
        }
      }
      //Si la respuesta de la API es válida, se redirige a la página principal dependiendo su rol y se muestra un mensaje de bienvenida
      if (this.info.rol.nombreRol == 'Administrador' && data?.estadoContratista != 'Inactivo') {
        this.toastr.success(`Administrador: ${this.info.nombre}`, 'Hola');
        this.router.navigate(['/pages/users/admin']);
      } else {
        if (this.info.rol.nombreRol == 'Campo' && data?.estadoContratista != 'Inactivo') {
          this.toastr.success(`Contratista: ${this.info.nombre}`, 'Hola');
          this.router.navigate(['/pages/users/contratista']);
        }
      }
    })
  }
}
