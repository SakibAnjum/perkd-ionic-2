import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { DiscoverPage } from '../pages/discover/discover';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { PreferencesPage } from '../pages/preferences/preferences';
// import { BeforeCardExpirePage } from '../pages/before-card-expire/before-card-expire';
import { TabsPage } from '../pages/tabs/tabs';
import { SampleModal } from '../pages/sample-modal/sample-modal';
import { CountryListModal } from '../pages/country-list-modal/country-list-modal';
import { CardExpiryModal } from '../pages/card-expiry-modal/card-expiry-modal';
import { OfferExpiryModal } from '../pages/offer-expiry-modal/offer-expiry-modal';
import { DiscoverCardsModal } from '../pages/discover-cards-modal/discover-cards-modal';
import { SearchRegionModal } from '../pages/search-region-modal/search-region-modal';
import { AdvancedSettingsModal } from '../pages/advanced-settings-modal/advanced-settings-modal';
import { TermsOfServiceModal } from '../pages/terms-of-service-modal/terms-of-service-modal';
import { PrivacyPolicyModal } from '../pages/privacy-policy-modal/privacy-policy-modal';
import { AssociationsNonProfitsPage } from '../pages/associations-non-profits/associations-non-profits';
import { ChildrenPage } from '../pages/children/children';
import { FashionAccessoriesPage } from '../pages/fashion-accessories/fashion-accessories';
import { FoodBeveragesPage } from '../pages/food-beverages/food-beverages';
import { HealthBeautyPage } from '../pages/health-beauty/health-beauty';
import { LifestyleServicesPage } from '../pages/lifestyle-services/lifestyle-services';
import { MallsDepartmentStoresPage } from '../pages/malls-department-stores/malls-department-stores';
import { TravelPage } from '../pages/travel/travel';
import { AddCardModal } from '../pages/add-card-modal/add-card-modal';
import { AddCustomCardModal } from '../pages/add-custom-card-modal/add-custom-card-modal';
import { CardNoModal } from '../pages/card-no-modal/card-no-modal';
import { BarcodePopoverPage } from '../pages/barcode-popover/barcode-popover';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    CountryListModal,
    SampleModal,
    DiscoverPage,
    ContactPage,
    HomePage,
    ProfilePage,
    PreferencesPage,
    CardExpiryModal,
    OfferExpiryModal,
    DiscoverCardsModal,
    SearchRegionModal,
    AdvancedSettingsModal,
    TermsOfServiceModal,
    PrivacyPolicyModal,
    AssociationsNonProfitsPage,
    ChildrenPage,
    FashionAccessoriesPage,
    FoodBeveragesPage,
    HealthBeautyPage,
    LifestyleServicesPage,
    MallsDepartmentStoresPage,
    TravelPage,
    AddCardModal,
    AddCustomCardModal,
    CardNoModal,
    BarcodePopoverPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'ios',
    }, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        // { component: PreferencesPage, name: 'Preferences', segment: preferences' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' }
      ]
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    CountryListModal,
    SampleModal,
    DiscoverPage,
    ContactPage,
    HomePage,
    ProfilePage,
    PreferencesPage,
    CardExpiryModal,
    OfferExpiryModal,
    DiscoverCardsModal,
    SearchRegionModal,
    AdvancedSettingsModal,
    TermsOfServiceModal,
    PrivacyPolicyModal,
    AssociationsNonProfitsPage,
    ChildrenPage,
    FashionAccessoriesPage,
    FoodBeveragesPage,
    HealthBeautyPage,
    LifestyleServicesPage,
    MallsDepartmentStoresPage,
    TravelPage,
    AddCardModal,
    AddCustomCardModal,
    CardNoModal,
    BarcodePopoverPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
