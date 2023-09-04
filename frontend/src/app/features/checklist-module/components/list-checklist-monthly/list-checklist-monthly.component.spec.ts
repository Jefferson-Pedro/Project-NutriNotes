import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChecklistMonthlyComponent } from './list-checklist-monthly.component';

describe('ListChecklistMonthlyComponent', () => {
  let component: ListChecklistMonthlyComponent;
  let fixture: ComponentFixture<ListChecklistMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChecklistMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChecklistMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
