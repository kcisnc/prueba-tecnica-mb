import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  
  login(body:any) {
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
     });
     let url = 'https://prueba.sandboxmb.com/api/auth/';
    let params = { headers: headers };
    return this.http.post(url,body);    
  }
}

