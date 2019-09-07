import { Component, OnInit, ElementRef, HostListener, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  

  constructor(private render:Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    
   const parent : HTMLElement =  document.getElementById('bekraa');

  //  let xsize:number = parent.style.backgroundPositionX ;
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
