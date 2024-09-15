import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'custom-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() addedClass!: string;
  @Input() borderClass!: string;
  @Input() cardTemplate!: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }
}
