import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoronaGeneralInfoComponent } from "./corona-general-info/corona-general-info.component";
import { CoronaTableViewComponent } from "./corona-table-view/corona-table-view.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [CoronaGeneralInfoComponent, CoronaTableViewComponent],
  imports: [CommonModule,FormsModule,ReactiveFormsModule, Ng2SearchPipeModule],
  exports: [CoronaGeneralInfoComponent, CoronaTableViewComponent]
})
export class CoronaModule {}
