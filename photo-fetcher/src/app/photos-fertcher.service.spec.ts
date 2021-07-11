import { TestBed } from '@angular/core/testing';

import { PhotosFertcherService } from './photos-fertcher.service';

describe('PhotosFertcherService', () => {
  let service: PhotosFertcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosFertcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
