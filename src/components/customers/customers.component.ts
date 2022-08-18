import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCustomerService } from '../modals/create-customer/create-customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private router:Router, public createCustomerService:CreateCustomerService) { }

  DetailsView(){
    this.router.navigate(['/Details-Customer'])
  }

  ngOnInit(): void {
  }

}
