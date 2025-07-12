import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudHttpEditComponent } from './stud-http-edit.component';

describe('StudHttpEditComponent', () => {
  let component: StudHttpEditComponent;
  let fixture: ComponentFixture<StudHttpEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudHttpEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudHttpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
