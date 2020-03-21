import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaApiService {
  rootURL = "https://corona.lmao.ninja/"

  constructor(private httpClient: HttpClient) { }

  public coronaAll(): Observable<any>
  {
    return this.httpClient.get(this.rootURL+"all");
  }
  public coronaAllCountries(): Observable<any>
  {
    return this.httpClient.get(this.rootURL+"countries");
  }
}
