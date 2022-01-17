import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fn } from 'jquery';

let currentPage: number;
@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit, AfterViewInit {

  constructor(private window : Window) {

  
  }
  i: any;
  content: any;

  ngAfterViewInit(): void {
    /*
     * Main variables
     */
    let content = [{
      title: "About Me.",
      desc: "Welcome to my alphabet soup demo!"
    }, {
      title: "Lorem ipsum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      title: "dolor sit amet",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
      title: "Grouping example",
      desc: [
        ["<u>Grouped text</u>"], " separate text".split("")
      ]
    }];

    let currentPage = 0;

    //generate content
    for (let i = 0; i < this.content.length; i++) {
      //split content letters to array
      for (let obj in this.content[i]) {
        //if string
        if (typeof this.content[i][obj] === "string") {
          this.content[i][obj] = this.content[i][obj].split("");
          continue;
        }
        //if array (grouped text)
        else if (typeof this.content[i][obj] === "object") {
          let toPush = [];
          for (let j = 0; j < this.content[i][obj].length; j++) {
            for (let k = 0; k < this.content[i][obj][j].length; k++) {
              toPush.push(this.content[i][obj][j][k]);
            }
          }
          this.content[i][obj] = toPush;
        }
      }
      //set text to 
      $("#segments").append("<div class=\"letters-wrap mutable\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
      this.setText();
      //clone to data
      $("#segments").append("<div class=\"letters-wrap position-data\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
      this.setText();


      //initial arrangement
      this.arrangeCurrentPage();
      this.scrambleOthers();
      /*
       * Event handlers
       */
      $(this.window).on('resize') {  //statt .resize(function()) wurde es durch .on('resize') ersetzt. (laut Internet)
        this.arrangeCurrentPage();
        this.scrambleOthers();
      };
      $("#soup-prev").hide();
      $("#soup-prev").trigger('click') { //Anstelle von .click(function)) durch trigger("click") ersetzt. 
        $("#soup-next").show();
        currentPage--;
        if (currentPage === 0) {
          $("#soup-prev").hide();
        }
        this.arrangeCurrentPage();
        this.scrambleOthers();
      };
      $("#soup-next").trigger('click') {    ////Anstelle von .click(function)) durch trigger("click") ersetzt. 
        $("#soup-prev").show();
        currentPage++;
        if (currentPage === content.length - 1) {
          $("#soup-next").hide();
        }
        this.arrangeCurrentPage();
        this.scrambleOthers();
      };
    }
  }
  /*
   * Functions
   */
  arrangeCurrentPage() {
    for (let i = 0; i < this.content[currentPage].title.length; i++) {
      $(".mutable:eq(" + currentPage + ") > .soup-title > .letter").eq(i).css({
        left: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset()?.left + "px",
        top: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset()?.top + "px",
        color: "#111",
        zIndex: 9001
      });
    }
    for (let i = 0; i < this.content[currentPage].desc.length; i++) {
      $(".mutable:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).css({
        left: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset()?.left + "px",
        top: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset()?.top + "px",
        color: "#111",
        zIndex: 9001
      });
    }
  }

  setText() {
    let j: any;
    for (j = 0; j < this.content[this.i].title.length; j++) {
      $(".soup-title").last().append("<span class=\"letter\">" + this.content[this.i].title[j] + "</span>")
    };

    for (j = 0; j < this.content[this.i].desc.length; j++) {
      $(".soup-desc").last().append("<span class=\"letter\">" + this.content[this.i].desc[j] + "</span>")
    };

  }


  scrambleOthers() {
    for (let i = 0; i < this.content.length; i++) {
      //don't scramble currentPage
      if (currentPage === i)
        continue;
      let parts = [
        ["title", ".soup-title"],
        ["desc", ".soup-desc"]
      ];
      //apply to .title h1s and .desc ps
      for (let j = 0; j < parts.length; j++) {
        for (let k = 0; k < this.content[i][parts[j][0]].length; k++) {
          //define random position on screen
          let randLeft = Math.floor(Math.random() * $(this.window).width()); // hier kann ich doch eine höhe und breite fest deklarieren und somit die funktion austricksen zb. ich verteile eine weite von 800px und in der nächsten zeile eine höhe von 600px. Dann würde das problem doch beseitigt sein oder nicht?
          let randTop = Math.floor(Math.random() * $(this.window).height());
          //defining boundaries
          let offset = $(".position-data").eq(currentPage).offset();
          let bounds = {
            left: offset.left,
            top: offset.top,
            right: $(this.window).width() - offset.left,
            bottom: $(this.window).height() - offset.top
          };
          let middleX = bounds.left + $(".position-data").eq(currentPage).width() / 2;  //hier wird middleX/Y deklariert aber in keiner funktion verwendet. sollte man daher diese Zeilen entfernen? oder zerstört das dann den code?
          let middleY = bounds.top + $(".position-data").eq(currentPage).height() / 2;
          //finally, apply all the scrambles
          $(".mutable:eq(" + i + ") > " + parts[j][1] + " > .letter").eq(k).css({
            left: randLeft,
            top: randTop,
            color: "#DDD",
            zIndex: "initial"
          });
        }
      }   // ich habe noch kleine Fehler die ich nicht verstehe! das sind erstens die unterstrichenen Klammern und die arrowfunction von zeile 75 - 89 habe ich entfernt, da diese laut internet so eigl funtionieren  müssen. Ob das nun richtig ist kann ich leider nicht ssagen. :P
    }
  }
  ngOnInit(): void {

  }
}

