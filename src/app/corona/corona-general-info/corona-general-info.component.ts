import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'corona-general-info',
  templateUrl: './corona-general-info.component.html',
  styleUrls: ['./corona-general-info.component.css']
})
export class CoronaGeneralInfoComponent implements OnInit {
  @Input() totalInfected: number;
  @Input() totalRecovered: number;
  @Input() totalDeath: number;
  @Input() lastUpdate: Date;
  constructor() { }

  ngOnInit(): void {
  }

}
