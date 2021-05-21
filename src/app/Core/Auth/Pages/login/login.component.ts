import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/Pages/home/home.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/Shared/Services/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    documento: new FormControl('', [Validators.required, Validators.pattern('\\d{7,10}')]),
    password: ['', Validators.required],
  })

  constructor(private router: Router, private snackBar: MatSnackBar, private fb: FormBuilder, private validatorService: ValidatorService) { }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.get('documento').value == "1234567" && this.loginForm.get('password').value == "123") {
      this.snackBar.open('¡BIENVENIDO!', '', { duration: 2000 })
      this.router.navigate(['/home']);
    } else {
      this.snackBar.open('Credenciales incorrectas', 'X', { duration: 2000 })
    }
  }


}
