import { Component, OnInit,Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { TimeAgoPipe } from 'src/app/components/time-ago/time-ago.pipe';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item : Item; // added as an input for displaying one item

  constructor() { 
  }

  ngOnInit() {

  }

}
