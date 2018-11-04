import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { DefaultBarChartComponent } from './components/default-bar-chart/default-bar-chart.component'

@NgModule({
  imports: [
    CommonModule,
    Ng2Charts
  ],
  declarations: [DefaultBarChartComponent],
  exports:[DefaultBarChartComponent]
})
export class BarChartModule { }
