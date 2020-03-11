import { Component, OnInit } from '@angular/core';
import { PriceItem } from '@app/shared/model/price-item';
import { DataService } from '@app/shared/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-price-item-details',
  templateUrl: './price-item-details.component.html',
  styleUrls: ['./price-item-details.component.css']
})
export class PriceItemDetailsComponent implements OnInit {

  item: PriceItem = new PriceItem();
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let name = this.route.snapshot.params["name"];
    this.dataService
      .GetMaxPriceItemByName(name)
      .subscribe(data=> this.item = data);
  }

}
