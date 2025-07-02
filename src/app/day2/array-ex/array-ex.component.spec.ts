import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayExComponent } from './array-ex.component';

describe('ArrayExComponent', () => {
  let component: ArrayExComponent;
  let fixture: ComponentFixture<ArrayExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayExComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
