import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMiembroComponent } from './edit-miembro.component';

describe('EditMiembroComponent', () => {
  let component: EditMiembroComponent;
  let fixture: ComponentFixture<EditMiembroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMiembroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
