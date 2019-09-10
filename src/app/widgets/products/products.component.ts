import { Component, OnInit } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngAfterViewInit(){

    new WOW().init();
  }

  ngOnInit() {
  }

}
