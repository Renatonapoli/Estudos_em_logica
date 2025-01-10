import { Component } from '@angular/core';
import { FiltroComponent } from '../filtro/filtro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FiltroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  teste = '';
}
