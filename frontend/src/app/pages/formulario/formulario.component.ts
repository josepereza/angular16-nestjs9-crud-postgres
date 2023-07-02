import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  clienteForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    saldo:[0],
    isActive:[true]
  });
  constructor(
    public fb: FormBuilder,
    public clienteService:ClientesService
  ) {
   
  }

  ngOnInit() {}

  createcliente() {
    this.clienteService.createCliente(this.clienteForm.value).subscribe(data=>{
      console.log(data)
    })
  }

}
