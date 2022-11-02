import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianCardComponent } from './physician-card.component';

describe('PhysicianCardComponent', () => {
  let component: PhysicianCardComponent;
  let fixture: ComponentFixture<PhysicianCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicianCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
