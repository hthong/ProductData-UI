import { Component, OnInit } from '@angular/core';
import { Item } from 'app/shared/model/item';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Array<Item> = [];
  selectedItem : Item;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService )  { }

  ngOnInit() {
    this.route.data.subscribe(data => this.items = data.items);
  }

  selectItem(item: Item){
    this.selectedItem = item;
  }

  deleteItem(item: Item){
    this.dataService
      .DeleteItem(item)
      .subscribe(_ => this.items.splice(this.items.indexOf(item)));
  }

}
