import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderNotificationsComponent } from './reminder-notifications.component';

describe('ReminderNotificationsComponent', () => {
  let component: ReminderNotificationsComponent;
  let fixture: ComponentFixture<ReminderNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReminderNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
