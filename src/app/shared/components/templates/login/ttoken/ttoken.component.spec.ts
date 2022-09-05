import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtokenComponent } from './ttoken.component';

describe('TtokenComponent', () => {
  let component: TtokenComponent;
  let fixture: ComponentFixture<TtokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
