import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationDailyComponent} from './documentation-daily.component';

describe('DocumentationDailyComponent', () => {
  let component: DocumentationDailyComponent;
  let fixture: ComponentFixture<DocumentationDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
