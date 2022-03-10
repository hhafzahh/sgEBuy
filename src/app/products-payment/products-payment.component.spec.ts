import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPaymentComponent } from './products-payment.component';

describe('ProductsPaymentComponent', () => {
  let component: ProductsPaymentComponent;
  let fixture: ComponentFixture<ProductsPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
