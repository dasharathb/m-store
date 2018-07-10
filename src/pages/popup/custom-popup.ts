import { Component, Renderer } from '@angular/core';
import {   ViewController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'custom-popup',
  templateUrl: 'custom-popup.html'
})
export class CustomPopup {

  text: string;
  public takePhoto:any;
  public choosePhoto:any;

  constructor(public navCtrl: NavController, public renderer: Renderer, public viewCtrl: ViewController, private navParams:NavParams) {
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-popup', true);
    this.takePhoto =  this.navParams.get("takePhoto");
    this.choosePhoto = this.navParams.get("choosePhoto");
  }

  changeParentStatus() {
        this.navCtrl.pop();
        this.takePhoto();
  }
  dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }

}
