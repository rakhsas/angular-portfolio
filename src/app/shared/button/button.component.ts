import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ButtonModel } from '../models/button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonConfig: ButtonModel | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
