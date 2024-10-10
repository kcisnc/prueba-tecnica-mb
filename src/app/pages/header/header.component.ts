import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from '@angular/router';
import { BuscadorService } from '../../services/buscador.service';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormGroup, FormControl  } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbModule,RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isMenuCollapsed = true;
  responseData:any;
  constructor(
    private cookies : CookieService,
    private BuscadorService: BuscadorService,
    private router: Router,
    private route: ActivatedRoute) {

    }

    profileForm = new FormGroup({
      inputBuscador: new FormControl(''),
    });

    onSubmit() {
      console.warn(this.profileForm.value); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']
      let datoBuscar:any = this.profileForm.value['inputBuscador']
      
      this.BuscadorService.searchProducts(datoBuscar).subscribe((response: any)=>{ 
        
          this.responseData= response; 
          console.log(this.responseData.results)
          this.cookies.set('datoBuscar',datoBuscar)
          localStorage.setItem('dataSearch',JSON.stringify(this.responseData.results));
          this.cookies.set('next',JSON.stringify(this.responseData.next))
          this.cookies.set('count',JSON.stringify(this.responseData.count))
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigateByUrl('/respuesta-buscador', { skipLocationChange: true })
          /* this.router.navigateByUrl('/respuesta-buscador', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/respuesta-buscador']);
        });  */
        
         
           
        
      })
      this.cookies.set('test',JSON.stringify('[{"id":18314,"titulo":"CUBRE POLVO EXTERIOR DELANTERA DERECHA-IZQUIERDA/EXTERIOR TRASERA DERECHA-IZQUIERDA/INTERIOR DELANTERA DERECHA-IZQUIERDA/EXTERIOR DELANTERA IZQUIERDA/EXTERIOR DELANTERA DERECHA/INTERIOR TRASERA DERECHA-IZQUIERDA","precio":300,"publicacion":["625a59ed-d257-4409-ab8b-ee59154e00b5"]","subsubcategoria":null}]'))
      this.cookies.set('test', 'Hello World', { expires: 2, sameSite: 'Lax' });
    }
  
}
