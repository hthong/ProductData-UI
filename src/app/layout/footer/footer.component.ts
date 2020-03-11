import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: number;

  constructor() { }

  ngOnInit() {
    this.setCurrentYear();
  }

  /** 
  * Automatically update copyright date
  */
  private setCurrentYear() : void {
    const date : Date = new Date();
    this.currentYear = date.getFullYear();    
  }

}
