import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TplayerComponent } from './tplayer.component';

describe('TplayerComponent', () => {
  let component: TplayerComponent;
  let fixture: ComponentFixture<TplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
