import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/header/header.component';
import { MaterialModule } from './Shared/Modules/Material/material.module';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Core/Auth/Pages/login/login.component';
import { RegistroComponent } from './Core/Auth/Pages/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './Shared/Components/dialog/dialog.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    DialogComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
