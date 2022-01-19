import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';



@Component({
    selector: 'app-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit, AfterViewInit {

    @ViewChild('text') text!: ElementRef;
    newDom = '';
    animationDelay = 60;

    introText = 'Mein Name ist Matthias Märsch, 37 Jahre alt und bin Front End Softwareentwickler. Durch meine Langjährige Berufserfahrung in anderen Bereichen habe ich mich dazu entschieden den Weg in die IT zu gehen, weil mich das schon mein leben Lang begleitet und immer mit freude erfüllt hat. Sei es beim Gaming oder beim benutzen von verschiedenen Softwareprogrammen. ';

    constructor() { }


    ngOnInit(): void {
        this.render();
    }


    ngAfterViewInit(): void {
    }


    // window.onscroll = function(event){...}
    @HostListener('window:scroll', ['$event'])
    scroll(){
        console.log('User scrolled ', window.scrollY);
    }

    render() {
        for (let i = 0; i < this.introText.length; i++) {
            let delay = i * this.animationDelay; // 0, 6, 12, 18, ...
            this.newDom +=
                '<span class="char" style="animation-delay: ' + delay + 'ms;">' +
                 (this.introText[i] == ' ' ? '&nbsp;' : this.introText[i]) +
                '</span>';
        }

        console.log('newDom', this.newDom);
        // this.text.nativeElement.innerHTML = this.newDom;
        // let length = this.text.nativeElement.children.length;

        // for (let i = 0; i < length; i++) {
        //     this.text.nativeElement.children[i].style['animation-delay'] = 
        //     this.animationDelay * i + 'ms';
        // }
    }


}