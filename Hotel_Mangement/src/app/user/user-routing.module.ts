import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserSucessComponent } from './user-sucess/user-sucess.component';
import { UserComponent } from './user.component';
import { UserfailComponent } from './userfail/userfail.component';
import { ViewHotelsComponent } from './view-hotels/view-hotels.component';

const routes: Routes = [{ path: '', component: UserComponent },
{path:'user-sign-up',component:UserSignUpComponent},
{path:'', redirectTo:'/user-sign-up',pathMatch:'full'},
{path:'user-sign-in',component:UserSignInComponent},
{path:'view-hotels',component:ViewHotelsComponent},
{path:'user-sucess',component:UserSucessComponent},
{path:'userfail',component:UserfailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
