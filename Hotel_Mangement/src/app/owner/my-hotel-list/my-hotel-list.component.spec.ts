import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHotelListComponent } from './my-hotel-list.component';

describe('MyHotelListComponent', () => {
  let component: MyHotelListComponent;
  let fixture: ComponentFixture<MyHotelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHotelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
