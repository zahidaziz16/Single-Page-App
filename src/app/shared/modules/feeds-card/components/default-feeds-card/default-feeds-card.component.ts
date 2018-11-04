import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-feeds-card',
  templateUrl: './default-feeds-card.component.html',
  styleUrls: ['./default-feeds-card.component.scss']
})
export class DefaultFeedsCardsComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {}

  }


