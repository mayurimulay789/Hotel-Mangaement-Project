import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfailComponent } from './userfail.component';

describe('UserfailComponent', () => {
  let component: UserfailComponent;
  let fixture: ComponentFixture<UserfailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserfailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserfailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
