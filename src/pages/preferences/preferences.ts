import { Component, ViewChild } from '@angular/core';

import {  NavController } from 'ionic-angular';

import { BeforeCardExpireModal } from '../before-card-expire-modal/before-card-expire-modal';

@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html'
})
export class PreferencesPage {

  constructor(public navCtrl: NavController) { }

  goToBeforeCardExpire() {
    this.navCtrl.push(BeforeCardExpireModal);
  }

  }
