import { Component, OnInit } from '@angular/core';
import { ButtonModel } from 'src/app/shared/models/button.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
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
