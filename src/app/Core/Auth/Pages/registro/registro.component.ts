import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }
  registroForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
  ngOnInit(): void {
  }
guardarPersona(){
  
}
}
