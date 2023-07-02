import { Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/listado',
    pathMatch: 'full',
  },
  {
    path: 'listado',
    component: ListadoComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },

  {
    path: 'formulario',
    component: FormularioComponent,
  },
];
