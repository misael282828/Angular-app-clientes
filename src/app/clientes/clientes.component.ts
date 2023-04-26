import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
}) 

export class ClientesComponent implements OnInit {
  clientes: Cliente[] = []; //m

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.clientesService
      .getClientes()
      .subscribe((clientes) => (this.clientes = clientes));
      console.log("este es get cliente")
  }

  delete(cliente:Cliente):void{

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ms-3',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: `Desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      text: `Perdera toda informacion del cliente! `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.clientesService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli!== cliente)
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `Cliente ${cliente.nombre} eliminado con exito`,
              'success'
            )
          }
         )
        

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelar',
          'Cliente no eliminado :)',
          'error'
        )
      }
    })
  }


}
