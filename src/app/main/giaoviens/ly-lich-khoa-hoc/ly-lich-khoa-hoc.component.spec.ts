import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyLichKhoaHocComponent } from './ly-lich-khoa-hoc.component';

describe('LyLichKhoaHocComponent', () => {
  let component: LyLichKhoaHocComponent;
  let fixture: ComponentFixture<LyLichKhoaHocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyLichKhoaHocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyLichKhoaHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
