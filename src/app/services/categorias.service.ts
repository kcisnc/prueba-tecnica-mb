import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  
  getCategorias() {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
     });
     let url = 'https://prueba.sandboxmb.com/api/getSubsubcategorias/';
    let params = { headers: headers };
    return this.http.get(url, params);    
  }
}
