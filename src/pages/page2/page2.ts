import { Component,ViewChild } from '@angular/core';

import { NavController, NavParams,Content } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
   @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    
  }
  changeStyle(header:HTMLElement){
    let scrollPos = this.content.scrollTop;
    if(scrollPos<1){
      header.style.display = 'block';
    } else {
      header.style.display = 'none';      
    }
    this.content.resize();
  }
}
