import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule,Routes } from '@angular/router';
import { ClientesService } from './clientes/clientes.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [

  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
];


// paso 1 -importar aqui

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    
 
   
     //paso 2- usar aqui el componente creado
  ],
  imports: [BrowserModule,HttpClientModule, RouterModule.forRoot(routes), NgbModule],
  providers: [ClientesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
