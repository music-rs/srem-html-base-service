import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNewComponent } from './profile-new.component';

describe('ProfileNewComponent', () => {
  let component: ProfileNewComponent;
  let fixture: ComponentFixture<ProfileNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
