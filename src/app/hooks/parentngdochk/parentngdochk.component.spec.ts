import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentngdochkComponent } from './parentngdochk.component';

describe('ParentngdochkComponent', () => {
  let component: ParentngdochkComponent;
  let fixture: ComponentFixture<ParentngdochkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentngdochkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentngdochkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
