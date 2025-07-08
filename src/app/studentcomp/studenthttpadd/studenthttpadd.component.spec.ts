import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenthttpaddComponent } from './studenthttpadd.component';

describe('StudenthttpaddComponent', () => {
  let component: StudenthttpaddComponent;
  let fixture: ComponentFixture<StudenthttpaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudenthttpaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenthttpaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
