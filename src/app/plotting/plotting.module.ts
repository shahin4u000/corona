import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { NgxEchartsModule } from "ngx-echarts";
@NgModule({
  declarations: [BarChartComponent, PieChartComponent],
  imports: [CommonModule, NgxEchartsModule],
  exports: [BarChartComponent, PieChartComponent]
})
export class PlottingModule {}
