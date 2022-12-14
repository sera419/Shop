import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraidsComponent } from './braids.component';

describe('BraidsComponent', () => {
  let component: BraidsComponent;
  let fixture: ComponentFixture<BraidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
