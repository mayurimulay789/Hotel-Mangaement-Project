import { ViewEncapsulation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ViewHotelsComponent } from './view-hotels/view-hotels.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{path:'view-hotels', component:ViewHotelsComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
