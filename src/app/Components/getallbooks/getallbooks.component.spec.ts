import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { QuickviewComponent } from '../quickview/quickview.component';


import { GetallbooksComponent } from './getallbooks.component';

describe('GetallbooksComponent', () => {
  let component: GetallbooksComponent;
  let fixture: ComponentFixture<GetallbooksComponent>;
  let book:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallbooksComponent, FilterPipe ],
      imports:[HttpClientModule, RouterTestingModule, NgxPaginationModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getNotes', () => {
    component.getNotes()
    expect(component.getNotes).toBeTruthy();
  });

  // it('quickview', () => {
  //   component.quickview(book)
  //   expect(component.quickview).toBeTruthy();
  // });

  it('low', () => {
    component.low()
    expect(component.low).toBeTruthy();
  });

  it('high', () => {
    component.high()
    expect(component.high).toBeTruthy();
  });

  it('latest', () => {
    component.latest()
    expect(component.latest).toBeTruthy();
  });
});
