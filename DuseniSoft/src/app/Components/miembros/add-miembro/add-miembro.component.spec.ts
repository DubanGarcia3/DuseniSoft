import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMiembroComponent } from './add-miembro.component';

describe('AddMiembroComponent', () => {
  let component: AddMiembroComponent;
  let fixture: ComponentFixture<AddMiembroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMiembroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
