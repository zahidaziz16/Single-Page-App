import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultTableComponent } from './components/default-table/default-table.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DefaultTableComponent],
  exports:[DefaultTableComponent]
})
export class TableModule { }
