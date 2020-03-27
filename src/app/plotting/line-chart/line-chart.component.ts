import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input("History") history;
  @Input("InfectedHistory") infectedHistory;
  @Input("DeathHistory") deathHistory;
  @Input() plotType: string;

  options: any = {};
  xAxisData: string[] = [];
  data1: number[] = [];
  data2: number[] = [];


  constructor() {}
  ngOnInit() {
    this.data1 = this.infectedHistory;
    console.log("BarChartComponent -> ngOnInit -> this.data1 ", this.data1 )
    this.data2 = this.deathHistory
    this.history.forEach(each => {
      //this.data1.push(each.totalConfirmed);
      //this.data2.push(each.totalDeathPerDay);
      this.xAxisData.push(each.dates);
    });


  }
  ngAfterViewInit(): void {
    /* let series1 ;
    let series2 ;

    if(this.data1) {
      let series1: SeriesData = {
        name: "Total infected",
        type: this.plotType,
        data: this.data1,
        animationDelay: idx => idx * 10 + 100
      } 
    }

    if(this.data2) {
      let series2: SeriesData = {
        name: "Recovered",
        type: this.plotType,
        data: this.data2,
        animationDelay: idx => idx * 10 + 100
      } 
    } */
    
    this.options = {
      /* background// ,
      color: [colors.primaryLight, colors.infoLight], */
      legend: {
        data: ["Infected", "Recovered"],
        align: "left",
        textStyle: {
          //color: echarts.textColor,
        }
      },
      grid: {
        top: 70,
        bottom: 50
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
            },
            formatter: function(value) {
              return value / 1000 + "k";
            }
          }
        }
      ],
      series: [
        {
          name: "Infected",
          type: this.plotType,
          data: this.data1,
          animationDelay: idx => idx * 10
        },
        {
          name: "Recovered",
          type: this.plotType,
          data: this.data2,
          animationDelay: idx => idx * 10 + 100
        }
      ],
      animationEasing: "elasticOut",
      animationDelayUpdate: idx => idx * 5
    };
  }

}
