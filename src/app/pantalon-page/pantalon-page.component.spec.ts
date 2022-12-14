import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantalonPageComponent } from './pantalon-page.component';

describe('PantalonPageComponent', () => {
  let component: PantalonPageComponent;
  let fixture: ComponentFixture<PantalonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantalonPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantalonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
