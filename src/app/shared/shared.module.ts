import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { Handshake, LucideAngularModule } from 'lucide-angular';
import { CardComponent } from './card/card.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    ScrollerComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ Handshake })
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    ScrollerComponent,
    SafeUrlPipe
  ]
})
export class SharedModule { }
