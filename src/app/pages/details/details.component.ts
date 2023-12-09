import { Component, inject, signal } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Driver, Result } from '../../models/orderDetail.model';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { PickpDataComponent } from '../../components/pickp-data/pickp-data.component';
import { CheckComponent } from '../../components/check/check.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, PickpDataComponent, CheckComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  details = signal<Result | null>(null);
  driver!: Result;
  private ordersServices = inject(OrdersService);

  footer: boolean = true;
  toggle() {
    this.footer = !this.footer;
  }
  
  ngOnInit() {
    this.ordersServices.getOrders().subscribe({
      next: (res) => {
        console.log(res.result);
        this.details.set(res.result);
        this.driver = res.result;
      },
    });
  }
}
