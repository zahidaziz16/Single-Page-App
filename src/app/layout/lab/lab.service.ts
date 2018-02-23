import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LabService {

  constructor(private http: HttpClient) { }

  getSites(): Observable<any>{
    return this.http.get('assets/mocks/sites.json');
  }

}
