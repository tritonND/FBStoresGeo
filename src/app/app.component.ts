import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { GeoPage } from '../pages/geo/geo';
import { PgreadPage } from '../pages/pgread/pgread';
import { GeodistPage } from '../pages/geodist/geodist';
// import * as firebase from ‘firebase’;
// import firebase from 'Firebase';
import * as firebase from 'Firebase';
//import {  } from "module";
 
export const config = {
  apiKey: "AIzaSyBjeEG0luJ-J6elIGEg3Oem_rm0k5KuhI8",
  authDomain: "fireapp2-9ba73.firebaseapp.com",
  databaseURL: "https://fireapp2-9ba73.firebaseio.com",
  projectId: "fireapp2-9ba73",
  storageBucket: "",
  messagingSenderId: "117392197923"
 };



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  // rootPage:any = GeoPage;
  //rootPage:any = GeodistPage;

  rootPage:any = PgreadPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    
    });

    firebase.initializeApp(config);
  }
}

