import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController  } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import {CustomPopup} from './../popup/custom-popup';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [[Camera]]
})
export class HomePage {

  public base64Image: string;
  public stores:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    private camera: Camera, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.stores = [{name:'Strore One'}, {name:'Strore Two'}, {name:'Strore Tree'}]
    console.log('ionViewDidLoad PurchaseOrder...............................');
  }

public modal: any;
  openModal() {
   this.modal = this.modalCtrl.create(CustomPopup,{takePhoto:this.takePhoto.bind(this), choosePhoto:this.choosePictureFromGallery.bind(this)},
                  {showBackdrop:true, enableBackdropDismiss:true});
   this.modal.present();
 }

  takePhoto() {
      this.takePicture(this.camera.PictureSourceType.CAMERA);
      this.modal.dismiss();
  }
  takePicture(pictureSourceType){
    console.log('this is takePicture ::: method......',pictureSourceType);
    this.camera.getPicture({
        sourceType: pictureSourceType,
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {

  /*  quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false*/
      // imageData is a base64 encoded string
        //this.base64Image = "data:image/jpeg;base64," + imageData;
        let image = 'data:image/jpeg;base64,' + imageData;
        this.base64Image = image;
        //return image;
    }, (err) => {
        console.log(err);
    });
  }

  choosePictureFromGallery(){
      console.log('this is Gallery..................');
      let cameraOptions = {
          sourceType         : this.camera.PictureSourceType.PHOTOLIBRARY,
          destinationType    : this.camera.DestinationType.DATA_URL,
          encodingType       : this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
      };

      this.camera.getPicture(cameraOptions).then((imageData) => {
         let image = 'data:image/jpeg;base64,' + imageData;
         this.base64Image = image;
         this.modal.dismiss();
         return image;
     });
  }
  placeOrder(){
    //code to save order
    alert('your order in saved...');
  }

}
