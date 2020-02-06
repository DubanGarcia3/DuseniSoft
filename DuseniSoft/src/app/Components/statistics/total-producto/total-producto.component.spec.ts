import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProductoComponent } from './total-producto.component';

describe('TotalProductoComponent', () => {
  let component: TotalProductoComponent;
  let fixture: ComponentFixture<TotalProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
