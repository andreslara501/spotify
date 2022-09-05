import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcardsComponent } from './ocards.component';

describe('OcardsComponent', () => {
  let component: OcardsComponent;
  let fixture: ComponentFixture<OcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
