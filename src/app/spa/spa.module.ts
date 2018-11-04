import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { SpaRoutingModule } from './spa-routing.module';
import { FeedsCardModule } from '../shared/modules/feeds-card/feeds-card.module';
//import { BarChartModule } from '../shared/modules/bar-chart/bar-chart.module';
import { SpaComponent } from './spa.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2Charts,
    SpaRoutingModule,
    FeedsCardModule,
    //BarChartModule
  ],
  declarations: [SpaComponent]
})
export class SpaModule { }
