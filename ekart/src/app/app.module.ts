// ============ User Panel==============//
// # Shared
import { HeaderComponent } from './userPanel/header/header.component';
import { TopheaderComponent } from './userPanel/topheader/topheader.component';
import { TopMenuComponent } from './userPanel/header/top-menu/top-menu.component';
import { MainMenuComponent } from './userPanel/header/main-menu/main-menu.component';
import { FooterComponent } from './userPanel/footer/footer.component';
// # Components
import { AppComponent } from './app.component';
import { ContainerComponent } from './userPanel/container/container.component';
import { SearchComponent } from './userPanel/container/search/search.component';
import { ProductlistComponent } from './userPanel/container/productlist/productlist.component';
import { ProductComponent } from './userPanel/container/productlist/product/product.component';
import { FilterComponent } from './userPanel/container/productlist/filter/filter.component';
import { ProductDetailsComponent } from './userPanel/container/product-details/product-details.component';
import { FeaturedBrandsComponent } from './userPanel/container/featured-brands/featured-brands.component';
import { HomeComponent } from './userPanel/home/home.component';
import { NewarrivalComponent } from './userPanel/newarrival/newarrival.component';
import { SaleComponent } from './userPanel/sale/sale.component';
import { CheckoutComponent } from './userPanel/checkout/checkout.component';
import { MyAccountComponent } from './userPanel/myAccount/myAccount.component';
import { MycartComponent } from './userPanel/mycart/mycart.component';
import { Error404Component } from './userPanel/error404/error404.component';

// # Direcives
import { HighligtDirective } from './userPanel/CustomsDirectives/highligt.directive';
import { AppHoverDirective } from './userPanel/CustomsDirectives/app-hover.directive';
import { DisabledProductDirective } from './userPanel/CustomsDirectives/disabled-product.directive';
import { setBackgound } from './userPanel/CustomsDirectives/SetBackground.directive';
// ============End of User Panel==============//

// ============ Admin Panel==============//

import { DashboardComponent } from './adminPanel/main/dashboard/dashboard.component';
import { RegistrationComponent } from './adminPanel/main/registration/registration.component';
import { LoginComponent } from './adminPanel/main/login/login.component';
import { AddProductsComponent } from './adminPanel/main/products/add-products/add-products.component';
import { EditProductComponent } from './adminPanel/main/products/edit-product/edit-product.component';
import { ListOfProductsComponent } from './adminPanel/main/products/list-of-products/list-of-products.component';

// ============ End of Admin Panel==============//

// Modules
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { register } from 'swiper/element/bundle';
register();
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './adminPanel/shared/navbar/navbar.component';
import { AdminfooterComponent } from './adminPanel/shared/adminfooter/adminfooter.component';
import { SidebarComponent } from './adminPanel/shared/sidebar/sidebar.component';
import { UsersSettingComponent } from './adminPanel/main/users-setting/users-setting.component';
import { ToastrModule } from 'ngx-toastr';
import { ContactUsComponent } from './userPanel/contact-us/contact-us.component';
import { OurStoryComponent } from './userPanel/our-story/our-story.component';

// materials//
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { MatButtonModule } from '@angular/material/button';
// import { CarouselModule } from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopheaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductlistComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    FeaturedBrandsComponent,
    setBackgound,
    HighligtDirective,
    AppHoverDirective,
    DisabledProductDirective,
    FooterComponent,
    HomeComponent,
    NewarrivalComponent,
    SaleComponent,
    Error404Component,
    NavbarComponent,
    DashboardComponent,
    RegistrationComponent,
    LoginComponent,
    AddProductsComponent,
    EditProductComponent,
    ListOfProductsComponent,
    SidebarComponent,
    AdminfooterComponent,
    UsersSettingComponent,
    CheckoutComponent,
    MycartComponent,
    MyAccountComponent,
    ContactUsComponent,
    OurStoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
