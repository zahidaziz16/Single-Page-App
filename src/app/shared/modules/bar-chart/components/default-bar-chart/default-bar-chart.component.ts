import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-bar-chart',
  templateUrl: './default-bar-chart.component.html',
  //styleUrls: ['./default-feeds-card.component.scss']
})
export class DefaultBarChartComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {}

  }


