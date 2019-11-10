import { TestBed } from '@angular/core/testing';

import { MiembrosService } from './miembros.service';

describe('MiembrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiembrosService = TestBed.get(MiembrosService);
    expect(service).toBeTruthy();
  });
});
