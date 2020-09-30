import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss']
})
export class HearderComponent implements OnInit {

  constructor(public dialog: MatDialog ) {}

  ngOnInit() {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent,{ width: '500px', height: '450px' });
  }


}
