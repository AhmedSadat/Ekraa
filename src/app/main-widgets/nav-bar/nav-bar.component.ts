import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild('stickyMenu') menuElement: ElementRef;
  elementPosition: any;

  sticky: boolean = false;
  constructor() { }

  ngOnInit() {
     this.elementPosition = this.menuElement.nativeElement.offsetTop;

  }

  @HostListener('window:scroll', ['$event'])
      handleScroll(){
          const windowScroll = window.pageYOffset;
          if(windowScroll >= this.elementPosition){
              this.sticky = true;

          } else {
              this.sticky = false;

          }
      }
}
