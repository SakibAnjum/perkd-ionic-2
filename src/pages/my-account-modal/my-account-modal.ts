import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { ChangePasswordModal } from '../change-password-modal/change-password-modal';
import { UpdateMobileNumberModal } from '../update-mobile-number-modal/update-mobile-number-modal';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-my-account-modal',
  templateUrl: 'my-account-modal.html',
})
export class MyAccountModal {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountModal');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  goToChangePassword() {
    this.navCtrl.push(ChangePasswordModal);
  }

  goToUpdateMobileNumber() {
    this.navCtrl.push(UpdateMobileNumberModal);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
