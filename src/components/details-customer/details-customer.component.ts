import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/dataService';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css']
})
export class DetailsCustomerComponent implements OnInit {

  selectedCustomer!: Customer;
  halfPath: string = "https://localhost:44321/";
  emptyImageUrl: string = "assets/Images/uploadPhoto.jpg";
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.selectedCustomer = this.dataService.GetTransferCustomer();
    console.log(this.selectedCustomer);
  }

}
