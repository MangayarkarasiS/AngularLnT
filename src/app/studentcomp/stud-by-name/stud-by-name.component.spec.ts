import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudByNameComponent } from './stud-by-name.component';

describe('StudByNameComponent', () => {
  let component: StudByNameComponent;
  let fixture: ComponentFixture<StudByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudByNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
