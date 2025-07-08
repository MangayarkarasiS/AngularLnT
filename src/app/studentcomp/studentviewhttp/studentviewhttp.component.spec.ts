import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewhttpComponent } from './studentviewhttp.component';

describe('StudentviewhttpComponent', () => {
  let component: StudentviewhttpComponent;
  let fixture: ComponentFixture<StudentviewhttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentviewhttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentviewhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
