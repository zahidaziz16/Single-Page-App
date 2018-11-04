import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-default-dropdown',
  templateUrl: './default-dropdown.component.html',
})
export class DefaultDropdownComponent implements OnInit {
  @Input() data;
  @Output() dropdownListener = new EventEmitter;

  constructor() { }

  ngOnInit() {
    
    console.log("Data table : ",this.data);
  }

  onClick(e,data){
    console.log("Data sort by : ",data);
    this.dropdownListener.emit(data);
  }

  }


