import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSigninComponent } from './osignin.component';

describe('OSigninComponent', () => {
  let component: OSigninComponent;
  let fixture: ComponentFixture<OSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
