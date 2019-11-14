import { TestBed } from '@angular/core/testing';

import { ServiceObjetService } from './service-objet.service';

describe('ServiceObjetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceObjetService = TestBed.get(ServiceObjetService);
    expect(service).toBeTruthy();
  });
});
