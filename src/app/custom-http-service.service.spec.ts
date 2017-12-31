import { TestBed, inject } from '@angular/core/testing';

import { CustomHttpServiceService } from './custom-http-service.service';

describe('CustomHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomHttpServiceService]
    });
  });

  it('should be created', inject([CustomHttpServiceService], (service: CustomHttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
