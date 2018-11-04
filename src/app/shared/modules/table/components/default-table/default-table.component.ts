import { Component,Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.scss']
})
export class DefaultTableComponent implements OnInit {
  @Input() tableStructure;
  @Input() data;
  @Input() keyword;

  constructor() { }

  tableDataBak = [];
  row = [];

  ngOnInit() {
    this.tableDataBak = this.data;
    console.log("Data table : ",this.data);
  }

  }


