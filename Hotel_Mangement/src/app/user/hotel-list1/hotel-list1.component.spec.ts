import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelList1Component } from './hotel-list1.component';

describe('HotelListComponent', () => {
  let component: HotelList1Component;
  let fixture: ComponentFixture<HotelList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelList1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
