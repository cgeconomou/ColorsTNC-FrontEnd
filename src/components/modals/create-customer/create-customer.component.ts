import { Component, OnInit } from '@angular/core';
import { CreateCustomerService } from './create-customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(public createCustomerService:CreateCustomerService) { }

  ngOnInit(): void {
  }

}
