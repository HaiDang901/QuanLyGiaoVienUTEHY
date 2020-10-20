import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgachCongChucComponent } from './ngach-cong-chuc.component';

describe('NgachCongChucComponent', () => {
  let component: NgachCongChucComponent;
  let fixture: ComponentFixture<NgachCongChucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgachCongChucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgachCongChucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
