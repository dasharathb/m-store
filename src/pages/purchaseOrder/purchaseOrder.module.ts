import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseOrder } from './purchaseOrder';

@NgModule({
  declarations: [
    PurchaseOrder,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseOrder),
  ],
})
export class PurchaseOrderModule {}
