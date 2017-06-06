import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { DiscoverPage } from '../discover/discover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // constructor() {
  //
  // }

  constructor(public navCtrl: NavController) {
  }

  goToDiscover() {
    this.navCtrl.push(DiscoverPage);
  }

}
