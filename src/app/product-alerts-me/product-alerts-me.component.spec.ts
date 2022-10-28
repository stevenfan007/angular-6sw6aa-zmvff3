import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertsMeComponent } from './product-alerts-me.component';

describe('ProductAlertsMeComponent', () => {
  let component: ProductAlertsMeComponent;
  let fixture: ComponentFixture<ProductAlertsMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAlertsMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAlertsMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
