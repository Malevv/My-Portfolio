import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
    selector: 'app-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit, AfterViewInit {

    @ViewChild('text') text!: ElementRef;
    newDom = '';
    animationDelay = 6;

    introText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Cupiditate incidunt praesentium, rerum voluptatem in reiciendis officia harum repudiandae tempore suscipit ex ea,<br> adipisci ab porro.';

    constructor() { }


    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }


    ngAfterViewInit(): void {

        for (let i = 0; i < this.introText.length; i++) {
            this.newDom += 
            '<span class="char">' + 
            (this.introText[i] == ' ' ? '&nbsp;' : this.introText[i]) +
            '</span>';
        }

        this.text.nativeElement.innerHTML = this.newDom;
        let length = this.text.nativeElement.children.length;

        for (let i = 0; i < length; i++) {
            this.text.nativeElement.children[i].style['animation-delay'] = 
            this.animationDelay * i + 'ms';
        }


    }


}