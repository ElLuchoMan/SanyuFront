import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/Pages/home/home.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private snackBar: MatSnackBar, private fb: FormBuilder) { }
  loginForm: FormGroup = this.fb.group({
    documento: ['', (Validators.required,Validators.maxLength(10))],
    password: ['', Validators.required],
  })
  ngOnInit(): void {
  }
  register() {
  }
  login() {
    if (this.loginForm.get('documento').value == "123" && this.loginForm.get('password').value == "123") {
      this.snackBar.open('¡BIENVENIDO!', '', { duration: 2000 })
      this.router.navigate(['/home']);
    } else {
      this.snackBar.open('Credenciales incorrectas', 'X', { duration: 2000 })
    }
  }


}
