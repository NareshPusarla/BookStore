import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthserviceGuard } from './authentication.guard';

import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { CartComponent } from './Components/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard/books', pathMatch:'full'},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'books',component:GetallbooksComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'view/:id',component:QuickviewComponent},
  {path:'order',component:OrderPlacedComponent},
  {path:'profile',component:ProfileComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
              {path:'books',component:GetallbooksComponent},
              {path:'view/:id',component:QuickviewComponent},
              {path:'cart',component:CartComponent},
              {path:'wishlist',component:WishlistComponent},
              {path:'order',component:OrderPlacedComponent},
              {path:'profile',component:ProfileComponent},
    ],
    canActivate:[AuthserviceGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
