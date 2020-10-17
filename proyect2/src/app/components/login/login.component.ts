import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ForgotemailComponent} from '../forgotemail/forgotemail.component'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  correo: string="";
  contra: string="";
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ForgotemailComponent);
  }
  ngOnInit(): void {
  }

}

