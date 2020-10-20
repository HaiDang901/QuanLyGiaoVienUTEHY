import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopDongLdComponent } from './hop-dong-ld.component';

describe('HopDongLdComponent', () => {
  let component: HopDongLdComponent;
  let fixture: ComponentFixture<HopDongLdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HopDongLdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HopDongLdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
