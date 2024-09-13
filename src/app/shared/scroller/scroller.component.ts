import { Component, OnInit } from '@angular/core';

interface Company {
  name: string;
  logo: string;
  size: string;
}

@Component({
  selector: 'custom-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent implements OnInit {
  constructor() { }
  companies!: Company[];
  ngOnInit(): void {
    this.companies = [
      {
        name: 'Sews-Cabind',
        logo: './assets/Sews-Cabind.svg',
        size: ''
      },
      {
        name: 'IBM',
        logo: './assets/ibm.svg',
        size: ''

      },
      {
        name: 'Agil-it',
        logo: './assets/agil-it.svg',
        size: 'w-32 h-32'
      },
    ]
  }

}
