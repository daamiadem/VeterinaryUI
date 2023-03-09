import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartistModule } from 'ng-chartist';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DatePipe }    from '../pipe/date.pipe';
import { TreatmentListComponent } from './treatment-list.component';

@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    SharedModule,
    MatCardModule,
    MatGridListModule,
    CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory
    }),
  ],
  declarations: [
    TreatmentListComponent,
  ]
})
export class TreatmentListModule {}
