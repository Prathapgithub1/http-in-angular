import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-signup',
  standalone: false,

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  public data:any=[]
  constructor(private _services:StudentsService){}
  ngOnInit(): void {
      this.data=this._services.getData()
  }

}
