import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyinfoComponent } from './policyinfo.component';

describe('PolicyinfoComponent', () => {
  let component: PolicyinfoComponent;
  let fixture: ComponentFixture<PolicyinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
