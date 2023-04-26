import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    // return this.http.get<Cliente[]>(this.urlEndPoint);

    return this.http.get<Cliente[]>(this.urlEndPoint).pipe(
      map((response) => {
        console.log('cargando clientes'); // Agrega un console.log() para ver la respuesta
        return response as Cliente[];
      })
    );
  }

  // // metodo post para insertar un nuevo cliente
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {
      headers: this.httpHeaders,
    });
  }
  
  update(cliente:Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }
  // obtener el cliente por el i 
  getCliente(id: number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }


   // obtener el cliente por el i 
   delete(id: any):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`,{headers: this.httpHeaders})
  }


  // Cargar los datos en el formulario para actualizarlo 


  // metodo de jhoan
  // crearUsuario(body: Cliente): void {
  //   console.log('probando servicio', body);

  //   this.http.post(this.urlEndPoint, body).subscribe((response) => {
  //     console.log(response);
  //   });
  // }

}
