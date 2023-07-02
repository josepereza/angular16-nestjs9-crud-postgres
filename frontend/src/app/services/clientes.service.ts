import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
http=inject(HttpClient)
  constructor() { }

  getall(){
    return this.http.get('http://localhost:3000/clientes')
  }

  createCliente(cliente:any){
    return this.http.post('http://localhost:3000/clientes', cliente)
  }

  getOne(id:any){
    return this.http.get(`http://localhost:3000/clientes/${id}`)
  }
}
