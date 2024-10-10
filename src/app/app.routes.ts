import { Routes,RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RespuestaBuscadorComponent } from './pages/respuesta-buscador/respuesta-buscador.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { TerminaCompraComponent } from './pages/termina-compra/termina-compra.component';
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component:HomeComponent},
    { path: 'respuesta-buscador', component:RespuestaBuscadorComponent},
    { path: 'carrito', component:CarritoComponent},
    { path: 'termina-compra', component:TerminaCompraComponent},

];

/* export const APP_ROUTING = RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  }); */
