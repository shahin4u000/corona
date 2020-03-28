import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoronaGeneralInfoComponent } from './corona-general-info/corona-general-info.component';
import { CoronaTableViewComponent } from './corona-table-view/corona-table-view.component';



@NgModule({
  declarations: [CoronaGeneralInfoComponent, CoronaTableViewComponent],
  imports: [
    CommonModule
  ],
  exports: [CoronaGeneralInfoComponent, CoronaTableViewComponent]
})
export class CoronaModule { }
