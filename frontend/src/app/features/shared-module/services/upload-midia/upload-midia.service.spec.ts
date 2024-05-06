import { TestBed } from '@angular/core/testing';

import { UploadMidiaService } from './upload-midia.service';

describe('UploadMidiaService', () => {
  let service: UploadMidiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadMidiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
