import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { DefaultDropdownComponent } from './components/default-dropdown/default-dropdown.component'

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [DefaultDropdownComponent],
  exports:[DefaultDropdownComponent]
})
export class UIDropdownModule { }



