import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeschildComponent } from './changeschild.component';

describe('ChangeschildComponent', () => {
  let component: ChangeschildComponent;
  let fixture: ComponentFixture<ChangeschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeschildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
