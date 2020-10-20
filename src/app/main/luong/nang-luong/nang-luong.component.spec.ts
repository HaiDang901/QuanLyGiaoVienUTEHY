import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NangLuongComponent } from './nang-luong.component';

describe('NangLuongComponent', () => {
  let component: NangLuongComponent;
  let fixture: ComponentFixture<NangLuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NangLuongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NangLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
