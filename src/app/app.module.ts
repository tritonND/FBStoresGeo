import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Geolocation } from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GeoPage } from '../pages/geo/geo';
import { GeodistPage } from '../pages/geodist/geodist';
import * as firebase from 'Firebase';
import { GoogleMaps, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
 
import { DatePicker } from '@ionic-native/date-picker';
import { PgreadPage } from '../pages/pgread/pgread';
import { File } from '@ionic-native/file';


@NgModule({
  declarations: [
    MyApp,
    HomePage, GeoPage, GeodistPage, PgreadPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, GeoPage, GeodistPage, PgreadPage
  ],
  providers: [
    StatusBar, DatePicker,
    SplashScreen, Geolocation, Device, GoogleMaps, NativeGeocoder, File, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
