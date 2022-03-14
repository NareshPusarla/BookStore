import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports:[HttpClientModule, ReactiveFormsModule, MatSnackBarModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSubmit', () => {
    component.onSubmit()
    expect(component.onSubmit).toBeTruthy();
  });

  it('getItems', () => {
    component.getItems()
    expect(component.getItems).toBeTruthy();
  });

  it('minus', () => {
    const name = fixture.componentInstance;
    component.minus(name)
    expect(component.minus).toBeTruthy();
  });

  it('plus', () => {
    const name = fixture.componentInstance;
    component.plus(name)
    expect(component.plus).toBeTruthy();
  });

  it('showDetails', () => {
    component.showDetails()
    expect(component.showDetails).toBeTruthy();
  });

  it('showOrderDetails', () => {
    component.showOrderDetails()
    expect(component.showOrderDetails).toBeTruthy();
  });

  it('summary', () => {
    component.ordersummary()
    expect(component.ordersummary).toBeTruthy();
  });
});
