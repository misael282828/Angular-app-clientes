import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { Observable, of, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    // return of(CLIENTES);

    // return this.http.get<Cliente[]>(this.urlEndPoint);

    return this.http
    .get<Cliente[]>(this.urlEndPoint)
    .pipe(
      map((response) => {
        console.log(response); // Agrega un console.log() para ver la respuesta
        return response as Cliente[];
      })
    );
  
  }
}
