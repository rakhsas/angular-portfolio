import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolderComponent } from './holder/holder.component';
import { WorksRoutingModule } from './works-routing.module';
import { SharedModule } from "../shared/shared.module";
import { ArrowDown, ArrowDownToLine, LucideAngularModule, MoveUpRight } from 'lucide-angular';
import { ProjectComponent } from './project/project.component';



@NgModule({
  declarations: [
    HolderComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    WorksRoutingModule,
    SharedModule,
    LucideAngularModule.pick({ MoveUpRight, ArrowDownToLine })
  ],
  exports: [
    HolderComponent
  ]
})
export class WorksModule { }
