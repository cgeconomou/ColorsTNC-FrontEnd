import {Injectable } from "@angular/core";

import { Formula } from "src/components/models/formula";



@Injectable()
export class DataService{

   formula!: Formula;
 

   SetTransferObject(data:Formula){
    this.formula = data;
   }

   GetTransferObject():Formula{
    return this.formula;
   }

}

