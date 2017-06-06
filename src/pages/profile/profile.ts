import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfileEditModal } from "../profile-edit-modal/profile-edit-modal";

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }

  goToEdit() {
    this.navCtrl.push(ProfileEditModal);
  }

}
