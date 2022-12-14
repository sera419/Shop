import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaleconComponent } from './calecon.component';

describe('CaleconComponent', () => {
  let component: CaleconComponent;
  let fixture: ComponentFixture<CaleconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaleconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaleconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
