import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        animate('2s ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateY(40px)', offset: 0 }),
          style({ opacity: 2, transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'angular-portfolio-clash';
}
