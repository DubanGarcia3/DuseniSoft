import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPorMiembroComponent } from './total-por-miembro.component';

describe('TotalPorMiembroComponent', () => {
  let component: TotalPorMiembroComponent;
  let fixture: ComponentFixture<TotalPorMiembroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPorMiembroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPorMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
