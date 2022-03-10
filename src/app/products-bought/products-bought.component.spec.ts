import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBoughtComponent } from './products-bought.component';

describe('ProductsBoughtComponent', () => {
  let component: ProductsBoughtComponent;
  let fixture: ComponentFixture<ProductsBoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsBoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
