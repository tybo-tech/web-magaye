import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../models';

@Component({
  selector: 'app-wide-card',
  templateUrl: './wide-card.component.html',
  styleUrls: ['./wide-card.component.scss']
})
export class WideCardComponent implements OnInit {

  @Input() item : CardModel;

  constructor() { }

  ngOnInit() {
  }


}
