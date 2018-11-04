import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-default-dropdown',
  templateUrl: './default-dropdown.component.html',
})
export class DefaultDropdownComponent implements OnInit {
  @Input() data;
  @Output() dropdownListener = new EventEmitter;

  constructor() { }

  ngOnInit() {}

  onClick(e,data){
    this.dropdownListener.emit(data);
  }

  }


