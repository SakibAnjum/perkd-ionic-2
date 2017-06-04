import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { ModalController } from 'ionic-angular';
import { CountryListModal } from '../country-list-modal/country-list-modal';
// import { SampleModal } from '../sample-modal/sample-modal';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  onSignup(form: NgForm) {
      this.navCtrl.push(TabsPage);
  }

  onLogin() {
    this.navCtrl.push(LoginPage);
  }

  openModal() {
    let myModal = this.modalCtrl.create(CountryListModal);
    myModal.present();
  }
}
