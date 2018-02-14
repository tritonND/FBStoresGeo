import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeodistPage } from './geodist';

@NgModule({
  declarations: [
    GeodistPage,
  ],
  imports: [
    IonicPageModule.forChild(GeodistPage),
  ],
})
export class GeodistPageModule {}
