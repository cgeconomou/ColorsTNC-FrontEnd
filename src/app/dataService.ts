import {Injectable } from "@angular/core";
import { Customer } from "src/components/models/customer";

import { Formula } from "src/components/models/formula";



@Injectable()
export class DataService{

   formula!: Formula;
   customer!: Customer;

   SetTransferFormula(data:Formula){
    this.formula = data;
   }

   GetTransferFormula():Formula{
    return this.formula;
   }

   SetTransferCustomer(data:Customer){
      this.customer = data;
   }

   GetTransferCustomer(){
      return this.customer;
   }
}

