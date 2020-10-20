import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HocVanComponent } from './hoc-van.component';

describe('HocVanComponent', () => {
  let component: HocVanComponent;
  let fixture: ComponentFixture<HocVanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HocVanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HocVanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
