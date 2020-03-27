import { CoronaHistory } from "./../../classes/corona-history";
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Input
} from "@angular/core";

@Component({
  selector: "bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @Input("History") history;
  @Input("InfectedHistory") infectedHistory;
  @Input("DeathHistory") deathHistory;
  options: any = {};
  xAxisData: string[] = [];
  data1: number[] = [];
  data2: number[] = [];
  constructor() {}
  ngOnInit() {
    this.history.forEach(each => {
      this.data1.push(each.totalConfirmed);
      this.data2.push(each.totalDeathPerDay);
      this.xAxisData.push(each.dates);
    });
  }
  ngAfterViewInit(): void {
    console.log(
      "BarChartComponent -> ngOnInit -> this.xAxisData",
      this.xAxisData
    );
    this.options = {
      /* background// ,
      color: [colors.primaryLight, colors.infoLight], */
      legend: {
        data: ["Total Infected", "Recovered"],
        align: "left",
        textStyle: {
          //color: echarts.textColor,
        }
      },
      tooltip: {},
      xAxis: [
        {
          data: this.xAxisData,
          silent: false,
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            lineStyle: {
              //color: echarts.axisLineColor,
            }
          },
          axisLabel: {
            textStyle: {
              //color: echarts.textColor,
            }
          }
        }
      ],
      yAxis: [
        {
          axisLine: {
            lineStyle: {
              //color: echarts.axisLineColor,
            }
          },
          splitLine: {
            lineStyle: {
              //color: echarts.splitLineColor,
            }
          },
          axisLabel: {
            textStyle: {
              // echarts.textColor,
            }
          }
        }
      ],
      series: [
        {
          name: "Total Infected",
          type: "bar",
          data: this.data1,
          animationDelay: idx => idx * 10
        },
        {
          name: "Recovered",
          type: "line",
          data: this.data2,
          animationDelay: idx => idx * 10 + 100
        }
      ],
      animationEasing: "elasticOut",
      animationDelayUpdate: idx => idx * 5
    };
  }
}

/* for (let i = 0; i < 100; i++) {
      this.xAxisData.push("Category " + i);
      this.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      this.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    } */
