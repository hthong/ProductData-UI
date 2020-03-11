import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { DataService } from '../services/data.service';

@Injectable({
    providedIn: 'root'
  })
export class PriceItemListResolver implements Resolve<any>{

    constructor(private dataService: DataService){

    }

    resolve() {
        return this.dataService.GetMaxPriceItems();
    }

}