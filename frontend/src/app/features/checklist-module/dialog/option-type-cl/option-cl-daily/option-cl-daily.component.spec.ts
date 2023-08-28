import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionClDailyComponent } from './option-cl-daily.component';

describe('OptionClDailyComponent', () => {
  let component: OptionClDailyComponent;
  let fixture: ComponentFixture<OptionClDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionClDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionClDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
