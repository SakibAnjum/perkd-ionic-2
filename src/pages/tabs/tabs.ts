import { Component } from '@angular/core';

import { DiscoverPage } from '../discover/discover';
import { ScannerPage} from '../scanner/scanner';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { PreferencesPage } from '../preferences/preferences';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DiscoverPage;
  tab3Root = ScannerPage;
  tab4Root = ProfilePage;
  tab5Root = PreferencesPage;

  constructor() {

  }
}
