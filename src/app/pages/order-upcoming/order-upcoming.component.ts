import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchComponent } from '../../components/search/search.component';
import { Result } from '../../models/order.model';
import { OrdersService } from '../../services/orders.service';
import { OrderComponent } from '../../components/order/order.component';

@Component({
  selector: 'app-order-upcoming',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SearchComponent, OrderComponent],
  templateUrl: './order-upcoming.component.html',
  styleUrl: './order-upcoming.component.scss',
})
export class OrderUpcomingComponent {
  orders = signal<Result[]>([]);
  private ordersServices = inject(OrdersService);

  ngOnInit() {
    this.ordersServices.getOrdersUpcoming().subscribe((res) => {
      console.log(res.result);
      this.orders.set(res.result);
    });
  }
}
