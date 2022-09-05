import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcardssectionsComponent } from './ocardssections.component';

describe('OcardssectionsComponent', () => {
  let component: OcardssectionsComponent;
  let fixture: ComponentFixture<OcardssectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcardssectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcardssectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
