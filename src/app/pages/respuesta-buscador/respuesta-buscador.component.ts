import { Component,Inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule   } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-respuesta-buscador',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FooterComponent],
  templateUrl: './respuesta-buscador.component.html',
  styleUrl: './respuesta-buscador.component.scss'
})
export class RespuestaBuscadorComponent {
resultados:any ;
count_resultados:any;
datoBuscar:any;

constructor(
  private cookies : CookieService,
  private router: Router,
  private route: ActivatedRoute) {

  }

  ngOnInit(){
    console.log("entro con una nueva busqueda")
    this.resultados = JSON.parse(localStorage.getItem('dataSearch') || '{}' );
    console.log(this.resultados)
    this.count_resultados = this.cookies.get('count');
    this.datoBuscar = this.cookies.get('datoBuscar');
  }
  add_to_cart(resultado:any){
    this.cookies.set('seleccionado',JSON.stringify(resultado));
    this.router.navigateByUrl('/carrito', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/carritor']);
  }); 
   
  }
}
