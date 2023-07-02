import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  clienteService = inject(ClientesService);
  router=inject(Router)
  clientes:any[]=[]
  ngOnInit(): void {
    this.clienteService.getall().subscribe((data:any)=>{
      this.clientes=data
    })
  
}
micliente(id:any){
  this.router.navigate(['/detail',id])

}
}
