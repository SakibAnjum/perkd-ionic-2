import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { MyAccountModal } from '../my-account-modal/my-account-modal'
/**
 * Generated class for the CardInfoModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-card-info-modal',
  templateUrl: 'card-info-modal.html',
})
export class CardInfoModal {
  tabBarElement: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.tabBarElement = document.querySelector('#tabs.show-tabbar');
  }

  onPageDidEnter()
  {

    this.tabBarElement.style.display = 'none';

  }

  onPageWillLeave()
  {

    this.tabBarElement.style.display = 'block';

  }

  ionViewDidLoad() {
    // this.tabBarElement.style.display = 'none';
    console.log('ionViewDidLoad CardInfoModal');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  goToMyAccount() {
    this.navCtrl.push(MyAccountModal);
  }

}
