import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AssociationsNonProfitsPage } from '../associations-non-profits/associations-non-profits';
import { ChildrenPage } from '../children/children';
import { FashionAccessoriesPage } from '../fashion-accessories/fashion-accessories';
import { FoodBeveragesPage } from '../food-beverages/food-beverages';
import { HealthBeautyPage } from '../health-beauty/health-beauty';
import { LifestyleServicesPage } from '../lifestyle-services/lifestyle-services';
import { MallsDepartmentStoresPage } from '../malls-department-stores/malls-department-stores';
import { TravelPage } from '../travel/travel';
import { AddCustomCardModal } from '../add-custom-card-modal/add-custom-card-modal';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {

  constructor(public navCtrl: NavController) {

  }

  goToAssociationsNonProfits() {
    this.navCtrl.push(AssociationsNonProfitsPage);
  }

  goToChildren() {
    this.navCtrl.push(ChildrenPage);
  }

  goToFashionAccessories() {
    this.navCtrl.push(FashionAccessoriesPage);
  }

  goToFoodBeverages() {
    this.navCtrl.push(FoodBeveragesPage);
  }

  goToHealthBeauty() {
    this.navCtrl.push(HealthBeautyPage);
  }

  goToLifestyleServices() {
    this.navCtrl.push(LifestyleServicesPage);
  }

  goToMallsDepartmentStores() {
    this.navCtrl.push(MallsDepartmentStoresPage);
  }

  goToTravel() {
    this.navCtrl.push(TravelPage);
  }

  goToAddCustomCard() {
    this.navCtrl.push(AddCustomCardModal);
  }

}
