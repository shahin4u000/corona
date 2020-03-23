import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { NgChartjsModule } from 'ng-chartjs';

@NgModule({
  declarations: [BarChartComponent, PieChartComponent],
  imports: [CommonModule,NgChartjsModule],
  exports: [NgChartjsModule, BarChartComponent, PieChartComponent]
})
export class PlottingModule {}
