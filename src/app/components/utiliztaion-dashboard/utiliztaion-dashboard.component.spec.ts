import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtiliztaionDashboardComponent } from './utiliztaion-dashboard.component';

describe('UtiliztaionDashboardComponent', () => {
  let component: UtiliztaionDashboardComponent;
  let fixture: ComponentFixture<UtiliztaionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtiliztaionDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtiliztaionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
