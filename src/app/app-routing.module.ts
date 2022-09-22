import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from 'src/components/aboutus/aboutus.component';
import { CustomersComponent } from 'src/components/customers/customers.component';
import { DetailsCustomerComponent } from 'src/components/details-customer/details-customer.component';
import { DetailsFormulaComponent } from 'src/components/details-formula/details-formula.component';
import { FormulaComponent } from 'src/components/formula/formula.component';
import { HomePageComponent } from 'src/components/home-page/home-page.component';
import { ProductComponent } from 'src/components/product/product.component';
import { OrderComponent } from 'src/components/order/order.component';
import { ShopProductComponent } from 'src/components/shop-product/shop-product.component';
import { WarehouseProductComponent } from 'src/components/warehouse-product/warehouse-product.component';


const routes: Routes = 
[
  {path:"Home-Page",component:HomePageComponent},
  {path:"Orders",component:OrderComponent},
  {path:"AboutUs",component:AboutusComponent},
  {path:"Customers",component:CustomersComponent},
  {path:"Details-Customer",component:DetailsCustomerComponent},
  {path:"Details-Formula",component:DetailsFormulaComponent},
  {path:"Product",component:ProductComponent},
  {path:"Formula",component:FormulaComponent},
  {path:"ShopProduct",component:ShopProductComponent},
  {path:"WarehouseProduct",component:WarehouseProductComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
