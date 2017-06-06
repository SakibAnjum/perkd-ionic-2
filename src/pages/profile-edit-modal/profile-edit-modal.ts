import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { DisplayNameModal } from '../display-name-modal/display-name-modal';
import { SelectGenderModal } from '../select-gender-modal/select-gender-modal';
import { SelectBirthDateModal } from '../select-birth-date-modal/select-birth-date-modal';
import { UpdateMobileNumberModal } from '../update-mobile-number-modal/update-mobile-number-modal';

/**
 * Generated class for the SampleModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-edit-modal',
  templateUrl: 'profile-edit-modal.html',
})
export class ProfileEditModal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SampleModal');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  goToDisplayPreferredName() {
    this.navCtrl.push(DisplayNameModal);
  }

  goToSelectGender() {
    this.navCtrl.push(SelectGenderModal);
  }

  goToSelectBirthDate() {
    this.navCtrl.push(SelectBirthDateModal);
  }

  goToUpdateMobileNumberModal() {
    this.navCtrl.push(UpdateMobileNumberModal);
  }

}
