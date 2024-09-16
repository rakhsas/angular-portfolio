import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { HomeRoutingModule } from './home.routing';
import { LucideAngularModule, Facebook, Twitter, Linkedin, Github, ArrowDownToLine } from 'lucide-angular';
import { SharedModule } from "../shared/shared.module";
import { WorksModule } from '../works/works.module';



@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LucideAngularModule.pick({ Facebook, Twitter, Linkedin, Github, ArrowDownToLine }),
    SharedModule,
    WorksModule
]
})
export class HomeModule { }
