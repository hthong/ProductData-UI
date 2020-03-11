import { Component, OnInit } from '@angular/core';
import { Item } from '@app/shared/model/item';
import { DataService } from '@app/shared/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  isSaved : boolean = false;
  itemFormGroup: FormGroup;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.itemFormGroup = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      cost: new FormControl()
    });

    let id = +this.route.snapshot.params["id"];
    this.dataService
      .GetItemById(id)
      .subscribe(data=> this.setValues(data));
  }

  setValues(item: Item){  
    this.itemFormGroup.patchValue({
      id: item.id,
      name: item.name,
      cost: item.cost
    })
  }

  saveItem(formValues){
    console.log(formValues);
    this.dataService
      .UpdateItemById(formValues)
      .subscribe( _ => this.isSaved = true);
  }

  closeAlert(){
    this.isSaved = false;
  }
}
