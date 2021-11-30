import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {
  slider = 0;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const phoneScroller = document.getElementById("scroller");
      const phoneScrollerImages = document.querySelectorAll("#scroller img");

      const pcScroller = document.getElementById("scroller2");
      const pcScrollerImages = document.querySelectorAll("#scroller2 img");

      if (this.slider === 0) {
        this.slider = 1;
        if (phoneScroller)
          phoneScroller.scrollLeft += phoneScrollerImages[this.slider]?.clientWidth;
        if (pcScroller)
          pcScroller.scrollLeft += pcScrollerImages[this.slider]?.clientWidth;
        return;
      }
      if (this.slider === 1) {
        this.slider = 2;
        if (phoneScroller)
          phoneScroller.scrollLeft += phoneScrollerImages[this.slider]?.clientWidth;
        if (pcScroller)
          pcScroller.scrollLeft += pcScrollerImages[this.slider]?.clientWidth;
        return;
      }
      if (this.slider === 2) {
        this.slider = 0;
        if (phoneScroller)
          phoneScroller.scrollLeft = 0;
        if (pcScroller)
          pcScroller.scrollLeft = 0;

        return
      }
    }, 6000)
  }

}
