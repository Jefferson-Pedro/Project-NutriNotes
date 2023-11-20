import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarReminderComponent } from './calendar-reminder.component';

describe('CalendarReminderComponent', () => {
  let component: CalendarReminderComponent;
  let fixture: ComponentFixture<CalendarReminderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarReminderComponent]
    });
    fixture = TestBed.createComponent(CalendarReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
