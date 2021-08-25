import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchScreenComponent } from './watch-screen.component';

describe('WatchScreenComponent', () => {
  let component: WatchScreenComponent;
  let fixture: ComponentFixture<WatchScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
