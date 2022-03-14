import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthserviceService } from '../app/service/authentication/authservice.service';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from'./Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {NgxPaginationModule} from 'ngx-pagination';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { CartComponent } from './Components/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DashboardComponent,
    GetallbooksComponent,
    QuickviewComponent,
    CartComponent,
    WishlistComponent,
    OrderPlacedComponent,
    ProfileComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule,
    NgxPaginationModule
  ],
  providers: [
    AuthserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
