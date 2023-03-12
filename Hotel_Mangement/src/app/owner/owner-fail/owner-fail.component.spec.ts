import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerFailComponent } from './owner-fail.component';

describe('OwnerFailComponent', () => {
  let component: OwnerFailComponent;
  let fixture: ComponentFixture<OwnerFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerFailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
