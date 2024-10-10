
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UltimaVisitaService {

  constructor(private http: HttpClient) { }

  
  getUltimas() {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
     });
     let url = 'https://prueba.sandboxmb.com/api/getProductosUltimaVisita/';
    let params = { headers: headers };
    return this.http.get(url, params);    
  }
}
