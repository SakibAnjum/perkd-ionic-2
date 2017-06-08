import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CardInfoModal } from '../card-info-modal/card-info-modal'

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

  goToCardInfo() {
    this.navCtrl.push(CardInfoModal);
  }

}
