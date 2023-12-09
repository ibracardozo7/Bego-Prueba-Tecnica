import { Component, signal, inject, computed } from '@angular/core';
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
  imports: [
    CommonModule,
    HeaderComponent,
    SearchComponent,
    OrderComponent,
    NavComponent,
  ],
  templateUrl: './order-upcoming.component.html',
  styleUrl: './order-upcoming.component.scss',
})
export class OrderUpcomingComponent {
  orders = signal<Result[]>([]);
  filter = signal('');
  search = '';

  private ordersServices = inject(OrdersService);

  ordersByFilter = computed(() => {
    const filter = this.filter();
    const orders = this.orders();

    if (filter === 'upcoming') {
      return orders.filter((order) => order.status == 1);
    }

    if (filter === 'completed') {
      return orders.filter((order) => order.status == 3);
    }

    return orders;
  });

  ngOnInit() {
    this.ordersServices.getOrdersUpcoming().subscribe((res) => {
      console.log(res.result);
      this.orders.set(res.result);
    });

    // console.log("name =>",this.filter);
  }

  nameFilter(name: 'upcoming' | 'completed' | 'past') {
    console.log(name);
    this.filter.set(name);
  }

  searchFilter(order: any) {
    console.log(order);
    this.search = order;
  }
}
