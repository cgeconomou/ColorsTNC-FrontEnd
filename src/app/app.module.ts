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
import { CreateCustomerComponent } from '../components/modals/customer/create-customer/create-customer.component';
import { CreateFormulaComponent } from '../components/modals/formula/create-formula/create-formula.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateFormulaComponent } from 'src/components/modals/formula/update-formula/update-formula.component';
import { UploadPhotoComponent } from 'src/components/upload-photo/upload-photo.component';
import { ProductComponent } from '../components/product/product.component';
import { CreateProductComponent } from '../components/modals/product/create-product/create-product.component';
import { UpdateProductComponent } from '../components/modals/product/update-product/update-product.component';
import { DetailsFormulaComponent } from 'src/components/details-formula/details-formula.component';
import { ShopProductComponent } from '../components/shop-product/shop-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartComponent } from '../components/modals/shop-Products/cart/cart.component';
import { LoadingSpinnerComponent } from 'src/components/loading-Spinner/loadingSpinner.component';
import { ShopProductDetailsComponent } from '../components/modals/shop-Products/shop-product-details/shop-product-details.component';
import { MiniCartViewComponent } from '../components/modals/shop-Products/mini-cart-view/mini-cart-view.component';
import { PaypalButtonsComponent } from '../components/paypal-buttons/paypal-buttons.component';
import { PaypalFormComponent } from '../components/paypal-form/paypal-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../components/footer/footer.component';
import { OrderComponent } from '../components/order/order.component';
import { WarehouseProductComponent } from '../components/warehouse-product/warehouse-product.component';
import { UpdateWarehouseProductComponent } from '../components/modals/warehouse-Products/update-warehouse-product/update-warehouse-product.component'
import { CreateWarehouseProductComponent } from 'src/components/modals/warehouse-Products/create-warehouse-product/create-warehouse-product.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthInterceptor } from 'src/auth/auth.interceptor';




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
    DetailsFormulaComponent,
    ShopProductComponent,
    CartComponent,
    LoadingSpinnerComponent,
    ShopProductDetailsComponent,
    MiniCartViewComponent,
    PaypalButtonsComponent,
    PaypalFormComponent,
    FooterComponent,
    OrderComponent,
    WarehouseProductComponent,
    CreateWarehouseProductComponent,
    UpdateWarehouseProductComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [UploadPhotoComponent,ProductComponent,CreateProductComponent, PaypalFormComponent,AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
