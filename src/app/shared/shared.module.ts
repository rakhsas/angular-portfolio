import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { Handshake, LucideAngularModule } from 'lucide-angular';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
  
    ButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ Handshake })
  ],
  exports: [
    ButtonComponent,
    CardComponent
  ]
})
export class SharedModule { }
