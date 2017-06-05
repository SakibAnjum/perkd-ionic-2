import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';

import { BarcodePopoverPage } from '../barcode-popover/barcode-popover';
/**
 * Generated class for the CardNoModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-card-no-modal',
  templateUrl: 'card-no-modal.html',
})
export class CardNoModal {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardNoModal');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  barcodePopover(myEvent) {
    let popover = this.popoverCtrl.create(BarcodePopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
