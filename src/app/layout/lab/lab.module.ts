import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabRoutingModule } from './lab-routing.module';
import { TableModule } from '../../shared/modules/table/table.module';
import { SearchModule } from '../../shared/modules/search/search.module';
import { LabComponent } from '../lab/lab.component';

@NgModule({
  imports: [
    CommonModule,
    LabRoutingModule,
    TableModule,
    SearchModule
  ],
  declarations: [LabComponent]
})
export class LabModule { }
