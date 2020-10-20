import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichDangKiComponent } from './lich-dang-ki.component';

describe('LichDangKiComponent', () => {
  let component: LichDangKiComponent;
  let fixture: ComponentFixture<LichDangKiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichDangKiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichDangKiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
