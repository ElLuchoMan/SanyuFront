import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/Pages/home/home.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/Shared/Services/validator.service';
import { Credenciales } from 'src/app/Shared/models/credenciales';
import { SanyuService } from 'src/app/Shared/Services/sanyu.service';

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

  constructor(private router: Router, private snackBar: MatSnackBar, private fb: FormBuilder, private validatorService: ValidatorService, private sanyuService: SanyuService) { }

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
    // console.log(credenciales);
    this.sanyuService.login(credenciales).subscribe(data => {
      // console.log(data);
      localStorage.setItem('usuario', JSON.stringify(data));
      this.mostrar();
    })
  }
  mostrar() {
    this.info = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.info.rol.nombreRol);
  }
}
