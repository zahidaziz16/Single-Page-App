import { Component,Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.scss']
})
export class DefaultTableComponent implements OnInit, OnChanges {
  @Input() tableStructure;
  @Input() data;
  @Input() keyword;

  constructor() { }

  tableDataBak = [];
  row = [];

  ngOnInit() {
    //this.tableDataBak = this.data;
    console.log("Data table : ",this.data);
  }

  ngOnChanges() {
    console.log("keyword : ",this.keyword,this.data);

    this.row = [];
    
    
    if(this.data.length === 0){

      this.data = this.tableDataBak;
    }
    
    for(let rows of this.data){

      for(let val of rows.row){

        if((val.searchable) && (val.value.toLowerCase().indexOf(this.keyword.toLowerCase())!== -1)){

            this.row.push(rows);
            break;
        }

      }
    }

    (this.keyword == "") ? this.data = this.tableDataBak : this.data = this.row;
    console.log("data : ",this.data);

  }

  }


