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

    public dropdownData = [
        {
            name:'Author',
            value: 'author'
        },
        {
            name:'Date',
            value: 'publishedAt'
        },
        {
            name:'Title',
            value: 'title'
        },
    ]

    ngOnInit() {
        this.service.getFeedsByMonth('2018-10-15').subscribe((response)=>{
            this.feeds = response.articles;
        });

        this.service.getFeedsByMonth('2018-10-15').subscribe((response)=>{
            
            this.octFeeds = response.totalResults;

            this.service.getFeedsByMonth('2018-11-01').subscribe((response)=>{
                this.novFeeds = response.totalResults;

                this.octFeeds = this.octFeeds - this.novFeeds;

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

    onDropdownListener(data){
        this.service.getFeedsSortBy(data).subscribe((response)=>{
            this.feeds = response.articles;
        });
    }
}