import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _http:HttpClient) { }
  getData():Observable<any>{
   return this._http.get("https://jsonplaceholder.typicode.com/users")
  }
}
