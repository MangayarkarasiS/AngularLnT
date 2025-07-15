import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileNgDoChkComponent } from './user-profile-ng-do-chk.component';

describe('UserProfileNgDoChkComponent', () => {
  let component: UserProfileNgDoChkComponent;
  let fixture: ComponentFixture<UserProfileNgDoChkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileNgDoChkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileNgDoChkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
