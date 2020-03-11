import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceItemDetailsComponent } from './price-item-details.component';

describe('PriceItemDetailsComponent', () => {
  let component: PriceItemDetailsComponent;
  let fixture: ComponentFixture<PriceItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
