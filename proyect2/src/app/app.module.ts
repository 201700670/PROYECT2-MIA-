import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CRUDComponent } from './components/crud/crud.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    CRUDComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule//,
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
