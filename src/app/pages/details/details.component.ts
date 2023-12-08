import { Component, inject, signal } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Result } from '../../models/orderDetail.model';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  details = signal<Result | null>(null);
  private ordersServices = inject(OrdersService);

  ngOnInit() {
    this.ordersServices.getOrders().subscribe({
      next: (res) => {
        console.log(res.result);
        this.details.set(res.result);
      },
    });
  }
}
