import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMonthlyDialogComponent } from './option-monthly-dialog.component';

describe('OptionMonthlyDialogComponent', () => {
  let component: OptionMonthlyDialogComponent;
  let fixture: ComponentFixture<OptionMonthlyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionMonthlyDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionMonthlyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
