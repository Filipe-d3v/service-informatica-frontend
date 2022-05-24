import { Produto } from 'src/app/models/produto';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl: String = environment.baseUrl;
  
  constructor(
    private http: HttpClient,
    private snack: MatSnackBar) { }

  findAll(): Observable<Produto[]>{
    const url = this.baseUrl + "/produtos/";
    return this.http.get<Produto[]>(url);
  }

  findById(id : any): Observable<Produto>{
    const url = this.baseUrl + "/produtos/" +id;
    return this .http.get<Produto>(url);
  }

  create(produto: Produto): Observable<Produto> {
    const url = this.baseUrl + "/produtos/";
    return this.http.post<Produto>(url, produto);
  }

  update(produto: Produto): Observable<Produto>{
    const url = this.baseUrl + "/produtos/" + produto.id;
    return this.http.put<Produto>(url, produto);
  }

  delete(id : any):Observable<void>{
    const url = this.baseUrl + "/produtos/" + id;
    return this.http.delete<void>(url);
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
