import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetBrokerComponent } from './meet-broker.component';

describe('MeetBrokerComponent', () => {
  let component: MeetBrokerComponent;
  let fixture: ComponentFixture<MeetBrokerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetBrokerComponent]
    });
    fixture = TestBed.createComponent(MeetBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
