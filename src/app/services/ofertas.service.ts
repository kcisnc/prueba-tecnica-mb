import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private http: HttpClient) { }

  
  getOfertas() {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
     });
     let url = 'https://prueba.sandboxmb.com/api/getProductosOferta/';
    let params = { headers: headers };
    return this.http.get(url, params);    
  }
}
