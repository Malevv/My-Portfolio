import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {
  // images = ['school1.jpg', 'school2.jpg','school3.jpg', 'school4.jpg'];

  // currentIMAGE = 0;
  // showIMAGE = true;

  ngOnInit(): void {
  }
  // ngOnInit() void {
    // this.updateImage();

  // }

  // updateImage() {

  //   setInterval(() => {
  //     this.currentIMAGE++;
  //     this.currentIMAGE = this.currentIMAGE % this.images.length;
  //     this.showIMAGE = false;

  //     setTimeout(() => {
  //       this.showIMAGE = true;
  //     }, 10);
  //   }, 4000);
  // }


}
