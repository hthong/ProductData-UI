import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PriceItem } from '@app/shared/model/price-item';

@Component({
  selector: 'app-price-items',
  templateUrl: './price-items.component.html',
  styleUrls: ['./price-items.component.css']
})
export class PriceItemsComponent implements OnInit {

  items: Array<PriceItem> = [];

  constructor(private route: ActivatedRoute)  { }

  ngOnInit() {
    this.route.data.subscribe(data => this.items = data.items);
  }  
}
