import { Component } from '@angular/core';

import { ActionSheetController, NavController } from 'ionic-angular';

import { CardExpiryModal } from '../card-expiry-modal/card-expiry-modal';
import { OfferExpiryModal } from '../offer-expiry-modal/offer-expiry-modal';
import { DiscoverCardsModal } from '../discover-cards-modal/discover-cards-modal';
import { AdvancedSettingsModal } from '../advanced-settings-modal/advanced-settings-modal';
import {TermsOfServiceModal} from "../terms-of-service-modal/terms-of-service-modal";
import {PrivacyPolicyModal} from "../privacy-policy-modal/privacy-policy-modal";

@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html'
})
export class PreferencesPage {

  // actionSheet: ActionSheet;

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) { }

  goToCardExpiry() {
    this.navCtrl.push(CardExpiryModal);
  }

  goToOfferExpiry() {
    this.navCtrl.push(OfferExpiryModal);
  }

  goToDiscoverCards() {
    this.navCtrl.push(DiscoverCardsModal);
  }

  openSend() {
    // let mode = this.config.get('mode');
    let actionSheet = this.actionSheetCtrl.create({
      title:"Send",
      buttons:[{
        text: 'Skype',
        icon: 'logo-skype',
        handler: () => {
          // window.open('mailto:email@mail.com');
        }
      },{
        text: 'Bluetooth',
        handler: function(){
          console.log("Clicked");
        }
      },{
        text: 'Gmail',
        handler: function(){
          console.log("Clicked");
        }
      },

      ]
    });
    actionSheet.present();
  }

  goToAdvancedSettings() {
    this.navCtrl.push(AdvancedSettingsModal);
  }

  goToTermsOfService() {
    this.navCtrl.push(TermsOfServiceModal);
  }

  goToPrivacyPolicy() {
    this.navCtrl.push(PrivacyPolicyModal);
  }

  }
