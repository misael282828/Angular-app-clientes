import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'})
  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    // return of(CLIENTES);

    // return this.http.get<Cliente[]>(this.urlEndPoint);

    return this.http.get<Cliente[]>(this.urlEndPoint).pipe(
      map((response) => {
        console.log(response); // Agrega un console.log() para ver la respuesta
        return response as Cliente[];
      })
    );
  }

  // metodo post para insertar un nuevo cliente 
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente ,{ headers: this.httpHeaders})
  }



  // metodo de jhoan
  crearUsuario(body: Cliente): void {
    console.log('probando servicio', body);

    this.http.post(this.urlEndPoint, body).subscribe((response) => {
      console.log(response);
    });
  }

}
