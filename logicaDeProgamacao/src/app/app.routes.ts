import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { ListaComponent } from './components/lista/lista.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'filtro',
    component: FiltroComponent,
  },
  {
    path: 'lista',
    component: ListaComponent,
  },
];
