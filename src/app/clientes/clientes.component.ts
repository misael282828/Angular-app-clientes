import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  
})//
export class ClientesComponent implements OnInit{
  
   clientes:Cliente[]=[]; //m

  constructor(private clientesService: ClientesService){}
  
  ngOnInit() {
    
    this.clientesService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
