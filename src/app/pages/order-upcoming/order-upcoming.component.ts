import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchComponent } from '../../components/search/search.component';
import { Result } from '../../models/order.model';
import { OrdersService } from '../../services/orders.service';
import { OrderComponent } from '../../components/order/order.component';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-order-upcoming',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SearchComponent, OrderComponent, NavComponent],
  templateUrl: './order-upcoming.component.html',
  styleUrl: './order-upcoming.component.scss',
})
export class OrderUpcomingComponent {
  orders = signal<Result[]>([]);
  private ordersServices = inject(OrdersService);
  contador: number = 6;

  ngOnInit() {
    this.ordersServices.getOrdersUpcoming().subscribe((res) => {
      console.log(res.result);
      this.orders.set(res.result);
    });
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
