import { CoronaAllCountries } from './../../classes/corona-all-countries';
import { CoronaApiService } from "./../../corona-api.service";
import { Component, OnInit, Input, ViewChild } from "@angular/core";

@Component({
  selector: "corona-table-view",
  templateUrl: "./corona-table-view.component.html",
  styleUrls: ["./corona-table-view.component.css"]
})
export class CoronaTableViewComponent implements OnInit {
  allCountries: CoronaAllCountries[] = [];
  searchCountry: string = "";
  lastUpdate: Date;
  constructor(public coronaNews: CoronaApiService) {}

  ngOnInit(): void {
    this.getAllCountries()
  }
  getAllCountries() {
    this.coronaNews.coronaAllCountries().subscribe((results: any[]) => {
      this.allCountries = results.sort((a, b) => b.cases - a.cases);
    });
  }
}
