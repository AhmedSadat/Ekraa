import { Component, OnInit, ElementRef, HostListener, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  onActivate(event) {

       let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
  
  }

  constructor(private render:Renderer2) { }

  ngOnInit() {
  }

//   @HostListener('mousemove', ['$event'])
//   onMouseMove(event: MouseEvent) {
    
//    const parent : HTMLElement =  document.getElementById('bekraa');
  
//   //  console.log(parent) ;
   
//    parent.style.backgroundPositionX = - event.pageX/100  + "px";
//    parent.style.backgroundPositionY = - event.pageY/100000 + "px";
 
                   
//   }

//   @HostListener('mouseleave')
//   onMouseLeave() {
//     const parent : HTMLElement =  document.getElementById('bekraa');

//     parent.style.backgroundPositionX = "center" ;
//     parent.style.backgroundPositionY = "center" ;
  

// }

  

 

  

}
