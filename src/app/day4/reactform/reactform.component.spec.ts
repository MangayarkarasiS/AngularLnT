import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactformComponent } from './reactform.component';

describe('ReactformComponent', () => {
  let component: ReactformComponent;
  let fixture: ComponentFixture<ReactformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
