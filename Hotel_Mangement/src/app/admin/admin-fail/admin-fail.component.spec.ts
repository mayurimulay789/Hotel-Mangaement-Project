import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFailComponent } from './admin-fail.component';

describe('AdminFailComponent', () => {
  let component: AdminFailComponent;
  let fixture: ComponentFixture<AdminFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
