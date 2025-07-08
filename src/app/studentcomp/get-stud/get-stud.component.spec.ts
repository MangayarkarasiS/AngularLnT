import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStudComponent } from './get-stud.component';

describe('GetStudComponent', () => {
  let component: GetStudComponent;
  let fixture: ComponentFixture<GetStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetStudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
