import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsigninComponent } from './tsignin.component';

describe('TsigninComponent', () => {
  let component: TsigninComponent;
  let fixture: ComponentFixture<TsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
