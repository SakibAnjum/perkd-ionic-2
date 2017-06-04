import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { PreferencesPage } from '../pages/preferences/preferences';
// import { BeforeCardExpirePage } from '../pages/before-card-expire/before-card-expire';
import { TabsPage } from '../pages/tabs/tabs';
import { SampleModal } from '../pages/sample-modal/sample-modal';
import { CountryListModal } from '../pages/country-list-modal/country-list-modal';
import { BeforeCardExpireModal } from '../pages/before-card-expire-modal/before-card-expire-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    CountryListModal,
    SampleModal,
    AboutPage,
    ContactPage,
    HomePage,
    ProfilePage,
    PreferencesPage,
    BeforeCardExpireModal,
    // BeforeCardExpirePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
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
    AboutPage,
    ContactPage,
    HomePage,
    ProfilePage,
    PreferencesPage,
    BeforeCardExpireModal,
    // BeforeCardExpirePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
