import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() item : CardModel;

  constructor() { }

  ngOnInit() {
  }

}
