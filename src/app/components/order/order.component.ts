import { Component, Input, signal, Output, EventEmitter } from '@angular/core';
import { Result } from '../../models/order.model';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  @Input() order!: Result;

  contador: number = 5;

  ngOnInit() {
    const intervalo = setInterval(() => {
      if (this.contador === 0) {
        clearInterval(intervalo); // Detiene el contador cuando llega a 0
      } else {
        console.log(this.contador);
        this.contador--;
      }
    }, 1000);
  }
}
