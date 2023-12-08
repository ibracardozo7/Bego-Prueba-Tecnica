import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Order } from '../models/order.model';
import { OrderDetail } from '../models/orderDetail.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private http = inject(HttpClient);
  url =
    'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders/upcoming';
  constructor() {}

  getOrdersUpcoming() {
    return this.http.get<Order>(this.url);
  }

  getOrders() {
    return this.http.get<OrderDetail>(
      'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders'
    );
  }
}
