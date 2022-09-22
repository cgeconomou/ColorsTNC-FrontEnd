import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleWarehouseProductModalsService {

  createWarehouseProductModalIsVisible:boolean = false;
  updateWarehouseProductModalIsVisible:boolean = false;
  constructor() { }
}
