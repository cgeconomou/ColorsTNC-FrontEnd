import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders!: Order[];
  loadingSpinner: boolean = true;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.GetOrdersHandler();
  }

  GetOrdersHandler(){
    this.orderService.GetOrders().subscribe(
      {
        next: response=> {this.orders = response, console.log(this.orders);},
        error: error => {console.log(error),this.loadingSpinner = false},
        complete: () => {console.log("Shop Customers Done"),this.loadingSpinner = false}
      }
    )
  }



}
