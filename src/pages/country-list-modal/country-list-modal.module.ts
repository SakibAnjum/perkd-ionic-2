import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountryListModal } from './country-list-modal';

@NgModule({
  declarations: [
    CountryListModal,
  ],
  imports: [
    IonicPageModule.forChild(CountryListModal),
  ],
  exports: [
    CountryListModal
  ]
})
export class CountryListModalModule {}
