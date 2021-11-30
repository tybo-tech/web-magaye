import { Component, Input, OnInit } from '@angular/core';
import { CardModel } from '../../models';

@Component({
  selector: 'app-wide-card-image-right',
  templateUrl: './wide-card-image-right.component.html',
  styleUrls: ['./wide-card-image-right.component.scss']
})
export class WideCardImageRightComponent implements OnInit {

  @Input() item : CardModel;
  @Input() showPayments : string;

  constructor() { }

  ngOnInit() {
  }


}
