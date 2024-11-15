/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PropertyDetailsResolver.serviceService } from './property-details-resolver.service';

describe('Service: PropertyDetailsResolver.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyDetailsResolver.serviceService]
    });
  });

  it('should ...', inject([PropertyDetailsResolver.serviceService], (service: PropertyDetailsResolver.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
