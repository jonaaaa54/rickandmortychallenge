import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiDataService {

  constructor(private httpClient: HttpClient) {}


  getData(restData: string): Observable<any>{
    return this.httpClient.get<any[]>(restData);
  }
}
