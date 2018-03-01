import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { File } from "@ionic-native/file";
 

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
   myd : any;
  myDate : any;
  dayss : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private datePicker: DatePicker, private file : File) {
    this.myDate = "";
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
     alert("The date is " + date);
     this.dayss = date;
   },
    err => console.log('Error occurred while getting date: ', err)
  );
}


getDateInp(){
  // this.myd = this.myDate;
   console.log(this.myDate);
   alert(this.myDate);

        
   this.file.checkDir(this.file.dataDirectory, 'Documents')
   .then(() => { 
                console.log('Directory exists');
                alert("Directory exists");
  // this.file.listDir(this.file.dataDirectory, 'Documents')
  // .then((dataDir) => { 
  //   console.log(dataDir);
  //   alert("Directory exists - "+ dataDir);
  //   console.log(dataDir.length);

  // })
  // .catch(err => console.log('Directory doesnt exist 2'));
  
              })
   .catch(err => console.log('Directory doesnt exist'));
 

  
 
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PgreadPage');
    
  }

  ionViewDidChange()
  {
    this.getDateInp();
  }

}
