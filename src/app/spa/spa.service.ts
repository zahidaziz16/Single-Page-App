import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpaService {

  constructor(private http: HttpClient) {
      //API key : 5f9c5851af214f67b123ea357d502dc5
  }

  getFeeds(): Observable<any>{
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from=2018-10-01&sortBy=title&apiKey=5f9c5851af214f67b123ea357d502dc5');
  }

  getFeedsByMonth(data): Observable<any>{
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from='+data+'&sortBy=title&apiKey=5f9c5851af214f67b123ea357d502dc5');
  }

  getFeedsSortBy(sort): Observable<any>{
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from=2018-10-15&sortBy='+sort+'&apiKey=5f9c5851af214f67b123ea357d502dc5');
  }

}