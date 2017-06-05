import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { SearchRegionModal } from '../search-region-modal/search-region-modal';

/**
 * Generated class for the SampleModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-discover-cards-modal',
  templateUrl: 'discover-cards-modal.html',
})
export class DiscoverCardsModal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleModal');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  goToSearchRegion() {
    this.navCtrl.push(SearchRegionModal);
  }

}
