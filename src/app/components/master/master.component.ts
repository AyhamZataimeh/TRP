import { Component ,  HostListener, ElementRef, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],

  
 
})
export class MasterComponent implements OnInit {

  ngOnInit(): void {
  }
  state = 'hide';
  constructor(public el: ElementRef) { }

  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const componentPosition = this.el.nativeElement.offsetTop
  //   const scrollPosition = window.pageYOffset
  //   if (scrollPosition >= componentPosition - 250) {
  //     this.state = 'show'
  //   } else {
  //     this.state = 'hide'
  //   }

  // }
  pos:  number = 0;

  @HostListener("window:scroll", ["$event"])
onWindowScroll() {
//In chrome and some browser scroll is given to body tag
 this.pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
let max = document.documentElement.scrollHeight;
console.log("pos=",this.pos);
console.log("max=",max);
// if(pos== 2079 ) {

// }


// pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
//  if(pos == max )   {
//  //Do your action here
//  }
}
}
