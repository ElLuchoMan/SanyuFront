import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from 'src/app/Pages/home/home.component';
import { DialogComponent } from 'src/app/Shared/Components/dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  email: string;
  password: string;

  register() {
  }
  login() {
    if (this.email == "admin" && this.password == "admin") {
      this.snackBar.open('bienvenido', '', { duration: 1000 })
      this.router.navigate(['/home']);
    } else {
      this.snackBar.open('Credenciales incorrectas', '', { duration: 1000 })
    }
  }


}
