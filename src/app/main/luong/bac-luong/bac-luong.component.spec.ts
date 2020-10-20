import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacLuongComponent } from './bac-luong.component';

describe('BacLuongComponent', () => {
  let component: BacLuongComponent;
  let fixture: ComponentFixture<BacLuongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacLuongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacLuongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
