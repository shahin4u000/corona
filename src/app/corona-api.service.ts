import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import * as covid19 from "covid19-api";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class CoronaApiService {
  rootURL = "https://corona.lmao.ninja/";
  worldHistory = "https://covid19.mathdro.id/api/daily";

  constructor(private httpClient: HttpClient) {}

  public coronaAll(): Observable<any> {
    return this.httpClient.get(this.rootURL + "all");
  }
  public coronaAllCountries(): Observable<any> {
    return this.httpClient.get(this.rootURL + "countries");
  }

  public coronaRecovredHistory(): Observable<any> {
    let deathHistory = [];
    let recoveredHistory = [];

    return this.httpClient.get(this.worldHistory);
  }

  dailyForecast() {
    return this.httpClient.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      .pipe(map(result => result));
      
  }
}
