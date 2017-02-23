import { Component } from '@angular/core';

/*
  Generated class for the MenuNotify component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'menu-notify',
  templateUrl: 'menu-notify.html'
})
export class MenuNotifyComponent {

  notify: boolean;

  constructor() {
    // set true to show red circle on top of menu icon
    this.notify = true;
  }

  toggleMenuNotifier(){
    this.notify=!this.notify;
  }

}
