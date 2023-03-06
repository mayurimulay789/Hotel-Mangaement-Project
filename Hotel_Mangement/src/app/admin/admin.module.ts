import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewHotelsComponent } from './view-hotels/view-hotels.component';



@NgModule({
  declarations: [
    AdminComponent,
    ViewHotelsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
})
export class AdminModule { }
