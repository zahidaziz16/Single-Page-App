import { Component, OnInit } from '@angular/core';
import { LabService } from './lab.service';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss'],
  providers: [LabService]
})
export class LabComponent implements OnInit {
  
  constructor(public service: LabService) { }

  public tableStructure = [
    {
      id:'siteName',
      value:'Site Name', 
      type: 'text'
    },
    {
      id:'siteAddress',
      value: 'Site Address',
      type: 'text' 
    },
    {
      id:'siteOption',
      value: '',
      type:'button' 
    }
  ]

  public tableSearchMetadata = {
    input:{
      text:{
        placeholder:'Search any keywords'
      },
      button:{
        class:'btn-primary',
        title:{
          text:'Search'
        },
        icon:{
          isShow:true,
          class: 'fa-search'
        }
      }
    }
  }

  public tableData = [];
  public tableDataBak = [];
  tableKeyword;
  public row = [];
  public sites = [];

  ngOnInit() {

    this.service.getSites().subscribe((response) =>{
      this.sites = response.data.items;
      for (let entry of response.data.items) {
          this.tableData.push(
            {
                row:[
                  {
                    id : 'siteName',
                    value : entry.site.siteName,
                    type: 'text',
                    searchable:true
                  },{
                    id : 'siteAddress',
                    value : entry.address.adrStreetName,
                    type:'text',
                  },
                  {
                    id : 'siteOption',
                    value : 'Edit',
                    type: 'button',
                    searchable:false
                  }
                ]
            }
            
          )
      }

      this.tableDataBak = this.tableData;
      console.log(this.tableData);
    });
    
  }

  flag = false;


  onSingleSearchListener(data){
    this.tableKeyword = data;
  //   this.row = [];

  //   this.tableKeyword = data;

  //   if(this.tableData.length === 0){

  //     this.tableData = this.tableDataBak;
  //   }
    
  //   for(let rows of this.tableData){

  //     for(let val of rows.row){

  //       if((val.searchable) && (val.value.toLowerCase().indexOf(data.toLowerCase())!== -1)){

  //          this.row.push(rows);
  //          break;
  //       }

  //     }
  //   }

  //   (data == "") ? this.tableData = this.tableDataBak : this.tableData = this.row;

  // }
  }

}
