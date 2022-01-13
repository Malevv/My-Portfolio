import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit, AfterViewInit {

  items: any;

  ngAfterViewInit(): void {
    this.items = document.querySelectorAll(".timeline li");
    window.addEventListener("load", this.callbackFunc.bind(this));
    window.addEventListener("scroll",this.callbackFunc.bind(this));
  }

  isElementInViewport(el: any) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
  }

  callbackFunc() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.isElementInViewport(this.items[i])) {
        if (!this.items[i].classList.contains("in-view")) {
          this.items[i].classList.add("in-view");
        }
      } else if (this.items[i].classList.contains("in-view")) {
        this.items[i].classList.remove("in-view");
      }
    }
  }




  ngOnInit(): void {
  }

}
