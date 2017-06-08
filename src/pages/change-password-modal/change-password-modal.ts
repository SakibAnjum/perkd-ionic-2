import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-change-password-modal',
  templateUrl: 'change-password-modal.html',
})
export class ChangePasswordModal {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountModal');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
