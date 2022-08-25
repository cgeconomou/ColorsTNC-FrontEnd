import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NotificationComponent } from '../components/notification/notification.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from '../components/aboutus/aboutus.component';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from '../components/customers/customers.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { DetailsCustomerComponent } from '../components/details-customer/details-customer.component';
import { FormulaComponent } from '../components/formula/formula.component';
import { CreateCustomerComponent } from '../components/modals/create-customer/create-customer.component';
import { CreateFormulaComponent } from '../components/modals/formula/create-formula/create-formula.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateFormulaComponent } from 'src/components/modals/formula/update-formula/update-formula.component';
import { UploadPhotoComponent } from 'src/components/upload-photo/upload-photo.component';
import { ProductComponent } from '../components/product/product.component';
import { CreateProductComponent } from '../components/modals/product/create-product/create-product.component';
import { UpdateProductComponent } from '../components/modals/product/update-product/update-product.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotificationComponent,
    CarouselComponent,
    AboutusComponent,
    CustomersComponent,
    HomePageComponent,
    DetailsCustomerComponent,
    FormulaComponent,
    CreateCustomerComponent,
    CreateFormulaComponent,
    UpdateFormulaComponent,
    UploadPhotoComponent,
    ProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [UploadPhotoComponent,ProductComponent,CreateProductComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
