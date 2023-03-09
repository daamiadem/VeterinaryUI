import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
    
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'treatment-list',
        loadChildren: () => import('./treatment-list/treatment-list.module').then(m => m.TreatmentListModule)
      },
     
      {
        path: 'pet-information',
        loadChildren: () => import('./pet-information/pet-information.module').then(m => m.PetInformationModule)
      },
      {
        path: 'my-appointments',
        loadChildren: () => import('./my-appointments/my-appointments.module').then(m => m.MyAppointmentsModule)
      }
    ]
  }
];
