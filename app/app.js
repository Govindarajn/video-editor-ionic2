import {App, Platform} from 'ionic/ionic';
import {TabsPage} from './pages/tabs/tabs';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  constructor(platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      if (window.cordova) {
        if (window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }

        if (window.StatusBar) {
          StatusBar.styleDefault();
        }  
      }
    });
  }
}
