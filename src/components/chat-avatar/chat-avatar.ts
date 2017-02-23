import { Component, Input } from '@angular/core';

/*
  Generated class for the ChatAvatar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'chat-avatar',
  templateUrl: 'chat-avatar.html',
})
export class ChatAvatarComponent {

  @Input() isOnline:boolean;
  @Input() src:string;
  constructor() {
    console.log('Hello ChatAvatar Component');
    if(!this.src){
      this.src ='assets/user_generic.png';
    }
  }

}
