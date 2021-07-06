import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
    path: "",
    component: CollectionsHomeComponent,
    children : [
      {path: "companies", component: CompaniesComponent},
      {path: "partners", component: PartnersComponent},
      {path:"", component: BiographyComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
