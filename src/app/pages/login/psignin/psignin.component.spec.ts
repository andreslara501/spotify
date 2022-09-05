import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsigninComponent } from './psignin.component';

describe('PsigninComponent', () => {
  let component: PsigninComponent;
  let fixture: ComponentFixture<PsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
