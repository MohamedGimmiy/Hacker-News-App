import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
//import { Items } from '../models/items';
import { ItemService } from '../services/item/item.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.page.html',
  styleUrls: ['./top-stories.page.scss'],
})
export class TopStoriesPage implements OnInit, OnDestroy {

  //items: Items;
  private subscription: Subscription;

  constructor(private itemService : ItemService) {
    
   }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }


  

}
