import { MatSnackBar } from '@angular/material/snack-bar';
import { Os } from './../models/os';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OsService {

  baseUrl: String = environment.baseUrl;
  
  constructor(
              private http: HttpClient,
              private snack: MatSnackBar 
  ) { }

  findAll(): Observable<Os[]>{
    const url = this.baseUrl + "/os/";
    return this.http.get<Os[]>(url);
  }

  findById(id : any): Observable<Os>{
    const url = this.baseUrl + "/os/" +id;
    return this .http.get<Os>(url);
  }

  create(os: Os): Observable<Os> {
    const url = this.baseUrl + "/os/";
    return this.http.post<Os>(url, os);
  }

  update(os: Os): Observable<Os>{
    const url = `${this.baseUrl}/os`;
    return this.http.put<Os>(url, os);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 4000,
      panelClass: 'snack'
    })
  }
}
