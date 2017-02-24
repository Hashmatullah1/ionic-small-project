import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ChatTabsPage } from '../pages/chat-tabs/chat-tabs';
import { MenuNotifyComponent } from '../components/menu-notify/menu-notify';
import { ChatAvatarComponent } from '../components/chat-avatar/chat-avatar';
@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    MenuNotifyComponent,
    ChatAvatarComponent,
    ChatTabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ChatTabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
