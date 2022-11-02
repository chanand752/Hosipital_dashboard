import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArDashBoardComponent } from './ar-dash-board.component';

describe('ArDashBoardComponent', () => {
  let component: ArDashBoardComponent;
  let fixture: ComponentFixture<ArDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
