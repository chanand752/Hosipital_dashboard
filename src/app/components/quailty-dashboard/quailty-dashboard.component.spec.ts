import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuailtyDashboardComponent } from './quailty-dashboard.component';

describe('QuailtyDashboardComponent', () => {
  let component: QuailtyDashboardComponent;
  let fixture: ComponentFixture<QuailtyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuailtyDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuailtyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
