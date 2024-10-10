import { Component } from '@angular/core';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/login.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule,FormGroup, FormControl  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from '@angular/router';
import { BuscadorService } from '../../services/buscador.service';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgbCollapseModule,NgbModule,RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public isCollapsed = true;
  constructor(
    private cookies: CookieService,
    private LoginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) {
    }
loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
register(){
  this.router.navigate(['/register'])
  /* .then(() => {
    window.location.reload();
  });  */
 
}
login(){
  let data = {
    "username": this.loginForm.value['username'],
    "password": this.loginForm.value['password']
  };
  this.LoginService.login(data).subscribe((response: any)=>{ 
    console.log(response)
    this.cookies.set('token',response.token) 
    this.router.navigate(['/home'])
    /* .then(() => {
      window.location.reload();
    });  */
   
  }, err => {alert("Usuario o password incorrecto")},)
}
}
