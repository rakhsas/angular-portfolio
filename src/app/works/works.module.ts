import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolderComponent } from './holder/holder.component';
import { WorksRoutingModule } from './works-routing.module';
import { SharedModule } from "../shared/shared.module";
import { LucideAngularModule, MoveUpRight } from 'lucide-angular';



@NgModule({
  declarations: [
    HolderComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule,
    SharedModule,
    LucideAngularModule.pick({ MoveUpRight })
]
})
export class WorksModule { }
