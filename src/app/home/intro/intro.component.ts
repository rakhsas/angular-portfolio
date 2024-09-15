import { Component, OnInit } from '@angular/core';
import { ButtonModel } from 'src/app/shared/models/button.model';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        animate('2s ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateY(40px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class IntroComponent implements OnInit {

  constructor() { }
  downloadBtnConf: ButtonModel = {
    text: {
      content: 'Download CV',
      size: 'text-sm',
      weight: 'font-semibold'
    },
    background: 'bg-primary',
    color: 'text-white',
    rounded: 'rounded-xl',
    icon: 'ArrowDownToLine',
    hoverBackground: 'hover:bg-custom-black'
  }
  ngOnInit(): void {
  }

}
