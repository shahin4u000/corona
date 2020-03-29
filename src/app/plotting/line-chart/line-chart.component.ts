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
  color: any [] = [];
  data1: number[] = [];
  data2: number[] = [];


  constructor() {}
  ngOnInit() {

    let rateOfChange1 = this.infectedHistory;
    let rateOfChange2 = this.deathHistory
    this.history.forEach(each => {
      this.xAxisData.push(each.dates);
    });

    rateOfChange1.sort((a,b)=>{
      this.data1.push(a-b);
    })

    rateOfChange2.sort((a,b)=>{
      this.data2.push(a-b);
    })
  }
  ngAfterViewInit(): void {
    
    
    this.options = {
      /* background// ,
      , */
      color: ["orange", "red"],
      legend: {
        data: ["Rate of change for infected people", "Rate of change for death people"],
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
          name: "Rate of change for infected people",
          type: this.plotType,
          data: this.data1,
          animationDelay: idx => idx * 10
        },
        {
          name: "Rate of change for death people",
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
