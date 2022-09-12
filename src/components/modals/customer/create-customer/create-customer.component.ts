import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/components/customers/customer.service';
import { CustomersComponent } from 'src/components/customers/customers.component';
import { Customer } from 'src/components/models/customer';
import { CreateCustomerService } from './create-customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private customerComponent: CustomersComponent, private customerService: CustomerService, public createCustomerService:CreateCustomerService) { }

  ngOnInit(): void {
  }

  CreateCustomerHandler(customerName : string, customerPhone: string, customerEmail: string){
      this.createCustomerService.showCreateCustomerForm = false;
      this.customerService.CreateCustomer({FullName:customerName, PhoneNumber:customerPhone, Email:customerEmail} as Customer)
      .subscribe(
        {
          next: response => this.customerComponent.GetCustomersHandler(),
          error: error => console.log(error),
          complete: () => console.log("Customer Created")
      })
  }

}
