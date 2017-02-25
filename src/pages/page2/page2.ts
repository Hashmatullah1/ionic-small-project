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
    // header.style.display = 'none';
    // this.content.resize();
    header.style.position = 'absolute';
    header.style.top = `-${this.content.scrollTop}px`;
    let scrollContent = this.content.getScrollElement();
    scrollContent.style.marginTop = `${400 - this.content.scrollTop}px`;
    this.content.resize();
  }
}
