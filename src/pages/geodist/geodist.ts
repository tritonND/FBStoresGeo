import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from "@ionic-native/geolocation";
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

 
declare var google;

@IonicPage()
@Component({
  selector: 'page-geodist',
  templateUrl: 'geodist.html',
})
export class GeodistPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any;

  // lng : any;
  // lat : any;
  // end : any;
  // directionsService = new google.maps.DirectionsService;
  // directionsDisplay = new google.maps.DirectionsRenderer;


  constructor(public navCtrl: NavController, public navParams: NavParams, private geos: Geolocation,
  private nativeGeocoder: NativeGeocoder) 
  {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeodistPage');
   // this.initMap();
  this.loadMap();
  this.startNavigating();
  }


  loadMap(){
 
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

}


startNavigating(){
 
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;

  directionsDisplay.setMap(this.map);
  directionsDisplay.setPanel(this.directionsPanel.nativeElement);

  directionsService.route({
      // origin: 'adelaide',
      // destination: 'adelaide oval',
      origin: {lat: 37.77, lng: -122.447},
      destination: {lat: 37.768, lng: -122.511},
      travelMode: google.maps.TravelMode['DRIVING']
  }, (res, status) => {

      if(status == google.maps.DirectionsStatus.OK){
          directionsDisplay.setDirections(res);
      } else {
          console.warn(status);
      }

  });

}


// origin: {lat: 37.77, lng: -122.447},
// destination: {lat: 37.768, lng: -122.511},



//   initMap() {
//     this.geos.getCurrentPosition()
//     .then( (resp)=> {
//      this.lng = resp.coords.longitude;
//      this.lat = resp.coords.latitude;
//      this.map = new google.maps.Map(this.mapElement.nativeElement, {
//       zoom: 7,
//       center: {lat: this.lat, lng:this.lng}
//     });

//     this.nativeGeocoder.reverseGeocode(this.lat, this.lng)
//       .then((result: NativeGeocoderReverseResult) => 
//        {
//          console.log(JSON.stringify(result));
//          console.log('I am here'); 
   
//          console.log(this.lng + " " + this.lat );
//          this.directionsDisplay.setMap(this.map);

//   let myopt = { origin: result, destination: this.end, travelMode: 'DRIVING'};

//  this.directionsService.route( myopt, (response, status) => {
//         if (status === 'OK') {
//           console.log('Got response'); 
//           this.directionsDisplay.setDirections(response);
//         } 
//         else {
//           window.alert('Directions request failed due to ' + status);
//         }

//       });


//    }
//   )
//     .catch((error: any) => console.log(error));
//     });
//   }

  // calculateAndDisplayRoute() {
  //   this.directionsService.route({
  //     // origin: this.start,
  //     // destination: this.end,
  //     travelMode: 'DRIVING'
  //   }, (response, status) => {
  //     if (status === 'OK') {
  //       this.directionsDisplay.setDirections(response);
  //     } else {
  //       window.alert('Directions request failed due to ' + status);
  //     }
  //   });
  // }



}
