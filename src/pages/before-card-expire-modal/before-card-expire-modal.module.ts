import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeforeCardExpireModal } from './before-card-expire-modal';

@NgModule({
  declarations: [
    BeforeCardExpireModal,
  ],
  imports: [
    IonicPageModule.forChild(BeforeCardExpireModal),
  ],
  exports: [
    BeforeCardExpireModal
  ]
})
export class SampleModalModule {}
