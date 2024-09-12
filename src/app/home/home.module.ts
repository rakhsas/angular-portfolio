import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { HomeRoutingModule } from './home.routing';
import { LucideAngularModule, Facebook, Twitter, Linkedin, Github, ArrowDownToLine } from 'lucide-angular';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LucideAngularModule.pick({ Facebook, Twitter, Linkedin, Github, ArrowDownToLine }),
    SharedModule
]
})
export class HomeModule { }
