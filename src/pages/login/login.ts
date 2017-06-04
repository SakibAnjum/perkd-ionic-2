import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, private splashScreen: SplashScreen) {
    this.splashScreen.show();

    this.splashScreen.hide();
  }


  onLogin(form: NgForm) {
      this.navCtrl.push(TabsPage);
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
