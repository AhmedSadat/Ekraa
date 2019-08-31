import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, fadeInLeft, bounceInLeft } from 'ng-animate';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { filter } from 'rxjs/operators';
import { WOW } from 'wowjs/dist/wow.min';



@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  // animations: [
  //   trigger('bounce', [transition('* => *', useAnimation(bounceInLeft))])
  // ]
})
export class DescriptionComponent implements OnInit {

  ngAfterViewInit(){

    new WOW().init();
  }
  

  ngOnInit() {
  }

  constructor(private router: Router, private wowService: NgwWowService){
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  // ).subscribe(() => {
  //   this.wowService.init();
  // });
      

  }
  

}
