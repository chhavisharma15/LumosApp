import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettersandgettersProvider } from '../../providers/settersandgetters/settersandgetters';

//@IonicPage()
@Component({
  selector: 'page-medicine',
  templateUrl: 'medicine.html',
})
export class MedicinePage {

  data = { name: ""}

  constructor(public navCtrl: NavController, public navParams: NavParams, public setAndGet: SettersandgettersProvider) {
    console.log(this.setAndGet.UserName)
    this.data.name = this.setAndGet.UserName;
  }

  ionViewDidLoad() {
  }

}
