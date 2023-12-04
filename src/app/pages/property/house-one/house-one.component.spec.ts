import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseOneComponent } from './house-one.component';

describe('HouseOneComponent', () => {
  let component: HouseOneComponent;
  let fixture: ComponentFixture<HouseOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseOneComponent]
    });
    fixture = TestBed.createComponent(HouseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
