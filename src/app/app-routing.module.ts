import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthserviceGuard } from './authentication.guard';

import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard/books', pathMatch:'full'},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'reset',component:ForgotpasswordComponent},
  {path:'books',component:GetallbooksComponent},
  {path:'view/:id',component:QuickviewComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
              {path:'books',component:GetallbooksComponent},
              {path:'view/:id',component:QuickviewComponent},
    ],
    canActivate:[AuthserviceGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
