import { Component, OnInit, ElementRef, HostListener, ViewChild, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export  default class HomeComponent implements OnInit {

  constructor(private render:Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

   const parent : HTMLElement =  document.getElementById('bekraa');

    let xsize  = parent.style.backgroundPositionX ;
    parent.style.backgroundPositionX = - event.pageX/15  + "px";
    parent.style.backgroundPositionY = - event.pageY/8 + "px";

  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const parent : HTMLElement =  document.getElementById('bekraa');
 parent.style.backgroundPositionX = "center" ;
     parent.style.backgroundPositionY = "center" ;


}


}
