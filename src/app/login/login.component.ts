import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private _services:StudentsService){

  }
  public data:any=[]
  ngOnInit(): void {
    this.data=this._services.getData()
  }
}
