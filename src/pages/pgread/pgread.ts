import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
 

/**
 * Generated class for the PgreadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pgread',
  templateUrl: 'pgread.html',
})
export class PgreadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker) {
  }

showDate(){
  this.datePicker.show({
    date: new Date(),
    mode: 'date',
   // androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
   androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
  //  titleText : "Choose Date",
  //  cancelText : "Close",
  //  okText : "Choose",
  //  minDate : "20/01/2018",
   allowFutureDates : true
  }).then(
    (date) => {console.log('Got date: ', date);
     alert("The date is " + date);},
    err => console.log('Error occurred while getting date: ', err)
  );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PgreadPage');

  }

}
