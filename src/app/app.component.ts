import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var ZohoSalesIQ: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }
  initializeApp() {
    console.log("TestAppLog");
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        ZohoSalesIQ.printDebugLogsForAndroid(true);
        ZohoSalesIQ.init(
          'SBLVEwiOclHRHMsKYKJlKhyxr8WbuclUCjvd0sd344VdQSg9Hz2jzpmPLuAHlVkD8ct61PWwBJY%3D',
          'SBLVEwiOclFb4aP%2Fq%2FTePzou%2FbSYHYifLtq%2Ffip%2Br70bx62V5en3qrUigSbs1mNOtnhFJN4moD3wJZUBhCcDtmW7e4bgsIgxMeTz5HOQG8YociBRDE0Pog%3D%3D'
        );
      } 
      else if (this.platform.is('ios')) {
        ZohoSalesIQ.init(
          '<YOUR_IOS_APP_KEY>',
          '<YOUR_IOS_ACCESS_KEY>'
        );
      }
    });
    ZohoSalesIQ.showLauncher(true);
  }
}
