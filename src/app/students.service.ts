import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  getData(){
    return [
      {
        name:"prathap",
        password:"admin"
      },
      {
        name:"admin",
        password:"admin"
      },
      {
        name:"prathap1",
        password:"admin"
      }
    ]
  }
}
