import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedserviceService {
  baseurl = 'http://localhost:3000/getAllUsers';
  constructor(private http: HttpClient) {}
  filterSuggestionsFromServer(): Observable<any> {
    return this.http.get(this.baseurl);
  }
}
