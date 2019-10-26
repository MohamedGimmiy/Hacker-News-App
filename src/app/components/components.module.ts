import { CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from './time-ago/time-ago.pipe';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ItemComponent, ItemsComponent, TimeAgoPipe],
  imports: [
    CommonModule, IonicModule // very important to use ionic components
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA], // FIRST step of defining scemas
  exports :[ItemsComponent] // export our pipr
})
export class ComponentsModule { }
