import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionDailyDialogComponent } from './option-daily-dialog.component';

describe('OptionClDailyComponent', () => {
  let component: OptionDailyDialogComponent;
  let fixture: ComponentFixture<OptionDailyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionDailyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionDailyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
