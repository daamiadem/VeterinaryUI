import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TreatmentListComponent } from "./treatment-list.component";

const routes: Routes = [

    {
      path: ':id',
      redirectTo: ':id',
    },
   
    {
      path: '**',
      component: TreatmentListComponent,
      data: {
        title: 'treatment-list',
      }
      , pathMatch: 'full'
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TreatmentListRoutingModule { }