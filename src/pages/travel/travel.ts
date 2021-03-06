import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AddCardModal} from "../add-card-modal/add-card-modal";

/**
 * Generated class for the AssociationsNonProfits page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-travel',
  templateUrl: 'travel.html',
})
export class TravelPage {
  cards: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.cards = this.getCards();
    console.log(this.cards);
  }

  getCards() {
    return [
      {
        "name": "AARP Card",
        "description": "AARP",
        "imageUrl" : "http://via.placeholder.com/65x35"
      }
    ]
  }

  goToAddCard() {
    this.navCtrl.push(AddCardModal);
  }

}
