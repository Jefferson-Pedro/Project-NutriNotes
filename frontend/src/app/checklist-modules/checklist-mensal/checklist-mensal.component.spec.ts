import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistMensalComponent } from './checklist-mensal.component';

describe('ChecklistMensalComponent', () => {
  let component: ChecklistMensalComponent;
  let fixture: ComponentFixture<ChecklistMensalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistMensalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistMensalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
