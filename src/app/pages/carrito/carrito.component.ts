import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router,ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
seleccionado:any
  constructor(
    private cookies : CookieService,
    private router: Router,
    private route: ActivatedRoute) {
  
    }
suma:any = 1;
ngOnInit(){
 this.seleccionado = JSON.parse(this.cookies.get('seleccionado') || '{}');
  
}
sumar(){
this.suma = this.suma +  1 ;
}
restar(){
  this.suma = this.suma -  1 ;
}
seguir_Comprando(){
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.navigate(['/respuesta-buscador'])
 
}
pagar(){
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.navigate(['/termina-compra'])
}
}
