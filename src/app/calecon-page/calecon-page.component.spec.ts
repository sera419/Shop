import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaleconPageComponent } from './calecon-page.component';

describe('CaleconPageComponent', () => {
  let component: CaleconPageComponent;
  let fixture: ComponentFixture<CaleconPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaleconPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaleconPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
