import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMiembroComponent } from './ver-miembro.component';

describe('VerMiembroComponent', () => {
  let component: VerMiembroComponent;
  let fixture: ComponentFixture<VerMiembroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMiembroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
