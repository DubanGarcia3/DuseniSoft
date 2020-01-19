import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePedidoComponent } from './delete-pedido.component';

describe('DeletePedidoComponent', () => {
  let component: DeletePedidoComponent;
  let fixture: ComponentFixture<DeletePedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
