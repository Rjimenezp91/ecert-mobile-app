import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms' 
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { HomeComponent } from './components/shared/home/home.component'
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './components/shared/header/header.component';
import { MisDocumentosComponent } from './components/mis-documentos/mis-documentos.component';
import { DialogPdfComponent } from './components/shared/dialogs/dialog-pdf/dialog-pdf.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MisDocumentosComponent,
    DialogPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
