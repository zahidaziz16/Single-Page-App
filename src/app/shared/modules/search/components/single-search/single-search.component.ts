import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-single-search',
  templateUrl: './single-search.component.html',
  styleUrls: ['./single-search.component.scss']
})
export class SingleSearchComponent implements OnInit {
  @Input() metadata;
  @Output() singleSearchListener = new EventEmitter;
  inputSearch: string ='';
  constructor() { }

  ngOnInit() {
  }

  onKeydown(e,data){
    
    this.singleSearchListener.emit(data);
  }

  onSearchClick(e,data){
    this.singleSearchListener.emit(data);
  }

}
