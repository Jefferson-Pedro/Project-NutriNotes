import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationMonthlyComponent } from './documentation-container.component';

describe('DocumentationMonthlyComponent', () => {
  let component: DocumentationMonthlyComponent;
  let fixture: ComponentFixture<DocumentationMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
