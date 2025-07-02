import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudviewComponent } from './studview.component';

describe('StudviewComponent', () => {
  let component: StudviewComponent;
  let fixture: ComponentFixture<StudviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
