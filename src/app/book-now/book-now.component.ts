import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {

  name:string;
  email:string;
  cell:string;
  message:string;
  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }
}
