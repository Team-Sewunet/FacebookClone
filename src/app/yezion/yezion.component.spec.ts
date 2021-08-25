import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YezionComponent } from './yezion.component';

describe('YezionComponent', () => {
  let component: YezionComponent;
  let fixture: ComponentFixture<YezionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YezionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YezionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
