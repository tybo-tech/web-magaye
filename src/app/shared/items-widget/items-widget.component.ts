import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../models';

@Component({
  selector: 'app-items-widget',
  templateUrl: './items-widget.component.html',
  styleUrls: ['./items-widget.component.scss']
})
export class ItemsWidgetComponent implements OnInit {
  @Input() items: CardModel[];
  @Input() actionName: string;

  constructor() { }

  ngOnInit() {
  }

}
