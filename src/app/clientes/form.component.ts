import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  //inyectar servicios

  // private clientesService: ClientesService = new this.clientesService()
  constructor(private clientesService: ClientesService,
    private router: Router ) {}

  public cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
  }; // interface no se instancian

  public titulo: string = 'Crear Cliente';

  
  public create(): void {
    this.clientesService.create(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
      )
    }

    
    // public create(): void {
    //   this.clientesService.crearUsuario(this.cliente);
    // }

  validarCampos(): boolean {
    if (
      (this.cliente.nombre = '' || this.cliente.apellido || this.cliente.email)
    ) {
      return true;
    }
    return false;
  }
}
