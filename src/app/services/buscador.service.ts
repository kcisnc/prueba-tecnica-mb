import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http: HttpClient) { }

  
  searchProducts(palabra:any) {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
     });
     let url = 'https://prueba.sandboxmb.com/api/searchAutoparteV3/?search='+ palabra +'&limit=20&page=1&categoriaSeleccionada=undefined&marcasSeleccionadas=&vehiculo=';
    let params = { headers: headers };
    return this.http.get(url, params);    
  }
}
