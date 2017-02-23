import { Component } from '@angular/core';
import {COMPANIES,Company} from '../../models/company.model';
import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  page : any
  companies : Company[] = COMPANIES;
  constructor(public navCtrl: NavController) {
    this.page = Page2;
  }

}
