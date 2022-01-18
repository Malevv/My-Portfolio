import { Component, OnInit } from '@angular/core';



let text = document.getElementById('text');
let newDom = '';
let animationDelay = 6;

@Component({
    selector: 'app-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

//     constructor() {
//         text: 0;
//     }

//     ngOnInit() => {

//     for (let _i = 0; _i < text.innerText.length; _i++) {
//         newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
//     }

//     text.innerHTML = newDom;

//     length = text.children.length;

//     for (let i = 0; i < length; i++) {
//         text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
//     }



}




