import { Component, OnInit } from '@angular/core';
import { SpaService } from './spa.service';
@Component({
    selector: 'app-spa',
    templateUrl: './spa.component.html',
    providers: [SpaService]
  })

  export class SpaComponent implements OnInit {
    constructor(public service: SpaService) {}

    public feeds = [];
    public octFeeds:number;
    public novFeeds:number;
    public chartMetadata:any;

    ngOnInit() {
        this.service.getFeedsByMonth('2018-10-15').subscribe((response)=>{
            this.feeds = response.articles;
        });

        this.service.getFeedsByMonth('2018-10-15').subscribe((response)=>{
            
            this.octFeeds = response.totalResults;

            this.service.getFeedsByMonth('2018-11-01').subscribe((response)=>{
                this.novFeeds = response.totalResults;

                this.octFeeds = this.octFeeds - this.novFeeds;

                console.log("Oct Feeds = ",this.octFeeds," Nov Feeds = ",this.novFeeds);

                this.chartMetadata = {
                    type : 'bar',
                    legend: true,
                    options: {
                        scaleShowVerticalLines: false,
                        responsive: true
                    },
                    labels: [
                        'October',
                        'November'
                    ],
                    data: [
                        { data: [this.octFeeds, this.novFeeds], label: 'Feeds Uploaded to https://newsapi.org/' }
                    ]
                }
            })
        });

        

    }
}