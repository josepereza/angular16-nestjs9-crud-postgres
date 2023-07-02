import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
cliente:any; 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService:ClientesService
  ) {}
  ngOnInit(): void {
    const clienteId = this.route.snapshot.paramMap.get('id');
 this.clienteService.getOne(clienteId).subscribe((data:any)=>{
 this.cliente=data
 })
  }

}
