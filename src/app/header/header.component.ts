import { Component, OnInit } from '@angular/core';
import { ButtonModel } from '../shared/models/button.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appTitle: string = 'Rakhsas';
  constructor(
  ) { }
  HireMeBrn!: ButtonModel;
  routes: any = [
    {
      name: 'Home',
      route: '/home'
    },
    {
      name: 'About',
      route: '/about'
    },
    {
      name: 'Services',
      route: '/services'
    },
    {
      name: 'Works',
      route: '/works'
    },
    {
      name: 'Contact',
      route: '/contact'
    }
  ]

  ngOnInit(): void {
    this.HireMeBrn = {
      background: 'bg-transparent',
      hoverBackground: 'hover:bg-primary',
      color: 'text-white',
      rounded: 'rounded-3xl',
      text: {
        content: 'Hire Me',
        size: 'text-sm',
        weight: 'font-medium'
      },
      icon: 'Handshake'
    }
  }

}
