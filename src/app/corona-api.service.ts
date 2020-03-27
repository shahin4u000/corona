
import { CoronaAll } from "./classes/coronaAll";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class CoronaApiService {
  rootURL = "https://corona.lmao.ninja/";
  covid19 = "https://covid19.mathdro.id/";

  constructor(private httpClient: HttpClient) {}

  public coronaAll(): Observable<CoronaAll> {
    return this.httpClient.get(this.covid19 + "api").pipe(
      map(res => {
        let coronaAll: CoronaAll;
        coronaAll = {
          cases: res["confirmed"]["value"],
          deaths: res["deaths"]["value"],
          recovered: res["recovered"]["value"],
          updated: new Date()
        };
        return coronaAll;
      })
    );
  }

  public coronaAllCountries(): Observable<any> {
    return this.httpClient.get(this.rootURL + "countries");
  }

  public coronaHistory(): Observable<any> {
    return this.httpClient.get(this.covid19 + "api/daily").pipe(
      map((arr: any)=> {
        return arr.map(sub => {

          return {
            totalConfirmed: sub.totalConfirmed,
            totalDeathPerDay: sub.deaths.total,
            dates: sub.reportDate
          };
        });
      })
    );
  }
}

/* public coronaAll(): Observable<any> {
  return this.httpClient.get(this.rootURL + "all");
}
public coronaAllCountries(): Observable<any> {
  return this.httpClient.get(this.rootURL + "countries");
} 


public coronaAllCountries(): Observable<any> {
    return this.httpClient.get(this.covid19 + "countries");
  }
*/
