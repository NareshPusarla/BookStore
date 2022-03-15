import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { QuickviewComponent } from './quickview.component';

describe('QuickviewComponent', () => {
  let component: QuickviewComponent;
  let fixture: ComponentFixture<QuickviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickviewComponent ],
      imports:[HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getBookDetail', () => {
    component.getBookDetail()
    expect(component.getBookDetail).toBeTruthy();
  });

  it('addTobag', () => {
    component.addToBag()
    expect(component.addToBag).toBeTruthy();
  });

  it('addToWishlist', () => {
    component.addToWishlist()
    expect(component.addToWishlist).toBeTruthy();
  });

  it('minus', () => {
    component.minus()
    expect(component.minus).toBeTruthy();
  });

});
