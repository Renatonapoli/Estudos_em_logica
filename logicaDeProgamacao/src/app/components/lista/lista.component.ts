import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent {
  @Output() lista: string = 'testanto';
}
