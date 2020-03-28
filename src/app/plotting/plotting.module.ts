import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { NgxEchartsModule } from "ngx-echarts";
import { LineChartComponent } from './line-chart/line-chart.component';
@NgModule({
  declarations: [BarChartComponent, PieChartComponent, LineChartComponent],
  imports: [CommonModule, NgxEchartsModule],
  exports: [BarChartComponent, PieChartComponent, LineChartComponent]
})
export class PlottingModule {}
