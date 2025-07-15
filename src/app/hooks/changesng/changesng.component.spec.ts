import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesngComponent } from './changesng.component';

describe('ChangesngComponent', () => {
  let component: ChangesngComponent;
  let fixture: ComponentFixture<ChangesngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangesngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangesngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
