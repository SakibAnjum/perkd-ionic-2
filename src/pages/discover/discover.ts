import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AssociationsNonProfits } from '../associations-non-profits/associations-non-profits';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {

  constructor(public navCtrl: NavController) {

  }

  goToAssociationsNonProfits() {
    this.navCtrl.push(AssociationsNonProfits);
  }

}
