import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './userPanel/container/container.component';
import { HomeComponent } from './userPanel/home/home.component';
import { NewarrivalComponent } from './userPanel/newarrival/newarrival.component';
import { SaleComponent } from './userPanel/sale/sale.component';
import { Error404Component } from './userPanel/error404/error404.component';
import { DashboardComponent } from './adminPanel/main/dashboard/dashboard.component';
import { NavbarComponent } from './adminPanel/shared/navbar/navbar.component';
import { RegistrationComponent } from './adminPanel/main/registration/registration.component';
import { LoginComponent } from './adminPanel/main/login/login.component';
import { CheckoutComponent } from './userPanel/checkout/checkout.component';
import { ListOfProductsComponent } from './adminPanel/main/products/list-of-products/list-of-products.component';
import { AddProductsComponent } from './adminPanel/main/products/add-products/add-products.component';
import { EditProductComponent } from './adminPanel/main/products/edit-product/edit-product.component';
import { UsersSettingComponent } from './adminPanel/main/users-setting/users-setting.component';
import { tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { MycartComponent } from './userPanel/mycart/mycart.component';
import { MyAccountComponent } from './userPanel/myAccount/myAccount.component';
import { ContactUsComponent } from './userPanel/contact-us/contact-us.component';
import { OurStoryComponent } from './userPanel/our-story/our-story.component';
// import { AuthguardService } from './userPanel/controllers/authguard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'eKart | Home', component: HomeComponent },
  { path: 'product', title: 'eKart | Product', component: ContainerComponent },
  {
    path: 'new_arrival',
    title: 'eKart | New Arrival',
    component: NewarrivalComponent,
  },
  { path: 'sale', title: 'eKart | Sale', component: SaleComponent },
  {
    path: 'checkout',
    title: 'eKart | Check Out',
    component: CheckoutComponent,
  },
  { path: 'my_cart', title: 'eKart | My Cart', component: MycartComponent },
  {
    path: 'my_account',
    title: 'eKart | My Account',
    component: MyAccountComponent,
  },
  {
    path: 'contact_us',
    title: 'eKart | Contact Us',
    component: ContactUsComponent,
  },
  {
    path: 'our_story',
    title: 'eKart | Our Story',
    component: OurStoryComponent,
  },
  {
    path: 'help',
    component: HomeComponent,
  },

  //=============admin routing============//
  {
    path: 'dashboard',
    title: 'Admin Panel | Dashboard',
    component: DashboardComponent,
  },
  {
    path: 'add_products',
    title: 'Admin Panel | Add product',
    component: AddProductsComponent,
  },
  {
    path: 'edit_products/:id',
    title: 'Admin Panel | Edit product',
    component: EditProductComponent,
  },
  {
    path: 'list-of-products',
    title: 'Admin Panel | list of Products',
    component: ListOfProductsComponent,
  },
  {
    path: 'sign_up',
    title: 'Admin Panel | Registration',
    component: RegistrationComponent,
  },
  {
    path: 'users-setting',
    title: 'Admin Panel | Users Setting',
    component: UsersSettingComponent,
  },

  { path: 'log_in', title: 'Admin Panel | Log in', component: LoginComponent },

  //=============error routing============//

  { path: '**', title: '404 page not found', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
