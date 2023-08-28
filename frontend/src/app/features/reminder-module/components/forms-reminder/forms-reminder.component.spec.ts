import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsReminderComponent } from './forms-reminder.component';

describe('FormsReminderComponent', () => {
  let component: FormsReminderComponent;
  let fixture: ComponentFixture<FormsReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsReminderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
