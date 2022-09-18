import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCustomerService } from '../modals/customer/create-customer/create-customer.service';
import { Customer } from '../models/customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  loadingSpinner: boolean = true;
  customers!: Customer[];
  constructor(private customerService: CustomerService, private router:Router, public createCustomerService:CreateCustomerService) { }

  DetailsView(){
    this.router.navigate(['/Details-Customer'])
  }

  GetCustomersHandler(): void{
    this.customerService.GetCustomers().subscribe(
      {
        next: response => {console.log(response), this.customers = response},
        error: error => {console.log(error),this.loadingSpinner = false},
        complete: () => {console.log("Get Customers Done"),this.loadingSpinner = false}
      }
    )
  }

  DeleteCustomerHandler(id:number): void{
    this.customerService.DeleteCustomer(id).subscribe(
      {
        next: response => this.GetCustomersHandler(),
        error: error => console.log(error),
        complete: () => console.log("customer Delete")
      }
    )
  }

  ngOnInit(): void {
    this.GetCustomersHandler()
  }

}
