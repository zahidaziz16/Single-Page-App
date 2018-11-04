import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFeedsCardsComponent } from './components/default-feeds-card/default-feeds-card.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DefaultFeedsCardsComponent],
  exports:[DefaultFeedsCardsComponent]
})
export class FeedsCardModule { }
