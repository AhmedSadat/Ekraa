import { Component, OnInit } from '@angular/core';
import  data_json  from '../../Book.json';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   index=0;

   Pages={}
   BooksName=data_json.BookName

  constructor() {

  console.log(data_json)
}

  ngOnInit() {
    this.Pages=data_json.pages[this.index]
  }

  selectNext(){

    if(data_json.pages.length-1===this.index){
      this.index=0
    }else this.index ++

    this.Pages=data_json.pages[this.index]


  }

  selectPrevious(){


    if(this.index-1<=0){


    }else this.index --

    this.Pages=data_json.pages[this.index]

  }



}
