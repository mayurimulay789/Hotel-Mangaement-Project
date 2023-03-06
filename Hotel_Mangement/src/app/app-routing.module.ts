import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'landing',component:LandingComponent},
   {path:'', redirectTo:'/landing',pathMatch:'full'},

  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
 { path: 'Owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) }, 
 { path: 'User', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, { path: 'User', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, { path: 'User', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
