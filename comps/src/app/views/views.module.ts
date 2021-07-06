import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { StatComponent } from './stat/stat.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    StatComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ],
  exports: [HomeComponent]
})
export class ViewsModule { }
