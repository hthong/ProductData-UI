import { Component, OnInit } from '@angular/core';
import { Item } from '@app/shared/model/item';
import { DataService } from '@app/shared/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  isSaved : boolean = false;
  itemFormGroup: FormGroup;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {

    this.itemFormGroup = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      cost: new FormControl()
    });   
  }  

  saveItem(formValues){
    console.log(formValues);
    this.dataService
      .CreateItem(formValues)
      .subscribe( data => this.router.navigate(['/home', data.id]) );
  }

  closeAlert(){
    this.isSaved = false;
  }
}
