import { Component } from '@angular/core';

import { DiscoverPage } from '../discover/discover';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { PreferencesPage } from '../preferences/preferences';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DiscoverPage;
  tab3Root = ContactPage;
  tab4Root = ProfilePage;
  tab5Root = PreferencesPage;

  constructor() {

  }
}
