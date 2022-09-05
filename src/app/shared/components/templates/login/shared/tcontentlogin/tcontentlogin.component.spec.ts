import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcontentloginComponent } from './tcontentlogin.component';

describe('TcontentloginComponent', () => {
  let component: TcontentloginComponent;
  let fixture: ComponentFixture<TcontentloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcontentloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcontentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
