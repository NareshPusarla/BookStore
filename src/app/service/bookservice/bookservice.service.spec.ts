import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BookserviceService } from './bookservice.service';

describe('BookserviceService', () => {
  let service: BookserviceService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(BookserviceService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
