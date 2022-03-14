import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpserviceService } from './httpservice.service';

describe('HttpserviceService', () => {
  let service: HttpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(HttpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should be created', () => {
  //   service.postData();
  //   expect(service.postData).toBeTruthy();
  // });
});
