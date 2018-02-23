import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SingleSearchComponent } from './components/single-search/single-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SingleSearchComponent],
  exports: [SingleSearchComponent]
})
export class SearchModule { }
