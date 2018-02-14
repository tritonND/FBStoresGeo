import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

  
declare var google;
@IonicPage()
@Component({
  selector: 'page-geo',
  templateUrl: 'geo.html',
})
export class GeoPage {

  map : any;
  // lat : any;
  // lng : any;

  lat = 6.320349;
  lng = 6.623019;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation,
  private nativeGeocoder : NativeGeocoder) {
   // this.loadMap();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeoPage');
    this.loadMap();
  }


  loadMap() {

    console.log('MapEntry function');
  
    
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 6.320349,
          lng: 5.623019
        },
        zoom: 20,
        tilt: 30
      }
    };

    this.geolocation.getCurrentPosition()
    .then((resp)=>{
    
     console.log(resp.coords.latitude);
     console.log(resp.coords.longitude);

   console.log('MapEntry: Got here');
   this.map = GoogleMaps.create('map_canvas', mapOptions);

   this.map.one(GoogleMapsEvent.MAP_READY)
     .then(() => {
       console.log('Map is ready!');
       
       this.map.addMarker({
         title: 'Marker Info this is the map content. Latitude',
         icon: 'green',
         animation: 'DROP',
         position: {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
         }
       })
       .then(marker => {
         marker.on(GoogleMapsEvent.MARKER_CLICK)
           .subscribe(() => {
             alert('longitude: '+ this.lng);
             //GoogleMapsEvent.INFO_OPEN
           });
       })
     });




     this.map.one(GoogleMapsEvent.MAP_READY)
     .then(() => {
       console.log('Map is ready! for second point');
       
       this.map.addMarker({
         title: 'Marker Info this is the map content for second point',
         icon: 'blue',
         animation: 'DROP',
         position: {
          lat: this.lat,
          lng: this.lng
         }
       })
       .then(marker => {
         marker.on(GoogleMapsEvent.MARKER_CLICK)
           .subscribe(() => {
             alert('longitude: '+ this.lng);
             //GoogleMapsEvent.INFO_OPEN
           });
       })
     });
    


    });
   
    }


}
