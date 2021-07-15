import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MaterialModule } from './Shared/Modules/Material/material.module';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Core/Auth/Pages/login/login.component';
import { RegistroComponent } from './Core/Auth/Pages/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './Shared/Components/dialog/dialog.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './Core/Auth/Guards/auth.guard';
import { InfoCargaMasivaComponent } from './Shared/Components/info-carga-masiva/info-carga-masiva.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    DialogComponent,
    NotFoundComponent,
    InfoCargaMasivaComponent,
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
    ToastrModule.forRoot(),
  ],
  entryComponents: [
    DialogComponent,
    InfoCargaMasivaComponent,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
