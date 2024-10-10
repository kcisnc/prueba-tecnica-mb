import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CategoriasService } from '../../services/categorias.service';
import { OfertasService } from '../../services/ofertas.service';
import { UltimaVisitaService } from '../../services/ultima-visita.service';
import { Router,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CommonModule,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  categorias : any;
  ofertas : any;
  ultimasV : any;
  constructor(
    private CategoriasService: CategoriasService,
    private OfertasService: OfertasService,
    private UltimaVisitaService : UltimaVisitaService,
    private router: Router,
    private route: ActivatedRoute) {

      this.CategoriasService.getCategorias().subscribe((response: any)=>{ 
        if (response.success == 0) {
          return false;
        }else if(response.success == 1){
          this.categorias= response.content; 
         // console.log(this.categorias)      
        }
      })

      this.OfertasService.getOfertas().subscribe((response: any)=>{ 
        if (response.success == 0) {
          return false;
        }else if(response.success == 1){
          this.ofertas= response.content; 
         // console.log(this.ofertas)      
        }
      })

      this.UltimaVisitaService.getUltimas().subscribe((response: any)=>{ 
        if (response.success == 0) {
          return false;
        }else if(response.success == 1){
          this.ultimasV= response.content; 
         // console.log(this.ofertas)      
        }
      })
    }
 slicedData(data : any[]) : any[] {
      return data?.slice(0,5)
    }
}
