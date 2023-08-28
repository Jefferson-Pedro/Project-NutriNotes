import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBusinessComponent } from './list-business.component';

describe('ReadBusinessComponent', () => {
  let component: ReadBusinessComponent;
  let fixture: ComponentFixture<ReadBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
