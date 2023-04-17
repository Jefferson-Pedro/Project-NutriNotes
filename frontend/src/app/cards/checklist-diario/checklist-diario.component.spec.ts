import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistDiarioComponent } from './checklist-diario.component';

describe('ChecklistDiarioComponent', () => {
  let component: ChecklistDiarioComponent;
  let fixture: ComponentFixture<ChecklistDiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistDiarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
