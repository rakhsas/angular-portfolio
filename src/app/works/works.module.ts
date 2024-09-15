import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolderComponent } from './holder/holder.component';
import { WorksRoutingModule } from './works-routing.module';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    HolderComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule,
    SharedModule
]
})
export class WorksModule { }
