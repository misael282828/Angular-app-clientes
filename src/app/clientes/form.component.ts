import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  //inyectar servicios

  // private clientesService: ClientesService = new this.clientesService()
  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private activetedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarCliente();
  }

  public cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
  }; // interface no se instancian

  public titulo: string = 'Crear Cliente';

  public create(): void {
    console.log(this.cliente)

    this.clientesService.create(this.cliente).subscribe((json) => {
      this.router.navigate(['/clientes']);
      Swal.fire(
        'Nuevo Cliente',
        `Cliente ${json.cliente.nombre} creado con exito!  `,
        'success'
      );
      console.log(this.cliente)
    });
  }

  update(): void {
    this.clientesService.update(this.cliente).subscribe((cliente) => {
      this.router.navigate(['/clientes']);
      Swal.fire(
        'Cliente Actualizado',
        `Cliente ${cliente.nombre} Actualizado con exito!  `,
        'success'
      );
    });
  }

  cargarCliente(): void {
    this.activetedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.clientesService
          .getCliente(id)
          .subscribe((cliente) => (this.cliente = cliente));
      }
    });
  }

  // public create(): void {
  //   this.clientesService.crearUsuario(this.cliente);
  // }
}
